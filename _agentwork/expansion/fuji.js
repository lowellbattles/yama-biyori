{
  id:"fuji", name_ja:"富士山", name_en:"Mt. Fuji", region:"富士山", prefecture:"山梨県・静岡県",
  elevation:3776, hyakumeizan:true,
  coords:{lat:35.3606, lon:138.7274}, forecast_elevation:3700,
  grading:{
    ridgeline:3700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:8,
    snow_months:[1,2,3,4,5,6,9,10,11,12],
    snow_note:"独立峰のため山頂は地形に遮られず常時強風に晒され、麓の予報より体感は格段に激しい。標高3,000m超で高山病リスクも高く、開山期(7月〜9月上旬)以外は真夏でも積雪・凍結があり得るため通年で凍結チェック対象とする。"
  },
  trailheads:[
    {
      name:"富士スバルライン五合目（標高2,305m・吉田ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急バス・富士スバルライン五合目線）", from:"富士急行 富士山駅・河口湖駅",
         duration:"約2時間5分（富士山駅から）",
         weekday:"富士山駅発 例: 6:30〜17:30の毎時30分発（マイカー規制期間中）", weekend:"同左",
         season:"2026年7月1日〜9月10日（富士スバルラインのマイカー規制は2026年7/3 18:00〜9/10 18:00）", url:"https://www.fujikyubus.co.jp/mycar/timetablefares/", sample:true},
        {mode:"シャトルバス", line:"富士山パーキング⇔富士スバルライン五合目線（マイカー規制期間限定・富士急バス）", from:"富士山パーキング（富士北麓駐車場、乗換駐車場1,000円/回）",
         duration:"要確認", weekday:"要確認（往復3,400円）", weekend:"要確認",
         season:"2026年7月4日〜9月10日", url:"https://www.fujisanparking.jp/mycar.html", sample:true}
      ]
    },
    {
      name:"吉田口 馬返（標高約1,450m・吉田ルート旧登山道起点）",
      access:[
        {mode:"バス", line:"富士急バス 馬返線", from:"富士急行 富士山駅",
         duration:"要確認", weekday:"要確認（運行本数僅少）", weekend:"要確認",
         season:"要確認（富士急バス公式サイトで要確認）", url:"https://bus.fujikyu.co.jp/rosen/detail/id/5", sample:true}
      ]
    },
    {
      name:"御殿場口新五合目（標高1,440m・御殿場ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急モビリティ・水ヶ塚公園行「Z」系統）", from:"JR御殿場駅 富士山口1番のりば",
         duration:"約30分",
         weekday:"御殿場駅発 例: 7:35 / 10:35 / 13:35 / 15:45", weekend:"御殿場駅発 例: 上記に加え8:40",
         season:"2026年7月10日〜9月10日", url:"https://www.fujikyumobility.com/rosen/k13tob0000000d4j-att/2026summerclimbingbus.pdf", sample:true}
      ]
    },
    {
      name:"須走口五合目（標高2,000m・須走ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急モビリティ・須走口五合目行「Q」系統）", from:"JR御殿場駅 富士山口3番のりば",
         duration:"約1時間",
         weekday:"御殿場駅発 例: 6:45 / 7:45 / 8:40 / 9:40 / 10:40 / 11:40 / 13:00 / 13:55 / 15:30", weekend:"同左",
         season:"2026年7月1日〜9月10日", url:"https://www.fujikyumobility.com/rosen/k13tob0000000d4j-att/2026summerclimbingbus.pdf", sample:true}
      ]
    },
    {
      name:"富士宮口五合目（標高2,400m・富士宮ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急静岡バス・富士宮口五合目行）", from:"JR新富士駅5番のりば・JR富士宮駅6番のりば",
         duration:"新富士駅から約1時間25分（1便） / 富士宮駅から約1時間20分（1便）",
         weekday:"富士宮駅発 例: 6:35 / 8:15 / 10:35 / 11:55 / 14:05 / 16:10（新富士駅発は2便のみ運行日限定 例: 7:30）", weekend:"同左",
         season:"2026年7月10日〜8月30日・9/5・9/6の毎日運行", url:"https://www.shizuokabus.co.jp/noriai-bus_fujitozan/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"本八合目 トモエ館（吉田ルート・須走ルート合流点）", elevation:3400, open:"2026年7月1日〜9月10日", reservation:"完全予約制（Web予約のみ、前日・当日のみ電話可）", url:"https://tomoekan.com/", tel:"0555-24-6511"},
    {name:"元祖七合目 山口山荘（富士宮ルート）", elevation:3010, open:"7月上旬〜9月上旬", reservation:"電話予約（メール・フォーム不可）", url:"https://fujisan-ganso.jp/", tel:"090-7022-2234"},
    {name:"八合五勺 御来光館（吉田ルート・須走ルート合流点、山頂直下）", elevation:3450, open:"2026年7月1日〜9月10日宿泊分まで", reservation:"Web予約のみ（電話予約・ツアー予約不可）", url:"https://www.goraikoukan.jp/", tel:"0555-73-8815"}
  ],
  routes:[
    {name:"吉田ルート（スバルライン五合目〜山頂）往復", stats:"距離 登り6.8km・下り7km / 標高差 約1,471m / 登り6:00・下り4:00",
     level:"中級", note:"日本一の登山者数を誇る定番ルート。2026年は通行予約制・通行料4,000円、五合目ゲートは14:00〜翌3:00閉鎖（山小屋宿泊者は除外）、1日4,000人上限。弾丸登山（山小屋に泊まらず夜通し登る行為）は高山病・低体温症のリスクが高く、行政・関係団体が自粛を呼びかけている。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.138、山梨県本表ではNo.104）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"吉田ルート 馬返起点（吉田口五合目経由）〜山頂 往復", stats:"距離 馬返〜五合目 約3km・登り約3:30 ＋ 五合目〜山頂 登り6:00・下り4:00 / 標高差 約2,326m",
     level:"上級", note:"スバルラインのマイカー規制・バス混雑を避け、一合目から歴史ある吉田口旧登山道を通しで歩く健脚向けコース。馬返にバス停はあるが本数僅少・運行期間は要確認。",
     popularity:1, trailhead:1, grade:{stamina:6, skill:"B", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.139、山梨県本表ではNo.105）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"御殿場ルート（御殿場口新五合目〜山頂）往復", stats:"距離 登り10.5km・下り8.4km / 標高差 約2,336m / 登り9:00・下り4:00",
     level:"上級", note:"4ルート中もっとも標高差が大きい健脚コース。下山の「大砂走り」が名物だが山小屋・水場が少なく十分な装備と体力が必須。2026年は静岡県側の入山手続き（eラーニング修了・入山料4,000円・事前登録）が必要。",
     popularity:2, trailhead:2, grade:{stamina:7, skill:"B", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.140）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"須走ルート（須走口五合目〜山頂）往復", stats:"距離 登り6.9km・下り6.2km / 標高差 約1,776m / 登り7:00・下り4:00",
     level:"中級", note:"樹林帯からスタートし火山礫の道へ。八合目で吉田ルートと合流するため上部は混雑しやすい。下山は砂走りが楽しめる。2026年は静岡県側の入山手続きが必要。",
     popularity:2, trailhead:3, grade:{stamina:6, skill:"B", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.141）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"富士宮ルート（富士宮口五合目〜山頂）往復", stats:"距離 登り4.3km・下り4.3km / 標高差 約1,376m / 登り5:00・下り3:00",
     level:"中級", note:"4ルート中もっとも距離が短く山頂（剣ヶ峰）にも近いが、その分傾斜が急で高度を一気に稼ぐため高山病リスクに注意。2026年は静岡県側の入山手続きが必要。",
     popularity:3, trailhead:4, grade:{stamina:5, skill:"B", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.142）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      1:"厳冬期。無雪期装備での登山は極めて危険で、一般登山者の入山は不可。",
      2:"厳冬期。凍結・雪崩リスクが高く一般登山者の入山は非推奨。",
      3:"残雪多く天候急変も激しい。閉山期のため山小屋・救助体制はない。",
      4:"残雪期。ゲートによる規制がない区間もあるが、天候急変・道迷いに厳重注意。",
      5:"GW前後は残雪期の富士山を目指す登山者もいるが、閉山前で山小屋・救助体制がなく雪山経験と装備が必須。",
      6:"梅雨。開山直前の準備期間。マイカー規制・通行予約・入山手続きの最新情報を各公式サイトで要確認。",
      7:"吉田・須走ルートは7/1、富士宮・御殿場ルートは7/10に開山（2026年）。全ルートでマイカー規制・入山料（各4,000円）・事前登録/通行予約が必須。梅雨明け前後は荒天が残りやすい。",
      8:"登山者最盛期。五合目・山頂・お鉢巡りは大変混雑。弾丸登山（夜通し無休憩で登る行為）は高山病・低体温症のリスクが高く、行政・関係団体が自粛を呼びかけている。午後は雷雨も発生しやすい。",
      9:"2026年は9月10日（木）に閉山。閉山後は山小屋・救助体制が撤収し極めて危険なため、一般登山者の入山自粛が呼びかけられている。上旬までが実質的なラストチャンス。",
      10:"閉山済み。積雪・凍結が本格化し無雪期装備での入山はできない。",
      11:"厳冬期に向け積雪が増加。",
      12:"厳冬期。"
    }
  }
}
