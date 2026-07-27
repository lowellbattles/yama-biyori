{
  id:"ontake", name_ja:"御嶽山", name_en:"Mt. Ontake", region:"御嶽山系", prefecture:"長野県・岐阜県",
  elevation:3067, hyakumeizan:true,
  coords:{lat:35.8928, lon:137.4806}, forecast_elevation:3000,
  grading:{
    ridgeline:2900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"独立峰の3,000m級火山で稜線は遮るものがなく風が強い。飯森高原駅（黒沢口）・田の原（王滝口）とも森林限界を越えると雪渓や凍結が5月頃まで残ることがある。"
  },
  trailheads:[
    {
      name:"御岳ロープウェイ 飯森高原駅（黒沢口七合目・標高2,150m）",
      access:[
        {mode:"バス", line:"おんたけ交通 御岳ロープウェイ線", from:"JR中央本線 木曽福島駅",
         duration:"約40分（ロープウェイ山麓駅まで）",
         weekday:"要確認（季節運行・木曽福島駅前出札所で要事前確認）", weekend:"要確認（季節運行・木曽福島駅前出札所で要事前確認）",
         season:"夏山シーズン中心（ロープウェイ営業期間に合わせて運行）", url:"https://ontakekotsu.com/regular", sample:true},
        {mode:"ロープウェイ", line:"おんたけロープウェイ（山麓駅 鹿ノ瀬 → 飯森高原駅・標高2,150m）", from:"山麓駅（鹿ノ瀬）",
         duration:"約15分",
         weekday:"要確認（始発・最終便は公式サイト参照）", weekend:"要確認（始発・最終便は公式サイト参照）",
         season:"2026年は4月25日〜11月8日予定", url:"https://ontake-rope2150.jp/guide/", sample:true}
      ]
    },
    {
      name:"田の原（王滝口七合目・標高約2,180m）",
      access:[
        {mode:"バス", line:"王滝村営バス 田の原線（おんたけ交通に運行委託）", from:"JR中央本線 木曽福島駅前",
         duration:"約1時間15分",
         weekday:"運休（土日祝日のみ運行）", weekend:"木曽福島駅発 例: 8:40 / 13:45（2026年は7月4日〜10月18日の土日祝日運行）",
         season:"2026年は7月4日〜10月18日の土日祝日のみ", url:"https://www.vill.otaki.nagano.jp/kurashi/basu_tanohara.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"女人堂（黒沢口八合目）", elevation:2470, open:"7月上旬〜10月上旬頃（休憩・軽食・売店中心、宿泊は要問い合わせ）", reservation:"電話予約", url:"https://ontake-nyonindo.jimdofree.com/", tel:"090-8329-1385"},
    {name:"石室山荘（黒沢口九合目）", elevation:2820, open:"7月上旬〜10月上旬頃", reservation:"電話予約（黒澤館扱い）", url:"", tel:"0264-46-2016"},
    {name:"二ノ池山荘", elevation:2905, open:"2026年は7月1日〜10月11日", reservation:"Web予約", url:"http://ninoike2905.com/", tel:""},
    {name:"二の池ヒュッテ", elevation:2905, open:"夏山シーズン（完全予約制）", reservation:"LINE予約制", url:"https://www.ninoikehutte.com/", tel:""},
    {name:"剣ヶ峰避難シェルター（コンクリート製・宿泊不可）", elevation:3060, open:"通年設置（緊急退避専用）", reservation:"—", url:"", tel:""},
    {name:"八丁ダルミ避難シェルター（宿泊不可）", elevation:2900, open:"通年設置（緊急退避専用）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"黒沢口 飯森高原駅→女人堂→石室山荘→剣ヶ峰 往復", stats:"距離 約11km / 標高差 約920m / 登り4:00・下り3:00（目安）", level:"中級", note:"最も一般的なコース。2026年の黒沢口（黒沢十字路〜剣ヶ峰）開放期間は7月1日8:00〜10月14日正午（木曽町公式サイトで要最新確認）。八合目女人堂〜三ノ池ルートは現在通行不可。噴火警戒レベル1でも剣ヶ峰周辺（地獄谷火口付近）はヘルメット携行推奨。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"王滝口 田の原→王滝頂上→剣ヶ峰 往復", stats:"距離 約7.5km / 標高差 約890m / 登り3:00・下り2:15（目安）", level:"中級", note:"標高2,180mの田の原からスタートする最短コース。2026年の王滝口（田の原〜王滝頂上〜剣ヶ峰）開放期間は7月10日9:00〜10月14日正午（王滝村公式サイトで要最新確認）。九合目から奥の院方面・お鉢めぐり登山道は引き続き入山禁止（王滝村公式）。王滝村はヘルメット着用を明記して呼びかけている。八丁ダルミ・剣ヶ峰付近にコンクリート製シェルターあり。",
     popularity:3, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期。飯森高原駅・田の原ともロープウェイ／バス運行前後で入山ルートが限られる。雪上装備が必要。",
      6:"梅雨。ロープウェイ・バスは季節運行開始直後で運休日あり、事前確認必須。",
      7:"2026年は黒沢口が7/1、王滝口が7/10に剣ヶ峰までの規制が緩和される予定（気象庁の噴火警戒レベルにより変更あり）。ヘルメット携行を。",
      8:"最盛期。お花畑と眺望が良い一方、午後は雷雨に注意。混雑日は山小屋・バスとも早めの計画を。",
      9:"秋晴れが増える好期。紅葉は稜線から始まる。",
      10:"2026年は10月14日正午で剣ヶ峰までの規制緩和期間が終了予定（木曽町・王滝村公式で要確認）。中旬以降の初雪・凍結に注意。",
      11:"ロープウェイ・バスとも順次冬期運休。積雪期の入山は装備・経験が必要。"
    }
  }
}
