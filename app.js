const translations = {
  en: {
    eyebrow:"LOCAL INSTAGRAM ANALYZER",privacyCopy:"Your files are processed only in this browser.",processedLocally:"Processed locally",language:"Language",
    currentExport:"CURRENT EXPORT",currentTitle:"Current Instagram export",referenceExport:"REFERENCE EXPORT",referenceTitle:"Reference export",clear:"Clear",
    chooseCurrent:"Choose Instagram ZIP or JSON files",dropHint:"Drop the original Instagram export ZIP here, or select followers/following JSON files.",
    chooseReference:"Choose reference ZIP or JSON files",referenceHint:"Optional. Use an older Instagram export as the comparison reference.",nothingLoaded:"Nothing loaded.",noReference:"No reference loaded.",
    overview:"Overview",followers:"Followers",following:"Following",notFollowingBack:"Not Following Back",insights:"Insights",cohorts:"Cohorts",cleanup:"Cleanup",mutuals:"Mutuals",
    quickChanges:"QUICK CHANGES",referenceComparison:"Reference comparison",newFollowers:"New followers",lostFollowers:"Lost followers",newFollowing:"New following",unfollowedByYou:"Unfollowed by you",
    keepList:"KEEP LIST",heartedProfiles:"Hearted profiles",savedLocally:"saved locally",
    search:"Search",searchPlaceholder:"Search users...",referenceFilter:"Reference filter",referenceAll:"Show all",referenceHide:"Hide reference matches",referenceOnly:"Show only reference matches",
    sort:"Sort",newestFirst:"Newest first",oldestFirst:"Oldest first",nameAsc:"Name A–Z",nameDesc:"Name Z–A",exportCsv:"Export CSV",
    emptyTitle:"No matching users.",emptyCopy:"The current search or reference filter may exclude all users.",loadPrompt:"Upload the current Instagram ZIP or JSON files to start the analysis.",
    processing:"Processing...",invalidJson:"invalid JSON",noRecognized:"No recognizable followers/following Instagram JSON file was found.",zipUnsupported:"This browser cannot decompress ZIP files.",invalidZip:"The ZIP file could not be read.",
    loadedFiles:"{files} source file(s) · {followers} followers · {following} following · {notFollowing} not following back",visibleUsers:"{count} users shown",referenceHidden:"{count} hidden by reference",referenceOnlyShown:"{count} matching the reference",
    followsSince:"Follows you since {date}",followingSince:"Following since {date}",dateUnavailable:"Date unavailable",
    growthHistory:"GROWTH HISTORY",growthTitle:"Saved snapshots",saveSnapshot:"Save current snapshot",clearHistory:"Clear history",netGrowth:"Net follower growth",growthRate:"Growth rate",followerRatio:"Follower / Following",snapshotCount:"Snapshots",date:"Date",
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Useful account performance",followsPeriod:"Follows",unfollowsPeriod:"Unfollows",netFollowerChange:"Net follower change",accountsReached:"Accounts reached",profileVisits:"Profile visits",externalLinkTaps:"External link taps",contentInteractions:"Content interactions",discovery:"DISCOVERY",nonFollowerReach:"Reach from non-followers",nonFollowerEngagement:"Engagement from non-followers",insightsHistory:"INSIGHTS HISTORY",insightSnapshotsSaved:"manually saved Insights snapshots",saveInsightSnapshot:"Save snapshot",followerGrowth:"FOLLOWER GROWTH",followerGrowthTitle:"Saved follower count over time",period:"Insight period",noInsightSnapshots:"No saved Insights snapshots yet.",noInsightSnapshotsCopy:"Load an export with Insights and save a snapshot when you want to add a point to the growth graph.",noInsights:"No Instagram Insights found.",noInsightsCopy:"Use a full Instagram export that includes Past Instagram Insights.",openNext:"Open next",allOpened:"All opened",left:"left",
    cohortAnalysis:"FOLLOW COHORT ANALYSIS",cohortTitle:"How fast do new follows convert?",followBackRate:"Follow-back rate",medianTime:"Median follow-back time",followedInCohorts:"Tracked follows",suggestedThreshold:"Suggested threshold",
    within1:"Within 1 day",within2:"Within 2 days",within3:"Within 3 days",within7:"Within 7 days",cohortNeedHistory:"Cohorts are calculated directly from the follow timestamps in the current export.",days:"days",
    cleanupCandidates:"CLEANUP CANDIDATES",cleanupTitle:"Prioritized accounts to review",cleanupNote:"The score currently uses only relationship data available from followers/following exports. Hearted profiles are excluded.",
    olderThan:"Following older than",noCleanup:"No cleanup candidates.",noCleanupCopy:"Try a lower age threshold or load a current export.",notFollowingReason:"Not following you",oldFollowReason:"Long-term follow",score:"Score",exportDatabase:"Export database",importDatabase:"Import database",growthTrends:"GROWTH TRENDS",growthTrendsTitle:"Compare saved metrics over time",chartScale:"Chart scale",rawValues:"Raw values",indexedValues:"Indexed (first point = 100)",active:"Active",actions:"Actions",disable:"Disable",enable:"Enable",delete:"Delete",databaseImported:"Database imported.",databaseInvalid:"Invalid analyzer database file.",deleteSnapshotConfirm:"Delete this snapshot permanently?",day1:"Day 1",day2:"Day 2",day3:"Day 3",days4to7:"Days 4–7",exportPdf:"Export PDF",pdfNoData:"Load Insights or save at least one snapshot before exporting a PDF.",pdfTitle:"Instagram Followers Report",pdfGenerated:"Generated",pdfCurrentInsights:"Current Insights",pdfSavedTrends:"Saved trends",pdfSnapshotHistory:"Snapshot history",driveSyncEyebrow:"GOOGLE DRIVE SYNC",driveSyncTitle:"Public Instagram archive",driveSyncCopy:"Paste the public Drive folder link. The analyzer finds dated exports and relevant JSON files automatically.",driveFolderLink:"Public Drive folder link",syncDrive:"Sync Drive",driveNotSynced:"Not synced",driveSyncing:"Scanning Drive…",driveSynced:"Synced",driveReady:"Ready to scan the public folder.",driveLatest:"Latest export",drivePrevious:"Previous export",driveExportsFound:"Exports found",driveFilesFound:"Relevant files",driveApiKeyMissing:"",driveBridgeMissing:"The public Drive bridge is not configured yet. Add your Cloudflare Worker URL to config.js once; no Google API key or billing is needed.",driveInvalidLink:"This does not look like a Google Drive folder link.",driveNoExports:"No dated Instagram exports with followers/following files were found under this folder.",driveSyncComplete:"Drive sync complete. Latest dated export loaded as Current. Reference is loaded only from a folder named Reference when available.",driveSyncFailed:"Drive sync failed",driveAutoSnapshot:"The latest Insights were added to snapshot history automatically.",driveNoPrevious:"None",driveScanningFolder:"Scanning folders and files…",driveDownloading:"Downloading relevant JSON files…",scanDriveHistory:"Scan Drive history",driveHistoryScanning:"Scanning all dated Drive exports for Insights…",driveHistoryComplete:"Drive history scan complete.",driveHistoryAdded:"snapshots added",driveHistoryUpdated:"snapshots updated",driveHistoryNoInsights:"No dated Insights exports were found.",driveReferenceFolder:"Reference folder",driveReferenceFound:"Loaded from Drive reference folder",driveReferenceMissing:"No reference folder found",readme:"README",documentation:"DOCUMENTATION",add:"Add",sourceFilesShort:"{files} source file(s)",readmeLoadError:"Could not load the README file.",exportDriveHistory:"Export Drive cleanup history",driveArchiveScanning:"Building compact history from archived Drive exports…",driveArchiveReady:"History archive ready. Upload the downloaded JSON to the shared Drive folder before deleting old exports.",driveArchiveNoMiddle:"No intermediate dated exports were found. Existing history was preserved.",driveArchiveFailed:"History archive export failed",driveArchiveLoaded:"compact history loaded",driveArchiveInvalid:"A history JSON file was found but could not be validated."
  },
  de: {
    eyebrow:"LOKALER INSTAGRAM ANALYZER",privacyCopy:"Deine Dateien werden ausschließlich in diesem Browser verarbeitet.",processedLocally:"Lokal verarbeitet",language:"Sprache",
    currentExport:"AKTUELLER EXPORT",currentTitle:"Aktueller Instagram-Export",referenceExport:"REFERENZ-EXPORT",referenceTitle:"Referenz-Export",clear:"Löschen",
    chooseCurrent:"Instagram-ZIP oder JSON-Dateien auswählen",dropHint:"Ziehe den originalen Instagram-Export als ZIP hierher oder wähle Followers-/Following-JSON-Dateien aus.",
    chooseReference:"Referenz-ZIP oder JSON-Dateien auswählen",referenceHint:"Optional. Verwende einen älteren Instagram-Export als Vergleichsreferenz.",nothingLoaded:"Noch nichts geladen.",noReference:"Keine Referenz geladen.",
    overview:"Übersicht",followers:"Follower",following:"Gefolgt",notFollowingBack:"Folgen nicht zurück",insights:"Insights",cohorts:"Kohorten",cleanup:"Bereinigung",mutuals:"Gegenseitig",
    quickChanges:"SCHNELLE ÄNDERUNGEN",referenceComparison:"Referenzvergleich",newFollowers:"Neue Follower",lostFollowers:"Verlorene Follower",newFollowing:"Neu gefolgt",unfollowedByYou:"Von dir entfolgt",
    keepList:"KEEP-LISTE",heartedProfiles:"Markierte Profile",savedLocally:"lokal gespeichert",
    search:"Suchen",searchPlaceholder:"Nutzer suchen...",referenceFilter:"Referenzfilter",referenceAll:"Alle anzeigen",referenceHide:"Referenztreffer ausblenden",referenceOnly:"Nur Referenztreffer anzeigen",
    sort:"Sortierung",newestFirst:"Neueste zuerst",oldestFirst:"Älteste zuerst",nameAsc:"Name A–Z",nameDesc:"Name Z–A",exportCsv:"CSV exportieren",
    emptyTitle:"Keine passenden Nutzer.",emptyCopy:"Die aktuelle Suche oder der Referenzfilter kann alle Nutzer ausschließen.",loadPrompt:"Lade den aktuellen Instagram-ZIP-Export oder die JSON-Dateien hoch, um die Analyse zu starten.",
    processing:"Wird verarbeitet...",invalidJson:"ungültiges JSON",noRecognized:"Keine erkennbare Instagram Followers-/Following-JSON-Datei gefunden.",zipUnsupported:"Dieser Browser kann ZIP-Dateien nicht entpacken.",invalidZip:"Die ZIP-Datei konnte nicht gelesen werden.",
    loadedFiles:"{files} Quelldatei(en) · {followers} Follower · {following} gefolgt · {notFollowing} folgen nicht zurück",visibleUsers:"{count} Nutzer angezeigt",referenceHidden:"{count} durch Referenz ausgeblendet",referenceOnlyShown:"{count} entsprechen der Referenz",
    followsSince:"Folgt dir seit {date}",followingSince:"Du folgst seit {date}",dateUnavailable:"Datum nicht verfügbar",
    growthHistory:"WACHSTUMSVERLAUF",growthTitle:"Gespeicherte Snapshots",saveSnapshot:"Aktuellen Snapshot speichern",clearHistory:"Verlauf löschen",netGrowth:"Netto-Followerwachstum",growthRate:"Wachstumsrate",followerRatio:"Follower / Gefolgt",snapshotCount:"Snapshots",date:"Datum",
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Nützliche Account-Performance",followsPeriod:"Neue Follows",unfollowsPeriod:"Unfollows",netFollowerChange:"Netto-Followeränderung",accountsReached:"Erreichte Konten",profileVisits:"Profilbesuche",externalLinkTaps:"Externe Link-Klicks",contentInteractions:"Content-Interaktionen",discovery:"ENTDECKUNG",nonFollowerReach:"Reichweite durch Nicht-Follower",nonFollowerEngagement:"Engagement durch Nicht-Follower",insightsHistory:"INSIGHTS-VERLAUF",insightSnapshotsSaved:"manuell gespeicherte Insights-Snapshots",saveInsightSnapshot:"Snapshot speichern",followerGrowth:"FOLLOWER-WACHSTUM",followerGrowthTitle:"Gespeicherte Followerzahl im Zeitverlauf",period:"Insights-Zeitraum",noInsightSnapshots:"Noch keine Insights-Snapshots gespeichert.",noInsightSnapshotsCopy:"Lade einen Export mit Insights und speichere einen Snapshot, wenn du einen neuen Punkt zum Wachstumsdiagramm hinzufügen möchtest.",noInsights:"Keine Instagram Insights gefunden.",noInsightsCopy:"Verwende einen vollständigen Instagram-Export mit Past Instagram Insights.",openNext:"Nächstes öffnen",allOpened:"Alle geöffnet",left:"übrig",
    cohortAnalysis:"FOLLOW-KOHORTENANALYSE",cohortTitle:"Wie schnell konvertieren neue Follows?",followBackRate:"Follow-back-Rate",medianTime:"Median Follow-back-Zeit",followedInCohorts:"Beobachtete Follows",suggestedThreshold:"Empfohlene Schwelle",
    within1:"Innerhalb 1 Tag",within2:"Innerhalb 2 Tagen",within3:"Innerhalb 3 Tagen",within7:"Innerhalb 7 Tagen",cohortNeedHistory:"Die Kohorten werden direkt aus den Follow-Zeitstempeln des aktuellen Exports berechnet.",days:"Tage",
    cleanupCandidates:"BEREINIGUNGSKANDIDATEN",cleanupTitle:"Priorisierte Accounts zur Prüfung",cleanupNote:"Der Score nutzt derzeit nur Beziehungsdaten aus Followers/Following-Exporten. Markierte Profile werden ausgeschlossen.",
    olderThan:"Gefolgt seit mehr als",noCleanup:"Keine Bereinigungskandidaten.",noCleanupCopy:"Wähle eine niedrigere Altersgrenze oder lade einen aktuellen Export.",notFollowingReason:"Folgt dir nicht",oldFollowReason:"Langfristig gefolgt",score:"Score",exportDatabase:"Datenbank exportieren",importDatabase:"Datenbank importieren",growthTrends:"WACHSTUMSTRENDS",growthTrendsTitle:"Gespeicherte Kennzahlen im Zeitverlauf vergleichen",chartScale:"Diagrammskala",rawValues:"Rohwerte",indexedValues:"Indexiert (erster Punkt = 100)",active:"Aktiv",actions:"Aktionen",disable:"Deaktivieren",enable:"Aktivieren",delete:"Löschen",databaseImported:"Datenbank importiert.",databaseInvalid:"Ungültige Analyzer-Datenbankdatei.",deleteSnapshotConfirm:"Diesen Snapshot dauerhaft löschen?",day1:"Tag 1",day2:"Tag 2",day3:"Tag 3",days4to7:"Tage 4–7",exportPdf:"PDF exportieren",pdfNoData:"Lade Insights oder speichere mindestens einen Snapshot, bevor du ein PDF exportierst.",pdfTitle:"Instagram Follower Report",pdfGenerated:"Erstellt",pdfCurrentInsights:"Aktuelle Insights",pdfSavedTrends:"Gespeicherte Trends",pdfSnapshotHistory:"Snapshot-Verlauf",driveSyncEyebrow:"GOOGLE DRIVE SYNC",driveSyncTitle:"Öffentliches Instagram-Archiv",driveSyncCopy:"Füge den öffentlichen Drive-Ordnerlink ein. Der Analyzer findet datierte Exporte und relevante JSON-Dateien automatisch.",driveFolderLink:"Öffentlicher Drive-Ordnerlink",syncDrive:"Drive synchronisieren",driveNotSynced:"Nicht synchronisiert",driveSyncing:"Drive wird durchsucht…",driveSynced:"Synchronisiert",driveReady:"Bereit, den öffentlichen Ordner zu durchsuchen.",driveLatest:"Neuester Export",drivePrevious:"Vorheriger Export",driveExportsFound:"Exporte gefunden",driveFilesFound:"Relevante Dateien",driveApiKeyMissing:"",driveBridgeMissing:"Die öffentliche Drive-Bridge ist noch nicht konfiguriert. Trage einmal die Cloudflare-Worker-URL in config.js ein; ein Google-API-Schlüssel oder Billing ist nicht nötig.",driveInvalidLink:"Das sieht nicht wie ein Google-Drive-Ordnerlink aus.",driveNoExports:"Unter diesem Ordner wurden keine datierten Instagram-Exporte mit Followers/Following-Dateien gefunden.",driveSyncComplete:"Drive-Sync abgeschlossen. Der neueste datierte Export wurde als Aktuell geladen. Reference wird nur aus einem Ordner namens Reference geladen, falls vorhanden.",driveSyncFailed:"Drive-Sync fehlgeschlagen",driveAutoSnapshot:"Die neuesten Insights wurden automatisch zum Snapshot-Verlauf hinzugefügt.",driveNoPrevious:"Keine",driveScanningFolder:"Ordner und Dateien werden durchsucht…",driveDownloading:"Relevante JSON-Dateien werden geladen…",scanDriveHistory:"Drive-Verlauf scannen",driveHistoryScanning:"Alle datierten Drive-Exporte werden nach Insights durchsucht…",driveHistoryComplete:"Drive-Verlaufsscan abgeschlossen.",driveHistoryAdded:"Snapshots hinzugefügt",driveHistoryUpdated:"Snapshots aktualisiert",driveHistoryNoInsights:"Keine datierten Insights-Exporte gefunden.",driveReferenceFolder:"Reference-Ordner",driveReferenceFound:"Aus dem Drive-Ordner Reference geladen",driveReferenceMissing:"Kein Reference-Ordner gefunden",readme:"README",documentation:"DOKUMENTATION",add:"Hinzufügen",sourceFilesShort:"{files} Quelldatei(en)",readmeLoadError:"Die README-Datei konnte nicht geladen werden.",exportDriveHistory:"Drive-Cleanup-History exportieren",driveArchiveScanning:"Kompakte History aus den archivierten Drive-Exporten wird erstellt…",driveArchiveReady:"History-Archiv ist fertig. Lade die heruntergeladene JSON-Datei in den gemeinsamen Drive-Ordner hoch, bevor du alte Exporte löschst.",driveArchiveNoMiddle:"Keine dazwischenliegenden datierten Exporte gefunden. Die bestehende History wurde beibehalten.",driveArchiveFailed:"Export des History-Archivs fehlgeschlagen",driveArchiveLoaded:"kompakte History geladen",driveArchiveInvalid:"Eine History-JSON-Datei wurde gefunden, konnte aber nicht validiert werden."
  },
  hu: {
    eyebrow:"HELYI INSTAGRAM ELEMZŐ",privacyCopy:"A fájlok feldolgozása kizárólag ebben a böngészőben történik.",processedLocally:"Helyben feldolgozva",language:"Nyelv",
    currentExport:"AKTUÁLIS EXPORT",currentTitle:"Aktuális Instagram export",referenceExport:"REFERENCIA EXPORT",referenceTitle:"Referencia export",clear:"Törlés",
    chooseCurrent:"Instagram ZIP vagy JSON fájlok kiválasztása",dropHint:"Dobd ide az eredeti Instagram export ZIP-et, vagy válaszd ki a followers/following JSON fájlokat.",
    chooseReference:"Referencia ZIP vagy JSON fájlok kiválasztása",referenceHint:"Opcionális. Egy korábbi Instagram exportot használhatsz összehasonlítási referenciaként.",nothingLoaded:"Nincs fájl betöltve.",noReference:"Nincs referencia betöltve.",
    overview:"Áttekintés",followers:"Követők",following:"Követéseim",notFollowingBack:"Nem követnek vissza",insights:"Insights",cohorts:"Cohortok",cleanup:"Kikövetés",mutuals:"Kölcsönös követések",
    quickChanges:"GYORS VÁLTOZÁSOK",referenceComparison:"Referencia összehasonlítás",newFollowers:"Új követők",lostFollowers:"Elvesztett követők",newFollowing:"Új követéseim",unfollowedByYou:"Általam kikövetve",
    keepList:"KEEP LISTA",heartedProfiles:"Szívezett profilok",savedLocally:"helyben mentve",
    search:"Keresés",searchPlaceholder:"Felhasználók keresése...",referenceFilter:"Referencia szűrő",referenceAll:"Összes megjelenítése",referenceHide:"Referencia találatok elrejtése",referenceOnly:"Csak referencia találatok",
    sort:"Rendezés",newestFirst:"Legújabb elöl",oldestFirst:"Legrégebbi elöl",nameAsc:"Név A–Z",nameDesc:"Név Z–A",exportCsv:"CSV export",
    emptyTitle:"Nincs megfelelő felhasználó.",emptyCopy:"A keresés vagy a referencia szűrő minden felhasználót kizárhat.",loadPrompt:"Töltsd fel az aktuális Instagram ZIP-et vagy JSON fájlokat az elemzéshez.",
    processing:"Feldolgozás...",invalidJson:"érvénytelen JSON",noRecognized:"Nem találtam felismerhető Instagram followers/following JSON fájlt.",zipUnsupported:"Ez a böngésző nem tudja kibontani a ZIP fájlt.",invalidZip:"A ZIP fájl nem olvasható.",
    loadedFiles:"{files} forrásfájl · {followers} követő · {following} követés · {notFollowing} nem követ vissza",visibleUsers:"{count} felhasználó megjelenítve",referenceHidden:"{count} referencia alapján elrejtve",referenceOnlyShown:"{count} szerepel a referenciában",
    followsSince:"Követ: {date}",followingSince:"Követed: {date}",dateUnavailable:"Dátum nem elérhető",
    growthHistory:"NÖVEKEDÉSI ELŐZMÉNYEK",growthTitle:"Mentett snapshotok",saveSnapshot:"Aktuális snapshot mentése",clearHistory:"Előzmények törlése",netGrowth:"Nettó követőnövekedés",growthRate:"Növekedési arány",followerRatio:"Követők / Követéseim",snapshotCount:"Snapshotok",date:"Dátum",
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Hasznos fiókteljesítmény",followsPeriod:"Új követések",unfollowsPeriod:"Kikövetések",netFollowerChange:"Nettó követőváltozás",accountsReached:"Elért fiókok",profileVisits:"Profilmegtekintések",externalLinkTaps:"Külső linkkattintások",contentInteractions:"Tartalominterakciók",discovery:"FELFEDEZÉS",nonFollowerReach:"Nem követőktől érkező reach",nonFollowerEngagement:"Nem követőktől érkező engagement",insightsHistory:"INSIGHTS ELŐZMÉNYEK",insightSnapshotsSaved:"kézzel mentett Insights snapshot",saveInsightSnapshot:"Snapshot mentése",followerGrowth:"KÖVETŐNÖVEKEDÉS",followerGrowthTitle:"Mentett követőszám időben",period:"Insights időszak",noInsightSnapshots:"Még nincs mentett Insights snapshot.",noInsightSnapshotsCopy:"Tölts be Insights adatot tartalmazó exportot, és akkor ments snapshotot, amikor új pontot szeretnél hozzáadni a növekedési grafikonhoz.",noInsights:"Nem találtam Instagram Insights adatot.",noInsightsCopy:"Használj teljes Instagram exportot, amely tartalmazza a Past Instagram Insights fájlokat.",openNext:"Open next",allOpened:"Mind megnyitva",left:"hátra",
    cohortAnalysis:"FOLLOW COHORT ANALÍZIS",cohortTitle:"Milyen gyorsan követnek vissza az új követések?",followBackRate:"Visszakövetési arány",medianTime:"Medián visszakövetési idő",followedInCohorts:"Követett profilok",suggestedThreshold:"Javasolt határ",
    within1:"1 napon belül",within2:"2 napon belül",within3:"3 napon belül",within7:"7 napon belül",cohortNeedHistory:"A cohort elemzés közvetlenül az aktuális export követési időbélyegeiből készül.",days:"nap",
    cleanupCandidates:"KIKÖVETÉSI JELÖLTEK",cleanupTitle:"Prioritás szerint rendezett profilok",cleanupNote:"A pontszám jelenleg csak a followers/following exportokból elérhető kapcsolati adatokat használja. A szívezett profilokat kizárjuk.",
    olderThan:"Ennél régebb óta követem",noCleanup:"Nincs kikövetési jelölt.",noCleanupCopy:"Állíts alacsonyabb időhatárt vagy tölts be aktuális exportot.",notFollowingReason:"Nem követ vissza",oldFollowReason:"Régi követés",score:"Pontszám",exportDatabase:"Adatbázis export",importDatabase:"Adatbázis import",growthTrends:"NÖVEKEDÉSI TRENDEK",growthTrendsTitle:"Mentett mutatók összehasonlítása időben",chartScale:"Grafikon skála",rawValues:"Nyers értékek",indexedValues:"Indexelt (első pont = 100)",active:"Aktív",actions:"Műveletek",disable:"Inaktiválás",enable:"Aktiválás",delete:"Törlés",databaseImported:"Adatbázis importálva.",databaseInvalid:"Érvénytelen analyzer adatbázisfájl.",deleteSnapshotConfirm:"Végleg törlöd ezt a snapshotot?",day1:"1. nap",day2:"2. nap",day3:"3. nap",days4to7:"4–7. nap",exportPdf:"PDF export",pdfNoData:"A PDF export előtt tölts be Insights adatot vagy ments legalább egy snapshotot.",pdfTitle:"Instagram Followers Report",pdfGenerated:"Készült",pdfCurrentInsights:"Aktuális Insights",pdfSavedTrends:"Mentett trendek",pdfSnapshotHistory:"Snapshot előzmények",driveSyncEyebrow:"GOOGLE DRIVE SZINKRON",driveSyncTitle:"Nyilvános Instagram archívum",driveSyncCopy:"Illeszd be a nyilvános Drive mappa linkjét. Az analyzer automatikusan megkeresi a dátumozott exportokat és a releváns JSON fájlokat.",driveFolderLink:"Nyilvános Drive mappa link",syncDrive:"Drive szinkron",driveNotSynced:"Nincs szinkronizálva",driveSyncing:"Drive átvizsgálása…",driveSynced:"Szinkronizálva",driveReady:"Készen áll a nyilvános mappa átvizsgálására.",driveLatest:"Legújabb export",drivePrevious:"Előző export",driveExportsFound:"Talált exportok",driveFilesFound:"Releváns fájlok",driveApiKeyMissing:"",driveBridgeMissing:"A nyilvános Drive bridge még nincs beállítva. Egyszer add hozzá a Cloudflare Worker URL-jét a config.js fájlhoz; Google API-kulcs és billing nem kell.",driveInvalidLink:"Ez nem tűnik Google Drive mappalinknek.",driveNoExports:"Ebben a mappában nem találtam dátumozott Instagram exportot followers/following fájlokkal.",driveSyncComplete:"Drive szinkron kész. A legújabb dátumozott export Currentként töltődött be. Reference csak Reference nevű mappából töltődik be, ha van ilyen.",driveSyncFailed:"A Drive szinkron sikertelen",driveAutoSnapshot:"A legújabb Insights automatikusan bekerült a snapshot előzményekbe.",driveNoPrevious:"Nincs",driveScanningFolder:"Mappák és fájlok átvizsgálása…",driveDownloading:"Releváns JSON fájlok letöltése…",scanDriveHistory:"Drive előzmények beolvasása",driveHistoryScanning:"Az összes dátumozott Drive export Insights adatainak beolvasása…",driveHistoryComplete:"Drive előzmények beolvasása kész.",driveHistoryAdded:"új snapshot",driveHistoryUpdated:"frissített snapshot",driveHistoryNoInsights:"Nem találtam dátumozott Insights exportot.",driveReferenceFolder:"Reference mappa",driveReferenceFound:"Betöltve a Drive Reference mappájából",driveReferenceMissing:"Nem található Reference mappa",readme:"README",documentation:"DOKUMENTÁCIÓ",add:"Hozzáadás",sourceFilesShort:"{files} forrásfájl",readmeLoadError:"A README fájl nem tölthető be.",exportDriveHistory:"Drive cleanup history export",driveArchiveScanning:"Kompakt history készítése a Drive köztes exportjaiból…",driveArchiveReady:"A history archívum elkészült. Töltsd fel a letöltött JSON-t a megosztott Drive mappába, mielőtt törlöd a régi exportokat.",driveArchiveNoMiddle:"Nem találtam köztes dátumozott exportot. A meglévő history megmaradt.",driveArchiveFailed:"A history archívum exportja sikertelen",driveArchiveLoaded:"kompakt history betöltve",driveArchiveInvalid:"Találtam history JSON-t, de nem sikerült érvényesíteni."
  }
};

