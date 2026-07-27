{
  id:"kirigamine", name_ja:"霧ヶ峰（車山）", name_en:"Mt. Kirigamine (Kurumayama)", region:"美ヶ原・霧ヶ峰", prefecture:"長野県",
  elevation:1925, hyakumeizan:true,
  coords:{lat:36.1028, lon:138.1967}, forecast_elevation:1900,
  grading:{
    ridgeline:1800,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"山名の由来どおり、盛夏でも霧が出ると木の少ない草原状の稜線で道標を見失いやすい（雨・低い雲の予報日は特に注意）。冬期は遮る物のない高原状地形のため地吹雪・積雪が発達しやすい。"
  },
  trailheads:[
    {
      name:"八島湿原（沢渡駐車場・標高約1,640m）",
      access:[
        {mode:"バス", line:"霧ヶ峰線・八島湿原線（アルピコ交通）", from:"JR上諏訪駅諏訪湖口（西口）",
         duration:"約45分（八島湿原まで）",
         weekday:"運行なし（土日祝日および8月1日〜8月30日の毎日運行のみ）", weekend:"上諏訪駅発 例: 9:35 / 10:35 / 14:30（八島湿原着 例: 10:20 / 11:20 / 15:15）",
         season:"2026年5月2日〜10月25日（ニッコウキスゲ最盛期は道路渋滞により大幅遅延の場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kirigamine/", sample:true}
      ]
    },
    {
      name:"車山肩（標高約1,800m）",
      access:[
        {mode:"バス", line:"霧ヶ峰線・八島湿原線（アルピコ交通）", from:"JR上諏訪駅諏訪湖口（西口）",
         duration:"約1時間（車山肩まで）",
         weekday:"運行なし（土日祝日および8月1日〜8月30日の毎日運行のみ）", weekend:"上諏訪駅発 例: 9:35 / 10:35 / 14:30（車山肩着 例: 10:35 / 11:35 / 15:30）",
         season:"2026年5月2日〜10月25日（ニッコウキスゲ最盛期は道路渋滞により大幅遅延の場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kirigamine/", sample:true}
      ]
    },
    {
      name:"車山高原（リフト山麓駅・標高約1,670m）",
      access:[
        {mode:"バス", line:"霧ヶ峰線・八島湿原線（アルピコ交通）", from:"JR上諏訪駅諏訪湖口（西口）",
         duration:"約1時間5分（車山高原まで）",
         weekday:"運行なし（土日祝日および8月1日〜8月30日の毎日運行のみ）", weekend:"上諏訪駅発 例: 9:35 / 10:35 / 14:30（車山高原着 例: 10:43 / 11:43 / 15:38）",
         season:"2026年5月2日〜10月25日（ニッコウキスゲ最盛期は道路渋滞により大幅遅延の場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kirigamine/", sample:true},
        {mode:"リフト", line:"車山高原SKYPARK展望リフト（スカイライナー→スカイパノラマ乗継）", from:"車山高原山麓駅",
         duration:"約15〜25分（乗継ぎ・山頂駅まで）",
         weekday:"9:00〜16:00上り最終（下り最終16:30、繁忙期は8:30始発）", weekend:"同左（繁忙期は増発の場合あり）",
         season:"2026年は4/18〜19・4/24〜11/3・11/21〜23営業（荒天時は運休）", url:"https://summer.kurumayama-skypark.com/lift-2", sample:true}
      ]
    }
  ],
  huts:[
    {name:"ころぼっくるひゅって", elevation:1820, open:"4月下旬〜11月下旬・12月下旬〜3月下旬（冬期は土日祝日のみ営業）", reservation:"完全予約制（電話のみ）", url:"https://www.instagram.com/korobokkuru_hutte/", tel:"0266-58-0573"},
    {name:"鷲が峰ひゅって", elevation:1659, open:"通年営業（積雪期は道路状況により変動）", reservation:"オンライン予約カレンダーまたはメールフォーム", url:"https://nature2.jp/wasshie/", tel:"0266-58-8088"},
    {name:"ヒュッテみさやま（ヒュッテ御射山）", elevation:1630, open:"4月末〜10月末（冬期休業）", reservation:"電話予約", url:"http://park19.wakwak.com/~misayama/", tel:"0266-75-2370"}
  ],
  routes:[
    {name:"【周】霧ヶ峰（八島湿原）＜鷲ヶ峰→蝶々深山・車山肩＞", stats:"距離 約13.3km / 標高差 約620m / 周回コースタイム 約6:12", level:"中級", note:"鷲ヶ峰の岩場を越えて霧ヶ峰の主稜線を大きく一周する定番ロングコース。ニッコウキスゲの時期は特に賑わう。県公表グレーディング掲載ルート。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"車山肩 往復", stats:"距離 約1.6km / 標高差 約125m / 登り0:30・下り0:25", level:"初級", note:"ころぼっくるひゅって前から高原状の道を辿る、霧ヶ峰随一の手軽な往復コース。山頂には旧気象レーダー観測所のドームがある。",
     popularity:3, trailhead:1, grade:{stamina:1, skill:"A", official:false}},
    {name:"車山高原リフト（山頂駅）往復", stats:"距離 約0.5km / 標高差 約60m / 登り0:15・下り0:10", level:"初級", note:"リフトを2本乗り継いで山頂駅まで上がれば、山頂まではわずかな歩き。家族連れやご来光ツアーにも人気。",
     popularity:2, trailhead:2, grade:{stamina:1, skill:"A", official:false}},
    {name:"八島湿原 木道一周", stats:"距離 約3.7km / 標高差 約30m / 一周1:10", level:"初級", note:"高層湿原を巡る木道の散策路。ニッコウキスゲ以外にも高山植物が豊富だが、保護柵内・湿原内への立入りは厳禁。",
     popularity:2, trailhead:0, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"ビーナスラインの冬期閉鎖が解ける時期。残雪が残る年もあるが新緑が美しい。",
      6:"ニッコウキスゲが咲き始める。梅雨時は霧が濃く、視界不良による道迷いに注意。",
      7:"ニッコウキスゲが最盛期（例年7月中旬〜下旬）。電気柵で食害から保護されている区画があり立入禁止。観光客で道路・駐車場とも大混雑し、バスは遅延しやすい。",
      8:"花の最盛期は過ぎるが高原らしい涼しさが魅力。午後は雷雲が発達しやすく早めの行動を。",
      9:"マツムシソウなど秋の花とすすきの穂が見頃。台風シーズンは強風に注意。",
      10:"草紅葉（くさもみじ）が見頃。下旬以降はビーナスラインの冬期閉鎖・積雪の可能性があり要確認。",
      11:"積雪・路面凍結のおそれがあり、路線バス・リフトとも運休期に入る。"
    }
  }
}
