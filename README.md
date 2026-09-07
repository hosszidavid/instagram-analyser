# Instagram Followers Analyzer

A private-first, browser-based Instagram relationship and Insights analyzer.

Current version: **v0.14**

The application is designed to process Instagram exports locally in the browser, analyze follower relationships, track Insights over time, and optionally synchronize exports from a public Google Drive archive.

No Instagram login is required.

---

## Features

### Instagram relationship analysis

The analyzer supports Instagram relationship exports and provides:

- Followers
- Following
- Not Following Back
- Search
- Sorting
- Clickable Instagram profile links
- CSV export
- Persistent Keep / Heart markers
- Session-based reviewed state
- Open Next workflow for rapid account review

The app can read the original Instagram ZIP export directly or individual JSON files.

Recognized relationship files include:

- `followers_*.json`
- `following.json`

---

## Current and Reference datasets

The application uses two relationship datasets:

### Current

The latest active Instagram relationship state.

When using Google Drive sync, **Current is always the newest complete dated export** containing both:

- `following.json`
- at least one `followers_*.json`

### Reference

Reference is used for relationship comparison.

When using Google Drive sync, Reference is loaded **only** from a folder named:

```text
Reference
```

The folder name is matched case-insensitively.

A valid Reference folder must contain:

- `following.json`
- at least one `followers_*.json`

The second-newest dated export is **never automatically used as Reference**.

If no valid Reference folder exists, Reference remains empty.

---

## Relationship comparison

When both Current and Reference are available, the Overview can calculate:

- New followers
- Lost followers
- New following
- Accounts unfollowed by you

Reference filtering is also available inside the Followers workflow.

Available modes:

- Show all
- Hide accounts present in Reference
- Show only accounts present in Reference

---

## Keep / Heart system

Accounts can be marked with a persistent Heart / Keep state.

This is independent from Reference.

Typical purpose:

- protect accounts you do not want to unfollow
- manually mark important profiles
- maintain a personal keep-list

Heart data is stored locally in the browser.

---

## Review workflow

The application includes a lightweight profile-review workflow.

Each account can have a session-only reviewed state.

The **Open Next** button:

1. finds the next visible unreviewed account
2. marks it reviewed
3. opens the Instagram profile

Reviewed state uses session storage and is intentionally temporary.

---

# Insights

Instagram Insights exports can be loaded and analyzed alongside relationship data.

Currently supported account-level metrics include:

- Followers
- Following
- Follows
- Unfollows
- Net follower change
- Accounts reached
- Profile visits
- External link taps
- Content interactions
- Non-follower reach
- Non-follower engagement

The actual available values depend on the contents of the Instagram export.

---

## Insights snapshots

Insights can be stored as dated snapshots.

Snapshots contain the available Insights metrics together with the current Following count.

Snapshots are stored locally in the browser.

If another snapshot already exists for the same date, it is updated instead of duplicated.

Snapshots can individually be:

- enabled
- disabled
- deleted

Disabled snapshots remain stored but are excluded from the chart.

---

## Automatic snapshot on Drive Sync

A normal **Sync Drive** operation:

1. finds the newest complete dated export
2. loads it as Current
3. loads Reference only from the special `Reference` folder
4. loads the newest available Insights
5. creates or updates the snapshot for that export date

Only the newest export is processed into the snapshot history during a normal sync.

---

## Scan Drive History

The Insights page includes:

**Scan Drive history**

This performs an explicit historical scan of the Drive archive.

It:

- scans all dated exports
- excludes the special Reference folder
- finds historical Insights data
- creates missing snapshots
- updates existing snapshots with the same date
- uses the dated export's `following.json` for the historical Following count when available

This allows the complete chart history to be reconstructed from previously archived Instagram exports.

The scan does not change Current or Reference.

---

# Insights chart

The Insights chart is a multi-series timeline.

Available chart series:

- Followers
- Following
- Follows
- Unfollows
- Accounts reached
- Profile visits

Each metric uses a clearly distinct color.

Chart features:

- individual snapshot points
- connected trend lines
- hover values on desktop
- tap values on mobile
- responsive mobile layout
- selectable metrics
- Raw values mode
- Indexed mode

### Indexed mode

Indexed mode normalizes the first value of each selected series to `100`.

This makes metrics with very different absolute scales visually comparable.

For example:

```text
Followers         5,000
Accounts reached 20,000
Profile visits      800
```

can still be compared by relative change.

The tooltip continues to show the real value.

---

# Cohorts

Follow-back cohorts are calculated from relationship timestamps contained in the current Instagram export.

For mutual relationships where you followed the account first, the analyzer calculates:

```text
follow-back delay =
follower timestamp - following timestamp
```

Cohort buckets are mutually exclusive:

- 1st day
- 2nd day
- 3rd day
- Days 4–7

The analyzer also calculates:

- follow-back rate
- median follow-back time
- suggested review threshold

Historical relationship snapshots are not required for currently existing mutual relationships because the relationship timestamps already contain the relevant timing information.

---

# Google Drive Sync

The analyzer can use a **public Google Drive folder** as an Instagram export archive.

