# Instagram Followers Analyzer

Egy privacy-first, böngészőben futó Instagram kapcsolat- és Insights-elemző.

Aktuális verzió: **v0.24**

Az alkalmazás célja, hogy az Instagram exportokat helyben, a böngészőben dolgozza fel, elemezze a követői kapcsolatokat, időben kövesse az Insights adatokat, és opcionálisan egy nyilvános Google Drive archívumból automatikusan szinkronizálja az exportokat.

Instagram-bejelentkezés nem szükséges.

---

## Funkciók

### Instagram kapcsolat-elemzés

Az analyzer támogatja az Instagram relationship exportokat, és az alábbiakat mutatja:

- Followers
- Following
- Not Following Back
- keresés
- rendezés
- kattintható Instagram profil linkek
- CSV export
- tartós Keep / Heart jelölések
- munkamenet-alapú reviewed állapot
- Open Next workflow gyors profil-ellenőrzéshez

Az app közvetlenül képes beolvasni az eredeti Instagram ZIP exportot vagy az egyedi JSON fájlokat.

Felismert relationship fájlok:

- `followers_*.json`
- `following.json`

---

## Current és Reference adathalmazok

Az alkalmazás két relationship adathalmazt használ:

### Current

Az aktuális Instagram kapcsolatállapot.

Google Drive szinkron esetén a **Current mindig a legújabb teljes, dátumozott export**, amely tartalmazza:

- `following.json`
- legalább egy `followers_*.json` fájlt

### Reference

A Reference összehasonlítási alapként szolgál.

Google Drive szinkron esetén a Reference **kizárólag** egy ilyen nevű mappából töltődik be:

```text
Reference
```

A mappanév kis- és nagybetűtől függetlenül kerül felismerésre.

Egy érvényes Reference mappának tartalmaznia kell:

- `following.json`
- legalább egy `followers_*.json` fájlt

A második legfrissebb dátumozott export **soha nem lesz automatikusan Reference**.

Ha nincs érvényes Reference mappa, a Reference üres marad.

---

## Relationship összehasonlítás

Ha Current és Reference is rendelkezésre áll, az Overview kiszámítja:

- új követők
- elvesztett követők
- új követések
- általad kikövetett fiókok

A Reference szűrés a Followers workflow-ban is elérhető.

Elérhető módok:

- minden megjelenítése
- Reference-ben szereplő fiókok elrejtése
- csak Reference-ben szereplő fiókok megjelenítése

---

## Keep / Heart rendszer

A fiókok tartós Heart / Keep jelölést kaphatnak.

Ez teljesen független a Reference rendszertől.

Tipikus használat:

- olyan fiókok védelme, akiket nem akarsz kikövetni
- fontos profilok kézi megjelölése
- saját keep-list fenntartása

A Heart adatok helyben, a böngészőben tárolódnak.

---

## Review workflow

Az alkalmazás egyszerű profil-ellenőrzési workflow-t is tartalmaz.

Minden fióknak lehet munkamenet-alapú reviewed állapota.

Az **Open Next** gomb:

1. megkeresi a következő látható, még nem ellenőrzött fiókot
2. reviewed állapotúra jelöli
3. megnyitja az Instagram profilját

A reviewed állapot session storage-ban van tárolva, ezért szándékosan csak az adott munkamenethez tartozik.

---

# Insights

Az Instagram Insights exportok a relationship adatokkal együtt tölthetők be és elemezhetők.

Jelenleg támogatott account-level metrikák:

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

A ténylegesen elérhető értékek az Instagram export tartalmától függnek.

---

## Insights snapshotok

Az Insights adatok dátumozott snapshotokként menthetők.

A snapshotok az elérhető Insights metrikákat és az aktuális Following értéket tartalmazzák.

A snapshotok helyben, a böngészőben tárolódnak.

Ha ugyanarra a dátumra már létezik snapshot, az új rekord nem duplikálódik, hanem frissíti a meglévőt.

A snapshotok külön-külön:

