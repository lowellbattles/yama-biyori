# 山日和 YAMABIYORI — Project Handoff

A hiking-planning website for Japan: pick a date and see which mountains are good, or pick a mountain and see its forecast, transit access, huts, routes, and the best season to visit. The core differentiator over てんきとくらす is a **custom, per-mountain, seasonality-aware grading engine**, and the differentiator over Yamap/Yamareco is **curated, scannable transit and hut information** with no registration wall.

This document explains what exists today, the decisions behind it, and exactly how to continue building with Claude Code.

---

## 1. What you have right now

`index.html` is a complete, working single-file prototype. Open it by double-clicking it in any browser (internet connection required — it fetches live forecasts).

It contains five sample mountains chosen to stress-test the grading logic: 燕岳 and 木曽駒ヶ岳 (high alpine, residual-snow sensitive), 谷川岳 (low elevation but Japan's snowiest terrain), 那須岳 (notoriously windy, so its wind thresholds are deliberately more tolerant), and 久住山 (Kyushu, ミヤマキリシマ seasonality showcase).

Two views work today. "日付から探す" ranks all mountains for a chosen day over the next week, each with a grade stamp and the *reasons* behind it. "山から探す" opens a detail page per mountain with the 7-day grade strip, a 12-month seasonality calendar, weekday/weekend transit tables, hut list, and suggested routes.

**Important:** all transit times and some hut details are plausible *samples* marked 「SAMPLE — 要検証」. They demonstrate the format. Verifying them against official operator pages is your first content task (section 6).

## 2. Architecture decisions (and why)

The site is **static**: plain files, no server, no database, no user accounts. Weather is fetched live in the visitor's browser directly from Open-Meteo, which is free, requires no API key, allows browser requests, and accepts an `elevation` parameter so forecasts reflect ridgeline conditions rather than the valley floor. A static site costs ¥0/month to host at any traffic level, never needs security patches, and means your time goes into content, not operations. Every successful resource of this type in Japan (and sites like bergfex in Europe) is content-heavy and tech-light, and this architecture matches that reality.

Mountain data lives in structured files you edit by hand (currently one JS object inside `index.html`; the first Claude Code task splits it into one JSON file per mountain). Open-Meteo's free tier requires visible attribution (CC BY 4.0) — the footer already includes it; keep it.

## 3. The data model

Each mountain is one record with these fields. This schema *is* the product — guard it carefully and improve it deliberately.

```
id, name_ja, name_en, region, prefecture, elevation, hyakumeizan
coords {lat, lon}          ← summit or upper-ridge coordinates
forecast_elevation         ← elevation passed to Open-Meteo (≈ ridgeline)
grading {
  ridgeline                ← elevation used for the freeze check
  wind_caution, wind_danger      (m/s — tune per mountain!)
  precip_caution, precip_danger  (mm/day)
  snow_months [..]         ← months when the freezing-level check applies
  snow_note                ← human explanation shown to users
}
trailheads [ { name, access [ {mode, line, from, duration,
               weekday, weekend, season, url, sample} ] } ]
huts [ {name, elevation, open, reservation, url} ]
routes [ {name, stats, level, note} ]
seasonality { best [months..], notes {month: text} }
```

## 4. How the grading engine works

For each day, the engine starts at A and degrades based on per-mountain thresholds: wind above `wind_caution` → B, above `wind_danger` → C (this is the fix for てんくら's "any wind = C" problem — 那須 tolerates 11 m/s before flagging; 燕岳 flags at 9). Precipitation and fresh snowfall degrade similarly. The seasonality-aware piece: in each mountain's `snow_months`, if the forecast freezing level drops within ~300 m of the ridgeline, the day is capped at B with an explicit 凍結・残雪 warning — so a sunny May day on the 北アルプス correctly warns about snow while the same day on 久住 stays A.

Every grade displays its reasons. That transparency is the trust-builder てんくら lacks; never hide the reasons.

Tuning is expected and ongoing: after each of your own hikes, compare what the site predicted with what you experienced, and adjust that mountain's thresholds. Over time this becomes genuinely better than any generic index.

## 5. Setting up Claude Code

Claude Code runs in your computer's terminal and requires a paid plan (Claude Pro/Max, or API billing) — the free claude.ai plan doesn't include it. Follow the official install guide for your OS at **https://code.claude.com/docs/en/setup** (one command on macOS/Linux; native installer on Windows). Then:

1. Make a project folder, e.g. `~/yamabiyori`, and put `index.html`, `HANDOFF.md`, and `CLAUDE.md` (provided) inside it.
2. Open a terminal in that folder and run `claude`. Log in via the browser prompt when asked.
3. Claude Code automatically reads `CLAUDE.md` — it's the project briefing that tells it what this project is and what the rules are. You talk to it in plain language (Japanese or English both work); it writes, runs, and fixes code, asking permission before changing files.

A comfortable rhythm for a beginner: one task per session, look at the result in your browser, commit with git when something works (ask Claude Code itself: "set up git for this project and commit what we have").

## 6. Roadmap — in order

**Step 1: Split the data out.** Paste this into Claude Code:

> Read HANDOFF.md and index.html. Move each mountain object out of index.html into its own file under data/mountains/ as JSON, and make index.html load them. Keep everything else working exactly the same. Then create data/mountains/_template.json with empty fields and comments explaining each one.

**Step 2: Verify the five sample mountains.** For each, open the official transit operator page (linked in the data), correct the weekday/weekend times and seasons, confirm hut opening dates and reservation links, and remove the `"sample": true` flag once verified. This is also where you'll discover schema gaps (e.g., fare, reservation-required buses, parking info) — add fields to the template as you learn.

**Step 3: Add 10 more mountains you know well.** Personal knowledge first: you'll write better seasonality notes and grading thresholds for mountains you've climbed. Prompt: "Add a new mountain from the template: 〔山名〕. Here is the verified info: …"

**Step 4: Make it a real site.** When the single file gets unwieldy (~15+ mountains), tell Claude Code: "Convert this into a proper static site (suggest a simple structure), with one generated page per mountain for SEO, keeping the date-ranking page as the home page." Deploy free: Netlify (drag-and-drop or git-connected), Vercel, or GitHub Pages — Claude Code can walk you through any of them.

**Step 5: Scale to 150+.** Batch by region (one region's bus operators overlap heavily, so research compounds). Realistic pace: 30–60 minutes per mountain once the template is stable. Consider a visible "最終確認日" (last-verified date) field per mountain — it builds user trust and tells you what's stale.

**Later ideas (don't start yet):** map view of all mountains colored by today's grade; "this weekend's best" automatic feature; lightning-risk flag for summer afternoons (Open-Meteo has CAPE); user-submitted verification reports.

## 7. Data sourcing rules

Transit: always primary sources — the bus operator's own site, the ropeway's own site, JR/private railway timetables. Link to them. Note that alpine bus schedules change at fixed points: late April (GW), July (summer), and the autumn switchover; many stop entirely in winter.

Yamap and Yamareco: use them as a *reader* for route research, but do not scrape them or republish their content — it violates their terms and the content belongs to their users. Course times can come from 山と高原地図 conventions or your own GPS logs.

Weather: Open-Meteo free tier is for non-commercial use with attribution. If the site ever runs ads or grows large, revisit this (they have a cheap paid API tier) — make a note now so it doesn't surprise you later.

Huts: link official sites; record opening dates each spring (they shift year to year with snowpack).

## 8. Seasonal maintenance checklist

Late March–April: verify all bus/ropeway seasonal start dates and GW schedules; hut opening dates announced around now. July: summer timetables and alpine bus extras. September: autumn-foliage period extras (那須・千畳敷 buses add runs and sell out). November: mark winter closures site-wide. After any typhoon or heavy-snow event: trails and roads close — consider a per-mountain "notices" field.

---

Questions you'll likely hit early — "how do I add a field to every mountain file," "the fetch fails on someone's phone," "how do I make the design mine" — are all things Claude Code handles well if you describe the symptom plainly. Build the habit of pasting error messages verbatim. 良い山行を！
