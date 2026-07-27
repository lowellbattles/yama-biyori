{
  id:"takatsuma", name_ja:"高妻山", name_en:"Mt. Takatsuma", region:"戸隠連峰", prefecture:"長野県・新潟県",
  elevation:2353, hyakumeizan:true,
  coords:{lat:36.8000, lon:138.0519}, forecast_elevation:2200,
  grading:{
    ridgeline:2200,
    wind_caution:9, wind_danger:15,
    precip_caution:2, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"戸隠は日本有数の豪雪地帯。長野市公式情報でも例年11月〜6月は積雪ありとされ、大洞沢沿いの一不動コースは6月頃まで雪渓・渡渉が残ることがある。降雨時は沢の増水にも要警戒（無雪期でも）。積雪期は本格的な雪山装備必須。"
  },
  trailheads:[{
    name:"戸隠キャンプ場 登山者用駐車場（標高約1,171m）",
    access:[
      {mode:"バス（予約制・観光特急）", line:"観光特急戸隠線（アルピコ交通）", from:"JR長野駅 善光寺口7番のりば",
       duration:"約65分",
       weekday:"長野駅発 例: 6:50 / 7:50 / 8:20 / 8:50 / 9:20 / 9:50（早朝便が日帰り登山向け・平日土休日共通ダイヤ）", weekend:"長野駅発 例: 6:50 / 7:50 / 8:20 / 8:50 / 9:20 / 9:50（平日と同一ダイヤ）",
       season:"2026年4月1日〜6月30日ダイヤ（2026年3月9日改正版）で運行。7月以降は改定予定のため要確認。冬期は運休の可能性あり（要確認）。座席指定制・要事前予約（当日空席があれば乗車可）",
       url:"https://www.alpico.co.jp/traffic/local/nagano/togakushi/", sample:true}
    ]
  }],
  huts:[
    {name:"一不動避難小屋（無人・宿泊不可）", elevation:1750, open:"通年開放（無人・避難用）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"一不動コース（大洞沢）→弥勒尾根新道 周回", stats:"距離 約13.6km / 標高差 約1,182m / 登り5:30・下り4:05", level:"上級", note:"戸隠牧場からの定番周回。登りは一不動経由の大洞沢コースで滑滝・帯岩のクサリ場を通過（降雨後は大洞沢の増水に注意）、下りは鎖場の少ない弥勒尾根新道を使う。山小屋がなく日帰り必須のロングコース。下山後のバスは戸隠キャンプ場発（2026年4〜6月ダイヤ、要確認）。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"D", official:true, src:"信州 山のグレーディング（百名山グレーディング一覧表）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"戸隠キャンプ場駐車場", to:"一不動登山口", up:"0:20"},
       {from:"一不動登山口", to:"一不動避難小屋", up:"2:00"},
       {from:"一不動避難小屋", to:"五地蔵山", up:"1:00"},
       {from:"五地蔵山", to:"六弥勒", up:"0:10"},
       {from:"六弥勒", to:"高妻山山頂", up:"2:00"},
       {from:"高妻山山頂", to:"六弥勒", down:"1:30"},
       {from:"六弥勒", to:"弥勒新道登山口", down:"2:10"},
       {from:"弥勒新道登山口", to:"戸隠キャンプ場駐車場", down:"0:25"}
     ], sample:true},
    {name:"一不動コース（大洞沢） 往復", stats:"距離 約13.4km / 標高差 約1,182m / 登り5:30・下り4:20", level:"上級", note:"登り下りとも大洞沢沿いの一不動コースを使う往復ルート。滑滝・帯岩のクサリ場を上り下り両方で通過するため、周回ルートより鎖場通過回数が多い。降雨後の増水・泥濘に注意。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"D", official:true, src:"信州 山のグレーディング（百名山グレーディング一覧表）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"戸隠キャンプ場駐車場", to:"一不動登山口", up:"0:20", down:"0:20"},
       {from:"一不動登山口", to:"一不動避難小屋", up:"2:00", down:"1:30"},
       {from:"一不動避難小屋", to:"五地蔵山", up:"1:00", down:"0:50"},
       {from:"五地蔵山", to:"六弥勒", up:"0:10", down:"0:10"},
       {from:"六弥勒", to:"高妻山山頂", up:"2:00", down:"1:30"}
     ], sample:true}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。大洞沢沿いは雪渓・渡渉が残ることが多く上級者向け。マイカー・バスの季節運行開始時期は要確認。",6:"梅雨と残雪の両方に注意。沢筋（大洞沢）は雨で水量が急増するため無理をしない。",7:"梅雨明け以降が実質的なシーズン入り。行動時間が長いため早朝発必須。",8:"盛夏。午後の雷雨リスクが高く、早出早着を徹底。",9:"秋晴れが安定し始める登山適期。台風接近時は増水・強風に厳重警戒。",10:"紅葉と戸隠富士の眺望が見頃。中旬以降は初雪の可能性があり、装備を早めに冬支度へ切り替える。",11:"長野市公式情報でもこの時期から積雪が始まるとされ、無雪期装備での入山は非推奨。"}
  }
}