- aktiválhatók
- inaktiválhatók
- törölhetők

Az inaktív snapshotok megmaradnak, de nem jelennek meg a grafikonon.

---

## Automatikus snapshot Drive Sync esetén

Egy normál **Sync Drive** művelet:

1. megkeresi a legújabb teljes, dátumozott exportot
2. betölti Currentként
3. a Reference-et csak a speciális `Reference` mappából tölti be
4. betölti a legfrissebb elérhető Insights adatokat
5. létrehozza vagy frissíti az adott exportdátumhoz tartozó snapshotot

Normál sync során csak a legújabb export kerül feldolgozásra a snapshot history számára.

---

## Scan Drive History

Az Insights oldalon elérhető:

**Scan Drive history**

Ez külön kérésre végigvizsgálja a teljes Drive archívumot.

A funkció:

- végigolvassa az összes dátumozott exportot
- kihagyja a speciális Reference mappát
- megkeresi a történeti Insights adatokat
- létrehozza a hiányzó snapshotokat
- az azonos dátumú meglévő snapshotokat frissíti
- ha elérhető, az adott export `following.json` fájljából veszi a történeti Following értéket

Így a korábbi Drive archívumból visszamenőleg teljes trendgrafikon építhető.

A history scan nem módosítja a Current vagy Reference adatokat.

---

# Insights grafikon

Az Insights grafikon több adatsort kezelő idővonal.

Elérhető sorozatok:

- Followers
- Following
- Follows
- Unfollows
- Accounts reached
- Profile visits

Minden metrika jól elkülönülő színt használ.

Grafikon funkciók:

- külön snapshot pontok
- pontokat összekötő trendvonalak
- hover értékek desktopon
- tap értékek mobilon
- reszponzív mobil layout
- választható metrikák
- Raw values mód
- Indexed mód

### Indexed mód

Az Indexed mód minden kiválasztott sorozat első értékét `100`-ra normalizálja.

Így nagyon eltérő nagyságrendű metrikák is könnyen összehasonlíthatók relatív változás alapján.

Például:

```text
Followers         5,000
Accounts reached 20,000
Profile visits      800
```

A tooltip továbbra is mutatja a tényleges értéket.

---

# Cohorts

A follow-back cohortok az aktuális Instagram export relationship timestampjeiből számolódnak.

Azoknál a kölcsönös kapcsolatoknál, ahol először te követted be a másik fiókot, az analyzer ezt számolja:

```text
follow-back delay =
follower timestamp - following timestamp
```

A cohort bucketek egymást kizárják:

- 1. nap
- 2. nap
- 3. nap
- 4–7. nap

Az analyzer ezen kívül kiszámítja:

- follow-back rate
- medián follow-back idő
- javasolt review küszöb

A jelenleg is létező kölcsönös kapcsolatoknál ehhez nincs szükség történeti relationship snapshotokra, mert a timestamp adatok már tartalmazzák a szükséges információt.

---

# Google Drive Sync

Az analyzer egy **nyilvános Google Drive mappát** is képes Instagram export archívumként használni.

Nem szükséges:

- Google login
- Google Drive API key
- Google Cloud billing account
- OAuth token

---

## Public Drive architektúra

```text
Nyilvános Google Drive mappa
        ↓
Cloudflare Worker
        ↓
Instagram Followers Analyzer
```

Egy kisméretű Cloudflare Worker működik read-only bridge-ként.

Erre azért van szükség, mert egy GitHub Pages-en futó böngészős alkalmazás a CORS korlátozások miatt nem tudja közvetlenül beolvasni a Google Drive publikus folder HTML-jét.

A szükséges fájl:

```text
cloudflare-worker.js
```

---

## Cloudflare Worker adatvédelem

A Worker:

- nem rendelkezik Google account credentiallel
- nem használ Google API key-t
- nem rendelkezik Instagram credentiallel
- nem használ OAuth tokent
- nem tárol Instagram adatokat
- csak olyan fájlokat tud lekérni, amelyek Google Drive-on eleve nyilvánosan elérhetők
- hozzáadja a böngésző működéséhez szükséges CORS headereket

