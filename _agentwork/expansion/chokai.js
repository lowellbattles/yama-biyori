{
  id:"chokai", name_ja:"鳥海山", name_en:"Mt. Chokai", region:"鳥海山系", prefecture:"山形県・秋田県",
  elevation:2236, hyakumeizan:true,
  coords:{lat:39.0993, lon:140.0488}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本海に突き出た独立峰で有数の豪雪地帯。森林限界が約1,700mと低く、夏でも風を遮るものがない外輪山歩きが長い。大雪渓・千蛇谷の雪渓は7月中旬頃まで残ることが多く、アイゼン携行が安全。"
  },
  trailheads:[
    {
      name:"鉾立（象潟口登山口・標高1,160m）",
      access:[
        {mode:"バス", line:"鳥海ブルーライナー（乗合登山バス・象潟合同交通運行）", from:"JR羽越本線 象潟駅",
         duration:"約35分",
         weekday:"運休（土日祝のみ運行）", weekend:"象潟駅発 例: 6:20 / 11:35 / 15:25（7〜9月ダイヤ）※6月は6:20・15:25のみ、10月第2週までは8:15・11:35・15:25",
         season:"6月〜10月第2週の土曜・日曜・祝日、完全予約制（前日17:00まで）", url:"https://www.kisakata-goudo.com/kanko/blue-liner/", sample:true},
        {mode:"乗合タクシー", line:"鳥海山乗合タクシー（酒田第一タクシー・遊佐鳥海観光協会取次）", from:"JR酒田駅・JR遊佐駅・鳥海温泉遊楽里",
         duration:"約60分（酒田駅から、鉾立まで）",
         weekday:"要予約・固定時刻表なし（利用日前日16:00まで）", weekend:"同左",
         season:"2026年は7月10日〜8月24日の指定日", url:"https://www.yuzachokai.jp/spot/taxy/", sample:true}
      ]
    },
    {
      name:"吹浦口・大平登山口（標高1,044m）",
      access:[
        {mode:"バス", line:"鳥海ブルーライナー（乗合登山バス・象潟合同交通運行、途中「太平山荘」バス停下車）", from:"JR羽越本線 象潟駅",
         duration:"約30分（太平山荘まで）",
         weekday:"運休（土日祝のみ運行）", weekend:"象潟駅発 例: 6:20 / 11:35 / 15:25（7〜9月ダイヤ）",
         season:"6月〜10月第2週の土曜・日曜・祝日、完全予約制", url:"https://www.kisakata-goudo.com/kanko/blue-liner/", sample:true},
        {mode:"乗合タクシー", line:"鳥海山乗合タクシー（酒田第一タクシー・大平登山口行き）", from:"JR酒田駅・JR遊佐駅",
         duration:"約40〜60分",
         weekday:"要予約・固定時刻表なし（利用日前日16:00まで）", weekend:"同左",
         season:"2026年は7月10日〜8月24日の指定日", url:"https://www.yuzachokai.jp/spot/taxy/", sample:true}
      ]
    },
    {
      name:"湯ノ台口・滝の小屋登山口（標高1,182m）",
      access:[
        {mode:"乗合タクシー", line:"鳥海山乗合タクシー 滝の小屋線（酒田第一タクシー）", from:"JR酒田駅",
         duration:"約60分",
         weekday:"要予約・固定時刻表なし（利用日前日16:00まで）", weekend:"同左",
         season:"2026年は7月10日〜8月24日の指定日", url:"https://www.sakata-no1taxi.co.jp/choukaisan/", sample:true}
      ]
    },
    {
      name:"矢島口・祓川登山口（標高1,185m）",
      access:[
        {mode:"タクシー", line:"由利本荘市内タクシー", from:"由利高原鉄道 矢島駅",
         duration:"約30分",
         weekday:"要予約・固定時刻表なし", weekend:"同左",
         season:"アクセス道路は例年4月下旬〜11月上旬開通（2026年は4月24日9:00開通予定）", url:"https://yurihonjo-kanko.jp/yrdb/mt-chokai-yashimaguci/", sample:true},
        {mode:"シャトルバス", line:"鳥海山矢島口シャトルバス（由利本荘市・期間限定/無料・予約不要）", from:"由利高原鉄道 矢島駅",
         duration:"要確認",
         weekday:"運行なし（下記の限定期間のみ運行）", weekend:"運行日・時刻は要確認（花立クリーンハイツ・フォレスタ鳥海経由）",
         season:"2026年は5月2日〜5月6日のみ運行（花立ゲート開通記念の限定運行）", url:"https://yurihonjo-kanko.jp/special/haruyamabus2025/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"鉾立山荘（5合目・にかほ市）", elevation:1160, open:"例年4月下旬〜11月上旬（2026年は4/24開始予定）", reservation:"電話予約（にかほ市観光課、季節中は現地管理人）", url:"https://www.city.nikaho.akita.jp/soshikikarasagasu/kankoka/gyomuannai/2/1/6153.html", tel:"0184-43-3230"},
    {name:"大平山荘（4合目・遊佐町）", elevation:1000, open:"例年4月下旬〜10月末（2026年は受電設備修繕のため営業休止・再開未定）", reservation:"要問合せ", url:"http://www.chokai-yuza.com/odaira/", tel:"090-2607-2326"},
    {name:"御浜小屋（7合目参籠所）", elevation:1700, open:"2026年7月3日〜8月30日", reservation:"電話予約（鳥海山大物忌神社、予約開始5月8日10:00〜）", url:"https://oomonoimijinja.verse.jp/lodge.html", tel:"0234-77-2301"},
    {name:"御室小屋（山頂参籠所）", elevation:2100, open:"2026年7月3日〜8月30日", reservation:"電話予約（鳥海山大物忌神社、予約開始5月8日10:00〜）", url:"https://oomonoimijinja.verse.jp/lodge.html", tel:"0234-77-2301"},
    {name:"滝の小屋（湯ノ台口）", elevation:1280, open:"2026年6月22日〜10月12日（渇水時は早期閉鎖の場合あり）", reservation:"電話・メール予約（遊佐町 商工観光課）", url:"https://www.town.yuza.yamagata.jp/archive/p20250327181712", tel:"0234-72-5886"},
    {name:"祓川山荘（祓川ヒュッテ・矢島口）", elevation:1200, open:"2026年4月24日〜10月31日（通年一部開放、管理人常駐日のみ給湯・売店利用可）", reservation:"由利本荘市 観光文化スポーツ部観光振興課へ電話", url:"https://www.city.yurihonjo.lg.jp/shisetsu/1002012/1002038/1003971.html", tel:"0184-24-6376"}
  ],
  routes:[
    {name:"鉾立（象潟口）→新山 往復", stats:"距離 約18.2km / 標高差 約1,080m / 登り5:00・下り4:00", level:"中級", note:"鳥海山で最も歩かれる定番コース。御浜〜鳥海湖一帯は7〜8月にニッコウキスゲ・ハクサンイチゲが咲く。七五三掛の旧道は落石により通行禁止、新道（迂回路）を利用。新山山頂直下は岩場の鎖・梯子あり。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"C", official:true, src:"秋田県の山岳グレーディング", url:"https://www.pref.akita.lg.jp/pages/archive/39872"}},
    {name:"吹浦口（大平）→新山（御浜小屋・千蛇谷）往復", stats:"距離 約14.5km / 標高差 約1,190m / 登り5:00・下り4:00", level:"中級", note:"象潟口と並び古くから開かれた登山道。急登の伝石坂を登り切れば御浜まで快適。大平山荘は2026年は休業中だが登山道自体は通行可。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"C", official:true, src:"やまがた百名山のグレーディング", url:"https://www.pref.yamagata.jp/050011/kurashi/shizen/hyakumeisan/grading.html"}},
    {name:"湯ノ台口（薊坂）→七高山 往復", stats:"距離 約10.6km / 標高差 約1,050m / 登り4:55・下り4:15", level:"中級", note:"最短ルートだが薊坂の急登が核心。大雪渓・小雪渓は残雪期に道迷いしやすい。河原宿の旧山小屋は2025年に倒壊、2026年7月時点でトイレのみ利用可。",
     popularity:2, trailhead:2, grade:{stamina:3, skill:"C", official:true, src:"やまがた百名山のグレーディング", url:"https://www.pref.yamagata.jp/050011/kurashi/shizen/hyakumeisan/grading.html"}},
    {name:"矢島口（祓川）→七高山 往復", stats:"距離 約11.6km / 標高差 約1,040m / 登り4:15・下り3:15", level:"中級", note:"秋田県側で最も古い歴史を持つ登山道。積雪が多く7月中旬頃までは登山道の半分以上が雪渓に覆われる。賽の河原・七ツ釜・舎利坂など見どころが多い。",
     popularity:2, trailhead:3, grade:{stamina:3, skill:"C", official:true, src:"秋田県の山岳グレーディング", url:"https://www.pref.akita.lg.jp/pages/archive/39872"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      4:"矢島口のアクセス道路が開通（2026年は4/24）。山頂部はまだ大量の残雪で一般登山向きではない。",
      5:"ブナ林の新緑が美しいが山頂部・稜線はまだ厳冬期並みの残雪。本格的な夏道登山は6月以降を推奨。",
      6:"大雪渓・小雪渓が残る残雪期。稜線は残雪と強風に注意し軽アイゼンを推奨。高山植物が咲き始める。",
      7:"ニッコウキスゲ・ハクサンイチゲなど花畑が見頃（〜8月上旬）。開山まもない時期は雪渓・登山道の状況を要確認。常時観測火山のため気象庁の噴火警戒レベルも事前確認を（気象庁 鳥海山: https://www.data.jma.go.jp/vois/data/sendai/209_Chokaisan/209_index.html）。",
      8:"花の見頃と夏山最盛期。日本海からの強風・落雷・濃霧に注意。乗合バス・タクシーは早めの予約を。",
      9:"花は終盤、上旬は残暑あり。中旬から紅葉が始まる。",
      10:"外輪山から山頂まで紅葉が広がり見頃は例年上旬。中旬以降は積雪・強風に急速に切り替わるため要注意。多くの山小屋・乗合バスはこの頃までに営業終了。"
    }
  }
}
