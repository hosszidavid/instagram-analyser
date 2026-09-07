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