---

## Cloudflare Worker beállítás

Hozz létre egy Cloudflare Workert, majd a default kódot teljesen cseréld le erre:

```text
cloudflare-worker.js
```

Deploy után kapsz egy ehhez hasonló URL-t:

```text
https://instagram-drive-bridge.example.workers.dev
```

Ezután a `config.js` fájlban állítsd be:

```js
window.IFA_CONFIG = {
  driveBridgeUrl: "https://instagram-drive-bridge.example.workers.dev"
};
```

Google oldalon nincs szükség további konfigurációra.

---

## Drive folder URL

A nyilvános Google Drive mappa linkjét közvetlenül az alkalmazásban kell megadni.

Példa:

```text
https://drive.google.com/drive/folders/FOLDER_ID
```

A konkrét Drive URL nincs hardcode-olva a repository-ba.

Miután egyszer megadtad, a böngésző localStorage-ban megjegyzi.

---

## Drive archívum felismerése

Az analyzer rekurzívan végigjárja a teljes mappastruktúrát.

Nem kell kézzel kiválasztani az almappákat.

A dátumok többek között ilyen struktúrákból is felismerhetők:

```text
meta-2026-Sep-07-10-28-43
```

és:

```text
instagram-accountname-2026-09-07-...
```

valamint általános:

```text
YYYY-MM-DD
```

útvonalrészletekből.

---

## Drive Sync során felismert fájlok

Relationship fájlok:

```text
followers_*.json
following.json
```

Jelenleg felismert Insights fájlok:

```text
audience_insights.json
content_interactions.json
profiles_reached.json
```

Más fájlokat az alkalmazás figyelmen kívül hagy, hacsak az Instagram parsernek nincs rájuk szüksége.

---

# Helyi tárolás és adatvédelem

Az Instagram ZIP és JSON forrásfájlok helyben, a böngészőben kerülnek feldolgozásra.

A Drive szinkron sem menti tartósan a letöltött forrásfájlokat.

Drive adatok esetén:

- a lekérések `cache: "no-store"` módban történnek
- a Cloudflare Worker `Cache-Control: no-store` választ küld
- a letöltött JSON csak ideiglenesen van a böngésző memóriájában
- feldolgozás után az ideiglenes forrásadatokat elengedjük
- a nyers Drive JSON nem kerül fájlként mentésre az eszközön

Tartósan csak a levezetett alkalmazásadatok maradnak a böngészőben, például:

- Hearts / Keep jelölések
- Insights snapshotok
- beállítások
- elmentett Drive folder URL

A reviewed állapot csak az aktuális session idejére él.

---

# Database export és import

A helyben tárolt alkalmazásállapot manuálisan exportálható.

A database export jelenleg tartalmazza:

- Hearts / Keep jelölések
- Insights snapshotok

Az exportált adatbázis egy másik eszközön importálható.

Ez backend nélküli, kézi többeszközös szinkronként használható.

---

# PDF report

Az alkalmazás **Export PDF** funkcióval nyomtatható riportot tud készíteni.

A report többek között tartalmazhatja:

- Followers
- Following
- Follows
- Unfollows
- Net follower change
- Accounts reached
- Profile visits
- Content interactions
- aktuális trendgrafikon
- legutóbbi aktív snapshotok

Az export a böngésző natív Print / Save as PDF folyamatát használja.

---

# Nyelvek

A felület támogatja:

- angol
- német
- magyar

A kiválasztott nyelvet a böngésző megjegyzi.

---

# Deployment

Az alkalmazás teljesen statikus.

Szükséges fájlok:

```text
index.html
styles.css
app.js
config.js
README.md
```

A Drive szinkronhoz ezen kívül szükséges:

```text
cloudflare-worker.js
```

A fő alkalmazás közvetlenül hostolható GitHub Pages-en.

Build folyamat nem szükséges.

---

# A publikus Drive sync fontos korlátja

