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
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Useful account performance",followsPeriod:"Follows",unfollowsPeriod:"Unfollows",netFollowerChange:"Net follower change",accountsReached:"Accounts reached",profileVisits:"Profile visits",externalLinkTaps:"External link taps",contentInteractions:"Content interactions",discovery:"DISCOVERY",nonFollowerReach:"Reach from non-followers",nonFollowerEngagement:"Engagement from non-followers",relationshipHistory:"RELATIONSHIP HISTORY",snapshotsSavedAutomatically:"snapshots saved automatically for cohorts",noInsights:"No Instagram Insights found.",noInsightsCopy:"Use a full Instagram export that includes Past Instagram Insights.",openNext:"Open next",allOpened:"All opened",left:"left",
    cohortAnalysis:"FOLLOW COHORT ANALYSIS",cohortTitle:"How fast do new follows convert?",followBackRate:"Follow-back rate",medianTime:"Median follow-back time",followedInCohorts:"Tracked follows",suggestedThreshold:"Suggested threshold",
    within1:"Within 1 day",within2:"Within 2 days",within3:"Within 3 days",within7:"Within 7 days",cohortNeedHistory:"Load exports from at least two different dates to build cohort analysis.",days:"days",
    cleanupCandidates:"CLEANUP CANDIDATES",cleanupTitle:"Prioritized accounts to review",cleanupNote:"The score currently uses only relationship data available from followers/following exports. Hearted profiles are excluded.",
    olderThan:"Following older than",noCleanup:"No cleanup candidates.",noCleanupCopy:"Try a lower age threshold or load a current export.",notFollowingReason:"Not following you",oldFollowReason:"Long-term follow",score:"Score"
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
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Nützliche Account-Performance",followsPeriod:"Neue Follows",unfollowsPeriod:"Unfollows",netFollowerChange:"Netto-Followeränderung",accountsReached:"Erreichte Konten",profileVisits:"Profilbesuche",externalLinkTaps:"Externe Link-Klicks",contentInteractions:"Content-Interaktionen",discovery:"ENTDECKUNG",nonFollowerReach:"Reichweite durch Nicht-Follower",nonFollowerEngagement:"Engagement durch Nicht-Follower",relationshipHistory:"BEZIEHUNGSVERLAUF",snapshotsSavedAutomatically:"Snapshots werden automatisch für Kohorten gespeichert",noInsights:"Keine Instagram Insights gefunden.",noInsightsCopy:"Verwende einen vollständigen Instagram-Export mit Past Instagram Insights.",openNext:"Nächstes öffnen",allOpened:"Alle geöffnet",left:"übrig",
    cohortAnalysis:"FOLLOW-KOHORTENANALYSE",cohortTitle:"Wie schnell konvertieren neue Follows?",followBackRate:"Follow-back-Rate",medianTime:"Median Follow-back-Zeit",followedInCohorts:"Beobachtete Follows",suggestedThreshold:"Empfohlene Schwelle",
    within1:"Innerhalb 1 Tag",within2:"Innerhalb 2 Tagen",within3:"Innerhalb 3 Tagen",within7:"Innerhalb 7 Tagen",cohortNeedHistory:"Lade Exporte von mindestens zwei verschiedenen Tagen für die Kohortenanalyse.",days:"Tage",
    cleanupCandidates:"BEREINIGUNGSKANDIDATEN",cleanupTitle:"Priorisierte Accounts zur Prüfung",cleanupNote:"Der Score nutzt derzeit nur Beziehungsdaten aus Followers/Following-Exporten. Markierte Profile werden ausgeschlossen.",
    olderThan:"Gefolgt seit mehr als",noCleanup:"Keine Bereinigungskandidaten.",noCleanupCopy:"Wähle eine niedrigere Altersgrenze oder lade einen aktuellen Export.",notFollowingReason:"Folgt dir nicht",oldFollowReason:"Langfristig gefolgt",score:"Score"
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
    instagramInsights:"INSTAGRAM INSIGHTS",insightsTitle:"Hasznos fiókteljesítmény",followsPeriod:"Új követések",unfollowsPeriod:"Kikövetések",netFollowerChange:"Nettó követőváltozás",accountsReached:"Elért fiókok",profileVisits:"Profilmegtekintések",externalLinkTaps:"Külső linkkattintások",contentInteractions:"Tartalominterakciók",discovery:"FELFEDEZÉS",nonFollowerReach:"Nem követőktől érkező reach",nonFollowerEngagement:"Nem követőktől érkező engagement",relationshipHistory:"KAPCSOLATI ELŐZMÉNYEK",snapshotsSavedAutomatically:"automatikusan mentett snapshot a cohortokhoz",noInsights:"Nem találtam Instagram Insights adatot.",noInsightsCopy:"Használj teljes Instagram exportot, amely tartalmazza a Past Instagram Insights fájlokat.",openNext:"Open next",allOpened:"Mind megnyitva",left:"hátra",
    cohortAnalysis:"FOLLOW COHORT ANALÍZIS",cohortTitle:"Milyen gyorsan követnek vissza az új követések?",followBackRate:"Visszakövetési arány",medianTime:"Medián visszakövetési idő",followedInCohorts:"Követett profilok",suggestedThreshold:"Javasolt határ",
    within1:"1 napon belül",within2:"2 napon belül",within3:"3 napon belül",within7:"7 napon belül",cohortNeedHistory:"A cohort analízishez legalább két különböző napról származó export szükséges.",days:"nap",
    cleanupCandidates:"KIKÖVETÉSI JELÖLTEK",cleanupTitle:"Prioritás szerint rendezett profilok",cleanupNote:"A pontszám jelenleg csak a followers/following exportokból elérhető kapcsolati adatokat használja. A szívezett profilokat kizárjuk.",
    olderThan:"Ennél régebb óta követem",noCleanup:"Nincs kikövetési jelölt.",noCleanupCopy:"Állíts alacsonyabb időhatárt vagy tölts be aktuális exportot.",notFollowingReason:"Nem követ vissza",oldFollowReason:"Régi követés",score:"Pontszám"
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
  snapshots: JSON.parse(localStorage.getItem("ifa-snapshots") || "[]")
};