const state = {
  lang: localStorage.getItem("ifa-language") || "en",
  section: "overview",
  view: "followers",
  current: emptyDataset(),
  reference: emptyDataset(),
  currentLoaded: false,
  referenceLoaded: false,
  currentSourceCount: 0,
  referenceSourceCount: 0,
  insights: null,
  currentSnapshotTimestamp: null,
  reviewed: new Set(JSON.parse(sessionStorage.getItem("ifa-reviewed") || "[]")),
  hearts: new Set(JSON.parse(localStorage.getItem("ifa-hearts") || "[]")),
  insightSnapshots: JSON.parse(localStorage.getItem("ifa-insight-snapshots") || "[]").map(s=>({...s,enabled:s.enabled!==false})),
  driveFolderUrl: localStorage.getItem("ifa-drive-folder-url") || "",
  driveLastSync: null,
  driveHistoryArchive: null
};

function emptyDataset(){return{followers:new Map(),following:new Map(),notFollowingBack:new Map()}}

const els = Object.fromEntries([
  "languageSelect","driveFolderUrl","syncDriveBtn","driveState","driveStateText","driveMessage","driveLatestDate","drivePreviousDate","driveExportCount","driveFileCount","currentFiles","referenceFiles","currentDropzone","referenceDropzone","currentStatus","referenceStatus","clearCurrentBtn","clearReferenceBtn",
  "searchInput","referenceMode","sortSelect","exportCsvBtn","summaryLine","userList","emptyState","metricFollowers","metricFollowing","metricMutuals","metricNfb",
  "newFollowersCount","lostFollowersCount","newFollowingCount","unfollowedByYouCount","heartedCount","followersCount","followingCount","notFollowingBackCount",
  "mobileMenuToggle","topActions","openReadmeBtn","readmeOverlay","closeReadmeBtn","readmeContent","exportPdfBtn","exportDatabaseBtn","importDatabaseInput","saveInsightSnapshotBtn","scanDriveHistoryBtn","exportDriveHistoryBtn","clearSnapshotsBtn","chartScaleMode","insightsPeriod","insightFollowers","insightFollows","insightUnfollows","insightNet","insightReach","insightVisits","insightLinks","insightInteractions","insightNonFollowerReach","insightNonFollowerEngagement","insightSnapshotCount","insightsGrowthChart","insightsChartCard","insightsChartTooltip","insightSnapshotTableBody","insightsGrowthEmpty","insightEmpty","openNextWrap","openNextBtn","openNextRemaining","cohortRate","cohortMedian","cohortTracked","cohortThreshold","cohortGrid","cohortHint"
].map(id=>[id,document.querySelector("#"+id)]));