Az API-key nélküli Drive integráció a Google publikus embedded-folder megjelenítését olvassa, nem a hivatalos Google Drive API-t használja.

A Google ezt a publikus megjelenítési struktúrát a jövőben megváltoztathatja.

Ha ez megtörténik, a `cloudflare-worker.js` parserét hozzá kell majd igazítani.

Ez tudatos kompromisszum az alábbi előnyökért:

- nincs Google billing
- nincs Google API key
- nincs OAuth
- nincs hozzáférés a Google accountodhoz

---

# Fejlesztési történet

<small>

### v0.14
Reference mappa szerződés, külön történeti Drive scan, no-store Drive feldolgozás, repository-safe Drive URL kezelés.

### v0.13
Nyilvános Google Drive szinkron Cloudflare Workeren keresztül Google API key, OAuth és billing nélkül.

### v0.12
Első Google Drive szinkron prototípus a hivatalos Drive API használatával.

### v0.11
Mobil viewport containment és horizontális overflow javítások.

### v0.10
Mobil grafikon fejlesztések és PDF report export.

### v0.9
Erősen elkülönülő grafikon-színpaletta.

### v0.8
Helyes SVG geometria, valódi kör alakú adatpontok, torzításmentes grafikonfeliratok.

### v0.7
Interaktív adatpontok, összekötött trendvonalak, hover/tap tooltipek.

### v0.6
Egyszerűsített alkalmazásarchitektúra, manuális Insights snapshotok, többadatsoros trendgrafikon, adatbázis export/import és egymást kizáró follow-back cohortok.

### v0.5
Egyszerűsített felső navigáció és összevont Followers workflow.

### v0.4
Instagram Insights támogatás, reviewed-state workflow, Open Next és mobil fejlesztések.

### v0.3
Tartós Hearts, relationship history koncepciók, cohortok és cleanup eszközök.

### v0.2
Közvetlen Instagram ZIP import, többnyelvű UI és Reference szűrés.

### v0.1
Első böngészőalapú followers/following JSON analyzer.

</small>

## v0.17 - Napi Drive modell + automatikus Insights history

A Drive szinkron most a scheduled `followers_*.json` fájlokat pozitív follower eseményként / megfigyelésként kezeli. Az események minden dátumozott Drive exportból össze lesznek fésülve és deduplikálva, miközben a legfrissebb elérhető `following.json` adja az aktuális Following állapotot. Ez a mód napi follow-back ellenőrzésre szolgál.

A scheduled follower adatok nem bizonyítják, hogy egy régebbi follower jelenleg is követ. Az elveszett followereket manuális teljes export és teljes Reference export összehasonlításával kell ellenőrizni.

A normál **Drive szinkron** most automatikusan felépíti az összes elérhető dátumozott Insights snapshotot. A `Drive előzmények beolvasása` gomb kézi újraépítő/javító funkcióként megmarad.

Az Insights parser a Meta labeljeit beolvasás előtt normalizálja, így például a `Date range` / `Date Range`, `Accounts reached` / `Accounts Reached`, `Content interactions` / `Content Interactions` és `Non-followers` / `Non-Followers` ugyanarra a kanonikus metrikára kerül.

Ha ugyanarra a dátumra több export van, az elérhető Audience, Interactions és Reach adatok egyetlen napi snapshotba lesznek összefésülve. Hiányzó metrikát az app nem talál ki.

A v0.16 kísérleti Drive cleanup/history-export funkciója kikerült. A nyers scheduled exportokat egyelőre érdemes megtartani.

### Fejlesztési történet

- **v0.17** Napi follower-event Drive modell, automatikus teljes Insights-history szinkron, normalizált Meta labelek, manuális full-export reconciliation, Drive cleaner kivezetve.
- **v0.16** Kísérleti kompakt Drive history archívum, v0.17-ben kivezetve.

**Insights dátumkezelés:** ha a Meta gördülő `Date Range` értéket ad, az analyzer a tartomány utolsó napját követő napot használja kanonikus snapshot dátumként. Így két automatizálás ugyanahhoz a lezárt Insights adatnaphoz tartozó exportja nem hoz létre duplikált vagy egymással ütköző snapshotot.

