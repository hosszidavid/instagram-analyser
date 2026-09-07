# Instagram Followers Analyzer v0.3

## Fő funkciók

- Instagram ZIP / JSON import
- Followers / Following / Not Following Back
- referencia szűrés: összes / referencia elrejtése / csak referencia
- EN / DE / HU
- szívezhető profilok (Keep), localStorage-ban tárolva
- Overview
- referencia alapú gyors változások:
  - New followers
  - Lost followers
  - New following
  - Unfollowed by you
- Growth snapshot history
- follower/following/mutual/not-following-back idősor
- egyszerű SVG growth chart
- Follow Cohort Analysis mentett snapshotok alapján
- Cleanup lista
- szívezett profilok kizárása a cleanupból
- CSV export

## Growth működés

A Growth nézetben a `Save current snapshot` gomb az aktuális feltöltött exportból lokálisan snapshotot ment.
A snapshotok a böngésző `localStorage` tárhelyében maradnak.

## Cohort működés

A cohort elemzés a snapshotok között újonnan megjelent `following` profilokat tekinti új követéseknek.
A későbbi snapshotokból figyeli, mikor jelennek meg a `followers` listában.

Ezért a cohort eredmények pontossága függ attól, milyen gyakran készül snapshot.

## Cleanup működés

A jelenlegi pontozás szándékosan egyszerű:
- nem követ vissza: +50
- a választott időhatárnál régebbi követés: +15
- 365 napnál régebbi követés: további +10
- Heart / Keep profil: kizárva

Interakciós score még nincs, mert ahhoz először érdemes valódi Instagram activity exporttal auditálni a rendelkezésre álló JSON fájlokat.

## Adatvédelem

Nincs backend. A feltöltött exportok a böngészőben kerülnek feldolgozásra.
A Hearts és Growth snapshotok csak a böngésző localStorage tárhelyében maradnak.