const navItems=[...document.querySelectorAll(".nav-item")];
const tabs=[...document.querySelectorAll(".tab")];
const panels={
  overview:document.querySelector("#overviewSection"),
  followers:document.querySelector("#listSection"),
  insights:document.querySelector("#insightsSection"),
  cohorts:document.querySelector("#cohortSection")
};

function t(key,vars={}){let s=translations[state.lang]?.[key]??translations.en[key]??key;for(const[k,v]of Object.entries(vars))s=s.replaceAll(`{${k}}`,String(v));return s}

function applyLanguage(){
  document.documentElement.lang=state.lang; els.languageSelect.value=state.lang;
  document.querySelectorAll("[data-i18n]").forEach(n=>{const k=n.dataset.i18n;if(translations[state.lang]?.[k])n.textContent=t(k)});
  els.searchInput.placeholder=t("searchPlaceholder");
  updateStatuses(); renderAll(); updateOpenNext();
}
els.languageSelect.addEventListener("change",()=>{state.lang=els.languageSelect.value;localStorage.setItem("ifa-language",state.lang);applyLanguage()});

els.mobileMenuToggle?.addEventListener("click",()=>{
  const open=els.topActions.classList.toggle("mobile-open");
  els.mobileMenuToggle.classList.toggle("open",open);
  els.mobileMenuToggle.setAttribute("aria-expanded",String(open));
});

document.addEventListener("click",event=>{
  if(window.innerWidth>620)return;
  if(!els.topActions?.classList.contains("mobile-open"))return;
  if(els.topActions.contains(event.target)||els.mobileMenuToggle.contains(event.target))return;
  closeMobileMenu();
});

function closeMobileMenu(){
  els.topActions?.classList.remove("mobile-open");
  els.mobileMenuToggle?.classList.remove("open");
  els.mobileMenuToggle?.setAttribute("aria-expanded","false");
}

const readmeFiles={en:"README.md",de:"README-DE.md",hu:"README-HU.md"};
let activeReadmeLanguage=state.lang;

els.openReadmeBtn?.addEventListener("click",()=>{
  closeMobileMenu();
  openReadme(state.lang);
});
els.closeReadmeBtn?.addEventListener("click",closeReadme);
els.readmeOverlay?.addEventListener("click",event=>{
  if(event.target===els.readmeOverlay)closeReadme();
});
document.querySelectorAll("[data-readme-lang]").forEach(btn=>{
  btn.addEventListener("click",()=>loadReadme(btn.dataset.readmeLang));
});
document.addEventListener("keydown",event=>{
  if(event.key==="Escape"&&!els.readmeOverlay.hidden)closeReadme();
});

async function openReadme(lang){
  els.readmeOverlay.hidden=false;
  document.body.classList.add("readme-open");
  await loadReadme(lang);
}

function closeReadme(){
  els.readmeOverlay.hidden=true;
  document.body.classList.remove("readme-open");
}

async function loadReadme(lang){
  activeReadmeLanguage=readmeFiles[lang]?lang:"en";
  document.querySelectorAll("[data-readme-lang]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.readmeLang===activeReadmeLanguage);
  });
  els.readmeContent.innerHTML='<p class="readme-loading">…</p>';
  try{
    const response=await fetch(readmeFiles[activeReadmeLanguage],{cache:"no-store"});
    if(!response.ok)throw new Error(String(response.status));
    const markdown=await response.text();
    els.readmeContent.innerHTML=renderReadmeMarkdown(markdown);
    els.readmeContent.scrollTop=0;
  }catch(err){
    console.error("README:",err);
    els.readmeContent.textContent=t("readmeLoadError");
  }
}

function renderReadmeMarkdown(markdown){
  const lines=String(markdown||"").replace(/\r\n/g,"\n").split("\n");
  let html="",inCode=false,code=[],inList=false;
  const closeList=()=>{if(inList){html+="</ul>";inList=false;}};
  const inline=value=>escapeHtml(value)
    .replace(/`([^`]+)`/g,"<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");

  for(const raw of lines){
    const line=raw.trimEnd();
    if(line.startsWith("```")){
      closeList();
      if(inCode){
        html+=`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`;
        code=[];inCode=false;
      }else inCode=true;
      continue;
    }
    if(inCode){code.push(raw);continue;}
    if(/^<\/?small>$/i.test(line.trim()))continue;
    if(/^---+$/.test(line.trim())){closeList();html+="<hr>";continue;}
    const heading=line.match(/^(#{1,6})\s+(.+)$/);
    if(heading){
      closeList();
      const level=Math.min(4,heading[1].length+1);
      html+=`<h${level}>${inline(heading[2])}</h${level}>`;
      continue;
    }
    const bullet=line.match(/^[-*]\s+(.+)$/);
    if(bullet){
      if(!inList){html+="<ul>";inList=true;}
      html+=`<li>${inline(bullet[1])}</li>`;
      continue;
    }
    if(/^\d+\.\s+/.test(line)){
      closeList();
      html+=`<p>${inline(line)}</p>`;
      continue;
    }
    if(!line.trim()){closeList();continue;}
    closeList();
    html+=`<p>${inline(line)}</p>`;
  }
  closeList();
  if(inCode)html+=`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`;
  return html;
}


els.driveFolderUrl.value=state.driveFolderUrl;
els.driveFolderUrl.addEventListener("change",()=>{
  state.driveFolderUrl=els.driveFolderUrl.value.trim();
  localStorage.setItem("ifa-drive-folder-url",state.driveFolderUrl);
});
els.syncDriveBtn.addEventListener("click",syncPublicDrive);

setupFileInput(els.currentFiles,els.currentDropzone,"current");
setupFileInput(els.referenceFiles,els.referenceDropzone,"reference");

navItems.forEach(btn=>btn.addEventListener("click",()=>switchSection(btn.dataset.section)));
tabs.forEach(tab=>tab.addEventListener("click",()=>{state.view=tab.dataset.view;tabs.forEach(x=>x.classList.toggle("active",x===tab));renderList()}));
els.searchInput.addEventListener("input",renderList); els.referenceMode.addEventListener("change",renderList); els.sortSelect.addEventListener("change",renderList); els.exportCsvBtn.addEventListener("click",exportVisibleCsv);
els.clearCurrentBtn.addEventListener("click",()=>clearDataset("current")); els.clearReferenceBtn.addEventListener("click",()=>clearDataset("reference"));
els.saveInsightSnapshotBtn.addEventListener("click",saveInsightSnapshot);
els.scanDriveHistoryBtn?.addEventListener("click",scanDriveHistory);
els.exportDriveHistoryBtn?.addEventListener("click",exportDriveCleanupHistory);
els.exportPdfBtn.addEventListener("click",exportPdfReport);
els.exportDatabaseBtn.addEventListener("click",exportDatabase);
els.importDatabaseInput.addEventListener("change",importDatabaseFile);
els.chartScaleMode.addEventListener("change",renderInsights);
document.querySelectorAll("[data-chart-metric]").forEach(el=>el.addEventListener("change",renderInsights));
els.clearSnapshotsBtn.addEventListener("click",()=>{state.insightSnapshots=[];persistInsightSnapshots();renderInsights()});
els.openNextBtn.addEventListener("click",openNextProfile);