## v0.18 - Review workflow finomítás

- A relationship sorok a rendelkezésre álló timestampet másodperc pontosságig mutatják.
- Az `Open next` a legutóbb megnyitott látható profiltól folytatja a sort, nem ugrik vissza a legfelső meg nem nyitott elemhez. A lista végén szükség esetén visszafordul a korábbi meg nem nyitott elemekhez.
- A profil-ellenőrzés egy újrahasznált, névvel ellátott Instagram fület/ablakot használ, nem nyit minden `Open next` lépésnél új böngészőablakot.
- Új `Szívezettek elrejtése` lista-szűrő.

## v0.19 - Többeszközös Heart Sync

A szívezett profilok most már a meglévő Cloudflare Workeren keresztül több eszköz között is szinkronizálhatók.

Cloudflare követelmények:

- KV namespace binding: `HEARTS_KV`
- Worker secret: `HEARTS_SYNC_KEY`
- az új `cloudflare-worker.js` verzió deployolása

A sync key nem kerül a `config.js` fájlba. Minden eszközön egyszer kell megadni az appban, és csak az adott böngésző local storage-ában tárolódik.

A meglévő v0.18 Heartok automatikusan migrálódnak. A régi lokális Heartok `0` timestampet kapnak, ezért egy frissebb cloud oldali eltávolítás elsőbbséget élvez. A Heart eltávolítások tombstone rekordként megmaradnak a szinkronizált állapotban, így egy régebbi eszköz nem tudja később véletlenül visszahozni őket.

A lokális Heart cache hálózati hiba esetén is megmarad. Van kézi `Hearts szinkron` gomb, ezen kívül a kapcsolódott kliensek induláskor, az apphoz visszatérve és Heart módosítás után is szinkronizálnak.

## v0.20 - Full checkpointok, Unfollowed és My Following Activity

Az adatforrások most explicit módon szét vannak választva:

- **Reference** érintetlen és csak a Drive `Reference` mappájából vagy manuális Reference importból töltődik.
- **Daily Sync** csak a `Reference` és `Full Exports` mappákon kívüli scheduled exportokat használja.
- **Full Checkpoint** teljes follower/following snapshot. A manuálisan betöltött full elsőbbséget élvez. Ha nincs manuális full, a Drive `Full Exports` mappájában talált legfrissebb teljes export lesz a read-only **Last Full** fallback.

A Daily Sync működő adatmodellje változatlan maradt. A korábbi Current upload panel most Full Checkpoint panel, és nem jeleníti meg a Daily Sync fájlokat.

### Unfollowed

Az új `Unfollowed` lista a Daily Sync által a Full Checkpoint cutoff időpontjáig valaha megfigyelt followereket hasonlítja össze a Full Checkpoint teljes follower listájával. A Full után érkező napi események nem kerülnek bele.

### Identity changes / rename

A rendszer probable username-váltást detektál, ha egy eltűnő és egy új username pontosan ugyanazzal a relationship timestamppel rendelkezik. Az evidence jöhet follower timestampből, following timestampből, egymást követő Daily Following snapshotokból, Reference vs Full összevetésből vagy egymást követő Full checkpointokból.

A rename candidate-ek ki vannak zárva a New Follower, New Following, Not Following Back, Unfollowed és Unfollowed by me számításokból, és külön `Renamed` listában ellenőrizhetők.

### My Following Activity

Az Insights új My Following Activity panelje kizárólag az egymást követő Daily `following.json` snapshotokból számol: Bekövettem, Kikövettem, Nettó following és Újrakövettem.

A `recently_unfollowed_profiles.json` **nem** növeli a saját kikövetéseid számát. Csak kiegészítő identity/FBID evidence-ként és refollow detektálásra használjuk.

### Insights hiányzó értékek

