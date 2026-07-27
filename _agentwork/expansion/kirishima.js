{
  id:"kirishima", name_ja:"霧島山（韓国岳）", name_en:"Mt. Karakuni (Kirishima)", region:"霧島", prefecture:"鹿児島県・宮崎県",
  elevation:1700, hyakumeizan:true,
  coords:{lat:31.9342, lon:130.8617}, forecast_elevation:1600,
  grading:{
    ridgeline:1600,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:12,
    snow_months:[12,1,2],
    snow_note:"南九州の活火山だが山頂・稜線は森林限界を超えた裸地で風を遮るものがなく、冬型の気圧配置時は体感が厳しい。積雪自体は少なめだが霧氷・路面凍結は起こる。梅雨期(6月)と台風期(7〜9月)は大雨・強風のリスクが本州の山より高いため降水しきい値を厳しめに設定。"
  },
  trailheads:[
    {
      name:"えびの高原（えびのエコミュージアムセンター前・標高約1,200m）",
      access:[
        {mode:"バス", line:"鹿児島空港アクセスバス（南国交通・鹿児島交通、通称「霧島神宮アクセスバス」）", from:"鹿児島空港",
         duration:"約30分（丸尾まで）",
         weekday:"鹿児島空港発 例: 9:30 / 12:30 / 14:30（丸尾着 10:00 / 13:00 / 15:00）", weekend:"平日ダイヤに加え17:20発（丸尾着17:50）を増便",
         season:"通年運行（令和8年4月1日以降ダイヤ）。丸尾で霧島連山周遊バスに乗り継ぎ。", url:"https://www.city-kirishima.jp/kirikan/kanko/bus/kirishimajingubus.html", sample:true},
        {mode:"バス", line:"霧島連山周遊バス（鹿児島交通・国分営業所）", from:"丸尾（霧島温泉郷）",
         duration:"約26分",
         weekday:"丸尾発 例: 8:30 / 10:30 / 12:30（えびの高原着 8:56 / 10:56 / 12:56）", weekend:"同左（土日祝も平日と共通ダイヤ）",
         season:"毎日運行（2026年4月1日改正ダイヤ）。積雪や火山活動により運休する場合あり。", url:"https://www.city-kirishima.jp/kirikan/kanko/shizen/documents/mtkirishimaexcursionbustimetable.pdf", sample:true},
        {mode:"バス", line:"宮崎交通（宮崎県側・季節運行で本数僅少）", from:"JR吉都線 京町温泉駅",
         duration:"要確認",
         weekday:"要確認（2026年7月時点、宮崎交通公式サイトの路線別時刻表ページでえびの高原方面の常設掲載を確認できず。運行の有無・時刻はお客様センターへ要問合せ）", weekend:"要確認",
         season:"要確認", url:"https://www.miyakoh.co.jp/rosen/timetable-rosen.html", sample:true}
      ]
    },
    {
      name:"大浪池登山口（標高約1,070m）",
      access:[
        {mode:"バス", line:"霧島連山周遊バス（鹿児島交通・国分営業所）", from:"丸尾（霧島温泉郷）",
         duration:"約20分",
         weekday:"丸尾発 例: 8:30 / 10:30 / 12:30（大浪池登山口着 8:50 / 10:50 / 12:50）", weekend:"同左",
         season:"毎日運行（2026年4月1日改正ダイヤ）。積雪や火山活動により運休する場合あり。", url:"https://www.city-kirishima.jp/kirikan/kanko/shizen/documents/mtkirishimaexcursionbustimetable.pdf", sample:true}
      ]
    }
  ],
  huts:[
    {name:"韓国岳避難小屋（無人）", elevation:1600, open:"通年開放（無人の緊急避難用、宿泊利用の想定なし）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"えびの高原→韓国岳 往復", stats:"距離 約3.8km / 標高差 約500m / 登り1:30・下り1:10", level:"初級", note:"えびのエコミュージアムセンター前から韓国岳登山道休憩所を経て山頂へ。硫黄山方面への下山路（韓国岳〜硫黄山北登山口）は火山ガス規制のため通行不可なので往復のみ利用する。2026年7月現在、新燃岳は噴火警戒レベル2（火口周辺規制、火口から概ね2km）、硫黄山・御鉢・大幡池はレベル1。最新の規制状況は気象庁（https://www.jma.go.jp/bosai/volcano/）とえびの市公式サイトで要確認。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:false},
     segments:[
       {from:"えびの高原（えびのエコミュージアムセンター）", to:"韓国岳登山道休憩所", up:"1:00", down:"0:45"},
       {from:"韓国岳登山道休憩所", to:"韓国岳山頂", up:"0:30", down:"0:25"}
     ], sample:true},
    {name:"えびの高原→韓国岳→大浪池→大浪池登山口 周回", stats:"距離 約9.7km / 標高差 約630m / 行動時間 約6:30（環境省公表の目安）", level:"中級", note:"韓国岳山頂から韓国岳避難小屋を経て大浪池を半周し、大浪池登山口へ下山する霧島錦江湾国立公園の代表コース。大浪池北岸（西回りコース分岐〜東回りコース分岐の間）約100mは登山道崩壊のため通行止めが続いており、ピンクリボン付きの迂回路を利用する（2024年10月時点、霧島市公式サイトで現況要確認）。夷守岳登山口〜大幡池〜獅子戸岳〜韓国岳の縦走路（ルートC）は現在も通行禁止。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"えびの高原（えびのエコミュージアムセンター）", to:"韓国岳山頂", up:"1:30"},
       {from:"韓国岳山頂", to:"韓国岳避難小屋", down:"0:50"},
       {from:"韓国岳避難小屋", to:"大浪池園地休憩所（東回り経由）", down:"0:50"},
       {from:"大浪池園地休憩所", to:"大浪池登山口", down:"1:30"}
     ], sample:true},
    {name:"大浪池 一周（韓国岳往復なし）", stats:"距離 約1.9km（周回） / 標高差 約140m / 周回1:30", level:"初級", note:"標高日本一の火口湖・大浪池を巡る周回路。北岸の約100m区間は登山道崩壊のため通行止め、ピンクリボンの迂回路を利用する。韓国岳山頂へは登らない手軽なコース。",
     popularity:2, trailhead:1, grade:{stamina:1, skill:"A", official:false}, sample:true}
  ],
  seasonality:{
    best:[5,6,10],
    notes:{
      1:"積雪は少ないが霧氷・路面凍結あり。県道1号（えびの高原〜硫黄山周辺）は土日9〜17時のみ屋根付き車限定で暫定開放。気象庁と宮崎県公式サイトで火山情報を要確認。",
      2:"冬型の乾いた晴天が多いが稜線は強風。防寒・防風装備必須。",
      3:"残雪はほぼないが朝晩は氷点下。春一番など突風に注意。",
      4:"新緑が始まる。硫黄山周辺の県道1号規制は継続中。",
      5:"中旬からミヤマキリシマが咲き始める。梅雨入り前の好天を狙いたい。",
      6:"ミヤマキリシマが最盛期（中旬頃まで）で韓国岳〜大浪池が紅紫に染まる。梅雨本番のため大雨・落雷・視界不良に注意。",
      7:"梅雨明け後は九州特有の蒸し暑さと午後の雷雨。台風の接近にも注意（2026年7月24日時点、新燃岳は噴火警戒レベル2）。",
      8:"残暑と台風シーズン。稜線は日陰がなく熱中症リスクが高いので早朝出発が無難。",
      9:"台風シーズンが続く。中旬以降は秋晴れの日が増えてくる。",
      10:"紅葉と秋晴れの好期。大浪池畔の紅葉が見頃を迎える。",
      11:"初霜・初氷の便り。防寒装備を整えたい。",
      12:"本格的な冬型。積雪は少ないが強風と路面凍結、県道1号の暫定開放時間に注意。"
    }
  }
}