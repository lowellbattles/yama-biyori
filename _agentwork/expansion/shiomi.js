{
  id:"shiomi", name_ja:"塩見岳", name_en:"Mt. Shiomi", region:"南アルプス南部", prefecture:"長野県・静岡県",
  elevation:3052, hyakumeizan:true,
  coords:{lat:35.5738, lon:138.1830}, forecast_elevation:3000,
  grading:{
    ridgeline:2900,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"三伏峠（標高2,580m）から上は森林限界に近く風を遮るものがない。山頂直下の天狗岩の岩場は残雪・凍結に弱く、例年6月頃まで登山道に雪が残ることがある。"
  },
  trailheads:[{
    name:"鳥倉登山口／越路ゲート（標高約1,630m）",
    access:[
      {mode:"バス", line:"南アルプス登山バス 鳥倉線（伊那バス）", from:"JR飯田線 伊那大島駅（大島駅前バス停）",
       duration:"約1時間45分",
       weekday:"大島駅前発 例: 6:45 / 12:10（鳥倉登山口着 8:30 / 13:55）", weekend:"土日祝も同一ダイヤで毎日運行（大島駅前発 例: 6:45 / 12:10）",
       season:"2026年度は7月18日（土）〜8月30日（日）の毎日運行。運行期間外は越路ゲートまでの林道はマイカー通行可（登山口までは徒歩約50分）", url:"https://www.ibgr.jp/general-route/torikura_off2/", sample:true}
    ]
  }],
  huts:[
    {name:"三伏峠小屋", elevation:2580, open:"7月1日〜9月下旬（期間外は避難小屋として一部解放）", reservation:"公式サイトのネット予約制（宿泊日の21日前から受付、クレジットカード決済必須）", url:"https://sanpukutouge.com/", tel:"0265-39-3110"},
    {name:"塩見小屋", elevation:2760, open:"2026年度は7月1日〜10月12日", reservation:"Web予約「やまたんNET」（2026年度分は6月1日9時受付開始）。10名以上の団体はGoogleフォーム。", url:"https://www.ina-city-kankou.co.jp/yamagoya/shiomi/", tel:"070-4231-3164（営業期間中9:00〜15:00、期間外は0265-94-6001）"}
  ],
  routes:[
    {name:"塩見岳 鳥倉往復（三伏峠経由）", stats:"距離 約25.7km（鳥倉登山口起点・往復）/ 標高差 累積で登り約2,510m・下り約2,510m / 1泊2日が前提（公表コースタイム合計 約16.3時間）", level:"上級", note:"漆黒の鉄兜と称される南アルプス南部の盟主。山頂直下の天狗岩は最大の難所で落石・すれ違いに注意。現在通行できる一般登山道は鳥倉ルートのみで、塩見新道など他のバリエーションルートは荒廃・崩落のため通行非推奨（伊那市公式情報）。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"D", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.176）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"鳥倉登山口", to:"三伏峠小屋", up:"3:00", down:"2:00"},
       {from:"三伏峠小屋", to:"塩見小屋", up:"4:00", down:"3:00"},
       {from:"塩見小屋", to:"塩見岳山頂（東峰）", up:"1:00", down:"0:50"}
     ], sample:true},
    {name:"【縦】仙塩尾根 塩見岳→北岳（鳥倉・広河原）", stats:"距離 約31.8km / 標高差 累積で登り約3,210m・下り約3,320m / 2泊3日が前提（公表コースタイム合計 約23.3時間）", level:"上級", note:"塩見岳と北岳を結ぶ長大な縦走路。仙塩尾根上は水場・エスケープが乏しく、荒天時の撤退判断が難しい。逆コース（北岳→塩見岳、広河原発・鳥倉着）も同じグレーディングで公表されている（No.174）。",
     popularity:2, trailhead:0, grade:{stamina:9, skill:"D", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.175）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{6:"梅雨。三伏峠小屋・塩見小屋とも開山直後で、登山道に残雪が残ることがある。鳥倉線バスは未運行。",7:"7月1日に三伏峠小屋・塩見小屋が開山。中旬（2026年は7/18）から伊那バス鳥倉線の運行が始まり、梅雨明け後が本格シーズン。",8:"盛夏で最も登山者が多い時期。伊那バス鳥倉線は8月30日まで運行（2026年）。午後の雷雨に注意。",9:"バス運行終了後はマイカー規制のみとなり、静かな稜線歩きが楽しめる。紅葉は下旬から始まる。",10:"紅葉と初雪が入り混じる時期。塩見小屋は10月12日で2026年シーズンの営業を終了。",11:"多くの山小屋が閉まり、積雪と強風の厳冬期山行の領域に入る。"}
  }
}
