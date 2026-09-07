# Instagram Followers Analyzer v0.6

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
