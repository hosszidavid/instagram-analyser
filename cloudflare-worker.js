/**
 * Instagram Followers Analyzer - Public Google Drive Bridge
 *
 * Purpose:
 * - No Google Cloud project
 * - No Google Drive API key
 * - No OAuth
 * - No stored Instagram data
 *
 * The worker only fetches already-public Google Drive pages/files and returns
 * a small JSON listing or proxies the requested public JSON file.
 *
 * IMPORTANT:
 * This relies on Google's public embedded folder HTML, which is not a formal
 * listing API and can therefore change in the future.
 */

const DRIVE_HOSTS = new Set([
  "drive.google.com",
  "docs.google.com",
  "drive.usercontent.google.com"
]);

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }));
    }

    try {
      if (url.pathname === "/health") {
        return cors(json({ ok: true, mode: "public-drive-bridge" }));
      }

      if (url.pathname === "/list") {
        const folderId = safeId(url.searchParams.get("folderId"));
        if (!folderId) return cors(json({ error: "Invalid folderId" }, 400));

        const resourceKey = safeResourceKey(url.searchParams.get("resourceKey"));
        const listingUrl = new URL("https://drive.google.com/embeddedfolderview");
        listingUrl.searchParams.set("id", folderId);
        if (resourceKey) listingUrl.searchParams.set("resourcekey", resourceKey);
        listingUrl.hash = "list";

        const upstream = await fetch(listingUrl.toString(), {
          headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept-Language": "en-US,en;q=0.9"
          },
          redirect: "follow"
        });

        if (!upstream.ok) {
          return cors(json({
            error: `Google Drive folder request failed (${upstream.status})`
          }, 502));
        }

        const html = await upstream.text();
        const items = parseEmbeddedFolder(html);

        return cors(json({
          folderId,
          items,
          source: "google-drive-public-embedded-folder"
        }));
      }

      if (url.pathname === "/file") {
        const fileId = safeId(url.searchParams.get("fileId"));
        if (!fileId) return cors(json({ error: "Invalid fileId" }, 400));

        const resourceKey = safeResourceKey(url.searchParams.get("resourceKey"));
        const fileUrl = new URL("https://drive.usercontent.google.com/download");
        fileUrl.searchParams.set("id", fileId);
        fileUrl.searchParams.set("export", "download");
        fileUrl.searchParams.set("confirm", "t");
        if (resourceKey) fileUrl.searchParams.set("resourcekey", resourceKey);

        const upstream = await fetch(fileUrl.toString(), {
          redirect: "follow",
          headers: { "User-Agent": "Mozilla/5.0" }
        });

        if (!upstream.ok) {
          return cors(json({
            error: `Google Drive file request failed (${upstream.status})`
          }, 502));
        }

        const contentType = upstream.headers.get("content-type") || "application/octet-stream";
        const headers = new Headers({
          "content-type": contentType,
          "cache-control": "no-store"
        });

        return cors(new Response(upstream.body, {
          status: 200,
          headers
        }));
      }

      return cors(json({
        ok: true,
        endpoints: ["/health", "/list?folderId=...", "/file?fileId=..."]
      }));
    } catch (error) {
      return cors(json({ error: String(error?.message || error) }, 500));
    }
  }
};

function parseEmbeddedFolder(html) {
  const entries = new Map();

  // Google Drive folder links
  const folderPatterns = [
    /<a\b[^>]*href=["']([^"']*\/drive\/folders\/([A-Za-z0-9_-]+)[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi,
    /<a\b[^>]*href=["']([^"']*\/folders\/([A-Za-z0-9_-]+)[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi
  ];

  for (const pattern of folderPatterns) {
    let m;
    while ((m = pattern.exec(html))) {
      const href = decodeHtml(m[1]);
      const id = m[2];
      const name = cleanText(m[3]) || getAttrNear(html, m.index, "aria-label") || "Folder";
      const resourceKey = getQuery(href, "resourcekey");
      entries.set(`folder:${id}`, {
        id,
        name,
        mimeType: "application/vnd.google-apps.folder",
        resourceKey: resourceKey || null
      });
    }
  }

  // Common Drive file links
  const filePatterns = [
    /<a\b[^>]*href=["']([^"']*\/file\/d\/([A-Za-z0-9_-]+)[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi,
    /<a\b[^>]*href=["']([^"']*[?&]id=([A-Za-z0-9_-]+)[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi
  ];

  for (const pattern of filePatterns) {
    let m;
    while ((m = pattern.exec(html))) {
      const href = decodeHtml(m[1]);
      const id = m[2];
      const name = cleanText(m[3]) || getAttrNear(html, m.index, "aria-label") || "File";
      if (!id || entries.has(`folder:${id}`)) continue;
      const resourceKey = getQuery(href, "resourcekey");
      entries.set(`file:${id}`, {
        id,
        name,
        mimeType: "application/octet-stream",
        resourceKey: resourceKey || null
      });
    }
  }

  // Fallback for data-id / data-tooltip style markup.
  const rowPattern = /<[^>]+(?:data-id|data-tooltip-id)=["']([A-Za-z0-9_-]{10,})["'][^>]*>([\s\S]{0,1800}?)(?=<[^>]+(?:data-id|data-tooltip-id)=["']|$)/gi;
  let row;
  while ((row = rowPattern.exec(html))) {
    const id = row[1];
    if ([...entries.values()].some(e => e.id === id)) continue;

    const block = row[0] + row[2];
    const label =
      attr(block, "aria-label") ||
      attr(block, "data-tooltip") ||
      attr(block, "title") ||
      cleanText(block);

    if (!label) continue;
    entries.set(`file:${id}`, {
      id,
      name: label.slice(0, 240),
      mimeType: "application/octet-stream",
      resourceKey: null
    });
  }

  return [...entries.values()]
    .filter(item => item.id && item.name)
    .filter(item => !/^(my drive|shared with me|google drive)$/i.test(item.name.trim()));
}

function safeId(value) {
  const v = String(value || "").trim();
  return /^[A-Za-z0-9_-]{10,}$/.test(v) ? v : null;
}

function safeResourceKey(value) {
  const v = String(value || "").trim();
  return /^[A-Za-z0-9_-]{5,}$/.test(v) ? v : null;
}

function getQuery(href, name) {
  try {
    return new URL(href, "https://drive.google.com").searchParams.get(name);
  } catch {
    return null;
  }
}

function attr(html, name) {
  const rx = new RegExp(`${name}=["']([^"']+)["']`, "i");
  const m = html.match(rx);
  return m ? decodeHtml(m[1]) : "";
}

function getAttrNear(html, index, name) {
  return attr(html.slice(Math.max(0, index - 500), index + 1200), name);
}

function cleanText(html) {
  return decodeHtml(String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim());
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function json(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

function cors(response) {
  const headers = new Headers(response.headers);
  headers.set("access-control-allow-origin", "*");
  headers.set("access-control-allow-methods", "GET, OPTIONS");
  headers.set("access-control-allow-headers", "content-type");
  headers.set("x-content-type-options", "nosniff");
  return new Response(response.body, {
    status: response.status,
    headers
  });
}
