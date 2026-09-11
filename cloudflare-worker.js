/**
 * Instagram Followers Analyzer - Public Google Drive Bridge
 *
 * Purpose:
 * - No Google Cloud project
 * - No Google Drive API key
 * - No OAuth
 * - No stored Instagram export data
 * - Optional private Heart Sync state in Cloudflare KV
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
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }));
    }

    try {
      if (url.pathname === "/health") {
        return cors(json({ ok: true, mode: "public-drive-bridge" }));
      }

      if (url.pathname === "/hearts" && request.method === "GET") {
        const auth = authorizeHeartSync(request, env);
        if (!auth.ok) return cors(json({ error: auth.error }, auth.status));

        const state = await readHeartState(env);
        return cors(json({
          ok: true,
          version: 1,
          records: state.records
        }));
      }

      if (url.pathname === "/hearts/sync" && request.method === "POST") {
        const auth = authorizeHeartSync(request, env);
        if (!auth.ok) return cors(json({ error: auth.error }, auth.status));

        const body = await readJsonBody(request);
        const incoming = sanitizeHeartRecords(body?.records);
        const state = await readHeartState(env);
        const merged = mergeHeartRecords(state.records, incoming);

        await writeHeartState(env, merged);

        return cors(json({
          ok: true,
          version: 1,
          records: merged
        }));
      }

      if (url.pathname === "/hearts/set" && request.method === "POST") {
        const auth = authorizeHeartSync(request, env);
        if (!auth.ok) return cors(json({ error: auth.error }, auth.status));

        const body = await readJsonBody(request);
        const username = normalizeHeartUsername(body?.username);
        const updatedAt = normalizeUpdatedAt(body?.updatedAt);

        if (!username || typeof body?.hearted !== "boolean" || updatedAt === null) {
          return cors(json({ error: "Invalid heart mutation" }, 400));
        }

        const state = await readHeartState(env);
        const current = state.records[username];
        const currentAt = normalizeUpdatedAt(current?.updatedAt) ?? -1;

        if (!current || updatedAt > currentAt) {
          state.records[username] = {
            hearted: body.hearted,
            updatedAt
          };
          await writeHeartState(env, state.records);
        }

        return cors(json({
          ok: true,
          username,
          record: state.records[username]
        }));
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

        // Preserve the public Drive file modification time when Google exposes it.
        // The frontend uses it only for ordering complete Following snapshots.
        const upstreamLastModified = upstream.headers.get("last-modified");
        if (upstreamLastModified) {
          headers.set("x-ifa-source-last-modified", upstreamLastModified);
        }

        return cors(new Response(upstream.body, {
          status: 200,
          headers
        }));
      }

      return cors(json({
        ok: true,
        endpoints: ["/health", "/list?folderId=...", "/file?fileId=...", "/hearts", "/hearts/sync", "/hearts/set"]
      }));
    } catch (error) {
      return cors(json({ error: String(error?.message || error) }, 500));
    }
  }
};


const HEART_STATE_KEY = "hearts:v1";

function authorizeHeartSync(request, env) {
  if (!env?.HEARTS_KV) {
    return { ok: false, status: 503, error: "HEARTS_KV binding is not configured" };
  }

  const expected = String(env?.HEARTS_SYNC_KEY || "");
  if (!expected) {
    return { ok: false, status: 503, error: "HEARTS_SYNC_KEY is not configured" };
  }

  const header = String(request.headers.get("authorization") || "");
  const provided = header.replace(/^Bearer\s+/i, "");

  if (!provided || !constantTimeEqual(provided, expected)) {
    return { ok: false, status: 401, error: "Unauthorized" };
  }

  return { ok: true };
}

function constantTimeEqual(a, b) {
  const left = String(a);
  const right = String(b);
  const length = Math.max(left.length, right.length);
  let mismatch = left.length ^ right.length;

  for (let i = 0; i < length; i++) {
    mismatch |= (left.charCodeAt(i) || 0) ^ (right.charCodeAt(i) || 0);
  }

  return mismatch === 0;
}

async function readJsonBody(request) {
  const text = await request.text();
  if (text.length > 500000) throw new Error("Request body too large");
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new Error("Invalid JSON body");
  }
}

function normalizeHeartUsername(value) {
  const username = String(value || "").trim().toLowerCase();
  if (!username || username.length > 100) return null;
  return /^[a-z0-9._]+$/.test(username) ? username : null;
}

function normalizeUpdatedAt(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0) return null;
  return Math.floor(n);
}

function sanitizeHeartRecords(value) {
  const out = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return out;

  let count = 0;
  for (const [rawUsername, row] of Object.entries(value)) {
    if (++count > 10000) break;

    const username = normalizeHeartUsername(rawUsername);
    const updatedAt = normalizeUpdatedAt(row?.updatedAt);
    if (!username || typeof row?.hearted !== "boolean" || updatedAt === null) continue;

    out[username] = {
      hearted: row.hearted,
      updatedAt
    };
  }

  return out;
}

function mergeHeartRecords(base, incoming) {
  const merged = { ...(base || {}) };

  for (const [username, row] of Object.entries(incoming || {})) {
    const current = merged[username];
    const incomingAt = normalizeUpdatedAt(row?.updatedAt) ?? 0;
    const currentAt = normalizeUpdatedAt(current?.updatedAt) ?? -1;

    // Equal timestamps keep the already stored value. This is important for
    // v0.18 legacy migrations, which intentionally use timestamp 0.
    if (!current || incomingAt > currentAt) {
      merged[username] = {
        hearted: row.hearted === true,
        updatedAt: incomingAt
      };
    }
  }

  return merged;
}

async function readHeartState(env) {
  const stored = await env.HEARTS_KV.get(HEART_STATE_KEY, { type: "json" });
  const records = sanitizeHeartRecords(stored?.records || {});
  return { version: 1, records };
}

async function writeHeartState(env, records) {
  await env.HEARTS_KV.put(HEART_STATE_KEY, JSON.stringify({
    version: 1,
    updatedAt: Date.now(),
    records: sanitizeHeartRecords(records)
  }));
}

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
  headers.set("access-control-allow-methods", "GET, POST, OPTIONS");
  headers.set("access-control-allow-headers", "content-type, authorization");
  headers.set("access-control-expose-headers", "x-ifa-source-last-modified");
  headers.set("x-content-type-options", "nosniff");
  return new Response(response.body, {
    status: response.status,
    headers
  });
}