A hiányzó Insights metrikák `null` / `—` értéken maradnak. A chart nem alakítja őket többé 0-vá, és a Drive rebuild a korábban hibásan elmentett 0 értéket is vissza tudja állítani valódi hiányzó állapotra.

A Full Exports és a Reference explicit módon ki van zárva a Daily Insights historyból. Az analyzer nem néz bele és nem kever adatot a beállított nyilvános Drive rooton kívüli másik automation mappából.

## v0.21 - Rekonstruált NFB, Growth részletek és Following cohortok

Ebben a verzióban szándékosan külön marad a két follower-modell.

A **történeti follower evidence** továbbra is az első scheduled Full baseline-ból és az összes Daily follower eventből épül. Ezt használja az `Unfollowers` és minden történeti/lifecycle jellegű nézet.

Az **NFB rekonstrukció** az effektív Full Checkpointból indul (ha van manuális Current Full, abból; különben a Drive Last Fullból), majd csak az ezt követő Daily follower eventeket adja hozzá, és ezt hasonlítja a legfrissebb Daily `following.json` állapothoz. A Full/Daily átfedéseket canonical identity + pontos relationship timestamp alapján deduplikáljuk. A Full határát relationship evidence alapján határozzuk meg, nem ZIP-óra alapján, ezért a modell nem épít timezone-feltételezésre.

Az `Unfollowed` neve **Unfollowers** lett. A Quick Changes korábbi Reference-alapú mutatója **Lost followers since Reference** néven jelenik meg.

További változások:

- javítva a Hide Reference Matches shown/hidden számláló;
- az Open Next ugyanazt a renderelt profil `<a>` linket aktiválja, mint a kézi username-kattintás, `window.open()` nélkül, így nem marad orphan `about:blank` böngészőlap az Instagram app megnyitásakor;
- modernebb Growth Trends görbe, finom single-series area, aktív guide és a charton belül clampelt tooltip;
- a Growth Trends dátumai lenyithatók, és megmutatják a napi fiókszintű eseményeket (új megfigyelt follower, általam bekövetett, általam kikövetett);
- a My Following Activity a Growth Trends után, külön panelként került az Insights aljára;
- a Cohorts új **Following Cohort Analysis** panelt kapott, amely kizárólag egymást követő Daily Following snapshotokból és rename-resolved follow ciklusokból számol.

A favicon és az általános vizuális atmosphere polish szándékosan a külön polish körre marad.

## v0.22 - Followers fallback, All-time Followers és látható adatforrások

Ez a verzió lezárja a relationship-state modellt a külön vizuális polish kör előtt.

### Followers

A Followers nézetnek most mindig van használható fallbackje:

- ha van Full Checkpoint, abból indulunk és csak az annál újabb Daily follower eseményeket adjuk hozzá;
- ha nincs Full Checkpoint, az első Daily baseline + az összes későbbi Daily follower esemény adja a fallback állapotot.

A lista alatt egy rövid, hétköznapi nyelvű sor mutatja, miből számol az app.

### All-time Followers

Új **All-time Followers** nézet készült. Ez a történeti modell: összefésüli az összes fiókot, akit a Daily Sync valaha followerként látott. Szándékosan külön van a rekonstruált aktuális Followers nézettől.

### Following snapshot kiválasztása

A Daily `following.json` és a Full Checkpoint is teljes Following snapshot. Az app most a fájl generálási/módosítási ideje alapján próbálja kiválasztani a frissebbet, nem az export fájlnevéből vagy a legutóbbi follow actionből.

A ZIP-en belüli `following.json` időpontját közvetlenül olvassuk. A publikus Drive JSON fájloknál a Cloudflare Worker továbbadja a Google `Last-Modified` fejlécét, ha az elérhető.

Ha a pontos sorrend nem állapítható meg, automatikusan a Daily Sync marad a konzervatív fallback. Egy kicsi Részletek vezérlő megmutatja a használt forrást, és session szinten válthatsz Automatic, Daily Sync és Full Checkpoint között.

### Not Following Back

Az NFB most ebből épül:

