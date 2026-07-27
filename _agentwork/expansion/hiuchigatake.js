{
  id:"hiuchigatake", name_ja:"燧ヶ岳", name_en:"Mt. Hiuchigatake", region:"尾瀬", prefecture:"福島県",
  elevation:2356, hyakumeizan:true,
  coords:{lat:36.9530, lon:139.2872}, forecast_elevation:2300,
  grading:{
    ridgeline:2200,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"尾瀬一帯は日本有数の豪雪地帯。山頂直下の雪田は6月まで残ることが多く、逆に10月には初雪の便りが届く。残雪期の御池コースはアイゼン・ピッケル必携。活火山でもあるため、噴火警戒レベルは登山前に気象庁サイトで要確認 https://www.data.jma.go.jp/vois/data/sendai/216_Hiuchigatake/216_index.html"
  },
  trailheads:[
    {
      name:"御池登山口（御池駐車場・標高約1,505m）",
      access:[
        {mode:"バス", line:"檜枝岐線 尾瀬御池・尾瀬沼山峠方面行き（会津バス）", from:"会津鉄道 会津田島駅",
         duration:"約2時間",
         weekday:"会津田島駅発 例: 10:00 / 11:00 / 12:50 / 14:20", weekend:"同左（土休日も同ダイヤ）",
         season:"通年運行（積雪状況により変更あり。尾瀬御池〜尾瀬沼山峠間のみ2026年は5/23〜10/25限定運行）", url:"https://www.aizubus.com/travel/oze/", sample:true}
      ]
    },
    {
      name:"沼山峠（標高1,784m）",
      access:[
        {mode:"シャトルバス", line:"尾瀬御池⇔尾瀬沼山峠シャトルバス（会津バス）", from:"尾瀬御池",
         duration:"約20分（前のバス出発後約30〜40分間隔で随時運行）",
         weekday:"御池発 6:30〜16:30の間随時（10/13以降は7:00〜16:30）", weekend:"同左",
         season:"2026年は5月23日〜10月25日", url:"https://news.aizubus.com/entry/2026/05/15/093130", sample:true},
        {mode:"バス", line:"檜枝岐線 尾瀬沼山峠行き（会津バス・御池経由の直通便）", from:"会津鉄道 会津田島駅",
         duration:"約2時間20分",
         weekday:"会津田島駅発 例: 10:00 / 11:00 / 12:50 / 14:20（沼山峠まで直通運行は御池〜沼山峠間の運行期間のみ）", weekend:"同左",
         season:"2026年は御池〜沼山峠間5月23日〜10月25日", url:"https://www.aizubus.com/travel/oze/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"尾瀬御池ロッジ", elevation:1500, open:"例年5月下旬〜10月上旬（B&B形式。夕食は持込または「山の駅 御池」利用）", reservation:"電話予約", url:"http://www.ozejin-yamagoya.jp/", tel:"080-2844-8873"},
    {name:"長蔵小屋", elevation:1670, open:"2026年4月28日〜10月24日", reservation:"オンライン予約・電話予約・メールフォーム", url:"https://chozogoya.com/", tel:"050-1725-7100"},
    {name:"尾瀬沼ヒュッテ", elevation:1665, open:"2026年5月23日〜10月24日", reservation:"電話予約", url:"https://www.oze-info.jp/ozh_stay/ozenumahutte/", tel:"080-5734-7272"}
  ],
  routes:[
    {name:"御池コース（広沢田代・熊沢田代経由）往復", stats:"距離 約9km / 標高差 約850m / 登り約4:00・下り約3:00", level:"中級", note:"広沢田代・熊沢田代の湿原を抜けて稜線へ。山頂直下は岩稜・ザレ場のトラバースで疲労時の転倒・滑落に注意。残雪期はアイゼン・ピッケル必携。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"B", official:false}},
    {name:"長英新道（尾瀬沼経由）往復", stats:"距離 約13km / 標高差 約950m / 登り約3:30・下り約3:00（沼山峠起点）", level:"中級", note:"沼山峠から大江湿原・尾瀬沼を経て長英新道を登る、燧ヶ岳登山者が最も多いルート。他コースより傾斜が緩やかだが、雪解け期・降雨後は泥濘が激しくスパッツ推奨。",
     popularity:3, trailhead:1, grade:{stamina:6, skill:"B", official:false}},
    {name:"燧ヶ岳〜見晴新道 縦走（御池起点）", stats:"距離 約12km / 御池→山頂（俎嵓・柴安嵓）→見晴（尾瀬ヶ原）", level:"上級", note:"尾瀬ヶ原へ最短で下れるが、雨天直後は泥濘が激しい。尾瀬保護財団は下山が遅れて暗くなることを避けるよう、早朝出発と自身の体力に合ったルート選びを呼びかけている。",
     popularity:1, trailhead:0, grade:{stamina:7, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"御池・沼山峠エリアの営業開始（例年5月下旬〜）。山頂直下や田代周辺はまだ残雪が多く、雪山装備が必須。",
      6:"梅雨期。熊沢田代・広沢田代の湿原に高山植物が咲き始めるが、残雪と泥濘の両方に注意。",
      7:"広沢田代のワタスゲが見頃（例年7月上旬〜中旬）。梅雨明け後が狙い目。",
      8:"夏山本番。午後は稜線の雷雨に注意し、早めの行動を。",
      9:"秋の高気圧が安定し、虫も減って歩きやすい時期。",
      10:"大江湿原などの草紅葉・紅葉が見頃。バス運行が10/25までのため、下旬に登る場合は事前に運行状況を確認。"
    }
  }
}
