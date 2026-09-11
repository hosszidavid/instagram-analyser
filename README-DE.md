# Instagram Followers Analyzer

Ein datenschutzorientierter, browserbasierter Instagram-Analyzer für Beziehungen und Insights.

Aktuelle Version: **v0.19**

Die Anwendung verarbeitet Instagram-Exporte lokal im Browser, analysiert Follower-Beziehungen, verfolgt Insights über die Zeit und kann Exporte optional automatisch aus einem öffentlichen Google-Drive-Archiv synchronisieren.

Eine Instagram-Anmeldung ist nicht erforderlich.

---

## Funktionen

### Instagram-Beziehungsanalyse

Der Analyzer unterstützt Instagram-Relationship-Exporte und bietet:

- Followers
- Following
- Not Following Back
- Suche
- Sortierung
- anklickbare Instagram-Profillinks
- CSV-Export
- dauerhafte Keep-/Heart-Markierungen
- sitzungsbasierter Reviewed-Status
- Open-Next-Workflow zur schnellen Profilprüfung

Die App kann den originalen Instagram-ZIP-Export direkt oder einzelne JSON-Dateien einlesen.

Erkannte Relationship-Dateien:

- `followers_*.json`
- `following.json`

---

## Current- und Reference-Datensätze

Die Anwendung verwendet zwei Relationship-Datensätze:

### Current

Der aktuelle Instagram-Beziehungsstand.

Bei Google-Drive-Synchronisierung ist **Current immer der neueste vollständige datierte Export**, der Folgendes enthält:

- `following.json`
- mindestens eine `followers_*.json`-Datei

### Reference

Reference dient als Vergleichsbasis.

Bei Google-Drive-Synchronisierung wird Reference **ausschließlich** aus einem Ordner mit folgendem Namen geladen:

```text
Reference
```

Der Ordnername wird unabhängig von Groß- und Kleinschreibung erkannt.

Ein gültiger Reference-Ordner muss enthalten:

- `following.json`
- mindestens eine `followers_*.json`-Datei

Der zweitneueste datierte Export wird **niemals automatisch als Reference verwendet**.

Wenn kein gültiger Reference-Ordner vorhanden ist, bleibt Reference leer.

---

## Relationship-Vergleich

Wenn Current und Reference verfügbar sind, kann die Overview-Seite berechnen:

- neue Follower
- verlorene Follower
- neue Following-Accounts
- von dir entfolgte Accounts

Reference-Filter sind auch im Followers-Workflow verfügbar.

Verfügbare Modi:

- alle anzeigen
- Accounts aus Reference ausblenden
- nur Accounts aus Reference anzeigen

---

## Keep-/Heart-System

Accounts können dauerhaft mit Heart / Keep markiert werden.

Dieses System ist unabhängig von Reference.

Typische Verwendung:

- Accounts schützen, denen du nicht entfolgen möchtest
- wichtige Profile manuell markieren
- persönliche Keep-Liste pflegen

Heart-Daten werden lokal im Browser gespeichert.

---

## Review-Workflow

Die Anwendung enthält einen einfachen Workflow zur Profilprüfung.

Jeder Account kann einen sitzungsbasierten Reviewed-Status erhalten.

Die Schaltfläche **Open Next**:

1. findet den nächsten sichtbaren, noch nicht geprüften Account
2. markiert ihn als reviewed
3. öffnet das Instagram-Profil

Der Reviewed-Status wird im Session Storage gespeichert und gilt absichtlich nur für die aktuelle Sitzung.

---

# Insights

Instagram-Insights-Exporte können zusammen mit den Relationship-Daten geladen und analysiert werden.

Aktuell unterstützte Account-Level-Metriken:

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

Welche Werte tatsächlich verfügbar sind, hängt vom Inhalt des Instagram-Exports ab.

---

## Insights-Snapshots

Insights können als datierte Snapshots gespeichert werden.

Snapshots enthalten die verfügbaren Insights-Metriken zusammen mit dem aktuellen Following-Wert.

