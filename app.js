const translations = {
  en: {
    eyebrow:"LOCAL INSTAGRAM ANALYZER",privacyCopy:"Your files are processed only in this browser.",processedLocally:"Processed locally",language:"Language",
    currentExport:"FULL CHECKPOINT",currentTitle:"Full follower checkpoint",referenceExport:"REFERENCE EXPORT",referenceTitle:"Reference export",clear:"Clear",
    chooseCurrent:"Choose current full Instagram export",dropHint:"Drop a complete Instagram ZIP here, or select full followers/following JSON files.",
    chooseReference:"Choose reference ZIP or JSON files",referenceHint:"Optional. Use an older Instagram export as the comparison reference.",nothingLoaded:"No manual full loaded.",noReference:"No reference loaded.",
    overview:"Overview",followers:"Followers",following:"Following",notFollowingBack:"Not Following Back",insights:"Insights",cohorts:"Cohorts",cleanup:"Cleanup",mutuals:"Mutuals",
    quickChanges:"QUICK CHANGES",referenceComparison:"Reference comparison",newFollowers:"New followers",lostFollowers:"Lost followers since Reference",newFollowing:"New following",unfollowedByYou:"Unfollowed by you",
    keepList:"KEEP LIST",heartedProfiles:"Hearted profiles",savedLocally:"saved",
    search:"Search",searchPlaceholder:"Search users...",referenceFilter:"Reference filter",referenceAll:"Show all",referenceHide:"Hide reference matches",referenceOnly:"Show only reference matches",
    sort:"Sort",newestFirst:"Newest first",oldestFirst:"Oldest first",nameAsc:"Name A–Z",nameDesc:"Name Z–A",exportCsv:"Export CSV",
    emptyTitle:"No matching users.",emptyCopy:"The current search or reference filter may exclude all users.",loadPrompt:"Upload the current Instagram ZIP or JSON files to start the analysis.",
    processing:"Processing...",invalidJson:"invalid JSON",noRecognized:"No recognizable followers/following Instagram JSON file was found.",zipUnsupported:"This browser cannot decompress ZIP files.",invalidZip:"The ZIP file could not be read.",
    loadedFiles:"{files} source file(s) · {followers} followers · {following} following · {notFollowing} not following back",visibleUsers:"{count} users shown",referenceHidden:"{count} hidden by reference",referenceOnlyShown:"{count} matching the reference",
    followsSince:"Follows you since {date}",followingSince:"Following since {date}",dateUnavailable:"Date unavailable",
    growthHistory:"GROWTH HISTORY",growthTitle:"Saved snapshots",saveSnapshot:"Save current snapshot",clearHistory:"Clear history",netGrowth:"Net follower growth",growthRate:"Growth rate",followerRatio:"Follower / Following",snapshotCount:"Snapshots",date:"Date",
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Useful account performance",followsPeriod:"Follows",unfollowsPeriod:"Unfollows",netFollowerChange:"Net follower change",accountsReached:"Accounts reached",profileVisits:"Profile visits",externalLinkTaps:"External link taps",contentInteractions:"Content interactions",discovery:"DISCOVERY",nonFollowerReach:"Reach from non-followers",nonFollowerEngagement:"Engagement from non-followers",insightsHistory:"INSIGHTS HISTORY",insightSnapshotsSaved:"saved Insights snapshots",saveInsightSnapshot:"Save snapshot",followerGrowth:"FOLLOWER GROWTH",followerGrowthTitle:"Saved follower count over time",period:"Insight period",noInsightSnapshots:"No saved Insights snapshots yet.",noInsightSnapshotsCopy:"Drive Sync automatically builds the available history. You can still save the currently loaded Insights manually.",noInsights:"No Instagram Insights found.",noInsightsCopy:"Use a full Instagram export that includes Past Instagram Insights.",openNext:"Open next",allOpened:"All opened",left:"left",
    cohortAnalysis:"FOLLOW COHORT ANALYSIS",cohortTitle:"How fast do new follows convert?",followBackRate:"Follow-back rate",medianTime:"Median follow-back time",followedInCohorts:"Tracked follows",suggestedThreshold:"Suggested threshold",
    within1:"Within 1 day",within2:"Within 2 days",within3:"Within 3 days",within7:"Within 7 days",cohortNeedHistory:"Cohorts are calculated directly from the follow timestamps in the current export.",days:"days",
    cleanupCandidates:"CLEANUP CANDIDATES",cleanupTitle:"Prioritized accounts to review",cleanupNote:"The score currently uses only relationship data available from followers/following exports. Hearted profiles are excluded.",
    olderThan:"Following older than",noCleanup:"No cleanup candidates.",noCleanupCopy:"Try a lower age threshold or load a current export.",notFollowingReason:"Not following you",oldFollowReason:"Long-term follow",score:"Score",exportDatabase:"Export database",importDatabase:"Import database",growthTrends:"GROWTH TRENDS",growthTrendsTitle:"Compare saved metrics over time",chartScale:"Chart scale",rawValues:"Raw values",indexedValues:"Indexed (first point = 100)",active:"Active",actions:"Actions",disable:"Disable",enable:"Enable",delete:"Delete",databaseImported:"Database imported.",databaseInvalid:"Invalid analyzer database file.",deleteSnapshotConfirm:"Delete this snapshot permanently?",day1:"Day 1",day2:"Day 2",day3:"Day 3",days4to7:"Days 4–7",exportPdf:"Export PDF",pdfNoData:"Load Insights or save at least one snapshot before exporting a PDF.",pdfTitle:"Instagram Followers Report",pdfGenerated:"Generated",pdfCurrentInsights:"Current Insights",pdfSavedTrends:"Saved trends",pdfSnapshotHistory:"Snapshot history",driveSyncEyebrow:"GOOGLE DRIVE SYNC",driveSyncTitle:"Daily Instagram archive",driveSyncCopy:"Paste the public Drive folder link. Daily exports are used for tracking; Reference and Full Exports remain isolated.",driveFolderLink:"Public Drive folder link",syncDrive:"Sync Drive",driveNotSynced:"Not synced",driveSyncing:"Scanning Drive…",driveSynced:"Synced",driveReady:"Ready to scan the public folder.",driveLatest:"Latest Daily",drivePrevious:"Last Full",driveExportsFound:"Reference",driveFilesFound:"Daily exports",driveApiKeyMissing:"",driveBridgeMissing:"The public Drive bridge is not configured yet. Add your Cloudflare Worker URL to config.js once; no Google API key or billing is needed.",driveInvalidLink:"This does not look like a Google Drive folder link.",driveNoExports:"No dated Instagram exports with followers/following files were found under this folder.",driveSyncComplete:"Drive sync complete. Daily tracking, Reference, Full Exports and Insights were loaded as separate data sources.",driveSyncFailed:"Drive sync failed",driveAutoSnapshot:"Insights history was updated automatically.",driveNoPrevious:"None",driveScanningFolder:"Scanning folders and files…",driveDownloading:"Downloading relevant JSON files…",scanDriveHistory:"Scan Drive history",driveHistoryScanning:"Rebuilding all dated Drive Insights…",driveHistoryComplete:"Drive Insights history rebuilt.",driveHistoryAdded:"snapshots added",driveHistoryUpdated:"snapshots updated",driveHistoryNoInsights:"No dated Insights exports were found.",driveReferenceFolder:"Reference folder",driveReferenceFound:"Loaded from Drive reference folder",driveReferenceMissing:"No reference folder found",readme:"README",documentation:"DOCUMENTATION",add:"Add",sourceFilesShort:"{files} source file(s)",readmeLoadError:"Could not load the README file.",driveDailyModeNote:"Daily Sync keeps positive follower observations and full daily Following snapshots. Lost followers are verified only against a Full Checkpoint.",driveFollowerListNote:"Observed follower events from Daily Sync. This is not a verified current follower snapshot.",driveNfbListNote:"NFB is reconstructed from the latest Full Checkpoint plus later Daily follower events. Rename candidates are excluded.",loadedDriveDaily:"{files} daily source file(s) · {followers} observed follower records · {following} latest following · {notFollowing} no follow-back observed",hideHearted:"Hide hearted",heartSync:"HEART SYNC",heartSyncKey:"Sync key",heartSyncButton:"Sync hearts",heartSyncLocal:"Local only",heartSyncSyncing:"Syncing...",heartSyncSynced:"Cloud synced",heartSyncReady:"Enter the same sync key that is stored as HEARTS_SYNC_KEY in the Cloudflare Worker.",heartSyncDone:"Hearts synchronized.",heartSyncNoKey:"Enter your Heart Sync key first.",heartSyncInvalidKey:"Heart Sync key was rejected.",heartSyncError:"Heart Sync failed",heartSyncAuto:"Heart changes sync automatically while a key is saved.",fullCheckpoint:"FULL CHECKPOINT",currentFull:"CURRENT FULL",lastFull:"LAST FULL",fullSourceManual:"Manual upload",fullSourceDrive:"Drive · Full Exports",fullNoCheckpoint:"No full checkpoint available.",driveReferenceLoadedShort:"Loaded",driveFullMissing:"None",unfollowed:"Unfollowers",renamed:"Renamed",unfollowedNeedsSync:"Daily Sync is required to reconstruct accounts that were observed as followers.",unfollowedNeedsFull:"A Full Checkpoint is required to verify which observed followers are no longer present.",syncDriveAction:"Sync Drive",addFullAction:"Add Full Export",unfollowedCutoff:"Compared only through the Full Checkpoint cutoff: {date}.",baselineFollowerLost:"Reference follower, absent from latest Full Checkpoint",joinedThenLeft:"Joined during tracking, later absent",renameEvidenceFollower:"Follower timestamp",renameEvidenceFollowing:"Following timestamp",renameConfidenceHigh:"High confidence",renameConfidenceLikely:"Likely",myFollowingActivity:"MY FOLLOWING ACTIVITY",myFollowingTitle:"Your daily follow activity",followedByMe:"Followed by me",unfollowedByMe:"Unfollowed by me",netFollowing:"Net following",refollowedByMe:"Refollowed",activityFrom:"From",activityTo:"To",activityNoData:"Drive Sync is required for daily Following activity.",activityFollowed:"Followed",activityUnfollowed:"Unfollowed",activityRefollow:"Refollow",detectedBetweenSnapshots:"Detected between daily snapshots",growthDailyDetails:"Daily account details",newFollowersObserved:"New followers observed",noDailyDetails:"No account-level Daily events for this date.",followingCohortAnalysis:"FOLLOWING COHORT ANALYSIS",followingCohortTitle:"How long do you keep following new accounts?",followingCohortTracked:"Tracked follow cycles",followingCohortStill:"Still following",followingCohortLeft:"Unfollowed later",followingCohortRetention:"Current retention",followingRetention1:"1 day retention",followingRetention2:"2 day retention",followingRetention3:"3 day retention",followingRetention7:"7 day retention",followingCohortNoData:"Daily Sync needs at least two Following snapshots for this analysis.",followingCohortAccounts:"Following cohorts by day",statusStillFollowing:"Still following",statusUnfollowedLater:"Unfollowed later",eligible:"eligible",nfbFullBasis:"NFB basis: {full} Full + later Daily follower events.",follows:"Follows",unfollows:"Unfollows",allTimeFollowers:"All-time Followers",allTimeNeedsSync:"Load at least one export that contains follower data.",sourceDetails:"Details",sourceAuto:"Automatic",sourceDaily:"Daily Sync",sourceFull:"Full Checkpoint",sourceFollowingLabel:"Following list",sourceFollowersLabel:"Followers list",sourceOverride:"Choose source",sourceOverrideActive:"Manual source choice is active for this session.",sourceTimeUnknown:"exact file time unavailable",followersSourceFull:"Built from the latest Full export plus {count} newer Daily follows.",followersSourceFallback:"No Full export yet, so this uses the first Daily baseline plus every Daily follow seen since.",followersSourceManualOnly:"Using the manually loaded Full export.",followingSourceDaily:"Using the Daily Following list because it is the newest complete list.",followingSourceFull:"Using the Full export Following list because it is the newest complete list.",followingSourceFallbackDaily:"Using the latest Daily Following list. Exact file times could not be compared.",followingSourceFallbackFull:"Using the Full export Following list because no Daily Following list is available.",nfbSourceFull:"Compared from the latest Full follower list plus {count} newer Daily follows, against the newest complete Following list.",nfbSourceFallback:"No Full export yet, so NFB uses all follower records seen in Daily Sync against the newest complete Following list.",allTimeSource:"Everyone who has appeared as a follower in any available export.",unfollowersSource:"People seen as followers before, but no longer present in the latest Full export.",renamedSource:"Uses matching relationship timestamps to spot likely username changes.",sourceSnapshot:"Snapshot",sourceAccounts:"accounts",sourceWhyDaily:"Daily file is newer",sourceWhyFull:"Full file is newer",sourceWhyOverride:"chosen manually",sourceWhyFallback:"exact file order unavailable",growthOpenDetails:"Open day details"
  },
  de: {
    eyebrow:"LOKALER INSTAGRAM ANALYZER",privacyCopy:"Deine Dateien werden ausschließlich in diesem Browser verarbeitet.",processedLocally:"Lokal verarbeitet",language:"Sprache",
    currentExport:"FULL CHECKPOINT",currentTitle:"Vollständiger Follower-Checkpoint",referenceExport:"REFERENZ-EXPORT",referenceTitle:"Referenz-Export",clear:"Löschen",
    chooseCurrent:"Aktuellen vollständigen Instagram-Export auswählen",dropHint:"Ziehe einen vollständigen Instagram-ZIP hierher oder wähle vollständige Followers-/Following-JSON-Dateien.",
    chooseReference:"Referenz-ZIP oder JSON-Dateien auswählen",referenceHint:"Optional. Verwende einen älteren Instagram-Export als Vergleichsreferenz.",nothingLoaded:"Kein manueller Full-Export geladen.",noReference:"Keine Referenz geladen.",
    overview:"Übersicht",followers:"Follower",following:"Gefolgt",notFollowingBack:"Folgen nicht zurück",insights:"Insights",cohorts:"Kohorten",cleanup:"Bereinigung",mutuals:"Gegenseitig",
    quickChanges:"SCHNELLE ÄNDERUNGEN",referenceComparison:"Referenzvergleich",newFollowers:"Neue Follower",lostFollowers:"Verlorene Follower seit Reference",newFollowing:"Neu gefolgt",unfollowedByYou:"Von dir entfolgt",
    keepList:"KEEP-LISTE",heartedProfiles:"Markierte Profile",savedLocally:"gespeichert",
    search:"Suchen",searchPlaceholder:"Nutzer suchen...",referenceFilter:"Referenzfilter",referenceAll:"Alle anzeigen",referenceHide:"Referenztreffer ausblenden",referenceOnly:"Nur Referenztreffer anzeigen",
    sort:"Sortierung",newestFirst:"Neueste zuerst",oldestFirst:"Älteste zuerst",nameAsc:"Name A–Z",nameDesc:"Name Z–A",exportCsv:"CSV exportieren",
    emptyTitle:"Keine passenden Nutzer.",emptyCopy:"Die aktuelle Suche oder der Referenzfilter kann alle Nutzer ausschließen.",loadPrompt:"Lade den aktuellen Instagram-ZIP-Export oder die JSON-Dateien hoch, um die Analyse zu starten.",
    processing:"Wird verarbeitet...",invalidJson:"ungültiges JSON",noRecognized:"Keine erkennbare Instagram Followers-/Following-JSON-Datei gefunden.",zipUnsupported:"Dieser Browser kann ZIP-Dateien nicht entpacken.",invalidZip:"Die ZIP-Datei konnte nicht gelesen werden.",
    loadedFiles:"{files} Quelldatei(en) · {followers} Follower · {following} gefolgt · {notFollowing} folgen nicht zurück",visibleUsers:"{count} Nutzer angezeigt",referenceHidden:"{count} durch Referenz ausgeblendet",referenceOnlyShown:"{count} entsprechen der Referenz",
    followsSince:"Folgt dir seit {date}",followingSince:"Du folgst seit {date}",dateUnavailable:"Datum nicht verfügbar",
    growthHistory:"WACHSTUMSVERLAUF",growthTitle:"Gespeicherte Snapshots",saveSnapshot:"Aktuellen Snapshot speichern",clearHistory:"Verlauf löschen",netGrowth:"Netto-Followerwachstum",growthRate:"Wachstumsrate",followerRatio:"Follower / Gefolgt",snapshotCount:"Snapshots",date:"Datum",
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Nützliche Account-Performance",followsPeriod:"Neue Follows",unfollowsPeriod:"Unfollows",netFollowerChange:"Netto-Followeränderung",accountsReached:"Erreichte Konten",profileVisits:"Profilbesuche",externalLinkTaps:"Externe Link-Klicks",contentInteractions:"Content-Interaktionen",discovery:"ENTDECKUNG",nonFollowerReach:"Reichweite durch Nicht-Follower",nonFollowerEngagement:"Engagement durch Nicht-Follower",insightsHistory:"INSIGHTS-VERLAUF",insightSnapshotsSaved:"gespeicherte Insights-Snapshots",saveInsightSnapshot:"Snapshot speichern",followerGrowth:"FOLLOWER-WACHSTUM",followerGrowthTitle:"Gespeicherte Followerzahl im Zeitverlauf",period:"Insights-Zeitraum",noInsightSnapshots:"Noch keine Insights-Snapshots gespeichert.",noInsightSnapshotsCopy:"Drive Sync baut den verfügbaren Verlauf automatisch auf. Die aktuell geladenen Insights können weiterhin manuell gespeichert werden.",noInsights:"Keine Instagram Insights gefunden.",noInsightsCopy:"Verwende einen vollständigen Instagram-Export mit Past Instagram Insights.",openNext:"Nächstes öffnen",allOpened:"Alle geöffnet",left:"übrig",
    cohortAnalysis:"FOLLOW-KOHORTENANALYSE",cohortTitle:"Wie schnell konvertieren neue Follows?",followBackRate:"Follow-back-Rate",medianTime:"Median Follow-back-Zeit",followedInCohorts:"Beobachtete Follows",suggestedThreshold:"Empfohlene Schwelle",
    within1:"Innerhalb 1 Tag",within2:"Innerhalb 2 Tagen",within3:"Innerhalb 3 Tagen",within7:"Innerhalb 7 Tagen",cohortNeedHistory:"Die Kohorten werden direkt aus den Follow-Zeitstempeln des aktuellen Exports berechnet.",days:"Tage",
    cleanupCandidates:"BEREINIGUNGSKANDIDATEN",cleanupTitle:"Priorisierte Accounts zur Prüfung",cleanupNote:"Der Score nutzt derzeit nur Beziehungsdaten aus Followers/Following-Exporten. Markierte Profile werden ausgeschlossen.",
    olderThan:"Gefolgt seit mehr als",noCleanup:"Keine Bereinigungskandidaten.",noCleanupCopy:"Wähle eine niedrigere Altersgrenze oder lade einen aktuellen Export.",notFollowingReason:"Folgt dir nicht",oldFollowReason:"Langfristig gefolgt",score:"Score",exportDatabase:"Datenbank exportieren",importDatabase:"Datenbank importieren",growthTrends:"WACHSTUMSTRENDS",growthTrendsTitle:"Gespeicherte Kennzahlen im Zeitverlauf vergleichen",chartScale:"Diagrammskala",rawValues:"Rohwerte",indexedValues:"Indexiert (erster Punkt = 100)",active:"Aktiv",actions:"Aktionen",disable:"Deaktivieren",enable:"Aktivieren",delete:"Löschen",databaseImported:"Datenbank importiert.",databaseInvalid:"Ungültige Analyzer-Datenbankdatei.",deleteSnapshotConfirm:"Diesen Snapshot dauerhaft löschen?",day1:"Tag 1",day2:"Tag 2",day3:"Tag 3",days4to7:"Tage 4–7",exportPdf:"PDF exportieren",pdfNoData:"Lade Insights oder speichere mindestens einen Snapshot, bevor du ein PDF exportierst.",pdfTitle:"Instagram Follower Report",pdfGenerated:"Erstellt",pdfCurrentInsights:"Aktuelle Insights",pdfSavedTrends:"Gespeicherte Trends",pdfSnapshotHistory:"Snapshot-Verlauf",driveSyncEyebrow:"GOOGLE DRIVE SYNC",driveSyncTitle:"Tägliches Instagram-Archiv",driveSyncCopy:"Füge den öffentlichen Drive-Ordnerlink ein. Daily-Exporte dienen dem Tracking; Reference und Full Exports bleiben getrennt.",driveFolderLink:"Öffentlicher Drive-Ordnerlink",syncDrive:"Drive synchronisieren",driveNotSynced:"Nicht synchronisiert",driveSyncing:"Drive wird durchsucht…",driveSynced:"Synchronisiert",driveReady:"Bereit, den öffentlichen Ordner zu durchsuchen.",driveLatest:"Neuester Daily",drivePrevious:"Letzter Full",driveExportsFound:"Reference",driveFilesFound:"Daily-Exporte",driveApiKeyMissing:"",driveBridgeMissing:"Die öffentliche Drive-Bridge ist noch nicht konfiguriert. Trage einmal die Cloudflare-Worker-URL in config.js ein; ein Google-API-Schlüssel oder Billing ist nicht nötig.",driveInvalidLink:"Das sieht nicht wie ein Google-Drive-Ordnerlink aus.",driveNoExports:"Unter diesem Ordner wurden keine datierten Instagram-Exporte mit Followers/Following-Dateien gefunden.",driveSyncComplete:"Drive-Sync abgeschlossen. Daily Tracking, Reference, Full Exports und Insights wurden als getrennte Datenquellen geladen.",driveSyncFailed:"Drive-Sync fehlgeschlagen",driveAutoSnapshot:"Der Insights-Verlauf wurde automatisch aktualisiert.",driveNoPrevious:"Keine",driveScanningFolder:"Ordner und Dateien werden durchsucht…",driveDownloading:"Relevante JSON-Dateien werden geladen…",scanDriveHistory:"Drive-Verlauf scannen",driveHistoryScanning:"Alle datierten Drive-Insights werden neu aufgebaut…",driveHistoryComplete:"Drive-Insights-Verlauf neu aufgebaut.",driveHistoryAdded:"Snapshots hinzugefügt",driveHistoryUpdated:"Snapshots aktualisiert",driveHistoryNoInsights:"Keine datierten Insights-Exporte gefunden.",driveReferenceFolder:"Reference-Ordner",driveReferenceFound:"Aus dem Drive-Ordner Reference geladen",driveReferenceMissing:"Kein Reference-Ordner gefunden",readme:"README",documentation:"DOKUMENTATION",add:"Hinzufügen",sourceFilesShort:"{files} Quelldatei(en)",readmeLoadError:"Die README-Datei konnte nicht geladen werden.",driveDailyModeNote:"Daily Sync speichert positive Follower-Beobachtungen und vollständige tägliche Following-Snapshots. Verlorene Follower werden nur gegen einen Full Checkpoint verifiziert.",driveFollowerListNote:"Beobachtete Follower-Ereignisse aus Daily Sync. Dies ist kein verifizierter aktueller Follower-Snapshot.",driveNfbListNote:"NFB wird aus dem neuesten Full Checkpoint plus späteren Daily-Follower-Ereignissen rekonstruiert. Rename-Kandidaten werden ausgeschlossen.",loadedDriveDaily:"{files} Daily-Quelldatei(en) · {followers} beobachtete Follower · {following} neuester Following-Stand · {notFollowing} ohne beobachteten Follow-back",hideHearted:"Markierte ausblenden",heartSync:"HEART SYNC",heartSyncKey:"Sync-Schlüssel",heartSyncButton:"Hearts synchronisieren",heartSyncLocal:"Nur lokal",heartSyncSyncing:"Synchronisierung...",heartSyncSynced:"Cloud-synchronisiert",heartSyncReady:"Gib denselben Sync-Schlüssel ein, der im Cloudflare Worker als HEARTS_SYNC_KEY gespeichert ist.",heartSyncDone:"Hearts synchronisiert.",heartSyncNoKey:"Gib zuerst deinen Heart-Sync-Schlüssel ein.",heartSyncInvalidKey:"Der Heart-Sync-Schlüssel wurde abgelehnt.",heartSyncError:"Heart Sync fehlgeschlagen",heartSyncAuto:"Heart-Änderungen werden automatisch synchronisiert, solange ein Schlüssel gespeichert ist.",fullCheckpoint:"FULL CHECKPOINT",currentFull:"CURRENT FULL",lastFull:"LAST FULL",fullSourceManual:"Manueller Upload",fullSourceDrive:"Drive · Full Exports",fullNoCheckpoint:"Kein Full Checkpoint verfügbar.",driveReferenceLoadedShort:"Geladen",driveFullMissing:"Keiner",unfollowed:"Unfollowers",renamed:"Umbenannt",unfollowedNeedsSync:"Daily Sync ist erforderlich, um beobachtete Follower zu rekonstruieren.",unfollowedNeedsFull:"Ein Full Checkpoint ist erforderlich, um zu prüfen, welche beobachteten Follower nicht mehr vorhanden sind.",syncDriveAction:"Drive synchronisieren",addFullAction:"Full Export hinzufügen",unfollowedCutoff:"Vergleich nur bis zum Full-Checkpoint-Cutoff: {date}.",baselineFollowerLost:"Reference-Follower, im neuesten Full Checkpoint nicht vorhanden",joinedThenLeft:"Während des Trackings hinzugekommen und später nicht mehr vorhanden",renameEvidenceFollower:"Follower-Zeitstempel",renameEvidenceFollowing:"Following-Zeitstempel",renameConfidenceHigh:"Hohe Sicherheit",renameConfidenceLikely:"Wahrscheinlich",myFollowingActivity:"MEINE FOLLOWING-AKTIVITÄT",myFollowingTitle:"Deine tägliche Follow-Aktivität",followedByMe:"Von mir gefolgt",unfollowedByMe:"Von mir entfolgt",netFollowing:"Netto Following",refollowedByMe:"Erneut gefolgt",activityFrom:"Von",activityTo:"Bis",activityNoData:"Drive Sync ist für die tägliche Following-Aktivität erforderlich.",activityFollowed:"Gefolgt",activityUnfollowed:"Entfolgt",activityRefollow:"Refollow",detectedBetweenSnapshots:"Zwischen Daily Snapshots erkannt",growthDailyDetails:"Tägliche Account-Details",newFollowersObserved:"Neue beobachtete Follower",noDailyDetails:"Für dieses Datum gibt es keine Account-Ereignisse aus Daily Sync.",followingCohortAnalysis:"FOLLOWING COHORT ANALYSIS",followingCohortTitle:"Wie lange folgst du neu gefolgten Accounts?",followingCohortTracked:"Erfasste Follow-Zyklen",followingCohortStill:"Noch gefolgt",followingCohortLeft:"Später entfolgt",followingCohortRetention:"Aktuelle Retention",followingRetention1:"1-Tag-Retention",followingRetention2:"2-Tage-Retention",followingRetention3:"3-Tage-Retention",followingRetention7:"7-Tage-Retention",followingCohortNoData:"Daily Sync benötigt mindestens zwei Following-Snapshots für diese Analyse.",followingCohortAccounts:"Following-Kohorten nach Tag",statusStillFollowing:"Noch gefolgt",statusUnfollowedLater:"Später entfolgt",eligible:"auswertbar",nfbFullBasis:"NFB-Basis: {full} Full + spätere Daily-Follower-Ereignisse.",follows:"Follows",unfollows:"Unfollows",allTimeFollowers:"All-time Followers",allTimeNeedsSync:"Für die All-time-Follower-Historie ist Daily Sync erforderlich.",sourceDetails:"Details",sourceAuto:"Automatisch",sourceDaily:"Daily Sync",sourceFull:"Full Checkpoint",sourceFollowingLabel:"Following-Liste",sourceFollowersLabel:"Follower-Liste",sourceOverride:"Quelle wählen",sourceOverrideActive:"Die manuelle Quellenwahl gilt für diese Sitzung.",sourceTimeUnknown:"exakte Dateizeit nicht verfügbar",followersSourceFull:"Basiert auf dem neuesten Full-Export plus {count} neueren Daily-Follows.",followersSourceFallback:"Noch kein Full-Export. Daher werden der erste Daily-Baseline und alle seitdem gesehenen Daily-Follows verwendet.",followersSourceManualOnly:"Der manuell geladene Full-Export wird verwendet.",followingSourceDaily:"Die Daily-Following-Liste wird verwendet, weil sie die neueste vollständige Liste ist.",followingSourceFull:"Die Following-Liste des Full-Exports wird verwendet, weil sie die neueste vollständige Liste ist.",followingSourceFallbackDaily:"Die neueste Daily-Following-Liste wird verwendet. Die exakten Dateizeiten konnten nicht verglichen werden.",followingSourceFallbackFull:"Die Following-Liste des Full-Exports wird verwendet, weil keine Daily-Following-Liste verfügbar ist.",nfbSourceFull:"Vergleicht den neuesten Full-Followerstand plus {count} neuere Daily-Follows mit der neuesten vollständigen Following-Liste.",nfbSourceFallback:"Noch kein Full-Export. NFB verwendet daher alle in Daily Sync gesehenen Follower gegen die neueste vollständige Following-Liste.",allTimeSource:"Fasst alle Follower-Accounts zusammen, die jemals in Daily Sync gesehen wurden.",unfollowersSource:"Accounts, die früher als Follower gesehen wurden, aber im neuesten Full Export nicht mehr vorhanden sind.",renamedSource:"Nutzt identische Relationship-Zeitstempel, um wahrscheinliche Username-Wechsel zu erkennen.",sourceSnapshot:"Snapshot",sourceAccounts:"Accounts",sourceWhyDaily:"Daily-Datei ist neuer",sourceWhyFull:"Full-Datei ist neuer",sourceWhyOverride:"manuell gewählt",sourceWhyFallback:"exakte Dateireihenfolge nicht verfügbar",growthOpenDetails:"Tagesdetails öffnen"
  },
  hu: {
    eyebrow:"HELYI INSTAGRAM ELEMZŐ",privacyCopy:"A fájlok feldolgozása kizárólag ebben a böngészőben történik.",processedLocally:"Helyben feldolgozva",language:"Nyelv",
    currentExport:"FULL CHECKPOINT",currentTitle:"Teljes follower checkpoint",referenceExport:"REFERENCIA EXPORT",referenceTitle:"Referencia export",clear:"Törlés",
    chooseCurrent:"Aktuális teljes Instagram export kiválasztása",dropHint:"Dobd ide a teljes Instagram ZIP-et, vagy válaszd ki a teljes followers/following JSON fájlokat.",
    chooseReference:"Referencia ZIP vagy JSON fájlok kiválasztása",referenceHint:"Opcionális. Egy korábbi Instagram exportot használhatsz összehasonlítási referenciaként.",nothingLoaded:"Nincs manuális full betöltve.",noReference:"Nincs referencia betöltve.",
    overview:"Áttekintés",followers:"Követők",following:"Követéseim",notFollowingBack:"Nem követnek vissza",insights:"Insights",cohorts:"Cohortok",cleanup:"Kikövetés",mutuals:"Kölcsönös követések",
    quickChanges:"GYORS VÁLTOZÁSOK",referenceComparison:"Referencia összehasonlítás",newFollowers:"Új követők",lostFollowers:"Elvesztett követők a Reference óta",newFollowing:"Új követéseim",unfollowedByYou:"Általam kikövetve",
    keepList:"KEEP LISTA",heartedProfiles:"Szívezett profilok",savedLocally:"mentve",
    search:"Keresés",searchPlaceholder:"Felhasználók keresése...",referenceFilter:"Referencia szűrő",referenceAll:"Összes megjelenítése",referenceHide:"Referencia találatok elrejtése",referenceOnly:"Csak referencia találatok",
    sort:"Rendezés",newestFirst:"Legújabb elöl",oldestFirst:"Legrégebbi elöl",nameAsc:"Név A–Z",nameDesc:"Név Z–A",exportCsv:"CSV export",
    emptyTitle:"Nincs megfelelő felhasználó.",emptyCopy:"A keresés vagy a referencia szűrő minden felhasználót kizárhat.",loadPrompt:"Töltsd fel az aktuális Instagram ZIP-et vagy JSON fájlokat az elemzéshez.",
    processing:"Feldolgozás...",invalidJson:"érvénytelen JSON",noRecognized:"Nem találtam felismerhető Instagram followers/following JSON fájlt.",zipUnsupported:"Ez a böngésző nem tudja kibontani a ZIP fájlt.",invalidZip:"A ZIP fájl nem olvasható.",
    loadedFiles:"{files} forrásfájl · {followers} követő · {following} követés · {notFollowing} nem követ vissza",visibleUsers:"{count} felhasználó megjelenítve",referenceHidden:"{count} referencia alapján elrejtve",referenceOnlyShown:"{count} szerepel a referenciában",
    followsSince:"Követ: {date}",followingSince:"Követed: {date}",dateUnavailable:"Dátum nem elérhető",
    growthHistory:"NÖVEKEDÉSI ELŐZMÉNYEK",growthTitle:"Mentett snapshotok",saveSnapshot:"Aktuális snapshot mentése",clearHistory:"Előzmények törlése",netGrowth:"Nettó követőnövekedés",growthRate:"Növekedési arány",followerRatio:"Követők / Követéseim",snapshotCount:"Snapshotok",date:"Dátum",
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Hasznos fiókteljesítmény",followsPeriod:"Új követések",unfollowsPeriod:"Kikövetések",netFollowerChange:"Nettó követőváltozás",accountsReached:"Elért fiókok",profileVisits:"Profilmegtekintések",externalLinkTaps:"Külső linkkattintások",contentInteractions:"Tartalominterakciók",discovery:"FELFEDEZÉS",nonFollowerReach:"Nem követőktől érkező reach",nonFollowerEngagement:"Nem követőktől érkező engagement",insightsHistory:"INSIGHTS ELŐZMÉNYEK",insightSnapshotsSaved:"mentett Insights snapshot",saveInsightSnapshot:"Snapshot mentése",followerGrowth:"KÖVETŐNÖVEKEDÉS",followerGrowthTitle:"Mentett követőszám időben",period:"Insights időszak",noInsightSnapshots:"Még nincs mentett Insights snapshot.",noInsightSnapshotsCopy:"A Drive szinkron automatikusan felépíti az elérhető előzményeket. Az aktuálisan betöltött Insights továbbra is menthető manuálisan.",noInsights:"Nem találtam Instagram Insights adatot.",noInsightsCopy:"Használj teljes Instagram exportot, amely tartalmazza a Past Instagram Insights fájlokat.",openNext:"Open next",allOpened:"Mind megnyitva",left:"hátra",
    cohortAnalysis:"FOLLOW COHORT ANALÍZIS",cohortTitle:"Milyen gyorsan követnek vissza az új követések?",followBackRate:"Visszakövetési arány",medianTime:"Medián visszakövetési idő",followedInCohorts:"Követett profilok",suggestedThreshold:"Javasolt határ",
    within1:"1 napon belül",within2:"2 napon belül",within3:"3 napon belül",within7:"7 napon belül",cohortNeedHistory:"A cohort elemzés közvetlenül az aktuális export követési időbélyegeiből készül.",days:"nap",
    cleanupCandidates:"KIKÖVETÉSI JELÖLTEK",cleanupTitle:"Prioritás szerint rendezett profilok",cleanupNote:"A pontszám jelenleg csak a followers/following exportokból elérhető kapcsolati adatokat használja. A szívezett profilokat kizárjuk.",
    olderThan:"Ennél régebb óta követem",noCleanup:"Nincs kikövetési jelölt.",noCleanupCopy:"Állíts alacsonyabb időhatárt vagy tölts be aktuális exportot.",notFollowingReason:"Nem követ vissza",oldFollowReason:"Régi követés",score:"Pontszám",exportDatabase:"Adatbázis export",importDatabase:"Adatbázis import",growthTrends:"NÖVEKEDÉSI TRENDEK",growthTrendsTitle:"Mentett mutatók összehasonlítása időben",chartScale:"Grafikon skála",rawValues:"Nyers értékek",indexedValues:"Indexelt (első pont = 100)",active:"Aktív",actions:"Műveletek",disable:"Inaktiválás",enable:"Aktiválás",delete:"Törlés",databaseImported:"Adatbázis importálva.",databaseInvalid:"Érvénytelen analyzer adatbázisfájl.",deleteSnapshotConfirm:"Végleg törlöd ezt a snapshotot?",day1:"1. nap",day2:"2. nap",day3:"3. nap",days4to7:"4–7. nap",exportPdf:"PDF export",pdfNoData:"A PDF export előtt tölts be Insights adatot vagy ments legalább egy snapshotot.",pdfTitle:"Instagram Followers Report",pdfGenerated:"Készült",pdfCurrentInsights:"Aktuális Insights",pdfSavedTrends:"Mentett trendek",pdfSnapshotHistory:"Snapshot előzmények",driveSyncEyebrow:"GOOGLE DRIVE SZINKRON",driveSyncTitle:"Napi Instagram archívum",driveSyncCopy:"Illeszd be a nyilvános Drive mappa linkjét. A Daily exportok trackingre szolgálnak; a Reference és a Full Exports elkülönítve marad.",driveFolderLink:"Nyilvános Drive mappa link",syncDrive:"Drive szinkron",driveNotSynced:"Nincs szinkronizálva",driveSyncing:"Drive átvizsgálása…",driveSynced:"Szinkronizálva",driveReady:"Készen áll a nyilvános mappa átvizsgálására.",driveLatest:"Legújabb Daily",drivePrevious:"Utolsó Full",driveExportsFound:"Reference",driveFilesFound:"Daily exportok",driveApiKeyMissing:"",driveBridgeMissing:"A nyilvános Drive bridge még nincs beállítva. Egyszer add hozzá a Cloudflare Worker URL-jét a config.js fájlhoz; Google API-kulcs és billing nem kell.",driveInvalidLink:"Ez nem tűnik Google Drive mappalinknek.",driveNoExports:"Ebben a mappában nem találtam dátumozott Instagram exportot followers/following fájlokkal.",driveSyncComplete:"Drive szinkron kész. A Daily tracking, Reference, Full Exports és Insights külön adatforrásként lett betöltve.",driveSyncFailed:"A Drive szinkron sikertelen",driveAutoSnapshot:"Az Insights előzmények automatikusan frissültek.",driveNoPrevious:"Nincs",driveScanningFolder:"Mappák és fájlok átvizsgálása…",driveDownloading:"Releváns JSON fájlok letöltése…",scanDriveHistory:"Drive előzmények beolvasása",driveHistoryScanning:"Az összes dátumozott Drive Insights újraépítése…",driveHistoryComplete:"Drive Insights előzmények újraépítve.",driveHistoryAdded:"új snapshot",driveHistoryUpdated:"frissített snapshot",driveHistoryNoInsights:"Nem találtam dátumozott Insights exportot.",driveReferenceFolder:"Reference mappa",driveReferenceFound:"Betöltve a Drive Reference mappájából",driveReferenceMissing:"Nem található Reference mappa",readme:"README",documentation:"DOKUMENTÁCIÓ",add:"Hozzáadás",sourceFilesShort:"{files} forrásfájl",readmeLoadError:"A README fájl nem tölthető be.",driveDailyModeNote:"A Daily Sync pozitív follower megfigyeléseket és teljes napi Following snapshotokat tart meg. Az elveszett followereket csak Full Checkpoint ellen hitelesítjük.",driveFollowerListNote:"A Daily Syncben megfigyelt follower események. Ez nem hitelesített aktuális follower snapshot.",driveNfbListNote:"Az NFB a legutóbbi Full Checkpointból és az azt követő Daily follower eseményekből épül újra. A rename candidate-ek ki vannak zárva.",loadedDriveDaily:"{files} Daily forrásfájl · {followers} megfigyelt follower · {following} legfrissebb following · {notFollowing} megfigyelt follow-back nélkül",hideHearted:"Szívezettek elrejtése",heartSync:"HEART SYNC",heartSyncKey:"Sync key",heartSyncButton:"Hearts szinkron",heartSyncLocal:"Csak lokális",heartSyncSyncing:"Szinkronizálás...",heartSyncSynced:"Cloud szinkronizálva",heartSyncReady:"Add meg ugyanazt a Sync Keyt, amit a Cloudflare Workerben HEARTS_SYNC_KEY néven mentettél.",heartSyncDone:"A Heartok szinkronizálva.",heartSyncNoKey:"Előbb add meg a Heart Sync keyt.",heartSyncInvalidKey:"A Heart Sync key nem megfelelő.",heartSyncError:"A Heart Sync sikertelen",heartSyncAuto:"A Heart módosítások automatikusan szinkronizálódnak, amíg a key el van mentve.",fullCheckpoint:"FULL CHECKPOINT",currentFull:"CURRENT FULL",lastFull:"LAST FULL",fullSourceManual:"Manuális feltöltés",fullSourceDrive:"Drive · Full Exports",fullNoCheckpoint:"Nincs elérhető full checkpoint.",driveReferenceLoadedShort:"Betöltve",driveFullMissing:"Nincs",unfollowed:"Unfollowers",renamed:"Renamed",unfollowedNeedsSync:"Daily Sync szükséges ahhoz, hogy vissza tudjuk építeni a valaha megfigyelt followereket.",unfollowedNeedsFull:"Full Checkpoint szükséges annak ellenőrzéséhez, hogy a megfigyelt followerek közül kik nincsenek már jelen.",syncDriveAction:"Drive szinkron",addFullAction:"Full Export hozzáadása",unfollowedCutoff:"Az összevetés csak a Full Checkpoint cutoff időpontjáig tart: {date}.",baselineFollowerLost:"Reference follower, aki nincs a legutóbbi Full Checkpointban",joinedThenLeft:"Tracking közben érkezett, később már nincs jelen",renameEvidenceFollower:"Follower timestamp",renameEvidenceFollowing:"Following timestamp",renameConfidenceHigh:"Magas bizonyosság",renameConfidenceLikely:"Valószínű",myFollowingActivity:"MY FOLLOWING ACTIVITY",myFollowingTitle:"Saját napi követési aktivitás",followedByMe:"Bekövettem",unfollowedByMe:"Kikövettem",netFollowing:"Nettó following",refollowedByMe:"Újrakövettem",activityFrom:"Ettől",activityTo:"Eddig",activityNoData:"A napi Following aktivitáshoz Drive Sync szükséges.",activityFollowed:"Bekövetve",activityUnfollowed:"Kikövetve",activityRefollow:"Refollow",detectedBetweenSnapshots:"Napi snapshotok között észlelve",growthDailyDetails:"Napi fiók-részletek",newFollowersObserved:"Új megfigyelt followerek",noDailyDetails:"Ehhez a dátumhoz nincs fiókszintű Daily esemény.",followingCohortAnalysis:"FOLLOWING COHORT ANALYSIS",followingCohortTitle:"Mennyi ideig követed az újonnan bekövetett fiókokat?",followingCohortTracked:"Követett follow ciklusok",followingCohortStill:"Még követed",followingCohortLeft:"Később kikövetted",followingCohortRetention:"Aktuális retention",followingRetention1:"1 napos retention",followingRetention2:"2 napos retention",followingRetention3:"3 napos retention",followingRetention7:"7 napos retention",followingCohortNoData:"Ehhez az elemzéshez legalább két Daily Following snapshot szükséges.",followingCohortAccounts:"Following cohortok napok szerint",statusStillFollowing:"Még követed",statusUnfollowedLater:"Később kikövetted",eligible:"értékelhető",nfbFullBasis:"NFB alap: {full} Full + az azt követő Daily follower események.",follows:"Bekövetések",unfollows:"Kikövetések",allTimeFollowers:"All-time Followers",allTimeNeedsSync:"Tölts be legalább egy olyan exportot, amely follower adatokat tartalmaz.",sourceDetails:"Részletek",sourceAuto:"Automatikus",sourceDaily:"Daily Sync",sourceFull:"Full Checkpoint",sourceFollowingLabel:"Following lista",sourceFollowersLabel:"Followers lista",sourceOverride:"Forrás választása",sourceOverrideActive:"Ebben a sessionben kézzel választott forrás van használatban.",sourceTimeUnknown:"a pontos fájlidő nem elérhető",followersSourceFull:"A legutóbbi Full exportból indul, és hozzáad {count} újabb Daily bekövetést.",followersSourceFallback:"Még nincs Full export, ezért az első Daily baseline-ból és azóta minden megfigyelt Daily bekövetésből épül.",followersSourceManualOnly:"A kézzel betöltött Full export van használatban.",followingSourceDaily:"A Daily Following listát használjuk, mert ez a frissebb teljes lista.",followingSourceFull:"A Full export Following listáját használjuk, mert ez a frissebb teljes lista.",followingSourceFallbackDaily:"A legutóbbi Daily Following listát használjuk. A pontos fájlidőket nem lehetett összehasonlítani.",followingSourceFallbackFull:"A Full export Following listáját használjuk, mert nincs Daily Following lista.",nfbSourceFull:"A legutóbbi Full follower listát és {count} újabb Daily bekövetést hasonlít össze a legfrissebb teljes Following listával.",nfbSourceFallback:"Még nincs Full export, ezért az NFB a Daily Syncben valaha látott followereket hasonlítja a legfrissebb teljes Following listával.",allTimeSource:"Összefésüli az összes fiókot, akit a Daily Sync valaha followerként látott.",unfollowersSource:"Minden valaha megfigyelt followert összevet a legutóbbi Full checkpointtal.",renamedSource:"Azonos relationship timestampek alapján keresi a valószínű username-váltásokat.",sourceSnapshot:"Snapshot",sourceAccounts:"fiók",sourceWhyDaily:"a Daily fájl frissebb",sourceWhyFull:"a Full fájl frissebb",sourceWhyOverride:"kézzel kiválasztva",sourceWhyFallback:"a pontos fájlsorrend nem állapítható meg",growthOpenDetails:"Napi részletek megnyitása"
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
  heartRecords: loadHeartRecords(),
  hearts: new Set(),
  insightSnapshots: JSON.parse(localStorage.getItem("ifa-insight-snapshots") || "[]").map(s=>({...s,enabled:s.enabled!==false})),
  driveFolderUrl: localStorage.getItem("ifa-drive-folder-url") || "",
  driveLastSync: null,
  currentOrigin: "none",
  driveFollowerEvents: new Map(),
  reviewAnchorKey: sessionStorage.getItem("ifa-review-anchor") || null,
  driveDailySynced: false,
  manualFull: null,
  driveFull: null,
  fullHistory: [],
  dailyFollowingSnapshots: [],
  dailyFollowerEvents: [],
  recentlyUnfollowedEvents: [],
  identityChanges: [],
  aliasMap: new Map(),
  renamedKeys: new Set(),
  identityFbids: new Map(),
  followingSourceOverride: sessionStorage.getItem("ifa-following-source") || "auto"
};
rebuildHeartSet();

function emptyDataset(){return{followers:new Map(),following:new Map(),notFollowingBack:new Map()}}

function normalizeHeartUsername(value){
  return String(value||"").trim().toLowerCase();
}

function loadHeartRecords(){
  const records={};
  try{
    const saved=JSON.parse(localStorage.getItem("ifa-heart-records")||"{}");
    if(saved&&typeof saved==="object"&&!Array.isArray(saved)){
      for(const [username,row] of Object.entries(saved)){
        const key=normalizeHeartUsername(username);
        if(!key||!row||typeof row!=="object")continue;
        records[key]={
          hearted:row.hearted===true,
          updatedAt:Number.isFinite(Number(row.updatedAt))?Number(row.updatedAt):0
        };
      }
    }
  }catch{}

  // v0.18 and older stored only the active usernames. Migrate them with
  // timestamp 0 so a newer cloud-side removal always wins.
  try{
    const legacy=JSON.parse(localStorage.getItem("ifa-hearts")||"[]");
    if(Array.isArray(legacy)){
      for(const username of legacy){
        const key=normalizeHeartUsername(username);
        if(key&&!records[key])records[key]={hearted:true,updatedAt:0};
      }
    }
  }catch{}

  return records;
}

function rebuildHeartSet(){
  state.hearts=new Set(
    Object.entries(state.heartRecords)
      .filter(([,row])=>row?.hearted===true)
      .map(([username])=>username)
  );
}

function persistHeartRecords(){
  localStorage.setItem("ifa-heart-records",JSON.stringify(state.heartRecords));
  localStorage.setItem("ifa-hearts",JSON.stringify([...state.hearts]));
}

function mergeHeartRecords(localRecords,remoteRecords){
  const merged={...localRecords};
  for(const [rawKey,remote] of Object.entries(remoteRecords||{})){
    const key=normalizeHeartUsername(rawKey);
    if(!key||!remote||typeof remote!=="object")continue;
    const remoteAt=Number.isFinite(Number(remote.updatedAt))?Number(remote.updatedAt):0;
    const local=merged[key];
    const localAt=Number.isFinite(Number(local?.updatedAt))?Number(local.updatedAt):0;

    if(!local||remoteAt>localAt){
      merged[key]={hearted:remote.hearted===true,updatedAt:remoteAt};
    }
  }
  return merged;
}

function setLocalHeart(username,hearted,updatedAt=Date.now()){
  const key=normalizeHeartUsername(username);
  if(!key)return;
  state.heartRecords[key]={hearted:hearted===true,updatedAt};
  rebuildHeartSet();
  persistHeartRecords();
}

const els = Object.fromEntries([
  "languageSelect","driveFolderUrl","syncDriveBtn","driveState","driveStateText","driveMessage","driveLatestDate","drivePreviousDate","driveExportCount","driveFileCount","currentFiles","referenceFiles","currentDropzone","referenceDropzone","currentStatus","referenceStatus","clearCurrentBtn","clearReferenceBtn",
  "searchInput","referenceMode","sortSelect","exportCsvBtn","summaryLine","dataSourceNote","userList","emptyState","metricFollowers","metricFollowing","metricMutuals","metricNfb",
  "newFollowersCount","lostFollowersCount","newFollowingCount","unfollowedByYouCount","heartedCount","heartSyncState","heartSyncKey","heartSyncBtn","heartSyncMessage","followersCount","followingCount","notFollowingBackCount","allTimeFollowersCount","unfollowedCount","renamedCount","fullCardEyebrow","fullCardTitle","listRequirement","listRequirementTitle","listRequirementCopy","requireSyncBtn","requireFullBtn",
  "mobileMenuToggle","topActions","openReadmeBtn","readmeOverlay","closeReadmeBtn","readmeContent","exportPdfBtn","exportDatabaseBtn","importDatabaseInput","saveInsightSnapshotBtn","scanDriveHistoryBtn","clearSnapshotsBtn","chartScaleMode","insightsPeriod","insightFollowers","insightFollows","insightUnfollows","insightNet","insightReach","insightVisits","insightLinks","insightInteractions","insightNonFollowerReach","insightNonFollowerEngagement","insightSnapshotCount","insightsGrowthChart","insightsChartCard","insightsChartTooltip","insightSnapshotTableBody","insightsGrowthEmpty","insightEmpty","myActivityFrom","myActivityTo","myActivityFollowed","myActivityUnfollowed","myActivityNet","myActivityRefollowed","myActivityDailyList","myActivityEmpty","openNextWrap","openNextBtn","openNextRemaining","hideHearted","cohortRate","cohortMedian","cohortTracked","cohortThreshold","cohortGrid","cohortHint","followingCohortTracked","followingCohortStill","followingCohortLeft","followingCohortRetention","followingRetentionGrid","followingCohortDays","followingCohortEmpty"
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

window.addEventListener("focus",()=>{
  if(heartSyncKey()&&Date.now()-lastHeartSyncAt>30000)syncHearts({silent:true});
});
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="visible"&&heartSyncKey()&&Date.now()-lastHeartSyncAt>30000){
    syncHearts({silent:true});
  }
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

setupFileInput(els.currentFiles,els.currentDropzone,"full");
setupFileInput(els.referenceFiles,els.referenceDropzone,"reference");

navItems.forEach(btn=>btn.addEventListener("click",()=>switchSection(btn.dataset.section)));
tabs.forEach(tab=>tab.addEventListener("click",()=>{state.view=tab.dataset.view;tabs.forEach(x=>x.classList.toggle("active",x===tab));renderList()}));
els.heartSyncBtn?.addEventListener("click",saveHeartSyncKeyAndSync);
els.heartSyncKey?.addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();saveHeartSyncKeyAndSync()}});
els.searchInput.addEventListener("input",renderList); els.referenceMode.addEventListener("change",renderList); els.sortSelect.addEventListener("change",renderList); els.hideHearted.addEventListener("change",renderList); els.exportCsvBtn.addEventListener("click",exportVisibleCsv);
els.clearCurrentBtn.addEventListener("click",clearManualFull); els.clearReferenceBtn.addEventListener("click",()=>clearDataset("reference"));
els.saveInsightSnapshotBtn.addEventListener("click",saveInsightSnapshot);
els.scanDriveHistoryBtn?.addEventListener("click",scanDriveHistory);
els.exportPdfBtn.addEventListener("click",exportPdfReport);
els.exportDatabaseBtn.addEventListener("click",exportDatabase);
els.importDatabaseInput.addEventListener("change",importDatabaseFile);
els.chartScaleMode.addEventListener("change",renderInsights);
document.querySelectorAll("[data-chart-metric]").forEach(el=>el.addEventListener("change",renderInsights));
els.clearSnapshotsBtn.addEventListener("click",()=>{state.insightSnapshots=[];persistInsightSnapshots();renderInsights()});
els.openNextBtn.addEventListener("click",openNextProfile);
els.requireSyncBtn?.addEventListener("click",syncPublicDrive);
els.requireFullBtn?.addEventListener("click",()=>els.currentFiles?.click());
els.myActivityFrom?.addEventListener("change",renderMyFollowingActivity);
els.myActivityTo?.addEventListener("change",renderMyFollowingActivity);

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