function switchSection(section){
  state.section=section;
  navItems.forEach(x=>x.classList.toggle("active",x.dataset.section===section));
  Object.values(panels).forEach(p=>p.classList.remove("active-panel"));
  panels[section].classList.add("active-panel");
  if(section==="followers"){
    renderList();
  } else if(section==="insights"){
    renderInsights();
  } else if(section==="cohorts"){
    renderCohorts();
  } else {
    renderOverview();
  }
  updateOpenNext();
}


const DRIVE_FOLDER_MIME="application/vnd.google-apps.folder";
const DRIVE_RELEVANT_NAMES=new Set([
  "following.json",
  "audience_insights.json",
  "content_interactions.json",
  "profiles_reached.json"
]);

function driveBridgeUrl(){
  return String(window.IFA_CONFIG?.driveBridgeUrl||"").trim().replace(/\/$/,"");
}

function extractDriveFolderId(value){
  const s=String(value||"").trim();
  const m=s.match(/\/folders\/([A-Za-z0-9_-]+)/);
  if(m)return m[1];
  if(/^[A-Za-z0-9_-]{15,}$/.test(s))return s;
  return null;
}

function extractDriveResourceKey(value){
  try{
    const u=new URL(String(value||""));
    return u.searchParams.get("resourcekey")||u.searchParams.get("resourceKey")||"";
  }catch{
    const m=String(value||"").match(/[?&]resourcekey=([A-Za-z0-9_-]+)/i);
    return m?m[1]:"";
  }
}

function isDriveRelevantFile(name){
  const base=String(name||"").toLowerCase();
  return DRIVE_RELEVANT_NAMES.has(base)||/^followers(?:_\d+)?\.json$/i.test(base);
}

function isHistoryArchiveFile(name){
  const base=String(name||"").toLowerCase();
  return base==="instagram-history.json"||/^instagram-history-\d{4}-\d{2}-\d{2}\.json$/i.test(base);
}

function isReferenceDriveFile(file){
  return (file.path||[]).some(segment=>String(segment).trim().toLowerCase()==="reference");
}

function groupReferenceDriveFiles(files){
  return files.filter(isReferenceDriveFile);
}

function setDriveUi(stateName,message){
  els.driveState.dataset.state=stateName;
  els.driveStateText.textContent=t(
    stateName==="syncing"?"driveSyncing":
    stateName==="synced"?"driveSynced":"driveNotSynced"
  );
  if(message)els.driveMessage.textContent=message;
}


const HISTORY_SCHEMA="instagram-followers-analyzer-history";
const HISTORY_VERSION=1;

function relationshipEntryForArchive(row){
  return {
    username:row.username,
    timestamp:Number.isFinite(Number(row.timestamp))?Number(row.timestamp):null
  };
}

function datasetToHistorySnapshot(date,dataset,insights=null){
  const followers=[...dataset.followers.values()]
    .map(relationshipEntryForArchive)
    .sort((a,b)=>a.username.localeCompare(b.username));
  const following=[...dataset.following.values()]
    .map(relationshipEntryForArchive)
    .sort((a,b)=>a.username.localeCompare(b.username));
  return {
    date,
    counts:{
      followers:followers.length,
      following:following.length,
      mutuals:countMutuals(dataset),
      notFollowingBack:dataset.notFollowingBack.size
    },
    followers,
    following,
    insights:insights?normalizeHistoryInsights(insights):null
  };
}

function normalizeHistoryInsights(x){
  if(!x)return null;
  return {
    period:x.period??null,
    followers:numberOrNull(x.followers),
    follows:numberOrNull(x.follows),
    unfollows:numberOrNull(x.unfollows),
    net:numberOrNull(x.net),
    reached:numberOrNull(x.reached),
    profileVisits:numberOrNull(x.profileVisits),
    externalLinkTaps:numberOrNull(x.externalLinkTaps),
    interactions:numberOrNull(x.interactions),
    nonFollowerReach:numberOrNull(x.nonFollowerReach),
    nonFollowerEngagement:numberOrNull(x.nonFollowerEngagement)
  };
}

function numberOrNull(value){
  if(value==null||value==="")return null;
  const n=Number(value);
  return Number.isFinite(n)?n:null;
}

function historySnapshotToDataset(snapshot){
  const followers=new Map(),following=new Map();
  for(const row of Array.isArray(snapshot?.followers)?snapshot.followers:[]){
    const username=cleanUsername(row?.username);
    if(!username)continue;
    putNewest(followers,{
      username,
      href:`https://www.instagram.com/${encodeURIComponent(username)}/`,
      timestamp:numberOrNull(row?.timestamp)
    });
  }
  for(const row of Array.isArray(snapshot?.following)?snapshot.following:[]){
    const username=cleanUsername(row?.username);
    if(!username)continue;
    putNewest(following,{
      username,
      href:`https://www.instagram.com/${encodeURIComponent(username)}/`,
      timestamp:numberOrNull(row?.timestamp)
    });
  }
  const notFollowingBack=new Map();
  for(const [key,row] of following)if(!followers.has(key))notFollowingBack.set(key,row);
  return {followers,following,notFollowingBack};
}

function validateHistoryArchive(payload){
  if(!payload||payload.schema!==HISTORY_SCHEMA||Number(payload.version)!==HISTORY_VERSION)return null;
  if(!Array.isArray(payload.relationshipSnapshots)||!Array.isArray(payload.insightSnapshots))return null;
  return payload;
}

function mergeHistoryArchives(base,extraSnapshots){
  const relationshipByDate=new Map();
  const insightByDate=new Map();

  if(base){
    for(const snap of base.relationshipSnapshots||[]){
      if(/^\d{4}-\d{2}-\d{2}$/.test(String(snap?.date||"")))relationshipByDate.set(snap.date,snap);
    }
    for(const snap of base.insightSnapshots||[]){
      if(/^\d{4}-\d{2}-\d{2}$/.test(String(snap?.date||"")))insightByDate.set(snap.date,snap);
    }
  }

  for(const snap of extraSnapshots){
    relationshipByDate.set(snap.date,snap);
    if(snap.insights){
      insightByDate.set(snap.date,{
        date:snap.date,
        timestamp:dateToNoonTimestamp(snap.date),
        ...snap.insights,
        following:snap.counts?.following??null
      });
    }
  }

  const relationshipSnapshots=[...relationshipByDate.values()].sort((a,b)=>a.date.localeCompare(b.date));
  const insightSnapshots=[...insightByDate.values()].sort((a,b)=>a.date.localeCompare(b.date));

  return {
    schema:HISTORY_SCHEMA,
    version:HISTORY_VERSION,
    generatedAt:new Date().toISOString(),
    description:"Compact historical archive generated by Instagram Followers Analyzer. Raw intermediate Instagram exports may be removed only after this file has been uploaded and verified.",
    relationshipSnapshots,
    insightSnapshots,
    relationshipEvents:buildRelationshipEvents(relationshipSnapshots)
  };
}

function buildRelationshipEvents(snapshots){
  const events=[];
  const sorted=[...snapshots].sort((a,b)=>a.date.localeCompare(b.date));
  for(let i=1;i<sorted.length;i++){
    const prev=historySnapshotToDataset(sorted[i-1]);
    const curr=historySnapshotToDataset(sorted[i]);
    const date=sorted[i].date;

    const newFollowers=[...curr.followers.keys()].filter(k=>!prev.followers.has(k));
    const lostFollowers=[...prev.followers.keys()].filter(k=>!curr.followers.has(k));
    const newFollowing=[...curr.following.keys()].filter(k=>!prev.following.has(k));
    const unfollowedByYou=[...prev.following.keys()].filter(k=>!curr.following.has(k));

    events.push({
      date,
      fromDate:sorted[i-1].date,
      newFollowers,
      lostFollowers,
      newFollowing,
      unfollowedByYou,
      followerChurn:{
        gained:newFollowers.length,
        lost:lostFollowers.length,
        net:newFollowers.length-lostFollowers.length
      }
    });
  }
  return events;
}

function deriveRelationshipLifecycles(snapshots){
  const sorted=[...snapshots].sort((a,b)=>a.date.localeCompare(b.date));
  const profiles=new Map();

  for(const snap of sorted){
    const ds=historySnapshotToDataset(snap);
    const keys=new Set([...ds.followers.keys(),...ds.following.keys()]);
    for(const key of keys){
      if(!profiles.has(key))profiles.set(key,[]);
      profiles.get(key).push({
        date:snap.date,
        follower:ds.followers.has(key),
        following:ds.following.has(key)
      });
    }
  }

  const out={};
  for(const [username,rows] of profiles){
    let followerCycles=0,lastFollower=false;
    let firstFollowerDate=null,lastFollowerSeenDate=null,lastFollowerExitDate=null;
    for(const row of rows){
      if(row.follower&&!lastFollower){
        followerCycles++;
        if(!firstFollowerDate)firstFollowerDate=row.date;
      }
      if(row.follower)lastFollowerSeenDate=row.date;
      if(!row.follower&&lastFollower)lastFollowerExitDate=row.date;
      lastFollower=row.follower;
    }
    out[username]={
      followerCycles,
      firstFollowerDate,
      lastFollowerSeenDate,
      lastFollowerExitDate
    };
  }
  return out;
}

function historyInsightToAppSnapshot(snap){
  return {
    id:snap.date,
    timestamp:numberOrNull(snap.timestamp)??dateToNoonTimestamp(snap.date),
    period:snap.period??null,
    followers:numberOrNull(snap.followers),
    follows:numberOrNull(snap.follows),
    unfollows:numberOrNull(snap.unfollows),
    net:numberOrNull(snap.net),
    reached:numberOrNull(snap.reached),
    profileVisits:numberOrNull(snap.profileVisits),
    externalLinkTaps:numberOrNull(snap.externalLinkTaps),
    interactions:numberOrNull(snap.interactions),
    nonFollowerReach:numberOrNull(snap.nonFollowerReach),
    nonFollowerEngagement:numberOrNull(snap.nonFollowerEngagement),
    following:numberOrNull(snap.following),
    enabled:true
  };
}

function mergeArchiveIntoAppState(archive){
  state.driveHistoryArchive=archive;

  for(const snap of archive.insightSnapshots||[]){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(String(snap?.date||"")))continue;
    const incoming=historyInsightToAppSnapshot(snap);
    const idx=state.insightSnapshots.findIndex(s=>s.id===incoming.id);
    if(idx>=0){
      incoming.enabled=state.insightSnapshots[idx].enabled!==false;
      state.insightSnapshots[idx]=incoming;
    }else{
      state.insightSnapshots.push(incoming);
    }
  }
  state.insightSnapshots.sort((a,b)=>a.timestamp-b.timestamp);
  persistInsightSnapshots();
}

async function findAndLoadDriveHistoryArchive(discovered,bridge){
  const candidates=discovered
    .filter(f=>isHistoryArchiveFile(f.name))
    .sort((a,b)=>String(a.name).localeCompare(String(b.name)));

  if(!candidates.length)return null;

  const canonical=candidates.find(f=>String(f.name).toLowerCase()==="instagram-history.json");
  const file=canonical||candidates.at(-1);
  const text=await downloadDriveTextFile(file,bridge);
  try{
    return validateHistoryArchive(JSON.parse(text));
  }catch{
    return null;
  }
}

