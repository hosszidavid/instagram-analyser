/**
 * Followers Analyzer - Local Archive Store
 *
 * Role:
 * - persists the normalized analyzer history in IndexedDB;
 * - keeps the portable database schema independent from the UI;
 * - stores Daily Following history as deltas instead of repeating the complete
 *   3k+ account snapshot every day;
 * - serializes relationship datasets/checkpoints for database export/import.
 *
 * The Drive archive remains the raw source of truth. This store is a durable,
 * rebuildable local archive that can also be carried to another device through
 * Export Database / Import Database.
 */
(() => {
  "use strict";

  const DB_NAME = "followers-analyzer-local-archive";
  const DB_VERSION = 1;
  const STORE_NAME = "kv";
  const ARCHIVE_KEY = "archive";
  const ARCHIVE_SCHEMA_VERSION = 2;

  function emptyArchive() {
    const now = new Date().toISOString();
    return {
      schemaVersion: ARCHIVE_SCHEMA_VERSION,
      createdAt: now,
      updatedAt: now,
      archiveThrough: null,
      processedFiles: {},
      databaseFilesSeen: {},
      followerEvents: { primary: [], second: [] },
      following: {
        primary: { base: null, deltas: [] },
        second: { base: null, deltas: [] }
      },
      recentlyUnfollowed: [],
      identityFbids: {},
      insightFiles: [],
      insightSnapshots: [],
      reference: null,
      fullCheckpoints: []
    };
  }

  function normalizeTimeline(value) {
    if (!value || typeof value !== "object") return { base: null, deltas: [] };
    return {
      base: value.base && typeof value.base === "object" ? value.base : null,
      deltas: Array.isArray(value.deltas) ? value.deltas.filter(Boolean) : []
    };
  }

  function normalizeArchive(value) {
    const base = emptyArchive();
    if (!value || typeof value !== "object") return base;
    return {
      ...base,
      ...value,
      schemaVersion: ARCHIVE_SCHEMA_VERSION,
      processedFiles: value.processedFiles && typeof value.processedFiles === "object" && !Array.isArray(value.processedFiles) ? value.processedFiles : {},
      databaseFilesSeen: value.databaseFilesSeen && typeof value.databaseFilesSeen === "object" && !Array.isArray(value.databaseFilesSeen) ? value.databaseFilesSeen : {},
      followerEvents: {
        primary: Array.isArray(value.followerEvents?.primary) ? value.followerEvents.primary : [],
        second: Array.isArray(value.followerEvents?.second) ? value.followerEvents.second : []
      },
      following: {
        primary: normalizeTimeline(value.following?.primary),
        second: normalizeTimeline(value.following?.second)
      },
      recentlyUnfollowed: Array.isArray(value.recentlyUnfollowed) ? value.recentlyUnfollowed : [],
      identityFbids: value.identityFbids && typeof value.identityFbids === "object" && !Array.isArray(value.identityFbids) ? value.identityFbids : {},
      insightFiles: Array.isArray(value.insightFiles) ? value.insightFiles : [],
      insightSnapshots: Array.isArray(value.insightSnapshots) ? value.insightSnapshots : [],
      reference: value.reference && typeof value.reference === "object" ? value.reference : null,
      fullCheckpoints: Array.isArray(value.fullCheckpoints) ? value.fullCheckpoints : []
    };
  }

  function openDb() {
    return new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("IndexedDB is not available in this browser."));
        return;
      }
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME);
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("IndexedDB could not be opened."));
    });
  }

  async function load() {
    const db = await openDb();
    try {
      const value = await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readonly");
        const req = tx.objectStore(STORE_NAME).get(ARCHIVE_KEY);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
      return normalizeArchive(value);
    } finally {
      db.close();
    }
  }

  async function save(value) {
    const archive = normalizeArchive(value);
    archive.updatedAt = new Date().toISOString();
    const db = await openDb();
    try {
      await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        tx.objectStore(STORE_NAME).put(archive, ARCHIVE_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error || new Error("IndexedDB write was aborted."));
      });
      return archive;
    } finally {
      db.close();
    }
  }

  async function clear() {
    const db = await openDb();
    try {
      await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        tx.objectStore(STORE_NAME).delete(ARCHIVE_KEY);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } finally {
      db.close();
    }
  }

  function rowToCompact(row) {
    if (!row || !row.username) return null;
    return [String(row.username), Number.isFinite(Number(row.timestamp)) ? Number(row.timestamp) : null];
  }

  function compactToRow(row) {
    if (!Array.isArray(row) || !row[0]) return null;
    const username = String(row[0]);
    const timestamp = Number.isFinite(Number(row[1])) ? Number(row[1]) : null;
    return {
      username,
      href: `https://www.instagram.com/${encodeURIComponent(username)}/`,
      timestamp
    };
  }

  function mapToCompact(map) {
    const rows = [];
    for (const row of map?.values?.() || []) {
      const compact = rowToCompact(row);
      if (compact) rows.push(compact);
    }
    rows.sort((a, b) => String(a[0]).localeCompare(String(b[0])));
    return rows;
  }

  function compactToMap(rows) {
    const out = new Map();
    for (const compact of Array.isArray(rows) ? rows : []) {
      const row = compactToRow(compact);
      if (!row) continue;
      out.set(row.username.toLowerCase(), row);
    }
    return out;
  }

  function serializeDataset(dataset) {
    return {
      followers: mapToCompact(dataset?.followers),
      following: mapToCompact(dataset?.following)
    };
  }

  function deserializeDataset(value) {
    const followers = compactToMap(value?.followers);
    const following = compactToMap(value?.following);
    const notFollowingBack = new Map();
    for (const [key, row] of following) if (!followers.has(key)) notFollowingBack.set(key, row);
    return { followers, following, notFollowingBack };
  }

  function serializeCheckpoint(checkpoint, extra = {}) {
    if (!checkpoint?.dataset) return null;
    return {
      dataset: serializeDataset(checkpoint.dataset),
      insights: checkpoint.insights || null,
      recentlyUnfollowed: Array.isArray(checkpoint.recentlyUnfollowed) ? checkpoint.recentlyUnfollowed : [],
      date: checkpoint.date || null,
      timestamp: checkpoint.timestamp ?? null,
      evidenceCutoff: checkpoint.evidenceCutoff ?? null,
      followingGeneratedAt: checkpoint.followingGeneratedAt ?? null,
      followingClockKey: checkpoint.followingClockKey ?? null,
      followingClockOrigin: checkpoint.followingClockOrigin ?? null,
      source: checkpoint.source || "database",
      sourceCount: checkpoint.sourceCount || 0,
      label: checkpoint.label || "",
      sourceFileIds: Array.isArray(checkpoint.sourceFileIds) ? checkpoint.sourceFileIds : (Array.isArray(extra.sourceFileIds) ? extra.sourceFileIds : []),
      updatedAt: extra.updatedAt || checkpoint.updatedAt || new Date().toISOString()
    };
  }

  function deserializeCheckpoint(value) {
    if (!value?.dataset) return null;
    return {
      dataset: deserializeDataset(value.dataset),
      insights: value.insights || null,
      recentlyUnfollowed: Array.isArray(value.recentlyUnfollowed) ? value.recentlyUnfollowed : [],
      date: value.date || null,
      timestamp: value.timestamp ?? null,
      evidenceCutoff: value.evidenceCutoff ?? null,
      followingGeneratedAt: value.followingGeneratedAt ?? null,
      followingClockKey: value.followingClockKey ?? null,
      followingClockOrigin: value.followingClockOrigin ?? null,
      source: value.source || "database",
      sourceCount: value.sourceCount || 0,
      label: value.label || "",
      sourceFileIds: Array.isArray(value.sourceFileIds) ? value.sourceFileIds : [],
      updatedAt: value.updatedAt || null
    };
  }

  function timelineEntries(timeline) {
    const normalized = normalizeTimeline(timeline);
    return normalized.base ? [normalized.base, ...normalized.deltas] : [];
  }

  function applyTimelineEntry(target, entry, isBase = false) {
    if (isBase) {
      target.clear();
      for (const row of compactToMap(entry?.rows)) target.set(row[0], row[1]);
      return target;
    }
    for (const compact of entry?.removed || []) {
      const row = compactToRow(compact);
      if (row) target.delete(row.username.toLowerCase());
    }
    for (const compact of entry?.added || []) {
      const row = compactToRow(compact);
      if (row) target.set(row.username.toLowerCase(), row);
    }
    return target;
  }

  function reconstructTimelineAt(timeline, index = Infinity) {
    const entries = timelineEntries(timeline);
    const map = new Map();
    const end = Math.min(entries.length - 1, Number.isFinite(index) ? index : entries.length - 1);
    for (let i = 0; i <= end; i++) applyTimelineEntry(map, entries[i], i === 0);
    return map;
  }

  function diffMaps(previous, current) {
    const added = [];
    const removed = [];
    for (const [key, row] of current || []) {
      const old = previous?.get(key);
      if (!old || Number(old.timestamp) !== Number(row.timestamp) || old.username !== row.username) {
        const compact = rowToCompact(row);
        if (compact) added.push(compact);
      }
    }
    for (const [key, row] of previous || []) {
      if (!current?.has(key)) {
        const compact = rowToCompact(row);
        if (compact) removed.push(compact);
      }
    }
    added.sort((a, b) => String(a[0]).localeCompare(String(b[0])));
    removed.sort((a, b) => String(a[0]).localeCompare(String(b[0])));
    return { added, removed };
  }

  function maxTimestamp(map) {
    let max = null;
    for (const row of map?.values?.() || []) {
      const value = Number(row.timestamp);
      if (Number.isFinite(value) && (max == null || value > max)) max = value;
    }
    return max;
  }

  function entryMeta(entry) {
    return {
      date: entry?.date || null,
      generatedAt: Number.isFinite(Number(entry?.generatedAt)) ? Number(entry.generatedAt) : null,
      maxTimestamp: Number.isFinite(Number(entry?.maxTimestamp)) ? Number(entry.maxTimestamp) : null,
      count: Number.isFinite(Number(entry?.count)) ? Number(entry.count) : 0,
      sourceFileId: entry?.sourceFileId || null
    };
  }

  function isMetaFresher(candidate, current) {
    if (!current) return true;
    if (!candidate) return false;
    const cGenerated = candidate.generatedAt ?? -Infinity;
    const oGenerated = current.generatedAt ?? -Infinity;
    if (cGenerated !== oGenerated) return cGenerated > oGenerated;
    const cMax = candidate.maxTimestamp ?? -Infinity;
    const oMax = current.maxTimestamp ?? -Infinity;
    if (cMax !== oMax) return cMax > oMax;
    return (candidate.count || 0) >= (current.count || 0);
  }

  function snapshotEntryMeta(snapshot, sourceFileId = null, packageKey = null) {
    return {
      date: snapshot.date || null,
      generatedAt: snapshot.generatedAt ?? null,
      clockKey: snapshot.clockKey ?? null,
      clockOrigin: snapshot.clockOrigin ?? null,
      sourceFileId: sourceFileId || snapshot.sourceFileId || null,
      packageKey: packageKey || snapshot.packageKey || null,
      count: snapshot.following?.size || 0,
      maxTimestamp: maxTimestamp(snapshot.following)
    };
  }

  function writeEntriesToTimeline(timeline, entries) {
    timeline.base = entries[0] || null;
    timeline.deltas = entries.slice(1);
  }

  /**
   * Inserts/replaces one complete Following snapshot into a compact delta chain.
   * Normal syncs append at the end. The replacement/insertion path exists so a
   * late file or fresher same-day export can still be integrated without keeping
   * every historical complete snapshot in memory or in IndexedDB.
   */
  function upsertFollowingSnapshot(timelineValue, snapshot, sourceFileId = null, packageKey = null, force = false) {
    if (!snapshot?.date || !snapshot?.following?.size) return { changed: false, reason: "invalid" };
    const timeline = normalizeTimeline(timelineValue);
    const entries = timelineEntries(timeline);
    const meta = snapshotEntryMeta(snapshot, sourceFileId, packageKey);
    const newMap = new Map(snapshot.following);

    if (!entries.length) {
      timeline.base = { ...meta, rows: mapToCompact(newMap) };
      timeline.deltas = [];
      return { changed: true, timeline, reason: "base" };
    }

    let exactIndex = entries.findIndex(entry => entry.date === meta.date);
    if (exactIndex >= 0) {
      const existingMeta = entryMeta(entries[exactIndex]);
      if (!force && !isMetaFresher(meta, existingMeta)) return { changed: false, timeline, reason: "older-same-day" };

      const previous = exactIndex === 0 ? new Map() : reconstructTimelineAt(timeline, exactIndex - 1);
      const oldTarget = reconstructTimelineAt(timeline, exactIndex);
      const oldNext = exactIndex + 1 < entries.length ? reconstructTimelineAt(timeline, exactIndex + 1) : null;

      entries[exactIndex] = exactIndex === 0
        ? { ...meta, rows: mapToCompact(newMap) }
        : { ...meta, ...diffMaps(previous, newMap) };

      if (oldNext) {
        const nextMeta = { ...entries[exactIndex + 1] };
        delete nextMeta.added;
        delete nextMeta.removed;
        delete nextMeta.rows;
        entries[exactIndex + 1] = { ...nextMeta, ...diffMaps(newMap, oldNext) };
      }
      writeEntriesToTimeline(timeline, entries);
      return { changed: true, timeline, reason: "replace" };
    }

    const insertIndex = entries.findIndex(entry => String(entry.date || "") > String(meta.date || ""));
    if (insertIndex < 0) {
      const previous = reconstructTimelineAt(timeline);
      entries.push({ ...meta, ...diffMaps(previous, newMap) });
      writeEntriesToTimeline(timeline, entries);
      return { changed: true, timeline, reason: "append" };
    }

    const previous = insertIndex === 0 ? new Map() : reconstructTimelineAt(timeline, insertIndex - 1);
    const oldNext = reconstructTimelineAt(timeline, insertIndex);
    const inserted = insertIndex === 0
      ? { ...meta, rows: mapToCompact(newMap) }
      : { ...meta, ...diffMaps(previous, newMap) };

    if (insertIndex === 0) {
      const oldBaseMeta = { ...entries[0] };
      delete oldBaseMeta.rows;
      entries[0] = inserted;
      entries.splice(1, 0, { ...oldBaseMeta, ...diffMaps(newMap, oldNext) });
    } else {
      entries.splice(insertIndex, 0, inserted);
      const nextMeta = { ...entries[insertIndex + 1] };
      delete nextMeta.added;
      delete nextMeta.removed;
      delete nextMeta.rows;
      entries[insertIndex + 1] = { ...nextMeta, ...diffMaps(newMap, oldNext) };
    }

    writeEntriesToTimeline(timeline, entries);
    return { changed: true, timeline, reason: "insert" };
  }

  function timelineLastDate(timeline) {
    return timelineEntries(timeline).at(-1)?.date || null;
  }

  function archiveLatestDate(archiveValue) {
    const archive = normalizeArchive(archiveValue);
    const dates = [];
    for (const role of ["primary", "second"]) {
      const timelineDate = timelineLastDate(archive.following[role]);
      if (timelineDate) dates.push(timelineDate);
      for (const row of archive.followerEvents[role]) if (row?.sourceDate) dates.push(row.sourceDate);
    }
    for (const row of archive.insightSnapshots) if (row?.id) dates.push(row.id);
    for (const row of archive.fullCheckpoints) if (row?.date) dates.push(row.date);
    return dates.sort().at(-1) || null;
  }

  function mergeUniqueRows(a, b, keyFn) {
    const map = new Map();
    for (const row of [...(a || []), ...(b || [])]) {
      const key = keyFn(row);
      if (key) map.set(key, row);
    }
    return [...map.values()];
  }

  function* timelineSnapshots(timeline) {
    const entries = timelineEntries(timeline);
    const current = new Map();
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      applyTimelineEntry(current, entry, i === 0);
      yield {
        date: entry.date || null,
        generatedAt: entry.generatedAt ?? null,
        clockKey: entry.clockKey ?? null,
        clockOrigin: entry.clockOrigin ?? null,
        sourceFileId: entry.sourceFileId || null,
        packageKey: entry.packageKey || null,
        following: new Map(current)
      };
    }
  }

  function mergeTimelines(a, b) {
    const left = timelineSnapshots(a);
    const right = timelineSnapshots(b);
    let l = left.next(), r = right.next();
    let result = { base: null, deltas: [] };
    let previous = null;

    const append = snapshot => {
      if (!snapshot?.date || !snapshot?.following) return;
      const meta = snapshotEntryMeta(snapshot, snapshot.sourceFileId, snapshot.packageKey);
      if (!result.base) result.base = { ...meta, rows: mapToCompact(snapshot.following) };
      else result.deltas.push({ ...meta, ...diffMaps(previous, snapshot.following) });
      previous = new Map(snapshot.following);
    };

    while (!l.done || !r.done) {
      if (r.done) { append(l.value); l = left.next(); continue; }
      if (l.done) { append(r.value); r = right.next(); continue; }
      const ld = String(l.value?.date || ""), rd = String(r.value?.date || "");
      if (ld < rd) { append(l.value); l = left.next(); continue; }
      if (rd < ld) { append(r.value); r = right.next(); continue; }

      const lm = snapshotEntryMeta(l.value, l.value.sourceFileId, l.value.packageKey);
      const rm = snapshotEntryMeta(r.value, r.value.sourceFileId, r.value.packageKey);
      append(isMetaFresher(rm, lm) ? r.value : l.value);
      l = left.next(); r = right.next();
    }
    return result;
  }

  function checkpointSignature(cp) {
    return [cp?.date || "", cp?.followingGeneratedAt ?? cp?.evidenceCutoff ?? cp?.timestamp ?? "", cp?.dataset?.followers?.length || 0, cp?.dataset?.following?.length || 0].join("|");
  }

  /** Merge is intentionally monotonic: imported archives add/upgrade evidence. */
  function mergeArchives(localValue, incomingValue) {
    const local = normalizeArchive(localValue);
    const incoming = normalizeArchive(incomingValue);
    const merged = normalizeArchive({ ...local });

    merged.createdAt = local.createdAt || incoming.createdAt || new Date().toISOString();
    merged.processedFiles = { ...incoming.processedFiles, ...local.processedFiles };
    merged.databaseFilesSeen = { ...incoming.databaseFilesSeen, ...local.databaseFilesSeen };

    for (const role of ["primary", "second"]) {
      merged.followerEvents[role] = mergeUniqueRows(
        local.followerEvents[role], incoming.followerEvents[role],
        row => {
          const username = String(row?.username || "").toLowerCase();
          const timestamp = Number.isFinite(Number(row?.timestamp)) ? Number(row.timestamp) : null;
          return timestamp != null ? `${username}|${timestamp}` : `${username}|day:${row?.sourceDate || ""}`;
        }
      );
      merged.following[role] = mergeTimelines(local.following[role], incoming.following[role]);
    }

    merged.recentlyUnfollowed = mergeUniqueRows(
      local.recentlyUnfollowed, incoming.recentlyUnfollowed,
      row => `${row?.fbid || row?.username || ""}|${row?.timestamp ?? ""}`
    );
    merged.identityFbids = { ...incoming.identityFbids, ...local.identityFbids };

    merged.insightFiles = mergeUniqueRows(
      local.insightFiles, incoming.insightFiles,
      row => `${row?.sourceFileId || row?.file || ""}|${row?.kind || ""}`
    );

    const snapshots = new Map();
    const incomingNewer = String(incoming.archiveThrough || "") > String(local.archiveThrough || "");
    const snapshotOrder = incomingNewer
      ? [...local.insightSnapshots, ...incoming.insightSnapshots]
      : [...incoming.insightSnapshots, ...local.insightSnapshots];
    for (const row of snapshotOrder) if (row?.id) snapshots.set(row.id, row);
    merged.insightSnapshots = [...snapshots.values()].sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

    const refs = [local.reference, incoming.reference].filter(Boolean).sort((a, b) => String(a.updatedAt || "").localeCompare(String(b.updatedAt || "")));
    merged.reference = refs.at(-1) || null;

    const fulls = new Map();
    for (const cp of [...incoming.fullCheckpoints, ...local.fullCheckpoints]) fulls.set(checkpointSignature(cp), cp);
    merged.fullCheckpoints = [...fulls.values()].sort((a, b) =>
      (Number(a.followingGeneratedAt ?? a.evidenceCutoff ?? a.timestamp ?? 0) - Number(b.followingGeneratedAt ?? b.evidenceCutoff ?? b.timestamp ?? 0)) ||
      String(a.date || "").localeCompare(String(b.date || ""))
    );

    merged.archiveThrough = [local.archiveThrough, incoming.archiveThrough, archiveLatestDate(merged)].filter(Boolean).sort().at(-1) || null;
    merged.updatedAt = new Date().toISOString();
    return merged;
  }

  window.IFA_ARCHIVE_STORE = {
    ARCHIVE_SCHEMA_VERSION,
    emptyArchive,
    normalizeArchive,
    load,
    save,
    clear,
    rowToCompact,
    compactToRow,
    mapToCompact,
    compactToMap,
    serializeDataset,
    deserializeDataset,
    serializeCheckpoint,
    deserializeCheckpoint,
    timelineEntries,
    applyTimelineEntry,
    reconstructTimelineAt,
    diffMaps,
    entryMeta,
    isMetaFresher,
    upsertFollowingSnapshot,
    timelineLastDate,
    timelineSnapshots,
    mergeTimelines,
    archiveLatestDate,
    mergeArchives
  };
})();
