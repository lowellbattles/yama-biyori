# ROADMAP — 山日和 YAMABIYORI architecture review, fixes & adds

*Review date: 2026-07-27, at 110 mountains (百名山 100/100 ＋ 二百・三百名山 10). Produced by a full read of `index.html`, `data/mountains.js` (validator + statistics pass), `HANDOFF.md`, and `_agentwork/WORKLOG.md`, plus live tests against the Open-Meteo API.*

**How to use this file:** work top to bottom, one task per session. Every task says why it matters, how big it is, and what "done" looks like. Effort sizes: **S** = under an hour, **M** = one sitting, **L** = multiple sessions. Tasks marked 🔒 need your explicit go-ahead or a decision first (per the 2026-07-19 directive and CLAUDE.md rules).

---

## 1. Architecture today

```
index.html          one file = the whole app
 ├─ <style>         design system (topo-map palette, hanko stamps)
 ├─ <body>          header, view-toggle tabs, date chips, #main, footer (CC BY attribution)
 ├─ <script src="data/mountains.js">   ← 110 mountain objects, 677 KB, hand-curated
 └─ <script>        ~390 lines of app code:
      loadAll()         fetches Open-Meteo for ALL 110 mountains at once (Promise.all)
      gradeDay(m,d)     the grading engine — per-mountain thresholds → A/B/C + reasons
      renderByDate()    "日付から探す": all 110 ranked for the chosen day
      renderMtnList()   "山から探す": grouped by region string
      renderDetail()    one mountain: 7-day strip, hourly panel, seasonality, transit, huts, routes
      renderRoute()     one route: grades, segment times, trailhead access, GSI map link
      state = {view, dayIndex, selected, hourIdx, routeIdx, wx, dates, ...}
```

Supporting cast: `_agentwork/` holds the JScript validators (`validate_mountains.js`, `validate_single.js` — run via `cscript`, since this machine has no Node), the batch-work log (`WORKLOG.md`), evidence JSONs from every agent run, expansion source files, and manual byte-copy backups of the data file.

**Data snapshot (2026-07-27, all numbers measured):**

| What | Count |
|---|---|
| Mountains | 110 (百名山 100, other 10) |
| Trailheads / transit entries | 202 / 343 |
| Transit entries still `sample:true` (unverified) | **330 of 343** (only 赤岳・瑞牆山・大菩薩嶺 are fully verified) |
| Routes / with official prefecture grade | 298 / 135 official, 163 estimated |
| Routes with segment times (all unverified) | 83 |
| Huts (12 mountains have none) | 250 (39 no URL, 54 no phone — mostly 避難小屋, fine) |
| Distinct `region` strings | **71** (50 of them contain exactly one mountain) |
| Weather payload, all 110 mountains | ~240 KB compressed / ~1 MB parsed — acceptable |
| Git repository | **none** |
| Deployed anywhere | not yet |

**What's healthy** (worth saying before the fix list): the validator passes clean; the schema is disciplined and documented in the file itself; every grade shows its reasons; unverified data is honestly flagged; official grades carry sources; every agent batch left an evidence trail and a backup. The foundation is good — the issues below are about robustness, scale, and trust, not rot.

---

## 2. Bugs and risks found

Ranked by (impact × likelihood). Each one becomes a numbered task in §3.

**B1 — One failed request blanks the entire site.** `loadAll()` does `Promise.all` over 110 separate fetches. If *any single one* fails (mobile hiccup, one rate-limited response), the whole site shows only 「予報の取得に失敗しました」 — no mountains, no transit, no huts, nothing — and 再試行 refetches all 110 again. With 110 requests per page view the odds of one failing are real, and Open-Meteo's per-minute IP limits make bursts risky (a few quick reloads, or several users behind one Wi-Fi, can trip it). *Verified fix path: Open-Meteo accepts comma-separated coordinates — I tested `latitude=a,b,c&longitude=…&elevation=…` and it returns a JSON array — so 110 requests can become ~4 chunked requests.* → Task 2.

**B2 — The site is 100 % weather-dependent even for non-weather content.** `render()` returns early unless weather loaded. Transit tables, hut phone numbers, route notes — all local data — are unreachable when the fetch fails. A hiker on a bad connection gets nothing. (The CSS even has an unused `stamp.na` style waiting for exactly this.) → Task 3.

**B3 — A single `null` from the weather API crashes a whole view.** `d.wind.toFixed(0)`, `d.gust.toFixed(0)`, `d.precip.toFixed(1)` etc. run unguarded in `gradeDay` and every renderer. Open-Meteo occasionally returns `null` for a daily value; one null in any of 110×7 records throws mid-render and the view dies. → folded into Tasks 2–3.