const HEART_SYNC_KEY_STORAGE="ifa-heart-sync-key";
let heartMutationQueue=Promise.resolve();
let lastHeartSyncAt=0;

function heartSyncKey(){
  return String(localStorage.getItem(HEART_SYNC_KEY_STORAGE)||"").trim();
}

function setHeartSyncUi(stateName,message){
  if(!els.heartSyncState||!els.heartSyncMessage)return;
  els.heartSyncState.dataset.state=stateName;
  els.heartSyncState.textContent=t(
    stateName==="syncing"?"heartSyncSyncing":
    stateName==="synced"?"heartSyncSynced":"heartSyncLocal"
  );
  if(message)els.heartSyncMessage.textContent=message;
}

async function heartApi(path,{method="GET",body=null}={}){
  const bridge=driveBridgeUrl();
  const key=heartSyncKey();
  if(!bridge)throw new Error(t("driveBridgeMissing"));
  if(!key)throw new Error(t("heartSyncNoKey"));

  const response=await fetch(`${bridge}${path}`,{
    method,
    cache:"no-store",
    headers:{
      "authorization":`Bearer ${key}`,
      ...(body?{"content-type":"application/json"}:{})
    },
    body:body?JSON.stringify(body):null
  });

  let payload={};
  try{payload=await response.json()}catch{}

  if(response.status===401)throw new Error(t("heartSyncInvalidKey"));
  if(!response.ok)throw new Error(payload?.error||`HTTP ${response.status}`);
  return payload;
}