Snapshots werden lokal im Browser gespeichert.

Existiert für dasselbe Datum bereits ein Snapshot, wird kein Duplikat erstellt, sondern der vorhandene Snapshot aktualisiert.

Snapshots können einzeln:

- aktiviert
- deaktiviert
- gelöscht

werden.

Deaktivierte Snapshots bleiben gespeichert, werden jedoch aus dem Diagramm ausgeschlossen.

---

## Automatischer Snapshot bei Drive Sync

Ein normaler **Sync Drive**-Vorgang:

1. findet den neuesten vollständigen datierten Export
2. lädt ihn als Current
3. lädt Reference ausschließlich aus dem speziellen `Reference`-Ordner
4. lädt die neuesten verfügbaren Insights
5. erstellt oder aktualisiert den Snapshot für dieses Exportdatum

Bei einem normalen Sync wird nur der neueste Export in die Snapshot-History übernommen.

---

## Scan Drive History

Auf der Insights-Seite gibt es:

**Scan Drive history**

Diese Funktion durchsucht auf ausdrücklichen Wunsch das gesamte Drive-Archiv.

Sie:

- scannt alle datierten Exporte
- überspringt den speziellen Reference-Ordner
- sucht historische Insights-Daten
- erstellt fehlende Snapshots
- aktualisiert bereits vorhandene Snapshots mit demselben Datum
- verwendet, sofern vorhanden, `following.json` des jeweiligen Exports für den historischen Following-Wert

So kann aus bereits archivierten Instagram-Exporten rückwirkend eine vollständige Trend-History aufgebaut werden.

Der History-Scan verändert weder Current noch Reference.

---

# Insights-Diagramm

Das Insights-Diagramm ist eine Timeline mit mehreren Datenreihen.

Verfügbare Datenreihen:

- Followers
- Following
- Follows
- Unfollows
- Accounts reached
- Profile visits

Jede Metrik verwendet eine deutlich unterscheidbare Farbe.

Diagrammfunktionen:

- einzelne Snapshot-Punkte
- verbundene Trendlinien
- Hover-Werte auf Desktop
- Tap-Werte auf Mobilgeräten
- responsives mobiles Layout
- auswählbare Metriken
- Raw-values-Modus
- Indexed-Modus

### Indexed-Modus

Im Indexed-Modus wird der erste Wert jeder ausgewählten Datenreihe auf `100` normalisiert.

Dadurch lassen sich Metriken mit sehr unterschiedlichen absoluten Größen anhand ihrer relativen Veränderung vergleichen.

Beispiel:

```text
Followers         5.000
Accounts reached 20.000
Profile visits      800
```

Der Tooltip zeigt weiterhin den tatsächlichen Wert.

---

# Cohorts

Follow-back-Cohorts werden aus den Relationship-Timestamps des aktuellen Instagram-Exports berechnet.

Bei gegenseitigen Beziehungen, bei denen du den anderen Account zuerst gefolgt hast, berechnet der Analyzer:

```text
follow-back delay =
follower timestamp - following timestamp
```

Die Cohort-Buckets überschneiden sich nicht:

- 1. Tag
- 2. Tag
- 3. Tag
- Tag 4–7

Der Analyzer berechnet außerdem:

- Follow-back-Rate
- mediane Follow-back-Zeit
- empfohlenen Review-Schwellenwert

Für aktuell bestehende gegenseitige Beziehungen sind keine historischen Relationship-Snapshots notwendig, weil die Timestamps bereits die benötigten Zeitinformationen enthalten.

---

# Google Drive Sync

Der Analyzer kann einen **öffentlichen Google-Drive-Ordner** als Instagram-Exportarchiv verwenden.

Nicht erforderlich sind:

- Google-Login
- Google-Drive-API-Key
- Google-Cloud-Billing-Konto
- OAuth-Token

---

## Public-Drive-Architektur

