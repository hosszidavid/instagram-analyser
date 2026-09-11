# Instagram Followers Analyzer v0.20

## Fő navigáció
- Overview
- Followers
- Insights
- Cohorts

## Insights trend grafikon
A kézzel mentett Insights snapshotokból egy közös, kapcsolható grafikon épül.

Kapcsolható sorozatok:
- Followers
- Following
- Follows
- Unfollows
- Accounts reached
- Profile visits

Két skála:
- Raw values
- Indexed (first point = 100)

Az indexelt nézet különösen akkor hasznos, amikor nagyon eltérő nagyságrendű mutatókat akarsz egymásra helyezve összehasonlítani.

## Snapshot kezelés
A snapshotok:
- kézzel menthetők
- egyenként inaktiválhatók
- újra aktiválhatók
- egyenként végleg törölhetők

Az inaktív snapshot megmarad az adatbázisban, de kimarad a grafikonból.

A snapshot most az aktuális `Following` számot is elmenti a relationship exportból, ezért ez is rajzolható az Insights trendgrafikonra.

## Cohorts
A follow-back idő közvetlenül a `following` és `followers` timestamp különbségéből számolódik.

A megjelenített idősávok már nem kumulatívak:
- 1. nap = 0–1 nap
- 2. nap = 1–2 nap
- 3. nap = 2–3 nap
- 4–7. nap = 3–7 nap

Tehát aki az 1. napon visszakövetett, nem jelenik meg újra a 2. vagy 3. napi értékben.

## Adatbázis export / import
A teljes tartós helyi adatbázis exportálható JSON fájlba:
- Heart / Keep profilok
- Insights snapshotok
- snapshot aktív/inaktív állapot

Ezt a JSON-t egy másik eszközön be lehet importálni.

Ez jelenleg a biztonságos, backend nélküli többeszközös workflow.

## Online sync
Automatikus többeszközös szinkronhoz külön backend + felhasználói azonosítás szükséges.
Ez nincs beépítve a v0.6-ba.


## v0.7 chart polish

- filigránabb, visszafogottabb grafikon
- minden snapshot valódi pontként jelenik meg
- több snapshot esetén a pontokat finom vonal köti össze
- hover, fókusz, click és touch/tap esetén tooltip jelenik meg
- tooltip mutatja:
  - mutató nevét
  - dátumot
  - pontos értéket
- Indexed módban a tooltip az indexelt és a valódi értéket is megmutatja
- mobilon kisebb, sűrűbb grafikon


## v0.8 chart geometry fix

- az SVG többé nem nyújtja szét a grafikont
- a pontok valódi körök maradnak
- a tengelyszámok és dátumok nem torzulnak
- a legend és a grafikon sorozatszínei pontosan egyeznek
- még vékonyabb, filigránabb vonalak és grid
- hover/tap tooltip és több snapshot közötti összekötő vonal megmaradt


## v0.9 palette adjustment

A grafikon és a felső kapcsolók színei most már sokkal jobban elkülönülnek:

- Followers: lila
- Following: teal
- Follows: zöld
- Unfollows: piros
- Accounts reached: narancs
- Profile visits: kék

A legend és a grafikon továbbra is pontosan ugyanazt a színpalettát használja.


## v0.10 mobile + PDF report

### Mobile
- az app teljes szélessége a viewporton belül marad
- a széles snapshot táblázat saját vízszintes scrollt kap, nem nyújtja szét az oldalt
- a metric kapcsolók külön vízszintes scroll-sávként működnek
- a mobil grafikon külön, kompakt 520×320-as koordinátarendszert használ
- a tengelyfeliratok mobilon nagyobbak és olvashatóbbak
- a grafikon továbbra is filigrán marad

### Export PDF
Az új `Export PDF` gomb egy letisztult report nézetet készít:
- aktuális fő Insights számok
- Followers / Following
- Follows / Unfollows
- Net follower change
- Accounts reached
- Profile visits
- Content interactions
- az aktuálisan beállított trendgrafikon
- legutóbbi aktív snapshotok

A gomb a böngésző natív nyomtatási/PDF dialógusát nyitja meg.
Desktopon `Save as PDF`, iPhone/iPad esetén a rendszer PDF/Print megosztási folyamata használható.


## v0.11 mobile viewport containment

