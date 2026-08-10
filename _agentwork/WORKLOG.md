# WORKLOG — agent-driven roadmap work (started 2026-07-13)

Owner approved (in chat, 2026-07-13): run roadmap tasks **in order 3→2→4 of CLAUDE.md numbering** as agent workflows,
"one after the other without stopping": ① official route grades, ② transit/segment verification sweep, ③ 百名山 expansion.
This file lets ANY future session resume without the original conversation.

## Where things stand (updated 2026-07-14)

- ① route grades: **DONE and applied.** 23 routes now `official:true` in data/mountains.js; validated.
  Supervisor rulings on the 2 usage-killed agents: 日光白根山の2ルートと那須「朝日岳・三本槍岳縦走」は
  公表行が周回/往復違い・朝日岳山頂を含むか不明のため official 昇格を見送り（至仏山・那須周回で
  ワークフローが適用したのと同じ基準）。Near-miss rows for the owner: 日光白根山 丸沼〔周〕2/B、
  湯元周回 4/B、那須 三本槍(峠の茶屋往復) 2/B — 実踏でコース形状を確認できたら手動採用の余地あり。
- ② transit sweep: **DONE and applied 2026-07-18.** The stopped run wf_becaaec9-142 was salvaged
  (46 finished agents mapped from its journal) and a hand-authored continuation (run `wf_11058d4f-525`,
  67 agents, all sonnet) finished the rest. Combined verdicts over 42 transit entries + 26 segment routes:
  - **CLEARED — sample removed (13):** t02 t03 t10 t11 t13 t16 t20 t23 t24 t27 t30 t31 t42
    (corrections applied where given; each was independently re-verified by a skeptic agent).
  - **DISPUTED, skeptic-verified correction fields applied, sample KEPT (10):** t04 t06 t07 t12 t14 t17
    t21 t25 t26 t34. Only fields the skeptic itself confirmed were applied; refuted/unverified fields
    were NOT (details in "② leftovers" below).
  - **DISPUTED, no edits (17):** t01 t05 t08 t09 t15 t18 t19 t22 t28 t29 t32 t33 t36 t38 t39 t40 t41.
  - **UNVERIFIABLE (2):** t35 t37 — 神奈中 moved all bus-stop timetables to transfer-cloud.navitime.biz
    (a NAVITIME white-label), which our source rules forbid agents to open. Owner must verify by hand
    (that URL is fine for a human) or phone 神奈中秦野営業所 0463-81-1803.
  - **Segments: 0/26 cleared** (per-leg official times mostly don't exist publicly). Official leg values
    from direct per-leg sources were applied on 12 routes (s02 s04 s05 s07 s10 s13 s14 s16 s23 s24 s25
    s26); route stats totals were adjusted only where they had exactly matched the old leg sums
    (s07 s10 s14 s24 s25 s26). s01/s06 deliberately NOT applied (official values use a slower pace basis
    that contradicts the same source's own totals — owner judgment). All 26 keep sample:true.
  - Validator passes; 55 sample:true remain (29 transit + 26 segments).
  - Full evidence (durable copies in the project, safe from temp cleanup):
    `_agentwork/evidence/transit-sweep-continuation-results.json` (final per-key verdicts),
    `_agentwork/evidence/transit-sweep-firstrun-salvage.json` (46 salvaged first-run agent results),
    `_agentwork/evidence/transit-segment-keymap.json` (t01–t42/s01–s26 → entry mapping),
    `_agentwork/evidence/transit-continuation-script.js` (the workflow script incl. prompts).

## ② leftovers — owner to-dos from skeptic findings (2026-07-18)

High-value items the sweep could not settle (keep sample:true until you decide):
- **t01 燕岳中房線:** A/B運行は曜日では決まらない（5〜7月・10〜11月の土日は多くB運行）。実ダイヤは
  B運行5本 6:40/8:25/11:10/12:55/14:50・A運行6本 5:15/6:40/8:25/11:10/12:55/14:50（＋条件付き4:30臨時）。
  weekday/weekend欄の構成を「A運行日/B運行日」に変えるか要検討。
- **t05 白馬猿倉線:** 2026年はGW(5/2〜5/6)も運行（白馬村公式）→「夏季のみ」は不正確。さらに猿倉駐車場は
  令和8〜9年度の路面復旧工事で閉鎖中（マイカーは八方第3・第5駐車場→タクシー/バス、路上駐車厳禁）。
  登山計画上重要なので追記推奨。
- **t06 一ノ沢タクシー:** 例示時刻「4:30/5:30/6:30」は公式裏付けなし（タクシーは完全予約制・固定ダイヤなし）。
  市公式の通行可能事業者は3社（南安・安曇観光・**あづみの第一交通**）— 1社欠落。
- **t09 木曽駒:** duration が「駒ヶ根駅から」と「菅の台から」で混同されている（公式値と不整合）。
- **t14 北横岳RW:** 運行時間は期間4区分（4/25〜7/17と8/31〜10/25: 平日8:40-16:40/土日祝8:20-17:00、
  7/18〜8/30: 毎日8:00-17:00、10/26〜11/23と12/19〜4/4: 毎日9:00-16:00）。現weekday/weekend欄は
  一部期間の値のみ。
- **t15 那須バス:** 所要は全便きっかり1時間17分（現「約1時間15分」）。
- **t19 谷川岳・土合駅徒歩:** 公式FAQの「徒歩約20分(1.5km)」は地上駅舎起点。地下ホームからは462段の
  階段時間が別途かかる。
- **t28/t29 至仏山:** 鎌田線は尾瀬戸倉まで。鳩待峠へは戸倉で乗換が必須という構成をentryで明示すべき、
  というのがskepticの主指摘。
- **t32 湯元温泉線:** 「約85分」が例示便の実時刻表と矛盾（東武バス公式PDF 2026/4/1〜11/30版で要照合）。
- **t33 男体山:** 公式PDF注記「土・日・祝日および10月・11月、社寺大祭等開催時等は経路変更にて運行」→
  weekend「同左」は不正確の可能性。
- **t34 赤城山:** 時刻・期間はすべて公式一致。ただし「直通あかぎ号」という愛称の公式裏付けが見つからず
  （関越交通の現行呼称を要確認）。
- **t38 大山ケーブル:** 2026年定期検査運休日（6/2〜6/5・6/8〜6/10）の一次ソースPDFが404/別年度で
  裏付け崩れ。大山観光電鉄サイトで要再確認。バス所要も公式は「約30分」（現「約25分」、伊10単独か
  伊10/伊11込みの概算かは不明）。
- **t35/t37 神奈中2件:** 上記の通り NAVITIME 白ラベル問題。人力確認が最短。
- **s01 燕岳合戦尾根:** 燕山荘公式は中房→合戦小屋「4時間ほど」・合戦小屋→燕山荘「標準90分」
  （ゆっくり基準）。登録値3:00/1:00と大差だが基準ペース違いのため未適用。実踏時に判断を。
- **s06 乗鞍:** 肩の小屋公式「畳平から徒歩約50分」vs 登録30分。同上。
- **s15 金峰山大弛峠ルート:** 検証者自身の出典書き起こし値と登録値が4区間×方向のうち3つで不一致のまま
  「ok」判定されていた、とのskeptic指摘。区間値の再照合推奨。
- **s17 瑞牆山:** 北杜市公式の行程表画像（pict_cm_03_A.png）に 瑞牆山荘→富士見平50/40・
  富士見平→天鳥川30/30・天鳥川→山頂 の区間値あり。手動照合可能。
- 他の disputed/partial の詳細は上記 output ファイル参照（キーごとの status/notes/sources 完備）。
- ③ expansion, 北海道 batch: **DONE and applied 2026-07-18.** Run `wf_3834f40e-e77` (30 sonnet agents:
  9 research → 9 independent verify → fix + reverify). 9 mountains appended to data/mountains.js — now
  **32 mountains total**, validator passes: rishiri rausu shari meakan asahidake tomuraushi tokachi
  poroshiri yotei. 3 verified clean outright; residual verifier issues on the rest were applied by the
  main session before assembly (rausu 野営指定地URL差し替え; shari JR「快速」表記廃止＋未確認時刻を
  一般表記化; meakan バス改正年2025に訂正＋staminaを信州式RD再計算で4/5/4→2/3/3; asahidake 石室標高
  1665m; tokachi 6:58便は山加止まりのため例示から除外＋噴火規制の表現を公式確認可能な範囲（62-2火口
  1.5km）に; poroshiri 幌尻山荘/とよぬか山荘の予約受付を平取町公式の文言に). Editorial call:
  旭岳 skill は "B" のまま（verifier は C 検討を提案。地形は赤岳Cより易しく、濃霧時の道迷いリスクは
  note で明示済み — 実踏時に再判断を）。未解決の軽微事項: とよぬか山荘「標高223m」の公式裏付けなし。
  新規9山の transit は全て sample:true（北海道分の検証スイープは将来の②拡張として実施）。
  Source files preserved in `_agentwork/expansion/`. Single-file harness:
  `cscript //nologo _agentwork\validate_single.js _agentwork\expansion\<id>.js`.
  NOTE: the in-app browser preview snapshots data/mountains.js aggressively and kept showing 23 mountains
  after assembly — validator + direct eval confirm 32; open index.html directly to see the real state.
- ③ expansion, 東北 batch: **DONE and applied 2026-07-19.** First attempt died on the owner's usage
  limit (8 research files salvaged from it); finish-up resumed the same run with cached replays + a
  lean pipeline (single verify per mountain at effort:low, fixes by main session — 26 agents, 0 errors).
  14 mountains appended — data/mountains.js now has **46 mountains**, validator passes: iwaki hakkoda
  hachimantai iwate hayachine chokai gassan oasahi zao iide nishiazuma adatara bandai aizukoma.
  9 verified outright; 5 had issues, fixed before assembly: hachimantai 座標を山頂実座標
  (39.9576/140.8541, GSI標高API実測1613.1m) に訂正＋バス着時刻11:15・所要2時間5分; iide 大日杉ルートの
  stamina を公表行どおり8→7・裏取り不能なタクシー運賃/所要を要確認表記に; hayachine シャトル/直行バスの
  分単位時刻・運賃を公式PDF未入手のため要確認表記に（運行日程は公式一致で保持）; oasahi 古寺案内センター
  「2026年度休業」は裏取り不能のため要確認表記に; iwate 焼走り公式URLが404のため八幡平市トップに差し替え。
  official:true routes total is now 35 (やまがた百名山グレーディング rows adopted on exact matches).
  Evidence: `_agentwork/evidence/tohoku-batch-results.json`. Backup:
  `_agentwork/backups/mountains-2026-07-19-46peaks.js`.
  - ③ 東北 owner to-dos: 岩手山・焼走り登山口の正式ページURLを探して差し替え; 早池峰シャトル/直行バスの
    公式時刻表PDFを入手して時刻・運賃を復元; 古寺案内センターの2026年度営業を電話確認 (090-4638-7260)。
    鳥海山の research agent は安全分類器が一時停止した状態で動いた旨の注記が出たが、独立検証エージェントは
    pass を返している（心配なら chokai エントリを一読推奨）。stray file `_agentwork/expansion/pdf_iide`
    (agent の一時PDF) は削除してよい。

- ③ expansion, 上信越・尾瀬 batch: **DONE and applied 2026-07-21** (explicit owner go-ahead in chat).
  Run `wf_d20caec9-403` (task wiqjmy0pq), lean shape per the 2026-07-19 directive: 12 research agents
  (sonnet) → 12 single-verify agents (sonnet, effort:low), fixes by main session. 24 agents, 0 errors,
  ~2.5M subagent tokens. 12 mountains appended — data/mountains.js now has **58 mountains**, validator
  passes: echigokoma hiragatake makihata hiuchigatake amakazari naeba myoko hiuchiyama takatsuma sukai
  hotakayama kusatsushirane. Naming: 火打山=hiuchiyama / 燧ヶ岳=hiuchigatake; 武尊山=hotakayama (穂高岳は
  将来 okuhotaka を使う). 5 verified outright (echigokoma makihata myoko takatsuma kusatsushirane —
  草津白根山は規制中の実態を正直に記載した内容で pass); 7 had issues, fixed by main session before assembly:
  - hiragatake: バス運行期間を公式PDFどおり 6/1〜11/3 土日祝（一部便10/12まで）に訂正（旧記載は3週間早く
    終了扱い）＋10月の seasonality も同旨に; 遊覧船 尾瀬口着 16:00→16:05; 車の所要を「銀山平まで約40分＋
    銀山平から約1時間」に訂正; 奥只見山荘送迎の裏取り不能な具体日付（10/20終了・7月第2週開始）を
    「要確認」表記に。
  - hiuchigatake: 尾瀬御池ロッジのURLが404 → トップページに差し替え。
  - amakazari: 雨飾山荘コースの skill C→B（新潟公表行「雨飾山（雨飾温泉駐車場）3/B」に一致させ
    official:true 維持 — 起点は同一地点と判断）; 起点標高を公表値877mに整合（山荘 elevation 880・
    標高差約1,090m）; 雨飾山荘「通年営業」→「季節営業（例年5月中旬〜11月中旬）」（公式サイト明記）。
  - naeba: 秋山郷線の実在しない津南発17:15例示を削除（公式時刻表照合済の11:25/14:10のみ残す）;
    タクシー所要25分に「公式記載なし・要確認」を付記。
  - hiuchiyama: 経度誤り 138.0381→138.0681（山頂実座標、緯度も36.9228に）; 頸南バス旧サイト
    keinanbus.com（2026/3/31閉鎖）→ https://www.marukei-g.com/pages/234/ に差し替え（時刻7:20/9:40/14:20
    と期間7/11〜10/25は myoko の独立検証で同一内容が公式確認済みのため保持）。
  - sukai: 「国民宿舎かじか荘」→現名称「足尾の宿 かじか（旧・国民宿舎かじか荘）」。
  - hotakayama: 武尊神社周回ルートの grade を official:false に降格（群馬公表行16「剣ヶ峰山→武尊山
    (裏見の滝駐車場) 4/D」は片道表記で周回と厳密一致せず — ①バッチの周回/往復不一致基準を踏襲）。
    値は保守的推定として 4/D を採用。**Near-miss for owner:** 実踏でコース形状が公表行と同一と確認できたら
    手動で official 昇格の余地あり。
  official:true routes now **50** total; sample:true 203 (全新規 access/segments は sample:true).
  Evidence: `_agentwork/evidence/joshinetsu-oze-batch-results.json`. Backup (pre-assembly 46-peak state):
  `_agentwork/backups/mountains-2026-07-21-46peaks-pre-joshinetsu.js`.
  Render check: in-app preview blocks the Open-Meteo fetch on file:// (「予報の取得に失敗」) so the list
  never renders there — page-context eval confirms MOUNTAINS.length=58, all 12 new ids present, no dup ids.
  Owner: open index.html directly in a normal browser to see it live.
  - ③ 上信越・尾瀬 owner to-dos: 平ヶ岳・奥只見山荘のプリンスルート送迎期間を電話確認 (025-795-2338 等
    公式サイト記載の連絡先); 苗場・ゆざわ魚沼タクシーの祓川駐車場までの所要を要確認; 武尊山 near-miss
    (上記) の実踏判断。
  NEXT batch (needs a fresh explicit owner go-ahead per the directive below): 関東・浅間周辺 (3):
  四阿山, 浅間山, 両神山 — reuse this batch's script with a new MOUNTAINS list (公表県: 長野/群馬 —
  浅間山は噴火警戒レベルで登頂可否が変わるので kusatsushirane と同様の正直な規制記載を hint に入れること).

- ③ expansion, 関東・浅間周辺 batch: **DONE and applied 2026-07-21** (explicit owner go-ahead in chat).
  Run `wf_5aec6a09-9c4` (task w5pa2w9xj), lean shape: 3 research (sonnet) → 3 single-verify (sonnet,
  effort:low), fixes by main session. 6 agents, 0 errors, ~620k subagent tokens. 3 mountains appended —
  data/mountains.js now has **61 mountains**, validator passes: azumaya asama ryokami.
  azumaya verified outright (信州グレーディング菅平牧場ルート official 採用; パルコール嬬恋ゴンドラの
  2026グリーンシーズン運行を公式確認). asama/ryokami fixed by main session before assembly:
  - asama: 高峰高原線の例示時刻を現行ダイヤに訂正（8:25/13:22 → 佐久平駅発 8:40/14:00、JRバス関東
    2026/4/1改正デジタル時刻表で検証者確認）; 火山館 open に公式記載の月・火曜定休を反映; 浅間山荘送迎の
    出典未確認な時間帯（14:00〜17:00）を「要問い合わせ」表記に。浅間山の噴火警戒レベル別入山範囲の記載は
    検証者が気象庁サイトと照合して pass（ルートはすべて official:false — 信州表に前掛山ルートの完全一致行
    なしの判断）。
  - ryokami: 表参道 note の事故統計を検証者実確認値に訂正（滑落4件→滑落2件・転倒2件、小鹿野町観光協会
    山岳情報・2026年7月参照と明記）。
  Evidence: `_agentwork/evidence/kanto-asama-batch-results.json`. Backup (pre-assembly 58-peak state):
  `_agentwork/backups/mountains-2026-07-21-58peaks-pre-kanto-asama.js`.
  NOTE: in-app preview again served a stale 58-peak snapshot of data/mountains.js after assembly —
  validator + on-disk grep confirm 61 (this preview caching quirk is now thrice-confirmed; don't trust it).
  - ③ 関東・浅間 owner to-dos: 浅間山荘の送迎対応時間を電話確認 (0267-22-0959); 両神山の事故統計は
    観光協会ページ更新ごとに変わるため実踏前に再読を。
  NEXT batch (needs a fresh explicit owner go-ahead per the directive below): 北アルプス・御嶽 (13):
  五竜岳, 鹿島槍ヶ岳, 剱岳, 立山, 薬師岳, 黒部五郎岳, 水晶岳, 鷲羽岳, 槍ヶ岳, 穂高岳(奥穂高岳→id
  okuhotaka), 笠ヶ岳, 焼岳, 御嶽山 — the biggest batch; consider splitting 立山剱/裏銀座/槍穂 into two
  runs if usage is a concern. 公表県: 長野/富山/岐阜 (富山県の公表有無は launch 時に要確認). 焼岳・御嶽山
  are active volcanoes (御嶽山は2014年噴火の教訓から規制記載を特に丁寧に).

- ③ expansion, 北アルプス・御嶽 batch: **DONE and applied 2026-07-23** (explicit owner go-ahead in chat:
  "launch the 北アルプス・御嶽 in one run"). Run `wf_95c17229-e76` (task wcl1wjaa7), lean shape: 13 research
  (sonnet) → 13 single-verify (sonnet, effort:low), fixes by main session. 26 agents, 0 errors, ~2.46M
  subagent tokens. 13 mountains appended — data/mountains.js now has **74 mountains**, validator passes:
  goryu kashimayari tsurugi tateyama yakushi kurobegoro suisho washiba yari okuhotaka kasa yake ontake
  (穂高岳=okuhotaka per the 2026-07-21 naming note). 公表県 confirmed at launch: 長野・岐阜・**富山**
  (富山県は92ルート表を公表 — pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/).
  Script: `...\14cd16ba-1434-4e9a-86d6-b9e6d9fde0e7\workflows\scripts\hyakumeizan-kitaalps-ontake-wf_95c17229-e76.js`
  Journal: `...\14cd16ba-1434-4e9a-86d6-b9e6d9fde0e7\subagents\workflows\wf_95c17229-e76\journal.jsonl`
  2 verified outright (goryu washiba); 11 flagged — main session re-verified every flag against primary
  sources before editing. Verifier flags that turned out to be FALSE (kept as researched, no edit):
  yakushi/kurobegoro 太郎平小屋 6/6〜10/18・薬師沢小屋 7/1〜10/8 (ltaro.com/news/post-406 lists them);
  有峰林道 2026年6/1開通＋料金 (県プレスリリース 08ariminerindo_open202606.html); yari 飛騨沢 7C
  official:true (百名山一覧表 row 114「槍ヶ岳（新穂高）＜飛騨乗越＞7 C 岐阜県」に完全一致 — verifier が
  別行を誤読); yake「2026年3月4日レベル1」(気象庁 310 ページで令和8年3月4日14:00の警報解除を確認);
  kasa の 6:00 発特急便 7/18〜10/12 と中尾高原口着時刻・yake の中尾焼岳登山口バス時刻 (濃飛バス
  202604_hirayu_shinhotaka-2.pdf 実読で全て実在確認); 烏帽子小屋 7/11〜9/30・tel 050-3171-2604
  (reserve.html に記載、曜日が2026年と一致)。Fixes applied by main session:
  - kashimayari: 八峰キレット stats 標高差を公表行どおり 登り2,140m・下り2,580m に; タクシー料金
    「約6,500円（観光協会案内）」に。
  - tsurugi: 立山室堂山荘の「重要文化財」記述を別棟（旧室堂小屋）と区別する表現に。
  - tateyama: ケーブルカー「20分間隔」削除（6:40/7:00のみ例示・要確認化）; 弥陀ヶ原=常時観測火山
    （レベル1・2019/5/30以降継続、気象庁309で確認）と地獄谷火山ガスの一文を snow_note に追加。
  - yakushi: 薬師岳山荘 open を「例年7月上旬〜10月上旬・要確認」に（公式サイト2026年日程未掲載を実確認）;
    縦走ルート name/note に公表行対応の「龍王岳」を明記。
  - kurobegoro: 黒部五郎小舎 080-1588-1606・双六小屋 090-3480-0434（現地直通）を事務所番号に併記;
    特急乗継時刻を要確認化。
  - suisho: 水晶小屋予約を公式どおり「山小屋直通7:00〜16:00またはメール」に; 折立標高 1,870→1,350m
    （標高差 約1,640m に再計算 — verifier も見逃した実誤り）。
  - yari: 表銀座 stats 距離約25km→約37.5km（百名山表 row 110 の CT 25.3h を距離と取り違えた誤記 —
    これも verifier 見逃し、本セッションが表実読で発見）。
  - okuhotaka: 松本→上高地の到着例 9:05等→8:15/9:45/11:10/13:55（アルピコPDFの verifier 確認値）、
    所要も約1時間45分に。
  - kasa: elevation 2898→**2897**（GSI 1003山 2026-03-31版 CSV 実測 — グレーディング表は旧値2,898のまま）;
    「季節急行」→公式表記「特急」便に。
  - yake: 中の湯温泉旅館「通年営業」→2026年は4/17〜11/15の営業案内（公式サイト、冬期要確認）。
  - ontake: 両ルートの skill **A→B**（百名山表 rows 150/151 は 3 B — verifier が予算切れで未照合だった
    重要修正）; ロープウェイ山麓駅1,570m等の未確認スペック削除; 王滝口 note に「奥の院方面・お鉢めぐり
    は引き続き入山禁止」を追加（王滝村公式）。規制記載は本セッションが気象庁（レベル1・2025/5/20発表）・
    木曽町（黒沢口 7/1 8:00〜10/14 正午）・王滝村（王滝口 7/10 9:00〜10/14 正午）で全数照合済み。
  official:true routes now **78** total; sample:true 261; 百名山 69/100. Evidence:
  `_agentwork/evidence/kitaalps-ontake-batch-results.json`. Backup (pre-assembly 61-peak state):
  `_agentwork/backups/mountains-2026-07-23-61peaks-pre-kitaalps.js`.
  - ③ 北アルプス・御嶽 owner to-dos: 薬師岳山荘の2026年営業期間を電話確認 (076-451-9222); 御岳
    ロープウェイ駅標高（1,570/2,150m）は公式ページに明記なし — 現地掲示等で確認できたら追記;
    立山ケーブルカーの全発車時刻は alpen-route.com の時刻表PDFから転記可能（今回は始発2本のみ例示）。
  NEXT batch (needs a fresh explicit owner go-ahead per the directive below): 中部その他 (6):
  美ヶ原, 霧ヶ峰, 甲武信ヶ岳, 富士山, 丹沢山, 天城山 — 公表県: 長野/山梨/静岡（富士山は入山規制・
  通行予約制の年度更新に注意、丹沢は神奈川で未公表→official:false）。

- ③ expansion, 中部その他 batch: **DONE and applied 2026-07-23** (explicit owner go-ahead in chat, same
  conversation as the 北アルプス batch). Run `wf_0b8877ab-449` (task wwqna553k), lean shape: 6 research
  (sonnet) → 6 single-verify (sonnet, effort:low), fixes by main session. 12 agents, 0 errors, ~1.1M
  subagent tokens. 6 mountains appended — data/mountains.js now has **80 mountains**, validator passes:
  utsukushigahara kirigamine kobushi fuji tanzawa amagi. 3 verified outright (kirigamine tanzawa amagi —
  丹沢は神奈中時刻を要確認扱いで pass、天城山は huts なしで pass)。3 flagged, resolved by main session:
  - utsukushigahara: verifier「美ヶ原は信州グレーディング対象外なのに official:true は捏造」→ **false
    alarm**: 行は10県2山域の日本百名山ルート一覧表 No.123 に実在（本セッションが同PDFを実読済み —
    名称・8.3km・4.4h・2/B・三城牧場発着まで完全一致）。verifier は信州本表（美ヶ原・乗鞍除外）だけを
    見ていた。fix: src/url を百名山合同表（hyakumeizangradingroutelist.pdf）に差し替え、official:true 維持。
  - kobushi: verifier の2指摘は**本物**（表の「合計コースタイム」列を距離と誤読 — 前バッチ yari 表銀座と
    同型）。徳ちゃん新道 stats→往復14.8km・累積1,560m・CT10.3h に; 大弛峠ルートは名称を「往復」に改め
    19.7km・CT12.0h に（発着とも大弛峠で公表行と一致するため official:true 維持）。
  - fuji: 5ルートの stamina/skill（5B/6B/7B/6B/5B）は百名山合同表 No.138〜142 と完全一致（本セッションが
    同PDF実読で確認済み — verifier は山梨本表の別番号 No.104/105 と混同、静岡本表は画像PDFで未確認どまり）。
    fix: 全5ルートの src を「◯◯県 山のグレーディング（日本百名山ルート一覧表 No.xxx）」・url を合同表PDF
    に統一（番号・値・URLが一つの文書で照合可能に）。2026年の通行予約・入山料・開山期間は fujisan-climb.jp
    の2026年規制ページ＋両県公式を research/verify 両者が確認済み。
  official:true routes now **89** total; sample:true 285; 百名山 **75/100**. Evidence:
  `_agentwork/evidence/chubu-sonota-batch-results.json`. Backup (pre-assembly 74-peak state):
  `_agentwork/backups/mountains-2026-07-23-74peaks-pre-chubu.js`.
  - ③ 中部その他 owner to-dos: 丹沢の神奈中バス時刻は NAVITIME 白ラベルのため全て要確認のまま（t35/t37
    と同じく人力確認が最短）; 静岡県本表（画像PDF）の富士山3ルート行番号は未照合 — 値は合同表で確認済み
    なので実害なし。
  NEXT batch (needs a fresh explicit owner go-ahead per the directive below): 中央・南アルプス (12):
  空木岳, 恵那山, 甲斐駒ヶ岳, 仙丈ヶ岳, 鳳凰山, 北岳, 間ノ岳, 塩見岳, 悪沢岳(荒川東岳), 赤石岳, 聖岳,
  光岳 — 公表県: 長野/山梨/静岡。南アルプス南部（悪沢・赤石・聖・光）は椹島・畑薙へのアクセスが特殊
  （東海フォレスト送迎バス＝小屋宿泊者限定、畑薙夏季臨時駐車場）なので hint に明記のこと。デカいので
  北アルプス同様2分割も検討。

- ③ expansion, 中央・南アルプス batch: **DONE and applied 2026-07-23** (explicit owner go-ahead in chat:
  "launch the 中央・南アルプス batch in one run"). Run `wf_78c18889-929` (task wmbuptqvh), lean shape:
  12 research (sonnet) → 12 single-verify (sonnet, effort:low), fixes by main session. 24 agents, 0 errors,
  ~2.65M subagent tokens. 12 mountains appended — data/mountains.js now has **92 mountains**, validator
  passes: utsugi ena kaikoma senjo hoo kitadake ainodake shiomi warusawa akaishi hijiri tekari.
  The prompt upgrades worked: **zero grading-row disputes this batch** (hints carried main-session-verified
  一覧表 row numbers and both agent roles read the PDF themselves) and the 東海フォレスト宿泊者限定バス・
  芝沢ゲート通行止め（便ヶ島より先 西沢渡方面は災害復旧で当分通行止め、2026-07-08 遠山郷観光協会時点）
  came back correctly researched. 4 verified outright (ena kitadake ainodake warusawa); 8 flagged with
  small, official-source-backed corrections, all applied by main session:
  - senjo+kaikoma: 南アルプス林道バス戸台パーク発時刻がどちらも5〜7分ずれの実在しない時刻
    （8:05/10:05/12:10, 6:30, 5:45）→ senjo の verifier が伊那市公式で取った実ダイヤ
    **5:52(7/10〜10/12)/6:37(土休日・肩シーズン)/8:12/10:12/12:17/14:20** に両ファイルとも統一。
  - senjo: 大平山荘 tel を公式サイト記載の 0265-78-3761 のみに（090番号は出典不明のため削除）。
  - kaikoma: 尾白川渓谷タクシー3社を北杜市観光協会の実記載（小淵沢・須玉三共・北杜）に訂正。
  - utsugi: バス欄の自己矛盾（「通年同一ダイヤ」vs 夏冬別ダイヤ）と裏取り不能な例示時刻を削除し
    要確認化。
  - hoo: 南御室小屋・薬師岳小屋の常駐営業開始「6/13」は公式に存在しない日付 → 「6月上旬予定・
    ヘリ荷揚げ次第・要確認」に（seasonality も同旨）。
  - shiomi: 塩見小屋 営業終了 10/11→**10/12**（公式）。
  - akaishi: 千代田タクシー運賃 約6,000円→公式の**通常便8,500円/椹島便11,000円**（片道/名）。
  - hijiri: しずてつ登山線の着発 13:25/14:25→**13:20/14:30**・「畑薙臨時駐車場」表記に; 聖光小屋
    開始日 4/26→**4/24**（公式）。
  - tekari: 光岳小屋・茶臼小屋の開始日曜日表記 7/11(木)→**7/11(土)**（2026年の実曜日・公式一致）。
  official:true routes now **120** total; sample:true 329; 百名山 **87/100**. Evidence:
  `_agentwork/evidence/chuo-minami-alps-batch-results.json`. Backup (pre-assembly 80-peak state):
  `_agentwork/backups/mountains-2026-07-23-80peaks-pre-minamialps.js`.
  - ③ 中央・南アルプス owner to-dos: 南アルプス林道バスの時刻は伊那市公式ページ由来だが PDF 本体
    での最終照合を推奨（kaikoma の verifier は WebFetch では取れなかった）; 芝沢ゲート〜便ヶ島の
    通行止めは変動が速いので入山前に飯田市公式で再確認; 空木岳の駒ヶ根駅発バス時刻は要確認のまま
    （中央アルプス観光の2026時刻表PDFから転記可能）。
  NEXT batch — the final one (needs a fresh explicit owner go-ahead per the directive below):
  北陸・近畿・中四国 (8): 白山, 荒島岳, 伊吹山, 大台ヶ原山, 大峰山(八経ヶ岳), 大山(伯耆・id は
  既存の丹沢 oyama と衝突するので **daisen** を使う), 剣山, 石鎚山 ＋ 九州 (5): 祖母山, 阿蘇山(高岳),
  霧島山(韓国岳), 開聞岳, 宮之浦岳 — 合わせて13座で百名山100/100完成。公表県: 岐阜（白山の一部）と
  石鎚山系・祖母傾大崩山系の山域表（百名山一覧表に石鎚山系 No.189〜200・祖母 No.201〜210 の行あり、
  伯耆大山・剣山・九州各山は世界の行なし→ほぼ official:false）。宮之浦岳は屋久島の入山協力金・
  荒川登山バス、阿蘇・霧島は活火山規制（気象庁）を hint に。

- ③ expansion, FINAL batch 北陸・近畿・中四国＋九州: **DONE and applied 2026-07-24 — 百名山 100/100 完成.**
  (explicit owner go-ahead in chat: "launch the final batch"). Run `wf_b3ae488a-70c` (task wyjv5fvi7),
  lean shape: 13 research (sonnet) → 13 single-verify (sonnet, effort:low), fixes by main session.
  26 agents, 0 errors, ~2.15M subagent tokens. 13 mountains appended — data/mountains.js now has
  **105 mountains**, validator passes: hakusan arashima ibuki odaigahara omine daisen tsurugisan
  ishizuchi sobo aso kirishima kaimon miyanoura (id notes: 伯耆大山=daisen vs 丹沢 oyama; 剣山=tsurugisan
  vs 剱岳 tsurugi). 4 verified outright (daisen tsurugisan **aso**[火山レベル記載ごと] miyanoura[協力金・
  荒川バスごと]); 9 flagged, resolved by main session:
  - Volcano flags both resolved AS-CORRECT by main-session primary-source checks: kirishima の
    新燃岳レベル2・他レベル1 は気象庁 activity_info 一覧で確認（verifier は JS ページ不達で未確認どまり）;
    kaimon の「噴火警戒レベル運用対象外」は気象庁 keikailevel.html（鹿児島は桜島・薩摩硫黄島・
    口永良部島・諏訪之瀬島のみ）で確認 — 出典URLを note に追記。verifier の Wikipedia 由来の疑義は誤り。
  - hakusan: 登山バス終了日 10/13→**10/12**（北陸鉄道公式カレンダー）; 南竜山荘予約 9:00〜17:00
    （13-14時除く）に; 松任便・シャトルの裏取り不能な時刻を要確認化。
  - arashima: 大野IC経由の所要（出典なし）→大野市観光サイトの実案内（福井IC約1:10/白鳥IC約50分等）に;
    JR越美北線の便接続ペアが未確認→verifier確認済みの福井駅発 9:22/12:48/14:54 のみ残し接続は要確認化。
  - ibuki: **伊吹山登山バス（近江鉄道、米原駅⇄スカイテラス、2026は7/18〜8/31毎日＋9月土日祝）を
    access に追加** — 表登山道全面通行禁止下で唯一の公共交通、verifier が公式ページ付きで発見した欠落。
  - odaigahara: 桃の木山の家 tel をバス予約番号→公式 **0597-32-2052** に; 大杉峡谷バスは2026年度
    3期制（4/25〜5/30・6/6〜9/12・9/19〜11/21）に訂正、小屋 open も一般化。
  - omine: 死リンク（pref.nara.jp 全域が lg.jp へリダイレクト）→天川村公式に差替え; R309冬期通行止めの
    断定日時を「令和6年度実績＋要確認」表現に; タクシー15,450円（公式料金表に記載なし）→要見積りに;
    奈良交通バスの未確認時刻列→便数概要＋要確認に。
  - ishizuchi: ロープウェイ定期点検「数日」→**2026年は4/6〜4/24の約3週間**（公式）。
  - sobo: 神原バス所要 35→**約30分**（公式）; 尾平コミュニティバスの裏取り不能時刻→要確認化;
    九合目避難小屋の url（内容の裏付けなし）→ "" に。
  - kaimon: 駐車場「記帳が必要」（出典なし）を削除。
  official:true routes now **129** total; sample:true 403; **百名山 100/100**（総数105山 = 百名山100
  ＋非百名山5: tateshina kitayoko daibosatsu akagi tsukuba）。Evidence:
  `_agentwork/evidence/final-west-kyushu-batch-results.json`. Backup (pre-assembly 92-peak state):
  `_agentwork/backups/mountains-2026-07-24-92peaks-pre-final.js`.
  - ③ FINAL batch owner to-dos: 白山シャトル・松任便の時刻（map.ishikawa.jp と県運行カレンダーPDFで）;
    奈良交通 下市口〜天川川合の時刻（navi.narakotsu.co.jp 検索 or 天川村PDF）; 千石タクシーの
    行者還トンネル西口運賃を電話確認; 豊後大野市コミュニティバス長谷川線の現行時刻表所在の確認;
    JR越美北線の便別接続（福井駅→勝原駅の同一列車確認）。
  **③ 百名山 expansion: ALL BATCHES COMPLETE.** 残る expansion は CLAUDE.md task 4 後段の
  「other famous/notable peaks」（新規バッチはオーナーの明示指示があるまで launch しない）。

- ④ expansion (二百・三百名山), 山梨・富士周辺・東京近郊 batch: **DONE and applied 2026-07-27**
  (explicit owner go-ahead in chat: owner picked the 5 from a suggestion list and said "Let's do the 5").
  Run `wf_8ce5bea8-6c8` (task w22bfsopt), lean shape: 5 research (sonnet) → 5 single-verify (sonnet,
  effort:low), fixes by main session. 10 agents, 0 errors, ~1.03M subagent tokens. 5 mountains appended —
  data/mountains.js now has **110 mountains**, validator passes: kayagatake kentoku mitsutoge kintoki otake
  (茅ヶ岳/乾徳山/三ツ峠山/金時山/大岳山 — 全て hyakumeizan:false).
  Prompt upgrade again paid off: main session pre-read BOTH grading PDFs before launch (山梨本表123ルート
  grading.pdf + 静岡本表82ルート shizuoka_grading02.pdf — 静岡の画像PDFも本セッションのReadで実読できた)
  and put verified row numbers in the hints → **zero grading-row disputes**. Official rows adopted (+6,
  official:true now **135**): 茅ヶ岳 No.28 深田公園 2/B・No.29 観音峠 2/C; 乾徳山 No.52 徳和〈銀晶水〉3/C;
  三ツ峠山 No.114 金ヶ窪沢登山口 2/A; 金時山(静岡) No.22 乙女峠 2/A・No.21 足柄駅 3/A。東京(大岳山)と
  神奈川側(金時山 公時神社ルート)は未公表 → official:false。
  3 verified outright (kayagatake kentoku mitsutoge); 2 flagged, resolved by main session:
  - kintoki: 小田急ハイウェイバスの season「全便要予約」が公式PDF注記と逆（東名小山〜箱根山のホテル間は
    予約不可・車内精算）→ 訂正。時刻例は verifier が2026/4/1改正PDFと完全一致を確認済み。
  - otake: ① 西東京バス御10/御11の url がポケット時刻表（当該系統非掲載）→ ハイキング時刻表PDF
    (2026/4/1改正・奥多摩御岳山エリア) に差し替え。② 御岳山ケーブルの例示時刻を本セッションが公式画像
    時刻表（2023/3/18改正・現行掲載）の実読で全数確認 — 例示4本×平日/土休日は全て実在、裏取り不能だった
    「20分間隔」等の間隔記述のみ削除・訂正。
  sample:true now 427 (+24, 全新規 access/segments)。Evidence:
  `_agentwork/evidence/yamanashi-fuji-tokyo-batch-results.json`. Backup (pre-assembly 105-peak state):
  `_agentwork/backups/mountains-2026-07-27-105peaks-pre-yamanashi-fuji-tokyo.js`.
  - ④ this batch owner to-dos: 西東京バス御10/御11（御嶽駅⇔ケーブル下）の具体時刻はハイキング時刻表PDF
    から転記可能（entry は要確認のまま）; 金時山の箱根登山バス（小田原→仙石方面）と箱根湯本乗継の時刻は
    要確認のまま; 茅ヶ岳みずがき田園バスの2026運行日はresearcherが韮崎市公式で確認済みだが実踏前に再確認
    推奨（季節運行）。
  Candidate NEXT batches (each needs a fresh explicit owner go-ahead): 東北・北海道の紅葉と花
  (栗駒山・秋田駒ヶ岳・森吉山・樽前山), 上信越 (平標山・仙ノ倉山, 八海山, 戸隠山, 飯縄山),
  北アルプス二百名山 (大天井岳・針ノ木岳・霞沢岳), 西日本 (武奈ヶ岳・由布岳ほか) — suggestion list
  from the 2026-07-27 conversation.

**OWNER DIRECTIVE 2026-07-19 (supersedes "one after the other without stopping" for ③):** token burn
is too high — finish the 東北 batch, apply it, then STOP. Do NOT launch 上信越・尾瀬 or any later batch
without an explicit go-ahead from the owner in that conversation. Run future approved work lean:
resume-with-cache, single verify at effort:low, main-session fixes.

## ②-EXPANSION transit sweep — STOPPED BY OWNER 2026-08-03 (token burn), partial results salvageable

Owner approved starting ROADMAP Task 12 with "as many agents as you would like", then stopped both
runs within the hour ("insane amount of tokens"). **Directive reaffirmed and strengthened: before any
future multi-agent launch, state the agent count + rough token estimate in chat and get a yes on the
number; pilot ~10 items first.** Do not relaunch these sweeps without that.

State when stopped (checker/skeptic per-entry design, model sonnet, keys = `<id>/t<n>a<n>`):
- 北アルプス・御嶽 run `wf_abb71399-d23` (task w6os4e3pw): 14 of 47 checkers finished, journal intact.
- 中央・南アルプス run `wf_e3a531f8-c7a` (task wxw0hpy97): 4 of 41 checkers finished, journal intact.
- Journals: `...\8714fa38-ee23-436c-b9b3-c76c16c6fa75\subagents\workflows\<runId>\journal.jsonl`
- Scripts (args-stringified guard included): `...\8714fa38-...\workflows\scripts\transit-sweep-kitaalps-wf_abb71399-d23.js`
  and `transit-sweep-chuo-minami-wf_e3a531f8-c7a.js`
- Entry lists (all 301 unverified expansion entries, per area): scratchpad `sweep-<slug>.json` files;
  regenerate anytime with `_agentwork`-style export (script pattern in the 2026-08-03 session) since
  the scratchpad is session-scoped and may be cleaned.
- To resume LEAN later (owner go-ahead + cost estimate first): `Workflow({scriptPath, resumeFromRunId,
  args: <same>})` — the 18 finished checkers replay from cache free; consider effort:'low' for the
  remainder (note: changing agent opts invalidates their cache keys — apply the 2026-07-14 rule #1
  trade-off consciously).
- ~~No results have been applied to data/mountains.js; no `verified:` dates were set by these runs.~~
  → superseded by the 2026-08-10 salvage below.

### SALVAGE APPLIED 2026-08-10 (zero agents launched)

The 18 finished checker results were read from the two journals and **the main session ran the skeptic
pass itself** (operator sites via WebFetch, timetable PDF/PNGs via curl+Read, 富山地鉄の時刻表JSONは
サイト自身が使う POST エンドポイントで再取得), then applied everything to data/mountains.js. Validator
passes (110 mountains). Result: **15 entries cleared → `verified:"2026-08-10"`**, 3 keep `sample:true`
with confirmed corrections applied where available:
- Cleared: tsurugi t0a0/t0a1/t0a2, tateyama t0a0/t0a3, goryu t0a0/t0a1, kashimayari t0a0/t1a0/t1a1,
  yakushi t0a1, kurobegoro t0a0/t0a1, utsugi t0a0, kaikoma t0a2. Notable content fixes that shipped:
  五竜シャトル 所要15分→**5分**（運営者2025年PDFの明記をarchive経由で確認・2026年PDFは所要記載なし）;
  立山トンネル**トロリーバス→電気バス**（2024-11-30引退）; 大町市民バス 平（源汲方面）コースの実時刻
  8:27/11:34/14:34/16:52＋鹿島−爺ガ岳スキー場間の電話予約制; 広河原〜北沢峠は**「令和8年度中の復旧
  見込みなし」と山梨県が明言**（徒歩も不可）; 五竜テレキャビンの始発3段構造（8:15/7:30/7:00・お盆は
  毎日7:00）; 立山線の実在時刻例＋休日の通年列車は8:20→14:00に直通空白（季節列車が4/15〜11/30は埋める）.
- Skeptic value demonstrated — 3 checker errors caught and fixed before applying: tateyama/t0a0 の
  休日「9〜14時台直通なし」は通年列車のみの話で在季は誤り（▲季節列車9:10/11:00/12:00/13:00が立山直通、
  JSON再取得で確認）; utsugi/t0a0 の season「5:00始発〜16:00最終」は☆繁忙日限定を常時と誤読（基本は
  8:00/7:00/6:00始発・11/9以降最終15:00 — R8公式PDF実読で書き直し）; goryu/t0a1 の所要「約8分」の
  出典ページ誤り（カレンダーページに記載なし → /shokubutsuen/ トップの「約8分間の空中散歩」で確認）.
- Kept sample (owner to-dos): tsurugi/t1a0（伊折ゲート冬期閉鎖入りの日時 — 一次ページ404、電話確認が最短。
  2026年開通4/28 16時は上市町公式で確認済み・season反映済み）; utsugi/t0a1（駒ヶ根IC→スキー場駐車場の
  分数は公式記載なし。菅の台まで約3分は公式確認・反映済み）; ena/t2a0（ウェストン公園前→前宮登山口の
  徒歩約30分が公式裏付けなし）。
- Evidence: `_agentwork/evidence/transit-sweep-salvage-2026-08-10.json`. The per-area entry exports
  (checker input files, all 14 areas) are now durable at `_agentwork/evidence/sweep-exports/sweep-*.json`
  — future batches should pass these as the workflow `file` arg instead of a session scratchpad path.
- Access-entry totals after salvage: **315 sample + 28 verified = 343**. Remaining unchecked expansion
  entries: 283 (北ア・御嶽 33, 中央・南ア 37, 他エリア 213).
- Recommended next shape (needs owner yes per the directive): fresh checker-only runs over the remaining
  keys (the old runs' cache value was exactly the 18 results now applied; resuming them would launch the
  12 never-run skeptic agents for already-applied clears — waste). Single checker per entry on sonnet,
  main session = skeptic + fixer, exactly like this salvage. Pilot ~10 entries first with a stated
  token estimate.

### PILOT BATCH RUN + APPLIED 2026-08-10 (owner-approved "Pilot 10")

Run `wf_46e5aa38-4c5`: 10 checkers (sonnet, effort:low, **checker-only** — no skeptic agents), keys
chosen to complete the salvage's partial mountains + start 裏銀座: tateyama t0a1/t0a2, yakushi t0a0/t0a2,
kurobegoro t1a0/t1a1, suisho t0a0/t0a1/t1a0, washiba t0a0. **Cost measured: 588,602 subagent tokens
(~59k/entry), 2m05s, 0 errors.** Main session skeptic-verified everything against primary sources
(alpen-route 2026 PDF, 濃飛 平湯・新穂高線 PDF, uraginzabus.com の時刻表画像を実読, 県・事業者ページ).
**9 of 10 cleared → `verified:"2026-08-10"`**; yakushi/t0a0 keeps sample (折立駐車場「無料・約100台」が
公式裏付けなし — 非公式には約300台説もあり、要現地/公式確認。それ以外の全フィールドは確認済みなので
この1点の解決で即clear可)。Content fixes shipped:
- **裏銀座登山バスは七倉登山口止まり**（高瀬ダムへは特定タクシー約15分 or 徒歩約1時間50分）— suisho/t0a0
  は実時刻も画像実読で確定（信濃大町駅発 5:15/7:15/12:20/14:20・帰路 七倉発 6:15/9:30/13:15/15:05、
  1日4往復）。washiba/t1a0（同じバスの鷲羽岳側コピー）は未検証のまま — 次バッチで同じ証拠を適用のこと。
- **高山→新穂高の所要「約45分」は誤り**（平湯からの数字と混同）→ 実態は約1時間30分〜2時間
  （特急6:00発は直通1時間32分）。kurobegoro/t1a0・washiba/t0a0 とも kasa と同一表現に統一。
  ※checker は濃飛PDFの上下段（高山→平湯／平湯→新穂高）を同一列で誤連結して52分等と読んだ —
  このPDFの列は乗継チェーンではない。将来の checker prompt に注意書き推奨。
- **松本〜新穂高線は通年運行・予約制**（「季節限定運行」は誤り — 14:55発の1便だけが期間限定）、
  所要は公式の約2時間20分。新穂高温泉・新穂高RWを直行で経由することを停留所一覧で確認。
- 有峰線の「積雪期は減便」は濃飛…もとい富山地鉄ではなく**新穂高線側の話**: 濃飛PDFの運転日注記
  （4/1〜11/30限定の便）で実証。suisho/t1a0 の season は確定日付（7/11〜9/27の2段構成）に更新。
- Checker quality: 3/10 needed skeptic intervention (列誤連結・過度に狭い修正案・偶然範囲内のpass)。
  checker-only ＋ main-session skeptic の形は維持すべき。
Evidence: `_agentwork/evidence/transit-pilot-kitaalps-2026-08-10.json`.
**Running totals after 2026-08-10 (salvage + pilot): 306 sample + 37 verified of 343 access entries.**
Remaining unchecked expansion entries: 273 (北ア・御嶽 23, 中央・南ア 37, 他エリア 213). Measured cost
basis for future asks: **~59k tokens/entry** → 北ア残り23 ≈ 1.4M, 中央・南ア 37 ≈ 2.2M.

## COLD-RESUME instructions for the 東北 batch (any future session, no prior context needed)

Research agents Write finished mountains directly to `_agentwork/expansion/<id>.js`, so partial progress
survives any crash. To finish the batch from scratch:
1. Check which of the 14 ids above have a file in `_agentwork/expansion/` AND pass
   `cscript //nologo _agentwork\validate_single.js _agentwork\expansion\<id>.js`.
2. Read the run journal for verify/fix verdicts:
   `C:\Users\lowel\.claude\projects\C--Users-lowel-Desktop-Projects-yama-biyori\6ffcf20d-bbe8-481b-bac7-fd66e707f416\subagents\workflows\wf_73cee5df-17f\journal.jsonl`
   (each line {"type":"result",...}; map results to mountains via the agent transcript's first user
   message, same salvage technique as ② — see evidence/transit-continuation-script.js session notes).
   Final output, if the run completed: `...\6ffcf20d-...\tasks\w062z1ovc.output`
   (copy it to `_agentwork/evidence/tohoku-batch-results.json`).
3. For mountains with a file but NO completed verify: run a verify agent (prompt pattern is in the ③
   script: `...\6ffcf20d-...\workflows\scripts\hyakumeizan-tohoku-wf_73cee5df-17f.js`, also mirrored by
   the 北海道 script). For missing mountains: run research agents for just those ids. Fix residual
   verifier issues in the files directly (as done for 北海道 — see the ③ 北海道 entry above).
4. Assemble: append the 14 objects (in the id order listed above) to data/mountains.js before the final
   `];`, separated by commas — the 北海道 assembly used: replace last `}\n];` with `},\n<joined>\n];`.
5. Run `cscript //nologo _agentwork\validate_mountains.js data\mountains.js` (expect 46 mountains),
   open index.html to spot-check, update this log, then launch the next batch: 上信越・尾瀬 (12),
   region list in "Workflow ③" section below. Reuse the 東北 script with a new MOUNTAINS list
   (公表県 addition also applies: 新潟/群馬/栃木/長野).

Rollback safety: `_agentwork/backups/mountains-2026-07-18-32peaks.js` is a byte-copy of data/mountains.js
taken after the 北海道 assembly (23→32 peaks) with all ② transit/segment edits applied.
- Grading course_time/distance per official row is preserved in the ① result JSON (tasks\w27jvutk9.output) —
  useful cross-check for segment times.

## Workflow ① official-route-grades

- Run ID: `wf_9710250f-ce1`  (task id w27jvutk9)
- Script: `C:\Users\lowel\.claude\projects\C--Users-lowel-Desktop-Projects-yama-biyori\ee871650-df5d-4972-8fd6-ede92b651aca\workflows\scripts\official-route-grades-wf_9710250f-ce1.js`
- Results journal (each agent's return value): `C:\Users\lowel\.claude\projects\C--Users-lowel-Desktop-Projects-yama-biyori\ee871650-df5d-4972-8fd6-ede92b651aca\subagents\workflows\wf_9710250f-ce1\journal.jsonl`
- Final return also written to: `C:\Users\lowel\AppData\Local\Temp\claude\C--Users-lowel-Desktop-Projects-yama-biyori\ee871650-df5d-4972-8fd6-ede92b651aca\tasks\w27jvutk9.output`
- What it does: 6 prefectures (長野/山梨/群馬/栃木/新潟/岐阜) × 2 independent readers download the official
  山のグレーディング PDFs and extract rows for our 19 mountains; reconciler resolves reader conflicts;
  2 independent matchers map our routes to rows; adjudicator settles disagreements.
- Return shape: `{ prefectures: [{pref, published, src, page_url, pdf_url, doc_version, rows[]}], matches: [{id, routes: [{route_ours, matched, row, pref, stamina, skill, confidence, note, verdict}]}] }`
- **Application rule:** for each route with `matched:true` AND `verdict` = `confirmed` or `adjudicated`:
  update that route's `grade` in data/mountains.js to the official `stamina`/`skill`, set `official:true`,
  add `src` (e.g. "信州 山のグレーディング") and `url` (page_url of that prefecture). Everything else stays
  `official:false`. Keep the extracted `course_time` values — useful cross-check for segment times.
- If the run died before finishing: resume with
  `Workflow({scriptPath: <script above>, resumeFromRunId: 'wf_9710250f-ce1', args: <regenerated args>})`.
  Args = JSON `{scratchpad, prefectures[], mountains[]}`; the script's prompt builders show the exact fields.
  `mountains[]` = the 19 mountains in publishing prefectures with their routes' exact `name`, trailhead,
  stats and current stamina/skill copied verbatim from data/mountains.js. Script tolerates args as string (parse guard).

## Cost + hygiene rules for ALL future runs (added 2026-07-14 after usage blowout)

1. **Model:** every agent so far ran on Fable 5 (inherited; ~4.5M subagent tokens). On resume/launch, pass
   `model: "sonnet"` in agent() opts for ALL mechanical agents (extractors, transit checkers, segment
   verifiers, expansion researchers). Only skeptic/adjudicator passes may use a stronger model if needed.
   NOTE: changing opts changes the cache key — cached Fable agents will NOT replay if their opts change.
   So on resuming run wf_becaaec9-142: leave finished agents' calls untouched (same prompt+opts) and only
   add model overrides via a script edit that applies 'sonnet' to NEW/unfinished labels, or accept re-runs.
   Simplest safe route: edit the script so agent() opts include model:'sonnet' unconditionally, accept that
   the 31 cached checks re-run on sonnet (cheap), and keep their old evidence in the journal as reference.
2. **PDFs:** agents must NEVER open PDF URLs in the browser pane (it saves duplicates to the owner's
   Downloads folder). Always `curl -L -f -o "<scratchpad>/<unique-name>.pdf"` then Read. Add this line to
   every agent prompt that may touch PDFs.

## Workflow ② transit-verification-sweep

- Run ID: `wf_becaaec9-142`  (task id wbf068wfi)
- Script: `...\workflows\scripts\transit-verification-sweep-wf_becaaec9-142.js` (same session dir as above)
- Journal: `...\subagents\workflows\wf_becaaec9-142\journal.jsonl`
- Final return also at: `...\tasks\wbf068wfi.output` (same tasks dir as above)
- What it does: one checker per sample-flagged item — 42 transit entries (keys t01–t42) and 26 segment blocks
  (keys s01–s26) — verified against OFFICIAL sources only (operator sites/PDFs, municipalities, hut sites;
  Yamap/ヤマレコ/てんくら/乗換検索は禁止). Every proposed clear is re-verified by an independent skeptic.
- Key map: keys are in the args inside the recovery text of the script run; simpler: t-keys walk the
  mountains in file order (tsubakuro t01–02, karamatsu t03–04, shirouma t05, jonen t06–07, norikura t08,
  kisokoma t09, akadake t10, tateshina t11–12, kitayoko t13–14, nasu t15–16, kuju t17–18, tanigawa t19–21,
  kinpu t22–23, mizugaki t24, kumotori t25–26, daibosatsu t27, shibutsu t28–29, nikkoshirane t30–32,
  nantai t33, akagi t34, tonodake t35–36, oyama t37–38, tsukuba t39–42), matching each trailhead's access
  entries in order. s-keys likewise walk routes with `segments` + `sample:true` in file order (s01=燕岳合戦尾根 …
  s26=筑波山御幸ヶ原).
- Return shape: `{ transit: [{key, status, clear_flag, corrections{line,from,duration,weekday,weekend,season,url}, evidence, notes}], segments: [{key, status, clear_flag, legs[], sources[], notes}] }`
- **Application rule:** apply `corrections` field-by-field to the matching access entry; remove that entry's
  `sample: true` ONLY where `clear_flag:true`. For segments: update leg times where `differs` with official
  values; remove the route's `sample: true` only where `clear_flag:true`. Everything else keeps its flag.
  After edits run the validator (below) and record leftovers for the owner in this file.

## Workflow ③ 百名山 expansion — designed, NOT launched

Missing 82 百名山 (our 23 already include 18 of the 100). Append by region, north→south, AFTER the existing
regions (index.html groups by first appearance; existing order stays untouched):

- 北海道 (9): 利尻岳, 羅臼岳, 斜里岳, 阿寒岳(雌阿寒岳), 大雪山(旭岳), トムラウシ山, 十勝岳, 幌尻岳, 羊蹄山
- 東北 (14): 岩木山, 八甲田山, 八幡平, 岩手山, 早池峰山, 鳥海山, 月山, 朝日岳(大朝日岳), 蔵王山(熊野岳), 飯豊山, 吾妻山(西吾妻山), 安達太良山, 磐梯山, 会津駒ヶ岳
- 上信越・尾瀬 (12): 越後駒ヶ岳, 平ヶ岳, 巻機山, 燧ヶ岳, 雨飾山, 苗場山, 妙高山, 火打山, 高妻山, 皇海山, 武尊山, 草津白根山
- 関東・浅間周辺 (3): 四阿山, 浅間山, 両神山
- 北アルプス・御嶽 (13): 五竜岳, 鹿島槍ヶ岳, 剱岳, 立山, 薬師岳, 黒部五郎岳, 水晶岳, 鷲羽岳, 槍ヶ岳, 穂高岳(奥穂高岳), 笠ヶ岳, 焼岳, 御嶽山
- 中部その他 (6): 美ヶ原, 霧ヶ峰, 甲武信ヶ岳, 富士山, 丹沢山, 天城山
- 中央・南アルプス (12): 空木岳, 恵那山, 甲斐駒ヶ岳, 仙丈ヶ岳, 鳳凰山, 北岳, 間ノ岳, 塩見岳, 悪沢岳(荒川東岳), 赤石岳, 聖岳, 光岳
- 北陸・近畿・中四国 (8): 白山, 荒島岳, 伊吹山, 大台ヶ原山, 大峰山(八経ヶ岳), 大山(伯耆), 剣山, 石鎚山
- 九州 (5): 祖母山, 阿蘇山(高岳), 霧島山(韓国岳), 開聞岳, 宮之浦岳

Design (mirrors ①/② quality patterns):
1. One research agent per mountain drafts the FULL schema object (template = comment block at top of
   data/mountains.js; model examples: nasu = compact, tsubakuro = full). Hard rules: official transit URLs +
   `sample:true` on every access entry and segment block; huts with official url+tel; route grades from the
   prefecture 山のグレーディング where published (many publish: 長野/山梨/静岡/新潟/岐阜/群馬/栃木/山形 —
   agents must cite src+url, official:true), otherwise conservative estimates official:false; per-mountain
   grading thresholds tuned to character (windy peaks lower wind thresholds, snowy regions longer snow_months);
   seasonality notes month-by-month; NO Yamap/ヤマレコ/てんくら sources.
2. Agent WRITES its object to `_agentwork/expansion/<ascii-id>.js` (stable path, survives session loss)
   and returns only metadata.
3. Independent verifier agent checks each file: coords/elevation vs GSI/Wikipedia, URLs resolve, schema
   conformance, grading plausibility. Issues → fixer agent edits the file, re-verify once.
4. Main session assembles files into data/mountains.js region by region, runs the validator after each region,
   spot-checks rendering by opening index.html.

## Tools

- Validator: `_agentwork/validate_mountains.js` — run:
  `cscript //nologo _agentwork\validate_mountains.js data\mountains.js`
  (JScript/ES3; converts const→var; checks syntax + required fields + dup ids + grade ranges). No Node on this machine.

## ③ expansion fixer notes — 斜里岳 shari.js (2026-07-18)

Verifier flagged 3 issues on `_agentwork/expansion/shari.js`; fixer pass resolved as follows:

1. **routes[0] segments math didn't sum to stats, and the descent leg never reached back to 清岳荘.**
   No official per-leg (清岳荘⇄下二股⇄上二股⇄馬の背⇄熊見峠) time table could be found on 清里町公式
   (town.kiyosato.hokkaido.jp) or きよさと観光協会 (kiyosatokankou.com) — both only publish the whole-route
   figure. Removed the `segments` array entirely (honest-omission path per the verifier's own fix_hint;
   matches the sibling 北海道 files rausu.js/meakan.js/etc., none of which carry `segments` either) and
   dropped the route's `sample:true` since there's no longer a segments claim to flag. Updated `stats` from
   `登り3:50・下り3:30` to `登り4:00・下り3:30` to match 清里町公式ページ「上りで約4時間、下りで約3時間半」
   exactly (https://www.town.kiyosato.hokkaido.jp/tourism/?content=1065).
2. **grading thresholds (wind_caution:8, precip_caution:2) undercut every one of the 23 already-published
   mountains' floor (wind_caution≥9, precip_caution=3 uniformly).** No external source could justify a
   site-specific numeric floor below the established one, so aligned to the floor: `wind_caution:9,
   wind_danger:14` (14 matches the existing 9/14 pairing used elsewhere, e.g. 那須), `precip_caution:3`
   (precip_danger:8 was already within the existing 8–10 range, left unchanged). `snow_note` reworded to
   drop the claim that the *numeric thresholds* are lower than Honshu peaks (no longer true) while keeping
   the qualitative point about faster-onset ridge wind/weather change near the Sea of Okhotsk.
3. **JR釧網本線 清里町駅 weekday/weekend example times (網走方面10:33/13:13/18:23, 釧路方面9:06/13:31/16:37)
   remain UNVERIFIED.** JR北海道公式の時刻検索 (jrhokkaidonorikae.com/ekihatsu/ekihatsu.php, linked from
   jrhokkaido.co.jp itself — confirmed same-operator, not a NAVITIME-style third party) renders times into a
   table that stays empty under both static WebFetch and the Claude_Browser tool (read_page/get_page_text
   both returned no row data; a full-page screenshot timed out). The page also carries an explicit notice —
   「この時刻データを無断で転載・複写し…禁じます」— against reproducing its data elsewhere, which is a further
   reason not to lean on it even if the widget were scriptable. Left `sample:true` and the existing example
   times untouched (per the verifier's own fix_hint: not a required blocker). **Owner to-do:** confirm
   清里町駅 発車時刻 directly — either phone JR北海道 or read the timetable board at the station — before
   clearing `sample:true` on that access entry.
4. Re-ran `cscript //nologo _agentwork\validate_single.js _agentwork\expansion\shari.js` after all edits — OK.

## Editing rules recap (from CLAUDE.md — do not violate)

- Static site only; data stays in data/mountains.js (plain JS).
- Never reduce grades to unexplained letters; thresholds are per-mountain data.
- `sample:true` comes off ONLY on verified data (owner or skeptic-confirmed agent verification per above).
- Never scrape Yamap/Yamareco/てんきとくらす.
- UI Japanese-first; 漢字 prominent.