**B4 — Two Hokkaido peaks have the freeze-check anchored to the treeline, not the ridge (safety-relevant).** The engine warns when the freezing level drops below `ridgeline + 300 m`. Everywhere else `ridgeline` ≈ upper-route/summit elevation (e.g. 燕岳 2700). But 十勝岳 has `ridgeline:1300` (its *forest limit* — the snow_note says so) against a 2,077 m summit, and トムラウシ `ridgeline:1700` vs a 2,141 m summit. Effect: a day with the freezing level at 1,900 m — summit below freezing — shows **no warning** on either mountain. The other 108 follow the summit convention. → Task 5.

**B5 — `region` fragmented into 71 strings → the 山から探す view is 71 headings.** Expansion agents each wrote free-text 山域 names, so we have 北アルプス / 後立山連峰 / 立山連峰 / 黒部源流域（北アルプス） / 北アルプス（裏銀座・黒部源流域） / 北アルプス南部 / 北アルプス南部（穂高連峰） as seven *different* groups, 越後三山 vs 越後三山・奥只見, etc. Fifty headings contain a single mountain. Grouping has stopped meaning anything, and there's no way to filter. → Tasks 6–7.

**B6 — Content-trust debt: 330 of 343 transit entries are unverified.** The ② sweep (2026-07-18) covered only the original 23 mountains; all 87 expansion mountains' transit entries and all 83 segment blocks still carry `sample:true`. The SAMPLE flag is honest, but precise-looking times invite trust anyway. This is the single biggest *content* task and it's why the site can't be promoted yet. → Task 12 (+ the owner to-do lists already in WORKLOG.md).

**B7 — No git, no remote copy.** The 677 KB data file — the product — exists only on this disk, protected by hand-made copies in `_agentwork/backups/`. One disk failure or bad edit loses real work. HANDOFF already recommends git; it was never set up. → Task 1 (do this first).

**B8 — Invisible to search engines, and no page identity.** One URL, everything client-rendered: Google sees an empty `<main>`. No `<meta description>`, no OG tags, no favicon (browsers request one and 404). You can't even link a friend to a specific mountain — refresh always lands on the ranked list. → Tasks 8 (links), 9 (meta), 16 (real SEO, decision).

**B9 — Small data lint.** (a) 14 routes carry `sample:true` but have no `segments` — the flag renders nowhere and means nothing (schema defines it as "segment times unverified"). (b) 10 mountains list a "best" month with no note for that month in the seasonality calendar. (c) 幌尻岳 `precip_danger:7` sits below every other mountain's floor of 8 — plausibly deliberate (river-ford route) but undocumented; 宮之浦岳's extreme 12/35 is clearly deliberate (屋久島) and fine. → Task 5.

**B10 — Grading engine has three hard-coded global thresholds** — fresh-snow 5 cm/0.5 cm, cold-warning −10 ℃, freeze-buffer +300 m — while CLAUDE.md's rule is "thresholds are per-mountain data." Not a bug today, but 屋久島 and 北海道 arguably want different snow/cold lines, and the rule should hold. → Task 13.

**B11 — Minor accessibility gaps.** Tabs lack `aria-selected`; cards/day-cells respond to Enter but not Space; no visible focus order issues otherwise. → Task 14.

**Watchpoint (no action now):** Open-Meteo free tier is for non-commercial use with attribution (already in the footer — keep it). If the site ever runs ads, budget for their paid tier. Google Fonts is the only other external dependency.

---

## 3. The roadmap — one task at a time

### Phase 0 — safety net

**Task 1 · Put the project in git (+ push a private copy to GitHub). — S, do first — ✅ done 2026-07-27** (private repo `github.com/lowellbattles/yama-biyori`, local identity set, `_agentwork` included, `.claude/settings.local.json` ignored)
Value: protects everything; makes every later task reversible; enables free deploys later. No code changes.
Say to Claude Code: *"Set up git for this project, write a sensible .gitignore, make the first commit, and walk me through creating a private GitHub repository and pushing to it."*
Done when: `git log` shows a commit containing index.html + data/ + docs, and the same commit exists on GitHub.

### Phase 1 — make the site robust (pure code, no data edits)