function emptyDataset(){return{followers:new Map(),following:new Map(),notFollowingBack:new Map()}}

const els = Object.fromEntries([
  "languageSelect","currentFiles","referenceFiles","currentDropzone","referenceDropzone","currentStatus","referenceStatus","clearCurrentBtn","clearReferenceBtn",
  "searchInput","referenceMode","sortSelect","exportCsvBtn","summaryLine","userList","emptyState","metricFollowers","metricFollowing","metricMutuals","metricNfb",
  "newFollowersCount","lostFollowersCount","newFollowingCount","unfollowedByYouCount","heartedCount","followersCount","followingCount","notFollowingBackCount",
  "clearSnapshotsBtn","insightsPeriod","insightFollowers","insightFollows","insightUnfollows","insightNet","insightReach","insightVisits","insightLinks","insightInteractions","insightNonFollowerReach","insightNonFollowerEngagement","historySnapshotCount","insightEmpty","openNextWrap","openNextBtn","openNextRemaining","cohortRate","cohortMedian","cohortTracked","cohortThreshold","cohortGrid","cohortHint",
  "cleanupAge","cleanupList","cleanupEmpty"
].map(id=>[id,document.querySelector("#"+id)]));

const navItems=[...document.querySelectorAll(".nav-item")];
const tabs=[...document.querySelectorAll(".tab")];
const panels={
  overview:document.querySelector("#overviewSection"),
  followers:document.querySelector("#listSection"),
  following:document.querySelector("#listSection"),
  notFollowingBack:document.querySelector("#listSection"),
  insights:document.querySelector("#insightsSection"),
  cohorts:document.querySelector("#cohortSection"),
  cleanup:document.querySelector("#cleanupSection")
};

