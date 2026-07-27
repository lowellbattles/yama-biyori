{
  id:"hachimantai", name_ja:"八幡平", name_en:"Mt. Hachimantai", region:"八幡平", prefecture:"岩手県・秋田県",
  elevation:1613, hyakumeizan:true,
  coords:{lat:39.9576, lon:140.8541}, forecast_elevation:1600,
  grading:{
    ridgeline:1550,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"東北の高原火山で森林限界が低く、雪解けが遅い。八幡平アスピーテラインは例年11月上旬〜4月中旬が冬期閉鎖（2026年度は4/15 10:00開通）で、開通直後は登山道にも残雪が多い。雪解け模様「ドラゴンアイ」が5月下旬〜6月中旬に見られるほど遅くまで雪田が残る。"
  },
  trailheads:[{
    name:"見返峠駐車場（八幡平頂上口・標高約1,540m）",
    access:[
      {mode:"バス", line:"八幡平自然散策バス（岩手県北バス）", from:"JR盛岡駅前",
       duration:"約2時間5分（帰路は八幡平頂上発 例: 春期14:00／夏秋期14:55、盛岡駅前着 春期15:45／夏秋期17:15）",
       weekday:"盛岡駅前発 例: 9:10（八幡平頂上着11:15）", weekend:"平日と同ダイヤ（1日1往復・土日祝の区別なし）",
       season:"2026年度は4/18〜10/25運行（【春】4/18〜6/5・【夏秋】6/6〜10/25で復路ダイヤが一部異なる）", url:"https://www.iwate-kenpokubus.co.jp/regular/map/morioka/hachimantai/", sample:true},
      {mode:"車", line:"八幡平アスピーテライン（無料の県道大更八幡平線）", from:"盛岡市街（東北自動車道 松尾八幡平IC経由）",
       duration:"約1時間30分", weekday:"—", weekend:"—",
       season:"アスピーテライン開通期間のみ通行可（2026年度は4/15 10:00開通、例年11月上旬冬期閉鎖）", url:"https://www.env.go.jp/nature/nationalparks/list/towada-hachimantai/course/10/", sample:true}
    ]
  },{
    name:"茶臼口（標高約1,550m）",
    access:[
      {mode:"バス", line:"八幡平自然散策バス（岩手県北バス）", from:"JR盛岡駅前",
       duration:"約1時間40分",
       weekday:"盛岡駅前発 例: 9:10（茶臼口着10:50）", weekend:"平日と同ダイヤ（1日1往復・土日祝の区別なし）",
       season:"2026年度は4/18〜10/25運行", url:"https://www.iwate-kenpokubus.co.jp/regular/map/morioka/hachimantai/", sample:true}
    ]
  }],
  huts:[
    {name:"八幡平山頂レストハウス（売店・軽食のみ・宿泊不可）", elevation:1540, open:"アスピーテライン開通期間（4月下旬〜11月上旬）9:00〜17:00（夜間通行止め期間は〜16:30）",
     reservation:"—", url:"https://www.pref.iwate.jp/sangyoukoyou/kankou/camp/1009242.html", tel:"0195-78-3500"},
    {name:"陵雲荘（八幡平避難小屋）", elevation:1520, open:"通年開放（無人・積雪期は埋もれる年あり）",
     reservation:"避難小屋のため予約不要。収容約30人・原則備品なし（岩手県設置、平成15年改築、管理: 公益財団法人自然公園財団八幡平支部）", url:"", tel:""},
    {name:"茶臼岳避難小屋（茶臼山荘）", elevation:1550, open:"通年開放（無人）",
     reservation:"避難小屋のため予約不要。収容約12人・原則備品なし（岩手県設置、平成16年、管理: 公益財団法人自然公園財団八幡平支部）", url:"", tel:""},
    {name:"藤七温泉 彩雲荘", elevation:1400, open:"4月下旬〜10月下旬（東北最高所の秘湯・日帰り入浴8:00〜17:00）",
     reservation:"電話または公式サイトで要予約", url:"https://toushichi.com/", tel:"090-1495-0950"}
  ],
  routes:[
    {name:"八幡平頂上 往復（見返峠コース）", stats:"距離 往復約1.6km / 標高差 約70m / 登り0:30・下り0:30", level:"初級",
     note:"見返峠駐車場から山頂までほぼ木道・砂利道の平坦路で、日本百名山でも屈指の手軽さ。山頂は展望デッキ状。八幡平は気象庁が常時観測する活火山でもあるため、最新の噴火に関する情報は気象庁サイトで事前確認を: https://www.data.jma.go.jp/vois/data/sendai/206_Hachimantai/206_index.html",
     popularity:3, trailhead:0, grade:{stamina:1, skill:"A", official:false},
     segments:[
       {from:"見返峠駐車場", to:"八幡平頂上", up:"0:30", down:"0:30"}
     ], sample:true},
    {name:"八幡平自然探勝路 周回（八幡沼・源太森めぐり）", stats:"距離 約5.6km / 標高差 約150m / 周回2:30", level:"初〜中級",
     note:"環境省公式の周回コース。見返峠展望台・源太森を経て八幡平頂上へ戻る、湿原と沼をめぐる散策路。八幡沼、鏡沼（ドラゴンアイ）、ガマ沼、陵雲荘などを望める。木道中心だが2時間半の行程なので防寒・雨具は携行を。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"見返峠駐車場", to:"見返峠展望台", up:"0:20"},
       {from:"見返峠展望台", to:"源太森", up:"1:00"},
       {from:"源太森", to:"八幡平頂上", up:"0:40"},
       {from:"八幡平頂上", to:"見返峠駐車場", down:"0:30"}
     ], sample:true},
    {name:"裏岩手縦走路 入口（茶臼口→茶臼岳→八幡平）", stats:"距離 約8km（茶臼口→八幡平頂上）/ 標高差 累積約300m / 縦走3:00〜3:30（時間未公表のため独自推定）", level:"中級",
     note:"茶臼口から茶臼山荘（茶臼岳避難小屋）、黒谷地湿原、源太森を経て八幡平頂上へ抜ける裏岩手連峰縦走路の入口区間。起点と終点が異なるため、バス利用か車2台のデポが必要。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,7,8,9,10],
    notes:{
      4:"4月中旬（2026年度は4/15 10:00）にアスピーテラインが冬期閉鎖から開通。道の両側に雪の回廊が残り、登山道にも残雪が多い時期。軽アイゼンがあると安心。",
      5:"残雪期が続く。5月下旬から鏡沼の雪解け模様「ドラゴンアイ」が話題になり始め、見返峠駐車場周辺が混雑・渋滞することがある。",
      6:"ドラゴンアイの見頃（例年5月下旬〜6月中旬）。ワタスゲやヒナザクラなど湿原の花も咲き始める。",
      7:"高山植物が最盛期に近づく。「キスゲ通り」のニッコウキスゲは7月下旬から見頃を迎える。",
      8:"ニッコウキスゲが見頃（7月下旬〜8月上旬）。夏でも稜線は風が強く冷え込む日があるため防寒着を。",
      9:"下旬から紅葉が始まる。人出が増えるため見返峠駐車場は早朝到着が無難。",
      10:"紅葉のピーク（例年9月下旬〜10月中旬）。中旬以降は初雪の便りも届く。夜間通行止め（例年17:00〜翌8:30）が始まる年あり。",
      11:"上旬（例年11月4日前後）でアスピーテラインが冬期閉鎖。積雪期の入山は雪山装備と経験が必須。"
    }
  }
}