- a teljes dokumentum szélessége mobilon fixen a viewporton belül marad
- az app shell már nem használ oldalirányban túlnyúló külső szélességet
- `overflow-x: clip` védi a page/root szintet iOS Safari alatt is
- csak a szándékos belső elemek scrollozhatók oldalra:
  - felső navigáció
  - Followers tabok
  - grafikon metric kapcsolók
  - snapshot táblázat
- a széles táblázat és a `max-content` navigáció nem tudja többé széthúzni a teljes oldalt
- a fixed Open next gomb szélessége is viewporton belül marad

## v0.13 - Public Google Drive sync without Google billing

This version removes the Google Drive API key requirement.

### Why a tiny bridge is still needed
Google's public Drive folder page can be opened by anyone who has the link, but a GitHub Pages browser app cannot reliably read that cross-origin HTML because of browser CORS isolation.

v0.13 therefore includes `cloudflare-worker.js`, a tiny read-only bridge.

The worker:
- has no Google account access
- has no Google API key
- has no OAuth token
- stores no Instagram data
- only fetches pages/files that Google Drive already exposes publicly
- adds CORS headers so the analyzer can read them

### One-time setup

1. Create a free Cloudflare account.
2. Open **Workers & Pages**.
3. Create a Worker.
4. Replace the default Worker code with the complete contents of `cloudflare-worker.js`.
5. Deploy it.
6. Copy the Worker URL, for example:

```text
https://instagram-drive-bridge.example.workers.dev
```

7. Put that URL into `config.js`:

```js
window.IFA_CONFIG = {
  driveBridgeUrl: "https://instagram-drive-bridge.example.workers.dev"
};
```

8. Upload the updated app files to GitHub Pages.
9. Press **Sync Drive**.

No Google Cloud billing account or Google Drive API key is required.

### Drive behavior

The app recursively scans the public folder and recognizes export dates from:
- `meta-YYYY-MMM-DD-...`
- `instagram-...-YYYY-MM-DD-...`
- generic `YYYY-MM-DD` path fragments

It looks for:
- `followers_*.json`
- `following.json`
- `audience_insights.json`
- `content_interactions.json`
- `profiles_reached.json`

Newest complete relationship export:
- loaded as **Current**

Previous dated complete relationship export:
- loaded as **Reference**

Latest Insights:
- automatically upserted into snapshot history for that export date

### Important limitation

This no-key method reads Google's public embedded-folder HTML rather than the official Drive API. Google can change that HTML in the future. If that happens, the bridge parser may need a small update.

This is intentionally the tradeoff for:
- no Google billing
- no Google OAuth
- no Google Drive API key
- no private Drive access


## v0.14 - Reference folder + explicit history scan + no-store

### Reference behavior
- The second-newest dated export is **never** used as Reference.
- Reference is loaded only when a folder segment named exactly `Reference`
  (case-insensitive) exists under the shared Drive tree and contains:
  - `following.json`
  - at least one `followers_*.json`
- If no valid `Reference` folder exists, Reference stays empty.

### Normal `Sync Drive`
- Finds the newest complete dated export outside `Reference`.
- Loads that export as Current.
- Loads Reference only from `Reference`.
- Saves/updates only the newest export's Insights snapshot.

### `Scan Drive history`
A new button in Insights scans every dated non-Reference export and:
- parses its Insights
- creates missing historical snapshots
- updates same-date snapshots instead of duplicating them
- uses that dated export's `following.json` for the historical Following count when available
- never changes Current or Reference

### Device/storage behavior
Drive JSON is not saved as files on the device.
- fetch calls use `cache: "no-store"`
- the Cloudflare bridge replies with `Cache-Control: no-store`
- raw JSON strings exist only temporarily in browser memory
- after parsing, temporary source arrays are cleared
- only derived app state and snapshots remain in localStorage

The Drive folder URL is no longer hard-coded in the repository. After entering it once,
the browser remembers it in localStorage.


## v0.15 - README reader and compact mobile import UI

- Built-in README reader with EN / DE / HU documentation files.
- README is available from the top controls on desktop and from the hamburger menu on mobile.
- Mobile secondary header controls are moved into a compact hamburger menu.
- Current and Reference import cards remain unchanged on desktop.
- On mobile they are displayed side-by-side as compact cards.
- Mobile import uses a small Add button instead of the large drag-and-drop area.
- Mobile loaded status shows only the source file count.
- Full follower / following / not-following-back import status remains visible on desktop.

## v0.17 - Daily Drive model + automatic Insights history

Drive Sync now treats scheduled `followers_*.json` files as positive follower observations/events. The observations are de-duplicated across all dated Drive exports, while the newest available `following.json` is used as the current Following state. This mode is intended for daily follow-back checking.