- Full + újabb Daily followerek alapján rekonstruált Followers, vagy Full nélkül a Daily történeti fallback;
- a forrásválasztás szerint legfrissebb teljes Following snapshot;
- rename resolution az összevetés előtt.

### Egyéb

- A Growth Trends napi lenyitása egyértelműbb disclosure nyilat kapott.
- A follower-alapú nézetek timestampei most a megfelelő follower kapcsolatot jelölik.
- A Full checkpointok sorrendezése ahol lehet a belső Following fájl idejét használja.
- A Drive fájlidő továbbításához a Cloudflare Workert újra kell deployolni.

## v0.22.2 - Egységes történeti follower evidence

Az `All-time Followers` most minden olyan canonical accountot jelent, amely bármely elérhető relationship exportban valaha followerként szerepelt: Reference, Daily follower history, Drive Full Exports és manuálisan betöltött Full checkpointok. A rename aliasok számlálás előtt összevonódnak.

Az `Unfollowers` most ugyanezt a történeti follower identity registryt használja, a kiválasztott Full checkpoint időpontjáig levágva, majd kivonja belőle a Fullban jelen lévő followereket. Ezzel megszűnik az a vakfolt, amikor egy csak Full exportban megjelent follower később soha nem kerülhetett volna az Unfollowers listába.

A jelenlegi `Followers` logikája nem változott: ha van Full, Full + azóta új Daily follower eventek; Full nélkül a Daily baseline/history fallback marad.

## v0.23 - Design polish

A jóváhagyott látványterv designnyelve bekerült a tényleges felületbe, a relationship adatmodell módosítása nélkül.

- Új, saját Followers Analyzer vektoros logó és favicon.
- Branded header és finomított felső utility gombok.
- Lágyabb oldal-atmoszféra, egyértelműbb paneltagolás, finomított kártyák, inputok és aktív navigáció.
- Tudatosabb színakcentusok az Insights és az interaktív vezérlők körül.
- A Growth Trends megkapta a jóváhagyott chart nyelvet: magasabb plot, sima multi-series vonalak, enyhe area fill, vertikális guide-ok, tisztább pontok és egy dátumhoz tartozó összes aktív metrikát mutató, panelen belül maradó tooltip.
- A responsive működés, Daily Sync, Full Checkpoint, Heart Sync, identity kezelés és minden számítási logika változatlan.

## v0.24 - Opcionális SECOND automatizálási kompatibilitási forrás

A két párhuzamos Meta scheduled export speciális helyzetére bekerült egy ideiglenes, szigorúan elkülönített `SECOND` forrás.

A szabályok szándékosan szűkek:

- A Drive útvonalban pontosan `SECOND` nevű path segment (kis- és nagybetűtől függetlenül) külön forrásnak számít. Soha nem kerül a Primary Daily, Reference vagy Full Exports közé.
- A Primary és SECOND follower evidence összeolvad, identity/timestamp alapján deduplikálva.
- A teljes Following snapshotok megőrzik a forrásukat; az effektív Daily állapothoz mindig a ténylegesen frissebb snapshot nyer a már használt fájl-generálási metadata alapján.
- Az Insights Primary-first marad. A SECOND csak egy teljesen hiányzó fájltípust pótolhat (`audience_insights.json`, `content_interactions.json`, `profiles_reached.json`). Ha a Primaryban az adott canonical naphoz megvan a fájltípus, a SECOND nem írhatja felül.
- A `recently_unfollowed_profiles.json` ebben a kompatibilitási rétegben továbbra is csak Primary forrásból jön.
- Az Insights snapshot provenance eltárolja, hogy az egyes fájltípusok és a Following érték Primaryból vagy SECONDből érkeztek.

A réteg később egyszerűen kikapcsolható/kivehető. A Drive panelen van helyi kapcsoló. Kódszinten a `config.js` fájlban a `secondSourceFeature: false` elrejti a kapcsolót és teljesen figyelmen kívül hagyja a `SECOND` fát. Cloudflare Worker módosítás nem szükséges.