async function syncHearts({silent=false}={}){
  const key=heartSyncKey();
  if(!key){
    setHeartSyncUi("local",t("heartSyncReady"));
    return false;
  }

  setHeartSyncUi("syncing",t("heartSyncSyncing"));
  try{
    const payload=await heartApi("/hearts/sync",{
      method:"POST",
      body:{records:state.heartRecords}
    });

    state.heartRecords=mergeHeartRecords(state.heartRecords,payload.records||{});
    rebuildHeartSet();
    persistHeartRecords();
    lastHeartSyncAt=Date.now();
    setHeartSyncUi("synced",t("heartSyncDone"));
    renderAll();
    return true;
  }catch(err){
    console.error("Heart sync:",err);
    setHeartSyncUi("local",`${t("heartSyncError")}: ${err?.message||err}`);
    if(!silent)console.warn(err);
    return false;
  }
}

function queueHeartMutation(username,hearted,updatedAt){
  if(!heartSyncKey())return;
  heartMutationQueue=heartMutationQueue
    .catch(()=>{})
    .then(async()=>{
      try{
        const payload=await heartApi("/hearts/set",{
          method:"POST",
          body:{username,hearted,updatedAt}
        });
        if(payload?.record){
          const key=normalizeHeartUsername(username);
          const remoteAt=Number(payload.record.updatedAt)||0;
          const localAt=Number(state.heartRecords[key]?.updatedAt)||0;
          if(remoteAt>localAt){
            state.heartRecords[key]={
              hearted:payload.record.hearted===true,
              updatedAt:remoteAt
            };
            rebuildHeartSet();
            persistHeartRecords();
            renderAll();
          }
        }
        lastHeartSyncAt=Date.now();
        setHeartSyncUi("synced",t("heartSyncAuto"));
      }catch(err){
        console.error("Heart mutation sync:",err);
        setHeartSyncUi("local",`${t("heartSyncError")}: ${err?.message||err}`);
      }
    });
}

function saveHeartSyncKeyAndSync(){
  const key=String(els.heartSyncKey?.value||"").trim();
  if(!key){
    localStorage.removeItem(HEART_SYNC_KEY_STORAGE);
    setHeartSyncUi("local",t("heartSyncNoKey"));
    return;
  }
  localStorage.setItem(HEART_SYNC_KEY_STORAGE,key);
  syncHearts();
}

function initializeHeartSync(){
  if(!els.heartSyncKey)return;
  els.heartSyncKey.value=heartSyncKey();
  if(heartSyncKey())syncHearts({silent:true});
  else setHeartSyncUi("local",t("heartSyncReady"));
}

