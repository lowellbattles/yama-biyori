{
  id:"aso", name_ja:"阿蘇山（高岳）", name_en:"Mt. Aso (Takadake)", region:"阿蘇", prefecture:"熊本県",
  elevation:1592, hyakumeizan:true,
  coords:{lat:32.8842, lon:131.1039}, forecast_elevation:1500,
  grading:{
    ridgeline:1500,
    wind_caution:11, wind_danger:18,
    precip_caution:4, precip_danger:12,
    snow_months:[12,1,2],
    snow_note:"九州でも火口原は森林限界同然に開けた草原・岩礫地で、積雪そのものより暴風とアイスバーンが主なリスク。冬型が強まる日は防寒・耐風装備必須。"
  },
  trailheads:[
    {
      name:"仙酔峡登山口（標高約911m）",
      access:[
        {mode:"マイカー", line:"路線バスなし（仙酔峡ロープウェーは休止中）。仙酔峡駐車場（無料・約100台）を利用", from:"九州自動車道 熊本IC／大分自動車道 熊本空港IC",
         duration:"約50分（国道57号・県道111号経由）",
         weekday:"—", weekend:"—",
         season:"通年（火口周辺規制の発令状況により登山可否が変わるため事前確認必須）", url:"https://www.city.aso.kumamoto.jp/tourism/event_tourist/mountain-climbing/", sample:true},
        {mode:"タクシー", line:"宮地駅⇔仙酔峡（要予約・定期路線バスなし）", from:"JR豊肥本線 宮地駅",
         duration:"約15分（要確認）",
         weekday:"要予約", weekend:"要予約",
         season:"通年", url:"https://www.asokankou.com/", sample:true}
      ]
    },
    {
      name:"阿蘇山上ターミナル・古坊中（標高約1,120m）",
      access:[
        {mode:"バス", line:"阿蘇登山線（産交バス）", from:"JR豊肥本線 阿蘇駅",
         duration:"約35分",
         weekday:"阿蘇駅前発 例: 9:40 / 10:25 / 11:50 / 12:45 / 13:25 / 14:10 / 14:35（山上ターミナル発 例: 11:05 / 11:55 / 12:40 / 13:15 / 13:50 / 14:25 / 14:50 / 15:40 / 16:30）", weekend:"平日・土曜・日祝とも共通ダイヤ（上記と同一）",
         season:"通年運行（悪天候・道路規制時は運休の場合あり。ダイヤは2026年5月11日改正）", url:"https://www.sankobus.jp/bus/asosen/", sample:true}
      ]
    }
  ],
  huts:[],
  routes:[
    {name:"仙酔峡ルート（仙酔尾根） 往復", stats:"距離 約6.6km / 標高差 約680m / 登り2:15・下り1:45", level:"中級", note:"通称「バカ尾根」。火山礫の急登が続く最短ルート。ミヤマキリシマは5月下旬が見頃。噴火警戒レベル2の火口周辺規制（中岳第一火口から概ね1km）が続く場合は「すずめ岩迂回ルート」経由。登山前に気象庁 阿蘇山の火山情報（https://www.data.jma.go.jp/vois/data/report/activity_info/503.html）で最新のレベル・規制範囲を必ず確認すること。2026年7月時点でレベル3以上は登山不可。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"仙酔峡登山口", to:"中岳", up:"1:50", down:"1:20"},
       {from:"中岳", to:"高岳山頂", up:"0:25", down:"0:25"}
     ], sample:true},
    {name:"砂千里ルート（皿山迂回） 往復", stats:"距離 約9km / 標高差 約470m / 登り2:30・下り1:50", level:"初〜中級", note:"阿蘇山上ターミナル（古坊中駐車場）起点。火山灰・砂礫の道で滑りやすい。2026年6月15日〜7月31日（予定）は緊急工事のため砂千里ヶ浜そのものは立入禁止で、皿山経由の迂回路を利用（工事終了後の状況は要確認）。火口周辺規制（噴火警戒レベル2・概ね1km規制）が続く間も皿山迂回ルートで中岳・高岳への登山が可能だが、レベル3以上は登山不可。最新の通行止め情報は九州地方環境事務所（https://kyushu.env.go.jp/topics_00254.html）で確認を。",
     popularity:3, trailhead:1, grade:{stamina:3, skill:"B", official:false},
     segments:[
       {from:"阿蘇山上ターミナル（古坊中）", to:"中岳", up:"2:05", down:"1:25"},
       {from:"中岳", to:"高岳山頂", up:"0:25", down:"0:25"}
     ], sample:true},
    {name:"仙酔峡⇔阿蘇山上ターミナル 縦走（高岳・中岳経由）", stats:"距離 約9〜10km / 標高差 累積約700m / 行動時間 4〜5時間", level:"中級", note:"起点と終点が異なる（マイカー回送またはタクシー・産交バスの組み合わせが必要）。火口周辺規制の状況によっては皿山・すずめ岩の両迂回ルートを経由する必要があり、通常より時間がかかる。",
     popularity:1, trailhead:null, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{
      4:"春本番。草原が芽吹き始める。火口周辺規制の状況を出発前に必ず確認。",
      5:"ミヤマキリシマが仙酔尾根・高岳周辺で見頃（例年5月下旬）。1年で最も混雑する時期。",
      6:"梅雨入り。火山灰混じりの登山道は雨で滑りやすく、ガスで視界不良になりやすい。",
      7:"梅雨明け後は酷暑。火口原は日陰がなく直射日光と照り返しが強いため水分・塩分補給を多めに。台風接近時はバス・シャトルとも運休の可能性。",
      8:"夏山シーズンだが火山ガス濃度が上がりやすい時期でもある。喘息・呼吸器疾患のある人は無理をしないこと。",
      9:"台風シーズン。産交バス・阿蘇山火口シャトルとも荒天時は運休するため事前に運行状況を確認。",
      10:"ススキの草原と秋晴れが美しい季節。朝晩は冷え込み始めるので防寒を。",
      11:"紅葉と初冬の便り。中旬以降は強風・低温対策を。",
      12:"積雪は少ないが火口原は風の通り道で体感温度が低く、アイスバーンにも注意。"
    }
  }
}