**Task 2 · Rebuild the weather loader: batched, fault-tolerant, cached. — M — ✅ done 2026-07-27** (4 batched requests, per-chunk failure tolerance with NA stamps + 失敗分を再試行, 12 s timeout, 45-min sessionStorage cache, null-safe `fmt()`; verified in-browser: happy path, cache reload = 0 API calls, simulated chunk failure, detail page without weather, live recovery)
The one big technical fix. Design (API behaviour verified by live test):
- Split the 110 mountains into chunks of ~30 and call Open-Meteo's multi-coordinate form (`latitude=…,…&longitude=…,…&elevation=…,…` → returns a JSON array in the same order). 110 requests → 4.
- `Promise.allSettled` semantics: a failed chunk marks only *its* mountains as weather-missing; everything else renders. 再試行 refetches only failed chunks. Add a fetch timeout (~10 s) so a hung request can't spin forever, and show progress per chunk (「予報取得中… 60/110」).
- Derive `state.dates` from the first *successful* mountain, not `MOUNTAINS[0]`.
- Cache the processed per-mountain weather in `sessionStorage` with a ~45-minute stamp (~500 KB, fits comfortably): navigating away and back becomes instant and API load drops to near zero.
- While in there, make formatting null-safe (B3): one `fmt(v, digits)` helper returning `"—"` for null, used by `gradeDay` and all renderers.
Done when: with DevTools offline-simulating one chunk, the site still renders the other ~80 mountains; a reload within 45 min makes zero API calls; no `.toFixed` runs on a raw API value anywhere.

**Task 3 · Weather-optional rendering. — S (after Task 2) — ✅ done 2026-07-27** (total-failure path: fallback 7-day date chips, all views render with 「—」 stamps, status explains static content is still available; verified with all requests blocked — both views + detail pages, zero console errors. Bonus finding: the in-app preview no longer blocks Open-Meteo on file://, so double-click still works fully)
When a mountain has no weather: show the already-styled grey `NA` stamp (「—」), keep metrics as dashes, and render *all* static content — transit, huts, routes, seasonality — normally. The status line explains 「一部の山の予報が取得できませんでした」 with a retry-failed button. A hiker with a dying connection can still read the bus table.
Done when: with all requests blocked, both views and every detail page render fully with NA stamps and no console errors.

### Phase 2 — data hygiene (one focused session with the validator)

**Task 4 · Back up, then fix the two ridgeline outliers (B4). — S — ✅ done 2026-07-27** (十勝岳 1300→2000, トムラウシ 1700→2100 — both = forecast_elevation per the site-wide convention; snow_note prose untouched; validator passes; verified via gradeDay: a frost-at-2,200m October day now grades B with the 凍結・残雪 warning instead of a clean A)
Your judgment call as the hiker, but the convention says: 十勝岳 `ridgeline` 1300 → ~2000 (upper route), トムラウシ 1700 → ~2050, keeping each `snow_note`'s treeline *text* (it's good prose — only the number was anchored wrong). Re-run the validator; eyeball both mountains' 7-day strips.
Done when: both peaks warn on days when the freezing level approaches their summits, and the validator passes.

**Task 5 · Sweep the small lint (B9). — S — ✅ done 2026-07-27** (14 dead route flags removed; 12 missing best-month notes written for 10 mountains, each matched to neighboring notes' tone; both validators now reject `sample:true` without segments so it can't recur; 幌尻岳 precip 2/7 confirmed intentional — its own snow_note documents the deliberate lower thresholds for the ford route, no change needed)
Remove the 14 meaningless route-level `sample:true` flags (list in review notes: 雨飾山荘コース, 草津白根×2, 白山×3, 荒島岳×2, 祖母山×5, 大浪池周回); add the 10 missing best-month seasonality notes (or drop those months from `best`); add a one-line comment at 幌尻岳's `precip_danger:7` recording whether it's intentional. Update the template comment if any rule changes.
Done when: validator passes and a fresh stats pass shows 0 segment-less sample flags and 0 best-months-without-notes.