```text
Öffentlicher Google-Drive-Ordner
        ↓
Cloudflare Worker
        ↓
Instagram Followers Analyzer
```

Ein kleiner Cloudflare Worker dient als read-only Bridge.

Er ist notwendig, weil eine auf GitHub Pages gehostete Browser-App den öffentlichen Google-Drive-Folder-HTML-Inhalt aufgrund von CORS-Beschränkungen nicht direkt lesen kann.

Benötigte Datei:

```text
cloudflare-worker.js
```

---

## Datenschutz des Cloudflare Workers

Der Worker:

- besitzt keine Google-Account-Zugangsdaten
- verwendet keinen Google API Key
- besitzt keine Instagram-Zugangsdaten
- verwendet keinen OAuth-Token
- speichert keine Instagram-Daten
- kann nur Dateien abrufen, die auf Google Drive bereits öffentlich zugänglich sind
- ergänzt die für die Browser-App benötigten CORS-Header

---

## Cloudflare Worker einrichten

Erstelle einen Cloudflare Worker und ersetze den Standardcode vollständig durch den Inhalt von:

```text
cloudflare-worker.js
```

Nach dem Deployment erhältst du eine URL ähnlich:

```text
https://instagram-drive-bridge.example.workers.dev
```

Trage diese anschließend in `config.js` ein:

```js
window.IFA_CONFIG = {
  driveBridgeUrl: "https://instagram-drive-bridge.example.workers.dev"
};
```

Auf Google-Seite ist keine weitere Konfiguration erforderlich.

---

## Drive-Folder-URL

Die URL des öffentlichen Google-Drive-Ordners wird direkt in der Anwendung eingegeben.

Beispiel:

```text
https://drive.google.com/drive/folders/FOLDER_ID
```

Die konkrete Drive-URL ist nicht fest im Repository hinterlegt.

Nach der ersten Eingabe merkt sich der Browser die URL lokal.

---

## Erkennung des Drive-Archivs

Der Analyzer durchsucht rekursiv die komplette Ordnerstruktur.

Unterordner müssen nicht manuell ausgewählt werden.

Datumsangaben können unter anderem aus Strukturen wie diesen erkannt werden:

```text
meta-2026-Sep-07-10-28-43
```

und:

```text
instagram-accountname-2026-09-07-...
```

sowie aus allgemeinen:

```text
YYYY-MM-DD
```

Pfadbestandteilen.

---

## Bei Drive Sync erkannte Dateien

Relationship-Dateien:

```text
followers_*.json
following.json
```

Aktuell erkannte Insights-Dateien:

```text
audience_insights.json
content_interactions.json
profiles_reached.json
```

Andere Dateien werden ignoriert, sofern sie nicht vom Instagram-Parser benötigt werden.

---

# Lokale Speicherung und Datenschutz

Instagram-ZIP- und JSON-Quelldateien werden lokal im Browser verarbeitet.

Auch bei Drive Sync werden heruntergeladene Quelldateien nicht dauerhaft gespeichert.

Für Drive-Daten gilt:

- Requests verwenden `cache: "no-store"`
- der Cloudflare Worker sendet `Cache-Control: no-store`
- heruntergeladenes JSON existiert nur vorübergehend im Arbeitsspeicher des Browsers
- temporäre Quelldaten werden nach der Verarbeitung freigegeben
- rohe Drive-JSON-Dateien werden nicht als Dateien auf dem Gerät gespeichert

Dauerhaft gespeichert werden nur abgeleitete App-Daten wie:

- Hearts / Keep-Markierungen
- Insights-Snapshots
- Einstellungen
- gespeicherte Drive-Folder-URL

Der Reviewed-Status gilt nur für die aktuelle Sitzung.

---

# Datenbank-Export und -Import

Der lokal gespeicherte App-Zustand kann manuell exportiert werden.

Der Datenbankexport enthält aktuell:

- Hearts / Keep-Markierungen
- Insights-Snapshots

