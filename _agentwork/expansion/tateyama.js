{
  id:"tateyama", name_ja:"立山（大汝山）", name_en:"Mt. Tateyama (Onanjiyama)", region:"立山連峰", prefecture:"富山県",
  elevation:3015, hyakumeizan:true,
  coords:{lat:36.575959, lon:137.619808}, forecast_elevation:3000,
  grading:{
    ridgeline:3000,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"一ノ越から雄山・大汝山にかけての岩稜は7月上旬まで雪渓が残ることがあり、アイゼン・ピッケルの要否を要判断。9月末以降は稜線の初雪・凍結にも注意。3,000m級のため気温は麓より18〜20℃低い。なお立山（弥陀ヶ原）は気象庁の常時観測火山（噴火警戒レベル1・2019年5月30日発表以降継続）で、室堂近くの地獄谷は高濃度の火山ガスのため立入禁止が続く。みくりが池温泉周辺でもガス臭時は滞留を避け、最新状況は気象庁の弥陀ヶ原ページ（data.jma.go.jp/vois/data/tokyo/309_Midagahara/309_index.html）で確認を。"
  },
  trailheads:[{
    name:"室堂ターミナル（標高2,450m）",
    access:[
      {mode:"電車", line:"富山地方鉄道 立山線", from:"電鉄富山駅（JR富山駅）",
       duration:"約1時間",
       weekday:"要確認", weekend:"要確認",
       season:"通年", url:"https://www.chitetsu.co.jp/?page_id=18889", sample:true},
      {mode:"ケーブルカー", line:"立山ケーブルカー（立山黒部貫光）", from:"立山駅（標高475m）",
       duration:"約7分／1.3km",
       weekday:"立山駅発 例: 6:40 / 7:00（以降は運行日限定便が混在し等間隔ではない。全便は公式時刻表で要確認）", weekend:"同左（繁忙期は増発の場合あり）",
       season:"2026年度は4/15〜11/3（11/4〜11/30は別紙ダイヤに切替）", url:"https://www.alpen-route.com/", sample:true},
      {mode:"バス", line:"立山高原バス（立山黒部貫光）", from:"美女平駅（標高977m）",
       duration:"約50分（美女平→弥陀ヶ原 約30分/15km、弥陀ヶ原→室堂 約20分/8km）",
       weekday:"要確認（立山ケーブルカーの到着に接続して運行）", weekend:"要確認",
       season:"2026年度は4/15〜11/3（弥陀ヶ原・弘法の乗降可能期間は7/1〜11/10予定）", url:"https://www.alpen-route.com/", sample:true},
      {mode:"バス・ケーブルカー・ロープウェイ", line:"立山黒部アルペンルート 長野側（関電トンネル電気バス→黒部ケーブルカー→立山ロープウェイ→立山トンネルトロリーバス）", from:"扇沢",
       duration:"約2時間（乗り継ぎ含む）",
       weekday:"要確認", weekend:"要確認",
       season:"2026年度は4/15〜11/30（11/4〜11/30は別紙ダイヤ）", url:"https://www.alpen-route.com/", sample:true}
    ]
  }],
  huts:[
    {name:"一の越山荘", elevation:2700, open:"2026年は4/25（土）〜10/17（土）夜の宿泊分まで", reservation:"電話予約制", url:"http://tateyama-1nokoshi.in.coocan.jp/", tel:"090-1632-4629"},
    {name:"みくりが池温泉", elevation:2410, open:"2026年は4/15〜11/24（6/14〜26は改修工事のため休館予定）・日本一高所の天然温泉、日帰り入浴9:00〜16:00", reservation:"Web予約（クレジット決済）または電話予約（現地精算）", url:"https://www.mikuri.com/", tel:"076-463-1441"}
  ],
  routes:[
    {name:"室堂→一ノ越→雄山→大汝山 往復", stats:"距離 約7.4km / 標高差 約565m / 登り2:30・下り2:00", level:"中級", note:"立山の最高点・大汝山まで足を延ばす最も一般的なコース。一ノ越までは整備された歩きやすい道、雄山からは岩稜歩き。山頂直下の雄山神社峰本社は例年7/1〜9/30開山（登拝料 大人700円・小人300円、御祈祷受付8:00〜15:00）。3,000m級のため天候急変・落雷・低体温症に厳重注意。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false}},
    {name:"雄山 往復（室堂ターミナル）", stats:"距離 5.8km / 標高差 約553m / 登り2:00・下り1:30", level:"初級〜中級", note:"富山県グレーディング公表ルート。大汝山へは向かわず雄山山頂（雄山神社峰本社）で折り返す最短コース。初めての3,000m峰入門として人気。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}},
    {name:"雄山→真砂岳 周回＜大走り下山＞（室堂ターミナル）", stats:"距離 約9.1km / 標高差 累積970m / 登り3:00・周回6:00", level:"中級", note:"富山県グレーディング公表ルート。一ノ越から雄山・大汝山（ルート中の最高点）を経て真砂岳へ縦走し、大走りの雪渓・ザレ場を室堂へ一気に下る立山三山周回コース。下山路は落石・スリップに注意。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      4:"立山黒部アルペンルートは例年4/15前後に富山側が全線開通するが、室堂周辺はまだ厳冬期の様相。無雪期登山道はまだ開かない。",
      5:"一ノ越山荘は例年4月下旬に開山するが、登山道には残雪・雪渓が多く残り雪山装備が必須。視界不良時の道迷いに注意。",
      6:"梅雨。稜線は年によって残雪が多く、雪渓のトラバースにアイゼン・ピッケルが必要な区間が残ることがある。",
      7:"7/1に雄山神社峰本社が開山（登拝料が必要）。上旬はまだ雪渓が残ることがあり、下旬から本格的な夏山シーズンに。",
      8:"シーズン最盛期。稜線ではコマクサ・チングルマ等の高山植物が見頃。午後は雷雲が発生しやすく、早朝出発・早めの行動を。",
      9:"9/30で雄山神社峰本社が閉山。中旬から紅葉が始まり、下旬には稜線で初雪の可能性も出てくる。",
      10:"2026年は10/17に一の越山荘が閉山。稜線は根雪が始まる年もあり、防寒・防風・アイゼンなど積雪期に準ずる装備が必要。",
      11:"アルペンルート富山側の本シーズンは11/3で終了（11/4〜11/30は別ダイヤの短縮運行）。厳冬期に近い状況で、雪山の経験と装備が必須。"
    }
  }
}