async function syncPublicDrive(){
  const bridge=driveBridgeUrl();
  const url=els.driveFolderUrl.value.trim();
  const rootId=extractDriveFolderId(url);
  const rootResourceKey=extractDriveResourceKey(url);

  state.driveFolderUrl=url;
  localStorage.setItem("ifa-drive-folder-url",url);

  if(!rootId){
    setDriveUi("error",t("driveInvalidLink"));
    return;
  }
  if(!bridge){
    setDriveUi("error",t("driveBridgeMissing"));
    return;
  }

  els.syncDriveBtn.disabled=true;
  setDriveUi("syncing",t("driveScanningFolder"));

  try{
    const discovered=[];
    await walkDriveFolder(rootId,[],discovered,bridge,new Set(),rootResourceKey);

    const historyArchive=await findAndLoadDriveHistoryArchive(discovered,bridge);
    if(historyArchive)mergeArchiveIntoAppState(historyArchive);

    const relevant=discovered.filter(f=>isDriveRelevantFile(f.name));
    els.driveFileCount.textContent=String(relevant.length);

    // Current candidates are dated exports outside any special Reference folder.
    const datedNonReference=relevant.filter(f=>!isReferenceDriveFile(f));
    const grouped=groupDriveExportsByDate(datedNonReference);
    const complete=[...grouped.values()]
      .filter(g=>{
        const names=new Set(g.files.map(f=>f.name.toLowerCase()));
        const hasFollowing=names.has("following.json");
        const hasFollowers=[...names].some(n=>/^followers(?:_\d+)?\.json$/i.test(n));
        return hasFollowing&&hasFollowers;
      })
      .sort((a,b)=>a.date.localeCompare(b.date));

    els.driveExportCount.textContent=String(complete.length);

    if(!complete.length){
      els.driveLatestDate.textContent="—";
      els.drivePreviousDate.textContent=t("driveNoPrevious");
      setDriveUi("error",t("driveNoExports"));
      return;
    }

    const latest=complete.at(-1);
    els.driveLatestDate.textContent=latest.date;

    // Reference is NEVER inferred from the second-newest export.
    // It is loaded only from a folder segment named exactly "Reference" (case-insensitive).
    const referenceFiles=groupReferenceDriveFiles(relevant);
    const referenceNames=new Set(referenceFiles.map(f=>f.name.toLowerCase()));
    const hasReferenceFollowing=referenceNames.has("following.json");
    const hasReferenceFollowers=[...referenceNames].some(n=>/^followers(?:_\d+)?\.json$/i.test(n));
    const hasReference=hasReferenceFollowing&&hasReferenceFollowers;

    els.drivePreviousDate.textContent=hasReference?t("driveReferenceFound"):t("driveReferenceMissing");
    setDriveUi("syncing",t("driveDownloading"));

    const latestSources=await downloadDriveSources(latest.files,bridge);
    const latestImported=buildImportFromSources(latestSources);

    state.current=latestImported.dataset;
    state.currentLoaded=true;
    state.currentSourceCount=latestSources.length;
    state.insights=latestImported.insights;
    state.currentSnapshotTimestamp=dateToNoonTimestamp(latest.date);

    // Release raw downloaded source text as soon as parsing is finished.
    // Nothing is written to device storage; fetches use no-store below.
    latestSources.length=0;

    if(hasReference){
      const referenceSources=await downloadDriveSources(referenceFiles,bridge);
      const referenceImported=buildImportFromSources(referenceSources);
      state.reference=referenceImported.dataset;
      state.referenceLoaded=true;
      state.referenceSourceCount=referenceSources.length;
      referenceSources.length=0;
    }else{
      state.reference=emptyDataset();
      state.referenceLoaded=false;
      state.referenceSourceCount=0;
    }

    let snapshotAdded=false;
    if(state.insights){
      const day=latest.date;
      const existed=state.insightSnapshots.some(s=>s.id===day);
      upsertInsightSnapshotFromState();
      snapshotAdded=!existed;
    }

    state.driveLastSync=Date.now();
    updateStatuses();
    renderAll();

    setDriveUi(
      "synced",
      t("driveSyncComplete")
        +(historyArchive?` ${t("driveArchiveLoaded")}.`:"")
        +(snapshotAdded?` ${t("driveAutoSnapshot")}`:"")
    );
  }catch(err){
    console.error("Drive sync:",err);
    setDriveUi("error",`${t("driveSyncFailed")}: ${humanizeDriveError(err)}`);
  }finally{
    els.syncDriveBtn.disabled=false;
  }
}

function humanizeDriveError(err){
  const msg=String(err?.message||err||"Unknown error");
  if(/403|permission|forbidden/i.test(msg)){
    return `${msg}. Check that the folder and its contents are public to anyone with the link.`;
  }
  if(/bridge|fetch|network/i.test(msg)){
    return `${msg}. Check the driveBridgeUrl in config.js and the Cloudflare Worker deployment.`;
  }
  return msg;
}

async function walkDriveFolder(folderId,path,out,bridge,visited,resourceKey=""){
  if(visited.has(folderId))return;
  visited.add(folderId);

  const params=new URLSearchParams({folderId});
  if(resourceKey)params.set("resourceKey",resourceKey);

  const response=await fetch(`${bridge}/list?${params.toString()}`,{cache:"no-store"});
  if(!response.ok){
    const body=await response.text();
    throw new Error(`Public Drive bridge ${response.status}: ${body.slice(0,240)}`);
  }

  const data=await response.json();
  if(data.error)throw new Error(data.error);

  for(const item of data.items||[]){
    if(item.mimeType===DRIVE_FOLDER_MIME){
      await walkDriveFolder(
        item.id,
        [...path,item.name],
        out,
        bridge,
        visited,
        item.resourceKey||""
      );
    }else{
      out.push({...item,path:[...path,item.name]});
    }
  }
}

function inferDriveExportDate(file){
  const joined=(file.path||[]).join("/");
  let m=joined.match(/instagram-[^/]*-(20\d{2})-(\d{2})-(\d{2})(?:-|\/)/i);
  if(m)return `${m[1]}-${m[2]}-${m[3]}`;

  m=joined.match(/meta-(20\d{2})-([A-Za-z]{3})-(\d{1,2})-/i);
  if(m){
    const months={jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"};
    const month=months[m[2].toLowerCase()];
    if(month)return `${m[1]}-${month}-${String(m[3]).padStart(2,"0")}`;
  }

  m=joined.match(/(20\d{2})[-_.](\d{2})[-_.](\d{2})/);
  if(m)return `${m[1]}-${m[2]}-${m[3]}`;

  return null;
}

function groupDriveExportsByDate(files){
  const groups=new Map();
  for(const file of files){
    const date=inferDriveExportDate(file);
    if(!date)continue;
    if(!groups.has(date))groups.set(date,{date,files:[]});
    groups.get(date).files.push(file);
  }
  return groups;
}


async function downloadDriveTextFile(file,bridge){
  const params=new URLSearchParams({fileId:file.id});
  if(file.resourceKey)params.set("resourceKey",file.resourceKey);
  const response=await fetch(`${bridge}/file?${params.toString()}`,{cache:"no-store"});
  if(!response.ok){
    const body=await response.text();
    throw new Error(`${file.name}: Public Drive bridge ${response.status}: ${body.slice(0,220)}`);
  }
  return await response.text();
}

async function downloadDriveSources(files,bridge){
  const selected=files.filter(f=>isDriveRelevantFile(f.name));
  const sources=[];

  for(const file of selected){
    const params=new URLSearchParams({fileId:file.id});
    if(file.resourceKey)params.set("resourceKey",file.resourceKey);

    const response=await fetch(`${bridge}/file?${params.toString()}`,{cache:"no-store"});
    if(!response.ok){
      const body=await response.text();
      throw new Error(`${file.name}: Public Drive bridge ${response.status}: ${body.slice(0,220)}`);
    }
    sources.push({name:(file.path||[file.name]).join("/"),text:await response.text()});
  }
  return sources;
}



async function exportDriveCleanupHistory(){
  const bridge=driveBridgeUrl();
  const url=els.driveFolderUrl.value.trim();
  const rootId=extractDriveFolderId(url);
  const rootResourceKey=extractDriveResourceKey(url);

  if(!rootId){
    alert(t("driveInvalidLink"));
    return;
  }
  if(!bridge){
    alert(t("driveBridgeMissing"));
    return;
  }

  els.exportDriveHistoryBtn.disabled=true;
  setDriveUi("syncing",t("driveArchiveScanning"));

  try{
    const discovered=[];
    await walkDriveFolder(rootId,[],discovered,bridge,new Set(),rootResourceKey);

    const existingArchive=await findAndLoadDriveHistoryArchive(discovered,bridge);
    const relevant=discovered
      .filter(f=>isDriveRelevantFile(f.name))
      .filter(f=>!isReferenceDriveFile(f));

    const groups=[...groupDriveExportsByDate(relevant).values()]
      .filter(g=>{
        const names=new Set(g.files.map(f=>f.name.toLowerCase()));
        return names.has("following.json")&&[...names].some(n=>/^followers(?:_\d+)?\.json$/i.test(n));
      })
      .sort((a,b)=>a.date.localeCompare(b.date));

    const latest=groups.at(-1)||null;
    const intermediate=latest?groups.filter(g=>g.date!==latest.date):[];
    const compactSnapshots=[];

    for(const group of intermediate){
      const sources=await downloadDriveSources(group.files,bridge);
      const parsed=buildImportFromSources(sources);
      compactSnapshots.push(datasetToHistorySnapshot(group.date,parsed.dataset,parsed.insights));
      sources.length=0;
    }

    const archive=mergeHistoryArchives(existingArchive,compactSnapshots);
    archive.generatedFrom={
      driveFolderId:rootId,
      excludedLatestDate:latest?.date??null,
      excludedReferenceFolder:true,
      rawIntermediateExportsIncluded:intermediate.map(g=>g.date),
      existingArchiveMerged:Boolean(existingArchive)
    };
    archive.relationshipLifecycles=deriveRelationshipLifecycles(archive.relationshipSnapshots);

    const blob=new Blob([JSON.stringify(archive,null,2)],{type:"application/json;charset=utf-8"});
    const objectUrl=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=objectUrl;
    a.download="instagram-history.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);

    mergeArchiveIntoAppState(archive);
    renderInsights();

    setDriveUi(
      "synced",
      intermediate.length?t("driveArchiveReady"):`${t("driveArchiveNoMiddle")} ${t("driveArchiveReady")}`
    );
  }catch(err){
    console.error("Drive cleanup history export:",err);
    setDriveUi("error",`${t("driveArchiveFailed")}: ${humanizeDriveError(err)}`);
  }finally{
    els.exportDriveHistoryBtn.disabled=false;
  }
}

async function scanDriveHistory(){
  const bridge=driveBridgeUrl();
  const url=els.driveFolderUrl.value.trim();
  const rootId=extractDriveFolderId(url);
  const rootResourceKey=extractDriveResourceKey(url);

  if(!rootId){
    alert(t("driveInvalidLink"));
    return;
  }
  if(!bridge){
    alert(t("driveBridgeMissing"));
    return;
  }

  els.scanDriveHistoryBtn.disabled=true;
  const oldText=els.driveMessage.textContent;
  setDriveUi("syncing",t("driveHistoryScanning"));

  try{
    const discovered=[];
    await walkDriveFolder(rootId,[],discovered,bridge,new Set(),rootResourceKey);

    const historyArchive=await findAndLoadDriveHistoryArchive(discovered,bridge);
    if(historyArchive)mergeArchiveIntoAppState(historyArchive);

    // Historical analytics come only from normal dated exports.
    // The special Reference folder is excluded from the timeline.
    const relevant=discovered
      .filter(f=>isDriveRelevantFile(f.name))
      .filter(f=>!isReferenceDriveFile(f));

    const grouped=[...groupDriveExportsByDate(relevant).values()]
      .sort((a,b)=>a.date.localeCompare(b.date));

    let added=0;
    let updated=0;
    let found=0;

    for(const group of grouped){
      const insightFiles=group.files.filter(f=>{
        const n=f.name.toLowerCase();
        return DRIVE_RELEVANT_NAMES.has(n) && n!=="following.json";
      });

      if(!insightFiles.length)continue;

      const sources=await downloadDriveSources(insightFiles,bridge);
      const parsed=buildImportFromSources(sources);
      sources.length=0;

      if(!parsed.insights)continue;
      found++;

      const before=state.insightSnapshots.some(s=>s.id===group.date);

      const oldInsights=state.insights;
      const oldTimestamp=state.currentSnapshotTimestamp;
      const oldFollowingLoaded=state.currentLoaded;
      const oldCurrent=state.current;

      // Use the dated export's Insights. If following.json is present in the same
      // dated group, use it for the historical following count too.
      let historicalFollowing=null;
      const relationshipFiles=group.files.filter(f=>f.name.toLowerCase()==="following.json");
      if(relationshipFiles.length){
        const relSources=await downloadDriveSources(relationshipFiles,bridge);
        const relParsed=buildImportFromSources(relSources);
        historicalFollowing=relParsed.dataset?.following?.size ?? null;
        relSources.length=0;
      }

      state.insights=parsed.insights;
      state.currentSnapshotTimestamp=dateToNoonTimestamp(group.date);

      // Preserve current relationship data; inject historical following count only
      // into the snapshot being upserted.
      const x=state.insights;
      const ts=state.currentSnapshotTimestamp;
      const day=group.date;
      const existing=state.insightSnapshots.find(s=>s.id===day);
      const snapshot={
        id:day,
        timestamp:ts,
        period:x.period||null,
        followers:x.followers,
        follows:x.follows,
        unfollows:x.unfollows,
        net:x.net,
        reached:x.reached,
        profileVisits:x.profileVisits,
        externalLinkTaps:x.externalLinkTaps,
        interactions:x.interactions,
        nonFollowerReach:x.nonFollowerReach,
        nonFollowerEngagement:x.nonFollowerEngagement,
        following:historicalFollowing,
        enabled:existing?.enabled!==false
      };
      const idx=state.insightSnapshots.findIndex(s=>s.id===day);
      if(idx>=0){
        state.insightSnapshots[idx]=snapshot;
        updated++;
      }else{
        state.insightSnapshots.push(snapshot);
        added++;
      }

      state.insights=oldInsights;
      state.currentSnapshotTimestamp=oldTimestamp;
      state.currentLoaded=oldFollowingLoaded;
      state.current=oldCurrent;
    }

    state.insightSnapshots.sort((a,b)=>a.timestamp-b.timestamp);
    persistInsightSnapshots();
    renderInsights();

    if(!found){
      setDriveUi("synced",t("driveHistoryNoInsights"));
    }else{
      setDriveUi(
        "synced",
        `${t("driveHistoryComplete")} ${added} ${t("driveHistoryAdded")}, ${updated} ${t("driveHistoryUpdated")}.`
      );
    }
  }catch(err){
    console.error("Drive history scan:",err);
    setDriveUi("error",`${t("driveSyncFailed")}: ${humanizeDriveError(err)}`);
  }finally{
    els.scanDriveHistoryBtn.disabled=false;
  }
}


function dateToNoonTimestamp(day){
  const d=new Date(`${day}T12:00:00`);
  return Number.isNaN(d.getTime())?Math.floor(Date.now()/1000):Math.floor(d.getTime()/1000);
}

function upsertInsightSnapshotFromState(){
  if(!state.insights)return false;
  const ts=state.currentSnapshotTimestamp||Math.floor(Date.now()/1000);
  const day=new Date(ts*1000).toISOString().slice(0,10);
  const x=state.insights;
  const existing=state.insightSnapshots.find(s=>s.id===day);
  const snapshot={
    id:day,
    timestamp:ts,
    period:x.period||null,
    followers:x.followers,
    follows:x.follows,
    unfollows:x.unfollows,
    net:x.net,
    reached:x.reached,
    profileVisits:x.profileVisits,
    externalLinkTaps:x.externalLinkTaps,
    interactions:x.interactions,
    nonFollowerReach:x.nonFollowerReach,
    nonFollowerEngagement:x.nonFollowerEngagement,
    following:state.currentLoaded?state.current.following.size:null,
    enabled:existing?.enabled!==false
  };
  const idx=state.insightSnapshots.findIndex(s=>s.id===day);
  if(idx>=0)state.insightSnapshots[idx]=snapshot;
  else state.insightSnapshots.push(snapshot);
  state.insightSnapshots.sort((a,b)=>a.timestamp-b.timestamp);
  persistInsightSnapshots();
  return idx<0;
}


function clearDataset(target){state[target]=emptyDataset();state[`${target}Loaded`]=false;if(target==="current"){state.insights=null;state.currentSnapshotTimestamp=null;}state[`${target}SourceCount`]=0;(target==="current"?els.currentFiles:els.referenceFiles).value="";updateStatuses();renderAll()}

function setupFileInput(input,dropzone,target){
  input.addEventListener("change",()=>{if(input.files?.length)loadFiles([...input.files],target)});
  ["dragenter","dragover"].forEach(ev=>dropzone.addEventListener(ev,e=>{e.preventDefault();dropzone.classList.add("dragging")}));
  ["dragleave","drop"].forEach(ev=>dropzone.addEventListener(ev,e=>{e.preventDefault();dropzone.classList.remove("dragging")}));
  dropzone.addEventListener("drop",e=>{const files=[...e.dataTransfer.files].filter(f=>/\.(json|zip)$/i.test(f.name));if(files.length)loadFiles(files,target)});
}

async function loadFiles(files,target){
  const status=target==="current"?els.currentStatus:els.referenceStatus; status.textContent=t("processing");
  try{
    const sources=[];
    for(const file of files){
      if(file.name.toLowerCase().endsWith(".zip")) sources.push(...await extractInstagramJsonFilesFromZip(file));
      else if(file.name.toLowerCase().endsWith(".json")) sources.push({name:file.name,text:await file.text()});
    }
    const imported=buildImportFromSources(sources);state[target]=imported.dataset;state[`${target}Loaded`]=true;state[`${target}SourceCount`]=sources.length;
    if(target==="current"){
      state.insights=imported.insights;
      state.currentSnapshotTimestamp=inferSnapshotTimestamp(files,imported.insights);
    }
    updateStatuses();renderAll();
  }catch(err){console.error(err);status.textContent=`Error: ${err.message}`}
}

function updateStatuses(){
  for(const target of ["current","reference"]){
    const el=target==="current"?els.currentStatus:els.referenceStatus;
    const loaded=state[`${target}Loaded`];
    el.classList.toggle("loaded",loaded);
    if(loaded){
      const ds=state[target];
      const vars={files:state[`${target}SourceCount`],followers:ds.followers.size,following:ds.following.size,notFollowing:ds.notFollowingBack.size};
      el.innerHTML=`<span class="status-desktop">${escapeHtml(t("loadedFiles",vars))}</span><span class="status-mobile">${escapeHtml(t("sourceFilesShort",vars))}</span>`;
    }else{
      el.textContent=t(target==="current"?"nothingLoaded":"noReference");
    }
  }
}

async function extractInstagramJsonFilesFromZip(file){
  const buffer=await file.arrayBuffer(),bytes=new Uint8Array(buffer),view=new DataView(buffer),eocd=findEOCD(bytes);if(eocd<0)throw new Error(t("invalidZip"));
  const total=view.getUint16(eocd+10,true),central=view.getUint32(eocd+16,true);let off=central,candidates=[];
  for(let i=0;i<total;i++){
    if(view.getUint32(off,true)!==0x02014b50)throw new Error(t("invalidZip"));
    const compression=view.getUint16(off+10,true),compressedSize=view.getUint32(off+20,true),uncompressedSize=view.getUint32(off+24,true),fileNameLength=view.getUint16(off+28,true),extraLength=view.getUint16(off+30,true),commentLength=view.getUint16(off+32,true),localHeaderOffset=view.getUint32(off+42,true);
    const name=new TextDecoder().decode(bytes.slice(off+46,off+46+fileNameLength)),base=name.split("/").pop().toLowerCase();
    if(base==="following.json"||/^followers(?:_\d+)?\.json$/i.test(base)||["audience_insights.json","content_interactions.json","profiles_reached.json"].includes(base))candidates.push({name,compression,compressedSize,uncompressedSize,localHeaderOffset});
    off+=46+fileNameLength+extraLength+commentLength;
  }
  if(!candidates.length)throw new Error(t("noRecognized"));
  const out=[];for(const entry of candidates)out.push({name:entry.name,text:await extractZipEntryText(buffer,entry)});return out;
}
function findEOCD(bytes){const min=Math.max(0,bytes.length-65557);for(let i=bytes.length-22;i>=min;i--)if(bytes[i]===0x50&&bytes[i+1]===0x4b&&bytes[i+2]===0x05&&bytes[i+3]===0x06)return i;return-1}
async function extractZipEntryText(buffer,entry){
  const bytes=new Uint8Array(buffer),view=new DataView(buffer),off=entry.localHeaderOffset;if(view.getUint32(off,true)!==0x04034b50)throw new Error(t("invalidZip"));
  const fn=view.getUint16(off+26,true),ex=view.getUint16(off+28,true),start=off+30+fn+ex,compressed=bytes.slice(start,start+entry.compressedSize);let output;
  if(entry.compression===0)output=compressed;else if(entry.compression===8){
    if(typeof DecompressionStream==="undefined")throw new Error(t("zipUnsupported"));
    try{const stream=new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));output=new Uint8Array(await new Response(stream).arrayBuffer())}catch{throw new Error(t("zipUnsupported"))}
  }else throw new Error(t("zipUnsupported"));return new TextDecoder().decode(output);
}