Die exportierte Datenbank kann auf einem anderen Gerät wieder importiert werden.

Damit steht eine backendfreie manuelle Synchronisierung zwischen mehreren Geräten zur Verfügung.

---

# PDF-Report

Mit **Export PDF** kann die Anwendung einen druckbaren Report erstellen.

Der Report kann unter anderem enthalten:

- Followers
- Following
- Follows
- Unfollows
- Net follower change
- Accounts reached
- Profile visits
- Content interactions
- aktuelles Trenddiagramm
- zuletzt aktive Snapshots

Der Export verwendet den nativen Print-/Save-as-PDF-Workflow des Browsers.

---

# Sprachen

Die Benutzeroberfläche unterstützt:

- Englisch
- Deutsch
- Ungarisch

Die ausgewählte Sprache wird lokal gespeichert.

---

# Deployment

Die Anwendung ist vollständig statisch.

Benötigte Dateien:

```text
index.html
styles.css
app.js
config.js
README.md
```

Für Drive Sync zusätzlich:

```text
cloudflare-worker.js
```

Die Hauptanwendung kann direkt über GitHub Pages gehostet werden.

Ein Build-Prozess ist nicht erforderlich.

---

# Wichtige Einschränkung des öffentlichen Drive Sync

Die API-Key-freie Drive-Integration liest die öffentliche Embedded-Folder-Darstellung von Google und verwendet nicht die offizielle Google Drive API.

Google kann die Struktur dieser öffentlichen Darstellung künftig ändern.

In diesem Fall müsste der Parser in `cloudflare-worker.js` angepasst werden.

Das ist ein bewusster Kompromiss für folgende Vorteile:

- kein Google Billing
- kein Google API Key
- kein OAuth
- kein Zugriff auf den Google Account

---

# Entwicklungshistorie

<small>

### v0.14
Reference-Ordner-Regel, expliziter historischer Drive-Scan, No-Store-Verarbeitung von Drive-Daten und repository-sichere Speicherung der Drive-URL.

### v0.13
Öffentliche Google-Drive-Synchronisierung über einen Cloudflare Worker ohne Google API Key, OAuth oder Billing.

### v0.12
Erster Google-Drive-Sync-Prototyp mit der offiziellen Drive API.

### v0.11
Mobile Viewport-Begrenzung und Korrekturen für horizontales Overflow.

### v0.10
Verbesserungen des mobilen Diagramms und PDF-Report-Export.

### v0.9
Stark unterscheidbare Farbpalette für Diagrammreihen.

### v0.8
Korrekte SVG-Geometrie, echte kreisförmige Datenpunkte und unverzerrte Diagrammbeschriftungen.

### v0.7
Interaktive Datenpunkte, verbundene Trendlinien sowie Hover-/Tap-Tooltips.

### v0.6
Vereinfachte App-Architektur, manuelle Insights-Snapshots, Multi-Series-Trenddiagramm, Datenbank-Export/-Import und exklusive Follow-back-Cohorts.

### v0.5
Vereinfachte Hauptnavigation und zusammengeführter Followers-Workflow.

### v0.4
Instagram-Insights-Unterstützung, Reviewed-State-Workflow, Open Next und mobile Verbesserungen.

### v0.3
Dauerhafte Hearts, Relationship-History-Konzepte, Cohorts und Cleanup-Werkzeuge.

### v0.2
Direkter Instagram-ZIP-Import, mehrsprachige UI und Reference-Filterung.

### v0.1
Erster browserbasierter Followers-/Following-JSON-Analyzer.

</small>

## v0.17 - Tägliches Drive-Modell + automatische Insights-History

Drive Sync behandelt Scheduled-`followers_*.json`-Dateien jetzt als positive Follower-Ereignisse/Beobachtungen. Die Beobachtungen werden über alle datierten Drive-Exporte dedupliziert zusammengeführt, während der neueste verfügbare `following.json`-Stand als aktueller Following-Zustand verwendet wird. Dieser Modus ist für die tägliche Follow-back-Prüfung gedacht.

