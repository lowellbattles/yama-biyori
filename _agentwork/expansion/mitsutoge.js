{
  id:"mitsutoge", name_ja:"三ツ峠山", name_en:"Mt. Mitsutoge", region:"御坂山地", prefecture:"山梨県",
  elevation:1785, hyakumeizan:false,
  coords:{lat:35.5492, lon:138.8092}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:4, precip_danger:12,
    snow_months:[12,1,2,3],
    snow_note:"標高は1,785mと低めだが、山頂稜線と屏風岩周辺は風の通り道で吹きさらしになりやすい。12〜3月は表参道の石段や北面の登山道が凍結しやすく、軽アイゼンがあると安心。"
  },
  trailheads:[
    {
      name:"三ツ峠登山口（金ヶ窪沢登山口・標高約1,295m）",
      access:[
        {mode:"バス", line:"河口湖駅～三つ峠、天下茶屋線（富士急行バス）", from:"富士急行線 河口湖駅",
         duration:"約25分",
         weekday:"河口湖駅発 例: 9:50（天下茶屋方面行き・三ツ峠登山口10:15着）", weekend:"毎日運行のため平日・土日祝とも同ダイヤ（例: 9:50発）",
         season:"通年運行（天候による道路状況で運休の場合あり。例年冬期〜早春は「三ツ峠登山口」止まりの折り返し運行となることが多く、復路便も限られるため事前に富士急行バスへ要確認）",
         url:"https://bus.fujikyu.co.jp/rosen/detail/id/10/", sample:true},
        {mode:"タクシー", line:"河口湖駅⇔三ツ峠登山口", from:"富士急行線 河口湖駅",
         duration:"約35分",
         weekday:"例: 片道約5,500円（富士急行バス公式サイト掲載のモデルコース所要額）", weekend:"同左",
         season:"通年", url:"https://www.fujikyubus.co.jp/hiking-bus/fujikyu-hiking/mitsutogeyama", sample:true}
      ]
    },
    {
      name:"三つ峠駅（表参道登山口・標高616m）",
      access:[
        {mode:"電車", line:"富士急行線", from:"JR中央線 大月駅",
         duration:"大月駅から普通列車で約26分",
         weekday:"三つ峠駅着 例: 7:04 / 7:35 / 7:55 / 8:26（トーマスランド号）/ 8:52 / 9:23 / 9:49", weekend:"三つ峠駅着 例: 7:04 / 7:35 / 7:55 / 8:26（トーマスランド号）/ 8:52 / 9:23 / 9:52",
         season:"通年", url:"https://www.fujikyu-railway.jp/station/timetable.php?no=11", sample:true}
      ]
    }
  ],
  huts:[
    {name:"四季楽園", elevation:1700, open:"通年営業（要問合せ。シャワーは4〜10月のみ利用可）", reservation:"公式サイトのオンライン予約システム（2025年12月19日改定）または電話", url:"https://shikirakuen.com/", tel:"0555-76-7566"},
    {name:"三ツ峠山荘", elevation:1730, open:"通年営業・要予約（入浴は冬季を除き可、700円）", reservation:"電話予約", url:"https://mitsutouge.net/", tel:"0555-76-7473"}
  ],
  routes:[
    {name:"三ツ峠登山口（御坂・河口湖側）往復", stats:"距離 約5.9km / 標高差 約490m / 登り1:30・下り1:18", level:"初級", note:"御坂側からの最短コース。バス停「三ツ峠登山口」から沢沿いの道を詰め、三ツ峠山荘下を経て開運山山頂へ。道幅が広く初心者にも人気。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"}},
    {name:"三つ峠駅 表参道（達磨石・八十八大師経由）往復", stats:"距離 約9km（往復目安）/ 標高差 約1,170m / 登り5:00・下り3:00", level:"中級", note:"江戸期以前からの信仰の道。達磨石・馬返し・八十八大師など旧跡をたどり、屏風岩の下を通って山頂へ。標高差が大きく健脚向け。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"B", official:false}},
    {name:"三ツ峠登山口→開運山→木無山→母の白滝→河口局前（バス周回）", stats:"標高差 登り約490m（開運山まで）・以降は河口湖畔へ下り基調 / 徒歩合計4:25（休憩別・富士急行バス公式モデルコース所要時間）", level:"中級", note:"富士急行バス公式サイトのモデルコース。開運山から木無山を経て裏参道を下り、母の白滝から河口局前バス停へ。バス乗り継ぎの計画が前提。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"三ツ峠登山口", to:"開運山山頂", up:"2:00"},
       {from:"開運山山頂", to:"木無山山頂", down:"0:25"},
       {from:"木無山山頂", to:"母の白滝", down:"1:35"},
       {from:"母の白滝", to:"河口局前バス停", down:"0:25"}
     ], sample:true}
  ],
  seasonality:{
    best:[5,6,9,10,11],
    notes:{
      1:"積雪・路面凍結の時期。防寒着と滑り止めが必携。",
      2:"厳冬期。稜線の強風と凍結に最大限の注意を。空気が澄み富士山の展望は抜群。",
      3:"残雪と融けかけの泥濘・アイスバーンが混在する不安定な時期。",
      4:"春本番で登山シーズン開始。バス運行期間の詳細は運行会社に要確認。",
      5:"ミツバツツジが見頃（中旬〜下旬）。新緑と富士山の展望が美しい。",
      6:"アツモリソウなど高山植物の開花期。梅雨の晴れ間を狙いたい。",
      7:"盛夏は登山口付近が蒸し暑い。屏風岩周辺は午後の雷雨に注意。",
      8:"夏休みで混雑。水分補給と雷雨対策を万全に。",
      9:"残暑が落ち着き、富士山の展望が安定し始める。",
      10:"紅葉が見頃（中旬〜下旬）。行楽シーズンで登山口・バスとも混雑。",
      11:"紅葉終盤から冬支度へ。稜線では防寒・防風対策を。"
    }
  }
}