Scheduled follower data is not treated as authoritative proof that an older follower still follows you. Lost followers must be checked with a manual full export compared against a full Reference export.

Normal **Sync Drive** now automatically builds every available dated Insights snapshot. `Scan Drive history` remains as a manual rebuild/repair action.

Meta Insights labels are normalized before parsing, so capitalization and punctuation variants such as `Date range` / `Date Range`, `Accounts reached` / `Accounts Reached`, `Content interactions` / `Content Interactions`, and `Non-followers` / `Non-Followers` map to the same canonical metrics.

If several exports exist for the same date, available Audience, Interactions and Reach data are merged into one dated snapshot. Missing metrics are not invented.

The experimental Drive cleanup/history-export function from v0.16 has been removed. Raw scheduled exports should be retained for now.

### Development history

- **v0.17** Daily follower-event Drive model, automatic complete Insights-history sync, normalized Meta labels, manual full-export reconciliation, Drive cleaner removed.
- **v0.16** Experimental compact Drive history archive prototype, removed in v0.17.

**Insights date handling:** when Meta supplies a rolling `Date Range`, the analyzer uses the day after the range end as the canonical snapshot date. This prevents two automations delivering the same closed-day Insights under different export-folder dates from creating duplicate or conflicting snapshots.

## v0.18 - Review workflow polish

- Relationship rows now show the full available timestamp down to seconds.
- `Open next` continues from the most recently opened visible profile instead of jumping back to the first unopened row. After reaching the end of the current visible list it wraps to any earlier unopened rows.
- Profile review uses one reusable named Instagram tab/window instead of creating a fresh browser window for every `Open next`.
- Added `Hide hearted` to the relationship-list filters.

## v0.19 - Cross-device Heart Sync

Hearted profiles can now be synchronized between devices through the existing Cloudflare Worker.

Cloudflare requirements:

- KV namespace binding: `HEARTS_KV`
- Worker secret: `HEARTS_SYNC_KEY`
- deploy the included updated `cloudflare-worker.js`

The sync key is never placed in `config.js`. It is entered once in the app on each device and stored only in that browser's local storage.

Existing v0.18 Hearts are migrated automatically. Legacy local Hearts use timestamp `0`, so newer cloud-side removals take precedence. Heart removals are retained as tombstones in the synced state to prevent an older device from restoring them later.

The local Heart cache remains available if the network is unavailable. A manual `Sync hearts` button is available, and connected clients also sync on startup, when returning to the app, and after Heart changes.

## v0.20 - Full checkpoints, Unfollowed and My Following Activity

The data sources are now explicitly separated:

- **Reference** stays isolated and is loaded only from the Drive `Reference` folder or a manual Reference import.
- **Daily Sync** uses only scheduled exports outside `Reference` and `Full Exports`.
- **Full Checkpoint** is a complete follower/following snapshot. A manually loaded full export has priority. If none is loaded, the latest complete export found under Drive `Full Exports` becomes the read-only **Last Full** fallback.

The Daily Sync operational model remains unchanged. The old Current upload card is now the Full Checkpoint card and no longer displays Daily Sync files.

### Unfollowed

A new `Unfollowed` list compares every follower observed by Daily Sync up to the effective Full Checkpoint cutoff against the follower list in that Full Checkpoint. Daily events after the Full Checkpoint are excluded.

### Identity changes / renames

Probable username changes are detected when a disappearing username and a newly appearing username have the exact same relationship timestamp. Evidence can come from follower timestamps, following timestamps, consecutive Daily Following snapshots, Reference vs Full, or consecutive Full checkpoints.

Rename candidates are excluded from New Follower, New Following, Not Following Back, Unfollowed and Unfollowed by me calculations, and are shown separately under `Renamed` for manual verification.

### My Following Activity

Insights now contains a separate My Following Activity panel. It is derived only from consecutive Daily `following.json` snapshots: Followed by me, Unfollowed by me, Net following and Refollowed.

`recently_unfollowed_profiles.json` is **not** used to count your own unfollows. It is used only as supplementary identity/FBID evidence and for refollow detection.

### Insights missing values

Missing Insight metrics remain `null` / `—`. They are no longer converted to zero in the chart, and a Drive rebuild overwrites stale zero values with the actual missing state.

Full Exports and Reference are explicitly excluded from Daily Insights history. The analyzer never scans or mixes a separate automation folder that is outside the configured public Drive root.
