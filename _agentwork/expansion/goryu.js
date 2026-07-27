{
  id:"goryu", name_ja:"五竜岳", name_en:"Mt. Goryu", region:"後立山連峰", prefecture:"長野県・富山県",
  elevation:2814, hyakumeizan:true,
  coords:{lat:36.658407, lon:137.752691}, forecast_elevation:2750,
  grading:{
    ridgeline:2750,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"白岳直下の鎖場や遠見尾根上部・西遠見山周辺は6月頃まで残雪あり。牛首の岩稜は積雪・凍結時は極めて危険。"
  },
  trailheads:[{
    name:"エイブル白馬五竜テレキャビン アルプス平駅・地蔵の頭（標高1,530m）",
    access:[
      {mode:"シャトルバス", line:"エスカルプラザ行 無料シャトルバス（白馬五竜高山植物園）", from:"JR大糸線 神城駅",
       duration:"約15分",
       weekday:"神城駅発 例: 8:00 / 9:40 / 10:45 / 11:15 / 12:20 / 12:45 / 13:00", weekend:"平日・土日とも同ダイヤ（運行日は毎日）",
       season:"2026年は早期開園6/6・7・13・14（土日限定）、通常開園6/20〜10/18は毎日運行", url:"https://www.hakubaescal.com/shokubutsuen/access/", sample:true},
      {mode:"テレキャビン", line:"エイブル白馬五竜テレキャビン（ゴンドラ）", from:"山麓エスカルプラザ",
       duration:"約8分",
       weekday:"始発8:15（登山シーズンは早朝便運行日あり・時刻は要事前確認）、上り最終16:00・下り最終16:30", weekend:"同左",
       season:"2026年は早期開園6/6・7・13・14（土日限定）、通常開園6/20〜10/18は毎日運行", url:"https://www.hakubaescal.com/shokubutsuen/gondola/cal/", sample:true}
    ]
  }],
  huts:[
    {name:"五竜山荘", elevation:2490, open:"4月下旬〜5月上旬・6月下旬〜10月中旬（2026年は4/25〜5/5、6/20〜10/12）", reservation:"Web予約中心（yamayado.com「YamaYado Hub」）。当日電話予約は空きがあれば加算料金あり", url:"https://hakubakan.com/lodge/goryusanso/", tel:"0261-72-2002"},
    {name:"唐松岳頂上山荘", elevation:2620, open:"6月下旬〜10月中旬（2026年は6/27〜10/13）", reservation:"Web予約中心（宿泊日の30日前0時受付開始）・テント泊も要予約", url:"http://karamatsu.jp/", tel:"090-5204-7876"}
  ],
  routes:[
    {name:"遠見尾根ルート（アルプス平駅・地蔵の頭〜五竜山荘〜五竜岳 往復）", stats:"距離 約15.4km（往復）/ 標高差 約1,282m（アルプス平駅1,530m→山頂2,814m）/ 登り6:50・下り5:05", level:"上級", note:"テレキャビンを使っても長丁場。白岳直下の鎖場・岩稜と西遠見山周辺の雪田処理が核心部。日帰りも可能だが五竜山荘一泊が一般的。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"アルプス平駅・地蔵の頭", to:"小遠見山", up:"1:30", down:"1:00"},
       {from:"小遠見山", to:"五竜山荘", up:"4:00", down:"3:00"},
       {from:"五竜山荘", to:"五竜岳山頂", up:"1:00", down:"0:45"}
     ], sample:true},
    {name:"唐松岳からの縦走（八方尾根〜唐松岳〜牛首〜五竜岳〜遠見尾根）", stats:"距離 約17.1km（八方池山荘→五竜岳→アルプス平駅）/ 累積登り約1,660m・累積下り約1,970m / 合計コースタイム 約12.1時間（1泊が前提）", level:"上級", note:"唐松岳頂上山荘泊まりが定番。核心は牛首の岩稜帯の鎖場（残雪期・強風時は特に危険、ヘルメット推奨）。五竜山荘でさらに1泊する2泊3日プランも一般的。",
     popularity:2, trailhead:null, grade:{stamina:5, skill:"C", official:true, src:"信州 山のグレーディング（八方池山荘発・アルプス平駅着）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"小遠見山ハイキング（アルプス平駅〜小遠見山 往復）", stats:"距離 約4.6km（往復目安）/ 標高差 約480m（1,530m→2,007m）/ 片道約1:30", level:"初級", note:"地蔵ケルンから360度パノラマ。五竜岳・鹿島槍ヶ岳の好展望地として登山者以外にも人気。展望リフト運休期間は徒歩分が延びる。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"A", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"テレキャビンは早期開園の特別営業（土日限定）のみ。稜線は残雪期の装備が必須。",6:"6/20の通常開園から本格シーズン入り。遠見尾根上部・白岳直下は残雪が多く軽アイゼン推奨。",7:"梅雨明け後が狙い目。コマクサ・ハクサンイチゲなど高山植物が見頃。",8:"夏山最盛期。五竜山荘・唐松岳頂上山荘とも混雑。稜線は午後の雷雨に注意。",9:"上旬は盛夏の延長、中旬から冷え込みが強まる。台風シーズンのため予報を要確認。",10:"紅葉と初雪が交錯。2026年はテレキャビン10/18まで、五竜山荘10/12・唐松岳頂上山荘10/13で小屋じまい予定。中旬以降は冬装備が必要。"}
  }
}