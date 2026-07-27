{
  id:"tokachi", name_ja:"十勝岳", name_en:"Mt. Tokachi", region:"十勝岳連峰", prefecture:"北海道",
  elevation:2077, hyakumeizan:true,
  coords:{lat:43.4178, lon:142.6863}, forecast_elevation:2000,
  grading:{
    ridgeline:1300,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"活火山特有の裸地と低い森林限界（吹上温泉側で標高約1,300m）のため9月には初雪、6月まで雪渓が残ることもあり、本州の同標高の山より積雪・凍結期間が長い。"
  },
  trailheads:[
    {
      name:"望岳台（美瑛町白金・標高930m）",
      access:[
        {mode:"バス", line:"美瑛・白金線（道北バス）", from:"JR富良野線 美瑛駅前",
         duration:"白金温泉まで約26分",
         weekday:"美瑛駅前発 例: 6:55 / 9:00 / 11:05 / 13:45 / 14:45", weekend:"平日と同一ダイヤ（土日祝の別ダイヤ設定なし）",
         season:"通年運行", url:"https://www.dohokubus.com/files/biei_shirogane.pdf", sample:true},
        {mode:"送迎・徒歩", line:"白金温泉〜望岳台間（バス路線なし）", from:"白金温泉バス停",
         duration:"徒歩 約60〜90分（約4〜5km）。白金観光センターの案内でタクシー利用も可",
         weekday:"随時（要事前確認）", weekend:"随時（要事前確認）",
         season:"望岳台防災シェルターの開所期間は5月〜12月（冬期閉鎖）。道道十勝岳温泉美瑛線の望岳台〜吹上温泉間は10月中旬〜4月下旬冬期閉鎖", url:"https://www.biei-hokkaido.jp/ja/facility/mt-tokachi-obesevatory", sample:true}
      ]
    },
    {
      name:"十勝岳温泉登山口（標高1,280m）",
      access:[
        {mode:"バス", line:"十勝岳線（上富良野町営バス）", from:"JR富良野線 上富良野駅（町立病院前バス停）",
         duration:"十勝岳温泉凌雲閣まで約52分",
         weekday:"町立病院前発 例: 8:45 / 12:42 / 16:24（6:58発は山加止まりで登山口方面へ行かない）", weekend:"6月〜9月の土日祝は早朝6:43発を増発",
         season:"通年運行（1月1日運休）。冬期は積雪状況により時刻変更の場合あり", url:"https://www.town.kamifurano.hokkaido.jp/index.php?id=1522", sample:true}
      ]
    },
    {
      name:"吹上温泉登山口（標高1,017m）",
      access:[
        {mode:"バス", line:"十勝岳線（上富良野町営バス）", from:"JR富良野線 上富良野駅（町立病院前バス停）",
         duration:"吹上保養センター白銀荘まで約39分",
         weekday:"町立病院前発 例: 8:45 / 12:42 / 16:24（白銀荘着 9:24 / 13:21 / 17:03。6:58発は山加止まり）", weekend:"6月〜9月の土日祝は早朝6:43発を増発（白銀荘着7:22）",
         season:"通年運行（1月1日運休）。望岳台〜白銀荘間の道道は10月中旬〜4月下旬冬期閉鎖", url:"https://www.town.kamifurano.hokkaido.jp/index.php?id=1522", sample:true}
      ]
    }
  ],
  huts:[
    {name:"十勝岳温泉 湯元凌雲閣", elevation:1280, open:"通年営業（サウナ工事等による臨時休館あり・要問合せ）", reservation:"電話またはWeb予約", url:"https://www.ryounkaku.jp/", tel:"0167-39-4111"},
    {name:"十勝岳温泉 カミホロ荘", elevation:1250, open:"通年営業（要問合せ）", reservation:"Web予約システムまたは電話", url:"https://kamihorosou.com/", tel:"0167-45-2970"},
    {name:"吹上温泉保養センター 白銀荘", elevation:1017, open:"通年営業（自炊専用・要問合せ）", reservation:"電話予約", url:"https://www.kamifurano.jp/archives/facility_item/465/", tel:"0167-45-4126"},
    {name:"十勝岳避難小屋（無人・無料）", elevation:1330, open:"通年開放（水場なし）", reservation:"—", url:"", tel:""},
    {name:"上ホロカメットク避難小屋（カミホロ避難小屋・無人・無料）", elevation:1825, open:"通年開放（トイレあり・雪渓水場は8月上旬まで）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"望岳台コース（十勝岳避難小屋経由）往復", stats:"距離 約8.5km（往復）/ 標高差 約1,147m / 登り3:45・下り2:40", level:"中級", note:"活火山らしい荒涼とした砂礫・熔岩地形。稜線部は遮るものがなく、強風時は行動注意。2026年6月18日に噴火警戒レベル2（火口周辺規制）へ引き上げられ、62-2火口から概ね1.5kmの範囲が立入規制（2026年7月時点で継続・望岳台コースの通行可否に直結）。登山前に気象庁（https://www.data.jma.go.jp/vois/data/sapporo/108_Tokachi/108_index.html）と美瑛町の最新情報を必ず確認。望岳台防災シェルター（開所期間5月〜12月）は緊急避難施設。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false},
     segments:[
       {from:"望岳台登山口", to:"泥流分岐", up:"0:35", down:"0:30"},
       {from:"泥流分岐", to:"雲ノ平分岐", up:"0:20", down:"0:15"},
       {from:"雲ノ平分岐", to:"十勝岳避難小屋", up:"0:10", down:"0:05"},
       {from:"十勝岳避難小屋", to:"十勝岳山頂", up:"2:40", down:"1:50"}
     ], sample:true},
    {name:"十勝岳温泉コース（上ホロカメットク山経由）往復", stats:"距離 約10.5km（往復）/ 標高差 約797m（アップダウンを含む累積標高差はさらに大きい）/ 登り4:05・下り約2:45", level:"中〜上級", note:"上ホロ分岐〜上富良野岳間は約300段の急な木段。大砲岩分岐から山頂へは前十勝（62-2火口）の噴煙を間近に見る稜線歩き。稜線部は遮るものがなく強風時は行動注意。噴火警戒レベル2の間は火口から概ね1.5km以内が立入規制のため、山頂付近の通行可否を上富良野町・気象庁で要確認。カミホロ避難小屋前後は雪渓水場のため水は携行推奨。区間コースタイムは上富良野町「十勝岳連峰登山案内」の走路縦断概要図に基づく。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"十勝岳温泉登山口", to:"三段山分岐", up:"0:20", down:"0:15"},
       {from:"三段山分岐", to:"上ホロ分岐", up:"0:40", down:"0:15"},
       {from:"上ホロ分岐", to:"十勝岳温泉分岐（上富良野岳）", up:"1:15", down:"0:45"},
       {from:"十勝岳温泉分岐（上富良野岳）", to:"十勝岳山頂（上ホロカメットク山・大砲岩分岐経由）", up:"1:50", down:"1:30"}
     ], sample:true},
    {name:"吹上温泉→三段山 往復", stats:"標高差 約731m（1,017m→1,748m）/ 登り2:20・下り1:40", level:"中級", note:"安政火口とすり鉢地形、十勝岳連峰主稜線を見渡す展望コース。落石危険区間（三段山分岐〜山頂）があり、ヘルメット着用のうえ立ち止まらず通過すること。2020年9月23日に長期の通行止めが解除されたが、崩落・落石の危険自体がなくなったわけではない。",
     popularity:2, trailhead:2, grade:{stamina:3, skill:"B", official:false},
     segments:[
       {from:"吹上温泉登山口", to:"三段山頂上", up:"2:20", down:"1:40"}
     ], sample:true},
    {name:"十勝岳温泉⇔望岳台 縦走（十勝岳連峰主稜線）", stats:"片道 約4〜5時間（上ホロカメットク山経由）", level:"上級", note:"起点と終点が異なるため、マイカー回収やタクシー手配など事前の交通計画が必須。稜線は視界不良時に迷いやすく、噴火警戒レベル2の間は山頂付近の通行可否を要確認。",
     popularity:1, trailhead:1, grade:{stamina:6, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期。望岳台〜吹上温泉間の道道は4月下旬〜5月上旬に冬期閉鎖が解除される。雪渓が多く残り、アイゼン等の装備が必要な区間もある。",
      6:"森林限界（約1,300m）より上はまだ雪渓が多い。高山植物が咲き始める一方、沢の雪渓は増水・踏み抜きに注意。",
      7:"高山植物の最盛期。2026年6月18日に噴火警戒レベル2（火口周辺規制）へ引き上げ、62-2火口から概ね1.5km範囲が立入規制（2026年7月時点で継続）。最新情報は気象庁 https://www.data.jma.go.jp/vois/data/sapporo/108_Tokachi/108_index.html で要確認。",
      8:"残雪はほぼ消え、気温も安定するが日中でも5℃前後まで下がることがある。ヒグマの活動期でもあり鈴・スプレー等の対策を。",
      9:"紅葉と初雪が入り混じる時期。上旬は残暑もあるが下旬は初雪の可能性があり防寒装備を。",
      10:"中旬から望岳台〜吹上温泉間の道道が順次冬期閉鎖となる。降雪・凍結が本格化する。"
    }
  }
}