Scheduled Follower-Daten sind kein autoritativer Beweis dafür, dass ein älterer Follower dir noch folgt. Verlorene Follower müssen mit einem manuellen vollständigen Export gegen einen vollständigen Reference-Export geprüft werden.

Ein normaler **Drive Sync** baut jetzt automatisch alle verfügbaren datierten Insights-Snapshots auf. `Drive-Verlauf scannen` bleibt als manuelle Rebuild-/Repair-Funktion erhalten.

Meta-Insights-Labels werden vor dem Parsen normalisiert. Varianten wie `Date range` / `Date Range`, `Accounts reached` / `Accounts Reached`, `Content interactions` / `Content Interactions` und `Non-followers` / `Non-Followers` werden auf dieselben kanonischen Metriken abgebildet.

Wenn für dasselbe Datum mehrere Exporte existieren, werden verfügbare Audience-, Interactions- und Reach-Daten zu einem Tages-Snapshot zusammengeführt. Fehlende Metriken werden nicht erfunden.

Die experimentelle Drive-Cleanup/History-Export-Funktion aus v0.16 wurde entfernt. Die rohen Scheduled Exports sollten vorerst behalten werden.

### Entwicklungshistorie

- **v0.17** Tägliches Follower-Event-Drive-Modell, automatische vollständige Insights-History, normalisierte Meta-Labels, manueller Full-Export-Reconciliation-Workflow, Drive Cleaner entfernt.
- **v0.16** Experimenteller kompakter Drive-History-Archiv-Prototyp, in v0.17 entfernt.

**Insights-Datumslogik:** Wenn Meta einen rollierenden `Date Range` liefert, verwendet der Analyzer den Tag nach dem Ende des Bereichs als kanonisches Snapshot-Datum. Dadurch erzeugen zwei Automationen, die dieselben abgeschlossenen Insights unter unterschiedlichen Export-Ordnerdaten liefern, keine doppelten oder widersprüchlichen Snapshots.

## v0.18 - Review-Workflow-Politur

- Beziehungszeilen zeigen den verfügbaren Zeitstempel jetzt bis auf Sekunden genau.
- `Nächstes öffnen` setzt ab dem zuletzt geöffneten sichtbaren Profil fort, statt zum ersten ungeöffneten Eintrag zurückzuspringen. Am Listenende wird bei Bedarf zu früheren ungeöffneten Einträgen zurückgesprungen.
- Die Profilprüfung verwendet einen wiederverwendeten benannten Instagram-Tab/ein Fenster, statt bei jedem Schritt ein neues Browserfenster zu öffnen.
- Neuer Filter `Markierte ausblenden`.

## v0.19 - Geräteübergreifender Heart Sync

Markierte Profile können jetzt über den bestehenden Cloudflare Worker zwischen mehreren Geräten synchronisiert werden.

Cloudflare-Anforderungen:

- KV-Namespace-Binding: `HEARTS_KV`
- Worker-Secret: `HEARTS_SYNC_KEY`
- die enthaltene aktualisierte `cloudflare-worker.js` deployen

Der Sync-Schlüssel wird nicht in `config.js` gespeichert. Er wird auf jedem Gerät einmal in der App eingegeben und nur im Local Storage dieses Browsers gespeichert.

Bestehende v0.18-Hearts werden automatisch migriert. Legacy-Hearts erhalten den Zeitstempel `0`, sodass neuere cloudseitige Entfernungen Vorrang haben. Entfernte Hearts bleiben als Tombstone-Einträge im synchronisierten Zustand erhalten, damit ein älteres Gerät sie später nicht versehentlich wiederherstellt.

Der lokale Heart-Cache bleibt auch bei Netzwerkproblemen verfügbar. Zusätzlich zum manuellen `Hearts synchronisieren` erfolgt die Synchronisierung beim Start, beim Zurückkehren zur App und nach Heart-Änderungen.