const DRIVE_FOLDER_MIME="application/vnd.google-apps.folder";
const DRIVE_RELEVANT_NAMES=new Set([
  "following.json",
  "audience_insights.json",
  "content_interactions.json",
  "profiles_reached.json"
]);
const DRIVE_INSIGHT_NAMES=new Set([
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
  return DRIVE_RELEVANT_NAMES.has(base)
    ||/^followers(?:_\d+)?\.json$/i.test(base)
    ||base==="recently_unfollowed_profiles.json";
}

function normalizedFolderSegment(value){
  return String(value||"").toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim();
}
function isFullExportsDriveFile(file){
  return (file.path||[]).some(segment=>normalizedFolderSegment(segment)==="full exports");
}
function isDailyDriveFile(file){
  return !isReferenceDriveFile(file)&&!isFullExportsDriveFile(file);
}

function isDriveInsightFile(name){
  return DRIVE_INSIGHT_NAMES.has(String(name||"").toLowerCase());
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

function inferDriveExportKey(file){
  const path=file.path||[];
  let chosen=-1;
  for(let i=0;i<path.length-1;i++){
    const segment=String(path[i]||"");
    if(/^instagram-[^/]*-20\d{2}-\d{2}-\d{2}(?:-|$)/i.test(segment)
      ||/^meta-20\d{2}-[A-Za-z]{3}-\d{1,2}-/i.test(segment)){
      chosen=i;
    }
  }
  if(chosen>=0)return path.slice(0,chosen+1).join("/");
  return path.slice(0,-1).join("/")||inferDriveExportDate(file)||"undated";
}

function groupDriveExportPackages(files){
  const groups=new Map();
  for(const file of files){
    const key=inferDriveExportKey(file);
    if(!groups.has(key)){
      groups.set(key,{key,date:inferDriveExportDate(file),files:[]});
    }
    groups.get(key).files.push(file);
    if(!groups.get(key).date)groups.get(key).date=inferDriveExportDate(file);
  }
  return groups;
}

function inferInsightSnapshotDay(period,fallbackDay){
  const months={
    jan:0,january:0,feb:1,february:1,mar:2,march:2,apr:3,april:3,
    may:4,jun:5,june:5,jul:6,july:6,aug:7,august:7,sep:8,september:8,
    oct:9,october:9,nov:10,november:10,dec:11,december:11
  };
  const text=String(period||"").trim();
  const match=text.match(/([A-Za-z]+)\s+(\d{1,2})(?:,\s*(20\d{2}))?\s*$/);
  if(!match)return fallbackDay;

  const month=months[match[1].toLowerCase()];
  if(month==null)return fallbackDay;

  const fallback=/^(20\d{2})-(\d{2})-(\d{2})$/.exec(String(fallbackDay||""));
  let year=match[3]?Number(match[3]):Number(fallback?.[1]);
  if(!Number.isFinite(year))return fallbackDay;

  if(!match[3]&&fallback){
    const fallbackMonth=Number(fallback[2])-1;
    // Around New Year the rolling period can end in December while the export is January.
    if(fallbackMonth===0&&month===11)year-=1;
  }

  const end=Date.UTC(year,month,Number(match[2]));
  if(!Number.isFinite(end))return fallbackDay;

  // Meta's scheduled exports observed so far use an Insights range ending on the
  // previous closed data day. The day after that end date is the canonical snapshot
  // day. This also deduplicates identical Insights delivered by separate automations.
  return new Date(end+86400000).toISOString().slice(0,10);
}

async function downloadDriveSource(file,bridge,cache=null){
  const key=file.id||`${(file.path||[]).join("/")}:${file.name}`;
  if(cache?.has(key))return cache.get(key);

  const params=new URLSearchParams({fileId:file.id});
  if(file.resourceKey)params.set("resourceKey",file.resourceKey);

  const response=await fetch(`${bridge}/file?${params.toString()}`,{cache:"no-store"});
  if(!response.ok){
    const body=await response.text();
    throw new Error(`${file.name}: Public Drive bridge ${response.status}: ${body.slice(0,220)}`);
  }

  const modifiedHeader=response.headers.get("x-ifa-source-last-modified")||response.headers.get("last-modified")||null;
  const modifiedAt=modifiedHeader&&Number.isFinite(Date.parse(modifiedHeader))?Date.parse(modifiedHeader):null;
  const source={
    name:(file.path||[file.name]).join("/"),
    text:await response.text(),
    modifiedAt,
    modifiedHeader,
    modifiedOrigin:modifiedAt!=null?"drive-header":null
  };
  if(cache)cache.set(key,source);
  return source;
}

async function downloadDriveSources(files,bridge,cache=null){
  const selected=files.filter(f=>isDriveRelevantFile(f.name));
  const sources=[];
  for(const file of selected)sources.push(await downloadDriveSource(file,bridge,cache));
  return sources;
}

async function downloadDriveBlob(file,bridge){
  const params=new URLSearchParams({fileId:file.id});
  if(file.resourceKey)params.set("resourceKey",file.resourceKey);
  const response=await fetch(`${bridge}/file?${params.toString()}`,{cache:"no-store"});
  if(!response.ok){
    const body=await response.text();
    throw new Error(`${file.name}: Public Drive bridge ${response.status}: ${body.slice(0,220)}`);
  }
  return response.blob();
}


const META_EXPORT_TIME_ZONE="America/Los_Angeles";

function pad2(value){return String(value).padStart(2,"0")}

function clockKeyFromParts(year,month,day,hour,minute,second){
  if(![year,month,day,hour,minute,second].every(Number.isFinite))return null;
  return `${year}-${pad2(month)}-${pad2(day)}T${pad2(hour)}:${pad2(minute)}:${pad2(second)}`;
}

function zipDosClockKey(dateBits,timeBits){
  const year=1980+((dateBits>>9)&0x7f);
  const month=(dateBits>>5)&0x0f;
  const day=dateBits&0x1f;
  const hour=(timeBits>>11)&0x1f;
  const minute=(timeBits>>5)&0x3f;
  const second=(timeBits&0x1f)*2;
  if(month<1||month>12||day<1||day>31||hour>23||minute>59||second>59)return null;
  return clockKeyFromParts(year,month,day,hour,minute,second);
}

function timeZoneOffsetMs(date,timeZone=META_EXPORT_TIME_ZONE){
  try{
    const parts=new Intl.DateTimeFormat("en-US",{
      timeZone,year:"numeric",month:"2-digit",day:"2-digit",
      hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"
    }).formatToParts(date);
    const get=type=>Number(parts.find(p=>p.type===type)?.value);
    const asUtc=Date.UTC(get("year"),get("month")-1,get("day"),get("hour"),get("minute"),get("second"));
    return asUtc-date.getTime();
  }catch{return null}
}

function metaClockKeyToEpochMs(key){
  const m=/^(20\d{2})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/.exec(String(key||""));
  if(!m)return null;
  const naive=Date.UTC(Number(m[1]),Number(m[2])-1,Number(m[3]),Number(m[4]),Number(m[5]),Number(m[6]));
  let guess=naive;
  for(let i=0;i<2;i++){
    const offset=timeZoneOffsetMs(new Date(guess));
    if(offset==null)return null;
    guess=naive-offset;
  }
  return guess;
}

function metaClockKeyFromEpochMs(ms){
  if(!Number.isFinite(Number(ms)))return null;
  try{
    const parts=new Intl.DateTimeFormat("en-US",{
      timeZone:META_EXPORT_TIME_ZONE,
      year:"numeric",month:"2-digit",day:"2-digit",
      hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"
    }).formatToParts(new Date(Number(ms)));
    const get=type=>Number(parts.find(p=>p.type===type)?.value);
    return clockKeyFromParts(get("year"),get("month"),get("day"),get("hour"),get("minute"),get("second"));
  }catch{return null}
}

function sourceClockInfo(source){
  if(source?.clockKey){
    return{
      clockKey:source.clockKey,
      epochMs:metaClockKeyToEpochMs(source.clockKey),
      origin:source.clockOrigin||"zip-entry"
    };
  }
  if(Number.isFinite(Number(source?.modifiedAt))){
    return{
      clockKey:metaClockKeyFromEpochMs(Number(source.modifiedAt)),
      epochMs:Number(source.modifiedAt),
      origin:source.modifiedOrigin||"drive-header"
    };
  }
  return{clockKey:null,epochMs:null,origin:null};
}

function formatSourceTime(epochMs,clockKey=null){
  if(Number.isFinite(Number(epochMs))){
    try{
      return new Intl.DateTimeFormat(state.lang==="hu"?"hu-HU":state.lang==="de"?"de-DE":"en-GB",{
        year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"
      }).format(new Date(Number(epochMs)));
    }catch{}
  }
  return clockKey?clockKey.replace("T"," "):t("sourceTimeUnknown");
}

function mergeInsightMetrics(base,extra){
  if(!extra)return base;
  if(!base)return {...extra};
  const out={...base};
  for(const key of [
    "period","followers","follows","unfollows","net","reached",
    "profileVisits","externalLinkTaps","interactions",
    "nonFollowerReach","nonFollowerEngagement"
  ]){
    if(extra[key]!=null&&extra[key]!=="")out[key]=extra[key];
  }
  return out;
}

function parseInsightSources(sources){
  let merged=null;
  for(const s of sources){
    let data;
    try{data=JSON.parse(s.text)}catch{throw new Error(`${s.name}: ${t("invalidJson")}.`)}
    const base=s.name.toLowerCase().split("/").pop();
    let parts={audience:null,interactions:null,reach:null};
    if(base==="audience_insights.json"||data?.organic_insights_audience)parts.audience=data;
    else if(base==="content_interactions.json"||data?.organic_insights_interactions)parts.interactions=data;
    else if(base==="profiles_reached.json"||data?.organic_insights_reach)parts.reach=data;
    else continue;
    merged=mergeInsightMetrics(merged,parseInsights(parts));
  }
  return merged;
}

function followingCandidateFromSource(source){
  let data;
  try{data=JSON.parse(source.text)}catch{return null}
  const rows=extractFollowing(data);
  if(!rows.length)return null;
  const maxTimestamp=Math.max(...rows.map(r=>r.timestamp??-Infinity));
  const following=new Map();
  rows.forEach(r=>putNewest(following,r));
  const clock=sourceClockInfo(source);
  return{
    following,
    maxTimestamp:Number.isFinite(maxTimestamp)?maxTimestamp:null,
    generatedAt:clock.epochMs,
    clockKey:clock.clockKey,
    clockOrigin:clock.origin
  };
}

async function bestFollowingCandidate(files,bridge,cache=null){
  let best=null;
  for(const file of files.filter(f=>String(f.name).toLowerCase()==="following.json")){
    const source=await downloadDriveSource(file,bridge,cache);
    const candidate=followingCandidateFromSource(source);
    if(!candidate)continue;
    const generated=candidate.generatedAt??-Infinity;
    const bestGenerated=best?.generatedAt??-Infinity;
    const score=candidate.maxTimestamp??-Infinity;
    const bestScore=best?.maxTimestamp??-Infinity;
    if(!best
      ||generated>bestGenerated
      ||(generated===bestGenerated&&score>bestScore)
      ||(generated===bestGenerated&&score===bestScore&&candidate.following.size>best.following.size)){
      best=candidate;
    }
  }
  return best;
}

async function bestFollowingDataset(files,bridge,cache=null){
  return (await bestFollowingCandidate(files,bridge,cache))?.following||new Map();
}

async function collectDriveFollowerEvents(files,bridge,cache=null){
  const followers=new Map(),events=[],seen=new Set();
  const followerFiles=files.filter(f=>/^followers(?:_\d+)?\.json$/i.test(String(f.name).toLowerCase()));
  for(const file of followerFiles){
    const source=await downloadDriveSource(file,bridge,cache);
    let data;try{data=JSON.parse(source.text)}catch{throw new Error(`${source.name}: ${t("invalidJson")}.`)}
    const sourceDate=inferDriveExportDate(file);
    for(const row of extractFollowers(data)){
      putNewest(followers,row);
      const eventKey=`${row.username.toLowerCase()}|${row.timestamp??""}`;
      if(seen.has(eventKey))continue;
      seen.add(eventKey);
      events.push({...row,sourceDate,sourceKey:inferDriveExportKey(file)});
    }
  }
  events.sort((a,b)=>(a.timestamp??0)-(b.timestamp??0));
  return{followers,events,sourceCount:followerFiles.length};
}

async function collectDriveFollowingSnapshots(files,bridge,cache=null){
  const packages=[...groupDriveExportPackages(files).values()].filter(p=>p.date&&p.files.some(f=>String(f.name).toLowerCase()==="following.json"));
  const byDate=new Map();
  for(const pkg of packages){
    const candidate=await bestFollowingCandidate(pkg.files,bridge,cache);if(!candidate)continue;
    const row={
      date:pkg.date,key:pkg.key,following:candidate.following,maxTimestamp:candidate.maxTimestamp,
      generatedAt:candidate.generatedAt,clockKey:candidate.clockKey,clockOrigin:candidate.clockOrigin,source:"daily"
    };
    const old=byDate.get(pkg.date);
    const rowGenerated=row.generatedAt??-Infinity,oldGenerated=old?.generatedAt??-Infinity;
    if(!old
      ||rowGenerated>oldGenerated
      ||(rowGenerated===oldGenerated&&(row.maxTimestamp??-Infinity)>(old.maxTimestamp??-Infinity))
      ||(rowGenerated===oldGenerated&&(row.maxTimestamp??-Infinity)===(old.maxTimestamp??-Infinity)&&row.following.size>old.following.size)){
      byDate.set(pkg.date,row);
    }
  }
  return[...byDate.values()].sort((a,b)=>
    ((a.generatedAt??-Infinity)-(b.generatedAt??-Infinity))
    ||String(a.date||"").localeCompare(String(b.date||""))
  );
}

function extractRecentlyUnfollowed(data){
  if(!Array.isArray(data))return[];const rows=[];
  for(const entry of data){
    if(!entry||typeof entry!=="object")continue;
    const labels=Array.isArray(entry.label_values)?entry.label_values:[];
    const labelMap=new Map(labels.map(x=>[String(x?.label||"").toLowerCase(),x?.value]));
    const username=cleanUsername(labelMap.get("username"));if(!username)continue;
    const timestamp=Number.isFinite(Number(entry.timestamp))?Number(entry.timestamp):null;
    const fbid=entry.fbid==null?null:String(entry.fbid),url=String(labelMap.get("url")||"").trim();
    rows.push({username,href:url||`https://www.instagram.com/${encodeURIComponent(username)}/`,timestamp,fbid});
  }
  return rows;
}

async function collectDriveRecentlyUnfollowed(files,bridge,cache=null){
  const out=[],seen=new Set();
  for(const file of files.filter(f=>String(f.name).toLowerCase()==="recently_unfollowed_profiles.json")){
    const source=await downloadDriveSource(file,bridge,cache);let data;try{data=JSON.parse(source.text)}catch{continue}
    const sourceDate=inferDriveExportDate(file);
    for(const row of extractRecentlyUnfollowed(data)){
      const key=`${row.fbid||row.username.toLowerCase()}|${row.timestamp??""}`;if(seen.has(key))continue;seen.add(key);out.push({...row,sourceDate});
    }
  }
  return out.sort((a,b)=>(a.timestamp??0)-(b.timestamp??0));
}

function maxRelationshipTimestamp(dataset){
  let max=null;for(const map of[dataset?.followers,dataset?.following])for(const row of map?.values?.()||[])if(Number.isFinite(Number(row.timestamp))){const ts=Number(row.timestamp);if(max==null||ts>max)max=ts}return max;
}
function checkpointFromImported(imported,{date=null,source="drive",sourceCount=0,label=""}={}){
  const evidenceCutoff=maxRelationshipTimestamp(imported.dataset);
  const derivedDay=evidenceCutoff?new Date(evidenceCutoff*1000).toISOString().slice(0,10):null;
  const generatedDay=imported.followingGeneratedAt?new Date(imported.followingGeneratedAt).toISOString().slice(0,10):null;
  const checkpointDate=generatedDay||date||derivedDay;
  return{
    dataset:imported.dataset,insights:imported.insights||null,recentlyUnfollowed:imported.recentlyUnfollowed||[],
    date:checkpointDate,timestamp:checkpointDate?dateToNoonTimestamp(checkpointDate):evidenceCutoff,
    evidenceCutoff:evidenceCutoff||null,
    followingGeneratedAt:imported.followingGeneratedAt??null,
    followingClockKey:imported.followingClockKey??null,
    followingClockOrigin:imported.followingClockOrigin??null,
    source,sourceCount,label
  };
}
async function collectDriveFullCheckpoints(files,bridge,cache=null){
  const results=[];
  for(const file of files.filter(f=>/\.zip$/i.test(String(f.name)))){
    try{const blob=await downloadDriveBlob(file,bridge),localFile=new File([blob],file.name,{type:blob.type||"application/zip"}),sources=await extractInstagramJsonFilesFromZip(localFile),imported=buildImportFromSources(sources);if(!imported.dataset.followers.size||!imported.dataset.following.size)continue;results.push(checkpointFromImported(imported,{date:inferDriveExportDate(file),source:"drive",sourceCount:sources.length,label:(file.path||[file.name]).join("/")}))}catch(err){console.warn("Full Export ZIP skipped:",file.name,err)}
  }
  const jsonFiles=files.filter(f=>/\.json$/i.test(String(f.name))&&isDriveRelevantFile(f.name)),packages=[...groupDriveExportPackages(jsonFiles).values()];
  for(const pkg of packages){
    try{const sources=await downloadDriveSources(pkg.files,bridge,cache),imported=buildImportFromSources(sources);if(!imported.dataset.followers.size||!imported.dataset.following.size)continue;results.push(checkpointFromImported(imported,{date:pkg.date,source:"drive",sourceCount:sources.length,label:pkg.key}))}catch(err){console.warn("Full Export package skipped:",pkg.key,err)}
  }
  const unique=new Map();for(const cp of results){const sig=[cp.date||"",cp.dataset.followers.size,cp.dataset.following.size,cp.followingGeneratedAt??cp.evidenceCutoff??""].join("|");if(!unique.has(sig))unique.set(sig,cp)}
  return[...unique.values()].sort((a,b)=>
    ((a.followingGeneratedAt??a.evidenceCutoff??a.timestamp??0)-(b.followingGeneratedAt??b.evidenceCutoff??b.timestamp??0))
    ||String(a.date||"").localeCompare(String(b.date||""))
  );
}



function effectiveFullCheckpoint(){return state.manualFull||state.driveFull||null}
function allFullCheckpoints(){
  const rows=[...state.fullHistory];if(state.manualFull)rows.push(state.manualFull);const unique=new Map();
  for(const cp of rows){const sig=[cp.date||"",cp.dataset?.followers?.size||0,cp.dataset?.following?.size||0,cp.followingGeneratedAt??cp.evidenceCutoff??""].join("|");unique.set(sig,cp)}
  return[...unique.values()].sort((a,b)=>
    (a.followingGeneratedAt??a.evidenceCutoff??a.timestamp??0)
    -(b.followingGeneratedAt??b.evidenceCutoff??b.timestamp??0)
  );
}
function addRenameEvidence(store,oldRow,newRow,relation,source){
  if(!oldRow||!newRow)return;const oldKey=oldRow.username.toLowerCase(),newKey=newRow.username.toLowerCase();if(oldKey===newKey)return;const id=`${oldKey}=>${newKey}`;
  const row=store.get(id)||{id,oldKey,newKey,oldUsername:oldRow.username,newUsername:newRow.username,href:newRow.href||`https://www.instagram.com/${encodeURIComponent(newRow.username)}/`,relations:new Set(),sources:new Set(),timestamps:{}};
  row.relations.add(relation);row.sources.add(source);row.timestamps[relation]=newRow.timestamp??oldRow.timestamp??null;store.set(id,row);
}
function detectRenameEvidence(oldMap,newMap,relation,source,store){
  if(!oldMap?.size||!newMap?.size)return;const oldOnly=[...oldMap.entries()].filter(([k])=>!newMap.has(k)),newOnly=[...newMap.entries()].filter(([k])=>!oldMap.has(k)),oldByTs=new Map(),newByTs=new Map();
  for(const[,row]of oldOnly){if(!Number.isFinite(Number(row.timestamp)))continue;const ts=Number(row.timestamp);if(!oldByTs.has(ts))oldByTs.set(ts,[]);oldByTs.get(ts).push(row)}
  for(const[,row]of newOnly){if(!Number.isFinite(Number(row.timestamp)))continue;const ts=Number(row.timestamp);if(!newByTs.has(ts))newByTs.set(ts,[]);newByTs.get(ts).push(row)}
  for(const[ts,oldRows]of oldByTs){const newRows=newByTs.get(ts);if(newRows&&oldRows.length===1&&newRows.length===1)addRenameEvidence(store,oldRows[0],newRows[0],relation,source)}
}
function allRecentUnfollowedEvidence(){
  const rows=[...state.recentlyUnfollowedEvents];
  for(const cp of allFullCheckpoints())rows.push(...(cp.recentlyUnfollowed||[]));
  const unique=new Map();
  for(const row of rows){const key=`${row.fbid||row.username?.toLowerCase()||""}|${row.timestamp??""}`;if(key!=="|")unique.set(key,row)}
  return[...unique.values()];
}
function rebuildIdentityChanges(){
  const store=new Map(),full=effectiveFullCheckpoint();
  if(state.referenceLoaded&&full){detectRenameEvidence(state.reference.followers,full.dataset.followers,"follower","Reference → Full",store);detectRenameEvidence(state.reference.following,full.dataset.following,"following","Reference → Full",store)}
  for(let i=1;i<state.dailyFollowingSnapshots.length;i++){const a=state.dailyFollowingSnapshots[i-1],b=state.dailyFollowingSnapshots[i];detectRenameEvidence(a.following,b.following,"following",`${a.date} → ${b.date}`,store)}
  const fulls=allFullCheckpoints();for(let i=1;i<fulls.length;i++){const a=fulls[i-1],b=fulls[i];detectRenameEvidence(a.dataset.followers,b.dataset.followers,"follower",`${a.date||"Full"} → ${b.date||"Full"}`,store);detectRenameEvidence(a.dataset.following,b.dataset.following,"following",`${a.date||"Full"} → ${b.date||"Full"}`,store)}
  state.identityChanges=[...store.values()].map(row=>({...row,relations:[...row.relations],sources:[...row.sources],confidence:row.relations.size>=2||row.sources.size>=2?"high":"likely"})).sort((a,b)=>a.newUsername.localeCompare(b.newUsername));
  state.aliasMap=new Map();state.renamedKeys=new Set();for(const row of state.identityChanges){state.aliasMap.set(row.oldKey,row.newKey);state.renamedKeys.add(row.oldKey);state.renamedKeys.add(row.newKey)}
  state.identityFbids=new Map();for(const event of allRecentUnfollowedEvidence())if(event.fbid)state.identityFbids.set(canonicalKey(event.username.toLowerCase()),event.fbid);
}
function canonicalKey(rawKey){let key=String(rawKey||"").toLowerCase();const seen=new Set();while(state.aliasMap.has(key)&&!seen.has(key)){seen.add(key);key=state.aliasMap.get(key)}return key}
function isRenamedIdentity(rawKey){const key=String(rawKey||"").toLowerCase();return state.renamedKeys.has(key)||state.renamedKeys.has(canonicalKey(key))}
function canonicalRows(map){const out=new Map();for(const[key,row]of map||[]){const canonical=canonicalKey(key),old=out.get(canonical);if(!old||(row.timestamp??-Infinity)>(old.timestamp??-Infinity))out.set(canonical,row)}return out}
function canonicalKeySet(map){return new Set([...canonicalRows(map).keys()])}
function computeNotFollowingBack(dataset){
  const out=new Map();
  if(!dataset)return out;
  const followers=canonicalKeySet(dataset.followers);
  for(const[key,row]of dataset.following){
    const canonical=canonicalKey(key);
    if(isRenamedIdentity(key))continue;
    if(!followers.has(canonical))out.set(key,row);
  }
  return out;
}

function mergeFollowerEvidence(target,map){
  for(const[key,row]of map||[]){
    const canonical=canonicalKey(key);
    const old=target.get(canonical);

    // Later sources are allowed to replace an equal-timestamp row so the
    // newest known username / href wins after alias resolution.
    if(!old||(row.timestamp??-Infinity)>=(old.timestamp??-Infinity)){
      target.set(canonical,row);
    }
  }
  return target;
}

/*
 * Shared historical follower registry.
 *
 * "All-time Followers" is deliberately broader than Daily Sync:
 * any export that proves an account was a follower contributes evidence.
 * Rename aliases are resolved before counting, so old/new usernames remain
 * one canonical identity.
 */
function allTimeFollowerEvidence(){
  const out=new Map();

  if(state.referenceLoaded){
    mergeFollowerEvidence(out,state.reference.followers);
  }

  if(state.driveDailySynced){
    mergeFollowerEvidence(out,state.driveFollowerEvents);
  }else if(state.currentOrigin==="drive-daily"&&state.currentLoaded){
    mergeFollowerEvidence(out,state.current.followers);
  }

  for(const cp of allFullCheckpoints()){
    mergeFollowerEvidence(out,cp.dataset?.followers);
  }

  return out;
}

function hasHistoricalFollowerEvidence(){
  return allTimeFollowerEvidence().size>0;
}

/*
 * Historical evidence that already existed by the selected Full checkpoint.
 * This powers Unfollowers. Evidence after the checkpoint must not turn into
 * a false unfollower.
 */
function historicalFollowerEvidenceUntil(full){
  const out=new Map();
  if(!full)return out;

  // Reference is a fixed historical baseline by design.
  if(state.referenceLoaded){
    mergeFollowerEvidence(out,state.reference.followers);
  }

  const cutoffMs=followerCheckpointBoundaryMs(full);
  const cutoffDay=full.date||null;

  for(const event of state.dailyFollowerEvents){
    const eventMs=Number.isFinite(Number(event.timestamp))
      ?Number(event.timestamp)*1000
      :null;

    let include=false;
    if(eventMs!=null&&cutoffMs!=null)include=eventMs<=cutoffMs;
    else if(event.sourceDate&&cutoffDay)include=event.sourceDate<=cutoffDay;

    if(include){
      mergeFollowerEvidence(out,new Map([[event.username.toLowerCase(),event]]));
    }
  }

  // Include every Full checkpoint that is not newer than the effective Full.
  // The effective Full itself is included too; it disappears again when we
  // subtract currentFull below, but keeping it here makes the evidence model
  // complete and consistent.
  const selectedTime=Number.isFinite(Number(full.followingGeneratedAt))
    ?Number(full.followingGeneratedAt)
    :Number.isFinite(Number(full.evidenceCutoff))
      ?Number(full.evidenceCutoff)*1000
      :null;

  for(const cp of allFullCheckpoints()){
    let include=false;
    const cpTime=Number.isFinite(Number(cp.followingGeneratedAt))
      ?Number(cp.followingGeneratedAt)
      :Number.isFinite(Number(cp.evidenceCutoff))
        ?Number(cp.evidenceCutoff)*1000
        :null;

    if(selectedTime!=null&&cpTime!=null)include=cpTime<=selectedTime;
    else if(cp.date&&full.date)include=cp.date<=full.date;
    else include=cp===full;

    if(include)mergeFollowerEvidence(out,cp.dataset?.followers);
  }

  return out;
}

function followerCheckpointBoundaryMs(full){
  if(!full)return null;

  if(Number.isFinite(Number(full.followingGeneratedAt))){
    return Number(full.followingGeneratedAt);
  }

  let boundary=Number.isFinite(Number(full.evidenceCutoff))?Number(full.evidenceCutoff)*1000:null;
  const fullRows=canonicalRows(full.dataset.followers);

  for(const event of state.dailyFollowerEvents){
    if(!Number.isFinite(Number(event.timestamp)))continue;
    const canonical=canonicalKey(event.username.toLowerCase());
    const fullRow=fullRows.get(canonical);
    if(!fullRow||Number(fullRow.timestamp)!==Number(event.timestamp))continue;
    const eventMs=Number(event.timestamp)*1000;
    boundary=boundary==null?eventMs:Math.max(boundary,eventMs);
  }
  return boundary;
}

function reconstructedCurrentFollowers(){
  const full=effectiveFullCheckpoint();

  if(!full){
    return{
      followers:state.driveDailySynced?canonicalRows(state.driveFollowerEvents):new Map(),
      base:"daily-all-time",
      addedDailyCount:0,
      boundaryMs:null
    };
  }

  const out=canonicalRows(full.dataset.followers);
  if(!state.driveDailySynced){
    return{
      followers:out,
      base:"full-only",
      addedDailyCount:0,
      boundaryMs:followerCheckpointBoundaryMs(full)
    };
  }

  const boundaryMs=followerCheckpointBoundaryMs(full);
  const checkpointDay=full.date||null;
  const fullKeys=canonicalKeySet(full.dataset.followers);
  const addedCanonical=new Set();

  for(const event of state.dailyFollowerEvents){
    const eventMs=Number.isFinite(Number(event.timestamp))?Number(event.timestamp)*1000:null;
    let isAfter=false;

    if(eventMs!=null&&boundaryMs!=null)isAfter=eventMs>boundaryMs;
    else if(event.sourceDate&&checkpointDay)isAfter=event.sourceDate>checkpointDay;

    if(!isAfter)continue;

    const canonical=canonicalKey(event.username.toLowerCase());
    const old=out.get(canonical);
    if(!old||(event.timestamp??-Infinity)>(old.timestamp??-Infinity))out.set(canonical,event);
    if(!fullKeys.has(canonical))addedCanonical.add(canonical);
  }

  return{
    followers:out,
    base:"full-plus-daily",
    addedDailyCount:addedCanonical.size,
    boundaryMs
  };
}

function latestDailyFollowingSnapshot(){
  if(!state.dailyFollowingSnapshots.length)return null;
  const withClock=state.dailyFollowingSnapshots
    .filter(row=>Number.isFinite(Number(row.generatedAt)))
    .sort((a,b)=>Number(a.generatedAt)-Number(b.generatedAt));
  return withClock.at(-1)||state.dailyFollowingSnapshots.at(-1);
}

function followingSourceSelection(){
  const full=effectiveFullCheckpoint();
  const daily=state.driveDailySynced?latestDailyFollowingSnapshot():null;
  const override=["auto","daily","full"].includes(state.followingSourceOverride)
    ?state.followingSourceOverride
    :"auto";

  const dailyChoice=daily?{
    kind:"daily",following:daily.following,
    generatedAt:daily.generatedAt??null,clockKey:daily.clockKey??null,
    count:daily.following.size,label:daily.date||t("sourceDaily")
  }:null;

  const fullChoice=full?{
    kind:"full",following:full.dataset.following,
    generatedAt:full.followingGeneratedAt??null,clockKey:full.followingClockKey??null,
    count:full.dataset.following.size,label:full.date||t("sourceFull")
  }:null;

  if((override==="daily"&&!dailyChoice)||(override==="full"&&!fullChoice)){
    state.followingSourceOverride="auto";
    sessionStorage.setItem("ifa-following-source","auto");
  }

  if(override==="daily"&&dailyChoice)return{...dailyChoice,reason:"override",override};
  if(override==="full"&&fullChoice)return{...fullChoice,reason:"override",override};

  if(dailyChoice&&fullChoice){
    const dailyAt=Number.isFinite(Number(dailyChoice.generatedAt))?Number(dailyChoice.generatedAt):null;
    const fullAt=Number.isFinite(Number(fullChoice.generatedAt))?Number(fullChoice.generatedAt):null;

    if(dailyAt!=null&&fullAt!=null){
      if(fullAt>dailyAt)return{...fullChoice,reason:"full-newer",override:"auto"};
      return{...dailyChoice,reason:"daily-newer",override:"auto"};
    }

    return{...dailyChoice,reason:"uncertain",override:"auto"};
  }

  if(dailyChoice)return{...dailyChoice,reason:"daily-only",override:"auto"};
  if(fullChoice)return{...fullChoice,reason:"full-only",override:"auto"};

  if(state.currentLoaded){
    return{
      kind:"current",following:state.current.following,
      generatedAt:null,clockKey:null,count:state.current.following.size,
      label:"Current",reason:"fallback",override:"auto"
    };
  }

  return{
    kind:"none",following:new Map(),
    generatedAt:null,clockKey:null,count:0,label:"—",reason:"none",override:"auto"
  };
}

function operationalFollowingForNfb(){
  return followingSourceSelection().following;
}

function reconstructedFollowersForNfb(){
  return reconstructedCurrentFollowers().followers;
}

function computeOperationalNotFollowingBack(){
  return computeNotFollowingBack({
    followers:reconstructedCurrentFollowers().followers,
    following:followingSourceSelection().following
  });
}

function compareMapsAliasAware(oldMap,newMap){
  const oldCanonical=canonicalRows(oldMap),newCanonical=canonicalRows(newMap);return{
    added:[...newCanonical.entries()].filter(([key])=>!oldCanonical.has(key)&&!isRenamedIdentity(key)).map(([,row])=>row),
    removed:[...oldCanonical.entries()].filter(([key])=>!newCanonical.has(key)&&!isRenamedIdentity(key)).map(([,row])=>row)
  };
}
function observedFollowersUntil(full){
  return historicalFollowerEvidenceUntil(full);
}
function fullPresenceWindow(canonical){
  const fulls=allFullCheckpoints();let lastPresent=null,firstAbsentAfter=null;for(const cp of fulls){const set=canonicalKeySet(cp.dataset.followers);if(set.has(canonical)){lastPresent=cp;firstAbsentAfter=null}else if(lastPresent&&!firstAbsentAfter)firstAbsentAfter=cp}return{lastPresent,firstAbsentAfter};
}
function computeUnfollowedRows(){
  const full=effectiveFullCheckpoint();if(!full)return[];const observed=observedFollowersUntil(full),currentFull=canonicalKeySet(full.dataset.followers),referenceFollowers=state.referenceLoaded?canonicalKeySet(state.reference.followers):new Set(),rows=[];
  for(const[canonical,row]of observed){if(currentFull.has(canonical)||isRenamedIdentity(canonical))continue;const window=fullPresenceWindow(canonical),baseline=referenceFollowers.has(canonical);let meta=baseline?t("baselineFollowerLost"):t("joinedThenLeft");if(window.lastPresent?.date&&window.firstAbsentAfter?.date)meta+=` · ${window.lastPresent.date} → ${window.firstAbsentAfter.date}`;rows.push({...row,_kind:"unfollowed",_canonical:canonical,_meta:meta})}return rows;
}
function computeFollowingActivity(){
  const days=[],snaps=state.dailyFollowingSnapshots,recentEvidence=allRecentUnfollowedEvidence();for(let i=1;i<snaps.length;i++){const previous=snaps[i-1],current=snaps[i],diff=compareMapsAliasAware(previous.following,current.following);
    const followed=diff.added.map(row=>{const canonical=canonicalKey(row.username.toLowerCase()),prior=recentEvidence.some(event=>canonicalKey(event.username.toLowerCase())===canonical&&Number.isFinite(Number(event.timestamp))&&Number.isFinite(Number(row.timestamp))&&Number(event.timestamp)<Number(row.timestamp));return{...row,_refollow:prior,_fbid:state.identityFbids.get(canonical)||null}});
    const unfollowed=diff.removed.map(row=>({...row,_detectedDate:current.date,_fbid:state.identityFbids.get(canonicalKey(row.username.toLowerCase()))||null}));days.push({date:current.date,previousDate:previous.date,followed,unfollowed,refollowed:followed.filter(row=>row._refollow),net:followed.length-unfollowed.length});
  }return days;
}
function buildObservedDriveDataset(followers,following){
  const notFollowingBack=new Map();
  for(const [key,row] of following)if(!followers.has(key))notFollowingBack.set(key,row);
  return {followers,following,notFollowingBack};
}

function snapshotFromInsights(day,insights,followingCount,existing=null){
  return{id:day,timestamp:dateToNoonTimestamp(day),period:insights?.period??null,followers:insights?.followers??null,follows:insights?.follows??null,unfollows:insights?.unfollows??null,net:insights?.net??null,reached:insights?.reached??null,profileVisits:insights?.profileVisits??null,externalLinkTaps:insights?.externalLinkTaps??null,interactions:insights?.interactions??null,nonFollowerReach:insights?.nonFollowerReach??null,nonFollowerEngagement:insights?.nonFollowerEngagement??null,following:followingCount??null,enabled:existing?.enabled!==false};
}

function insightsFromSnapshot(snapshot){
  if(!snapshot)return null;
  const x={
    period:snapshot.period??null,
    followers:snapshot.followers??null,
    follows:snapshot.follows??null,
    unfollows:snapshot.unfollows??null,
    net:snapshot.net??null,
    reached:snapshot.reached??null,
    profileVisits:snapshot.profileVisits??null,
    externalLinkTaps:snapshot.externalLinkTaps??null,
    interactions:snapshot.interactions??null,
    nonFollowerReach:snapshot.nonFollowerReach??null,
    nonFollowerEngagement:snapshot.nonFollowerEngagement??null
  };
  return Object.values(x).some(v=>v!=null)?x:null;
}

async function syncDriveInsightsFromDiscovered(discovered,bridge,cache=null){
  const relevant=discovered
    .filter(isDailyDriveFile)
    .filter(f=>isDriveInsightFile(f.name)||String(f.name).toLowerCase()==="following.json");

  const packages=[...groupDriveExportPackages(relevant).values()]
    .filter(p=>p.date)
    .sort((a,b)=>(a.date||"").localeCompare(b.date||"")||a.key.localeCompare(b.key));

  // First collect each physical export package independently. Two automations can
  // create packages with the same folder date but different Insights periods.
  const bySnapshotDay=new Map();

  for(const pkg of packages){
    const insightFiles=pkg.files.filter(f=>isDriveInsightFile(f.name));
    if(!insightFiles.length)continue;

    const insightSources=[];
    for(const file of insightFiles)insightSources.push(await downloadDriveSource(file,bridge,cache));
    const insights=parseInsightSources(insightSources);
    if(!insights)continue;

    const day=inferInsightSnapshotDay(insights.period,pkg.date);
    if(!day)continue;

    const followingCandidate=await bestFollowingCandidate(pkg.files,bridge,cache);
    const existing=bySnapshotDay.get(day)||{
      day,
      insights:null,
      followingCount:null,
      followingFreshness:-Infinity
    };

    existing.insights=mergeInsightMetrics(existing.insights,insights);

    if(followingCandidate){
      const freshness=followingCandidate.maxTimestamp??-Infinity;
      if(existing.followingCount==null||freshness>existing.followingFreshness){
        existing.followingCount=followingCandidate.following.size;
        existing.followingFreshness=freshness;
      }
    }

    bySnapshotDay.set(day,existing);
  }

  let found=0,added=0,updated=0;
  let latestSnapshot=null;

  for(const row of [...bySnapshotDay.values()].sort((a,b)=>a.day.localeCompare(b.day))){
    found++;
    const idx=state.insightSnapshots.findIndex(s=>s.id===row.day);
    const existing=idx>=0?state.insightSnapshots[idx]:null;
    const snapshot=snapshotFromInsights(row.day,row.insights,row.followingCount,existing);

    if(idx>=0){
      state.insightSnapshots[idx]=snapshot;
      updated++;
    }else{
      state.insightSnapshots.push(snapshot);
      added++;
    }
    latestSnapshot=snapshot;
  }

  state.insightSnapshots.sort((a,b)=>a.timestamp-b.timestamp);
  persistInsightSnapshots();

  return {found,added,updated,latestSnapshot};
}

async function syncPublicDrive(){
  const bridge=driveBridgeUrl(),url=els.driveFolderUrl.value.trim(),rootId=extractDriveFolderId(url),rootResourceKey=extractDriveResourceKey(url);
  state.driveFolderUrl=url;localStorage.setItem("ifa-drive-folder-url",url);
  if(!rootId){setDriveUi("error",t("driveInvalidLink"));return}if(!bridge){setDriveUi("error",t("driveBridgeMissing"));return}
  els.syncDriveBtn.disabled=true;setDriveUi("syncing",t("driveScanningFolder"));
  try{
    const discovered=[],cache=new Map();await walkDriveFolder(rootId,[],discovered,bridge,new Set(),rootResourceKey);
    const dailyFiles=discovered.filter(isDailyDriveFile),dailyRelevant=dailyFiles.filter(f=>isDriveRelevantFile(f.name)),dailyGroups=[...groupDriveExportsByDate(dailyRelevant).values()].sort((a,b)=>a.date.localeCompare(b.date));
    if(!dailyGroups.length){els.driveLatestDate.textContent="—";setDriveUi("error",t("driveNoExports"));return}
    state.dailyFollowingSnapshots=await collectDriveFollowingSnapshots(dailyRelevant,bridge,cache);
    const followerResult=await collectDriveFollowerEvents(dailyRelevant,bridge,cache);state.dailyFollowerEvents=followerResult.events;state.driveFollowerEvents=followerResult.followers;state.recentlyUnfollowedEvents=await collectDriveRecentlyUnfollowed(dailyRelevant,bridge,cache);
    const latestFollowingSnapshot=state.dailyFollowingSnapshots.at(-1);if(!latestFollowingSnapshot?.following?.size){setDriveUi("error",t("driveNoExports"));return}
    state.current=buildObservedDriveDataset(followerResult.followers,latestFollowingSnapshot.following);state.currentLoaded=true;state.currentOrigin="drive-daily";state.currentSourceCount=followerResult.sourceCount+state.dailyFollowingSnapshots.length;state.driveDailySynced=true;
    const referenceFiles=discovered.filter(isReferenceDriveFile).filter(f=>String(f.name).toLowerCase()==="following.json"||/^followers(?:_\d+)?\.json$/i.test(String(f.name).toLowerCase())),referenceNames=new Set(referenceFiles.map(f=>String(f.name).toLowerCase())),hasReference=referenceNames.has("following.json")&&[...referenceNames].some(name=>/^followers(?:_\d+)?\.json$/i.test(name));
    if(hasReference){const sources=await downloadDriveSources(referenceFiles,bridge,cache),imported=buildImportFromSources(sources);state.reference=imported.dataset;state.referenceLoaded=true;state.referenceSourceCount=sources.length}
    const fullFiles=discovered.filter(isFullExportsDriveFile);state.fullHistory=await collectDriveFullCheckpoints(fullFiles,bridge,cache);state.driveFull=state.fullHistory.at(-1)||null;
    rebuildIdentityChanges();
    const latestDaily=state.dailyFollowingSnapshots.at(-1)?.date||dailyGroups.at(-1)?.date||"—";els.driveLatestDate.textContent=latestDaily;els.drivePreviousDate.textContent=state.driveFull?.date||t("driveFullMissing");els.driveExportCount.textContent=state.referenceLoaded?t("driveReferenceLoadedShort"):t("driveReferenceMissing");els.driveFileCount.textContent=String(state.dailyFollowingSnapshots.length);
    setDriveUi("syncing",t("driveHistoryScanning"));const historyResult=await syncDriveInsightsFromDiscovered(dailyFiles,bridge,cache),latestInsightSnapshot=historyResult.latestSnapshot||[...state.insightSnapshots].sort((a,b)=>a.timestamp-b.timestamp).at(-1)||null;
    state.insights=insightsFromSnapshot(latestInsightSnapshot);state.currentSnapshotTimestamp=latestInsightSnapshot?.timestamp??dateToNoonTimestamp(latestDaily);state.driveLastSync=Date.now();cache.clear();updateStatuses();renderAll();
    setDriveUi("synced",`${t("driveSyncComplete")} ${t("lastFull")}: ${state.driveFull?.date||t("driveFullMissing")}. ${historyResult.found} ${t("insightSnapshotsSaved")}.`);
  }catch(err){console.error("Drive sync:",err);setDriveUi("error",`${t("driveSyncFailed")}: ${humanizeDriveError(err)}`)}finally{els.syncDriveBtn.disabled=false}
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
  setDriveUi("syncing",t("driveHistoryScanning"));

  try{
    const discovered=[];
    const cache=new Map();
    await walkDriveFolder(rootId,[],discovered,bridge,new Set(),rootResourceKey);

    const result=await syncDriveInsightsFromDiscovered(discovered,bridge,cache);
    cache.clear();

    const latest=[...state.insightSnapshots].sort((a,b)=>a.timestamp-b.timestamp).at(-1)||null;
    if(latest){
      state.insights=insightsFromSnapshot(latest);
      state.currentSnapshotTimestamp=latest.timestamp;
    }

    renderInsights();

    if(!result.found){
      setDriveUi("synced",t("driveHistoryNoInsights"));
    }else{
      setDriveUi(
        "synced",
        `${t("driveHistoryComplete")} ${result.added} ${t("driveHistoryAdded")}, ${result.updated} ${t("driveHistoryUpdated")}.`
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


function clearDataset(target){
  if(target!=="reference")return;state.reference=emptyDataset();state.referenceLoaded=false;state.referenceSourceCount=0;els.referenceFiles.value="";rebuildIdentityChanges();updateStatuses();renderAll();
}
function clearManualFull(){
  state.manualFull=null;els.currentFiles.value="";
  if(!state.driveDailySynced){state.current=emptyDataset();state.currentLoaded=false;state.currentSourceCount=0;state.currentOrigin="none";state.insights=null;state.currentSnapshotTimestamp=null}
  rebuildIdentityChanges();updateStatuses();renderAll();
}
function setupFileInput(input,dropzone,target){
  input.addEventListener("change",()=>{if(input.files?.length)loadFiles([...input.files],target)});["dragenter","dragover"].forEach(ev=>dropzone.addEventListener(ev,e=>{e.preventDefault();dropzone.classList.add("dragging")}));["dragleave","drop"].forEach(ev=>dropzone.addEventListener(ev,e=>{e.preventDefault();dropzone.classList.remove("dragging")}));dropzone.addEventListener("drop",e=>{const files=[...e.dataTransfer.files].filter(f=>/\.(json|zip)$/i.test(f.name));if(files.length)loadFiles(files,target)});
}
async function loadFiles(files,target){
  const status=target==="full"?els.currentStatus:els.referenceStatus;status.textContent=t("processing");
  try{
    const sources=[];for(const file of files){
      if(file.name.toLowerCase().endsWith(".zip"))sources.push(...await extractInstagramJsonFilesFromZip(file));
      else if(file.name.toLowerCase().endsWith(".json"))sources.push({
        name:file.name,text:await file.text(),
        modifiedAt:Number.isFinite(Number(file.lastModified))?Number(file.lastModified):null,
        modifiedOrigin:"local-file"
      });
    }
    const imported=buildImportFromSources(sources);
    if(target==="full"){
      if(!imported.dataset.followers.size||!imported.dataset.following.size)throw new Error(t("noRecognized"));const date=inferSnapshotDayFromFiles(files,imported.dataset);state.manualFull=checkpointFromImported(imported,{date,source:"manual",sourceCount:sources.length,label:files.map(file=>file.name).join(", ")});
      if(!state.driveDailySynced){state.current=imported.dataset;state.currentLoaded=true;state.currentSourceCount=sources.length;state.currentOrigin="manual-full";state.insights=imported.insights;state.currentSnapshotTimestamp=state.manualFull.timestamp||state.manualFull.evidenceCutoff}
    }else{state.reference=imported.dataset;state.referenceLoaded=true;state.referenceSourceCount=sources.length}
    rebuildIdentityChanges();updateStatuses();renderAll();
  }catch(err){console.error(err);status.textContent=`Error: ${err.message}`}
}
function inferSnapshotDayFromFiles(files,dataset){
  for(const file of files){let m=String(file.name||"").match(/instagram-[^/]*-(20\d{2})-(\d{2})-(\d{2})-/i);if(m)return`${m[1]}-${m[2]}-${m[3]}`;m=String(file.name||"").match(/meta-(20\d{2})-([A-Za-z]{3})-(\d{1,2})-/i);if(m){const months={jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"},month=months[m[2].toLowerCase()];if(month)return`${m[1]}-${month}-${String(m[3]).padStart(2,"0")}`}m=String(file.name||"").match(/(20\d{2})-(\d{2})-(\d{2})/);if(m)return`${m[1]}-${m[2]}-${m[3]}`}
  const cutoff=maxRelationshipTimestamp(dataset);return cutoff?new Date(cutoff*1000).toISOString().slice(0,10):null;
}
function updateStatuses(){
  if(state.manualFull){els.fullCardEyebrow.textContent=t("currentFull");els.currentStatus.classList.add("loaded");const cp=state.manualFull,vars={files:cp.sourceCount,followers:cp.dataset.followers.size,following:cp.dataset.following.size,notFollowing:computeNotFollowingBack(cp.dataset).size};els.currentStatus.innerHTML=`<span class="status-desktop">${escapeHtml(`${cp.date||"—"} · ${t("fullSourceManual")} · ${t("loadedFiles",vars)}`)}</span><span class="status-mobile">${escapeHtml(`${cp.date||"—"} · ${t("fullSourceManual")}`)}</span>`;els.clearCurrentBtn.disabled=false}
  else if(state.driveFull){els.fullCardEyebrow.textContent=t("lastFull");els.currentStatus.classList.add("loaded");const cp=state.driveFull,vars={files:cp.sourceCount,followers:cp.dataset.followers.size,following:cp.dataset.following.size,notFollowing:computeNotFollowingBack(cp.dataset).size};els.currentStatus.innerHTML=`<span class="status-desktop">${escapeHtml(`${cp.date||"—"} · ${t("fullSourceDrive")} · ${t("loadedFiles",vars)}`)}</span><span class="status-mobile">${escapeHtml(`${cp.date||"—"} · ${t("lastFull")}`)}</span>`;els.clearCurrentBtn.disabled=true}
  else{els.fullCardEyebrow.textContent=t("fullCheckpoint");els.currentStatus.classList.remove("loaded");els.currentStatus.textContent=t("fullNoCheckpoint");els.clearCurrentBtn.disabled=true}
  const refEl=els.referenceStatus;refEl.classList.toggle("loaded",state.referenceLoaded);if(state.referenceLoaded){const vars={files:state.referenceSourceCount,followers:state.reference.followers.size,following:state.reference.following.size,notFollowing:computeNotFollowingBack(state.reference).size};refEl.innerHTML=`<span class="status-desktop">${escapeHtml(t("loadedFiles",vars))}</span><span class="status-mobile">${escapeHtml(t("sourceFilesShort",vars))}</span>`}else refEl.textContent=t("noReference");
}

async function extractInstagramJsonFilesFromZip(file){
  const buffer=await file.arrayBuffer(),bytes=new Uint8Array(buffer),view=new DataView(buffer),eocd=findEOCD(bytes);if(eocd<0)throw new Error(t("invalidZip"));
  const total=view.getUint16(eocd+10,true),central=view.getUint32(eocd+16,true);let off=central,candidates=[];
  for(let i=0;i<total;i++){
    if(view.getUint32(off,true)!==0x02014b50)throw new Error(t("invalidZip"));
    const compression=view.getUint16(off+10,true),dosTime=view.getUint16(off+12,true),dosDate=view.getUint16(off+14,true),compressedSize=view.getUint32(off+20,true),uncompressedSize=view.getUint32(off+24,true),fileNameLength=view.getUint16(off+28,true),extraLength=view.getUint16(off+30,true),commentLength=view.getUint16(off+32,true),localHeaderOffset=view.getUint32(off+42,true);
    const name=new TextDecoder().decode(bytes.slice(off+46,off+46+fileNameLength)),base=name.split("/").pop().toLowerCase();
    if(base==="following.json"||/^followers(?:_\d+)?\.json$/i.test(base)||base==="recently_unfollowed_profiles.json"||["audience_insights.json","content_interactions.json","profiles_reached.json"].includes(base))candidates.push({name,compression,compressedSize,uncompressedSize,localHeaderOffset,clockKey:zipDosClockKey(dosDate,dosTime)});
    off+=46+fileNameLength+extraLength+commentLength;
  }
  if(!candidates.length)throw new Error(t("noRecognized"));
  const out=[];for(const entry of candidates)out.push({
    name:entry.name,text:await extractZipEntryText(buffer,entry),
    clockKey:entry.clockKey||null,clockOrigin:entry.clockKey?"zip-entry":null
  });return out;
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
  const followers=new Map(),following=new Map(),recentlyUnfollowed=[];let recognized=0;
  let followingGeneratedAt=null,followingClockKey=null,followingClockOrigin=null;
  const insightParts={audience:null,interactions:null,reach:null};

  for(const s of sources){
    let data;try{data=JSON.parse(s.text)}catch{throw new Error(`${s.name}: ${t("invalidJson")}.`)}
    const base=s.name.toLowerCase().split("/").pop();

    if(base==="following.json"){
      recognized++;
      extractFollowing(data).forEach(e=>putNewest(following,e));
      const clock=sourceClockInfo(s);
      if(clock.epochMs!=null&&(followingGeneratedAt==null||clock.epochMs>followingGeneratedAt)){
        followingGeneratedAt=clock.epochMs;followingClockKey=clock.clockKey;followingClockOrigin=clock.origin;
      }else if(followingGeneratedAt==null&&clock.clockKey){
        followingClockKey=clock.clockKey;followingClockOrigin=clock.origin;
      }
      continue;
    }

    if(/^followers(?:_\d+)?\.json$/i.test(base)){recognized++;extractFollowers(data).forEach(e=>putNewest(followers,e));continue}
    if(base==="recently_unfollowed_profiles.json"){recentlyUnfollowed.push(...extractRecentlyUnfollowed(data));continue}
    if(base==="audience_insights.json"||data?.organic_insights_audience)insightParts.audience=data;
    else if(base==="content_interactions.json"||data?.organic_insights_interactions)insightParts.interactions=data;
    else if(base==="profiles_reached.json"||data?.organic_insights_reach)insightParts.reach=data;
  }

  if(!recognized)throw new Error(t("noRecognized"));
  const nfb=new Map();for(const[k,v]of following)if(!followers.has(k))nfb.set(k,v);
  return{
    dataset:{followers,following,notFollowingBack:nfb},
    insights:parseInsights(insightParts),
    recentlyUnfollowed,
    followingGeneratedAt,followingClockKey,followingClockOrigin
  };
}

function insightMap(root,key){
  const direct=root?.[key]?.[0]?.string_map_data;
  if(direct)return direct;

  const wanted=normalizeInsightKey(key);
  for(const [rootKey,rows] of Object.entries(root||{})){
    if(normalizeInsightKey(rootKey)!==wanted)continue;
    const row=Array.isArray(rows)?rows[0]:null;
    if(row?.string_map_data)return row.string_map_data;
  }
  return{};
}

function normalizeInsightKey(key){
  return String(key||"")
    .normalize("NFKD")
    .replace(/[’‘`´]/g,"'")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g," ")
    .trim()
    .replace(/\s+/g," ");
}

function normalizedInsightMap(map){
  const out=new Map();
  for(const [key,row] of Object.entries(map||{})){
    out.set(normalizeInsightKey(key),row);
  }
  return out;
}

function valueOfAny(map,...aliases){
  for(const alias of aliases){
    const row=map.get(normalizeInsightKey(alias));
    if(row?.value!=null)return row.value;
  }
  return null;
}

function numberOfAny(map,...aliases){
  const v=valueOfAny(map,...aliases);
  if(v==null)return null;
  const n=Number(String(v).replace(/,/g,"").replace(/%/g,"").trim());
  return Number.isFinite(n)?n:null;
}

function parseFollowTypePercent(text,labelPattern){
  if(!text)return null;
  const m=String(text).match(new RegExp(labelPattern+"\\s*:\\s*([\\d.]+)%","i"));
  return m?Number(m[1]):null;
}

function parseInsights(parts){
  const a=normalizedInsightMap(insightMap(parts.audience,"organic_insights_audience"));
  const i=normalizedInsightMap(insightMap(parts.interactions,"organic_insights_interactions"));
  const r=normalizedInsightMap(insightMap(parts.reach,"organic_insights_reach"));

  if(!a.size&&!i.size&&!r.size)return null;

  const engaged=valueOfAny(i,
    "Engaged account by follow type",
    "Engaged accounts by follow type"
  );

  return{
    period:valueOfAny(a,"Date range")
      ||valueOfAny(i,"Date range")
      ||valueOfAny(r,"Date range")
      ||null,
    followers:numberOfAny(a,"Followers"),
    follows:numberOfAny(a,"Follows"),
    unfollows:numberOfAny(a,"Unfollows"),
    net:numberOfAny(a,"Overall followers"),
    reached:numberOfAny(r,"Accounts reached"),
    profileVisits:numberOfAny(r,"Profile visits"),
    externalLinkTaps:numberOfAny(r,"External link taps"),
    interactions:numberOfAny(i,"Content interactions"),
    nonFollowerReach:numberOfAny(r,"Non-followers","Non followers"),
    nonFollowerEngagement:parseFollowTypePercent(engaged,"Non[- ]?followers")
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
function countMutualsAliasAware(dataset){const followers=canonicalKeySet(dataset.followers);let count=0;for(const key of dataset.following.keys())if(followers.has(canonicalKey(key)))count++;return count}
function renderOverview(){
  const currentFollowers=reconstructedCurrentFollowers().followers;
  const selectedFollowing=followingSourceSelection().following;
  const nfb=computeOperationalNotFollowingBack();
  els.metricFollowers.textContent=currentFollowers.size;
  els.metricFollowing.textContent=selectedFollowing.size;
  els.metricMutuals.textContent=Math.max(0,selectedFollowing.size-nfb.size);
  els.metricNfb.textContent=nfb.size;
  els.heartedCount.textContent=state.hearts.size;
  const changes=referenceChanges();
  els.newFollowersCount.textContent=changes.newFollowers??"—";
  els.lostFollowersCount.textContent=changes.lostFollowers??"—";
  els.newFollowingCount.textContent=changes.newFollowing??"—";
  els.unfollowedByYouCount.textContent=changes.unfollowedByYou??"—";
}
function referenceChanges(){
  if(!state.referenceLoaded)return{newFollowers:0,lostFollowers:null,newFollowing:0,unfollowedByYou:0};
  const full=effectiveFullCheckpoint();
  const following=followingSourceSelection().following;
  const followerChanges=full?compareMapsAliasAware(state.reference.followers,full.dataset.followers):{added:[],removed:[]};
  const followingChanges=following.size?compareMapsAliasAware(state.reference.following,following):{added:[],removed:[]};
  return{
    newFollowers:full?followerChanges.added.length:0,
    lostFollowers:full?followerChanges.removed.length:null,
    newFollowing:followingChanges.added.length,
    unfollowedByYou:followingChanges.removed.length
  };
}
function renderListRequirement(){
  const isUnfollowers=state.view==="unfollowed";
  const isAllTime=state.view==="allTimeFollowers";

  if(!isUnfollowers&&!isAllTime){
    els.listRequirement.hidden=true;
    return;
  }

  const missingEvidence=isAllTime&&!hasHistoricalFollowerEvidence();
  const missingFull=isUnfollowers&&!effectiveFullCheckpoint();

  if(!missingEvidence&&!missingFull){
    els.listRequirement.hidden=true;
    return;
  }

  els.listRequirement.hidden=false;
  els.requireSyncBtn.hidden=true;
  els.requireFullBtn.hidden=!missingFull;
  els.listRequirementTitle.textContent=isAllTime?t("allTimeFollowers"):t("unfollowed");

  const copies=[];
  if(missingEvidence)copies.push(t("allTimeNeedsSync"));
  if(missingFull)copies.push(t("unfollowedNeedsFull"));
  els.listRequirementCopy.textContent=copies.join(" ");
}
function currentVisibleRows(options={}){
  const ignoreReference=options.ignoreReference===true;
  let rows=[];

  if(state.view==="unfollowed"){
    if(!effectiveFullCheckpoint())return[];
    rows=computeUnfollowedRows();
  }else if(state.view==="allTimeFollowers"){
    if(!hasHistoricalFollowerEvidence())return[];
    rows=[...allTimeFollowerEvidence().values()];
  }else if(state.view==="renamed"){
    rows=state.identityChanges.map(change=>({
      username:change.newUsername,
      href:change.href,
      timestamp:change.timestamps.following??change.timestamps.follower??null,
      _kind:"renamed",
      _change:change,
      _meta:`@${change.oldUsername} → @${change.newUsername}`
    }));
  }else{
    if(state.view==="followers")rows=[...reconstructedCurrentFollowers().followers.values()];
    else if(state.view==="following")rows=[...followingSourceSelection().following.values()];
    else rows=[...computeOperationalNotFollowingBack().values()];
  }

  const ref=state.reference;
  const mode=els.referenceMode.value;
  if(!ignoreReference&&state.referenceLoaded&&state.view!=="renamed"&&state.view!=="unfollowed"&&mode!=="all"){
    const refMap=(state.view==="followers"||state.view==="allTimeFollowers")?ref.followers:ref.following;
    const refCanonical=canonicalKeySet(refMap);
    rows=rows.filter(row=>{
      const has=refCanonical.has(canonicalKey(row.username.toLowerCase()));
      return mode==="hide"?!has:has;
    });
  }

  const q=els.searchInput.value.trim().toLowerCase();
  if(q)rows=rows.filter(row=>row._kind==="renamed"
    ?row._change.oldUsername.toLowerCase().includes(q)||row._change.newUsername.toLowerCase().includes(q)
    :row.username.toLowerCase().includes(q));

  if(els.hideHearted.checked)rows=rows.filter(row=>!state.hearts.has(canonicalKey(row.username.toLowerCase())));

  const sort=els.sortSelect.value;
  rows.sort((a,b)=>sort==="name-asc"?a.username.localeCompare(b.username)
    :sort==="name-desc"?b.username.localeCompare(a.username)
    :sort==="date-asc"?(a.timestamp??0)-(b.timestamp??0)
    :(b.timestamp??0)-(a.timestamp??0));
  return rows;
}
function renderList(){
  renderListRequirement();

  const currentFollowers=reconstructedCurrentFollowers().followers;
  const selectedFollowing=followingSourceSelection().following;
  const nfb=computeOperationalNotFollowingBack();
  const unfollowedReady=!!effectiveFullCheckpoint();

  els.followersCount.textContent=currentFollowers.size;
  els.followingCount.textContent=selectedFollowing.size;
  els.notFollowingBackCount.textContent=nfb.size;
  els.allTimeFollowersCount.textContent=hasHistoricalFollowerEvidence()?allTimeFollowerEvidence().size:"—";
  els.unfollowedCount.textContent=unfollowedReady?computeUnfollowedRows().length:"—";
  els.renamedCount.textContent=state.identityChanges.length;

  const rows=currentVisibleRows();

  if(state.view==="unfollowed"&&!unfollowedReady){
    els.summaryLine.textContent="";
    els.dataSourceNote.innerHTML="";
    els.userList.innerHTML="";
    els.emptyState.style.display="none";
    updateOpenNext();
    return;
  }

  if(state.view==="allTimeFollowers"&&!hasHistoricalFollowerEvidence()){
    els.summaryLine.textContent="";
    els.dataSourceNote.innerHTML="";
    els.userList.innerHTML="";
    els.emptyState.style.display="none";
    updateOpenNext();
    return;
  }

  if(!state.currentLoaded&&!effectiveFullCheckpoint()&&state.view!=="renamed"&&state.view!=="unfollowed"&&state.view!=="allTimeFollowers"){
    els.summaryLine.textContent=t("loadPrompt");
    els.dataSourceNote.innerHTML="";
    els.userList.innerHTML="";
    els.emptyState.style.display="flex";
    updateOpenNext();
    return;
  }

  let extra="";
  if(state.referenceLoaded&&state.view!=="renamed"&&state.view!=="unfollowed"&&els.referenceMode.value!=="all"){
    if(els.referenceMode.value==="hide"){
      const beforeReference=currentVisibleRows({ignoreReference:true});
      const hidden=Math.max(0,beforeReference.length-rows.length);
      extra+=` · ${t("referenceHidden",{count:hidden})}`;
    }else{
      extra+=` · ${t("referenceOnlyShown",{count:rows.length})}`;
    }
  }

  if(state.view==="unfollowed"&&unfollowedReady){
    const full=effectiveFullCheckpoint(),cutoff=full.followingGeneratedAt?Math.floor(full.followingGeneratedAt/1000):(full.evidenceCutoff||full.timestamp);
    if(cutoff)extra+=` · ${t("unfollowedCutoff",{date:fmtDate(cutoff)})}`;
  }

  els.summaryLine.textContent=t("visibleUsers",{count:rows.length})+extra;
  renderDataSourceNote();
  els.userList.innerHTML=rows.map(renderUserRow).join("");
  els.emptyState.style.display=rows.length?"none":"flex";
  bindHeartButtons();
  bindProfileLinks();
  bindDataSourceControls();
  updateOpenNext();
}
function followingSelectionReasonText(selection){
  if(selection.reason==="override")return t("sourceWhyOverride");
  if(selection.reason==="daily-newer")return t("sourceWhyDaily");
  if(selection.reason==="full-newer")return t("sourceWhyFull");
  if(selection.reason==="uncertain")return t("sourceWhyFallback");
  return "";
}

function sourceChoiceDetails(selection){
  const full=effectiveFullCheckpoint();
  const daily=state.driveDailySynced?latestDailyFollowingSnapshot():null;
  const dailyTime=daily?formatSourceTime(daily.generatedAt,daily.clockKey):"—";
  const fullTime=full?formatSourceTime(full.followingGeneratedAt,full.followingClockKey):"—";
  const selectedTime=formatSourceTime(selection.generatedAt,selection.clockKey);
  const reason=followingSelectionReasonText(selection);

  return`
    <div class="source-detail-grid">
      <div><span>${escapeHtml(t("sourceFollowingLabel"))}</span><strong>${escapeHtml(selection.kind==="daily"?t("sourceDaily"):selection.kind==="full"?t("sourceFull"):"Current")}</strong></div>
      <div><span>${escapeHtml(t("sourceSnapshot"))}</span><strong>${escapeHtml(selectedTime)}</strong></div>
      <div><span>${escapeHtml(t("sourceAccounts"))}</span><strong>${selection.count}</strong></div>
      ${reason?`<div><span>${escapeHtml(t("sourceDetails"))}</span><strong>${escapeHtml(reason)}</strong></div>`:""}
    </div>
    <label class="source-override-field">
      <span>${escapeHtml(t("sourceOverride"))}</span>
      <select id="followingSourceSelect" class="select source-select">
        <option value="auto" ${state.followingSourceOverride==="auto"?"selected":""}>${escapeHtml(t("sourceAuto"))}</option>
        <option value="daily" ${state.followingSourceOverride==="daily"?"selected":""} ${daily?"":"disabled"}>${escapeHtml(t("sourceDaily"))} · ${escapeHtml(dailyTime)}</option>
        <option value="full" ${state.followingSourceOverride==="full"?"selected":""} ${full?"":"disabled"}>${escapeHtml(t("sourceFull"))} · ${escapeHtml(fullTime)}</option>
      </select>
    </label>
    ${state.followingSourceOverride!=="auto"?`<small>${escapeHtml(t("sourceOverrideActive"))}</small>`:""}
  `;
}

function renderDataSourceNote(){
  if(!els.dataSourceNote)return;

  const full=effectiveFullCheckpoint();
  const reconstructed=reconstructedCurrentFollowers();
  const followingSelection=followingSourceSelection();
  let text="";
  let details="";

  if(state.view==="followers"){
    if(full&&reconstructed.base==="full-plus-daily"){
      text=t("followersSourceFull",{count:reconstructed.addedDailyCount});
    }else if(full){
      text=t("followersSourceManualOnly");
    }else if(state.driveDailySynced){
      text=t("followersSourceFallback");
    }
  }else if(state.view==="following"){
    if(followingSelection.kind==="daily"){
      text=followingSelection.reason==="uncertain"?t("followingSourceFallbackDaily"):t("followingSourceDaily");
    }else if(followingSelection.kind==="full"){
      text=followingSelection.reason==="full-only"?t("followingSourceFallbackFull"):t("followingSourceFull");
    }
    details=sourceChoiceDetails(followingSelection);
  }else if(state.view==="notFollowingBack"){
    text=full
      ?t("nfbSourceFull",{count:reconstructed.addedDailyCount})
      :t("nfbSourceFallback");
    details=sourceChoiceDetails(followingSelection);
  }else if(state.view==="allTimeFollowers"){
    text=t("allTimeSource");
  }else if(state.view==="unfollowed"){
    text=t("unfollowersSource");
  }else if(state.view==="renamed"){
    text=t("renamedSource");
  }

  if(!text){
    els.dataSourceNote.innerHTML="";
    return;
  }

  els.dataSourceNote.innerHTML=details
    ?`<span>${escapeHtml(text)}</span><details class="source-details"><summary>${escapeHtml(t("sourceDetails"))}</summary><div class="source-details-popover">${details}</div></details>`
    :`<span>${escapeHtml(text)}</span>`;
}

function bindDataSourceControls(){
  const select=document.querySelector("#followingSourceSelect");
  if(!select)return;
  select.addEventListener("change",()=>{
    state.followingSourceOverride=select.value;
    sessionStorage.setItem("ifa-following-source",state.followingSourceOverride);
    renderOverview();
    renderList();
  });
}

function renderUserRow(row){
  if(row._kind==="renamed"){const c=row._change,evidence=[];if(c.relations.includes("follower"))evidence.push(t("renameEvidenceFollower"));if(c.relations.includes("following"))evidence.push(t("renameEvidenceFollowing"));const confidence=c.confidence==="high"?t("renameConfidenceHigh"):t("renameConfidenceLikely"),evidenceText=[];if(c.timestamps.follower)evidenceText.push(`${t("renameEvidenceFollower")}: ${fmtDate(c.timestamps.follower)}`);if(c.timestamps.following)evidenceText.push(`${t("renameEvidenceFollowing")}: ${fmtDate(c.timestamps.following)}`);const key=c.newKey,reviewed=state.reviewed.has(key),hearted=state.hearts.has(canonicalKey(key));return`<div class="user-row rename-row"><div class="avatar">${escapeHtml(c.newUsername.charAt(0).toUpperCase())}</div><a class="username" data-profile-key="${escapeAttribute(key)}" href="${escapeAttribute(c.href)}" target="ifa-instagram-review" referrerpolicy="no-referrer">@${escapeHtml(c.oldUsername)} → @${escapeHtml(c.newUsername)}</a><div class="meta">${escapeHtml(`${confidence} · ${evidenceText.join(" · ")||evidence.join(" + ")}`)}</div><span class="review-dot ${reviewed?"reviewed":""}" title="${reviewed?"Opened":"Not opened"}"></span><button class="heart-btn ${hearted?"active":""}" data-heart="${escapeAttribute(key)}" type="button" aria-label="Keep">${hearted?"♥":"♡"}</button></div>`}
  const key=canonicalKey(row.username.toLowerCase()),reviewed=state.reviewed.has(key),hearted=state.hearts.has(key),meta=row._meta||formatMeta(row.timestamp);return`<div class="user-row"><div class="avatar">${escapeHtml(row.username.charAt(0).toUpperCase())}</div><a class="username" data-profile-key="${escapeAttribute(key)}" href="${escapeAttribute(row.href)}" target="ifa-instagram-review" referrerpolicy="no-referrer">@${escapeHtml(row.username)}</a><div class="meta">${escapeHtml(meta)}</div><span class="review-dot ${reviewed?"reviewed":""}" title="${reviewed?"Opened":"Not opened"}"></span><button class="heart-btn ${hearted?"active":""}" data-heart="${escapeAttribute(key)}" type="button" aria-label="Keep">${hearted?"♥":"♡"}</button></div>`;
}
function bindHeartButtons(){document.querySelectorAll("[data-heart]").forEach(btn=>btn.addEventListener("click",()=>{const k=normalizeHeartUsername(btn.dataset.heart),hearted=!state.hearts.has(k),updatedAt=Date.now();setLocalHeart(k,hearted,updatedAt);renderAll();queueHeartMutation(k,hearted,updatedAt)}))}
function setReviewAnchor(key){state.reviewAnchorKey=key||null;if(state.reviewAnchorKey)sessionStorage.setItem("ifa-review-anchor",state.reviewAnchorKey);else sessionStorage.removeItem("ifa-review-anchor")}
function markReviewed(key){state.reviewed.add(key);setReviewAnchor(key);sessionStorage.setItem("ifa-reviewed",JSON.stringify([...state.reviewed]));renderList()}
function bindProfileLinks(){document.querySelectorAll("[data-profile-key]").forEach(a=>a.addEventListener("click",()=>{const key=a.dataset.profileKey;state.reviewed.add(key);setReviewAnchor(key);sessionStorage.setItem("ifa-reviewed",JSON.stringify([...state.reviewed]));setTimeout(()=>renderList(),0)}))}
function nextReviewRow(rows){if(!rows.length)return null;const anchorIndex=state.reviewAnchorKey?rows.findIndex(r=>canonicalKey(r.username.toLowerCase())===state.reviewAnchorKey):-1;if(anchorIndex<0)return rows.find(r=>!state.reviewed.has(canonicalKey(r.username.toLowerCase())))||null;for(let step=1;step<=rows.length;step++){const row=rows[(anchorIndex+step)%rows.length];if(!state.reviewed.has(canonicalKey(row.username.toLowerCase())))return row}return null}
function updateOpenNext(){
  const blockedUnfollowed=state.view==="unfollowed"&&!effectiveFullCheckpoint();
  const blockedAllTime=state.view==="allTimeFollowers"&&!hasHistoricalFollowerEvidence();
  const isList=state.section==="followers"&&!blockedUnfollowed&&!blockedAllTime&&(state.currentLoaded||!!effectiveFullCheckpoint()||state.view==="renamed"||state.view==="allTimeFollowers");
  els.openNextWrap.classList.toggle("visible",isList);
  if(!isList)return;
  const rows=currentVisibleRows(),remaining=rows.filter(r=>!state.reviewed.has(canonicalKey(r.username.toLowerCase())));
  els.openNextBtn.disabled=!remaining.length;
  els.openNextBtn.querySelector("[data-i18n=openNext]").textContent=remaining.length?t("openNext"):t("allOpened");
  els.openNextRemaining.textContent=remaining.length?`${remaining.length} ${t("left")}`:"";
}
function openNextProfile(){
  const rows=currentVisibleRows(),next=nextReviewRow(rows);
  if(!next)return;
  const key=canonicalKey(next.username.toLowerCase());
  const link=[...document.querySelectorAll("[data-profile-key]")].find(a=>a.dataset.profileKey===key);
  if(link){
    // Use exactly the same native anchor navigation path as a manual username click.
    // This avoids window.open() creating an orphaned about:blank tab when the OS
    // hands the Instagram URL to the native app.
    link.click();
    return;
  }
}
function formatMeta(ts){
  if(!ts)return t("dateUnavailable");
  const d=new Date(ts*1000);
  if(Number.isNaN(d.getTime()))return t("dateUnavailable");
  const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB";
  const fmt=new Intl.DateTimeFormat(locale,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(d);
  const followerView=state.view==="followers"||state.view==="allTimeFollowers"||state.view==="unfollowed";
  return followerView?t("followsSince",{date:fmt}):t("followingSince",{date:fmt});
}

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
function dailyFollowerBaselineDate(){
  const dates=state.dailyFollowerEvents.map(row=>row.sourceDate).filter(Boolean).sort();
  return dates[0]||null;
}

function growthDetailsForDate(date){
  const baselineDate=dailyFollowerBaselineDate();
  const seen=new Set();
  const newFollowers=[];

  if(date&&date!==baselineDate){
    for(const row of state.dailyFollowerEvents){
      if(row.sourceDate!==date||isRenamedIdentity(row.username.toLowerCase()))continue;
      const key=`${canonicalKey(row.username.toLowerCase())}|${row.timestamp??""}`;
      if(seen.has(key))continue;
      seen.add(key);
      newFollowers.push(row);
    }
    newFollowers.sort((a,b)=>(a.timestamp??0)-(b.timestamp??0));
  }

  const activity=computeFollowingActivity().find(day=>day.date===date)||null;
  return{
    newFollowers,
    followed:activity?.followed||[],
    unfollowed:activity?.unfollowed||[]
  };
}

function renderGrowthAccountList(rows,{showRefollow=false}={}){
  if(!rows.length)return`<span class="growth-detail-empty">—</span>`;
  return rows.map(row=>`<a class="growth-detail-account" href="${escapeAttribute(row.href)}" target="ifa-instagram-review" referrerpolicy="no-referrer"><span>@${escapeHtml(row.username)}</span><small>${row.timestamp?escapeHtml(formatExactDate(row.timestamp)):""}${showRefollow&&row._refollow?` · ${escapeHtml(t("activityRefollow"))}`:""}</small></a>`).join("");
}

function formatExactDate(ts){
  if(!ts)return"";
  const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB";
  return new Intl.DateTimeFormat(locale,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(new Date(ts*1000));
}

function renderGrowthSnapshotTableRows(s){
  const details=growthDetailsForDate(s.id);
  const detailCount=details.newFollowers.length+details.followed.length+details.unfollowed.length;
  const detailId=`growth-${String(s.id).replace(/[^a-z0-9_-]/gi,"-")}`;

  return`<tr class="${s.enabled===false?"snapshot-inactive":""}">
      <td><label class="snapshot-active-toggle"><input type="checkbox" data-snapshot-toggle="${escapeAttribute(s.id)}" ${s.enabled===false?"":"checked"}><span>${s.enabled===false?t("enable"):t("disable")}</span></label></td>
      <td><button class="growth-expand-button" data-growth-expand="${escapeAttribute(detailId)}" type="button" aria-expanded="false" aria-label="${escapeAttribute(t("growthOpenDetails"))}" ${detailCount?"":"disabled"}><span>${fmtDate(s.timestamp)}</span><b class="growth-chevron">▾</b></button></td>
      <td>${fmtMetric(s.followers)}</td>
      <td>${fmtMetric(s.following)}</td>
      <td>${escapeHtml(s.period||"—")}</td>
      <td><button class="button ghost danger-ghost snapshot-delete" data-snapshot-delete="${escapeAttribute(s.id)}" type="button">${t("delete")}</button></td>
    </tr>
    <tr class="growth-detail-row" data-growth-detail="${escapeAttribute(detailId)}" hidden>
      <td colspan="6">
        <div class="growth-detail-panel">
          <div><h3>${escapeHtml(t("newFollowersObserved"))} · ${details.newFollowers.length}</h3><div class="growth-detail-list">${renderGrowthAccountList(details.newFollowers)}</div></div>
          <div><h3>${escapeHtml(t("followedByMe"))} · ${details.followed.length}</h3><div class="growth-detail-list">${renderGrowthAccountList(details.followed,{showRefollow:true})}</div></div>
          <div><h3>${escapeHtml(t("unfollowedByMe"))} · ${details.unfollowed.length}</h3><div class="growth-detail-list">${renderGrowthAccountList(details.unfollowed)}</div></div>
        </div>
      </td>
    </tr>`;
}

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

  els.insightSnapshotTableBody.innerHTML=[...state.insightSnapshots].reverse().map(renderGrowthSnapshotTableRows).join("");

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
  document.querySelectorAll("[data-growth-expand]").forEach(btn=>btn.addEventListener("click",()=>{
    const detail=document.querySelector(`[data-growth-detail="${CSS.escape(btn.dataset.growthExpand)}"]`);
    if(!detail)return;
    const open=detail.hidden;
    detail.hidden=!open;
    btn.setAttribute("aria-expanded",String(open));
    btn.classList.toggle("open",open);
  }));

  els.insightsGrowthEmpty.style.display=state.insightSnapshots.length?"none":"flex";
  drawInsightsGrowthChart(state.insightSnapshots);
  renderMyFollowingActivity();
}
function renderMyFollowingActivity(){
  if(!els.myActivityDailyList)return;const all=computeFollowingActivity(),from=els.myActivityFrom.value||null,to=els.myActivityTo.value||null,rows=all.filter(day=>(!from||day.date>=from)&&(!to||day.date<=to)),followed=rows.reduce((s,d)=>s+d.followed.length,0),unfollowed=rows.reduce((s,d)=>s+d.unfollowed.length,0),refollowed=rows.reduce((s,d)=>s+d.refollowed.length,0),net=followed-unfollowed;
  els.myActivityFollowed.textContent=followed.toLocaleString();els.myActivityUnfollowed.textContent=unfollowed.toLocaleString();els.myActivityNet.textContent=`${net>0?"+":""}${net.toLocaleString()}`;els.myActivityRefollowed.textContent=refollowed.toLocaleString();els.myActivityEmpty.style.display=state.driveDailySynced&&all.length?"none":"flex";
  els.myActivityDailyList.innerHTML=[...rows].reverse().map(day=>{const followedRows=day.followed.map(row=>`<a class="activity-account" href="${escapeAttribute(row.href)}" target="ifa-instagram-review" referrerpolicy="no-referrer"><span>@${escapeHtml(row.username)}</span>${row._refollow?`<small>${escapeHtml(t("activityRefollow"))}</small>`:""}</a>`).join(""),unfollowedRows=day.unfollowed.map(row=>`<a class="activity-account" href="${escapeAttribute(row.href)}" target="ifa-instagram-review" referrerpolicy="no-referrer"><span>@${escapeHtml(row.username)}</span><small>${escapeHtml(t("detectedBetweenSnapshots"))}</small></a>`).join("");return`<details class="activity-day"><summary><strong>${escapeHtml(day.date)}</strong><span>+${day.followed.length} ${escapeHtml(t("activityFollowed"))}</span><span>-${day.unfollowed.length} ${escapeHtml(t("activityUnfollowed"))}</span><b>${day.net>0?"+":""}${day.net}</b></summary><div class="activity-day-body"><div><h3>${escapeHtml(t("activityFollowed"))} · ${day.followed.length}</h3><div class="activity-account-list">${followedRows||"—"}</div></div><div><h3>${escapeHtml(t("activityUnfollowed"))} · ${day.unfollowed.length}</h3><div class="activity-account-list">${unfollowedRows||"—"}</div></div></div></details>`}).join("");
}

function smoothChartPath(points){
  if(!points.length)return"";
  if(points.length===1)return`M${points[0].x} ${points[0].y}`;

  let d=`M${points[0].x} ${points[0].y}`;
  for(let i=0;i<points.length-1;i++){
    const prev=points[Math.max(0,i-1)];
    const p0=points[i];
    const p1=points[i+1];
    const next=points[Math.min(points.length-1,i+2)];
    const dx=p1.x-p0.x;
    const minY=Math.min(p0.y,p1.y),maxY=Math.max(p0.y,p1.y);
    const c1x=p0.x+dx*.34;
    const c2x=p1.x-dx*.34;
    const c1y=Math.max(minY,Math.min(maxY,p0.y+(p1.y-prev.y)*.16));
    const c2y=Math.max(minY,Math.min(maxY,p1.y-(next.y-p0.y)*.16));
    d+=` C${c1x} ${c1y},${c2x} ${c2y},${p1.x} ${p1.y}`;
  }
  return d;
}

function drawInsightsGrowthChart(snaps){
  const svg=els.insightsGrowthChart;
  const tooltip=els.insightsChartTooltip;
  const active=snaps.filter(s=>s.enabled!==false).sort((a,b)=>a.timestamp-b.timestamp);
  const selected=[...document.querySelectorAll("[data-chart-metric]:checked")].map(el=>el.dataset.chartMetric);

  hideChartTooltip(true);
  if(!active.length||!selected.length){svg.innerHTML="";return;}

  const metricMeta={
    followers:{label:t("followers"),className:"series-followers",color:"#7c3aed"},
    following:{label:t("following"),className:"series-following",color:"#0f766e"},
    follows:{label:t("follows"),className:"series-follows",color:"#16a34a"},
    unfollows:{label:t("unfollows"),className:"series-unfollows",color:"#dc2626"},
    reached:{label:t("accountsReached"),className:"series-reached",color:"#ea580c"},
    profileVisits:{label:t("profileVisits"),className:"series-profileVisits",color:"#2563eb"}
  };

  const mode=els.chartScaleMode.value;
  const mobile=window.matchMedia("(max-width: 620px)").matches;
  const w=mobile?520:1200,h=mobile?320:300;
  const pL=mobile?50:58,pR=mobile?18:24,pT=mobile?24:24,pB=mobile?48:44;
  svg.setAttribute("viewBox",`0 0 ${w} ${h}`);

  const series=selected.map(metric=>{
    const numeric=active.filter(s=>s[metric]!==null&&s[metric]!==undefined&&s[metric]!=="").map(s=>Number(s[metric])).filter(Number.isFinite);
    if(!numeric.length)return null;
    const base=numeric[0];
    const rows=active.map(s=>{
      const raw=s[metric]!==null&&s[metric]!==undefined&&s[metric]!==""?Number(s[metric]):null;
      if(!Number.isFinite(raw))return{s,raw:null,plot:null};
      const plot=mode==="indexed"?(base===0?null:(raw/base)*100):raw;
      return{s,raw,plot:Number.isFinite(plot)?plot:null};
    });
    return{metric,rows};
  }).filter(Boolean);

  const allValues=series.flatMap(ser=>ser.rows.map(r=>r.plot).filter(Number.isFinite));
  if(!allValues.length){svg.innerHTML="";return;}

  const min=Math.min(...allValues),max=Math.max(...allValues);
  const pad=Math.max(mode==="indexed"?2:1,(max-min)*.12);
  const lo=Math.max(0,min-pad),hi=max+pad,range=Math.max(1,hi-lo);
  const firstTs=Math.min(...active.map(s=>s.timestamp)),lastTs=Math.max(...active.map(s=>s.timestamp));
  const xFor=timestamp=>firstTs===lastTs?w/2:pL+(timestamp-firstTs)/(lastTs-firstTs)*(w-pL-pR);
  const yFor=value=>pT+(hi-value)/range*(h-pT-pB);
  const plotBottom=h-pB;

  const defs=selected.map(metric=>`<linearGradient id="area-${metric}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${metricMeta[metric].color}" stop-opacity=".16"/><stop offset="100%" stop-color="${metricMeta[metric].color}" stop-opacity="0"/></linearGradient>`).join("");
  const grids=[0,.25,.5,.75,1].map(r=>{
    const y=pT+r*(h-pT-pB),val=hi-r*(hi-lo),label=mode==="indexed"?val.toFixed(0):Math.round(val).toLocaleString();
    return`<line class="chart-gridline" x1="${pL}" y1="${y}" x2="${w-pR}" y2="${y}"/><text class="chart-axis" x="4" y="${y+4}">${label}</text>`;
  }).join("");
  const labels=active.map(s=>`<text class="chart-axis chart-date-label" x="${xFor(s.timestamp)}" y="${h-14}" text-anchor="middle">${escapeHtml(shortDate(s.timestamp))}</text>`).join("");

  let pointIndex=0;
  const paths=series.map(ser=>{
    const segments=[];let current=[];
    for(const row of ser.rows){
      if(row.plot==null){if(current.length)segments.push(current);current=[];continue;}
      current.push({x:xFor(row.s.timestamp),y:yFor(row.plot),snapshot:row.s,rawValue:row.raw,plotValue:row.plot,metric:ser.metric,key:`cp-${pointIndex++}`});
    }
    if(current.length)segments.push(current);

    const area=selected.length===1?segments.filter(seg=>seg.length>1).map(seg=>{
      const line=smoothChartPath(seg);
      const first=seg[0],last=seg.at(-1);
      return`<path class="chart-area ${metricMeta[ser.metric].className}" d="${line} L${last.x} ${plotBottom} L${first.x} ${plotBottom} Z" fill="url(#area-${ser.metric})"/>`;
    }).join(""):"";

    const lines=segments.map(seg=>`<path class="chart-line ${metricMeta[ser.metric].className}" d="${smoothChartPath(seg)}"/>`).join("");
    const dots=segments.flat().map(q=>`<circle class="chart-point ${metricMeta[ser.metric].className}" data-chart-point="${q.key}" cx="${q.x}" cy="${q.y}" r="3.4"/><circle class="chart-hit" cx="${q.x}" cy="${q.y}" r="15" tabindex="0" data-chart-key="${q.key}" data-chart-series="${ser.metric}" data-chart-date="${escapeAttribute(shortDate(q.snapshot.timestamp))}" data-chart-raw="${q.rawValue}" data-chart-plot="${q.plotValue}"/>`).join("");
    return area+lines+dots;
  }).join("");

  svg.innerHTML=`<defs>${defs}</defs>${grids}<line class="chart-hover-guide" x1="0" y1="${pT}" x2="0" y2="${plotBottom}"/>${labels}${paths}`;
  const guide=svg.querySelector(".chart-hover-guide");
  let pinnedKey=null;

  const clearActive=()=>{
    svg.querySelectorAll(".chart-point.active").forEach(p=>p.classList.remove("active"));
    if(guide)guide.classList.remove("visible");
  };

  const show=(hit,{pin=false}={})=>{
    const metric=hit.dataset.chartSeries,raw=Number(hit.dataset.chartRaw),plot=Number(hit.dataset.chartPlot),label=metricMeta[metric]?.label||metric;
    const value=mode==="indexed"?`${plot.toFixed(1)} · ${raw.toLocaleString()}`:raw.toLocaleString();
    tooltip.innerHTML=`<strong>${escapeHtml(label)}</strong><span>${escapeHtml(hit.dataset.chartDate)}</span><b>${escapeHtml(value)}</b>`;
    tooltip.classList.add("visible");tooltip.classList.remove("below");

    clearActive();
    svg.querySelector(`[data-chart-point="${CSS.escape(hit.dataset.chartKey)}"]`)?.classList.add("active");
    const cx=Number(hit.getAttribute("cx")),cy=Number(hit.getAttribute("cy"));
    if(guide){guide.setAttribute("x1",cx);guide.setAttribute("x2",cx);guide.classList.add("visible");}

    const cardRect=els.insightsChartCard.getBoundingClientRect(),svgRect=svg.getBoundingClientRect();
    const pointLeft=(cx/w)*svgRect.width+(svgRect.left-cardRect.left),pointTop=(cy/h)*svgRect.height+(svgRect.top-cardRect.top);
    const tw=tooltip.offsetWidth||120,th=tooltip.offsetHeight||64;
    const left=Math.max(8+tw/2,Math.min(cardRect.width-8-tw/2,pointLeft));
    const enoughAbove=pointTop-th-14>=8;
    const top=enoughAbove?pointTop-th-12:Math.min(cardRect.height-th-8,pointTop+12);
    tooltip.style.left=`${left}px`;tooltip.style.top=`${Math.max(8,top)}px`;
    tooltip.classList.toggle("below",!enoughAbove);
    if(pin)pinnedKey=hit.dataset.chartKey;
  };

  svg.querySelectorAll(".chart-hit").forEach(hit=>{
    hit.addEventListener("pointerenter",event=>{if(event.pointerType!=="touch"&&!pinnedKey)show(hit)});
    hit.addEventListener("pointerleave",event=>{if(event.pointerType!=="touch"&&!pinnedKey)hideChartTooltip()});
    hit.addEventListener("focus",()=>{if(!pinnedKey)show(hit)});
    hit.addEventListener("blur",()=>{if(!pinnedKey)hideChartTooltip()});
    hit.addEventListener("click",event=>{event.stopPropagation();pinnedKey=hit.dataset.chartKey;show(hit,{pin:true})});
  });

  els.insightsChartCard.onclick=event=>{
    if(event.target.closest?.(".chart-hit"))return;
    pinnedKey=null;hideChartTooltip(true);
  };
}

function hideChartTooltip(force=false){
  if(!els.insightsChartTooltip)return;
  els.insightsChartTooltip.classList.remove("visible","below");
  if(force||!els.insightsChartTooltip.classList.contains("visible")){
    els.insightsGrowthChart?.querySelectorAll(".chart-point.active").forEach(p=>p.classList.remove("active"));
    els.insightsGrowthChart?.querySelector(".chart-hover-guide")?.classList.remove("visible");
  }
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
      heartRecords:state.heartRecords,
      insightSnapshots:state.insightSnapshots,
      identityFbids:Object.fromEntries(state.identityFbids)
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
    if(payload.data.heartRecords&&typeof payload.data.heartRecords==="object"&&!Array.isArray(payload.data.heartRecords)){
      state.heartRecords=mergeHeartRecords(state.heartRecords,payload.data.heartRecords);
    }else if(Array.isArray(payload.data.hearts)){
      const importedLegacy={};
      for(const username of payload.data.hearts){
        const key=normalizeHeartUsername(username);
        if(key)importedLegacy[key]={hearted:true,updatedAt:0};
      }
      state.heartRecords=mergeHeartRecords(state.heartRecords,importedLegacy);
    }
    rebuildHeartSet();
    persistHeartRecords();
    state.insightSnapshots=(Array.isArray(payload.data.insightSnapshots)?payload.data.insightSnapshots:[]).map(s=>({...s,enabled:s.enabled!==false}));
    persistInsightSnapshots();
    renderAll();
    if(heartSyncKey())syncHearts({silent:true});
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
  els.cohortHint.textContent=(state.currentLoaded||effectiveFullCheckpoint())?t("cohortNeedHistory"):t("loadPrompt");
  renderFollowingCohorts();
}
function followingSnapshotTimestamp(snapshot){
  if(!snapshot?.date)return null;
  const ms=Date.parse(`${snapshot.date}T12:00:00Z`);
  return Number.isFinite(ms)?Math.floor(ms/1000):null;
}

function computeFollowingCohortAnalysis(){
  const snaps=state.dailyFollowingSnapshots;
  if(snaps.length<2)return{events:[],tracked:0,still:0,left:0,retention:null,horizons:[],byDay:[]};

  const activities=computeFollowingActivity();
  const presence=snaps.map(snapshot=>canonicalKeySet(snapshot.following));
  const events=[];

  for(const day of activities){
    const startIndex=snaps.findIndex(s=>s.date===day.date);
    if(startIndex<0)continue;

    for(const row of day.followed){
      const canonical=canonicalKey(row.username.toLowerCase());
      let firstAbsent=null;
      for(let i=startIndex+1;i<snaps.length;i++){
        if(!presence[i].has(canonical)){
          firstAbsent=snaps[i];
          break;
        }
      }

      events.push({
        ...row,
        canonical,
        cohortDate:day.date,
        startIndex,
        firstAbsent,
        stillFollowing:!firstAbsent,
        _refollow:row._refollow===true
      });
    }
  }

  const latest=snaps.at(-1),latestTs=followingSnapshotTimestamp(latest);
  const horizons=[1,2,3,7].map(days=>{
    let eligible=0,retained=0;
    for(const event of events){
      const followedAt=Number.isFinite(Number(event.timestamp))?Number(event.timestamp):followingSnapshotTimestamp(snaps[event.startIndex]);
      if(!followedAt||!latestTs||latestTs<followedAt+days*86400)continue;
      eligible++;
      const absentTs=followingSnapshotTimestamp(event.firstAbsent);
      if(!absentTs||absentTs>followedAt+days*86400)retained++;
    }
    return{days,eligible,retained,rate:eligible?retained/eligible*100:null};
  });

  const byDay=activities.map(day=>{
    const dayEvents=events.filter(event=>event.cohortDate===day.date);
    const still=dayEvents.filter(event=>event.stillFollowing).length;
    return{date:day.date,events:dayEvents,still,left:dayEvents.length-still,retention:dayEvents.length?still/dayEvents.length*100:null};
  }).filter(day=>day.events.length);

  const still=events.filter(event=>event.stillFollowing).length;
  return{
    events,
    tracked:events.length,
    still,
    left:events.length-still,
    retention:events.length?still/events.length*100:null,
    horizons,
    byDay
  };
}

function renderFollowingCohorts(){
  if(!els.followingCohortTracked)return;
  const res=computeFollowingCohortAnalysis();
  els.followingCohortTracked.textContent=res.tracked.toLocaleString();
  els.followingCohortStill.textContent=res.still.toLocaleString();
  els.followingCohortLeft.textContent=res.left.toLocaleString();
  els.followingCohortRetention.textContent=res.retention==null?"—":`${res.retention.toFixed(1)}%`;

  const horizonLabels={1:t("followingRetention1"),2:t("followingRetention2"),3:t("followingRetention3"),7:t("followingRetention7")};
  els.followingRetentionGrid.innerHTML=res.horizons.map(h=>`<article class="cohort-card following-retention-card"><strong>${h.rate==null?"—":`${h.rate.toFixed(1)}%`}</strong><span>${escapeHtml(horizonLabels[h.days])}</span><small>${h.eligible.toLocaleString()} ${escapeHtml(t("eligible"))}</small></article>`).join("");

  els.followingCohortDays.innerHTML=[...res.byDay].reverse().map(day=>{
    const accounts=day.events.map(event=>`<a class="following-cohort-account" href="${escapeAttribute(event.href)}" target="ifa-instagram-review" referrerpolicy="no-referrer"><span>@${escapeHtml(event.username)}</span><small>${escapeHtml(event.stillFollowing?t("statusStillFollowing"):t("statusUnfollowedLater"))}${event._refollow?` · ${escapeHtml(t("activityRefollow"))}`:""}</small></a>`).join("");
    return`<details class="following-cohort-day"><summary><strong>${escapeHtml(day.date)}</strong><span>${day.events.length} ${escapeHtml(t("activityFollowed"))}</span><span>${day.still} ${escapeHtml(t("followingCohortStill"))}</span><b>${day.retention==null?"—":`${day.retention.toFixed(1)}%`}</b></summary><div class="following-cohort-account-list">${accounts}</div></details>`;
  }).join("");

  els.followingCohortEmpty.style.display=res.tracked?"none":"flex";
}

function computeCohortsFromCurrent(){
  const cohortData=state.currentLoaded?state.current:(effectiveFullCheckpoint()?.dataset||null);
  if(!cohortData)return{tracked:0,converted:0,rate:0,median:null,day1:0,day2:0,day3:0,days4to7:0,threshold:null};
  const conversions=[];
  let tracked=0;
  const cohortFollowers=canonicalRows(cohortData.followers);

  for(const [key,followingRow] of cohortData.following){
    if(!followingRow.timestamp||isRenamedIdentity(key))continue;
    const followerRow=cohortFollowers.get(canonicalKey(key));

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
initializeHeartSync();