function buildImportFromSources(sources){
  const followers=new Map(),following=new Map();let recognized=0;
  const insightParts={audience:null,interactions:null,reach:null};
  for(const s of sources){
    let data;try{data=JSON.parse(s.text)}catch{throw new Error(`${s.name}: ${t("invalidJson")}.`)}
    const base=s.name.toLowerCase().split("/").pop();
    if(base==="following.json"){recognized++;extractFollowing(data).forEach(e=>putNewest(following,e));continue}
    if(/^followers(?:_\d+)?\.json$/i.test(base)){recognized++;extractFollowers(data).forEach(e=>putNewest(followers,e));continue}
    if(base==="audience_insights.json"||data?.organic_insights_audience) insightParts.audience=data;
    else if(base==="content_interactions.json"||data?.organic_insights_interactions) insightParts.interactions=data;
    else if(base==="profiles_reached.json"||data?.organic_insights_reach) insightParts.reach=data;
  }
  if(!recognized)throw new Error(t("noRecognized"));
  const nfb=new Map();for(const[k,v]of following)if(!followers.has(k))nfb.set(k,v);
  return{dataset:{followers,following,notFollowingBack:nfb},insights:parseInsights(insightParts)};
}
function insightMap(root,key){const row=root?.[key]?.[0];return row?.string_map_data||{}}
function valueOf(map,key){return map?.[key]?.value??null}
function numberOf(map,key){const v=valueOf(map,key);if(v==null)return null;const n=Number(String(v).replace(/,/g,"").replace(/%/g,"").trim());return Number.isFinite(n)?n:null}
function parseFollowTypePercent(text,label){if(!text)return null;const m=String(text).match(new RegExp(label+"\\s*:\\s*([\\d.]+)%","i"));return m?Number(m[1]):null}
function parseInsights(parts){
  const a=insightMap(parts.audience,"organic_insights_audience"),i=insightMap(parts.interactions,"organic_insights_interactions"),r=insightMap(parts.reach,"organic_insights_reach");
  if(!Object.keys(a).length&&!Object.keys(i).length&&!Object.keys(r).length)return null;
  const engaged=valueOf(i,"Engaged account by follow type");
  return{
    period:valueOf(a,"Date range")||valueOf(i,"Date range")||valueOf(r,"Date range")||null,
    followers:numberOf(a,"Followers"),follows:numberOf(a,"Follows"),unfollows:numberOf(a,"Unfollows"),net:numberOf(a,"Overall followers"),
    reached:numberOf(r,"Accounts reached"),profileVisits:numberOf(r,"Profile visits"),externalLinkTaps:numberOf(r,"External link taps"),
    interactions:numberOf(i,"Content interactions"),nonFollowerReach:numberOf(r,"Non-followers"),nonFollowerEngagement:parseFollowTypePercent(engaged,"Non-followers")
  };
}
function extractFollowers(data){return(Array.isArray(data)?data:[]).map(normalizeRelationshipEntry).filter(Boolean)}
function extractFollowing(data){const rows=Array.isArray(data)?data:(data&&Array.isArray(data.relationships_following)?data.relationships_following:[]);return rows.map(normalizeRelationshipEntry).filter(Boolean)}
function normalizeRelationshipEntry(entry){
  if(!entry||typeof entry!=="object")return null;const sd=Array.isArray(entry.string_list_data)?entry.string_list_data.find(x=>x&&typeof x==="object"):null;
  const username=cleanUsername(entry.title)||cleanUsername(sd?.value)||usernameFromHref(sd?.href);if(!username)return null;
  const timestamp=Number.isFinite(Number(sd?.timestamp))?Number(sd.timestamp):null;
  return{username,href:sd?.href||`https://www.instagram.com/${encodeURIComponent(username)}/`,timestamp};
}
function cleanUsername(v){if(typeof v!=="string")return"";const s=v.trim().replace(/^@/,"");if(!s||/\s/.test(s))return"";return s}
function usernameFromHref(h){if(typeof h!=="string")return"";try{return cleanUsername(new URL(h).pathname.split("/").filter(Boolean)[0])}catch{return""}}
function putNewest(map,e){const k=e.username.toLowerCase(),old=map.get(k);if(!old||(e.timestamp??-Infinity)>(old.timestamp??-Infinity))map.set(k,e)}

