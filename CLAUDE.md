# CLAUDE.md — 山日和 YAMABIYORI

## What this project is
A static hiking-planning website for Japan. Users either pick a date (see all mountains ranked by a custom weather grade) or pick a mountain (see 7-day grades, transit access, huts, routes, seasonality). Read HANDOFF.md for the full vision, data schema, and roadmap before large changes.

## The owner
A beginner programmer and experienced hiker. Explain changes in plain language, one step at a time. Prefer the simplest tool that works. Ask before adding frameworks, build tools, or dependencies.

## Hard rules
- Static site only: no servers, no databases, no user accounts, no build complexity beyond what a static host (Netlify/Vercel/GitHub Pages) needs.
- Weather comes from the Open-Meteo free API, fetched client-side, with `elevation` set per mountain. Keep the CC BY 4.0 attribution in the footer.
- The grading engine must always display its *reasons* alongside the grade. Never reduce it to an unexplained letter.
- Grading thresholds are per-mountain data, not global constants. Tuning them is a feature.
- Transit/hut data is hand-curated. Each access entry keeps its official `url` and a `sample: true` flag until the owner verifies it; render unverified data with the 「SAMPLE — 要検証」 flag. Verification = replace `sample: true` with `verified: "YYYY-MM-DD"` (最終確認日, shown as 「確認 日付」). Validators require exactly one of the two on every access entry.
- Never scrape or copy content from Yamap, Yamareco, or てんきとくらす.
- UI is bilingual: 日本語/English toggle top-right (default follows the browser language; choice saved in localStorage). Every UI string lives in STR.ja + STR.en in index.html — add both when adding UI text. Mountain data (notes, timetables, huts, routes) stays Japanese; English mode shows a notice. Mountain names keep 漢字 prominent in both languages.

## Design system (do not casually replace)
Topographic-map aesthetic: paper background #F1F3EC, ink #26302A, pine #2E4B38, lake #3E6B8C, vermillion #C2452F. Fonts: Shippori Mincho (display/mountain names), Zen Kaku Gothic New (body), IBM Plex Mono (timetables/data). Signature element: the circular hanko-style grade stamp. Grades: A #2E7D4F / B #C08A2D / C #C2452F.

## Data schema
One mountain = one JS object in data/mountains.js (plain JS, not JSON, so double-clicking index.html keeps working — browsers block fetch() of local files). The schema template lives in the comment block at the top of that file; see also HANDOFF.md §3. Huts carry `url` + `tel`; transit entries keep `sample: true` until the owner verifies them. Each mountain also carries `trip:{tokyo_day, hut, car}` (our own estimates behind the 東京から日帰り / 山小屋泊 / 車・タクシー filter chips; both validators enforce it). When adding fields, update the template comment and all existing mountains together.

## Current state / next tasks
Full architecture review + prioritized fix/add roadmap: **ROADMAP.md** (2026-07-27). Work it top-to-bottom, one task per session.
1. ~~Split mountain data out of index.html~~ → done: data/mountains.js (110 mountains as of 2026-07-27: 元23＋北海道9＋東北14＋上信越・尾瀬12＋関東・浅間3＋北アルプス・御嶽13＋中部その他6＋中央・南アルプス12＋北陸近畿中四国・九州13＋二百・三百名山〔山梨・富士周辺・東京近郊〕5)
2. Owner verifies each transit entry against its official `url`, then replaces that entry's `sample: true` with `verified: "YYYY-MM-DD"` (the SAMPLE flag becomes a green 確認 date per entry). Same for route `segments` times.
3. ~~Route grades → official values~~ → done 2026-07-14: 23 routes upgraded to `official: true` from 信州/山梨/群馬/栃木/岐阜 published tables (double-read PDFs, formula-validated, double-blind matched — see _agentwork/WORKLOG.md). The remaining 26 routes stay `official: false` deliberately: no exactly-matching published row (別起点・周回/往復の違いなど) or the prefecture doesn't publish (神奈川/茨城/大分).
4. ~~Expand coverage to all 100 百名山~~ → **done 2026-07-24: 百名山 100/100** (8 region batches, see _agentwork/WORKLOG.md). Next: other famous/notable peaks (二百名山・花の百名山など — batch by region, owner go-ahead required per batch). Tune weather grading thresholds after real hikes
5. Step 2 of the route plan: embedded Leaflet + 地理院タイル map with GPX lines on route pages (needs owner OK — adds a CDN dependency)
6. Convert to a multi-page static site once data outgrows one file