**Task 6 · Add a coarse `area` field to all 110 mountains (fixes B5's data side). — M — ✅ done 2026-07-27** (13 areas: 北海道9・東北14・上信越・尾瀬15・関東周辺9・奥秩父・奥多摩9・八ヶ岳・中信高原5・北アルプス・御嶽18・中央アルプス3・南アルプス10・富士・伊豆・箱根4・北陸・近畿5・中国・四国3・九州・屋久島6。All 70 region strings mapped mechanically with count verification; template comment documents the list; both validators enforce membership — note their AREA_LIST uses \u escapes because cscript reads script source as ANSI, not UTF-8)
Keep `region` exactly as-is (it's good display text); add `area:` with ~12 fixed values, e.g.: 北海道 / 東北 / 上信越・尾瀬 / 関東周辺 / 奥秩父・大菩薩 / 八ヶ岳・中信 / 北アルプス / 中央アルプス / 南アルプス / 富士・伊豆・箱根 / 北陸・近畿 / 中国・四国・九州. Mechanical mapping from the 71 region strings; add `area` to the template comment and to `validate_mountains.js` (required, from the fixed list — the validator is what stops fragmentation happening again).
Done when: validator enforces `area`, every mountain has one, and the area list is written in the template comment.

### Phase 3 — UX that scales to 110+ mountains

**Task 7 · Regroup the 山から探す view by `area`. — S (after Task 6) — ✅ done 2026-07-27** (13 headings in north→south order with per-area counts, region stays as each card's sub-label; the optional jump-nav was skipped deliberately — Task 8's area filter chips serve that purpose without duplicate UI)
Area heading → region shown as a small sub-label on each card. 71 headings become ~12. Optional: a sticky one-line area jump-nav.
Done when: the mountain list is scannable and every area groups correctly.

**Task 8 · Search, filters, and shareable links. — M — ✅ done 2026-07-27** (search box matches 山名/name_en/id/山域/県名 with IME-composition handling; 13 area chips + 百名山 + A判定のみ toggles, combinable, with N/110 count and empty-state message; hash routes `#/d/<day>` `#/mtn` `#/m/<id>` `#/m/<id>/r/<n>` — pasted links open directly even before weather loads, Back/Forward navigate views, invalid ids fall back to the date view, `document.title` tracks every view; filter bar is built once so typing never loses focus)
The by-date view is now a 110-card scroll. Add above the list: a text search (matches name_ja / name_en), area chips (from Task 6), a 百名山-only toggle, and on the date view a 「Aのみ」 filter. Plus hash routing so state survives refresh and links work: `#/d/2` (date view day 2), `#/m/tsubakuro`, `#/m/tsubakuro/r/0` — set `document.title` per view. This is also the groundwork for the future multi-page site.
Done when: filters combine correctly, a pasted `#/m/yari` link opens 槍ヶ岳 directly, and Back/Forward navigate views.

**Task 9 · Page identity: favicon + meta + OG tags. — S — ✅ done 2026-07-27** (inline SVG hanko-stamp favicon as data URI — vermillion circle + 山, rotated −6° like the grade stamps; meta description, og:title/description/type, twitter:card. og:image and og:url/canonical deliberately deferred to deploy, Task 14)
Inline SVG favicon of the hanko grade stamp (data-URI, no new files needed), `<meta name="description">`, OG/Twitter tags. Cheap, removes the 404, makes shared links look intentional.
Done when: the tab shows the stamp and a link pasted into a chat app unfurls with title + description.

**Task 10 · Small display wins (batch into one session). — S**
(a) Show 凍結高度 as a column in the hourly table — it's already fetched, only the daily minimum is used today. (b) On route pages where `trailhead:null` (19 traverse routes), render 「縦走路 — アクセスは各起点の登山口欄を参照」 instead of silently omitting the access section. (c) `aria-selected` on tabs; Space activates cards (B11).

### Phase 4 — content trust (the long game, your pace)

**Task 11 · Add a 最終確認日 (`verified: "YYYY-MM-DD"`) field to the schema. — S code, ongoing content**
HANDOFF §6 suggested it; with 330 unverified entries it's now the honest trust signal. On any access entry (and route segments) that has been verified, record the date; render it as small text (`確認: 2026-07-18`) where the SAMPLE flag would be. Backfill the 13 entries cleared in the ② sweep from WORKLOG dates. Update template + validators (verified and sample are mutually exclusive).
Done when: verified entries show a date, unverified show SAMPLE, and the validator enforces the rule.

**Task 12 🔒 · Transit-verification sweeps for the 87 expansion mountains. — L, batched by region, explicit go-ahead per batch**
Reuse the proven ② pattern (lean shape: single verify at effort:low, main-session fixes, evidence JSON, WORKLOG entry). Suggested order = value order: 北アルプス・御嶽 → 中央・南アルプス → 上信越・尾瀬 → 東北 → 北海道 → 西日本. Each batch ends with `sample:true` flags dropping and `verified:` dates appearing. The hand-check leftovers (t01–t42 disputes, 神奈中 NAVITIME items, phone-only checks) stay in WORKLOG.md's owner to-do lists — chip at them before hikes in that area.

### Phase 5 — strategic items (each needs a decision from you 🔒)

**Task 13 🔒 · Grading engine v2 — move the last globals into per-mountain data. — M**
Add optional `snow_caution`/`snow_danger` (default 0.5/5 cm), `cold_warn` (default −10 ℃), `freeze_buffer` (default +300 m) to `grading`, engine falls back to defaults so **no data edits are required**; tune individual mountains as your hikes teach you (the stated purpose of this project). Reasons stay mandatory. Optional stretch, later: an afternoon-thunderstorm flag from Open-Meteo's CAPE variable in the detail view (fetch it only for the opened mountain — keeps the list fetch light).
Decision needed: do you want the extra knobs now, or after more real-hike calibration data?

**Task 14 🔒 · Deploy the site. — S–M**
Netlify (drag-and-drop or git-connected) or GitHub Pages — both free, both fine for this architecture; git-connected means "push = deploy". Nothing about the code needs to change. Decision: host + site name. (After deploy: add robots.txt + a canonical URL to the meta from Task 9.)

**Task 15 🔒 · Multi-page conversion for real SEO. — L, the big architectural step**
When you want search traffic ("山名 + 登山 バス" queries is where this site can win), the SPA must become one page per mountain. Three honest options:
- **A (recommended): build step on the host.** A small script generates `mountains/<id>.html` from data/mountains.js at deploy time (GitHub Actions or Netlify build). Your local workflow — double-click index.html, edit one data file — is untouched; the robot does the generating. Requires being comfortable that a build now exists (CLAUDE.md's "no build complexity" rule would be consciously relaxed — that rule protected local simplicity, which stays).
- **B: local generator via Windows cscript.** No cloud build, but ES3 JScript templating is genuinely painful to maintain. Not recommended.
- **C: stay a SPA.** Keep Task 8's hash links, accept ~zero SEO. Fine while the data is still being verified.
My recommendation: C until a meaningful share of transit data is verified (a site Google sends people to should be right), then A. Decision: when, and A vs C.

**Task 16 🔒 · Map view (Leaflet + 地理院タイル). — M, already CLAUDE.md item 5**
All mountains on one GSI topo map, colored by today's grade; later GPX lines per route. Needs your OK for the Leaflet CDN dependency (one JS + one CSS file; could also be vendored locally to keep the no-CDN stance). Genuinely differentiating feature, works fine as an extra page of the SPA.

**Task 17 🔒 · Continue coverage expansion (二百・三百名山). — L, per-batch go-ahead, unchanged process**
Candidate batches already listed at the end of the 2026-07-27 WORKLOG entry (東北紅葉・花 / 上信越 / 北ア二百 / 西日本). Note: each +30 mountains adds ~1 chunk to the weather fetch (Task 2 design scales linearly) and ~180 KB to mountains.js — no architectural blocker until roughly 300–400 mountains, where Task 15 becomes necessary rather than optional.

---

## 4. Suggested sequence at a glance

| Order | Task | Size | Waits on |
|---|---|---|---|
| 1 ✅ | Git + GitHub | S | — |
| 2 ✅ | Batched fault-tolerant cached fetch | M | — |
| 3 ✅ | Weather-optional rendering | S | 2 |
| 4 ✅ | Ridgeline fixes 十勝岳・トムラウシ | S | — |
| 5 ✅ | Data lint sweep | S | — |
| 6 ✅ | `area` field ×110 + validator rule | M | — |
| 7 ✅ | Regroup mountain list by area | S | 6 |
| 8 ✅ | Search + filters + hash links | M | 6 |
| 9 ✅ | Favicon + meta/OG | S | — |
| 10 | Small display wins | S | — |
| 11 | 最終確認日 field | S | — |
| 12 🔒 | Transit sweeps ×87 mountains | L | 11 helps |
| 13 🔒 | Grading engine v2 knobs | M | your call |
| 14 🔒 | Deploy | S–M | 1 |
| 15 🔒 | Multi-page SEO | L | 12 mostly done, 14 |
| 16 🔒 | Map view | M | your OK |
| 17 🔒 | More mountains | L | per batch |

---

## 5. Appendix — how to re-check the numbers

- Validate data: `cscript //nologo _agentwork\validate_mountains.js data\mountains.js`
- The statistics in §1–§2 came from a throwaway JScript stats pass over the same file (region counts, sample counts, threshold distributions, outlier scans). Any session can recreate it cheaply — ask Claude Code to "re-run the ROADMAP stats pass."
- Batch-API proof: `https://api.open-meteo.com/v1/forecast?latitude=36.4083,36.6872&longitude=137.7128,137.7547&elevation=2700,2600&daily=temperature_2m_max&timezone=Asia%2FTokyo` returns a 2-element JSON array.
- Payload measurements: one mountain, full variable set, 7 days = 9.5 KB raw / 2.2 KB gzipped.
- Agent-batch history, evidence files, and per-entry owner to-dos: `_agentwork/WORKLOG.md`.