function renderAll(){renderOverview();renderList();renderInsights();renderCohorts();updateOpenNext()}
function renderOverview(){
  const c=state.current;els.metricFollowers.textContent=c.followers.size;els.metricFollowing.textContent=c.following.size;
  let mutuals=0;for(const k of c.following.keys())if(c.followers.has(k))mutuals++;els.metricMutuals.textContent=mutuals;els.metricNfb.textContent=c.notFollowingBack.size;els.heartedCount.textContent=state.hearts.size;
  const changes=referenceChanges();els.newFollowersCount.textContent=changes.newFollowers;els.lostFollowersCount.textContent=changes.lostFollowers;els.newFollowingCount.textContent=changes.newFollowing;els.unfollowedByYouCount.textContent=changes.unfollowedByYou;
}
function referenceChanges(){
  if(!state.currentLoaded||!state.referenceLoaded)return{newFollowers:0,lostFollowers:0,newFollowing:0,unfollowedByYou:0};
  const c=state.current,r=state.reference;
  return{
    newFollowers:[...c.followers.keys()].filter(k=>!r.followers.has(k)).length,
    lostFollowers:[...r.followers.keys()].filter(k=>!c.followers.has(k)).length,
    newFollowing:[...c.following.keys()].filter(k=>!r.following.has(k)).length,
    unfollowedByYou:[...r.following.keys()].filter(k=>!c.following.has(k)).length
  };
}

function currentVisibleRows(){
  let rows=[...state.current[state.view].values()],ref=state.reference[state.view],mode=els.referenceMode.value;
  if(state.referenceLoaded&&mode==="hide")rows=rows.filter(r=>!ref.has(r.username.toLowerCase()));else if(state.referenceLoaded&&mode==="only")rows=rows.filter(r=>ref.has(r.username.toLowerCase()));
  const q=els.searchInput.value.trim().toLowerCase();if(q)rows=rows.filter(r=>r.username.toLowerCase().includes(q));
  const sort=els.sortSelect.value;rows.sort((a,b)=>sort==="name-asc"?a.username.localeCompare(b.username):sort==="name-desc"?b.username.localeCompare(a.username):sort==="date-asc"?(a.timestamp??0)-(b.timestamp??0):(b.timestamp??0)-(a.timestamp??0));return rows;
}
function renderList(){
  els.followersCount.textContent=state.current.followers.size;els.followingCount.textContent=state.current.following.size;els.notFollowingBackCount.textContent=state.current.notFollowingBack.size;
  if(!state.currentLoaded){els.userList.innerHTML="";els.emptyState.style.display="none";els.summaryLine.textContent=t("loadPrompt");return}
  const rows=currentVisibleRows(),mode=els.referenceMode.value,raw=state.current[state.view],ref=state.reference[state.view];let extra="";
  if(state.referenceLoaded&&mode==="hide"){let n=0;for(const k of raw.keys())if(ref.has(k))n++;if(n)extra=` · ${t("referenceHidden",{count:n})}`}
  else if(state.referenceLoaded&&mode==="only"){let n=0;for(const k of raw.keys())if(ref.has(k))n++;extra=` · ${t("referenceOnlyShown",{count:n})}`}
  els.summaryLine.textContent=t("visibleUsers",{count:rows.length})+extra;els.userList.innerHTML=rows.map(renderUserRow).join("");els.emptyState.style.display=rows.length?"none":"flex";bindHeartButtons();bindProfileLinks();updateOpenNext();
}
function renderUserRow(row){
  const key=row.username.toLowerCase(),hearted=state.hearts.has(key),reviewed=state.reviewed.has(key),meta=formatMeta(row.timestamp);
  return `<div class="user-row">
    <div class="avatar">${escapeHtml(row.username.charAt(0).toUpperCase())}</div>
    <a class="username" data-profile-key="${escapeAttribute(key)}" href="${escapeAttribute(row.href)}" target="_blank" rel="noopener noreferrer">@${escapeHtml(row.username)}</a>
    <div class="meta">${escapeHtml(meta)}</div>
    <span class="review-dot ${reviewed?"reviewed":""}" title="${reviewed?"Opened":"Not opened"}"></span>
    <button class="heart-btn ${hearted?"active":""}" data-heart="${escapeAttribute(key)}" type="button" aria-label="Keep">${hearted?"♥":"♡"}</button>
  </div>`;
}
function bindHeartButtons(){document.querySelectorAll("[data-heart]").forEach(btn=>btn.addEventListener("click",()=>{const k=btn.dataset.heart;if(state.hearts.has(k))state.hearts.delete(k);else state.hearts.add(k);localStorage.setItem("ifa-hearts",JSON.stringify([...state.hearts]));renderAll()}))}
function markReviewed(key){state.reviewed.add(key);sessionStorage.setItem("ifa-reviewed",JSON.stringify([...state.reviewed]));renderList()}
function bindProfileLinks(){document.querySelectorAll("[data-profile-key]").forEach(a=>a.addEventListener("click",()=>{const key=a.dataset.profileKey;state.reviewed.add(key);sessionStorage.setItem("ifa-reviewed",JSON.stringify([...state.reviewed]));setTimeout(()=>renderList(),0)}))}
function updateOpenNext(){
  const isList=state.section==="followers"&&state.currentLoaded;
  els.openNextWrap.classList.toggle("visible",isList);if(!isList)return;
  const rows=currentVisibleRows(),remaining=rows.filter(r=>!state.reviewed.has(r.username.toLowerCase()));
  els.openNextBtn.disabled=!remaining.length;els.openNextBtn.querySelector("[data-i18n=openNext]").textContent=remaining.length?t("openNext"):t("allOpened");els.openNextRemaining.textContent=remaining.length?`${remaining.length} ${t("left")}`:"";
}
function openNextProfile(){const next=currentVisibleRows().find(r=>!state.reviewed.has(r.username.toLowerCase()));if(!next)return;const key=next.username.toLowerCase();state.reviewed.add(key);sessionStorage.setItem("ifa-reviewed",JSON.stringify([...state.reviewed]));window.open(next.href,"_blank","noopener");renderList()}
function formatMeta(ts){if(!ts)return t("dateUnavailable");const d=new Date(ts*1000);if(Number.isNaN(d.getTime()))return t("dateUnavailable");const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB",fmt=new Intl.DateTimeFormat(locale,{year:"numeric",month:"2-digit",day:"2-digit"}).format(d);return state.view==="followers"?t("followsSince",{date:fmt}):t("followingSince",{date:fmt})}

function persistInsightSnapshots(){
  localStorage.setItem("ifa-insight-snapshots",JSON.stringify(state.insightSnapshots));
}
function countMutuals(ds){let n=0;for(const k of ds.following.keys())if(ds.followers.has(k))n++;return n}
function inferSnapshotTimestamp(files,insights){
  for(const f of files){
    const m=f.name.match(/(20\d{2})-(\d{2})-(\d{2})/);
    if(m){
      const d=new Date(`${m[1]}-${m[2]}-${m[3]}T12:00:00`);
      if(!Number.isNaN(d.getTime()))return Math.floor(d.getTime()/1000);
    }
  }
  return Math.floor(Date.now()/1000);
}
function saveInsightSnapshot(){
  if(!state.insights)return;
  upsertInsightSnapshotFromState();
  renderInsights();
}
function fmtMetric(v,suffix=""){return v==null?"—":`${Number(v).toLocaleString()}${suffix}`}
function renderInsights(){
  const x=state.insights;
  els.insightEmpty.style.display=x?"none":"flex";
  els.insightsPeriod.textContent=x?.period||"—";
  els.insightFollowers.textContent=fmtMetric(x?.followers);
  els.insightFollows.textContent=fmtMetric(x?.follows);
  els.insightUnfollows.textContent=fmtMetric(x?.unfollows);
  els.insightNet.textContent=x?.net==null?"—":`${x.net>0?"+":""}${Number(x.net).toLocaleString()}`;
  els.insightReach.textContent=fmtMetric(x?.reached);
  els.insightVisits.textContent=fmtMetric(x?.profileVisits);
  els.insightLinks.textContent=fmtMetric(x?.externalLinkTaps);
  els.insightInteractions.textContent=fmtMetric(x?.interactions);
  els.insightNonFollowerReach.textContent=fmtMetric(x?.nonFollowerReach,"%");
  els.insightNonFollowerEngagement.textContent=fmtMetric(x?.nonFollowerEngagement,"%");

  els.saveInsightSnapshotBtn.disabled=!x;
  els.insightSnapshotCount.textContent=state.insightSnapshots.length;

  els.insightSnapshotTableBody.innerHTML=[...state.insightSnapshots].reverse().map(s=>`
    <tr class="${s.enabled===false?"snapshot-inactive":""}">
      <td>
        <label class="snapshot-active-toggle">
          <input type="checkbox" data-snapshot-toggle="${escapeAttribute(s.id)}" ${s.enabled===false?"":"checked"}>
          <span>${s.enabled===false?t("enable"):t("disable")}</span>
        </label>
      </td>
      <td>${fmtDate(s.timestamp)}</td>
      <td>${fmtMetric(s.followers)}</td>
      <td>${fmtMetric(s.following)}</td>
      <td>${escapeHtml(s.period||"—")}</td>
      <td><button class="button ghost danger-ghost snapshot-delete" data-snapshot-delete="${escapeAttribute(s.id)}" type="button">${t("delete")}</button></td>
    </tr>`).join("");

  document.querySelectorAll("[data-snapshot-toggle]").forEach(input=>input.addEventListener("change",()=>{
    const s=state.insightSnapshots.find(x=>x.id===input.dataset.snapshotToggle);
    if(s){s.enabled=input.checked;persistInsightSnapshots();renderInsights();}
  }));
  document.querySelectorAll("[data-snapshot-delete]").forEach(btn=>btn.addEventListener("click",()=>{
    if(confirm(t("deleteSnapshotConfirm"))){
      state.insightSnapshots=state.insightSnapshots.filter(x=>x.id!==btn.dataset.snapshotDelete);
      persistInsightSnapshots();
      renderInsights();
    }
  }));

  els.insightsGrowthEmpty.style.display=state.insightSnapshots.length?"none":"flex";
  drawInsightsGrowthChart(state.insightSnapshots);
}
function drawInsightsGrowthChart(snaps){
  const svg=els.insightsGrowthChart;
  const tooltip=els.insightsChartTooltip;
  const active=snaps.filter(s=>s.enabled!==false);
  const selected=[...document.querySelectorAll("[data-chart-metric]:checked")].map(el=>el.dataset.chartMetric);

  hideChartTooltip();

  if(!active.length||!selected.length){
    svg.innerHTML="";
    return;
  }

  const metricMeta={
    followers:{label:t("followers"),className:"series-followers"},
    following:{label:t("following"),className:"series-following"},
    follows:{label:t("follows"),className:"series-follows"},
    unfollows:{label:t("unfollows"),className:"series-unfollows"},
    reached:{label:t("accountsReached"),className:"series-reached"},
    profileVisits:{label:t("profileVisits"),className:"series-profileVisits"}
  };

  const mode=els.chartScaleMode.value;
  const mobile=window.matchMedia("(max-width: 620px)").matches;
  const w=mobile?520:1200;
  const h=mobile?320:260;
  const pL=mobile?50:56;
  const pR=mobile?18:20;
  const pT=mobile?20:20;
  const pB=mobile?42:38;
  svg.setAttribute("viewBox",`0 0 ${w} ${h}`);

  const series=selected.map(metric=>{
    const rows=active
      .map(s=>({s,value:Number(s[metric])}))
      .filter(r=>Number.isFinite(r.value));

    if(!rows.length)return null;

    const rawValues=rows.map(r=>r.value);
    const base=rawValues[0];

    const plotValues=mode==="indexed"
      ? rawValues.map(v=>base===0?null:(v/base)*100)
      : rawValues;

    return {metric,rows,rawValues,plotValues};
  }).filter(Boolean);

  const allValues=series.flatMap(s=>s.plotValues.filter(v=>Number.isFinite(v)));
  if(!allValues.length){
    svg.innerHTML="";
    return;
  }

  const min=Math.min(...allValues),max=Math.max(...allValues);
  const pad=Math.max(mode==="indexed"?2:1,(max-min)*.10);
  const lo=Math.max(0,min-pad),hi=max+pad,range=Math.max(1,hi-lo);

  const timestamps=active.map(s=>s.timestamp);
  const firstTs=Math.min(...timestamps),lastTs=Math.max(...timestamps);

  const xFor=(timestamp)=>{
    if(firstTs===lastTs)return w/2;
    return pL+(timestamp-firstTs)/(lastTs-firstTs)*(w-pL-pR);
  };
  const yFor=value=>pT+(hi-value)/range*(h-pT-pB);

  const grids=[0,.25,.5,.75,1].map(r=>{
    const y=pT+r*(h-pT-pB);
    const val=hi-r*(hi-lo);
    const label=mode==="indexed"?val.toFixed(0):Math.round(val).toLocaleString();
    return `<line class="chart-gridline" x1="${pL}" y1="${y}" x2="${w-pR}" y2="${y}"/>
            <text class="chart-axis" x="4" y="${y+4}">${label}</text>`;
  }).join("");

  const labels=active.map(s=>`
    <text class="chart-axis chart-date-label" x="${xFor(s.timestamp)}" y="${h-13}" text-anchor="middle">${escapeHtml(shortDate(s.timestamp))}</text>
  `).join("");

  const paths=series.map(ser=>{
    const points=[];
    ser.rows.forEach((row,i)=>{
      const plotValue=ser.plotValues[i];
      if(!Number.isFinite(plotValue))return;
      points.push({
        x:xFor(row.s.timestamp),
        y:yFor(plotValue),
        snapshot:row.s,
        rawValue:ser.rawValues[i],
        plotValue,
        metric:ser.metric
      });
    });

    if(!points.length)return"";

    const d=points.map((q,i)=>(i?"L":"M")+q.x+" "+q.y).join(" ");
    const dots=points.map((q,i)=>`
      <circle
        class="chart-point ${metricMeta[ser.metric].className}"
        cx="${q.x}"
        cy="${q.y}"
        r="2.8"
      />
      <circle
        class="chart-hit"
        cx="${q.x}"
        cy="${q.y}"
        r="13"
        tabindex="0"
        data-chart-series="${ser.metric}"
        data-chart-date="${escapeAttribute(shortDate(q.snapshot.timestamp))}"
        data-chart-raw="${q.rawValue}"
        data-chart-plot="${q.plotValue}"
      />
    `).join("");

    return `<path class="chart-line ${metricMeta[ser.metric].className}" d="${d}"/>${dots}`;
  }).join("");

  svg.innerHTML=grids+labels+paths;

  svg.querySelectorAll(".chart-hit").forEach(hit=>{
    const show=(event)=>{
      const metric=hit.dataset.chartSeries;
      const raw=Number(hit.dataset.chartRaw);
      const plot=Number(hit.dataset.chartPlot);
      const label=metricMeta[metric]?.label||metric;
      const value=mode==="indexed"
        ? `${plot.toFixed(1)} · ${raw.toLocaleString()}`
        : raw.toLocaleString();

      tooltip.innerHTML=`
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(hit.dataset.chartDate)}</span>
        <b>${escapeHtml(value)}</b>
      `;

      const cardRect=els.insightsChartCard.getBoundingClientRect();
      const svgRect=svg.getBoundingClientRect();
      const cx=Number(hit.getAttribute("cx"));
      const cy=Number(hit.getAttribute("cy"));
      const left=(cx/w)*svgRect.width+(svgRect.left-cardRect.left);
      const top=(cy/h)*svgRect.height+(svgRect.top-cardRect.top);

      tooltip.style.left=`${left}px`;
      tooltip.style.top=`${top}px`;
      tooltip.classList.add("visible");
    };

    hit.addEventListener("mouseenter",show);
    hit.addEventListener("focus",show);
    hit.addEventListener("click",show);
    hit.addEventListener("touchstart",show,{passive:true});
    hit.addEventListener("mouseleave",hideChartTooltip);
    hit.addEventListener("blur",hideChartTooltip);
  });
}

function hideChartTooltip(){
  if(!els.insightsChartTooltip)return;
  els.insightsChartTooltip.classList.remove("visible");
}

function shortDate(ts){
  const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB";
  return new Intl.DateTimeFormat(locale,{month:"short",day:"numeric"}).format(new Date(ts*1000));
}


function exportPdfReport(){
  if(!state.insights && !state.insightSnapshots.length){
    alert(t("pdfNoData"));
    return;
  }

  const reportWindow=window.open("","_blank");
  if(!reportWindow){
    alert(t("pdfNoData"));
    return;
  }

  const x=state.insights;
  const activeSnapshots=state.insightSnapshots.filter(s=>s.enabled!==false);
  const chartSvg=els.insightsGrowthChart?.outerHTML||"";
  const generated=new Intl.DateTimeFormat(
    state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB",
    {year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}
  ).format(new Date());

  const metricRows=[
    [t("followers"), x?.followers ?? (activeSnapshots.at(-1)?.followers ?? null)],
    [t("following"), state.currentLoaded?state.current.following.size:(activeSnapshots.at(-1)?.following ?? null)],
    [t("follows"), x?.follows ?? null],
    [t("unfollows"), x?.unfollows ?? null],
    ["Net follower change", x?.net ?? null],
    [t("accountsReached"), x?.reached ?? null],
    [t("profileVisits"), x?.profileVisits ?? null],
    ["Content interactions", x?.interactions ?? null]
  ].filter(([,v])=>v!=null);

  const snapshotRows=[...state.insightSnapshots]
    .filter(s=>s.enabled!==false)
    .slice(-8)
    .reverse()
    .map(s=>`
      <tr>
        <td>${escapeHtml(fmtDate(s.timestamp))}</td>
        <td>${escapeHtml(fmtMetric(s.followers))}</td>
        <td>${escapeHtml(fmtMetric(s.following))}</td>
        <td>${escapeHtml(s.period||"—")}</td>
      </tr>`).join("");

  const reportHtml=`<!doctype html>
<html lang="${escapeAttribute(state.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(t("pdfTitle"))}</title>
<style>
  @page{size:A4 landscape;margin:14mm}
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;color:#14161a;background:#fff}
  .report{max-width:100%;margin:0 auto}
  .head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:16px}
  h1{font-size:26px;letter-spacing:-.03em;margin:0}
  .meta{font-size:11px;color:#68777d;text-align:right}
  .eyebrow{font-size:10px;font-weight:700;letter-spacing:.12em;color:#718087;margin:0 0 5px}
  .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
  .metric{border:1px solid #dde3e6;border-radius:10px;padding:10px 12px}
  .metric span{display:block;font-size:10px;color:#748188;margin-bottom:4px}
  .metric strong{font-size:19px;font-weight:650}
  .section-title{font-size:13px;font-weight:650;margin:14px 0 7px}
  .chart{border:1px solid #dde3e6;border-radius:12px;padding:8px;margin-bottom:12px}
  .chart svg{width:100%;height:118mm;max-height:118mm;display:block}
  .chart-gridline{stroke:#edf0f2;stroke-width:.65}
  .chart-axis{fill:#7f8b91;font-size:10px;font-weight:500}
  .chart-line{fill:none;stroke-width:1.45;stroke-linecap:round;stroke-linejoin:round;opacity:.92}
  .chart-point{stroke:#fff;stroke-width:1.15}
  .chart-hit{display:none}
  .series-followers{stroke:#7c3aed;fill:#7c3aed}
  .series-following{stroke:#0f766e;fill:#0f766e}
  .series-follows{stroke:#16a34a;fill:#16a34a}
  .series-unfollows{stroke:#dc2626;fill:#dc2626}
  .series-reached{stroke:#ea580c;fill:#ea580c}
  .series-profileVisits{stroke:#2563eb;fill:#2563eb}
  table{width:100%;border-collapse:collapse;font-size:10px}
  th,td{border-bottom:1px solid #e5e9eb;padding:5px 6px;text-align:left}
  th{color:#68777d;font-weight:650}
  @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style>
</head>
<body>
  <div class="report">
    <div class="head">
      <div>
        <p class="eyebrow">${escapeHtml(t("pdfCurrentInsights"))}</p>
        <h1>${escapeHtml(t("pdfTitle"))}</h1>
      </div>
      <div class="meta">
        ${x?.period?`${escapeHtml(x.period)}<br>`:""}
        ${escapeHtml(t("pdfGenerated"))}: ${escapeHtml(generated)}
      </div>
    </div>

    <div class="metrics">
      ${metricRows.map(([label,value])=>`
        <div class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(fmtMetric(value))}</strong></div>
      `).join("")}
    </div>

    ${chartSvg?`
      <div class="section-title">${escapeHtml(t("pdfSavedTrends"))}</div>
      <div class="chart">${chartSvg}</div>`:""}

    ${snapshotRows?`
      <div class="section-title">${escapeHtml(t("pdfSnapshotHistory"))}</div>
      <table>
        <thead><tr><th>${escapeHtml(t("date"))}</th><th>${escapeHtml(t("followers"))}</th><th>${escapeHtml(t("following"))}</th><th>${escapeHtml(t("period"))}</th></tr></thead>
        <tbody>${snapshotRows}</tbody>
      </table>`:""}
  </div>
  <script>
    window.addEventListener("load",()=>setTimeout(()=>window.print(),250));
  <\/script>
</body>
</html>`;

  reportWindow.document.open();
  reportWindow.document.write(reportHtml);
  reportWindow.document.close();
}

