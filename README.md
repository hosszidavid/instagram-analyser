# Instagram Followers Analyzer v0.4

## Fő változások

- A korábbi saját Growth dashboard helyett **Instagram Insights** nézet került be.
- A teljes Instagram ZIP-ből automatikusan olvassa:
  - `audience_insights.json`
  - `content_interactions.json`
  - `profiles_reached.json`
- Nem feltételez 90 napos periódust: az exportban szereplő `Date range` jelenik meg.
- Csak a leginkább használható mutatókat jeleníti meg:
  - Followers
  - Follows
  - Unfollows
  - Net follower change
  - Accounts reached
  - Profile visits
  - External link taps
  - Content interactions
  - Non-follower reach
  - Non-follower engagement
- A profil-szintű Relationship History háttérben megmarad a Cohort Analysis miatt.
- Az aktuális export betöltésekor a relationship snapshot automatikusan mentődik localStorage-ba.
- Ugyanazon napi, azonos állapotú import nem duplikálódik.
- Mobilon kompaktabb felhasználói sorok.
- Session reviewed státusz kis ponttal:
  - szürke = még nem nyitott
  - zöld = már megnyitott az aktuális böngésző-sessionben
- Fix alsó **Open next** gomb a következő még nem megnyitott profilhoz.
- Heart / Keep továbbra is tartósan, localStorage-ban tárolódik.

## Adatvédelem

Nincs backend. A ZIP/JSON feldolgozás a böngészőben történik. A Heart és Relationship History csak a böngésző helyi tárhelyén marad.