No Google login is required.

No Google Drive API key is required.

No Google Cloud billing account is required.

No OAuth token is used.

---

## Public Drive architecture

```text
Public Google Drive folder
        ↓
Cloudflare Worker
        ↓
Instagram Followers Analyzer
```

A small Cloudflare Worker is used as a read-only bridge.

This is necessary because a browser application hosted on GitHub Pages cannot directly read Google Drive's public folder HTML due to browser CORS restrictions.

The included file is:

```text
cloudflare-worker.js
```

---

## Cloudflare Worker privacy

The Worker:

- has no Google account credentials
- has no Google API key
- has no Instagram credentials
- has no OAuth token
- stores no Instagram data
- can only request files already publicly accessible through Google Drive
- adds the CORS headers required by the browser application

---

## Cloudflare Worker setup

Create a Cloudflare Worker and replace the default code with the contents of:

```text
cloudflare-worker.js
```

Deploy the Worker.

You will receive a URL similar to:

```text
https://instagram-drive-bridge.example.workers.dev
```

Then configure `config.js`:

```js
window.IFA_CONFIG = {
  driveBridgeUrl: "https://instagram-drive-bridge.example.workers.dev"
};
```

No Google configuration is required.

---

## Drive folder URL

The public Google Drive folder URL is entered directly in the application.

Example:

```text
https://drive.google.com/drive/folders/FOLDER_ID
```

The URL is not hard-coded into the repository.

After entering it once, the browser remembers it locally.

---

## Drive archive discovery

The analyzer recursively scans the complete folder tree.

The folder structure does not need to be manually selected.

Dates can currently be recognized from structures such as:

```text
meta-2026-Sep-07-10-28-43
```

and:

```text
instagram-accountname-2026-09-07-...
```

as well as generic:

```text
YYYY-MM-DD
```

path fragments.

---

## Files detected during Drive sync

Relationship files:

```text
followers_*.json
following.json
```

Insights files currently recognized:

```text
audience_insights.json
content_interactions.json
profiles_reached.json
```

Other files are ignored unless required by the Instagram parser.

---

# Local storage and privacy

Instagram ZIP and JSON source files are processed locally in the browser.

Drive synchronization also avoids permanent storage of downloaded source files.

For Drive data:

- requests use `cache: "no-store"`
- the Cloudflare Worker sends `Cache-Control: no-store`
- downloaded JSON exists temporarily in browser memory
- temporary source data is released after parsing
- raw Drive JSON is not saved as files on the device

Persistent browser storage contains only derived application data such as:

- Hearts / Keep markers
- Insights snapshots
- settings
- saved Drive folder URL

Reviewed state is session-only.

---

# Database export and import

The persistent local application state can be exported manually.

Database export currently includes:

- Hearts / Keep markers
- Insights snapshots

The exported database can be imported on another device.

This provides a backend-free manual synchronization method.

---

# PDF report

The application can generate a printable report using **Export PDF**.

The report includes available data such as:

- Followers
- Following
- Follows
- Unfollows
- Net follower change
- Accounts reached
- Profile visits
- Content interactions
- current trend chart
- recent active snapshots

The browser's native Print / Save as PDF workflow is used.

---

# Languages

The interface supports:

- English
- German
- Hungarian

Language preference is remembered locally.

---

# Deployment

The application is fully static.

Required files include:

```text
index.html
styles.css
app.js
config.js
README.md
```

For Drive synchronization also deploy:

```text
cloudflare-worker.js
```

The main application can be hosted directly through GitHub Pages.

No build process is required.

---

# Important limitation of public Drive sync

The no-API-key Drive integration reads Google's public embedded-folder representation rather than the official Google Drive API.

Google may change the structure of this public folder representation in the future.

If that happens, `cloudflare-worker.js` may require a parser update.

This is the intentional tradeoff for:

- no Google billing
- no Google API key
- no OAuth
- no Google account access

---

# Development history

<small>

### v0.14
Reference-folder contract, explicit historical Drive scan, no-store Drive processing, repository-safe Drive URL handling.

### v0.13
Public Google Drive synchronization through a Cloudflare Worker without Google API key, OAuth, or billing.

### v0.12
Initial Google Drive synchronization prototype using the official Drive API.

### v0.11
Mobile viewport containment and horizontal overflow fixes.

### v0.10
Mobile chart improvements and PDF report export.

### v0.9
High-contrast chart series palette.

### v0.8
Correct SVG geometry, circular data points, undistorted chart labels.

### v0.7
Interactive chart points, connected trend lines, hover/tap tooltips.

### v0.6
Simplified application architecture, manual Insights snapshots, multi-series trend chart, database export/import, exclusive follow-back cohorts.

### v0.5
Simplified top-level navigation and consolidated Followers workflow.

### v0.4
Instagram Insights support, reviewed-state workflow, Open Next, mobile improvements.

### v0.3
Persistent Hearts, relationship history concepts, cohorts and cleanup tools.

### v0.2
Direct Instagram ZIP import, multilingual UI and Reference filtering.

### v0.1
Initial browser-based followers/following JSON analyzer.

</small>