function exportDatabase(){
  const payload={
    schema:"instagram-followers-analyzer-db",
    version:1,
    exportedAt:new Date().toISOString(),
    data:{
      hearts:[...state.hearts],
      insightSnapshots:state.insightSnapshots
    }
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=`instagram-followers-analyzer-database-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
async function importDatabaseFile(){
  const file=els.importDatabaseInput.files?.[0];
  if(!file)return;
  try{
    const payload=JSON.parse(await file.text());
    if(payload?.schema!=="instagram-followers-analyzer-db"||!payload?.data)throw new Error("invalid");
    state.hearts=new Set(Array.isArray(payload.data.hearts)?payload.data.hearts:[]);
    state.insightSnapshots=(Array.isArray(payload.data.insightSnapshots)?payload.data.insightSnapshots:[]).map(s=>({...s,enabled:s.enabled!==false}));
    localStorage.setItem("ifa-hearts",JSON.stringify([...state.hearts]));
    persistInsightSnapshots();
    renderAll();
    alert(t("databaseImported"));
  }catch{
    alert(t("databaseInvalid"));
  }finally{
    els.importDatabaseInput.value="";
  }
}

function renderCohorts(){
  const res=computeCohortsFromCurrent();
  els.cohortRate.textContent=res.rate.toFixed(1)+"%";
  els.cohortMedian.textContent=res.median==null?"—":res.median.toFixed(1)+" "+t("days");
  els.cohortTracked.textContent=res.tracked;
  els.cohortThreshold.textContent=res.threshold?res.threshold+" "+t("days"):"—";
  els.cohortGrid.innerHTML=[
    [t("day1"),res.day1],[t("day2"),res.day2],[t("day3"),res.day3],[t("days4to7"),res.days4to7]
  ].map(([label,val])=>`<article class="cohort-card"><strong>${val}</strong><span>${label}</span></article>`).join("");
  els.cohortHint.textContent=state.currentLoaded?t("cohortNeedHistory"):t("loadPrompt");
}
function computeCohortsFromCurrent(){
  if(!state.currentLoaded)return{tracked:0,converted:0,rate:0,median:null,day1:0,day2:0,day3:0,days4to7:0,threshold:null};
  const conversions=[];
  let tracked=0;

  for(const [key,followingRow] of state.current.following){
    if(!followingRow.timestamp)continue;
    const followerRow=state.current.followers.get(key);

    if(!followerRow){
      tracked+=1;
      continue;
    }
    if(!followerRow.timestamp)continue;

    const delay=(followerRow.timestamp-followingRow.timestamp)/86400;
    if(delay<0)continue;

    tracked+=1;
    conversions.push(delay);
  }

  const converted=conversions.length;
  const sorted=[...conversions].sort((a,b)=>a-b);
  let median=null;
  if(sorted.length){
    median=sorted.length%2
      ? sorted[(sorted.length-1)/2]
      : (sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;
  }

  const day1=conversions.filter(x=>x>=0&&x<=1).length;
  const day2=conversions.filter(x=>x>1&&x<=2).length;
  const day3=conversions.filter(x=>x>2&&x<=3).length;
  const days4to7=conversions.filter(x=>x>3&&x<=7).length;
  const cumulative=d=>conversions.filter(x=>x<=d).length;
  const rate=tracked?converted/tracked*100:0;

  let threshold=null;
  if(converted){
    for(const d of [1,2,3,4,5,7]){
      if(cumulative(d)/converted>=.87){threshold=d;break}
    }
  }
  return{tracked,converted,rate,median,day1,day2,day3,days4to7,threshold};
}

function exportVisibleCsv(){const rows=currentVisibleRows();if(!rows.length)return;const lines=[["username","instagram_url","timestamp","date"],...rows.map(r=>[r.username,r.href,r.timestamp??"",r.timestamp?new Date(r.timestamp*1000).toISOString():""])];const csv=lines.map(line=>line.map(csvCell).join(",")).join("\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`instagram-${state.view}-${new Date().toISOString().slice(0,10)}.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}
function csvCell(v){const s=String(v??"");return`"${s.replaceAll('"','""')}"`}
function fmtDate(ts){const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB";return new Intl.DateTimeFormat(locale,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(ts*1000))}
function escapeHtml(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function escapeAttribute(v){return escapeHtml(v)}

let chartResizeTimer=null;
window.addEventListener("resize",()=>{
  clearTimeout(chartResizeTimer);
  chartResizeTimer=setTimeout(()=>{ if(state.section==="insights") renderInsights(); },120);
});

applyLanguage();
switchSection("overview");