function t(key,vars={}){let s=translations[state.lang]?.[key]??translations.en[key]??key;for(const[k,v]of Object.entries(vars))s=s.replaceAll(`{${k}}`,String(v));return s}

function applyLanguage(){
  document.documentElement.lang=state.lang; els.languageSelect.value=state.lang;
  document.querySelectorAll("[data-i18n]").forEach(n=>{const k=n.dataset.i18n;if(translations[state.lang]?.[k])n.textContent=t(k)});
  els.searchInput.placeholder=t("searchPlaceholder");
  updateStatuses(); renderAll(); updateOpenNext();
}
els.languageSelect.addEventListener("change",()=>{state.lang=els.languageSelect.value;localStorage.setItem("ifa-language",state.lang);applyLanguage()});

setupFileInput(els.currentFiles,els.currentDropzone,"current");
setupFileInput(els.referenceFiles,els.referenceDropzone,"reference");

navItems.forEach(btn=>btn.addEventListener("click",()=>switchSection(btn.dataset.section)));
tabs.forEach(tab=>tab.addEventListener("click",()=>{state.view=tab.dataset.view;tabs.forEach(x=>x.classList.toggle("active",x===tab));renderList()}));
els.searchInput.addEventListener("input",renderList); els.referenceMode.addEventListener("change",renderList); els.sortSelect.addEventListener("change",renderList); els.exportCsvBtn.addEventListener("click",exportVisibleCsv);
els.clearCurrentBtn.addEventListener("click",()=>clearDataset("current")); els.clearReferenceBtn.addEventListener("click",()=>clearDataset("reference"));
els.clearSnapshotsBtn.addEventListener("click",()=>{state.snapshots=[];persistSnapshots();renderInsights();renderCohorts()});
els.openNextBtn.addEventListener("click",openNextProfile);
els.cleanupAge.addEventListener("change",renderCleanup);

function switchSection(section){
  state.section=section;
  navItems.forEach(x=>x.classList.toggle("active",x.dataset.section===section));
  Object.values(panels).forEach(p=>p.classList.remove("active-panel"));
  panels[section].classList.add("active-panel");
  if(["followers","following","notFollowingBack"].includes(section)){
    state.view=section; tabs.forEach(x=>x.classList.toggle("active",x.dataset.view===section)); renderList();
  } else if(section==="insights") renderInsights(); else if(section==="cohorts") renderCohorts(); else if(section==="cleanup") renderCleanup(); else renderOverview();
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
      saveSnapshotAutomatically();
    }
    updateStatuses();renderAll();
  }catch(err){console.error(err);status.textContent=`Error: ${err.message}`}
}

