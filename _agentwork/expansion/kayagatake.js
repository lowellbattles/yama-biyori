{
  id:"kayagatake", name_ja:"茅ヶ岳", name_en:"Mt. Kayagatake", region:"奥秩父前衛", prefecture:"山梨県",
  elevation:1704, hyakumeizan:false,
  coords:{lat:35.7950, lon:138.5138}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:9,
    snow_months:[12,1,2,3],
    snow_note:"標高1,704mの低山で根雪は少ないが、女岩上部から山頂・金ヶ岳への岩稜はガレ気味で積雪・凍結時は滑りやすくアイゼン推奨。むしろ標高が低いぶん7〜8月は登り返しの酷暑・熱中症のほうが年間最大のリスク。"
  },
  trailheads:[{
    name:"深田記念公園駐車場（標高940m）",
    access:[
      {mode:"バス", line:"韮崎深田公園線（通称:茅ヶ岳ルート、山梨峡北交通）", from:"JR中央本線 韮崎駅",
       duration:"約20分",
       weekday:"平日は運休（土日祝運行、下記season参照）", weekend:"韮崎駅発 例: 8:45 / 15:50 → 深田記念公園着 9:05 / 16:10（2026.4.1改正ダイヤ）",
       season:"2026年4月4日(土)〜11月23日(月・祝)の土日祝日運行、ただし4月29日〜5月5日は毎日運行", url:"http://cus4.kyohoku.jp/routebus/kayagatakemizugakidenen-bus/schedule-fukadakoenline/", sample:true},
      {mode:"タクシー", line:"市内タクシー（例: 甲斐タクシー）", from:"JR中央本線 韮崎駅",
       duration:"約25分",
       weekday:"随時（事前予約推奨）", weekend:"随時（事前予約推奨）",
       season:"通年", url:"https://www.kai-taxi.com/", sample:true},
      {mode:"車", line:"中央自動車道 韮崎IC経由", from:"韮崎IC",
       duration:"約20分（約7.5km）",
       weekday:"—", weekend:"—",
       season:"通年（駐車場は約30台・無料、トイレあり。冬期は凍結でトイレ使用不可の日あり）", url:"https://www.nirasaki-kankou.jp/kankou_spot/sangaku_outdoor/sangaku_yamagoya/3997.html", sample:true}
    ]
  },{
    name:"観音峠（標高965m）",
    access:[
      {mode:"車", line:"県営林道 観音峠大野山線（全線舗装・安全速度20km/h、11人乗り以上の車両は通行制限）経由", from:"甲斐市・韮崎市街",
       duration:"要確認（公共交通なし・路肩駐車のみで台数少）",
       weekday:"—", weekend:"—",
       season:"通年通行可（2026年7月時点で冬期閉鎖・工事規制の記載なし）", url:"https://www.pref.yamanashi.jp/rindoujyouhou/kisei.php?id=57", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"深田記念公園コース（女岩経由）往復", stats:"距離 約6.5km / 標高差 約764m / 登り2:20・下り1:40", level:"初〜中級", note:"最も歩かれる定番ルート。女岩手前の分岐から尾根沿いに少し入った所に、日本百名山の著者・深田久弥が1971年3月に登山中急逝した終焉の地碑（『百の頂に百の喜びあり』）がある。女岩から山頂までは岩や木の根の急登で、下山時は滑りやすい。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"深田記念公園駐車場", to:"女岩", up:"1:20", down:"1:00"},
       {from:"女岩", to:"茅ヶ岳山頂", up:"1:00", down:"0:40"}
     ], sample:true},
    {name:"観音峠コース 往復", stats:"距離 約4.3km / 標高差 約739m / 登り2:55・下り1:50", level:"中級", note:"深田公園コースより短距離だが急な尾根を直登する分、体感的な険しさは上。静かで展望のよい稜線歩きが楽しめるが、駐車スペースは少なく公共交通機関はない。",
     popularity:2, trailhead:1, grade:{stamina:2, skill:"C", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"}},
    {name:"金ヶ岳縦走（深田公園起点）往復", stats:"距離 約9.5km / 標高差 約824m（起点940m→金ヶ岳1,764m）/ 登り3:20・下り2:20", level:"中級", note:"茅ヶ岳山頂からさらに北へ岩稜をたどり金ヶ岳（南峰・北峰）へ。甲府盆地から見た山容が八ヶ岳に似ることから「ニセ八ツ」と呼ばれる二山を制覇する定番の縦走。山梨県のグレーディング表には茅ヶ岳単独ルートしか掲載がなく、この縦走区間は独自の保守的な見積もり。",
     popularity:2, trailhead:0, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"深田記念公園駐車場", to:"女岩", up:"1:20", down:"1:00"},
       {from:"女岩", to:"茅ヶ岳山頂", up:"1:00", down:"0:40"},
       {from:"茅ヶ岳山頂", to:"金ヶ岳山頂", up:"1:00", down:"0:40"}
     ], sample:true}
  ],
  seasonality:{
    best:[4,5,6,9,10,11],
    notes:{4:"山桜が咲き、4月第3日曜には深田久弥を偲ぶ「深田祭」が開かれる。茅ヶ岳みずがき田園バスの当年運行も4月上旬に始まる。",5:"新緑が美しい好期。ゴールデンウィーク中はバスが毎日運行。",6:"梅雨入り。女岩周辺の岩や木の根は雨で滑りやすくなる。",7:"梅雨明け後は樹林帯で直射日光は避けられるが蒸し暑い。標高940mからの登り返しは体感的にきつい。",8:"盛夏。低山ゆえ気温が下がりにくく、熱中症リスクが年間で最も高い時期。早朝出発が無難。",9:"台風シーズン。女岩から山頂・金ヶ岳への岩稜は強風時に無理をしない。",10:"紅葉が見頃（例年中旬〜下旬）。バスは11月23日まで運行。",11:"紅葉終盤から初冬へ。バスは11月23日で運行終了、以降はタクシー・マイカーのみ。"}
  }
}
