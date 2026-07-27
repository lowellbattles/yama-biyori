{
  id:"adatara", name_ja:"安達太良山", name_en:"Mt. Adatara", region:"安達太良連峰", prefecture:"福島県",
  elevation:1700, hyakumeizan:true,
  coords:{lat:37.6211, lon:140.2879}, forecast_elevation:1650,
  grading:{
    ridgeline:1650,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"標高の割に森林限界が低い独立峰で、稜線は10月から雪雲の通り道になりやすい。谷筋・北面は5月まで残雪や凍結が残ることがあり軽アイゼン等の携行を検討。"
  },
  trailheads:[
    {
      name:"奥岳登山口（あだたら高原スキー場・標高約950m）",
      access:[
        {mode:"バス", line:"奥岳線［JICA・NTC経由］（福島交通）", from:"JR二本松駅前",
         duration:"約45分",
         weekday:"二本松駅前発 例: 8:13（奥岳8:58着）。奥岳発 例: 16:15（二本松駅前16:59着）。1日1往復のみ", weekend:"要確認（公式サイトで土休日ダイヤを確認）",
         season:"通年運行（本数が少なく積雪状況により運休の場合あり、詳細は要確認）", url:"https://busget.fukushima-koutu.co.jp/fromto/result/1312/990/", sample:true},
        {mode:"ロープウェイ", line:"あだたら山ロープウェイ（山頂駅＝薬師岳・標高1,350m）", from:"山麓駅（標高950m）",
         duration:"約10分", weekday:"8:30始発、上り最終15:50・下り最終16:20", weekend:"同左（混雑時は運行状況要確認）",
         season:"2026年は4月11日〜11月23日が通常運行日（荒天時・点検日は運休あり、詳細は公式運行カレンダー参照）", url:"https://www.adatara-resort.com/green/about/index.html", sample:true}
      ]
    },
    {
      name:"塩沢登山口（塩沢スキー場・標高約840m）",
      access:[
        {mode:"車", line:"路線バスなし。県道129号（塩沢石筵線）沿い", from:"JR二本松駅・二本松市街",
         duration:"要確認（自家用車のみ、二本松駅から車で約40分が目安）",
         weekday:"要確認", weekend:"要確認",
         season:"通年（積雪期は路面凍結・積雪に注意）", url:"https://www.nihonmatsu-kanko.jp/?p=462", sample:true}
      ]
    }
  ],
  huts:[
    {name:"くろがね小屋", elevation:1350, open:"建て替え工事のため休業中（2023年3月31日〜。福島県が整備、2028年度末頃 完成予定・要最新確認）", reservation:"休業中のため利用不可（建物・敷地内は立入禁止）", url:"https://www.tif.ne.jp/kuroganegoya/", tel:""},
    {name:"鉄山避難小屋（無人・避難小屋）", elevation:1677, open:"通年無人開放（水場・トイレなし、緊急避難目的）", reservation:"予約不要", url:"https://www.pref.fukushima.lg.jp/sec/16035b/hinangoya-04-tetsuzan.html", tel:""}
  ],
  routes:[
    {name:"奥岳コース（ロープウェイ・薬師岳経由）", stats:"距離 約2.5km（ロープウェイ山頂駅から）/ 標高差 約350m / 登り1:25・下り1:00", level:"初級", note:"ロープウェイで8合目・薬師岳（1,350m）まで一気に高度を稼げる、最も利用者が多い定番コース。仙女平分岐で表（県民の森）コースと合流。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"勢至平コース（くろがね小屋跡経由）", stats:"距離 約7km / 標高差 約750m / 登り3:05・下り2:10", level:"中級", note:"奥岳登山口からくろがね小屋（建替工事のため休業中・立入禁止）を経て峰の辻へ。峰の辻から沼ノ平方面は有毒な火山ガス発生地帯につき立入禁止。噴火警戒レベルは気象庁サイトで要確認 https://www.data.jma.go.jp/vois/data/sendai/214_Adatarayama/214_index.html",
     popularity:2, trailhead:0, grade:{stamina:5, skill:"B", official:false}},
    {name:"塩沢コース（湯川渓谷・僧悟台経由）", stats:"距離 約6.5km / 標高差 約860m / 登り3:15・下り2:20", level:"上級", note:"安達太良山で唯一、沢に沿って登るコース。三階滝・八幡滝・霧降り滝が連続する湯川渓谷を通る。渡渉・鎖場があり増水時は注意。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"B", official:false}},
    {name:"沼尻コース（沼ノ平火口壁 周回）", stats:"距離 約7km / 標高差 約750m / 登り3:55・下り2:45", level:"中〜上級", note:"猪苗代町・沼尻登山口から沼ノ平火口壁の外周を歩く。周辺は有毒な火山ガス発生地帯のため案内標識・立入禁止区域を厳守。噴火警戒レベルは気象庁サイトで要確認 https://www.data.jma.go.jp/vois/data/sendai/214_Adatarayama/214_index.html",
     popularity:1, trailhead:null, grade:{stamina:5, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{
      5:"残雪期。ロープウェイ山頂駅周辺や北面にまだ雪が残ることがあり、新緑が美しい時期。",
      6:"高山植物が咲き始め、梅雨の晴れ間が狙い目。",
      7:"沼ノ平のガレ場が輝く盛夏。火山ガス警戒区域には絶対に立ち入らないこと。",
      8:"日差しが強い盛夏。稜線は日焼け・熱中症対策を。午後は雷雲の発達に注意。",
      9:"下旬から紅葉が始まり、くろがね小屋周辺から色づく。",
      10:"紅葉が見頃（例年上旬〜中旬）。ロープウェイが大変混雑するため早朝便がおすすめ。",
      11:"初雪の便り。稜線は積雪・凍結が始まるため軽アイゼン等の携行を検討。"
    }
  }
}
