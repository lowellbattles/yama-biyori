{
  id:"yotei", name_ja:"羊蹄山（後方羊蹄山）", name_en:"Mt. Yotei (Ezo-Fuji)", region:"後方羊蹄", prefecture:"北海道",
  elevation:1898, hyakumeizan:true,
  coords:{lat:42.8270, lon:140.8068}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"独立した円錐火山で9合目から上は樹林が完全に切れ、風を遮るものが無い。日本海側特有の急変する天候の影響を直接受けるため、本州の同標高帯より風のしきい値を厳しめに設定。融雪も遅く6月まで山頂部に残雪が残る年がある一方、9月末には初雪の便りが届くこともある。"
  },
  trailheads:[
    {
      name:"倶知安（比羅夫）コース登山口 半月湖畔（標高350m）",
      access:[
        {mode:"バス", line:"道南バス 倶知安線（倶知安〜真狩〜留寿都〜洞爺湖温泉線）", from:"JR函館本線 倶知安駅前",
         duration:"約12分（「羊蹄登山口」下車、登山口駐車場まで徒歩約25分）",
         weekday:"倶知安駅前発 例: 6:45 / 8:10 / 11:05 / 12:15 / 13:45 / 15:45 / 18:10", weekend:"倶知安駅前発 例: 8:10 / 11:05 / 12:15 / 13:45 / 15:45 / 18:10",
         season:"通年運行（詳細は公式サイトで要確認）", url:"https://www.donanbus.co.jp/map/toyako_makkari/", sample:true}
      ]
    },
    {
      name:"真狩コース登山口 羊蹄山自然公園（標高399m）",
      access:[
        {mode:"バス", line:"道南バス 倶知安線（倶知安〜真狩〜留寿都〜洞爺湖温泉線）", from:"JR函館本線 倶知安駅前",
         duration:"約35分（「羊蹄自然公園入口」下車、登山口まで徒歩約20分）",
         weekday:"倶知安駅前発 例: 6:45 / 8:10 / 11:05 / 12:15 / 13:45 / 15:45 / 18:10", weekend:"倶知安駅前発 例: 8:10 / 11:05 / 12:15 / 13:45 / 15:45 / 18:10",
         season:"通年運行（詳細は公式サイトで要確認）", url:"https://www.donanbus.co.jp/map/toyako_makkari/", sample:true}
      ]
    },
    {
      name:"喜茂別コース登山口（標高360m）",
      access:[
        {mode:"車", line:"路線バスなし。道道97号（豊浦京極線）沿い", from:"倶知安市街・喜茂別市街",
         duration:"要確認（自家用車・タクシーのみ、比羅夫方面からアクセスする場合は倶知安駅から車で約50分）",
         weekday:"要確認", weekend:"要確認",
         season:"6月上旬〜10月上旬（登山道・入山箱を管理する期間、年により変動）", url:"https://www.town.kimobetsu.hokkaido.jp/tourism/detail.php?content=189", sample:true}
      ]
    },
    {
      name:"京極コース登山口 ふきだし公園奥（標高約560m）",
      access:[
        {mode:"車", line:"路線バスなし。京極ふきだし公園経由", from:"倶知安市街・京極市街",
         duration:"要確認（自家用車・タクシーのみ）",
         weekday:"要確認", weekend:"要確認",
         season:"夏〜秋（山開き期間）", url:"https://kyogoku-kanko.jp/yotei.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"羊蹄山避難小屋（9合目）", elevation:1730, open:"通年開放（無人）。自然保護監視員・小屋番が常駐するのは6月中旬〜10月中旬", reservation:"緊急避難以外での宿泊を検討する場合は必ず事前に倶知安町へ連絡（1日10名まで）。宿泊協力費3,000円・休憩協力費300円。水・食糧の販売はなく要持参、トイレはバイオトイレで使用済み紙は持ち帰り。", url:"https://www.town.kutchan.hokkaido.jp/tourism/yoteizan/hinangoya/", tel:"0136-23-3388"}
  ],
  routes:[
    {name:"倶知安（比羅夫）コース 往復", stats:"標高差 約1,550m / 登り5:00（公式コースガイド区間タイム合計）", level:"上級", note:"4コース中もっとも歩かれている定番ルート。7合目まではエゾマツ・ダケカンバの樹林とハイマツ帯、8合目からはガレ場で足元に注意。9合目からは羊蹄小屋経由・北山経由の2ルートで山頂へ。羊蹄山は気象庁が指定する活火山（現在は噴火予報「活火山であることに留意」）。最新の火山情報は気象庁の火山活動状況ページ https://www.data.jma.go.jp/vois/data/sapporo/117_Yotei/117_index.html で確認を。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"B", official:false},
     segments:[
       {from:"登山口駐車場", to:"風穴（2合目）", up:"1:40"},
       {from:"風穴（2合目）", to:"9合目", up:"2:40"},
       {from:"9合目", to:"羊蹄山山頂", up:"0:40"}
     ], sample:true},
    {name:"真狩コース 往復", stats:"標高差 約1,500m / 登り4:40（公式コースガイド区間タイム合計）", level:"上級", note:"距離は4コース中最長だが勾配は比較的緩やか。4合目から上は傾斜が急になりジグザグが続く。標高1,600m付近（8合目）の空荷ガレ場のトラバースはロープ設置箇所もあるが足場に注意、南東の火口壁は痩せた岩場で滑落注意。",
     popularity:3, trailhead:1, grade:{stamina:6, skill:"B", official:false},
     segments:[
       {from:"羊蹄山自然公園", to:"羊蹄自然の家", up:"0:20"},
       {from:"羊蹄自然の家", to:"南コブ分岐", up:"0:30"},
       {from:"南コブ分岐", to:"9合目", up:"2:00"},
       {from:"9合目", to:"羊蹄山山頂", up:"1:50"}
     ], sample:true},
    {name:"京極コース 往復", stats:"標高差 約1,340m / 登り4:10・下り3:00（京極町観光協会公式）", level:"上級", note:"4コース中もっとも距離が短く直線的だが、その分傾斜が強い。7合目からジグザグを繰り返し、上部は岩場の崩壊が進んでいるため落石・浮き石に注意。公共交通機関なし。",
     popularity:2, trailhead:3, grade:{stamina:5, skill:"B", official:false}},
    {name:"喜茂別コース 往復", stats:"標高差 約1,540m / 登り約4:15（倶知安町公式ガイド）", level:"上級", note:"4コース中もっとも利用者が少なく整備水準もやや低い。4合目・8合目付近は沢の崩壊で足場の悪い箇所があり要注意。登山前に入山者名簿への記入が必須、公共交通機関なし。",
     popularity:1, trailhead:2, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪期。登山道はまだ雪に埋もれている年が多く、無雪期の一般登山向きではない。",6:"中旬に避難小屋の管理人が常駐を開始。上部にはまだ残雪が残ることがあり、下旬から本格的なシーズンイン。",7:"花の最盛期。9合目より上の高山植物帯が見頃。梅雨明け後の晴天日が狙い目。",8:"もっとも登山者が多い最盛期。周辺地区でヒグマの目撃情報が例年報告されており注意。",9:"秋晴れが増える好期。下旬から紅葉が始まり、初雪の便りが届き始めることもある。",10:"中旬に避難小屋の管理人常駐が終了。上部では積雪・凍結のリスクが急速に高まる。",11:"初冬で降雪が本格化し、一般の登山道としては閉山状態。経験者以外は入山を控える。"}
  }
}