function updateStatuses(){
  for(const target of ["current","reference"]){
    const el=target==="current"?els.currentStatus:els.referenceStatus;
    if(state[`${target}Loaded`]){
      const ds=state[target];el.textContent=t("loadedFiles",{files:state[`${target}SourceCount`],followers:ds.followers.size,following:ds.following.size,notFollowing:ds.notFollowingBack.size});
    }else el.textContent=t(target==="current"?"nothingLoaded":"noReference");
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

function renderAll(){renderOverview();renderList();renderInsights();renderCohorts();renderCleanup();updateOpenNext()}
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
  const isList=["followers","following","notFollowingBack"].includes(state.section)&&state.currentLoaded;
  els.openNextWrap.classList.toggle("visible",isList);if(!isList)return;
  const rows=currentVisibleRows(),remaining=rows.filter(r=>!state.reviewed.has(r.username.toLowerCase()));
  els.openNextBtn.disabled=!remaining.length;els.openNextBtn.querySelector("[data-i18n=openNext]").textContent=remaining.length?t("openNext"):t("allOpened");els.openNextRemaining.textContent=remaining.length?`${remaining.length} ${t("left")}`:"";
}
function openNextProfile(){const next=currentVisibleRows().find(r=>!state.reviewed.has(r.username.toLowerCase()));if(!next)return;const key=next.username.toLowerCase();state.reviewed.add(key);sessionStorage.setItem("ifa-reviewed",JSON.stringify([...state.reviewed]));window.open(next.href,"_blank","noopener");renderList()}
function formatMeta(ts){if(!ts)return t("dateUnavailable");const d=new Date(ts*1000);if(Number.isNaN(d.getTime()))return t("dateUnavailable");const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB",fmt=new Intl.DateTimeFormat(locale,{year:"numeric",month:"2-digit",day:"2-digit"}).format(d);return state.view==="followers"?t("followsSince",{date:fmt}):t("followingSince",{date:fmt})}

function serializeMap(map){return[...map.values()].map(x=>({username:x.username.toLowerCase(),timestamp:x.timestamp??null}))}
function persistSnapshots(){localStorage.setItem("ifa-snapshots",JSON.stringify(state.snapshots))}
function countMutuals(ds){let n=0;for(const k of ds.following.keys())if(ds.followers.has(k))n++;return n}
function inferSnapshotTimestamp(files,insights){
  for(const f of files){const m=f.name.match(/(20\d{2})-(\d{2})-(\d{2})/);if(m){const d=new Date(`${m[1]}-${m[2]}-${m[3]}T12:00:00`);if(!Number.isNaN(d.getTime()))return Math.floor(d.getTime()/1000)}}
  return Math.floor(Date.now()/1000);
}
function stateHash(ds){const raw=[...ds.followers.keys()].sort().join("|")+"::"+[...ds.following.keys()].sort().join("|");let h=2166136261;for(let i=0;i<raw.length;i++){h^=raw.charCodeAt(i);h=Math.imul(h,16777619)}return(h>>>0).toString(16)}
function saveSnapshotAutomatically(){
  if(!state.currentLoaded&&state.current.followers.size===0&&state.current.following.size===0)return;
  const ts=state.currentSnapshotTimestamp||Math.floor(Date.now()/1000),day=new Date(ts*1000).toISOString().slice(0,10),hash=stateHash(state.current);
  const snapshot={id:day+":"+hash,timestamp:ts,hash,followers:serializeMap(state.current.followers),following:serializeMap(state.current.following),counts:{followers:state.current.followers.size,following:state.current.following.size,mutuals:countMutuals(state.current),notFollowingBack:state.current.notFollowingBack.size}};
  const existing=state.snapshots.findIndex(s=>s.id===snapshot.id);
  if(existing>=0)state.snapshots[existing]=snapshot;else state.snapshots.push(snapshot);
  state.snapshots.sort((a,b)=>a.timestamp-b.timestamp);persistSnapshots();
}
function fmtMetric(v,suffix=""){return v==null?"—":`${Number(v).toLocaleString()}${suffix}`}
function renderInsights(){
  const x=state.insights;els.historySnapshotCount.textContent=state.snapshots.length;
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
}

function renderCohorts(){
  const res=computeCohorts(state.snapshots);els.cohortRate.textContent=res.rate.toFixed(1)+"%";els.cohortMedian.textContent=res.median==null?"—":res.median.toFixed(1)+" "+t("days");els.cohortTracked.textContent=res.tracked;els.cohortThreshold.textContent=res.threshold?res.threshold+" "+t("days"):"—";
  els.cohortGrid.innerHTML=[
    [t("within1"),res.within1],[t("within2"),res.within2],[t("within3"),res.within3],[t("within7"),res.within7]
  ].map(([label,val])=>`<article class="cohort-card"><strong>${val}</strong><span>${label}</span></article>`).join("");
  els.cohortHint.textContent=state.snapshots.length<2?t("cohortNeedHistory"):"";
}
function computeCohorts(snaps){
  if(snaps.length<2)return{tracked:0,converted:0,rate:0,median:null,within1:0,within2:0,within3:0,within7:0,threshold:null};
  const conversions=[],tracked=new Map();
  for(let i=1;i<snaps.length;i++){
    const prev=snaps[i-1],cur=snaps[i],prevFollowing=new Set(prev.following.map(x=>x.username)),curFollowing=new Set(cur.following.map(x=>x.username));
    for(const u of curFollowing)if(!prevFollowing.has(u)&&!tracked.has(u))tracked.set(u,{start:cur.timestamp,converted:null});
    const curFollowers=new Set(cur.followers.map(x=>x.username));
    for(const [u,obj] of tracked)if(obj.converted==null&&curFollowers.has(u)){obj.converted=cur.timestamp;const days=(obj.converted-obj.start)/86400;if(days>=0)conversions.push(days)}
  }
  const trackedCount=tracked.size,converted=conversions.length,sorted=[...conversions].sort((a,b)=>a-b);let median=null;if(sorted.length)median=sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;
  const count=d=>conversions.filter(x=>x<=d).length,rate=trackedCount?converted/trackedCount*100:0;
  let threshold=null;if(converted){for(const d of [1,2,3,4,5,7]){if(count(d)/converted>=.87){threshold=d;break}}}
  return{tracked:trackedCount,converted,rate,median,within1:count(1),within2:count(2),within3:count(3),within7:count(7),threshold};
}

function renderCleanup(){
  if(!state.currentLoaded){els.cleanupList.innerHTML="";els.cleanupEmpty.style.display="flex";return}
  const age=Number(els.cleanupAge.value),now=Date.now()/1000,rows=[];
  for(const [key,row] of state.current.following){
    if(state.hearts.has(key))continue;
    const notBack=!state.current.followers.has(key),days=row.timestamp?Math.max(0,(now-row.timestamp)/86400):null;
    let score=0,reasons=[];if(notBack){score+=50;reasons.push(t("notFollowingReason"))}
    if(days!=null&&days>=age){score+=15;if(days>=365)score+=10;reasons.push(t("oldFollowReason"))}
    if(score>0)rows.push({...row,score,reasons,days});
  }
  rows.sort((a,b)=>b.score-a.score||(b.days??0)-(a.days??0));
  els.cleanupList.innerHTML=rows.map(r=>`<div class="user-row">
    <div class="avatar">${escapeHtml(r.username.charAt(0).toUpperCase())}</div>
    <div><a class="username" href="${escapeAttribute(r.href)}" target="_blank" rel="noopener noreferrer">@${escapeHtml(r.username)}</a><div class="cleanup-reasons">${escapeHtml(r.reasons.join(" · "))}</div></div>
    <div class="meta">${r.days==null?t("dateUnavailable"):Math.floor(r.days)+" "+t("days")}</div>
    <div class="score-badge">${r.score}</div>
  </div>`).join("");
  els.cleanupEmpty.style.display=rows.length?"none":"flex";
}

function exportVisibleCsv(){const rows=currentVisibleRows();if(!rows.length)return;const lines=[["username","instagram_url","timestamp","date"],...rows.map(r=>[r.username,r.href,r.timestamp??"",r.timestamp?new Date(r.timestamp*1000).toISOString():""])];const csv=lines.map(line=>line.map(csvCell).join(",")).join("\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`instagram-${state.view}-${new Date().toISOString().slice(0,10)}.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}
function csvCell(v){const s=String(v??"");return`"${s.replaceAll('"','""')}"`}
function fmtDate(ts){const locale=state.lang==="de"?"de-DE":state.lang==="hu"?"hu-HU":"en-GB";return new Intl.DateTimeFormat(locale,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(ts*1000))}
function escapeHtml(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function escapeAttribute(v){return escapeHtml(v)}

applyLanguage();
switchSection("overview");
