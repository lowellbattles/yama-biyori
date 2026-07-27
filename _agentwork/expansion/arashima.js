{
  id:"arashima", name_ja:"荒島岳", name_en:"Mt. Arashima", region:"両白山地", prefecture:"福井県",
  elevation:1523, hyakumeizan:true,
  coords:{lat:35.9343, lon:136.6013}, forecast_elevation:1500,
  grading:{
    ridgeline:1400,
    wind_caution:11, wind_danger:17,
    precip_caution:4, precip_danger:12,
    snow_months:[11,12,1,2,3,4],
    snow_note:"大野盆地に単独でそびえる「大野富士」で、周囲に遮る山がなく山頂部は風を受けやすい。大野市は日本有数の豪雪地帯で根雪は12月〜4月上旬まで残り、シャクナゲ平から山頂直下「もちが壁」周辺は残雪期の踏み抜き・滑落・雪崩に注意。積雪期はアイゼン・ピッケル必携。"
  },
  trailheads:[
    {
      name:"勝原（かどはら）コース登山口（旧カドハラスキー場跡・標高約770m）",
      access:[
        {mode:"電車", line:"JR越美北線（愛称: 九頭竜線）", from:"JR福井駅／JR越前大野駅",
         duration:"福井駅から勝原駅まで約1時間20分、越前大野駅から約20分",
         weekday:"福井駅発 例: 9:22 / 12:48 / 14:54（本数極少。勝原駅までの所要・各便の接続は公式時刻表で要確認）", weekend:"平日と同一ダイヤ（土日祝による違いなし・令和8年3月14日改正時刻表）",
         season:"通年運行（保守工事に伴う一部運休日あり・大野市サイトで要確認）", url:"https://www.city.ono.fukui.jp/kurashi/douro-kotsu/tetsudou/jikokuhyoR40312.html", sample:true},
        {mode:"徒歩", line:"勝原駅→勝原コース登山口（車道を歩く）", from:"JR勝原駅",
         duration:"約10分（約0.9km）",
         weekday:"随時", weekend:"随時",
         season:"通年", url:"https://www.city.ono.fukui.jp/kanko/kanko-joho/guide/arashimadake.html", sample:true},
        {mode:"車", line:"自家用車・レンタカー（北陸自動車道 福井IC／東海北陸自動車道 白鳥IC経由）", from:"福井IC・白鳥IC",
         duration:"福井ICから約1時間10分、白鳥ICから約50分（大野市観光サイトの案内）",
         weekday:"—", weekend:"—",
         season:"通年（冬期は駐車台数に限りあり・路上駐車厳禁）", url:"https://www.city.ono.fukui.jp/kanko/kanko-joho/guide/arashimadake.html", sample:true}
      ]
    },
    {
      name:"中出（なかんで）コース登山口（大野市蕨生・標高約650m）",
      access:[
        {mode:"車", line:"自家用車（北陸自動車道 福井IC／東海北陸自動車道 白鳥IC経由）", from:"福井IC・白鳥IC",
         duration:"福井ICから約1時間、白鳥ICから約1時間（大野市観光サイトの案内）",
         weekday:"—", weekend:"—",
         season:"通年（冬期は除雪されないため積雪期の利用は不可）", url:"https://www.city.ono.fukui.jp/kanko/kanko-joho/guide/arashimadake.html", sample:true}
      ]
    }
  ],
  huts:[],
  routes:[
    {name:"勝原コース 往復", stats:"距離 約8.6km / 標高差 約750m / 登り3:30・下り2:30", level:"中級", note:"荒島岳の王道ルート。旧スキー場跡の急な直登から始まり、ブナの原生林を抜けてシャクナゲ平へ。山頂直下「もちが壁」は鎖・梯子が連続する滑りやすい急登。駐車場・トイレあり。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false}, sample:true},
    {name:"中出コース 往復", stats:"距離 約9.5km / 標高差 約870m / 登り3:40・下り2:40", level:"中級", note:"深田久弥が登ったとされるコース。小荒島岳（標高1,186m）を経由し、白山や大野盆地の展望が良い。勝原コースより登山者は少なく静か。駐車場・トイレ・水場あり。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:false}, sample:true},
    {name:"勝原→中出 縦走（小荒島岳経由）", stats:"距離 約11km / 縦走6〜7時間", level:"中級", note:"勝原から登り中出へ下る（またはその逆）周回的な縦走。マイカーの場合は登山口が離れるため回収の手配が必要。シャクナゲ平で両コースが合流する。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10,11],
    notes:{
      4:"残雪期。シャクナゲ平から上は残雪が残ることが多く、軽アイゼンがあると安心。",
      5:"新緑の季節。下旬からシャクナゲが咲き始める。",
      6:"シャクナゲが見頃（下旬まで）。梅雨入り後は雨具必携、増水・ぬかるみに注意。",
      7:"ブナ林の緑陰はあるが、もちが壁など急登区間は蒸し暑い。梅雨末期の大雨・雷に注意。",
      8:"盆地特有の蒸し暑さが厳しい。早朝出発が無難。台風接近時は中止判断を。",
      9:"残暑は残るが晴天率が上がる。台風シーズンでもあり進路に注意。",
      10:"紅葉が見頃（中旬〜下旬）。多くの登山者で駐車場が混雑する。",
      11:"上旬までが目安。中旬以降は積雪・路面凍結の恐れが出てくる。",
      12:"積雪期入り。大野市は豪雪地帯で林道の除雪がされない登山口もあり通行注意。"
    }
  }
}
