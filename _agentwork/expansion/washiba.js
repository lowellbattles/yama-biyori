{
  id:"washiba", name_ja:"鷲羽岳", name_en:"Mt. Washiba", region:"北アルプス（裏銀座・黒部源流域）", prefecture:"長野県・富山県",
  elevation:2924, hyakumeizan:true,
  coords:{lat:36.402996, lon:137.60525}, forecast_elevation:2900,
  grading:{
    ridgeline:2900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"黒部川源流域の最深部に位置し、どのルートも山小屋2泊以上が前提。稜線は9月末から積雪・凍結が始まり、悪天候時に短時間で下山できる地形ではないため、天気予報と停滞判断は特に慎重に。"
  },
  trailheads:[{
    name:"新穂高温泉登山口（標高1,091m・新穂高登山指導センター）",
    access:[
      {mode:"バス", line:"新穂高線（濃飛乗合自動車）", from:"高山濃飛バスセンター（JR高山駅前）",
       duration:"約1時間45分",
       weekday:"高山濃飛バスセンター発 例: 6:00 / 7:00 / 7:40 / 8:10（以降は要確認）", weekend:"同左",
       season:"通年運行（積雪期は減便、詳細は要確認）", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true},
      {mode:"バス", line:"新穂高線（濃飛乗合自動車）", from:"平湯温泉（平湯バスターミナル）",
       duration:"約45分",
       weekday:"平湯温泉発 例: 7:00 / 7:40 / 8:00 / 8:40（以降は要確認）", weekend:"同左",
       season:"通年運行", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true}
    ]
  },{
    name:"高瀬ダム登山口（七倉より先・標高約1,275m）",
    access:[
      {mode:"バス", line:"裏銀座登山バス（大町市運行）", from:"JR大糸線 信濃大町駅",
       duration:"約45分（七倉山荘前まで）",
       weekday:"特定日運行・発車時刻は公式サイトの時刻表画像を要確認", weekend:"同左",
       season:"2026年は7月17日〜10月25日の特定日運行（乗車予約不要）", url:"https://uraginzabus.com/", sample:true},
      {mode:"タクシー", line:"七倉〜高瀬ダム間シャトルタクシー（アルピコタクシー大町支社・アルプス第一交通）", from:"七倉山荘前（七倉ゲート）",
       duration:"約15分",
       weekday:"随時運行 例: 夏山繁忙期は5:00〜運行開始（通常期6:30〜17:00、終業40分前まで受付）", weekend:"同左",
       season:"通年（積雪期の運行は要問合せ）。高瀬ダムより先はマイカー規制、徒歩の場合は七倉から約1時間50分", url:"https://webmarunaka.com/nanakura/access", sample:true}
    ]
  }],
  huts:[
    {name:"わさび平小屋", elevation:1400, open:"7月10日〜10月20日（2026年度・予約制）", reservation:"公式Web予約または電話。当日の予約・変更は現地電話へ", url:"https://www.sugorokugoya.com/wasabi/", tel:"090-8074-7778"},
    {name:"鏡平山荘", elevation:2300, open:"7月10日〜10月15日（2026年度・予約制）", reservation:"公式Web予約または電話。当日の予約・変更は現地電話へ", url:"https://www.sugorokugoya.com/kagami/", tel:"090-1566-7559"},
    {name:"双六小屋", elevation:2600, open:"7月10日〜10月20日（2026年度・完全予約制）", reservation:"公式Web予約または電話（事務所0577-34-6268 9:00〜18:00）", url:"https://www.sugorokugoya.com/sugoroku/", tel:"090-3480-0434"},
    {name:"三俣山荘", elevation:2550, open:"7月4日〜10月15日（2026年度・完全予約制）", reservation:"公式Web予約（宿泊日の60日前から受付、予約金制度あり）。当日変更は現地電話", url:"https://mitsumatasanso.com/mitsumata", tel:"050-8882-5833"},
    {name:"水晶小屋", elevation:2900, open:"7月10日〜9月30日（2026年度・三俣山荘グループ）", reservation:"公式Web予約（三俣山荘グループ）。当日変更は現地電話", url:"https://mitsumatasanso.com/suisho", tel:"050-8892-3572"}
  ],
  routes:[
    {name:"新穂高温泉→わさび平→鏡平→双六小屋→三俣山荘 経由 鷲羽岳 往復", stats:"距離 約36km（往復）/ 標高差 約1,830m / 山小屋2泊3日が標準（歩行時間の目安 1日目 新穂高→双六小屋 約7〜8時間・2日目 双六小屋→三俣山荘→鷲羽岳往復→双六小屋泊 約6〜7時間・3日目 下山 約6時間）", level:"上級", note:"北アルプス最奥部への長丁場。小池新道は鏡平までよく整備された樹林帯・岩ゴロ道、双六小屋から先は稜線歩き。三俣山荘から鷲羽岳山頂直下は急なガレの登り。日帰り・軽装での入山は不可。",
     popularity:3, trailhead:0, grade:{stamina:9, skill:"B", official:false}},
    {name:"高瀬ダム→ブナ立尾根→烏帽子岳→野口五郎岳→水晶岳 経由 鷲羽岳（裏銀座縦走）", stats:"距離 約30km（高瀬ダム〜鷲羽岳・片道）/ 標高差 約1,650m / 山小屋2〜3泊が標準", level:"上級", note:"「北アルプス三大急登」のブナ立尾根で稜線に上がり、烏帽子岳・野口五郎岳・水晶岳を経て黒部源流の鷲羽岳へ抜ける裏銀座縦走の核心部。稜線歩きが長く、悪天候時のエスケープが乏しい。新穂高側へ下山するか上高地側へ抜けるかは体力・天候を見て判断。",
     popularity:2, trailhead:1, grade:{stamina:9, skill:"C", official:false}},
    {name:"三俣山荘→鷲羽岳 往復（縦走中の立ち寄り）", stats:"距離 約2.4km / 標高差 約370m / 登り1:00・下り0:45", level:"中級", note:"三俣山荘を拠点に鷲羽岳山頂だけを往復する場合の目安。山頂からは槍穂高・立山・水晶岳など北アルプス核心部の大展望。稜線上部はガレ・強風に注意。",
     popularity:2, trailhead:null, grade:{stamina:3, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"多くの山小屋がまだ営業前（開設は概ね7月上旬〜中旬）。稜線には残雪が多く残り、雪渓歩行の技術と装備が必要な残雪期。",
      7:"上旬〜中旬に主要な山小屋が順次営業開始。梅雨明け後が北アルプス最奥部への本格的な入山シーズンの始まり。",
      8:"夏山最盛期。小屋・テント場とも混雑しやすく予約は早めに。午後の雷雨が多いため早出・早着を徹底。",
      9:"上旬まで盛夏の延長、下旬から稜線で紅葉と初雪が交錯し始める。三俣山荘・双六小屋とも中旬にかけて営業終了に向かう。",
      10:"多くの山小屋が中旬〜下旬で営業終了（水晶小屋は9月末まで）。稜線は積雪・凍結が本格化し、無雪期装備での入山は難しくなる。"
    }
  }
}
