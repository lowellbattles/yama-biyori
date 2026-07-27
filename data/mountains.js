/* ============================================================
   山日和 YAMABIYORI — MOUNTAIN DATABASE
   Loaded by index.html via <script src="data/mountains.js">.
   (Plain JS, not JSON, so the site still works when you
   double-click index.html — browsers block fetch() of local
   JSON files.)

   ---- TEMPLATE / schema for one mountain ----
   {
     id: "unique-ascii-id",
     name_ja: "山名",  name_en: "Mt. ...",
     region: "山域",  area: "エリア",  prefecture: "県",
     //   area は固定13区分から選ぶ（一覧のグルーピング・絞り込み用。validate_mountains.js / validate_single.js が検証）:
     //   北海道 / 東北 / 上信越・尾瀬 / 関東周辺 / 奥秩父・奥多摩 / 八ヶ岳・中信高原 / 北アルプス・御嶽 /
     //   中央アルプス / 南アルプス / 富士・伊豆・箱根 / 北陸・近畿 / 中国・四国 / 九州・屋久島
     elevation: 0,              // summit elevation (m)
     hyakumeizan: false,        // 日本百名山?
     coords: {lat: 0, lon: 0},  // summit / upper-ridge coordinates
     forecast_elevation: 0,     // elevation sent to Open-Meteo (≈ ridgeline)
     grading: {                 // per-mountain! tuning these is a feature
       ridgeline: 0,            // elevation for the freezing-level check
       wind_caution: 0,         // m/s → grade B
       wind_danger: 0,          // m/s → grade C
       precip_caution: 0,       // mm/day → B
       precip_danger: 0,        // mm/day → C
       snow_months: [],         // months when the freeze check applies
       snow_note: ""            // human explanation shown to users
     },
     trailheads: [{
       name: "登山口名（標高XXXm）",
       access: [{
         mode: "バス",  line: "路線名（運行会社）",  from: "出発地",
         duration: "約X分",
         weekday: "…発 例: …",  weekend: "…発 例: …",
         season: "運行期間",
         url: "https://official-operator-site/",
         sample: true           // keep true until owner verifies vs official site
       }]
     }],
     huts: [{ name: "", elevation: 0, open: "", reservation: "",
              url: "",          // official site, "" if none
              tel: "" }],       // phone as published officially, "" if none
     routes: [{
       name: "", stats: "距離/標高差/時間", level: "初級|中級|上級", note: "",
       popularity: 3,           // ★1〜3（編集判断。3=定番）表示は人気順ソート
       trailhead: 0,            // このルートの起点 = trailheads[n]（アクセス表を流用）
                                //   null = 起点が trailheads にない縦走路など
       grade: {                 // 山のグレーディング（都道府県公表値）
         stamina: 5,            //   体力度 1-10
         skill: "B",            //   技術的難易度 A-E
         official: true,        //   false = 未公表県のため独自推定（点線表示）
         src: "信州 山のグレーディング", url: "https://..."
       },                       //   grade 省略可（チップ非表示）
       segments: [              // 区間タイム（休憩含まず）。省略可
         { from: "登山口", to: "小屋", up: "2:00", down: "1:30" }
       ],
       sample: true             // 区間タイム未検証の間 true → SAMPLE表示
     }],
     seasonality: { best: [], notes: {月: "一文"} }
   }
   ============================================================ */
const MOUNTAINS = [
{
  id:"tsubakuro", name_ja:"燕岳", name_en:"Mt. Tsubakuro", region:"北アルプス", area:"北アルプス・御嶽", prefecture:"長野県",
  elevation:2763, hyakumeizan:false,
  coords:{lat:36.4083, lon:137.7128}, forecast_elevation:2700,
  grading:{
    ridgeline:2700,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"合戦尾根上部は5月下旬まで残雪。残雪期はアイゼン・ピッケル必携。"
  },
  trailheads:[{
    name:"中房温泉登山口（標高1,462m）",
    access:[
      {mode:"バス", line:"中房線乗合バス（南安タクシー・安曇観光タクシー共同運行）", from:"JR大糸線 穂高駅",
       duration:"約55分",
       weekday:"穂高駅発 例: 6:40 / 8:25 / 11:10 / 14:50（B運行日ダイヤ）", weekend:"穂高駅発 例: 5:15 / 6:40 / 8:25 / 11:10（A運行日・臨時便4:30運行日あり）",
       season:"4月下旬〜11月上旬（2026年は4/24〜11/3・冬期運休）", url:"https://nan-an.co.jp/nakabusa/", sample:true},
      {mode:"直行バス", line:"毎日あるぺん号（夜行・要予約）", from:"東京・竹橋（毎日新聞社前）",
       duration:"夜行 約6時間30分", weekday:"竹橋発 例: 23:00（シーズン中ほぼ毎日運行、運行日は要確認）", weekend:"竹橋発 例: 23:00（夏山シーズンはほぼ毎日、晩秋は金・土など特定日のみ）",
       season:"4月下旬〜11月下旬の登山シーズン（2026年は4/24頃〜11/21、10月中旬以降は運行日限定）", url:"https://bus.maitabi.jp/"}
    ]
  }],
  huts:[
    {name:"燕山荘", elevation:2712, open:"4月下旬〜11月下旬（2026年は4/25〜11/22宿泊分まで）・年末年始営業あり", reservation:"完全予約制（Web予約に集約）", url:"https://www.enzanso.co.jp/", tel:"0263-32-1535"},
    {name:"合戦小屋（売店のみ・宿泊不可）", elevation:2350, open:"4月下旬〜11月下旬（初夏〜秋は毎日、前後は週末のみ営業）", reservation:"—", url:"https://www.enzanso.co.jp/kassengoya", tel:""}
  ],
  routes:[
    {name:"合戦尾根 往復", stats:"距離 約10.4km / 標高差 約1,300m / 登り4:30・下り3:10", level:"中級", note:"北アルプス三大急登。合戦小屋のスイカが名物（夏期）。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"中房温泉登山口", to:"合戦小屋", up:"3:00", down:"2:10"},
       {from:"合戦小屋", to:"燕山荘", up:"1:00", down:"0:45"},
       {from:"燕山荘", to:"燕岳山頂", up:"0:30", down:"0:25"}
     ], sample:true},
    {name:"表銀座縦走（燕岳→大天井岳→槍ヶ岳）", stats:"2〜3泊 / 約26km", level:"上級", note:"7月中旬〜9月が適期。小屋予約必須。",
     popularity:2, trailhead:0, grade:{stamina:9, skill:"C", official:true, src:"信州 山のグレーディング（上高地下山まで含む全行程の評価）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"残雪期。雪上歩行装備必須だが人は少なめ。",6:"梅雨の晴れ間狙い。残雪は概ね消える。",7:"コマクサ見頃（7月中旬〜8月上旬）。",8:"夏山最盛期で小屋・テント場は混雑。午後の雷雨に注意。",9:"秋晴れと紅葉の始まり。",10:"上旬は紅葉、下旬は初雪に注意。"}
  }
},
{
  id:"karamatsu", name_ja:"唐松岳", name_en:"Mt. Karamatsu", region:"北アルプス", area:"北アルプス・御嶽", prefecture:"長野県・富山県",
  elevation:2696, hyakumeizan:false,
  coords:{lat:36.6872, lon:137.7547}, forecast_elevation:2600,
  grading:{
    ridgeline:2620,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"扇雪渓〜丸山付近は初夏まで残雪。6月までは軽アイゼン携行が安心。"
  },
  trailheads:[{
    name:"八方池山荘・第1ケルン（標高1,830m）",
    access:[
      {mode:"ゴンドラ・リフト", line:"八方アルペンライン（ゴンドラ「アダム」＋リフト2本乗継）", from:"白馬八方・八方駅",
       duration:"約40分（乗り継ぎ含む）",
       weekday:"八方駅発 例: 始発8:00頃〜上り最終16:00頃（随時運行・ゴンドラ営業自体は16:50まで、上り利用はグラートクワッド営業終了30分前まで・日により変動）", weekend:"同左（夏季・連休・紅葉期は始発6:30〜7:30に繰り上げ。夏季は平日も繰り上げの日あり）",
       season:"5月末の週末＋6月上旬〜11月上旬（2026年は5/30・31および6/6〜11/3・冬期はスキー営業）", url:"https://www.happo-one.jp/trekking/alpenline/"},
      {mode:"バス", line:"アルピコ交通 白馬駅—白馬八方—栂池高原線（八方バスターミナル下車、ゴンドラ駅まで徒歩約10分）", from:"JR白馬駅",
       duration:"約8分",
       weekday:"白馬駅発 例: 9:22 / 11:05 / 12:02 / 15:02（急行13:40は7月18日〜8月16日のみ運行）", weekend:"平日・土休日同ダイヤ（白馬駅から徒歩でも約20分）",
       season:"4月1日〜11月30日の毎日運行", url:"https://www.alpico.co.jp/traffic/local/hakuba/tsugaike/", sample:true}
    ]
  }],
  huts:[
    {name:"八方池山荘", elevation:1850, open:"通年営業", reservation:"予約制（Web予約フォーム/電話）", url:"https://yamagoya.hakubakousha.com/", tel:"0261-72-2855"},
    {name:"唐松岳頂上山荘", elevation:2620, open:"6月下旬〜10月中旬（2026年は6/27〜10/13）", reservation:"Web予約中心（30日前の0時から受付）・テント泊も要予約", url:"http://karamatsu.jp/", tel:"090-5204-7876"}
  ],
  routes:[
    {name:"八方尾根ルート（八方池山荘〜唐松岳 往復）", stats:"距離 約10km / 標高差 約870m / 登り3:30・下り2:50", level:"初〜中級", note:"ゴンドラ利用で日帰りも可能な人気ルート。丸山ケルンから上は稜線歩き。扇雪渓付近は初夏まで残雪。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"八方池山荘", to:"八方池", up:"1:30", down:"1:10"},
       {from:"八方池", to:"丸山ケルン", up:"1:20", down:"1:00"},
       {from:"丸山ケルン", to:"唐松岳頂上山荘", up:"0:40", down:"0:30"},
       {from:"頂上山荘", to:"唐松岳山頂", up:"0:20", down:"0:20"}
     ], sample:true},
    {name:"八方池トレッキング（八方池 往復）", stats:"距離 約4km / 標高差 約230m / 登り1:30・下り1:10", level:"初級", note:"白馬三山を湖面に映す八方池までの整備されたコース。観光客にも人気。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[{from:"八方池山荘", to:"八方池", up:"1:30", down:"1:10"}], sample:true}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{6:"八方池はまだ雪の下のことが多く、扇雪渓以上は残雪歩行。軽アイゼンの携行が安心。",7:"ニッコウキスゲやチングルマなど高山植物が見頃。山荘の夏季営業も始まる。",8:"八方池周辺は観光客で大混雑。稜線は雷雨に注意しつつ夏山最盛期。",9:"下旬から草紅葉とナナカマドの紅葉。澄んだ空気で剱岳の展望が良い。",10:"紅葉が尾根を下り初冠雪の便り。頂上山荘は10月中旬で小屋じまい。"}
  }
},
{
  id:"shirouma", name_ja:"白馬岳", name_en:"Mt. Shirouma", region:"北アルプス", area:"北アルプス・御嶽", prefecture:"長野県・富山県",
  elevation:2932, hyakumeizan:true,
  coords:{lat:36.7585, lon:137.7586}, forecast_elevation:2900,
  grading:{
    ridgeline:2900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"大雪渓は真夏でも雪渓歩行（軽アイゼン必須・落石注意）。稜線は10月から凍結。"
  },
  trailheads:[{
    name:"猿倉登山口（標高1,250m）",
    access:[
      {mode:"バス", line:"アルピコ交通 白馬駅—猿倉線（全便予約制・発車オーライネットで1ヶ月前から受付）", from:"JR白馬駅",
       duration:"約27分",
       weekday:"白馬駅発 例: 5:55 / 7:20 / 10:30 / 12:15", weekend:"平日・土休日同ダイヤ（全便予約制）",
       season:"夏季のみ（2026年は7/18〜8/16）。期間外はタクシー利用", url:"https://www.alpico.co.jp/traffic/local/hakuba/sarukura/", sample:true}
    ]
  }],
  huts:[
    {name:"白馬山荘", elevation:2832, open:"4月下旬〜10月中旬（2026年は4/25〜10/12）", reservation:"公式Web予約のみ（2026年は5/20 7:00受付開始）", url:"https://hakubakan.com/", tel:"0261-72-2002"},
    {name:"村営白馬岳頂上宿舎", elevation:2730, open:"6月下旬〜9月下旬（2026年は6/27〜9/27）", reservation:"Web予約フォーム（白馬村振興公社）", url:"https://yamagoya.hakubakousha.com/", tel:"0261-75-3788"},
    {name:"白馬尻小屋", elevation:1560, open:"2026年度は宿泊営業休止（テント場のみ）", reservation:"テント泊は白馬館の予約システムで受付", url:"https://hakubakan.com/", tel:"0261-72-2002"}
  ],
  routes:[
    {name:"大雪渓ルート（猿倉〜白馬尻〜白馬岳）", stats:"距離 約6.5km（片道）/ 標高差 約1,680m / 登り6:00・下り4:20", level:"中級", note:"日本最大級の白馬大雪渓を直登する名ルート。軽アイゼン必須、落石とガス時のルート外れに注意。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"猿倉", to:"白馬尻", up:"1:15", down:"1:15"},
       {from:"白馬尻", to:"岩室跡（葱平）", up:"2:30", down:"1:40"},
       {from:"葱平", to:"村営頂上宿舎", up:"1:40", down:"1:10"},
       {from:"頂上宿舎", to:"白馬岳山頂", up:"0:35", down:"0:25"}
     ], sample:true},
    {name:"白馬大池ルート（栂池自然園〜白馬大池〜白馬岳）", stats:"距離 約9km（片道）/ 標高差 約1,100m / 登り6:30・下り5:00", level:"中級", note:"ロープウェイで標高を稼ぎ、白馬大池と小蓮華山の稜線をたどる展望ルート。雪渓を避けたい人向き。",
     popularity:2, trailhead:null, grade:{stamina:5, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{6:"大雪渓はまだ雪が豊富。山頂部の小屋は6月下旬から順次営業開始、残雪装備必須。",7:"雪渓歩きと葱平から上のお花畑が最盛期。ウルップソウなど固有種も。",8:"猿倉線バスの運行期間で登山者が最も多い。週末の山荘・テント場は大混雑。",9:"紅葉と初雪が交錯。下旬には頂上宿舎が営業終了。",10:"初冠雪後は冬山の様相。白馬山荘の営業も中旬で終了。"}
  }
},
{
  id:"jonen", name_ja:"常念岳", name_en:"Mt. Jonen", region:"北アルプス", area:"北アルプス・御嶽", prefecture:"長野県",
  elevation:2857, hyakumeizan:true,
  coords:{lat:36.3256, lon:137.7275}, forecast_elevation:2800,
  grading:{
    ridgeline:2800,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"常念乗越付近は5月まで残雪。沢沿いルートは増水・凍結に注意。"
  },
  trailheads:[{
    name:"一ノ沢登山口（標高1,323m）",
    access:[
      {mode:"タクシー", line:"南安タクシー・安曇観光タクシー（登山タクシー・要事前予約）", from:"JR大糸線 穂高駅",
       duration:"約30分",
       weekday:"穂高駅発 随時（要予約）例: 4:30 / 5:30 / 6:30頃の早朝便が中心", weekend:"同左（登山シーズンの早朝は予約推奨）",
       season:"4月下旬〜11月中旬（冬期は林道閉鎖）※2026年は林道崩落復旧工事（しゅん工予定10月末）のため手前まで・登山口へ徒歩約1.5km", url:"https://nan-an.co.jp/northern_alps/", sample:true}
    ]
  },{
    name:"三股登山口（標高1,350m）",
    access:[
      {mode:"タクシー", line:"南安タクシー・安曇観光タクシー（要事前予約）※2026年は予約制路線バス「三股線」実証運行あり（7/17〜10/13の63日間、穂高駅発5:15/7:40、大人2,000円・事前決済）", from:"JR大糸線 穂高駅",
       duration:"約40分",
       weekday:"穂高駅発 随時（要予約）例: 早朝4:30頃〜", weekend:"同左（駐車場満車時は林道路肩まで）",
       season:"4月中旬〜11月中旬（冬期は林道烏川線閉鎖。2026年は4/17 13時開通）", url:"https://nan-an.co.jp/northern_alps/", sample:true}
    ]
  }],
  huts:[
    {name:"常念小屋", elevation:2466, open:"4月下旬〜11月上旬（2026年は4/27〜11/4）", reservation:"公式Web予約（電話は8:00〜19:00）", url:"https://www.mt-jonen.com/", tel:"090-1430-3328"}
  ],
  routes:[
    {name:"一ノ沢ルート（一ノ沢登山口〜常念乗越〜常念岳）", stats:"距離 約5.7km（片道）/ 標高差 約1,530m / 登り5:30・下り3:50", level:"中級", note:"沢沿いを登る最短の定番ルート。胸突八丁から常念乗越までは急登、増水時は徒渉点に注意。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"一ノ沢登山口", to:"胸突八丁", up:"2:50", down:"2:00"},
       {from:"胸突八丁", to:"常念乗越（常念小屋）", up:"1:40", down:"0:45"},
       {from:"常念乗越", to:"常念岳山頂", up:"1:30", down:"0:45"}
     ], sample:true},
    {name:"三股ルート（三股〜前常念岳〜常念岳）", stats:"距離 約6.5km（片道）/ 標高差 約1,500m / 登り6:30・下り4:30", level:"中級", note:"樹林帯の急登と前常念岳の大岩帯が続く健脚向きコース。蝶ヶ岳との周回にも。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪期。常念乗越付近まで雪が残り、アイゼン・ピッケルなど残雪装備が必要。",6:"沢沿いの雪渓が徐々に消え、梅雨の晴れ間にニリンソウなどが咲き始める。",7:"常念乗越のコマクサと稜線の高山植物が見頃。槍穂高の展望が最も楽しめる季節。",8:"夏山最盛期だが午後の雷雨が多く、早出早着が鉄則。",9:"下旬には三段紅葉が始まり、朝晩は氷点下近くまで冷え込む。",10:"上旬の紅葉と初冠雪が重なる頃。11月上旬の小屋じまいとともに静かな山に。"}
  }
},
{
  id:"norikura", name_ja:"乗鞍岳（剣ヶ峰）", name_en:"Mt. Norikura", region:"北アルプス", area:"北アルプス・御嶽", prefecture:"長野県・岐阜県",
  elevation:3026, hyakumeizan:true,
  coords:{lat:36.1064, lon:137.5536}, forecast_elevation:3000,
  grading:{
    ridgeline:3000,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"シャトルバス開通（7月）前は残雪期。10月中旬以降は初雪・凍結、エコーラインは10月末で冬期閉鎖。"
  },
  trailheads:[{
    name:"乗鞍畳平バスターミナル（標高2,702m）",
    access:[
      {mode:"バス", line:"アルピコ交通 乗鞍高原〜畳平シャトルバス（エコーラインはマイカー規制・予約優先制）", from:"乗鞍高原観光センター前（松本駅から上高地線＋バスで接続）",
       duration:"約55分",
       weekday:"観光センター前発 例: 7:00 / 8:00 / 9:00 / 10:30", weekend:"同ダイヤ（好天の週末は増便・満席あり、予約推奨）",
       season:"7月〜10月末（2026年は7/1〜10/31・冬期閉鎖）", url:"https://www.alpico.co.jp/traffic/local/kamikochi/echoline/", sample:true}
    ]
  }],
  huts:[
    {name:"肩の小屋", elevation:2760, open:"7月上旬〜10月上旬（天候により変動）", reservation:"電話予約のみ", url:"https://norikurakata.com/", tel:"0263-93-2002"},
    {name:"乗鞍白雲荘（畳平）", elevation:2702, open:"6月下旬〜10月中旬（2026年は6/20〜10/12）", reservation:"電話予約（2026年は5/20 9:00受付開始）", url:"https://norikura-hakuunso.jimdofree.com/", tel:"090-3480-3136"}
  ],
  routes:[
    {name:"畳平〜剣ヶ峰 往復", stats:"距離 約6km / 標高差 約330m / 登り1:30・下り1:10", level:"初級", note:"バスで標高2,702mまで上がれる3,000m峰入門コース。肩の小屋から上はガレ場、天候急変と高山病に注意。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"岐阜県 山のグレーディング", url:"https://www.pref.gifu.lg.jp/page/14382.html"},
     segments:[
       {from:"畳平", to:"肩の小屋", up:"0:30", down:"0:25"},
       {from:"肩の小屋", to:"剣ヶ峰山頂", up:"0:50", down:"0:40"}
     ], sample:true},
    {name:"畳平お花畑周回コース", stats:"距離 約1.5km / 高低差ほぼなし / 周回0:40", level:"初級", note:"畳平直下の湿性お花畑を木道で一周。ハクサンイチゲやクロユリの群落。",
     popularity:2, trailhead:0, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{6:"シャトルバス運行前。春山バス利用の残雪スキー・残雪登山の領域。",7:"バス運行開始。コマクサやクロユリなどお花畑が一斉に見頃。",8:"標高2,700m超の涼しさで避暑登山の最盛期。ご来光便や週末のバスは混雑。",9:"下旬に畳平周辺から紅葉が始まり、朝は氷点下になる日も。",10:"紅葉は乗鞍高原へ。初冠雪と入れ替わり、10月末でエコーライン冬期閉鎖。"}
  }
},
{
  id:"kisokoma", name_ja:"木曽駒ヶ岳", name_en:"Mt. Kiso-Komagatake", region:"中央アルプス", area:"中央アルプス", prefecture:"長野県",
  elevation:2956, hyakumeizan:true,
  coords:{lat:35.7894, lon:137.8044}, forecast_elevation:2800,
  grading:{
    ridgeline:2800,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"千畳敷カール〜乗越浄土は6月上旬まで雪渓が残り、滑落事故多発区間。"
  },
  trailheads:[{
    name:"千畳敷駅（駒ヶ岳ロープウェイ・標高2,612m）",
    access:[
      {mode:"バス＋ロープウェイ", line:"菅の台バスセンター→しらび平 路線バス＋駒ヶ岳ロープウェイ（中央アルプス観光）", from:"JR飯田線 駒ヶ根駅 / 菅の台バスセンター（マイカーはここまで）",
       duration:"バス約30分＋RW約7分30秒",
       weekday:"菅の台発 例: 7:15 / 8:15 / 9:15（グリーンシーズンは30分毎・閑散期は毎時1本）", weekend:"菅の台発 例: 5:15 / 6:15 / 7:15（繁忙期は早朝増発・30分毎）",
       season:"通年運行（春・初夏・冬に点検運休期間あり）", url:"https://www.chuo-alps.com/fare/", sample:true}
    ]
  }],
  huts:[
    {name:"宝剣山荘", elevation:2870, open:"4月上旬〜11月初旬（年末年始は予約対応）", reservation:"電話予約（テント場も完全予約制）", url:"https://miyadakankou.co.jp/houkensansou", tel:"090-5507-6345"},
    {name:"頂上木曽小屋", elevation:2890, open:"GWと7月頃〜10月中旬（変動あり・要問合せ）", reservation:"電話予約", url:"https://kiso-nagano.ne.jp/kisogoya/", tel:"0264-52-3882"},
    {name:"ホテル千畳敷", elevation:2612, open:"通年", reservation:"Web予約", url:"https://www.chuo-alps.com/hotel/", tel:"0265-83-3107"}
  ],
  routes:[
    {name:"千畳敷→乗越浄土→中岳→駒ヶ岳 往復", stats:"距離 約4.0km / 標高差 約400m / 登り1:50・下り1:35", level:"初〜中級", note:"日本一手軽な3,000m級だが、八丁坂は渋滞と落石に注意。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"千畳敷駅", to:"乗越浄土", up:"0:50", down:"0:40"},
       {from:"乗越浄土", to:"中岳", up:"0:20", down:"0:20"},
       {from:"中岳", to:"駒ヶ岳山頂", up:"0:40", down:"0:35"}
     ], sample:true},
    {name:"宝剣岳 周回（要経験）", stats:"+1:00 / 鎖場連続", level:"上級", note:"岩稜・鎖場。初心者不可。",
     popularity:1, trailhead:0, grade:{stamina:4, skill:"D", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{6:"雪渓トラバース残る。軽アイゼン推奨。",7:"高山植物が一斉に開花。",8:"千畳敷のお花畑最盛期。雷雨に注意。",9:"下旬から千畳敷カールの紅葉（9月下旬〜10月上旬がピーク）。",10:"上旬の紅葉は圧巻。中旬以降は初雪・凍結。"}
  }
},
{
  id:"akadake", name_ja:"赤岳", name_en:"Mt. Akadake", region:"八ヶ岳", area:"八ヶ岳・中信高原", prefecture:"長野県・山梨県",
  elevation:2899, hyakumeizan:true,
  coords:{lat:35.9708, lon:138.3700}, forecast_elevation:2800,
  grading:{
    ridgeline:2850,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"地蔵尾根・文三郎尾根は5月まで残雪・凍結。稜線は岩場が多く、濡れ・凍結に敏感。"
  },
  trailheads:[{
    name:"美濃戸口（標高1,490m）",
    access:[
      {mode:"バス", line:"アルピコ交通 美濃戸口線（茅野駅〜美濃戸口）", from:"JR中央本線 茅野駅西口④番のりば",
       duration:"約38分",
       weekday:"運休（8/1〜8/30は毎日運行 例: 9:35 / 14:20 / 15:00。冬ダイヤの12/30〜1/4も毎日運行）", weekend:"茅野駅発 例: 9:35 / 14:20 / 15:00（復路 美濃戸口発 10:30 / 15:15 / 16:00）",
       season:"夏ダイヤ（2026年は5/2〜10/25）は土日祝＋8/1〜8/30毎日（8/31は運休）。冬ダイヤ（2025年度は10/27〜5/1）は土日祝＋12/30〜1/4 例: 9:40 / 14:10", url:"https://www.alpico.co.jp/traffic/local/suwa/minotoguchi/"}
    ]
  }],
  huts:[
    {name:"赤岳鉱泉", elevation:2220, open:"通年営業", reservation:"公式サイトの予約フォーム（宿泊・テントとも予約制）", url:"https://www.akadakekousen.jp/", tel:"090-4824-9986"},
    {name:"行者小屋", elevation:2350, open:"例年6月上旬〜10月下旬（年により変動）", reservation:"公式サイトの予約フォーム", url:"https://www.akadakekousen.jp/", tel:"090-4740-3808"},
    {name:"赤岳天望荘", elevation:2722, open:"例年4月下旬〜11月上旬＋年末〜2月上旬の冬季営業", reservation:"Webフォームまたは電話（3日前まで）", url:"http://www.yatsugatake.gr.jp/", tel:"0266-74-2728"},
    {name:"赤岳頂上山荘", elevation:2890, open:"7月上旬〜10月下旬（2026年は7/4〜10/25宿泊分まで）", reservation:"電話予約", url:"https://www.yatsu-honzawaonsen.com/akadake.html", tel:"090-3072-2899"},
    {name:"美濃戸山荘（美濃戸）", elevation:1720, open:"4月下旬〜10月上旬・年末年始ほか", reservation:"電話予約", url:"http://www.yatsugatake.gr.jp/", tel:"0266-74-2270"}
  ],
  routes:[
    {name:"南沢〜地蔵尾根〜赤岳〜文三郎尾根 周回（美濃戸口起点）", stats:"距離 約16km / 標高差 約1,410m / 登り5:10・下り3:50", level:"中級", note:"地蔵尾根・文三郎尾根はクサリ・ハシゴが連続。行者小屋または赤岳鉱泉で1泊する行程が標準。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:false},
     segments:[
       {from:"美濃戸口", to:"行者小屋（南沢経由）", up:"3:00", down:"2:20"},
       {from:"行者小屋", to:"地蔵の頭（地蔵尾根）", up:"1:10", down:"0:50"},
       {from:"地蔵の頭", to:"赤岳天望荘", up:"0:10", down:"0:10"},
       {from:"赤岳天望荘", to:"赤岳山頂", up:"0:50", down:"0:40"}
     ], sample:true},
    {name:"赤岳鉱泉泊 硫黄岳〜横岳〜赤岳 縦走（1泊2日）", stats:"距離 約19km / 標高差 約1,600m / 登り6:50・下り3:50", level:"上級", note:"南八ヶ岳の主稜線を歩く人気縦走。横岳の岩場は高度感があり経験者向け。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"C", official:true, src:"信州 山のグレーディング（美濃戸起点・日帰り周回としての評価）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪が多く地蔵尾根・文三郎尾根はアイゼン・ピッケル必須。残雪期経験者向け。",6:"梅雨の合間を狙う時期。樹林帯はぬかるみ、稜線上部の残雪と強風に注意。",7:"梅雨明けからベストシーズン。コマクサなど高山植物が見頃。",8:"夏山最盛期で小屋・バスとも混雑。午後の雷雨を避け早出早着を徹底。",9:"空気が澄み富士山や北アルプスの展望良好。中旬以降は朝晩の冷え込み対策を。",10:"紅葉は中腹で上旬まで。下旬には稜線で積雪・凍結が始まり冬装備が必要。"}
  }
},
{
  id:"tateshina", name_ja:"蓼科山", name_en:"Mt. Tateshina", region:"八ヶ岳", area:"八ヶ岳・中信高原", prefecture:"長野県",
  elevation:2531, hyakumeizan:true,
  coords:{lat:36.1031, lon:138.2950}, forecast_elevation:2500,
  grading:{
    ridgeline:2500,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"山頂の広大な岩原は5月まで残雪・踏み抜きに注意。悪天時は方向を失いやすい。"
  },
  trailheads:[{
    name:"蓼科山登山口（女神茶屋・標高1,720m）",
    access:[
      {mode:"バス", line:"アルピコ交通 北八ヶ岳ロープウェイ線（車山高原方面直通便）", from:"JR中央本線 茅野駅西口②番のりば",
       duration:"約60分",
       weekday:"運休（8/1〜8/30のみ毎日運行 例: 9:35）", weekend:"茅野駅発 例: 9:35（1日1便。復路 蓼科山登山口 16:27発が最終）",
       season:"土日祝＋8/1〜8/30毎日のみ運行（2026年は5/2〜10/25）", url:"https://www.alpico.co.jp/traffic/local/suwa/kitayatsugatake/"}
    ]
  },{
    name:"七合目登山口（標高1,900m）",
    access:[
      {mode:"バス＋ゴンドラ", line:"千曲バス 中仙道線＋たてしなスマイル交通 シラカバ線（蓼科牧場乗換、ゴンドラ＋徒歩約30分）", from:"北陸新幹線 佐久平駅",
       duration:"バス約1時間10分＋ゴンドラ・徒歩約30分",
       weekday:"平日のみ運行（役場前で乗継・時刻要確認。乗継待ち約80分の場合あり）", weekend:"運休（千曲バス中仙道線が土日祝・お盆・年末年始全休のため接続不可）",
       season:"シラカバ線は便により平日／毎日運行（要時刻確認）。ゴンドラは2026年5/30〜7/8火水運休・7/9〜9/27毎日・10/3〜11/3土日祝運行（9:00〜16:30）", url:"https://www.town.tateshina.nagano.jp/soshiki/kikaku/kikakushinko/806.html", sample:true}
    ]
  }],
  huts:[
    {name:"蓼科山頂ヒュッテ", elevation:2530, open:"4月下旬〜10月末（2026年は4/25〜10/31）", reservation:"予約フォームまたは電話（完全予約制）", url:"https://www.tateshinayama.com/", tel:"090-7258-1855"},
    {name:"双子池ヒュッテ", elevation:2030, open:"4月下旬〜11月上旬（2026年は4/25〜11/7）", reservation:"山小屋予約サイト「やまたん」経由（電話・メール予約不可）", url:"https://www.tateshina2531.com/futagoike-hutte", tel:"090-4821-5200"}
  ],
  routes:[
    {name:"蓼科山登山口（女神茶屋）往復", stats:"距離 約6.6km / 標高差 約810m / 登り2:50・下り2:10", level:"初〜中級", note:"笹原から一転して大岩の急登が続く。山頂は広大な岩原で悪天時は方向を失いやすい。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"蓼科山登山口（女神茶屋）", to:"幸徳平", up:"1:30", down:"1:10"},
       {from:"幸徳平", to:"蓼科山頂ヒュッテ", up:"1:10", down:"0:50"},
       {from:"ヒュッテ", to:"蓼科山山頂", up:"0:10", down:"0:10"}
     ], sample:true},
    {name:"七合目登山口〜将軍平〜山頂 往復", stats:"距離 約4.4km / 標高差 約630m / 登り1:50・下り1:30", level:"初〜中級", note:"最短コース。将軍平の蓼科山荘から山頂直下は岩場の急登で下りは慎重に。",
     popularity:2, trailhead:1, grade:{stamina:2, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"七合目登山口", to:"将軍平（蓼科山荘）", up:"1:10", down:"1:00"},
       {from:"将軍平", to:"蓼科山山頂", up:"0:40", down:"0:30"}
     ], sample:true}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"山頂部に残雪が残り岩の間の踏み抜きに注意。バス運行開始はGW明けの週末から。",6:"新緑と梅雨の晴れ間の静かな山歩き。岩場は濡れると滑りやすい。",7:"ベストシーズン入り。山頂からは八ヶ岳・北アルプスの大展望。",8:"バスが毎日運行され日帰りしやすい時期。午後の雷雨に注意。",9:"秋晴れの展望が魅力。下旬は朝晩冷え込むため防寒着を。",10:"カラマツの黄葉が美しい。下旬にはバス運行が終了し、初雪・凍結も始まる。"}
  }
},
{
  id:"kitayoko", name_ja:"北横岳", name_en:"Mt. Kitayokodake", region:"八ヶ岳", area:"八ヶ岳・中信高原", prefecture:"長野県",
  elevation:2480, hyakumeizan:false,
  coords:{lat:36.0917, lon:138.3181}, forecast_elevation:2400,
  grading:{
    ridgeline:2450,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"北斜面は5月まで残雪・凍結。冬は雪山入門の山として人気（厳冬期装備は必須）。"
  },
  trailheads:[{
    name:"北八ヶ岳ロープウェイ山頂駅（坪庭・標高2,237m）",
    access:[
      {mode:"バス", line:"アルピコ交通 北八ヶ岳ロープウェイ線", from:"JR中央本線 茅野駅西口②番のりば",
       duration:"約45分〜1時間",
       weekday:"茅野駅発 例: 9:35 / 13:30", weekend:"茅野駅発 例: 9:35 / 10:40 / 13:30 / 14:30",
       season:"通年運行（冬期ダイヤは初便9:40など時刻変更あり・降雪時は一部区間折返しの場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kitayatsugatake/"},
      {mode:"ロープウェイ", line:"北八ヶ岳ロープウェイ（山麓駅1,771m〜山頂駅2,237m）", from:"北八ヶ岳ロープウェイ山麓駅",
       duration:"約7分",
       weekday:"山麓駅発 毎時00・20・40分（8:40頃〜16:40頃）", weekend:"同左（8:20頃〜17:00頃）",
       season:"通年運行（整備運休あり・2026年は4/6〜24と11/24〜12/18）", url:"https://www.kitayatu.jp/ropeway/", sample:true}
    ]
  }],
  huts:[
    {name:"北横岳ヒュッテ", elevation:2400, open:"通年（宿泊予約のない日は閉館）", reservation:"電話（完全予約制）", url:"https://kitayoko.com/", tel:"090-7710-2889"},
    {name:"縞枯山荘", elevation:2240, open:"通年営業（冬期11月〜4月上旬は素泊まりのみ）", reservation:"電話またはWebフォーム（要予約）", url:"http://www.lcv.ne.jp/~simagare/", tel:"0266-67-5100"}
  ],
  routes:[
    {name:"山頂駅〜坪庭〜北横岳 往復", stats:"距離 約3.2km / 標高差 約240m / 登り1:20・下り1:00", level:"初級", note:"ロープウェイ利用で2,480mに立てる入門コース。坪庭の溶岩台地と山頂の大展望が魅力。",
     popularity:3, trailhead:0, grade:{stamina:1, skill:"A", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"ロープウェイ山頂駅", to:"坪庭分岐", up:"0:20", down:"0:15"},
       {from:"坪庭分岐", to:"北横岳ヒュッテ", up:"0:40", down:"0:30"},
       {from:"ヒュッテ", to:"北横岳南峰", up:"0:20", down:"0:15"}
     ], sample:true},
    {name:"北横岳＋縞枯山・雨池峠 周回", stats:"距離 約5.5km / 標高差 約320m / 登り2:10・下り1:50", level:"初〜中級", note:"縞枯現象のシラビソ林を歩く北八ヶ岳らしい周回。木道と樹林帯で悪天時も比較的安心。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{2:"スノーシュー・軽アイゼンの雪山入門先として人気。ロープウェイ利用でも厳冬期装備は必須。",5:"残雪が遅くまで残り北斜面は凍結も。軽アイゼンがあると安心。",6:"シラビソの深い緑と坪庭の火山地形。短時間で登れるため梅雨の晴れ間向き。",7:"コケモモなど高山植物が咲く盛夏。家族連れにも歩きやすいベストシーズン。",8:"涼しい避暑ハイクに最適。ロープウェイ・バスとも増便され混雑する。",9:"夏の喧噪が落ち着き空気が澄み始める。下旬は坪庭周辺で草紅葉も。",10:"カラマツの黄葉と初霧氷のコントラスト。下旬は積雪が始まり冬支度を。"}
  }
},
{
  id:"nasu", name_ja:"那須岳（茶臼岳）", name_en:"Mt. Nasu (Chausu)", region:"那須連山", area:"関東周辺", prefecture:"栃木県",
  elevation:1915, hyakumeizan:true,
  coords:{lat:37.1247, lon:139.9636}, forecast_elevation:1800,
  grading:{
    ridgeline:1800,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"峰の茶屋周辺は強風の通り道として有名。風予報は特に重視。"
  },
  trailheads:[{
    name:"那須ロープウェイ山麓駅 / 峠の茶屋駐車場",
    access:[
      {mode:"バス", line:"那須線 那須ロープウェイ行き（関東自動車）", from:"JR那須塩原駅西口・黒磯駅",
       duration:"約1時間15分（那須塩原駅から）",
       weekday:"那須塩原駅発 例: 7:50 / 8:35 / 9:40", weekend:"那須塩原駅発 例: 7:45 / 8:00 / 8:35 / 9:25（増便あり）",
       season:"通年（冬期は大丸温泉止まりの場合あり・要確認）", url:"https://www.kantobus.co.jp/", sample:true},
      {mode:"ロープウェイ", line:"那須ロープウェイ（山頂駅=9合目）", from:"山麓駅",
       duration:"約4分", weekday:"8:30〜16:30（毎時00・20・40分発、上り最終16:00）", weekend:"同左（混雑時増便）",
       season:"3月下旬〜12月中旬（2026年は3/20〜12/13・強風時運休多し）", url:"https://www.nasu-ropeway.jp/"}
    ]
  }],
  huts:[
    {name:"峰の茶屋跡避難小屋（無人・宿泊不可）", elevation:1725, open:"通年開放", reservation:"—", url:"", tel:""},
    {name:"三斗小屋温泉 煙草屋旅館", elevation:1460, open:"4月下旬〜11月下旬（冬季休業）", reservation:"電話予約（現地は衛星電話7:00〜20:00）・テント場はWeb「やまたん」。歩いてしか行けない秘湯", url:"https://www.tabakoyaryokan.com/", tel:"090-8589-2048"},
    {name:"三斗小屋温泉 大黒屋", elevation:1450, open:"4月上旬〜11月下旬（冬季休業）", reservation:"電話予約（平日連絡先 0287-74-2309）", url:"https://sandogoya-onsen.com/", tel:"090-1045-4933"}
  ],
  routes:[
    {name:"ロープウェイ山頂駅→茶臼岳→峰の茶屋→峠の茶屋 周回", stats:"距離 約4.5km / 登り1:00・周回2:30", level:"初級", note:"火山らしい荒涼とした景観。風が強い日は無理をしない。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"ロープウェイ山頂駅", to:"茶臼岳山頂", up:"0:50"},
       {from:"茶臼岳", to:"峰の茶屋跡", up:"0:40"},
       {from:"峰の茶屋跡", to:"峠の茶屋登山口", up:"0:50"}
     ], sample:true},
    {name:"朝日岳・三本槍岳 縦走", stats:"距離 約10km / 行動5〜6時間", level:"中級", note:"朝日岳の鎖場・トラバースは強風時危険。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"B", official:false}},
    {name:"姥ヶ平・ひょうたん池（紅葉名所）", stats:"峰の茶屋から往復+1:30", level:"初〜中級", note:"茶臼岳を映すひょうたん池は10月上旬が見頃。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"A", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{5:"新緑とミネザクラ。",6:"初夏の花が多い。梅雨の晴れ間に。",9:"下旬から姥ヶ平の紅葉が始まる。",10:"上〜中旬が紅葉ピーク。日本有数の早い紅葉だが大混雑、バスは早朝便を。",11:"初冬。強風と凍結に注意。"}
  }
},
{
  id:"kuju", name_ja:"久住山（くじゅう連山）", name_en:"Mt. Kuju", region:"くじゅう連山", area:"九州・屋久島", prefecture:"大分県",
  elevation:1787, hyakumeizan:true,
  coords:{lat:33.0858, lon:131.2483}, forecast_elevation:1600,
  grading:{
    ridgeline:1600,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[12,1,2,3],
    snow_note:"冬期は意外に積雪・凍結あり（九州でも軽アイゼン推奨）。"
  },
  trailheads:[{
    name:"牧ノ戸峠登山口（標高1,330m）",
    access:[
      {mode:"バス", line:"九州横断バス（九州産交バス ※亀の井バスは土日祝のみ別途「牧の戸峠線」運行・12〜3月運休）", from:"別府駅前本町・由布院駅前バスセンター",
       duration:"別府から約2時間・由布院から約1時間",
       weekday:"別府駅前発 例: 8:10（由布院駅前9:10・牧の戸峠10:11着）／復路 牧の戸峠発 由布院方面 例: 10:57 / 11:57 / 15:32（15:32の便のみ別府直通、10:57・11:57は由布院止まり）", weekend:"同左（平日・土日祝共通ダイヤ・予約推奨）",
       season:"通年", url:"https://www.sankobus.jp/bus/oudan/", sample:true}
    ]
  },{
    name:"長者原登山口（タデ原湿原・標高1,030m）",
    access:[
      {mode:"バス", line:"九州横断バス（九州産交バス）", from:"別府駅前本町・由布院駅前バスセンター",
       duration:"由布院から約45分", weekday:"牧ノ戸峠行きと同じ便（1つ手前に停車）", weekend:"同左",
       season:"通年（予約推奨）", url:"https://www.sankobus.jp/bus/oudan/", sample:true}
    ]
  }],
  huts:[
    {name:"法華院温泉山荘", elevation:1303, open:"通年", reservation:"電話予約のみ（宿泊月の3ヶ月前の1日 8:00から受付）。歩いてしか行けない温泉宿。", url:"http://hokkein.co.jp/", tel:"090-4980-2810"},
    {name:"久住山避難小屋（無人）", elevation:1645, open:"通年開放", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"牧ノ戸峠→久住山 往復", stats:"距離 約10km / 標高差 約500m / 登り2:50・下り2:20", level:"初〜中級", note:"展望の続く歩きやすい道。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:false},
     segments:[
       {from:"牧ノ戸峠", to:"沓掛山", up:"0:25", down:"0:15"},
       {from:"沓掛山", to:"久住分れ", up:"1:30", down:"1:10"},
       {from:"久住分れ", to:"久住山山頂", up:"0:40", down:"0:30"}
     ], sample:true},
    {name:"長者原→法華院温泉泊→平治岳・大船山", stats:"1泊2日", level:"中級", note:"ミヤマキリシマの本命コース。坊ガツルでテント泊も可。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,10,11],
    notes:{5:"下旬からミヤマキリシマ開幕（久住山周辺）。",6:"上〜中旬が平治岳・大船山のミヤマキリシマ最盛期。山がピンクに染まる。混雑必至。",10:"下旬から大船山の紅葉（御池）。",11:"上旬まで紅葉。晩秋は霧氷も。",1:"冬は霧氷と雪景色。軽アイゼン持参で。"}
  }
},
{
  id:"tanigawa", name_ja:"谷川岳", name_en:"Mt. Tanigawa", region:"上越国境", area:"上信越・尾瀬", prefecture:"群馬県・新潟県",
  elevation:1977, hyakumeizan:true,
  coords:{lat:36.8378, lon:138.9303}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯。天神尾根でも6月まで残雪、天候急変が非常に多い。"
  },
  trailheads:[{
    name:"谷川岳ロープウェイ 土合口駅（天神平へ）",
    access:[
      {mode:"電車＋徒歩", line:"JR上越線", from:"土合駅（地下ホームの「モグラ駅」）から徒歩約20分",
       duration:"—", weekday:"上越線は本数少（1日5〜6本）要時刻確認", weekend:"同左", season:"通年", url:"https://www.jreast.co.jp/", sample:true},
      {mode:"バス", line:"関越交通 水上線 谷川岳ヨッホ行き（旧・谷川岳ロープウェイ行き）", from:"JR水上駅（上毛高原駅始発）",
       duration:"水上駅から約20〜25分", weekday:"水上駅発 例: 8:25 / 9:00 / 10:45 / 13:20", weekend:"平日とほぼ共通ダイヤ",
       season:"通年（4月中旬〜11月中旬と冬期でダイヤが変わる）", url:"https://kan-etsu.net/pages/20/"},
      {mode:"ロープウェイ", line:"谷川岳ヨッホ by 星野リゾート（旧・谷川岳ロープウェイ）", from:"土合口駅→天神平",
       duration:"約15分（最速7分）", weekday:"8:00〜17:00（上り最終16:30）", weekend:"7:00〜17:00（上り最終16:30）",
       season:"4月中旬〜11月中旬（2026年は4/18〜11/15予定・天候により運休あり）", url:"https://tanigawadake-joch.com/", sample:true}
    ]
  }],
  huts:[
    {name:"肩ノ小屋", elevation:1912, open:"5月上旬〜11月上旬（年により変動）", reservation:"電話予約（受付8:00〜16:00、例年3月から）・期間外はみなかみ町観光商工課 0278-25-5031", url:"https://www.town.minakami.gunma.jp/politics/03soshiki/files/20250403_katanokoya_tairappyounoie.pdf", tel:"090-3347-0802"},
    {name:"谷川岳肩ノ広場 避難スペース", elevation:1900, open:"—", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"天神平→天神尾根→トマの耳・オキの耳 往復", stats:"距離 約6.6km / 標高差 約700m / 登り2:35・下り2:20", level:"中級", note:"人気No.1ルート。岩場・木道の混在。混雑期はロープウェイ始発を。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"群馬県 山のグレーディング", url:"https://www.pref.gunma.jp/page/1489.html"},
     segments:[
       {from:"天神平", to:"熊穴沢避難小屋", up:"0:50", down:"0:40"},
       {from:"熊穴沢避難小屋", to:"肩ノ小屋", up:"1:20", down:"1:15"},
       {from:"肩ノ小屋", to:"トマの耳", up:"0:10", down:"0:10"},
       {from:"トマの耳", to:"オキの耳", up:"0:15", down:"0:15"}
     ], sample:true},
    {name:"西黒尾根（日本三大急登）", stats:"標高差 約1,200m / 登り4:00", level:"上級", note:"鎖場あり。健脚向け。下山には不向き。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"群馬県 山のグレーディング（西黒尾根 往復としての評価）", url:"https://www.pref.gunma.jp/page/1489.html"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{6:"残雪と新緑。雪渓歩きの装備を。",7:"高山植物の宝庫（ホソバヒナウスユキソウなど）。",8:"盛夏。標高が低く暑いので早出を。午後は雷雨に注意。",9:"下旬から山頂部の紅葉。",10:"上〜中旬が紅葉ピーク。天神平の草紅葉も見事。",11:"初雪。一般登山は終了の目安。"}
  }
},
{
  id:"kinpu", name_ja:"金峰山", name_en:"Mt. Kinpu", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"山梨県・長野県",
  elevation:2599, hyakumeizan:true,
  coords:{lat:35.8714, lon:138.6258}, forecast_elevation:2500,
  grading:{
    ridgeline:2550,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"森林限界上の稜線（千代ノ吹上〜五丈岩）は風の通り道。5月まで残雪が残る年あり。"
  },
  trailheads:[{
    name:"大弛峠（標高2,365m）",
    access:[
      {mode:"バス", line:"栄和交通 大弛峠線（予約制乗合バス）", from:"JR塩山駅北口",
       duration:"約1時間25分",
       weekday:"平日運行なし（土日祝のみ）", weekend:"塩山駅北口発 例: 7:30 / 9:00（復路 大弛峠発 例: 15:00 / 16:15）",
       season:"土日祝のみ運行（2026年は5/30〜11/8）。Web完全予約制", url:"https://eiwa-kotsu.jp/oodarumi.html", sample:true}
    ]
  },{
    name:"瑞牆山荘（標高1,520m）",
    access:[
      {mode:"バス", line:"山梨峡北交通 韮崎瑞牆線（茅ヶ岳みずがき田園バス）", from:"JR韮崎駅",
       duration:"約75分",
       weekday:"韮崎駅発 例: 8:50 / 9:35 / 12:40 / 13:30", weekend:"韮崎駅発 例: 8:50 / 9:35 / 11:25 / 13:30",
       season:"4月上旬〜11月下旬運行（冬期運休）", url:"http://cus4.kyohoku.jp/routebus/kayagatakemizugakidenen-bus/schedule-mizugakiline/"}
    ]
  }],
  huts:[
    {name:"金峰山小屋", elevation:2420, open:"4月下旬〜11月下旬（冬季は週末・年末年始のみ）", reservation:"公式サイトの予約カレンダーから（完全予約制）", url:"https://www.kimpou.com/", tel:"090-4931-1998"},
    {name:"大弛小屋", elevation:2360, open:"4月末〜11月末（林道閉鎖期間は休業）", reservation:"電話・FAXで2日前までに要予約", url:"http://oodarumi.jp/", tel:"090-7605-8549"}
  ],
  routes:[
    {name:"大弛峠ルート（往復）", stats:"距離 約8.5km / 標高差 約240m / 登り2:30・下り2:00", level:"初〜中級", note:"車道最高地点の大弛峠から樹林と稜線をたどる最短ルート。標高差は小さいが標高2,500m超の高所歩き。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"大弛峠", to:"朝日岳", up:"1:20", down:"1:00"},
       {from:"朝日岳", to:"金峰山山頂（五丈岩）", up:"1:10", down:"1:00"}
     ], sample:true},
    {name:"瑞牆山荘〜富士見平〜金峰山（往復）", stats:"距離 約13.5km / 標高差 約1,080m / 登り4:30・下り3:30", level:"中級", note:"大日岩・砂払ノ頭を経て千代ノ吹上の岩稜へ。後半は展望の稜線だが岩場の通過に注意。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"C", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"瑞牆山荘", to:"富士見平小屋", up:"0:50", down:"0:40"},
       {from:"富士見平", to:"大日岩", up:"1:30", down:"0:50"},
       {from:"大日岩", to:"砂払ノ頭", up:"1:10", down:"0:50"},
       {from:"砂払ノ頭", to:"金峰山山頂", up:"1:00", down:"0:50"}
     ], sample:true}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"残雪が稜線に残ることがあり、軽アイゼン携行が安心。バス運行開始前はアクセス注意。",6:"新緑とシャクナゲの季節。大弛峠線の運行が始まり公共交通で登りやすくなる。",7:"夏山シーズン本番。午後の雷雨に注意し、早出早着を。",8:"気温は快適だが夕立が多い。五丈岩と360度の展望。",9:"秋雨の合間の晴れを狙う。朝晩は冷え込み、下旬から稜線が色づき始める。",10:"紅葉と初冠雪が重なる時期。朝晩は氷点下になり防寒必須。",11:"上旬でバス運行終了。降雪・凍結が始まり冬山装備の世界へ。"}
  }
},
{
  id:"mizugaki", name_ja:"瑞牆山", name_en:"Mt. Mizugaki", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"山梨県",
  elevation:2230, hyakumeizan:true,
  coords:{lat:35.8939, lon:138.5925}, forecast_elevation:2200,
  grading:{
    ridgeline:2200,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"樹林に守られ風には比較的強いが、岩場は凍結・雨で滑りやすい。"
  },
  trailheads:[{
    name:"瑞牆山荘（標高1,520m）",
    access:[
      {mode:"バス", line:"山梨峡北交通 韮崎瑞牆線（茅ヶ岳みずがき田園バス）", from:"JR韮崎駅",
       duration:"約75分",
       weekday:"韮崎駅発 例: 8:50 / 9:35 / 12:40 / 13:30", weekend:"韮崎駅発 例: 8:50 / 9:35 / 11:25 / 13:30（復路 例: 14:25 / 15:25 / 16:25）",
       season:"4月上旬〜11月下旬運行（冬期運休）", url:"http://cus4.kyohoku.jp/routebus/kayagatakemizugakidenen-bus/schedule-mizugakiline/"}
    ]
  }],
  huts:[
    {name:"富士見平小屋", elevation:1810, open:"4月上旬〜11月下旬（テント場は通年利用可）", reservation:"電話で要予約（小屋泊は完全予約制、テントは予約不要）", url:"https://www.fujimidairagoya.jp/", tel:"090-7254-5698"},
    {name:"瑞牆山荘（宿泊施設）", elevation:1520, open:"通年（冬季は週末中心）", reservation:"電話で要予約", url:"https://www.mizugaki.burari.biz/", tel:"0551-45-0521"}
  ],
  routes:[
    {name:"瑞牆山荘ルート（往復）", stats:"距離 約7km / 標高差 約710m / 登り2:50・下り2:10", level:"初〜中級", note:"富士見平から天鳥川を渡り、桃太郎岩を経て岩場の急登へ。鎖場ありだが日帰り定番の百名山。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"C", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"瑞牆山荘", to:"富士見平小屋", up:"0:50", down:"0:40"},
       {from:"富士見平", to:"天鳥川出合（桃太郎岩）", up:"0:30", down:"0:25"},
       {from:"天鳥川", to:"瑞牆山山頂", up:"1:30", down:"1:05"}
     ], sample:true},
    {name:"富士見平ベースで瑞牆山・金峰山二座", stats:"1泊2日 / 距離 約18km / 登り計7:00・下り計5:30", level:"中級", note:"富士見平小屋泊またはテント泊で奥秩父の名峰二座をまとめて登る人気プラン。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10,11],
    notes:{4:"バス運行が始まるが日陰に残雪・凍結が残ることあり。岩場の凍結に注意。",5:"新緑が美しく、シャクナゲの蕾がふくらむ。GWは登山者が多い。",6:"岩峰にシャクナゲが咲く最良期のひとつ。梅雨の晴れ間を狙いたい。",9:"秋晴れの日は山頂から八ヶ岳・南アルプスの大展望。",10:"紅葉最盛期。カラマツの黄葉と花崗岩の岩峰の対比が見事。",11:"下旬でバス運行終了。晩秋は凍結が始まり冬装備の検討を。"}
  }
},
{
  id:"kumotori", name_ja:"雲取山", name_en:"Mt. Kumotori", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"東京都・埼玉県・山梨県",
  elevation:2017, hyakumeizan:true,
  coords:{lat:35.8556, lon:138.9436}, forecast_elevation:2000,
  grading:{
    ridgeline:2000,
    wind_caution:10, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"東京都最高峰。冬期は積雪・凍結があり、チェーンスパイク等の滑り止め必須。"
  },
  trailheads:[{
    name:"鴨沢バス停（標高540m）",
    access:[
      {mode:"バス", line:"西東京バス 奥09/奥10系統（鴨沢西・丹波方面）", from:"JR奥多摩駅",
       duration:"約32分",
       weekday:"奥多摩駅発 例: 7:00 / 9:30 / 13:10", weekend:"奥多摩駅発 例: 8:35 / 9:30 / 10:35",
       season:"通年運行", url:"https://www.nisitokyobus.co.jp/", sample:true}
    ]
  },{
    name:"三峯神社バス停（標高1,040m）",
    access:[
      {mode:"バス", line:"西武観光バス 三峯神社線", from:"西武秩父駅",
       duration:"約1時間20分",
       weekday:"西武秩父駅発 例: 8:45 / 10:15 / 13:30", weekend:"西武秩父駅発 例: 8:00 / 8:30 / 9:10 / 10:00 / 10:30",
       season:"通年運行（GW・お盆・年末年始は特別ダイヤ）", url:"https://www.seibubus.co.jp/rosen/mitsumine/", sample:true}
    ]
  }],
  huts:[
    {name:"雲取山荘", elevation:1830, open:"通年営業", reservation:"電話・FAX・メールで要予約（個人は3ヶ月前から受付）", url:"http://kumotorisansou.com/", tel:"0494-23-3338"},
    {name:"七ツ石小屋", elevation:1597, open:"通年営業（小屋番常駐）", reservation:"電話で要予約（受付9:00〜15:00、素泊まり・テントのみ）", url:"https://nanatsuishigoya.com/", tel:"090-8815-1597"}
  ],
  routes:[
    {name:"鴨沢ルート（往復）", stats:"距離 約22km / 標高差 約1,480m / 登り5:30・下り4:00", level:"中級", note:"東京都最高峰への最も一般的な道。日帰りは健脚向きで、七ツ石小屋か雲取山荘泊が安心。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"鴨沢バス停", to:"堂所", up:"1:50", down:"1:20"},
       {from:"堂所", to:"七ツ石小屋", up:"1:10", down:"0:50"},
       {from:"七ツ石小屋", to:"ブナ坂", up:"0:30", down:"0:25"},
       {from:"ブナ坂", to:"雲取山山頂", up:"1:40", down:"1:20"}
     ], sample:true},
    {name:"三峯神社ルート（三峯→山頂→鴨沢下山）", stats:"距離 約21km / 標高差 約1,000m / 登り5:10・下り4:00", level:"中級", note:"霧藻ヶ峰・白岩山を越えるアップダウンの多い縦走路。雲取山荘泊の1泊2日が定番。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"B", official:false}},
    {name:"石尾根縦走（山頂→奥多摩駅）", stats:"距離 約19km / 下り6:00", level:"上級", note:"七ツ石山・鷹ノ巣山を連ねる長大な下山路。エスケープが限られ体力必須。",
     popularity:1, trailhead:null, grade:{stamina:8, skill:"B", official:false}}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{1:"積雪・凍結あり。チェーンスパイク等の滑り止めが必須。",4:"麓は新緑、稜線はまだ冬枯れ。空気が澄み富士山の展望が良い。",5:"新緑が稜線まで駆け上がる快適な季節。連休は小屋の予約を早めに。",7:"梅雨明け後は樹林帯の蒸し暑さと午後の雷雨に注意。",10:"石尾根の紅葉が見頃。日没が早く行動時間に余裕を。",11:"落葉後は展望が開け、晩秋の澄んだ空気で夜景と星空が美しい。"}
  }
},
{
  id:"daibosatsu", name_ja:"大菩薩嶺", name_en:"Mt. Daibosatsu", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"山梨県",
  elevation:2057, hyakumeizan:true,
  coords:{lat:35.7486, lon:138.8444}, forecast_elevation:2000,
  grading:{
    ridgeline:2050,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"雷岩〜大菩薩峠の稜線は樹林がなく風をまともに受ける。冬期は積雪・凍結。"
  },
  trailheads:[{
    name:"上日川峠（標高1,585m）",
    access:[
      {mode:"バス", line:"栄和交通 大菩薩上日川峠線", from:"JR甲斐大和駅",
       duration:"約41分",
       weekday:"甲斐大和駅発 例: 8:10 / 9:50 / 14:50（指定平日のみ運行）", weekend:"甲斐大和駅発 例: 8:10 / 9:20 / 9:50 / 13:50（復路 例: 13:00 / 15:00 / 15:45）",
       season:"4月中旬〜12月中旬の土日祝運行（4月下旬〜11月に指定平日運行あり）。予約不要", url:"https://eiwa-kotsu.jp/root.html"}
    ]
  }],
  huts:[
    {name:"介山荘", elevation:1900, open:"通年営業（平日不定休・要連絡）", reservation:"電話で要予約", url:"http://kaizansou.jp/", tel:"090-3147-5424"},
    {name:"福ちゃん荘", elevation:1720, open:"4月上旬〜11月末・年末年始（期間外は予約営業）", reservation:"電話で要予約", url:"http://www.kcnet.ne.jp/~fukuchan/", tel:"0553-33-4639"},
    {name:"ロッヂ長兵衛", elevation:1580, open:"4月中旬〜12月中旬（冬季は要問合せ）", reservation:"電話で要予約", url:"http://www.choubei.info/", tel:"090-3149-0964"}
  ],
  routes:[
    {name:"上日川峠周回（唐松尾根→雷岩→大菩薩峠）", stats:"距離 約7.5km / 標高差 約480m / 登り2:00・下り1:40", level:"初級", note:"富士山と甲府盆地を望む草原の稜線を歩く定番周回。初心者・家族連れに最適。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"上日川峠", to:"福ちゃん荘", up:"0:25"},
       {from:"福ちゃん荘", to:"雷岩（唐松尾根）", up:"1:20"},
       {from:"雷岩", to:"大菩薩嶺山頂", up:"0:10"},
       {from:"雷岩", to:"大菩薩峠（介山荘）", up:"0:40"},
       {from:"大菩薩峠", to:"上日川峠", up:"1:00"}
     ], sample:true},
    {name:"裂石（丸川峠）ルート", stats:"距離 約13km / 標高差 約1,160m / 登り3:50・下り2:50", level:"中級", note:"バス運休期でも歩ける麓からのクラシックルート。丸川峠経由で静かな樹林を行く。",
     popularity:2, trailhead:null, grade:{stamina:4, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,10,11],
    notes:{4:"中旬にバス運行開始。稜線は芽吹き前で残雪が残る年もある。",5:"新緑と富士山の眺めが最高の季節。土日はバス・稜線とも賑わう。",6:"緑濃い草原の稜線歩き。梅雨の合間はレンゲツツジも。",10:"カラマツの黄葉が峠一帯を染める最良期。朝晩の冷え込みに注意。",11:"空気が澄み富士山・南アルプスの展望が最も美しい時期。",12:"中旬でバス運行終了。積雪が始まり静かな冬山へ移行。"}
  }
},
{
  id:"shibutsu", name_ja:"至仏山", name_en:"Mt. Shibutsu", region:"尾瀬", area:"上信越・尾瀬", prefecture:"群馬県",
  elevation:2228, hyakumeizan:true,
  coords:{lat:36.9036, lon:139.1731}, forecast_elevation:2200,
  grading:{
    ridgeline:2200,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"5月上旬〜6月中旬は植生保護のため登山道閉鎖（年により変動）。蛇紋岩は雨で非常に滑る。"
  },
  trailheads:[{
    name:"鳩待峠（標高1,591m）",
    access:[
      {mode:"バス", line:"関越交通バス 鎌田線（沼田駅・上毛高原駅〜鎌田〜尾瀬戸倉）", from:"JR沼田駅 / 上毛高原駅",
       duration:"約1時間25分（沼田駅→尾瀬戸倉）",
       weekday:"沼田駅発 例: 7:20 / 8:45 / 10:05", weekend:"同左（上毛高原駅発 例: 8:15 / 9:37）",
       season:"通年運行（2026年7月改正ダイヤ）", url:"https://kan-etsu.net/pages/22/", sample:true},
      {mode:"乗合バス・乗合タクシー", line:"尾瀬戸倉〜鳩待峠（マイカー規制区間・関越交通ほか）", from:"尾瀬戸倉（尾瀬第一駐車場・乗り換え）",
       duration:"約35分",
       weekday:"戸倉発 例: 6:30 / 7:30 / 8:30（最盛期は5:30始発・随時増便）", weekend:"戸倉発 例: 5:30 / 6:30 / 7:30（随時増便）",
       season:"4月中旬〜11月上旬（2026年は4/18〜11/3・片道大人1,300円）", url:"https://kan-etsu.net/pages/43/", sample:true}
    ]
  }],
  huts:[
    {name:"至仏山荘（山ノ鼻）", elevation:1400, open:"4月中旬〜10月下旬（2026年は4/17〜10/24）", reservation:"電話予約", url:"https://www.tokyo-pt.co.jp/oze/mountain-villa/shibutsu", tel:"0278-58-7311"},
    {name:"山の鼻小屋", elevation:1400, open:"4月中旬〜10月下旬（2026年は4/18〜10/24）", reservation:"電話・公式サイト（2月1日予約開始）", url:"https://hpdsp.jp/yamanohanagoya/", tel:"0278-58-7411"},
    {name:"LUCY尾瀬鳩待（旧鳩待山荘・鳩待峠）", elevation:1591, open:"4月下旬〜10月下旬（2026年は4/29〜10/24）", reservation:"公式サイト・予約センター", url:"https://hoshinoresorts.com/ja/hotels/lucyozehatomachi/", tel:"050-3134-8099"}
  ],
  routes:[
    {name:"鳩待峠〜オヤマ沢田代〜小至仏山〜至仏山 往復", stats:"距離 約9.4km / 標高差 約640m / 登り2:50・下り2:20", level:"中級", note:"尾瀬ヶ原と燧ヶ岳を望む展望路。蛇紋岩は雨天時に非常に滑りやすい。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"群馬県 山のグレーディング", url:"https://www.pref.gunma.jp/page/1489.html"},
     segments:[
       {from:"鳩待峠", to:"オヤマ沢田代", up:"1:30", down:"1:10"},
       {from:"オヤマ沢田代", to:"小至仏山", up:"0:30", down:"0:25"},
       {from:"小至仏山", to:"至仏山山頂", up:"0:50", down:"0:40"}
     ], sample:true},
    {name:"鳩待峠→山ノ鼻→至仏山→小至仏山→鳩待峠 周回", stats:"距離 約11.5km / 標高差 約830m / 登り4:00・下り2:20", level:"中級", note:"山ノ鼻〜山頂の東面登山道は植生保護のため登り専用（下山禁止）。",
     popularity:2, trailhead:0, grade:{stamina:5, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{4:"残雪期利用期間（2026年は4/17〜5/6のみ・雪山装備必須）。尾瀬保護財団の案内を確認。",5:"【重要】植生保護のため5月上旬〜6月中旬は至仏山登山道が全面閉鎖。",6:"下旬に閉鎖解除（2026年は6/19まで閉鎖）。開通直後は残雪と泥濘に注意。",7:"蛇紋岩帯にホソバヒナウスユキソウなど固有の高山植物が咲く最盛期。",8:"盛夏。雨に濡れた蛇紋岩は非常に滑りやすく、午後の雷雨にも注意。",9:"下旬から尾瀬ヶ原の草紅葉。静かな山歩きが楽しめる。",10:"草紅葉と初雪の季節。下旬で山小屋・鳩待峠行きバスが順次終了。"}
  }
},
{
  id:"nikkoshirane", name_ja:"日光白根山", name_en:"Mt. Nikko-Shirane", region:"日光連山", area:"関東周辺", prefecture:"栃木県・群馬県",
  elevation:2578, hyakumeizan:true,
  coords:{lat:36.7986, lon:139.3758}, forecast_elevation:2500,
  grading:{
    ridgeline:2500,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"関東以北の最高峰。森林限界付近は5月まで残雪の年があり、10月には初冠雪。"
  },
  trailheads:[{
    name:"丸沼高原ロープウェイ山頂駅（標高2,000m）",
    access:[
      {mode:"バス", line:"関越交通バス 鎌田線（沼田駅〜鎌田）", from:"JR沼田駅",
       duration:"約55分（鎌田まで）",
       weekday:"沼田駅発 例: 6:41 / 7:20 / 8:45", weekend:"同左＋沼田駅発 6:20 増発（6/1〜10/25の土日祝のみ運行）（上毛高原駅発 例: 8:15 / 9:37）",
       season:"通年運行", url:"https://kan-etsu.net/pages/22/"},
      {mode:"バス", line:"関越交通バス 湯元温泉線（鎌田〜日光白根山ロープウェイ〜湯元温泉）", from:"鎌田（乗り換え）",
       duration:"約20分",
       weekday:"運行なし", weekend:"鎌田発 例: 7:20 / 12:02 / 15:28",
       season:"6月〜10月下旬の土日祝のみ（2026年は6/1〜10/25）", url:"https://kan-etsu.net/pages/22/"}
    ]
  },{
    name:"湯元温泉（標高約1,480m）",
    access:[
      {mode:"バス", line:"東武バス日光 湯元温泉行き（日光駅〜中禅寺温泉〜湯元温泉）", from:"東武日光駅",
       duration:"約85分",
       weekday:"東武日光駅発 例: 6:09 / 6:55 / 7:53 / 8:45", weekend:"同左",
       season:"通年運行", url:"https://www.tobu-bus.com/pc/area/nikko/", sample:true}
    ]
  }],
  huts:[
    {name:"五色沼避難小屋（無人）", elevation:2200, open:"通年開放（無人・トイレなし）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"ロープウェイ山頂駅〜奥白根山 往復", stats:"距離 約6.4km / 標高差 約580m / 登り2:30・下り2:00", level:"中級", note:"標高2,000mから登れる最短路。山頂直下は岩とザレの急登、天候急変に注意。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"ロープウェイ山頂駅", to:"七色平分岐", up:"0:30", down:"0:25"},
       {from:"七色平分岐", to:"森林限界", up:"1:00", down:"0:45"},
       {from:"森林限界", to:"奥白根山山頂", up:"1:00", down:"0:50"}
     ], sample:true},
    {name:"湯元温泉〜前白根山〜五色沼〜奥白根山", stats:"距離 約10km / 標高差 約1,100m / 登り4:40・下り3:30", level:"上級", note:"外山尾根の急登を経て五色沼を見下ろす縦走路。ロングコースで健脚向き。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"森林限界付近は残雪が残り、軽アイゼンが必要な年もある。",6:"固有種シラネアオイの開花期。湯元温泉線のバス運行が始まる。",7:"コマクサなど高山植物の最盛期。梅雨明け後は展望も安定。",8:"夏山シーズン本番。午後の雷雨に注意し早出早着を。",9:"空気が澄み五色沼の展望が良い。下旬から山頂部が色づき始める。",10:"山頂部の紅葉と初冠雪が重なる。下旬でロープウェイ線バスの運行終了。",11:"積雪期に入り一般登山は困難。冬装備と経験が必要。"}
  }
},
{
  id:"nantai", name_ja:"男体山", name_en:"Mt. Nantai", region:"日光連山", area:"関東周辺", prefecture:"栃木県",
  elevation:2486, hyakumeizan:true,
  coords:{lat:36.7650, lon:139.4911}, forecast_elevation:2400,
  grading:{
    ridgeline:2400,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"開山期間は4月25日〜11月11日（二荒山神社が管理）。開山直後は山頂部に残雪が残ることがある。"
  },
  trailheads:[{
    name:"二荒山神社中宮祠（標高約1,280m）",
    access:[
      {mode:"バス", line:"東武バス日光 中禅寺温泉・湯元温泉行き", from:"東武日光駅",
       duration:"約55分",
       weekday:"東武日光駅発 例: 6:09 / 6:55 / 7:53 / 8:45", weekend:"同左",
       season:"通年運行。登拝受付は6:00〜12:00のため午前の早い便を推奨", url:"https://www.tobu-bus.com/pc/area/nikko/", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"表参道（二荒山神社中宮祠）往復", stats:"距離 約8.6km / 標高差 約1,200m / 登り3:30・下り2:30", level:"中級", note:"開山期間（4/25〜11/11）のみ入山可。中宮祠で登拝受付（6:00〜正午・登拝料1,000円）、道中に水場・トイレなし。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"栃木県 山のグレーディング", url:"https://www.pref.tochigi.lg.jp/d04/yama/yama.html"},
     segments:[
       {from:"二荒山神社中宮祠", to:"四合目（林道終点）", up:"1:00", down:"0:45"},
       {from:"四合目", to:"七合目", up:"1:00", down:"0:50"},
       {from:"七合目", to:"男体山山頂", up:"1:30", down:"1:00"}
     ], sample:true}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{4:"4月25日に開山。山頂部はまだ残雪が残ることがある。",5:"新緑の中禅寺湖畔から一気に高度を上げる。朝は冷え込むので防寒を。",6:"梅雨入り前後。新緑が山腹を覆い、晴れ間を選べば静かに登れる。",7:"月末から男体山登拝大祭（7/31〜8/7）。期間中は深夜登拝も可能。",8:"夏山最盛期。樹林帯を抜けると日差しが強く、水は多めに。",9:"残暑が落ち着き空気が澄み始める。紅葉前の比較的静かな時期。",10:"中禅寺湖と紅葉を見下ろす絶景の季節。山頂は初冠雪の便りも。",11:"11月11日で閉山。以降は入山できないため計画に注意。"}
  }
},
{
  id:"akagi", name_ja:"赤城山（黒檜山）", name_en:"Mt. Akagi (Kurobi)", region:"上毛三山", area:"関東周辺", prefecture:"群馬県",
  elevation:1828, hyakumeizan:true,
  coords:{lat:36.5606, lon:139.1933}, forecast_elevation:1800,
  grading:{
    ridgeline:1800,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3],
    snow_note:"冬期は積雪・凍結で軽アイゼン必須。上州名物の空っ風で体感温度は低い。"
  },
  trailheads:[{
    name:"あかぎ広場前・大洞（標高約1,360m）",
    access:[
      {mode:"バス", line:"関越交通バス 前橋赤城山線「直通あかぎ号」", from:"JR前橋駅",
       duration:"約70分",
       weekday:"直通便なし（前橋駅→富士見温泉で乗り換え・要事前確認）", weekend:"前橋駅発 例: 8:45 / 12:10 / 15:15（帰り 例: 10:12 / 13:42 / 16:42）",
       season:"直通便は土日祝のみ運行（通年。夏ダイヤ4/1〜11/30・冬ダイヤ12/1〜3/31。時刻は季節で異なる場合あり要確認）", url:"https://kan-etsu.net/pages/42/", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"黒檜山〜駒ヶ岳 周回", stats:"距離 約5.0km / 標高差 約480m / 登り1:40・下り1:50", level:"初〜中級", note:"黒檜山登山口からの序盤は岩混じりの急登。稜線からは大沼と関東平野の大展望。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"群馬県 山のグレーディング", url:"https://www.pref.gunma.jp/page/1489.html"},
     segments:[
       {from:"黒檜山登山口", to:"猫岩", up:"0:30"},
       {from:"猫岩", to:"黒檜山山頂", up:"1:35"},
       {from:"黒檜山", to:"駒ヶ岳", up:"1:00"},
       {from:"駒ヶ岳", to:"駒ヶ岳登山口", up:"0:50"}
     ], sample:true},
    {name:"黒檜山 往復", stats:"距離 約4.2km / 標高差 約470m / 登り1:30・下り1:15", level:"初〜中級", note:"最短で山頂に立てる定番ルート。あかぎ広場前バス停から登山口まで湖畔を徒歩約20分。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,7,9,10],
    notes:{5:"新緑とアカヤシオが見頃。朝晩はまだ冷えるので防寒着を。",6:"白樺牧場のレンゲツツジが咲き、一年で最も華やかな季節。",7:"標高1,300m超の大沼周辺は平地より涼しく避暑ハイクに好適。",9:"空気が澄み始め、稜線からの展望が安定する。",10:"カエデ類の紅葉が湖畔を彩る。下旬は初氷に注意。",12:"積雪・凍結期に入り軽アイゼン必須。厳冬期は雪山装備で。"}
  }
},
{
  id:"tonodake", name_ja:"塔ノ岳", name_en:"Mt. Tonodake", region:"丹沢", area:"関東周辺", prefecture:"神奈川県",
  elevation:1491, hyakumeizan:false,
  coords:{lat:35.4542, lon:139.1610}, forecast_elevation:1500,
  grading:{
    ridgeline:1490,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[12,1,2,3],
    snow_note:"積雪は少ないが冬の朝は霜・凍結、日中は泥濘。チェーンスパイク携行が安心。"
  },
  trailheads:[{
    name:"大倉バス停（標高290m）",
    access:[
      {mode:"バス", line:"神奈川中央交通 渋02系統（渋沢駅北口〜大倉）", from:"小田急線 渋沢駅北口 2番のりば",
       duration:"約15分",
       weekday:"渋沢駅北口発 例: 6:48 / 7:16 / 7:47 / 8:25", weekend:"渋沢駅北口発 例: 6:48 / 7:18（登山シーズンの朝は臨時便増発あり）",
       season:"通年", url:"https://www.kanachu.co.jp/", sample:true}
    ]
  },{
    name:"ヤビツ峠（標高761m）",
    access:[
      {mode:"バス", line:"神奈川中央交通 秦21系統（秦野駅〜ヤビツ峠）", from:"小田急線 秦野駅 4番のりば",
       duration:"約50分",
       weekday:"秦野駅発 例: 8:25（平日は往復各1便のみ）", weekend:"秦野駅発 例: 7:20 / 7:44 / 8:24（混雑時増発あり）",
       season:"通年（冬期は積雪・凍結による運休あり）", url:"https://www.kanachu.co.jp/", sample:true}
    ]
  }],
  huts:[
    {name:"尊仏山荘", elevation:1491, open:"通年営業（塔ノ岳山頂）", reservation:"電話予約（受付9:00〜19:00）", url:"https://sonbutsusanso.amebaownd.com/", tel:"070-2796-5270"},
    {name:"花立山荘", elevation:1300, open:"土・日・祝日営業（軽食・休憩。名物は氷・おしるこ）", reservation:"宿泊は電話にて要予約（定員約20名）", url:"https://hanatatesanso.com/", tel:"090-1468-0561"},
    {name:"堀山の家", elevation:950, open:"週末営業 ※2026年1月の火災の影響で当面休業中", reservation:"休業中のため受付なし", url:"", tel:""}
  ],
  routes:[
    {name:"大倉尾根（バカ尾根）往復", stats:"距離 約14km / 標高差 約1,200m / 登り3:40・下り2:30", level:"初〜中級", note:"丹沢の主峰へ一直線に登る定番ルート。延々と続く階段は体力勝負だが、山小屋が点在し道迷いの心配は少ない。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"A", official:false},
     segments:[
       {from:"大倉バス停", to:"見晴茶屋", up:"0:50", down:"0:40"},
       {from:"見晴茶屋", to:"堀山の家", up:"1:00", down:"0:45"},
       {from:"堀山の家", to:"花立山荘", up:"1:00", down:"0:45"},
       {from:"花立山荘", to:"塔ノ岳山頂", up:"0:50", down:"0:25"}
     ], sample:true},
    {name:"表尾根縦走（ヤビツ峠→三ノ塔→塔ノ岳→大倉）", stats:"距離 約14km / 標高差 約730m / 登り4:10・下り2:30", level:"中級", note:"二ノ塔・三ノ塔の大展望から鎖場のある行者ヶ岳を越える人気縦走路。バス便の少なさに注意し早出を。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:false}}
  ],
  seasonality:{
    best:[1,4,5,11,12],
    notes:{1:"富士山と相模湾の展望は年間随一。霜解けの泥濘に注意、チェーンスパイク携行が安心。",4:"山桜と芽吹きの季節。気温差が大きく重ね着で調整を。",5:"新緑とシロヤシオが見事。ヤマビルが動き出す時期で沢沿いは対策を。",7:"蒸し暑く午後は雷雨も。ヤマビル最盛期のため塩・忌避剤の携行と早出早着を。",9:"残暑と秋雨で条件は不安定。晴れ間を選べば静かな山歩き。",11:"空気が澄み紅葉と富士山の展望が最高。日没が早いのでヘッドランプを忘れずに。",12:"晴天率が高く展望の黄金期。霜と凍結が始まるので防寒と滑り止めを。"}
  }
},
{
  id:"oyama", name_ja:"大山（丹沢）", name_en:"Mt. Oyama", region:"丹沢", area:"関東周辺", prefecture:"神奈川県",
  elevation:1252, hyakumeizan:false,
  coords:{lat:35.4408, lon:139.2311}, forecast_elevation:1250,
  grading:{
    ridgeline:1250,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[12,1,2],
    snow_note:"冬の山頂北面は霜・凍結が出るため軽アイゼンがあると安心。"
  },
  trailheads:[{
    name:"大山ケーブル バス停（標高310m）",
    access:[
      {mode:"バス", line:"神奈川中央交通 伊10系統（伊勢原駅北口〜大山ケーブル）", from:"小田急線 伊勢原駅北口 4番のりば",
       duration:"約25分",
       weekday:"伊勢原駅北口発 例: 6:10 / 6:50 / 7:07 / 7:37（以降も日中頻発）", weekend:"伊勢原駅北口発 例: 6:10 / 6:50（日中は10〜20分間隔で頻発）",
       season:"通年", url:"https://www.kanachu.co.jp/", sample:true},
      {mode:"ケーブルカー", line:"大山ケーブルカー（大山観光電鉄）大山ケーブル駅〜阿夫利神社駅", from:"大山ケーブル駅（バス停からこま参道を徒歩約15分）",
       duration:"約6分",
       weekday:"9:00〜16:30 20分間隔", weekend:"9:00〜17:00 20分間隔（混雑時増発、紅葉期・正月は延長運転）",
       season:"通年（初夏・冬に定期検査運休あり）", url:"https://www.ooyama-cable.co.jp/timetable/", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"表参道（阿夫利神社下社→本坂→山頂）往復", stats:"距離 約4.4km / 標高差 約550m / 登り1:25・下り1:10", level:"初級", note:"ケーブルカー利用で気軽に登れる信仰の道。石段と岩混じりの登りが続くが道標は完備。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"阿夫利神社下社", to:"十六丁目追分", up:"0:40", down:"0:30"},
       {from:"十六丁目", to:"二十五丁目（ヤビツ峠分岐）", up:"0:35", down:"0:25"},
       {from:"二十五丁目", to:"大山山頂", up:"0:10", down:"0:10"}
     ], sample:true},
    {name:"山頂→見晴台→下社 周回", stats:"距離 約5.6km / 標高差 約550m / 登り1:30・下り1:30", level:"初〜中級", note:"下りに見晴台と二重滝を巡る変化に富んだ周回。雨後は木道が滑りやすい。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"A", official:false}},
    {name:"イタツミ尾根（ヤビツ峠→山頂）往復", stats:"距離 約4.6km / 標高差 約490m / 登り1:00・下り0:50", level:"初級", note:"最短で山頂に立てる尾根道。ヤビツ峠行きバスは本数が少なく計画的に。",
     popularity:1, trailhead:null, grade:{stamina:2, skill:"A", official:false}}
  ],
  seasonality:{
    best:[1,3,4,5,11,12],
    notes:{1:"空気が澄み山頂から江の島・相模湾・富士山の眺望が最高。初詣客で参道が賑わう。",3:"梅から桜へ移る早春。日陰の登山道は霜解けの泥濘に注意。",4:"桜と新緑が参道を彩る快適な季節。花冷え対策に一枚多めの防寒を。",5:"新緑のベストシーズン。沢沿いのコースではヤマビル対策を。",7:"蒸し暑く展望も霞みがち。早朝出発がおすすめ。",9:"残暑が落ち着き始めるが台風・秋雨に注意。空いた平日が狙い目。",11:"大山寺・下社の紅葉ライトアップで一年最大の混雑期。ケーブルは増発されるが待ち時間覚悟で。",12:"冬晴れの展望期。山頂北面は霜や凍結が出るため軽アイゼンがあると安心。"}
  }
},
{
  id:"tsukuba", name_ja:"筑波山", name_en:"Mt. Tsukuba", region:"筑波山地", area:"関東周辺", prefecture:"茨城県",
  elevation:877, hyakumeizan:true,
  coords:{lat:36.2253, lon:140.1061}, forecast_elevation:870,
  grading:{
    ridgeline:870,
    wind_caution:12, wind_danger:18,
    precip_caution:3, precip_danger:10,
    snow_months:[1,2],
    snow_note:"積雪はまれだが、冬の岩場は凍結に注意。"
  },
  trailheads:[{
    name:"筑波山神社入口バス停（標高250m）",
    access:[
      {mode:"バス", line:"筑波山シャトルバス（関東鉄道）つくばセンター〜筑波山神社入口〜つつじヶ丘", from:"つくばエクスプレス つくば駅（つくばセンター）",
       duration:"約40分",
       weekday:"つくばセンター発 例: 8:00 / 8:50 / 9:40", weekend:"つくばセンター発 例: 7:30 / 7:55 / 8:25 / 8:55（7:30便は冬期運休）",
       season:"通年", url:"https://kantetsu.co.jp/bus/", sample:true},
      {mode:"ケーブルカー", line:"筑波山ケーブルカー（筑波観光鉄道）宮脇駅〜筑波山頂駅", from:"宮脇駅（筑波山神社から徒歩約10分）",
       duration:"約8分",
       weekday:"9:00〜17:00 20分間隔（12〜2月は9:20〜16:40）", weekend:"同左（混雑時増発。元旦は早朝運転、夜間運行期間は終発20:00）",
       season:"通年（冬季に定期検査運休あり）", url:"https://mt-tsukuba.com/cablecar-timetable", sample:true}
    ]
  },{
    name:"つつじヶ丘バス停（標高542m）",
    access:[
      {mode:"バス", line:"筑波山シャトルバス（関東鉄道）つくばセンター〜つつじヶ丘", from:"つくばエクスプレス つくば駅（つくばセンター）",
       duration:"約60分",
       weekday:"つくばセンター発 例: 8:00 / 8:50 / 9:40", weekend:"つくばセンター発 例: 7:30 / 7:55 / 8:25",
       season:"通年", url:"https://kantetsu.co.jp/bus/", sample:true},
      {mode:"ロープウェイ", line:"筑波山ロープウェイ（筑波観光鉄道）つつじヶ丘駅〜女体山駅", from:"つつじヶ丘駅（バス停すぐ）",
       duration:"約6分",
       weekday:"9:20〜17:00 20分間隔（12〜2月は9:20〜16:40）", weekend:"同左（混雑時増発。夜間運行期間は終発20:00）",
       season:"通年（冬季に定期検査運休あり）", url:"https://mt-tsukuba.com/ropeway-timetable"}
    ]
  }],
  huts:[],
  routes:[
    {name:"御幸ヶ原コース（筑波山神社→男体山）", stats:"距離 約2.0km / 標高差 約610m / 登り1:30・下り1:15", level:"初〜中級", note:"ケーブルカー沿いに樹林帯を直登する王道コース。階段が多く見た目以上に汗をかく。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"筑波山神社", to:"御幸ヶ原", up:"1:20", down:"1:00"},
       {from:"御幸ヶ原", to:"男体山山頂", up:"0:15", down:"0:15"}
     ], sample:true},
    {name:"白雲橋コース（筑波山神社→女体山）", stats:"距離 約2.8km / 標高差 約610m / 登り1:50・下り1:30", level:"初〜中級", note:"弁慶七戻り・母の胎内くぐりなど奇岩・巨石群を巡る筑波山随一の人気コース。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"おたつ石コース（つつじヶ丘→女体山）", stats:"距離 約1.8km / 標高差 約340m / 登り1:10・下り0:50", level:"初級", note:"つつじヶ丘から最短で女体山へ。家族連れ向きだが山頂直下は岩場なので慎重に。",
     popularity:2, trailhead:1, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[1,2,3,4,11,12],
    notes:{1:"冬晴れの日は関東平野と富士山・スカイツリーまで見渡せる。元旦はケーブルカーが早朝運転。",2:"山麓の筑波山梅林で梅まつり（2月中旬〜3月）。登山と観梅の組み合わせに最適。",3:"梅まつりが中旬まで続き、下旬にはカタクリが咲き始める。春霞の日が増える。",4:"カタクリの花とヤマザクラ、続いてツツジが山を彩る華やかな季節。",7:"標高が低く蒸し暑い。早朝スタートかケーブルカー・ロープウェイ併用で暑さを回避。",11:"紅葉の最盛期でロープウェイ夜間運行も実施。土日は山頂とバスの混雑必至。",12:"澄んだ空気で展望が良く人も減る静かな季節。岩場の凍結には注意。"}
  }
},
{
  id:"rishiri", name_ja:"利尻山（利尻岳）", name_en:"Mt. Rishiri (Rishiri-dake)", region:"利尻島", area:"北海道", prefecture:"北海道",
  elevation:1721, hyakumeizan:true,
  coords:{lat:45.1804, lon:141.2414}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:7, wind_danger:12,
    precip_caution:3, precip_danger:10,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"海に浮かぶ独立峰で森林限界は標高800m前後と本州の同標高の山よりずっと低く、稜線上に風を遮るものがない。日本海側の低気圧・台風の影響も直接受けやすく、9月の初雪も珍しくないため風のしきい値は低め・積雪注意期間は長めに設定。"
  },
  trailheads:[{
    name:"北麓野営場登山口（鴛泊コース・標高210m）",
    access:[
      {mode:"フェリー", line:"稚内〜鴛泊航路（ハートランドフェリー）", from:"稚内港",
       duration:"約1時間40分",
       weekday:"稚内発 例: 7:15 / 11:15 / 16:40（夏期6/1〜9/30ダイヤ）", weekend:"同左（土日祝もダイヤ変更なし）",
       season:"通年運航（夏期6/1〜9/30は1日3往復、他期は減便。2026年通年時刻表）。荒天時は欠航・臨時増便あり", url:"https://heartlandferry.jp/timetable/", sample:true},
      {mode:"バス", line:"利尻島内路線バス Bコース 鴛泊→沓形経由（宗谷バス㈱利尻営業所）", from:"鴛泊フェリーターミナル",
       duration:"温泉停留所まで約5分（登山口へは温泉停留所から徒歩約40分・2.2km）",
       weekday:"鴛泊ＦＴ発 例: 7:35 / 9:40 / 13:00（夏期ダイヤ）", weekend:"同左（土日祝もダイヤ変更なし）",
       season:"夏期ダイヤ6/1〜9/30・冬期ダイヤ10/1〜5/31（2026年4/28改正）。登山口までの直行便はなし", url:"http://www.soyabus.co.jp/routebus/rishiri", sample:true},
      {mode:"タクシー", line:"富士ハイヤー（鴛泊）", from:"鴛泊フェリーターミナル・鴛泊市街地",
       duration:"約10分",
       weekday:"随時（要事前予約・早朝営業なし）", weekend:"同左", season:"通年", url:"https://fuji-hire.jp/", sample:true},
      {mode:"タクシー", line:"りしりハイヤー", from:"鴛泊フェリーターミナル・鴛泊市街地",
       duration:"約10分",
       weekday:"随時（要事前予約・早朝営業なし）", weekend:"同左", season:"通年", url:"https://rishirihire.com/", sample:true}
    ]
  },{
    name:"見返台園地登山口（沓形コース・標高約450m）",
    access:[
      {mode:"タクシー", line:"りしりハイヤー", from:"沓形市街地・沓形フェリーターミナル",
       duration:"約15分",
       weekday:"随時（要事前予約・早朝営業なし）", weekend:"同左",
       season:"通年（現在、登山道は三眺山より上が通行止め）", url:"https://rishirihire.com/", sample:true}
    ]
  }],
  huts:[
    {name:"利尻岳避難小屋（無人・長官山のすぐ先／9合目下）", elevation:1220, open:"通年開放（積雪期は埋没する場合あり）", reservation:"予約不要。緊急時以外の宿泊利用は禁止", url:"", tel:""},
    {name:"利尻北麓野営場", elevation:210, open:"5月15日〜10月15日", reservation:"ケビン・オートサイトは管理棟へ電話予約（テントサイトは予約不要）", url:"https://www.town.rishirifuji.hokkaido.jp/rishirifuji/1133.htm", tel:"0163-82-2394"}
  ],
  routes:[
    {name:"鴛泊コース 往復", stats:"標高差 約1,490m / 登り6:00・下り4:00（長官山の休憩含む。山頂1時間休憩を足すと総行動目安11時間）", level:"中級", note:"日本百名山最北、海抜0mから登る独立峰。携帯トイレ必携（トイレ本体はなく6.5合目・8合目避難小屋・9合目にブースのみ設置）。9合目上部は沓形コース合流点手前の崩落地で道幅が狭く、すれ違いは互いに安全な場所で待機を。沓形コースへの縦走・下山は現在不可（下記参照）。利尻島は近年ヒグマの生息が確認されておらず(2018年に足跡確認後、2019年6月に町が終息宣言)道内他地域と事情が異なるが、最新情報は要確認。登山計画書の提出必須（駐在所・宿泊施設等で配布）。",
     popularity:3, trailhead:0, grade:{stamina:8, skill:"C", official:false},
     segments:[
       {from:"北麓野営場登山口", to:"5合目", up:"1:20"},
       {from:"5合目", to:"6合目（第一見晴台）", up:"0:35"},
       {from:"6合目", to:"7合目（七曲り）", up:"0:35"},
       {from:"7合目", to:"8合目（長官山）", up:"1:05"},
       {from:"8合目（長官山）", to:"避難小屋", up:"0:10"},
       {from:"避難小屋", to:"9合目", up:"0:35"},
       {from:"9合目", to:"利尻山山頂", up:"1:10"}
     ], sample:true},
    {name:"沓形コース（見返台→三眺山 往復・三眺山より上は通行止め）", stats:"見返台園地登山口(標高約450m)から三眺山(標高1,461m)往復 / 登り約3:00・下り約2:00", level:"上級", note:"2025年6月の登山道崩落により、三眺山（標高1,461m）から鴛泊コースとの合流点までが通行止め。三眺山周辺は地質が脆く落石の危険があるため、これより上へは立ち入り禁止。鴛泊コースから沓形コースへ下ることもできない。最新の規制状況は環境省北海道地方環境事務所・利尻富士町公式サイトで必ず確認すること。",
     popularity:1, trailhead:1, grade:{stamina:6, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8],
    notes:{
      5:"野営場開設は5/15から。残雪が多く、無雪期の一般的な日帰り装備での登山は6月以降が目安。",
      6:"上旬は残雪と融雪による登山道への環境負荷が大きく、環境省も利用を控えるよう呼びかけ。下旬から利尻固有種リシリヒナゲシなど高山植物が咲き始め、登山者・ツアーが急増し混雑。",
      7:"下旬から花の見頃が続く最盛期。海の日連休は年間で最も混雑しやすい時期。",
      8:"花期はなお見頃。連休を避ければ比較的落ち着いて登れる。携帯トイレ必携。",
      9:"上旬は黄葉が見頃で登山者は減り狙い目。下旬は初冠雪の便りが届くこともあり一般向きではなくなる。",
      10:"野営場は10/15で閉鎖。中旬以降は積雪・凍結が本格化し一般登山シーズンは終了。"
    }
  }
},
{
  id:"rausu", name_ja:"羅臼岳", name_en:"Mt. Rausu", region:"知床", area:"北海道", prefecture:"北海道",
  elevation:1661, hyakumeizan:true,
  coords:{lat:44.0758, lon:145.1222}, forecast_elevation:1400,
  grading:{
    ridgeline:1400,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:10,
    snow_months:[9,10,11,12,1,2,3,4,5,6,7],
    snow_note:"知床は本州の同標高の山より森林限界が低く、大沢・屏風岩の雪渓は例年8月上旬まで残る。9月上旬でも寒気の入り込みで初雪となる年があり、稜線の残雪・凍結チェック対象月を長めに設定。"
  },
  trailheads:[
    {
      name:"岩尾別温泉登山口（標高約240m）",
      access:[
        {mode:"バス", line:"知床線（斜里バス）", from:"JR知床斜里駅・斜里バスターミナル",
         duration:"約50分（ウトロ温泉バスターミナルまで）",
         weekday:"斜里バスターミナル発 例: 8:10 / 11:30 / 16:20 / 17:40（ウトロ温泉バスターミナル着 9:00 / 12:20 / 17:10 / 18:30）", weekend:"平日と同一ダイヤ",
         season:"2026年は4/28〜10/31運行（冬期は知床エアポートライナー等を利用）", url:"https://www.sharibus.co.jp/rbus.html", sample:true},
        {mode:"バス", line:"知床線（斜里バス、ウトロ〜知床五湖）", from:"ウトロ温泉バスターミナル",
         duration:"約16分（岩尾別バス停まで）",
         weekday:"ウトロ温泉バスターミナル発 例: 9:10 / 10:15 / 12:30 / 13:35 / 15:10 / 16:05（岩尾別着 9:26 / 10:31 / 12:46 / 13:51 / 15:26 / 16:21）", weekend:"平日と同一ダイヤ",
         season:"2026年は4/28〜10/31運行", url:"https://www.sharibus.co.jp/rbus.html", sample:true},
        {mode:"空港連絡バス", line:"知床エアポートライナー（斜里バス・網走バス共同運行）", from:"女満別空港",
         duration:"約2時間10分（ウトロ温泉バスターミナルまで、以降は知床線に乗継）",
         weekday:"女満別空港発 例: 9:45 / 13:50（ウトロ温泉バスターミナル着 11:56 / 15:59）", weekend:"平日と同一ダイヤ",
         season:"2026年は6/1〜9/30運行（予約不要。事前WEB購入で当日らくらく。冬期は1/17〜3/8に別ダイヤで運行）", url:"https://www.sharibus.co.jp/rbus_memanbetu.html", sample:true}
      ]
    },
    {
      name:"羅臼温泉登山口（熊の湯・標高約130m）",
      access:[
        {mode:"バス", line:"羅臼線（斜里バス）", from:"ウトロ温泉バスターミナル",
         duration:"約40〜45分",
         weekday:"ウトロ温泉バスターミナル発 例: 9:20 / 10:20 / 12:25 / 15:10（羅臼温泉着 10:02 / 11:02 / 13:07 / 15:52）", weekend:"平日と同一ダイヤ",
         season:"2026年は7/1〜8/31運行のみ（事前WEB購入不可。運賃は現金またはPayPay）", url:"https://www.sharibus.co.jp/rbus.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"木下小屋", elevation:240, open:"6月中旬〜9月下旬（開設前後は要問合せ）", reservation:"電話予約のみ（素泊まり1泊3,100円・寝具/自炊道具は持参）", url:"https://kinoshitagoya.wordpress.com/", tel:"0152-24-2824"},
    {name:"ホテル地の涯", elevation:240, open:"2026年は全面改装工事のため休館中（リニューアルオープンは2027年4月末予定）", reservation:"休館中（再開時期は公式サイトで告知予定）", url:"https://iwaobetu.com/", tel:"0152-24-2331"},
    {name:"羅臼平野営指定地（避難小屋なし・テント泊のみ）", elevation:1400, open:"無雪期は利用可（フードロッカー設置）", reservation:"予約不要。指定地以外での幕営は禁止", url:"https://policies.env.go.jp/park/shiretoko/rausu-vc/mount/mt-rausu-goto/", tel:""}
  ],
  routes:[
    {name:"岩尾別コース 往復", stats:"距離 約6.9km（片道）/ 標高差 約1,420m / 登り5:00・下り4:00", level:"中級",
     note:"羅臼岳登山の定番ルート。オホーツク展望・弥三吉水・銀冷水・大沢を経て羅臼平へ。ヒグマの生息密度が高く、鈴・声出し・クマスプレー携行必須（知床羅臼ビジターセンターでレンタルあり）。大沢・屏風岩の雪渓は例年8月上旬まで残り、12本爪アイゼン携行を推奨。携帯トイレ必携（銀冷水に専用ブースあり）。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"C", official:false}},
    {name:"羅臼温泉コース（熊の湯）往復", stats:"距離 約7.5km（片道）/ 標高差 約1,530m / 登り6:30・下り4:30", level:"上級",
     note:"岩尾別コースより長く急で上級者向け。屏風岩の長大な雪渓はガスがかかるとルートロストの危険が大きい。下山時の道迷いが多発しており地図・コンパスでの現在地確認が必須。日帰り往復より岩尾別側への縦走・下山として計画されることが多い。",
     popularity:2, trailhead:1, grade:{stamina:9, skill:"D", official:false}},
    {name:"知床連山縦走（羅臼平から先・三ッ峰／二ツ池方面）", stats:"羅臼平より北は複数泊装備が前提の上級者向け稜線縦走路（知床岬方面まで続く）",
     level:"上級",
     note:"指定野営地（三ッ峰・二ツ池など）以外での幕営は禁止。フードロッカーでの食料管理必須、テント内への食料持込は禁止。核心部（ルサ以北・知床岬方面／先端部地区）の利用には知床世界遺産ルサフィールドハウスでの事前レクチャーが必要。最新のコース状況も同ルサフィールドハウス／知床羅臼ビジターセンターへ事前確認を。羅臼岳は知床硫黄山などとともに知床火山群の活火山でもあり、噴火に関する情報は気象庁「噴火警報・噴火速報」で確認するとよい。",
     popularity:1, trailhead:null, grade:{stamina:10, skill:"D", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期。木下小屋・ホテル地の涯とも冬期閉鎖中で、登山口周辺の設備は限定的。",
      6:"木下小屋は例年6月中旬に営業開始。大沢・屏風岩に多量の残雪が残り、12本爪アイゼン・ピッケルがほぼ必須。ヒグマの活動が活発化する時期。",
      7:"お花畑が見頃を迎える（下旬ごろ）。雪渓は上旬まで残ることが多い。ヒグマ対策を最も厳重に。",
      8:"盛夏で比較的登りやすいが、台風・低気圧の接近に注意。年によっては雪渓が残ることも。",
      9:"上旬から羅臼平・羅臼湖周辺で紅葉が始まり、下旬が見頃。木下小屋は下旬で営業終了。初雪の便りが届くこともある。",
      10:"初雪・積雪が本格化し、根雪になる年もある。無雪期登山は上旬まで。"
    }
  }
},
{
  id:"shari", name_ja:"斜里岳", name_en:"Mt. Shari", region:"斜里岳道立自然公園", area:"北海道", prefecture:"北海道",
  elevation:1547, hyakumeizan:true,
  coords:{lat:43.7656, lon:144.7177}, forecast_elevation:1500,
  grading:{
    ridgeline:1400,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"オホーツク海に近い独立峰で森林限界が低く、馬の背（1,430m）から上は一気に高山帯・稜線の風の通り道になる。天候急変も速く、本州の同標高の山と同等以上に稜線の風の影響を受けやすい点に注意。山小屋・ゲートの営業も6月中旬〜10月末に限られ、真夏（7〜8月）以外は残雪・凍結・降雪の可能性を常に考慮。"
  },
  trailheads:[{
    name:"清岳荘登山口（標高680m）",
    access:[
      {mode:"バス（夜行高速）", line:"イーグルライナー（北海道中央バス、予約制）", from:"札幌ターミナル",
       duration:"約6時間10分（清里町新栄まで）。清里町新栄下車後は清岳荘まで別途タクシー利用",
       weekday:"札幌発 例: 23:15（清里町新栄 5:25着／斜里バスターミナル 5:45着）", weekend:"同左（毎日運行・要事前予約、乗車日の2ヶ月前から受付）",
       season:"通年運行（2026年7月1日改定の夏ダイヤで確認）", url:"https://www.chuo-bus.co.jp/highway/index.cgi?ope=det&n=6&o=1&t=73", sample:true},
      {mode:"鉄道", line:"JR釧網本線", from:"網走方面／釧路方面",
       duration:"清里町駅まで（区間により所要時間が異なる）",
       weekday:"清里町駅に停車する列車は1日数往復のみ（しれとこ摩周号ほか）。本数が少ないため公式時刻表で要確認", weekend:"同左（毎日運転・臨時列車は別途）",
       season:"通年（本数が少ないため事前に時刻確認を）", url:"https://www.jrhokkaido.co.jp/", sample:true},
      {mode:"タクシー", line:"清里ハイヤー（0152-25-2538）", from:"JR釧網本線 清里町駅",
       duration:"約20分",
       weekday:"予約制・随時運行（例: 清里町駅⇔清岳荘 片道約5,000円）", weekend:"同左",
       season:"通年（登山道ゲート開通期間は2026年6/12(金)9:00〜10/30(金)10:00）", url:"https://www.kiyosatokankou.com/sharidake/", sample:true},
      {mode:"車", line:"自家用車・レンタカー", from:"清里町市街",
       duration:"約20〜25分（道道江南清里停車場線から林道経由、約15km）",
       weekday:"—", weekend:"—",
       season:"登山道ゲート開通期間のみ通行可（2026年は6/12(金)9:00〜10/30(金)10:00）", url:"https://www.town.kiyosato.hokkaido.jp/tourism/?content=1061", sample:true}
    ]
  }],
  huts:[
    {name:"清岳荘", elevation:680, open:"2026年6月12日(金)9:00〜10月30日(金)10:00・素泊まり専用", reservation:"きよさと観光協会へ電話予約。宿泊定員50名、寝具レンタルあり、要協力金・北海道宿泊税", url:"https://www.town.kiyosato.hokkaido.jp/tourism/?content=1053", tel:"0152-25-4111"}
  ],
  routes:[
    {name:"清岳荘起点 旧道（沢コース）→新道（尾根コース） 周回", stats:"標高差 約867m（清岳荘680m→山頂1,547m） / 登り4:00・下り3:30", level:"中級", note:"一の沢を詰める旧道は羽衣の滝・見晴しの滝・霊華の滝・竜神の滝など連続する滝を越える渡渉・沢登り的なルート。上二股から先は旧道を下るのは危険なため新道（尾根コース）で下山するのが鉄則。上二股に携帯トイレブースあり（携帯トイレ必須）。防水ハイカット登山靴＋スパッツ推奨。ヒグマ出没地域のため鈴・笛を携帯。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:false}},
    {name:"清岳荘起点 新道（尾根コース） 往復", stats:"標高差 約867m / 往復6:00〜9:00（沢コースより渡渉・滑落リスクは低いが距離は長め）", level:"中級", note:"沢登りや岩登りに不安がある人向けの往復ルート。上二股〜馬の背は「胸突き八丁」と呼ばれる急登。熊見峠から上は好展望の稜線歩き。下りの新道は距離が長く登りと同程度の時間がかかる点に注意。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"登山道ゲート未開通（開通は6/12）。残雪期で一般登山には不向き。",6:"下旬に山開き・安全祈願祭（2026年は6/28日曜6:30〜、清岳荘にて）。適期の始まりだが下旬でも上部に雪渓が残ることがあり滑落注意。",7:"沢の水量が安定し盛夏の沢登りを楽しめる時期。ヒグマ活動期のため鈴・笛必携。",8:"高山植物と沢登りのベストシーズン。馬の背より上で高山植物が特に多い。",9:"中旬から紅葉が始まる。台風接近時は沢の増水に厳重注意、渡渉不可なら即撤退を。",10:"下旬は初雪・凍結が増える。ゲートは10/30(金)10:00で閉鎖、以降車両進入不可。",11:"ゲート閉鎖後で車両通行不可、積雪により一般登山シーズンは終了。"}
  }
},
{
  id:"meakan", name_ja:"阿寒岳（雌阿寒岳）", name_en:"Mt. Meakan (Meakandake)", region:"阿寒", area:"北海道", prefecture:"北海道",
  elevation:1499, hyakumeizan:true,
  coords:{lat:43.3864, lon:144.0086}, forecast_elevation:1450,
  grading:{
    ridgeline:1400,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"北海道の火山らしく森林限界が標高1,000m付近と低く、9月上旬の初雪から6月頃まで山頂部に残雪・凍結の可能性がある。夏でも山頂は氷点近くまで冷え込む日があり、防寒装備は通年必携（足寄町公式案内より）。"
  },
  trailheads:[{
    name:"雌阿寒温泉登山口（野中温泉前・標高707m）",
    access:[
      {mode:"バス", line:"阿寒線（阿寒バス）", from:"JR釧路駅前（たんちょう釧路空港からも同路線に乗車可）",
       duration:"約2時間（釧路駅前〜阿寒湖バスセンター）",
       weekday:"釧路駅前発 例: 10:10 / 12:00（7/1〜10/31運行の105便） / 14:50 / 17:15（阿寒湖バスセンター着はそれぞれ約2時間後）", weekend:"平日と同ダイヤ（土日祝の区別なし）",
       season:"10:10・14:50・17:15発は通年運行、12:00発（105便）は7月1日〜10月31日のみ運行（2025年4月1日改正ダイヤ・次回改正は要確認）", url:"https://www.akanbus.co.jp/route/", sample:true},
      {mode:"タクシー", line:"阿寒ハイヤー（要予約）", from:"阿寒湖バスセンター／阿寒湖畔エコミュージアムセンター",
       duration:"約40分（環境省公式アクセス案内より）",
       weekday:"随時（要予約）", weekend:"同左",
       season:"通年", url:"https://www.akanhire.co.jp/", sample:true}
    ]
  },{
    name:"オンネトー登山口（オンネトー国設野営場・標高642m）",
    access:[
      {mode:"バス", line:"阿寒線（阿寒バス）", from:"JR釧路駅前（たんちょう釧路空港からも同路線に乗車可）",
       duration:"約2時間（釧路駅前〜阿寒湖バスセンター）",
       weekday:"釧路駅前発 例: 10:10 / 12:00（7/1〜10/31運行の105便） / 14:50 / 17:15（阿寒湖バスセンター着はそれぞれ約2時間後）", weekend:"平日と同ダイヤ（土日祝の区別なし）",
       season:"10:10・14:50・17:15発は通年運行、12:00発（105便）は7月1日〜10月31日のみ運行（2025年4月1日改正ダイヤ・次回改正は要確認）", url:"https://www.akanbus.co.jp/route/", sample:true},
      {mode:"タクシー", line:"阿寒ハイヤー（要予約）", from:"阿寒湖バスセンター／阿寒湖畔エコミュージアムセンター",
       duration:"約45分（環境省公式アクセス案内より）",
       weekday:"随時（要予約）", weekend:"同左",
       season:"通年", url:"https://www.akanhire.co.jp/", sample:true}
    ]
  }],
  huts:[
    {name:"山の宿 野中温泉", elevation:707, open:"2025年1月23日の火災で本館ほぼ全焼、再建中（2026年3月28日に地鎮祭を実施・営業再開時期は未定）", reservation:"—（再開前のため宿泊・日帰り入浴とも受付なし。最新状況は電話で要確認）", url:"", tel:"0156-29-7321"},
    {name:"オンネトー国設野営場", elevation:630, open:"6月1日〜10月31日（融雪状況により変動）", reservation:"個人・少人数はフリーサイトのため予約不可（団体のみ要予約）。営業期間外(11〜5月)の問い合わせは足寄町役場 0156-28-3863。", url:"https://www.town.ashoro.hokkaido.jp/kanko/spot/spot-7.html", tel:"0156-28-0115"}
  ],
  routes:[
    {name:"雌阿寒温泉コース 往復", stats:"距離 往復約6.6km / 標高差 792m / 登り2:30・下り1:40", level:"初〜中級", note:"最短距離で山頂に立てる最も利用者が多いコース。アカエゾマツの純林から森林限界を抜けると火山礫の急登になる。活火山のため入山前に気象庁 雌阿寒岳の噴火警戒レベルを必ず確認: https://www.data.jma.go.jp/vois/data/sapporo/105_Meakan/105_index.html（2026年7月時点でレベル2・火口周辺規制中）。悪天候時は無理をしない（足寄町公式案内より）。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:false},
     segments:[
       {from:"雌阿寒温泉登山口", to:"雌阿寒岳山頂（ポンマチネシリ）", up:"2:30", down:"1:40"}
     ], sample:true},
    {name:"雌阿寒温泉コース→オンネトーコース 周回（野中温泉起点）", stats:"距離 約9.9km / 標高差 792m / 登り2:30・下り3:15", level:"中級", note:"雌阿寒温泉から登り、オンネトーコースを下ってオンネトー国設野営場から道道949号を歩いて野中温泉へ戻る環境省公式の周回コース。ポンマチネシリ火口とオンネトーの湖面を一度に楽しめる。噴火警戒レベルは気象庁公式ページで要確認: https://www.data.jma.go.jp/vois/data/sapporo/105_Meakan/105_index.html",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false},
     segments:[
       {from:"雌阿寒温泉登山口（野中温泉）", to:"雌阿寒岳山頂（ポンマチネシリ）", up:"2:30"},
       {from:"雌阿寒岳山頂", to:"オンネトー登山口", down:"2:00"},
       {from:"オンネトー登山口", to:"野中温泉", down:"1:15"}
     ], sample:true},
    {name:"オンネトーコース 往復", stats:"距離 往復約8.8km / 標高差 857m / 登り2:50・下り2:00", level:"初〜中級", note:"雌阿寒温泉コースよりやや距離が長いが勾配は緩やか。針葉樹林とハイマツ帯のお花畑を楽しめる。8合目の分岐から阿寒富士山頂へ寄り道可能（分岐から往復約1時間10分）。噴火警戒レベルは気象庁公式ページで要確認: https://www.data.jma.go.jp/vois/data/sapporo/105_Meakan/105_index.html",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:false},
     segments:[
       {from:"オンネトー登山口", to:"5合目", up:"1:15", down:"0:50"},
       {from:"5合目", to:"8合目（阿寒富士分岐点）", up:"0:50", down:"0:35"},
       {from:"8合目（阿寒富士分岐点）", to:"雌阿寒岳山頂（ポンマチネシリ）", up:"0:45", down:"0:35"}
     ], sample:true}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"登山道にまだ残雪や雪解けの泥濘が残る時期。オンネトー国設野営場は6月1日開設のためこの時期は前泊拠点が限られる。ヒグマの活動期に入るため鈴・撃退スプレーを携行。",
      6:"オンネトー国設野営場が開設。コマクサ・メアカンキンバイなど北海道固有の高山植物が咲き始める（開花期6〜7月）。",
      7:"花の最盛期。足寄町公式案内によれば夏でも山頂付近が氷点近くまで冷え込む日があり、防寒着は必携。",
      8:"登山者が最も多い時期。ヒグマ出没情報が増える年もあるため単独行動を避け鈴を携行。午後からの入山は避け早朝出発を。",
      9:"紅葉が始まり初雪の便りも届く。2025年9月には火山性地震の増加で噴火警戒レベルが2（火口周辺規制）へ引き上げられた実績があり、入山前に気象庁の噴火警戒レベルを要確認。",
      10:"紅葉と初冠雪が交錯する時期。オンネトー国設野営場は10月31日で閉場。"
    }
  }
},
{
  id:"asahidake", name_ja:"旭岳", name_en:"Mt. Asahidake", region:"大雪山系", area:"北海道", prefecture:"北海道",
  elevation:2291, hyakumeizan:true,
  coords:{lat:43.6636, lon:142.8541}, forecast_elevation:1600,
  grading:{
    ridgeline:1600,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"大雪山旭岳ロープウェイは国内で唯一、全区間が森林限界の上（姿見駅1,600m）を走る。つまり登山口の時点で既に高山帯で、本州の同標高より風を遮るものがなく天候急変も速いため風のしきい値は控えめに設定。日本一早い紅葉・初雪でも知られ9月下旬に初冠雪する年があり、残雪は雪渓によって6月頃まで登山道に残ることがある。"
  },
  trailheads:[{
    name:"旭岳ロープウェイ山麓駅（旭岳温泉・標高約1,100m）",
    access:[
      {mode:"バス", line:"66番 旭川空港経由旭岳線「いで湯号」（旭川電気軌道）", from:"JR旭川駅（旭川駅前バスターミナル のりば9）",
       duration:"約1時間48分",
       weekday:"旭川駅発 例: 7:15 / 9:15 / 12:15 / 14:15", weekend:"平日と同一ダイヤ（2025年10月改正で1日4往復）",
       season:"通年運行", url:"https://www.asahikawa-denkikidou.jp/asahidaek_line/", sample:true},
      {mode:"ロープウェイ", line:"大雪山旭岳ロープウェイ（山麓駅⇔姿見駅）", from:"山麓駅",
       duration:"約10分",
       weekday:"山麓駅発 例: 6:30〜17:15（上り最終）、6:30〜8:00は20分間隔・8:00以降15分間隔", weekend:"7/11以降の土日祝は6:00始発（詳細は公式サイトの月別スケジュール表を要確認）",
       season:"通年運行（季節により運行時間が変動、冬期は短縮）", url:"https://asahidake.hokkaido.jp/ja/", sample:true}
    ]
  }],
  huts:[
    {name:"旭岳石室（避難小屋・無人）", elevation:1665, open:"通年開放（緊急時以外の宿泊不可。寝具・トイレ・水場なし、収容20人）", reservation:"—", url:"https://www.daisetsuzan.or.jp/info/hiking/shelter/", tel:""},
    {name:"白雲岳避難小屋", elevation:1990, open:"管理人常駐は6月下旬〜9月下旬（無雪期は無人開放）", reservation:"予約不可。混雑緩和のため公式サイトで宿泊予定日・人数を事前連絡", url:"https://www.hakuundake.jp/", tel:"01658-2-4058"},
    {name:"黒岳石室", elevation:1894, open:"管理人常駐は6月下旬〜9月下旬（年により変動、上川町発表）", reservation:"予約不要（先着順）。問い合わせは上川町 産業経済課", url:"https://www.town.hokkaido-kamikawa.lg.jp/section/sangyoukeizai/i8u8uo0000000fzk.html", tel:"01658-2-4058"}
  ],
  routes:[
    {name:"姿見駅～旭岳山頂 往復", stats:"標高差 約690m（姿見駅1,600m→山頂2,291m）/ 登り2:50・下り2:05", level:"中級",
     note:"北海道最高峰への最も一般的なコース。姿見駅を出てすぐの地獄谷は今も噴気が上がる大雪山の火口跡で、大雪山は気象庁の常時観測火山（入山前に火山活動状況を要確認: https://www.data.jma.go.jp/vois/data/sapporo/107_Taisetusan/107_index.html）。砂礫と岩の道で風を遮るものがなく、濃霧時は山頂付近から南斜面（裏旭側）に迷い込みやすいのでコンパス・GPS必携（大雪山国立公園連絡協議会の公式案内より）。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"姿見駅", to:"旭岳山頂", up:"2:50", down:"2:05"}
     ], sample:true},
    {name:"姿見園地 散策コース（周遊）", stats:"距離 約1.7km（周回）/ 所要 約1:00", level:"初級",
     note:"姿見駅から徒歩すぐ、木道中心の周遊路。高山植物と旭岳の噴気（地獄谷）を間近に見られ、登山装備がなくても歩ける区間が中心。運行期間は6月〜10月中旬（大雪山旭岳ロープウェイ公式案内より）。天候急変に備え雨具・防寒着は携帯を。姿見園地でもヒグマの目撃情報が出る年があり、旭岳ビジターセンターの最新情報を確認してから入山を。",
     popularity:3, trailhead:0, grade:{stamina:1, skill:"A", official:false}},
    {name:"裾合平 チングルマお花畑（姿見駅発着・往復）", stats:"標高差 約90m（姿見駅1,600m→裾合平1,690m）/ 登り3:00・下り2:40", level:"中級",
     note:"旭岳の北西山腹を巻いて国内屈指のチングルマ大群落・裾合平へ。見頃は例年7月中旬〜下旬、9月は紅葉の名所（大雪山国立公園連絡協議会 公式案内より）。残雪の多い年は雪渓上でルートを見失いやすく、マーキングを見落とさないよう注意（同協議会の登山道情報より）。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"姿見駅", to:"裾合平", up:"3:00", down:"2:40"}
     ], sample:true},
    {name:"大雪山大縦走（旭岳～間宮岳～北海岳～黒岳、層雲峡へ下山）", stats:"標高差 姿見駅1,600m→旭岳2,291m→黒岳1,984m（層雲峡側へ下山）/ 行動時間目安 7〜9時間（日帰りは健脚向け、小屋泊が安心）", level:"上級",
     note:"旭岳登頂後、間宮岳からお鉢平の外輪山を辿って黒岳へ抜け、層雲峡側に下山する大雪山の代表的な縦走路。白雲岳避難小屋・黒岳石室が中継の避難小屋（寝具・食料は各自持参、テント泊も可）。お鉢平は大雪山の巨大な爆裂火口で、大雪山は気象庁の常時観測火山（入山前に要確認: https://www.data.jma.go.jp/vois/data/sapporo/107_Taisetusan/107_index.html）。黒岳側の下山には黒岳ロープウェイ・リフト（層雲峡駅）が利用できる: https://www.rinyu.co.jp/kurodake/ 。稜線は終始遮るもののない強風地帯で、悪天候時は無理をせず黒岳石室等での停滞を検討する。",
     popularity:1, trailhead:0, grade:{stamina:8, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期。ロープウェイは通年運行だが登山道の大部分は雪に覆われ、アイゼン・ピッケルなど残雪期装備と経験が必須。",
      6:"中旬以降、夏道が徐々に現れる。裾合平や中岳分岐周辺は年により6月でも残雪が多く、雪渓上でのルートファインディングに注意。黒岳石室・白雲岳避難小屋の管理人常駐も下旬から始まる。",
      7:"本格的な夏山シーズン。姿見園地の高山植物、裾合平のチングルマは中旬〜下旬が見頃。姿見園地周辺でもヒグマの目撃情報が出る年があり、鈴の携行と旭岳ビジターセンターの最新情報確認を。",
      8:"夏山最盛期。お花畑の見頃が続き、大縦走・テント泊の計画にも良い時期。午後は雷雲の発達に注意。",
      9:"中旬から日本で最も早い紅葉が始まる（見頃は8月下旬〜9月下旬）。下旬には初冠雪する年もあり、防寒装備は早めに準備を。黒岳石室・白雲岳避難小屋の管理人常駐は下旬まで。",
      10:"紅葉は上旬まで、以降は一気に冬支度。降雪で登山道が閉ざされる年も多く、無雪期装備での入山は上旬までが目安。",
      11:"積雪期に入る。無雪期登山道は閉ざされ、ロープウェイは冬ダイヤに移行。"
    }
  }
},
{
  id:"tomuraushi", name_ja:"トムラウシ山", name_en:"Mt. Tomuraushi", region:"大雪山系", area:"北海道", prefecture:"北海道",
  elevation:2141, hyakumeizan:true,
  coords:{lat:43.5271, lon:142.8486}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:7, wind_danger:12,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"大雪山系南部は緯度が高く森林限界も低いため、標高2,000m級でも本州の3,000m級に匹敵する荒天になりやすい（新得町公式サイトより）。2009年7月には稜線で風速20m/s超・気温8〜10℃という暴風雨により8名が低体温症で死亡した遭難事故が発生しており、風・降水量のしきい値は本州の同標高の山より厳しめに設定。最奥の山で撤退・停滞の判断が遅れると即命に関わるため、風予報は特に重視。"
  },
  trailheads:[
    {
      name:"トムラウシ短縮登山口（標高約1,050m）",
      access:[
        {mode:"バス", line:"トムラウシ温泉線（北海道拓殖バス）※終点はトムラウシ温泉で、短縮登山口までは別途タクシー等で約8km", from:"JR根室本線 新得駅前",
         duration:"約1時間35分（トムラウシ温泉まで）",
         weekday:"新得駅前発 例: 7:45 / 14:15（トムラウシ温泉着 例: 9:20 / 15:50）", weekend:"夏山運行期間中は毎日同一ダイヤ・予約不要",
         season:"夏山期間限定運行（2026年度は7/18(土)〜20(月・祝)・7/25(土)〜8/16(日)）", url:"https://www.takubus.com/2026%E3%83%88%E3%83%A0%E3%83%A9%E3%82%A6%E3%82%B7%E6%B8%A9%E6%B3%89%E7%B7%9A", sample:true},
        {mode:"タクシー", line:"新得ハイヤー（新得駅・トムラウシ温泉→短縮登山口、要予約）", from:"JR新得駅 / トムラウシ温泉",
         duration:"トムラウシ温泉から約30分（約8km・ユートムラウシ林道）",
         weekday:"事前予約制（時刻指定なし）", weekend:"事前予約制（時刻指定なし）",
         season:"林道開通期間中のみ（豪雨による通行止め実績あり、林野庁北海道森林管理局が管理）", url:"https://city.hokkai.or.jp/~ishihata/", sample:true}
      ]
    },
    {
      name:"旭岳温泉・旭岳ロープウェイ山麓駅（標高約1,100m、表大雪縦走の起点）",
      access:[
        {mode:"バス", line:"66番 旭岳線「いで湯号」（旭川電気軌道）", from:"JR旭川駅前",
         duration:"約1時間34分",
         weekday:"旭川駅前発 例: 7:15 / 9:15 / 12:15 / 14:15（旭岳温泉着 例: 8:49 / 10:49 / 13:49 / 15:49）", weekend:"平日と同一ダイヤ（2025年10月改正ダイヤ）",
         season:"通年運行", url:"https://www.asahikawa-denkikidou.jp/asahidaek_line/", sample:true},
        {mode:"ロープウェイ", line:"大雪山旭岳ロープウェイ（山麓駅⇔姿見駅）", from:"山麓駅",
         duration:"約10分",
         weekday:"6/1〜10/20は15分間隔運行、10/21〜5/31は20分間隔運行", weekend:"同左",
         season:"通年運行（11月中旬〜12月上旬に整備運休あり）", url:"https://asahidake.hokkaido.jp/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"トムラウシ温泉 国民宿舎 東大雪荘", elevation:648, open:"通年営業（詳細は要問合せ）", reservation:"公式サイトWeb予約または電話（受付9:00〜18:00）", url:"https://www.tomuraushionsen.com/", tel:"0156-65-3021"},
    {name:"ヒサゴ沼避難小屋（無人・緊急時以外はテント泊が原則）", elevation:1690, open:"通年開放（管理人不在）", reservation:"予約不可・先着順。避難小屋の全面占拠は禁止", url:"https://www.tokachi.pref.hokkaido.lg.jp/hk/kks/sizen/yama/hisago/Shelter.html", tel:""}
  ],
  routes:[
    {name:"短縮コース 往復（前トム平・トムラウシ公園経由）", stats:"距離 往復約17km / 標高差 約1,090m / 登り5:05・下り3:30", level:"上級",
     note:"日帰りも可能だが行動時間が長く健脚向け。1泊する場合は山頂直下の南沼野営指定地（携帯トイレブースあり・山頂まで約20分）にテント泊するのが一般的。水場はコマドリ沢出合と前トム平手前の2箇所のみで要煮沸。携帯トイレ必携（登山口に回収ボックスあり）。ユートムラウシ林道は豪雨で通行止めになった実績があるため、入山前に新得町商工観光課（0156-64-0522）で道路状況を確認。",
     popularity:3, trailhead:0, grade:{stamina:8, skill:"C", official:false},
     segments:[
       {from:"トムラウシ短縮登山口", to:"トムラウシ山頂", up:"5:05", down:"3:30"}
     ], sample:true},
    {name:"表大雪縦走（旭岳→ヒサゴ沼→トムラウシ山→短縮登山口）", stats:"距離 約35km / 2〜3泊の縦走", level:"上級",
     note:"百名山狙いの登山者に人気の代表的な大雪山系縦走路。ヒサゴ沼避難小屋は予約不可・混雑時もあるためテント泊装備必須。2009年7月の大量遭難事故はこの区間（化雲岳〜トムラウシ間）で発生しており、荒天時は無理をせずヒサゴ沼避難小屋等での停滞・撤退判断を最優先に。",
     popularity:2, trailhead:1, grade:{stamina:10, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"残雪が多く、短縮登山口までの林道ゲート開通も遅れがち。ブヨなど虫も多い時期。",
      7:"お花畑の最盛期。2009年に大量遭難事故が発生した月でもあり、天候急変への警戒を最優先に。拓殖バスのトムラウシ温泉線もこの時期に運行開始（2026年は7/18〜）。",
      8:"年間で最も安定した晴天が期待できる時期。ただし荒天急変のリスクは本州の同標高より高いままなので油断は禁物。",
      9:"上旬までが登山適期の目安。中旬から大雪山系は全国で最も早い紅葉シーズンに入る。",
      10:"上旬に初雪の便りが届き、拓殖バスの季節運行も終了。以降は林道・アクセスが大きく制限される。"
    }
  }
},
{
  id:"tokachi", name_ja:"十勝岳", name_en:"Mt. Tokachi", region:"十勝岳連峰", area:"北海道", prefecture:"北海道",
  elevation:2077, hyakumeizan:true,
  coords:{lat:43.4178, lon:142.6863}, forecast_elevation:2000,
  grading:{
    ridgeline:2000,
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
},
{
  id:"poroshiri", name_ja:"幌尻岳", name_en:"Mt. Poroshiri", region:"日高山脈", area:"北海道", prefecture:"北海道",
  elevation:2052, hyakumeizan:true,
  coords:{lat:42.7194, lon:142.6828}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:7, wind_danger:12,
    precip_caution:2, precip_danger:7,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"日高山脈は本州より森林限界がかなり低く（目安1,500〜1,600m）、稜線が長く風雪に晒されるため体感の厳しさは標高以上。開山期間は7〜9月のみで、それ以外の月は稜線に残雪・新雪があるのが通常なので風・降水のしきい値は本州の同標高峰より低めに設定している。"
  },
  trailheads:[{
    name:"とよぬか山荘（標高223m）→ シャトルバスで額平川登山口・第2ゲートへ",
    access:[
      {mode:"シャトルバス", line:"糠平・幌尻線 幌尻岳登山シャトルバス（一般社団法人平取町山岳会 運行受託）", from:"とよぬか山荘前駐車場",
       duration:"約60分（21.6km、途中の第1ゲートでは乗降不可）",
       weekday:"とよぬか山荘発 4:00/8:00/10:40（第2ゲート着 5:00/9:00/11:40）、第2ゲート発 9:30/12:00/17:00（とよぬか山荘着 10:30/13:00/18:00）※平取町公式PDF「普通林道糠平・幌尻線内のシャトルバスの利用について」（令和7年3月17日改定）記載のダイヤ。悪天候・増水等により運休・変更の場合あり", weekend:"同上（曜日による違いなし）",
       season:"7月1日〜9月30日（往復利用の受付は9月29日まで）。予約は前年12月20日0:00インターネット受付開始、電話予約は当年4月1日〜。",
       url:"https://www.town.biratori.hokkaido.jp/material/files/group/1/shuttle_bus_no_riyo.pdf", sample:true},
      {mode:"バス", line:"道南バス（JR日高本線 鵡川駅 ⇔ 振内案内所）＋振内交通／平取ハイヤーのタクシー", from:"JR日高本線 鵡川駅",
       duration:"バスとタクシーの乗り継ぎ。振内案内所からとよぬか山荘までは公共交通機関がなくタクシー利用（振内交通 01457-3-3021／平取ハイヤー01457-2-3181）",
       weekday:"道南バスの通常時刻による（平取町公式案内には経路のみ記載で発着時刻の明示なし・要確認）", weekend:"同上",
       season:"通年（道南バス運行日）", url:"https://www.town.biratori.hokkaido.jp/soshikikarasagasu/kankoshokoka/kankoshokokakari/1/3/2/414.html", sample:true}
    ]
  }],
  huts:[
    {name:"幌尻山荘", elevation:950, open:"7月1日〜9月30日（9月29日宿泊分まで受付）・完全予約制、期間中は管理人常駐", reservation:"「幌尻岳施設予約システム」でインターネット予約（前年12月20日0:00開始）。電話予約は当年4月1日〜、一般社団法人平取町山岳会が受付（4〜6月は平日9:00〜12:00・13:00〜16:00、7〜9月は平日9:00〜12:00。7〜9月の休日は090-9661-4746で7:00〜19:00受付）。", url:"https://horoshiri-biratori.jp/", tel:"01457-3-3838"},
    {name:"とよぬか山荘（前泊・後泊のベース、シャトルバス発着地）", elevation:223, open:"6月30日〜9月30日", reservation:"「幌尻岳施設予約システム」または電話（現地受付6/30〜9/30 7:30〜12:00・15:00〜17:00、期間中無休）", url:"https://horoshiri-biratori.jp/", tel:"01457-3-3568"}
  ],
  routes:[
    {name:"額平川コース 幌尻山荘泊 往復（命の水経由）", stats:"距離 第2ゲートから片道約15.5km（往復約31km）/ 標高差 幌尻山荘(950m)〜山頂 約1,100m / 登り8:50・下り7:20", level:"上級", note:"額平川沿いに十数回の渡渉を繰り返す百名山屈指の難路。渓流靴（フェルト底）とヘルメットが必携で、シャトルバスは予約制・マイカーは第1ゲートで乗入規制。額平川は増水すると急激に水位が上がるため、無理に渡らず幌尻山荘で減水を待つのが鉄則（平取町公式案内より）。ヒグマ生息地のためゴミは完全持ち帰り。",
     popularity:3, trailhead:0, grade:{stamina:8, skill:"C", official:false},
     segments:[
       {from:"第2ゲート（シャトルバス終点）", to:"北海道電力取水施設", up:"2:30", down:"2:20"},
       {from:"北海道電力取水施設", to:"幌尻山荘", up:"2:10", down:"2:00"},
       {from:"幌尻山荘", to:"命の水", up:"1:50", down:"1:20"},
       {from:"命の水", to:"幌尻岳山頂", up:"2:20", down:"1:40"}
     ], sample:true},
    {name:"額平川コース 戸蔦別岳・七ッ沼カール周回", stats:"距離 幌尻山荘から片道約7km（戸蔦別岳・七ッ沼カール経由）/ 標高差 幌尻山荘(950m)⇔戸蔦別岳(1,959m)⇔山頂(2,052m) アップダウンあり / 登り6:40・下り5:10", level:"上級", note:"幌尻山荘から中戸蔦別岳・戸蔦別岳を経て、氷河地形の七ッ沼カールを見ながら山頂へ抜ける稜線周回。七ッ沼カールは絶景だが野営指定地ではなく幕営は不可（平取町公式Q&Aより）。行動時間が長く岩稜通過もあるため、命の水コース往復より一段上の体力・経験が必要。",
     popularity:2, trailhead:0, grade:{stamina:10, skill:"D", official:false},
     segments:[
       {from:"幌尻山荘", to:"中戸蔦別岳（幌尻山荘分岐）", up:"3:40", down:"2:40"},
       {from:"中戸蔦別岳", to:"戸蔦別岳頂上", up:"0:30", down:"0:20"},
       {from:"戸蔦別岳頂上", to:"七ッ沼カール", up:"1:00", down:"1:00"},
       {from:"七ッ沼カール", to:"幌尻岳山頂", up:"1:30", down:"1:10"}
     ], sample:true}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"施設利用は6/30から順次開始。雪解け直後で額平川の水量が最も多い時期で、経験者以外は避けたほうがよい。",
      7:"シャトルバス正式運行開始（7/1〜）。渡渉は股〜腰まで水量があることも。高山植物のお花畑が見頃を迎える。",
      8:"水量がやや落ち着き渡渉の難度が下がる。晴天率が高くシーズンの主力期だが、ヒグマの活動期でもありゴミ・食料管理を徹底。",
      9:"膝程度まで水量が下がり最も渡渉しやすい時期。中旬から紅葉が始まる。往復シャトルバスの受付は9/29まで、山荘・バスとも9/30で閉幕。"
    }
  }
},
{
  id:"yotei", name_ja:"羊蹄山（後方羊蹄山）", name_en:"Mt. Yotei (Ezo-Fuji)", region:"後方羊蹄", area:"北海道", prefecture:"北海道",
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
},
{
  id:"iwaki", name_ja:"岩木山", name_en:"Mt. Iwaki", region:"津軽", area:"東北", prefecture:"青森県",
  elevation:1624, hyakumeizan:true,
  coords:{lat:40.6610, lon:140.3005}, forecast_elevation:1500,
  grading:{
    ridgeline:1500,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"津軽平野に独立してそびえる日本海側の火山で、季節風を遮る山がなく年間を通じて風が強い。1964年1月には猛吹雪の中で大館鳳鳴高校山岳部の遭難事故が起き、9合目の無人小屋『鳳鳴ヒュッテ』はこの事故に由来する。積雪は例年10月下旬〜5月頃まで、豪雪地帯のため根雪は長く残る。"
  },
  trailheads:[
    {
      name:"岩木山神社（百沢コース登山口・標高200m）",
      access:[
        {mode:"バス", line:"岩木山線（30系統・弘南バス）", from:"JR弘前駅前6番のりば・弘前バスターミナル3番のりば",
         duration:"約44分（弘前駅前から）",
         weekday:"弘前駅前発 例: 7:11 / 9:11 / 11:11 / 13:11 / 15:11 / 16:51 / 17:51（岩木山神社前 7:54 / 9:54 / 11:54 / 13:54 / 15:54 / 17:34 / 18:34着）",
         weekend:"平日と同ダイヤで運行（岳温泉前行きの本数は土日祝も同じ、要確認）",
         season:"通年運行", url:"https://www.konanbus.com/1540.html", sample:true}
      ]
    },
    {
      name:"嶽温泉登山口（嶽コース・標高約460m）",
      access:[
        {mode:"バス", line:"岩木山線（30系統・弘南バス）", from:"JR弘前駅前6番のりば・弘前バスターミナル3番のりば",
         duration:"約60分（終点 岳温泉前まで）",
         weekday:"弘前駅前発 例: 7:11 / 9:11 / 11:11 / 13:11 / 15:11（岳温泉前 8:10 / 10:10 / 12:10 / 14:10 / 16:10着）",
         weekend:"平日と同ダイヤで運行（要確認）",
         season:"通年運行", url:"https://www.konanbus.com/1540.html", sample:true}
      ]
    },
    {
      name:"津軽岩木スカイライン8合目・リフト9合目（標高約1,490m）",
      access:[
        {mode:"自動車", line:"津軽岩木スカイライン（有料道路）", from:"弘前市街（枯木平ゲート）",
         duration:"約30〜40分（ゲートから8合目まで）",
         weekday:"8:00開門〜17:00閉門（最終入場16:00まで）", weekend:"同左",
         season:"2026年は4月23日(木)〜11月15日(日)の予定（積雪・悪天候時は変更あり）", url:"https://www.iwaki-skyline.jp/annai.html", sample:true},
        {mode:"シャトルバス", line:"岩木スカイラインシャトルバス（38系統・弘南バス、岳温泉前⇔8合目）", from:"岳温泉前",
         duration:"約25〜30分（8合目まで）",
         weekday:"岳温泉前発 例: 8:20 / 10:20 / 12:20 / 14:20（8合目 8:50 / 10:50 / 12:50 / 14:50着）。8合目発 例: 9:45 / 11:45 / 13:45 / 15:45", weekend:"同左",
         season:"岩木スカイライン開通日〜10月末（弘前〜岳温泉前は30系統岩木山線に乗り換え）", url:"https://www.konanbus.com/travel/skyline.html", sample:true},
        {mode:"リフト", line:"津軽岩木スカイラインリフト（8合目→9合目）", from:"8合目ターミナル",
         duration:"約10分",
         weekday:"9:00〜16:30（上り最終16:00・下り最終16:20）", weekend:"同左（定休日を除く）",
         season:"2026年度は4月下旬予定〜11月上旬。定休日は毎週火・水（GW・お盆等は営業予定）", url:"https://www.iwaki-skyline.jp/annai.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"焼止小屋（焼止まり避難小屋・無人、百沢コース上）", elevation:1066, open:"通年開放（無人・避難小屋、宿泊は緊急時のみ想定）", reservation:"予約不要。整備状況の問い合わせは岩木トレイルセンター（0172-83-2093）へ", url:"", tel:""},
    {name:"鳳鳴ヒュッテ（無人避難小屋・9合目）", elevation:1490, open:"通年開放（無人・老朽化が進んでいるとされる）", reservation:"予約不要。2025年8月に付近で落石事故が発生、足元と落石に要注意", url:"", tel:""},
    {name:"山頂避難小屋", elevation:1620, open:"通年開放（無人・バイオトイレあり）", reservation:"予約不要。管理は岩木山神社", url:"https://iwakiyamajinja.or.jp/", tel:"0172-83-2135"}
  ],
  routes:[
    {name:"百沢コース 往復", stats:"距離 片道約5.5km / 標高差 約1,400m（岩木山神社200m→山頂1,624m）/ 登り5:00・下り3:30（目安、往復ではなく片道の目安時間）", level:"中級〜上級", note:"岩木山神社から焼止小屋・錫杖清水・鳳鳴ヒュッテを経て山頂に至る正統コース。※2026年4月1日〜9月8日（予定）は岩木山神社の改修工事のため神社境内〜桜林公園間の登山道が通行止め予定（弘前市発表）。岩木山神社前バス停からアソベの森いわき荘を経由し桜林公園へ迂回する必要がある。出発前に弘前市公式サイトで最新の通行状況を要確認。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"B", official:false}},
    {name:"嶽コース 往復", stats:"距離 片道約5.4km / 標高差 約1,164m（嶽温泉460m→山頂1,624m）/ 登り4:00・下り3:00（目安、片道の目安時間）", level:"初級〜中級", note:"ブナ林の中を歩く一般向けコースで学校登山にも使われる。8合目より上部は落石注意。9合目で百沢・長平コースと合流。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:false}},
    {name:"リフト利用 9合目→山頂 往復", stats:"距離 往復約2km（9合目起点）/ 標高差 約134m（9合目1,490m→山頂1,624m）/ 片道40〜50分（岩木山観光協会公表）", level:"初級", note:"津軽岩木スカイライン＋リフトを使う最短コース。山頂直下は岩場・浮石が多く、2025年8月には鳳鳴ヒュッテ付近で落石事故が発生している。リフトは毎週火・水定休（GW・お盆等は営業）、8合目からの登山は13:00以降は控えるよう案内されている。",
     popularity:3, trailhead:2, grade:{stamina:2, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      4:"雪解けが進むが上部にはまだ残雪が多い。2026年は岩木山神社の改修工事により百沢コース入口（神社〜桜林公園間）が9/8まで通行止め予定、迂回路を利用。",
      5:"残雪期。9合目周辺や大沢では雪渓が残ることがあり、アイゼンがあると安心。",
      6:"夏山シーズン入り。高山植物が咲き始める。大沢では6〜8月ごろまで残雪が残ることがあり、初心者は経験者同行が望ましい。",
      7:"花の最盛期。梅雨明け後の晴天を狙いたい。クマの目撃情報にも注意。",
      8:"夏山ベストシーズンだが、日本海からの風が強い日は稜線・9合目付近で無理をしない。",
      9:"上旬まで岩木山神社付近の通行止めが続く見込み（9/8まで予定）。中旬から紅葉が始まる。",
      10:"紅葉が見頃（例年中旬〜下旬）。スカイライン・リフトとも11月上旬に冬期閉鎖となる。初雪の便りにも注意。",
      11:"上旬でスカイライン道路・リフトが冬期閉鎖。積雪が急速に増え、本格的な冬山装備が必要になる。"
    }
  }
},
{
  id:"hakkoda", name_ja:"八甲田山（大岳）", name_en:"Mt. Hakkoda (Odake)", region:"八甲田", area:"東北", prefecture:"青森県",
  elevation:1584, hyakumeizan:true,
  coords:{lat:40.658907, lon:140.877248}, forecast_elevation:1450,
  grading:{
    ridgeline:1450,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"森林限界が本州では異例に低く（1,200m前後）、稜線は年間を通じ風の通り道。1902年の八甲田雪中行軍遭難事件で知られる地吹雪・ホワイトアウトの名所で、豪雪地帯のため根雪は長い。風予報を特に重視。"
  },
  trailheads:[
    {
      name:"酸ヶ湯温泉登山口（標高約900m）",
      access:[
        {mode:"バス", line:"十和田湖線 みずうみ号（JRバス東北）", from:"JR青森駅（東口⑪番）",
         duration:"約1時間5分",
         weekday:"青森駅発 例: 8:10 / 9:00 / 11:35（酸ヶ湯温泉着 例: 9:15 / 10:05 / 13:03）", weekend:"同一ダイヤ（曜日による違いなし）",
         season:"通し運行は例年4月1日〜11月上旬頃（2026年は4/1〜、十和田湖まで直通）。冬期（2025年度実績11/11〜3/31）は青森〜酸ヶ湯温泉・八甲田ロープウェー間の区間運行に短縮。",
         url:"https://www.jrbustohoku.co.jp/route/11/274/", sample:true}
      ]
    },
    {
      name:"八甲田ロープウェー山頂公園駅（田茂萢岳・標高1,324m）",
      access:[
        {mode:"バス", line:"十和田湖線 みずうみ号（JRバス東北）", from:"JR青森駅（東口⑪番）",
         duration:"約55分",
         weekday:"青森駅発 例: 8:10 / 9:00 / 11:35（ロープウェー駅前着 例: 9:04 / 9:54 / 12:52）", weekend:"同一ダイヤ（曜日による違いなし）",
         season:"通し運行は例年4月1日〜11月上旬頃（2026年は4/1〜）。冬期は青森〜酸ヶ湯温泉・ロープウェー間の区間運行に短縮（2025年度実績11/11〜3/31）。",
         url:"https://www.jrbustohoku.co.jp/route/11/274/", sample:true},
        {mode:"ロープウェイ", line:"八甲田ロープウェー", from:"山麓駅（標高667m）",
         duration:"約10分", weekday:"始発9:00、運行間隔15〜20分、上り最終16:20（冬季は15:40）", weekend:"同左",
         season:"通年運行。風速25m/s以上または荒天時は運休、毎年11月上旬に整備運休あり。", url:"https://hakkoda-ropeway.jp/fare_time/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"酸ヶ湯温泉旅館", elevation:900, open:"通年営業（積雪期含む・詳細は要問合せ）", reservation:"電話予約（ご予約専用 9:00〜17:00）", url:"https://sukayu.jp/", tel:"017-738-6400"},
    {name:"仙人岱避難小屋（仙人岱ヒュッテ・無人）", elevation:1330, open:"通年開放（無人）", reservation:"—（緊急避難時以外の使用不可・水場なし）", url:"", tel:""},
    {name:"大岳避難小屋（大岳ヒュッテ・無人）", elevation:1440, open:"通年開放（無人）", reservation:"—（緊急避難時以外の使用不可）", url:"", tel:""}
  ],
  routes:[
    {name:"酸ヶ湯温泉 大岳環状線（仙人岱・毛無岱経由）周回", stats:"距離 約8.5km / 標高差 約685m / 周回 約4:25", level:"中級",
     note:"ロープウェーを使わず酸ヶ湯温泉から日帰りできる代表的な周回コース（環境省・十和田八幡平国立公園公式コース情報に基づく）。仙人岱周辺（地獄湯ノ沢）は火山性ガスに注意し登山道を外れないこと。噴火警戒レベルは気象庁 火山登山者向け情報（https://www.data.jma.go.jp/vois/data/sendai/203_Hakkodasan/203_index.html）で確認を。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"酸ヶ湯温泉", to:"仙人岱", up:"1:20"},
       {from:"仙人岱", to:"大岳", up:"0:55"},
       {from:"大岳", to:"大岳避難小屋", up:"0:20"},
       {from:"大岳避難小屋", to:"上毛無岱", up:"0:30"},
       {from:"上毛無岱", to:"下毛無岱", up:"0:35"},
       {from:"下毛無岱", to:"酸ヶ湯温泉", up:"0:45"}
     ], sample:true},
    {name:"八甲田ロープウェー 大岳登山コース（赤倉岳・井戸岳経由、酸ヶ湯温泉へ縦走）", stats:"標高差 約917m（山頂公園駅1,324m→大岳1,584m→酸ヶ湯温泉900m） / 総行動 約5〜6時間", level:"上級",
     note:"八甲田ロープウェー公式サイトの区間タイムを積算すると約6時間、同サイトのコース見出しは「約5時間」表記（区間タイムとやや差があるため両方併記）。ロープウェー駅に戻らない片道の縦走のため、下山後は酸ヶ湯温泉からみずうみ号バスで青森方面へ。山頂公園駅で入山届の提出が必要。地獄湯ノ沢周辺の火山ガスに注意（気象庁 https://www.data.jma.go.jp/vois/data/sendai/203_Hakkodasan/203_index.html）。",
     popularity:3, trailhead:1, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"山頂公園駅", to:"赤倉岳", up:"1:10"},
       {from:"赤倉岳", to:"井戸岳", up:"0:20"},
       {from:"井戸岳", to:"大岳避難小屋", up:"0:30"},
       {from:"大岳避難小屋", to:"大岳", up:"1:00"},
       {from:"大岳", to:"大岳避難小屋", down:"0:40"},
       {from:"大岳避難小屋", to:"上毛無岱", down:"0:40"},
       {from:"上毛無岱", to:"下毛無岱", down:"0:20"},
       {from:"下毛無岱", to:"酸ヶ湯温泉", down:"1:20"}
     ], sample:true},
    {name:"毛無パラダイスライン（山頂公園駅→酸ヶ湯・城ヶ倉、下り主体）", stats:"標高差 約424m（山頂公園駅1,324m→酸ヶ湯900m） / 下り主体 約2:30", level:"初級〜中級",
     note:"毛無岱の湿原を下りメインで歩ける入門コース（八甲田ロープウェー公式）。紅葉期は上毛無岱→下毛無岱の階段からの眺めが見どころ。山頂公園駅で入山届の提出が必要。",
     popularity:2, trailhead:1, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"山頂公園駅", to:"上毛無岱入口", down:"1:00"},
       {from:"上毛無岱入口", to:"下毛無岱出口", down:"0:30"},
       {from:"下毛無岱出口", to:"酸ヶ湯・城ヶ倉", down:"1:00"}
     ], sample:true}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      4:"八甲田ゴールドライン開通・みずうみ号運行開始（例年4/1）。山中はまだ雪深く本格的な残雪期装備が必要。",
      5:"残雪期。仙人岱〜大岳の稜線はまだ雪渓が残ることが多く、雪上歩行技術が必要な年もある。",
      6:"残雪がおおむね消え、ワタスゲなど毛無岱・田代平の湿原の花が咲き始める。",
      7:"高山植物が最盛期。梅雨明け後の晴天を狙いたい。",
      8:"樹林帯は蒸し暑いが稜線は涼しい。午後の雷雨に注意。",
      9:"下旬から紅葉が始まる。東北でも屈指の早い紅葉で知られる。",
      10:"紅葉が最盛期（例年上旬〜中旬）。中旬以降は初雪の便りも聞かれ、下旬は積雪の可能性。",
      11:"上旬でみずうみ号の十和田湖直通が終了し冬期ダイヤへ。初雪・積雪が本格化し無雪期登山は次第に難しくなる。"
    }
  }
},
{
  id:"hachimantai", name_ja:"八幡平", name_en:"Mt. Hachimantai", region:"八幡平", area:"東北", prefecture:"岩手県・秋田県",
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
},
{
  id:"iwate", name_ja:"岩手山", name_en:"Mt. Iwate", region:"奥羽山脈", area:"東北", prefecture:"岩手県",
  elevation:2038, hyakumeizan:true,
  coords:{lat:39.8526, lon:141.0011}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"「南部片富士」と呼ばれる独立峰の成層火山で、8合目より上は森林限界を超えたザレ場・岩礫帯が山頂まで続き遮るものがない。東北の独立峰は積雪期が長く、稜線の残雪は6月まで残ることがある一方、10月には初雪が降ることも珍しくない。"
  },
  trailheads:[
    {
      name:"馬返し登山口（標高633m・柳沢コース起点）",
      access:[
        {mode:"車", line:"自家用車・レンタカー", from:"東北自動車道 滝沢IC",
         duration:"約15分・約8km",
         weekday:"—", weekend:"—",
         season:"通年（冬期は積雪のため道路状況を要確認）。活火山のため入山規制状況により通行不可の場合あり", url:"https://www.city.takizawa.iwate.jp/kanko/shizen-kanko/contents-7625", sample:true},
        {mode:"タクシー", line:"滝沢交通（019-694-3277）／みたけタクシー（019-688-1335）", from:"IGRいわて銀河鉄道 滝沢駅",
         duration:"約20分・約11km",
         weekday:"随時（事前予約推奨・時刻指定なし）", weekend:"同左",
         season:"通年", url:"https://www.city.takizawa.iwate.jp/kanko/shizen-kanko/contents-7625", sample:true}
      ]
    },
    {
      name:"焼走り登山口（岩手山焼走り国際交流村、標高約550m）",
      access:[
        {mode:"車", line:"自家用車・レンタカー", from:"東北自動車道 西根IC",
         duration:"約19分・約7.1km",
         weekday:"—", weekend:"—",
         season:"通年（冬期は積雪のため道路状況を要確認）。活火山のため入山規制状況により通行不可の場合あり", url:"https://www.city.hachimantai.lg.jp/", sample:true},
        {mode:"電車＋タクシー", line:"IGRいわて銀河鉄道（好摩駅乗換）＋JR花輪線 大更駅からタクシー（要予約）", from:"盛岡駅",
         duration:"大更駅まで鉄道で約35分、駅からタクシーで焼走り登山口まで（タクシーの所要時間・料金は要確認）",
         weekday:"要確認（事前にタクシー会社へ確認推奨）", weekend:"要確認",
         season:"通年", url:"https://igr.jp/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"八合目避難小屋", elevation:1750, open:"管理人常駐 2026年7月1日〜10月16日（無人期間も避難小屋として通年利用は可能）", reservation:"3名以下は予約不要。4名以上はウェブ予約必須（キャンセル等は滝沢市に電話）。宿泊協力金は大人2,000円・高校生等1,500円・中学生1,000円・小学生以下無料", url:"https://www.city.takizawa.iwate.jp/kanko/shizen-kanko/contents-7625", tel:"019-656-6535"},
    {name:"平笠不動避難小屋", elevation:1600, open:"通年（無人）", reservation:"予約不要（無人の避難小屋。水場なし、トイレあり）", url:"https://www.env.go.jp/nature/nationalparks/list/towada-hachimantai/course/18/", tel:""}
  ],
  routes:[
    {name:"柳沢コース（馬返し 往復）", stats:"距離 約11.4km（往復）/ 標高差 約1,405m / 登り4:30・下り3:30", level:"中級", note:"「南部片富士」岩手山の表登山道。2.5合目で旧道（ガレ場・展望良好）と新道（森林コース）が分岐し、4合目まで新道を進んでから旧道に合流するのが推奨ルート。8合目に避難小屋と水場「御成清水」。活火山のため登山前に気象庁の噴火警戒レベルを必ず確認（https://www.data.jma.go.jp/vois/data/sendai/207_Iwatesan/207_index.html）。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false}},
    {name:"焼走りコース（往復）", stats:"距離 約17km（往復）/ 標高差 約1,490m / 登り5:10・下り3:50", level:"中級", note:"国指定天然記念物「焼走り溶岩流」の脇を抜ける展望の良いロングコース。平笠不動避難小屋（無人・水場なし）を経て山頂へ。活火山のため登山前に気象庁の噴火警戒レベルを必ず確認（https://www.data.jma.go.jp/vois/data/sendai/207_Iwatesan/207_index.html）。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"残雪期。上部はまだ雪が残り軽アイゼンが有効な年もある。8合目避難小屋は管理人不在期間（無人小屋としては利用可）。",
      6:"高山植物（コマクサ・ミヤマキンバイ等）が咲き始める。梅雨の晴れ間を狙いたい。",
      7:"7月1日に8合目避難小屋の管理人常駐が始まり実質的な山開き。活火山のため気象庁の噴火警戒レベルと登山道の規制状況を必ず事前確認（気象庁 https://www.data.jma.go.jp/vois/data/sendai/207_Iwatesan/207_index.html／岩手県 https://www.pref.iwate.jp/kurashikankyou/anzenanshin/bosai/kazanbosai/1004223.html）。",
      8:"盛夏で花・展望とも安定するが、午後の雷雨に注意し早出早着を心掛ける。",
      9:"秋晴れの日が増え、下旬から山頂付近で紅葉が始まる。",
      10:"紅葉は中旬が見頃。8合目避難小屋の管理人常駐は10月16日まで（2026年）。下旬は初雪の可能性があり冬装備の準備を。"
    }
  }
},
{
  id:"hayachine", name_ja:"早池峰山", name_en:"Mt. Hayachine", region:"北上山地", area:"東北", prefecture:"岩手県",
  elevation:1917, hyakumeizan:true,
  coords:{lat:39.5584, lon:141.4889}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:9,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"北上山地に独立してそびえる孤立峰で樹林が低く、1合目付近から早くも森林限界を超えて遮るもののない岩稜歩きとなるため風の影響を受けやすい。登山口へ通じる県道紫波江繋線は例年11月上旬〜翌5月中旬は冬期閉鎖となるほど積雪があり、残雪期・凍結期は蛇紋岩質の岩場が特に滑りやすくなる。"
  },
  trailheads:[
    {
      name:"小田越登山口（標高1,245m）",
      access:[
        {mode:"シャトルバス", line:"早池峰登山シャトルバス（岳駐車場〜峰南荘前〜河原の坊〜小田越〜荒川〜江繋、有限会社ファミリー観光岩手ほか運行）", from:"岳駐車場（マイカー規制区間外・無料）",
         duration:"約25分前後（公式時刻表PDFで要確認）",
         weekday:"平日は運行なし（マイカー規制対象の土曜・日曜・祝日のみ運行）",
         weekend:"早朝〜午後に複数便を運行（発車時刻は公式時刻表PDFで要確認）",
         season:"2026年は6月14日(日)〜8月2日(日)の土曜・日曜・祝日16日間のみ運行。運賃は公式案内で要確認",
         url:"https://familykanko.co.jp/yama/", sample:true},
        {mode:"直行バス", line:"早池峰登山直行バス 花巻線（完全予約制、有限会社ファミリー観光岩手）", from:"JR花巻駅・新花巻駅",
         duration:"花巻駅から約1時間30分（要確認）",
         weekday:"運行日限定のため平日基準の定期便なし（season欄の指定日のみ・乗車5日前までに要予約）",
         weekend:"花巻駅発 午前1便・小田越発 午後1便（新花巻駅経由。発着時刻は公式時刻表で要確認）",
         season:"2026年運行日: 6/13・14、7/18・19・20、8/8・9・11、9/19〜23（運賃・座席数は公式案内で要確認）",
         url:"https://familykanko.co.jp/yama/", sample:true},
        {mode:"自家用車＋徒歩", line:"河原の坊駐車場に駐車し県道を徒歩で連絡（小田越登山口自体には駐車場なし）", from:"河原の坊駐車場（無料・約48台）",
         duration:"徒歩約40〜50分（約2km、舗装道路）",
         weekday:"通年可（冬期閉鎖・マイカー規制時間帯を除く）",
         weekend:"2026年6/14〜8/2の土曜・日曜・祝日は午前5時〜午後1時まで普通車進入禁止のためシャトルバス等を利用",
         season:"県道紫波江繋線は例年11月上旬〜翌5月中旬は冬期閉鎖",
         url:"https://www.city.hanamaki.iwate.jp/kanko/midokoro/shizen/1003918.html", sample:true}
      ]
    },
    {
      name:"岳駐車場（早池峰山総合案内所前・約94台・マイカー規制区間外）",
      access:[
        {mode:"自家用車", line:"主要地方道紫波江繋線 経由", from:"東和IC（釜石自動車道）",
         duration:"約50分",
         weekday:"通年可（冬期閉鎖を除く）", weekend:"同左（マイカー規制の対象区間外のため通年駐車可）",
         season:"県道の冬期閉鎖は例年11月上旬〜翌5月中旬",
         url:"https://www.city.hanamaki.iwate.jp/kanko/midokoro/shizen/1003918.html", sample:true},
        {mode:"シャトルバス", line:"早池峰登山シャトルバス（岳駐車場発着）", from:"岳駐車場",
         duration:"小田越まで約25分前後（要確認）",
         weekday:"運行なし", weekend:"土曜・日曜・祝日のマイカー規制実施日のみ運行（始発・最終時刻は公式時刻表で要確認）",
         season:"2026年は6月14日(日)〜8月2日(日)の土日祝16日間",
         url:"https://familykanko.co.jp/yama/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"うすゆき山荘（避難小屋）", elevation:900, open:"通年開放（無人・無料）", reservation:"予約不要。宿泊目的の施設ではなく緊急避難用", url:"https://www.city.hanamaki.iwate.jp/kanko/midokoro/shizen/1003918.html", tel:"0198-41-3124"},
    {name:"小田越山荘（避難小屋）", elevation:1217, open:"通年開放（無人・無料）", reservation:"予約不要。宿泊目的の施設ではなく緊急避難用。電気・水道・トイレ設備なし", url:"https://www.city.hanamaki.iwate.jp/kanko/midokoro/shizen/1003918.html", tel:"0198-62-2111"},
    {name:"早池峰山頂避難小屋", elevation:1900, open:"通年開放（無人・無料）", reservation:"予約不要。宿泊目的の施設ではなく雷雨・急病時などの一時避難用。携帯トイレ専用ブース3室あり", url:"https://www.city.hanamaki.iwate.jp/kanko/midokoro/shizen/1003918.html", tel:"0198-41-3124"}
  ],
  routes:[
    {name:"小田越コース 往復", stats:"標高差 約672m（小田越1,245m→山頂1,917m）/ 登り2:30・下り2:30", level:"中級", note:"早池峰山でほぼ唯一利用できる登山道（河原の坊コースは平成28年5月の大雨崩落以来、通行止めが続く）。1合目付近から早くも森林限界を超えて岩稜となり、5〜6合目の竜ヶ馬場を経て蛇紋岩の岩場が続く。蛇紋岩は乾いていても滑りやすく、9合目からの鉄バシゴ帯とあわせて浮石・滑落に要注意。山頂周辺の高山植物帯は特別天然記念物、携帯トイレ持参が必須。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false},
     segments:[
       {from:"小田越登山口", to:"早池峰山頂", up:"2:30", down:"2:30"}
     ], sample:true},
    {name:"薬師岳北面コース（小田越登山口〜薬師岳 往復）", stats:"標高差 約400m（小田越1,245m→薬師岳1,645m）/ 登り1:30・下り1:30", level:"初〜中級", note:"早池峰の主稜線から南に分岐し、静かな樹林とハイマツ帯を抜けて薬師岳へ向かうコース。花崗岩質でハイマツが美しく、山頂近くは熊笹の急登。早池峰本峰側と比べ登山者は少ない。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:false},
     segments:[
       {from:"小田越登山口", to:"薬師岳山頂", up:"1:30", down:"1:30"}
     ], sample:true},
    {name:"早池峰山〜中岳〜鶏頭山 三山縦走（岳へ下山）", stats:"早池峰山頂〜岳登山口、行動時間目安 約6〜7時間（下り基調・健脚向け）", level:"上級", note:"小田越コースで登頂後、剣ヶ峰・中岳を経て鶏頭山へ抜け岳集落へ下る岩稜縦走路。岩場・痩せ尾根が連続し危険箇所が多く、下りでの使用は特に注意。マイカー規制期間中の土日祝は下山口の岳〜小田越間が車両規制区間となるため、事前に登山口への戻り方（シャトルバス最終便）を計画しておく必要がある。",
     popularity:1, trailhead:null, grade:{stamina:7, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9],
    notes:{
      5:"残雪期。県道紫波江繋線は例年5月中旬に冬期閉鎖が解除される。山麓では雪解けとともに花期が始まる。",
      6:"例年6月第2日曜に山開き（2026年は6/14）。ハヤチネウスユキソウなど早池峰固有の高山植物が咲き始め、中旬以降はマイカー規制とシャトルバス運行が始まる（土日祝のみ）。",
      7:"ハヤチネウスユキソウが見頃（〜8月上旬）。ナンブトラノオ・ナンブトウウチソウも咲き始める。マイカー規制継続（〜8/2）。",
      8:"高山植物はやや盛りを過ぎるが登山者は最も多い時期。2026年のマイカー規制・シャトルバス運行は8月2日まで、それ以降は通常どおり河原の坊駐車場まで自家用車可。稜線は遮るものがなく強い日射・風に注意。",
      9:"花期は終盤だが気温・登山者数ともに落ち着く好期。台風接近時は独立峰特有の強風に厳重注意。",
      10:"紅葉が山頂から進む。下旬以降は初雪の可能性があり、11月上旬には主要地方道が冬期閉鎖となるため計画に注意。"
    }
  }
},
{
  id:"chokai", name_ja:"鳥海山", name_en:"Mt. Chokai", region:"鳥海山系", area:"東北", prefecture:"山形県・秋田県",
  elevation:2236, hyakumeizan:true,
  coords:{lat:39.0993, lon:140.0488}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本海に突き出た独立峰で有数の豪雪地帯。森林限界が約1,700mと低く、夏でも風を遮るものがない外輪山歩きが長い。大雪渓・千蛇谷の雪渓は7月中旬頃まで残ることが多く、アイゼン携行が安全。"
  },
  trailheads:[
    {
      name:"鉾立（象潟口登山口・標高1,160m）",
      access:[
        {mode:"バス", line:"鳥海ブルーライナー（乗合登山バス・象潟合同交通運行）", from:"JR羽越本線 象潟駅",
         duration:"約35分",
         weekday:"運休（土日祝のみ運行）", weekend:"象潟駅発 例: 6:20 / 11:35 / 15:25（7〜9月ダイヤ）※6月は6:20・15:25のみ、10月第2週までは8:15・11:35・15:25",
         season:"6月〜10月第2週の土曜・日曜・祝日、完全予約制（前日17:00まで）", url:"https://www.kisakata-goudo.com/kanko/blue-liner/", sample:true},
        {mode:"乗合タクシー", line:"鳥海山乗合タクシー（酒田第一タクシー・遊佐鳥海観光協会取次）", from:"JR酒田駅・JR遊佐駅・鳥海温泉遊楽里",
         duration:"約60分（酒田駅から、鉾立まで）",
         weekday:"要予約・固定時刻表なし（利用日前日16:00まで）", weekend:"同左",
         season:"2026年は7月10日〜8月24日の指定日", url:"https://www.yuzachokai.jp/spot/taxy/", sample:true}
      ]
    },
    {
      name:"吹浦口・大平登山口（標高1,044m）",
      access:[
        {mode:"バス", line:"鳥海ブルーライナー（乗合登山バス・象潟合同交通運行、途中「太平山荘」バス停下車）", from:"JR羽越本線 象潟駅",
         duration:"約30分（太平山荘まで）",
         weekday:"運休（土日祝のみ運行）", weekend:"象潟駅発 例: 6:20 / 11:35 / 15:25（7〜9月ダイヤ）",
         season:"6月〜10月第2週の土曜・日曜・祝日、完全予約制", url:"https://www.kisakata-goudo.com/kanko/blue-liner/", sample:true},
        {mode:"乗合タクシー", line:"鳥海山乗合タクシー（酒田第一タクシー・大平登山口行き）", from:"JR酒田駅・JR遊佐駅",
         duration:"約40〜60分",
         weekday:"要予約・固定時刻表なし（利用日前日16:00まで）", weekend:"同左",
         season:"2026年は7月10日〜8月24日の指定日", url:"https://www.yuzachokai.jp/spot/taxy/", sample:true}
      ]
    },
    {
      name:"湯ノ台口・滝の小屋登山口（標高1,182m）",
      access:[
        {mode:"乗合タクシー", line:"鳥海山乗合タクシー 滝の小屋線（酒田第一タクシー）", from:"JR酒田駅",
         duration:"約60分",
         weekday:"要予約・固定時刻表なし（利用日前日16:00まで）", weekend:"同左",
         season:"2026年は7月10日〜8月24日の指定日", url:"https://www.sakata-no1taxi.co.jp/choukaisan/", sample:true}
      ]
    },
    {
      name:"矢島口・祓川登山口（標高1,185m）",
      access:[
        {mode:"タクシー", line:"由利本荘市内タクシー", from:"由利高原鉄道 矢島駅",
         duration:"約30分",
         weekday:"要予約・固定時刻表なし", weekend:"同左",
         season:"アクセス道路は例年4月下旬〜11月上旬開通（2026年は4月24日9:00開通予定）", url:"https://yurihonjo-kanko.jp/yrdb/mt-chokai-yashimaguci/", sample:true},
        {mode:"シャトルバス", line:"鳥海山矢島口シャトルバス（由利本荘市・期間限定/無料・予約不要）", from:"由利高原鉄道 矢島駅",
         duration:"要確認",
         weekday:"運行なし（下記の限定期間のみ運行）", weekend:"運行日・時刻は要確認（花立クリーンハイツ・フォレスタ鳥海経由）",
         season:"2026年は5月2日〜5月6日のみ運行（花立ゲート開通記念の限定運行）", url:"https://yurihonjo-kanko.jp/special/haruyamabus2025/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"鉾立山荘（5合目・にかほ市）", elevation:1160, open:"例年4月下旬〜11月上旬（2026年は4/24開始予定）", reservation:"電話予約（にかほ市観光課、季節中は現地管理人）", url:"https://www.city.nikaho.akita.jp/soshikikarasagasu/kankoka/gyomuannai/2/1/6153.html", tel:"0184-43-3230"},
    {name:"大平山荘（4合目・遊佐町）", elevation:1000, open:"例年4月下旬〜10月末（2026年は受電設備修繕のため営業休止・再開未定）", reservation:"要問合せ", url:"http://www.chokai-yuza.com/odaira/", tel:"090-2607-2326"},
    {name:"御浜小屋（7合目参籠所）", elevation:1700, open:"2026年7月3日〜8月30日", reservation:"電話予約（鳥海山大物忌神社、予約開始5月8日10:00〜）", url:"https://oomonoimijinja.verse.jp/lodge.html", tel:"0234-77-2301"},
    {name:"御室小屋（山頂参籠所）", elevation:2100, open:"2026年7月3日〜8月30日", reservation:"電話予約（鳥海山大物忌神社、予約開始5月8日10:00〜）", url:"https://oomonoimijinja.verse.jp/lodge.html", tel:"0234-77-2301"},
    {name:"滝の小屋（湯ノ台口）", elevation:1280, open:"2026年6月22日〜10月12日（渇水時は早期閉鎖の場合あり）", reservation:"電話・メール予約（遊佐町 商工観光課）", url:"https://www.town.yuza.yamagata.jp/archive/p20250327181712", tel:"0234-72-5886"},
    {name:"祓川山荘（祓川ヒュッテ・矢島口）", elevation:1200, open:"2026年4月24日〜10月31日（通年一部開放、管理人常駐日のみ給湯・売店利用可）", reservation:"由利本荘市 観光文化スポーツ部観光振興課へ電話", url:"https://www.city.yurihonjo.lg.jp/shisetsu/1002012/1002038/1003971.html", tel:"0184-24-6376"}
  ],
  routes:[
    {name:"鉾立（象潟口）→新山 往復", stats:"距離 約18.2km / 標高差 約1,080m / 登り5:00・下り4:00", level:"中級", note:"鳥海山で最も歩かれる定番コース。御浜〜鳥海湖一帯は7〜8月にニッコウキスゲ・ハクサンイチゲが咲く。七五三掛の旧道は落石により通行禁止、新道（迂回路）を利用。新山山頂直下は岩場の鎖・梯子あり。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"C", official:true, src:"秋田県の山岳グレーディング", url:"https://www.pref.akita.lg.jp/pages/archive/39872"}},
    {name:"吹浦口（大平）→新山（御浜小屋・千蛇谷）往復", stats:"距離 約14.5km / 標高差 約1,190m / 登り5:00・下り4:00", level:"中級", note:"象潟口と並び古くから開かれた登山道。急登の伝石坂を登り切れば御浜まで快適。大平山荘は2026年は休業中だが登山道自体は通行可。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"C", official:true, src:"やまがた百名山のグレーディング", url:"https://www.pref.yamagata.jp/050011/kurashi/shizen/hyakumeisan/grading.html"}},
    {name:"湯ノ台口（薊坂）→七高山 往復", stats:"距離 約10.6km / 標高差 約1,050m / 登り4:55・下り4:15", level:"中級", note:"最短ルートだが薊坂の急登が核心。大雪渓・小雪渓は残雪期に道迷いしやすい。河原宿の旧山小屋は2025年に倒壊、2026年7月時点でトイレのみ利用可。",
     popularity:2, trailhead:2, grade:{stamina:3, skill:"C", official:true, src:"やまがた百名山のグレーディング", url:"https://www.pref.yamagata.jp/050011/kurashi/shizen/hyakumeisan/grading.html"}},
    {name:"矢島口（祓川）→七高山 往復", stats:"距離 約11.6km / 標高差 約1,040m / 登り4:15・下り3:15", level:"中級", note:"秋田県側で最も古い歴史を持つ登山道。積雪が多く7月中旬頃までは登山道の半分以上が雪渓に覆われる。賽の河原・七ツ釜・舎利坂など見どころが多い。",
     popularity:2, trailhead:3, grade:{stamina:3, skill:"C", official:true, src:"秋田県の山岳グレーディング", url:"https://www.pref.akita.lg.jp/pages/archive/39872"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      4:"矢島口のアクセス道路が開通（2026年は4/24）。山頂部はまだ大量の残雪で一般登山向きではない。",
      5:"ブナ林の新緑が美しいが山頂部・稜線はまだ厳冬期並みの残雪。本格的な夏道登山は6月以降を推奨。",
      6:"大雪渓・小雪渓が残る残雪期。稜線は残雪と強風に注意し軽アイゼンを推奨。高山植物が咲き始める。",
      7:"ニッコウキスゲ・ハクサンイチゲなど花畑が見頃（〜8月上旬）。開山まもない時期は雪渓・登山道の状況を要確認。常時観測火山のため気象庁の噴火警戒レベルも事前確認を（気象庁 鳥海山: https://www.data.jma.go.jp/vois/data/sendai/209_Chokaisan/209_index.html）。",
      8:"花の見頃と夏山最盛期。日本海からの強風・落雷・濃霧に注意。乗合バス・タクシーは早めの予約を。",
      9:"花は終盤、上旬は残暑あり。中旬から紅葉が始まる。",
      10:"外輪山から山頂まで紅葉が広がり見頃は例年上旬。中旬以降は積雪・強風に急速に切り替わるため要注意。多くの山小屋・乗合バスはこの頃までに営業終了。"
    }
  }
},
{
  id:"gassan", name_ja:"月山", name_en:"Mt. Gassan", region:"出羽三山", area:"東北", prefecture:"山形県",
  elevation:1984, hyakumeizan:true,
  coords:{lat:38.549136, lon:140.026971}, forecast_elevation:1900,
  grading:{
    ridgeline:1700,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"出羽三山随一の豪雪地帯。姥沢側は例年7月上旬まで残雪が多く、志津野営場〜牛首間で雪渓歩行になる年もある。羽黒口（弥陀ヶ原）は比較的緩やかだが8月でも雪渓が残ることがある。"
  },
  trailheads:[{
    name:"月山八合目（羽黒口、標高1,380m）",
    access:[
      {mode:"バス", line:"庄内交通「月山八合目線」（鶴岡駅前・羽黒随神門・羽黒山頂 経由）", from:"庄内交通 鶴岡駅前①のりば・エスモールバスターミナル",
       duration:"約2時間（羽黒山頂で月山八合目行きに乗継）",
       weekday:"月山八合目線は主に土曜・日曜・祝日と夏期の指定日のみ運行（平日はほぼ運休）。運行日は鶴岡駅前発 例: 6:03 / 7:03 → 羽黒山頂で乗継 → 月山八合目 着 例: 8:00 / 9:00",
       weekend:"運行日の鶴岡駅前発 例: 6:03 / 7:03 → 月山八合目 着 例: 8:00 / 9:00（羽黒山頂発11:55→月山八合目着12:50、羽黒山頂発14:05→月山八合目着15:00の便もあり）",
       season:"2026年は7月〜9月の指定運行日のみ（庄内交通公式サイトの運行カレンダー要確認。お盆期間8/13〜16は日曜・祝休日ダイヤ）",
       url:"https://www.shonaikotsu.jp/local_bus/t0008_haguro.html", sample:true}
    ]
  },{
    name:"姥沢（志津口・月山ペアリフト下駅、標高約1,150m）",
    access:[
      {mode:"バス", line:"月山志津温泉線（西川町営バス）", from:"西川IC（山交バス・高速バス「山形－鶴岡・酒田線」等の乗継地点）",
       duration:"西川IC〜姥沢 約50分",
       weekday:"西川IC発 例: 8:50 / 11:35 / 14:25 / 16:32（姥沢着 例: 9:39 / 12:25 / 15:15 / 17:23）。一部便は前日・当日予約制のデマンド便（月山観光タクシー☎0237-74-2310）。",
       weekend:"西川IC発 例: 8:50 / 11:35 / 14:25（土日祝は最終便のみ平日と別ダイヤで同じ17:23姥沢着）。下山は姥沢発 西川IC行 例: 10:05 / 12:35 / 14:15 / 16:00。",
       season:"姥沢⇔志津間は2026年4月10日〜10月18日運行。西川IC〜志津間は4/1〜11/30運行だが便数は季節で変動。",
       url:"https://www.town.nishikawa.yamagata.jp/soshiki/chomin/1272.html", sample:true},
      {mode:"リフト", line:"月山ペアリフト（月山観光開発株式会社）", from:"姥沢リフト下駅",
       duration:"約15分（上駅標高1,520m）",
       weekday:"8:00〜16:30運行（上り最終16:15）", weekend:"同左",
       season:"2026年は4月10日〜10月18日運行（9月1日〜3日は秋の設備更新工事のため運休）",
       url:"https://mt-gassan.com/mountain/", sample:true}
    ]
  }],
  huts:[
    {name:"月山佛生池小屋（九合目）", elevation:1743, open:"6月下旬〜9月下旬（2026年は6月末〜9月27日を予定）", reservation:"電話予約制（受付18:00〜19:30、5月上旬より予約受付開始）。メール不可。", url:"https://bussyouike.travel.coocan.jp/", tel:"090-8783-9555"},
    {name:"月山頂上小屋（山頂直下）", elevation:1970, open:"6月下旬〜9月中旬〜下旬", reservation:"電話予約制（シーズン中は090-8781-7731、シーズン外は0235-62-2757）", url:"https://www5c.biglobe.ne.jp/~gassan/index.html/", tel:"090-8781-7731"}
  ],
  routes:[
    {name:"羽黒（弥陀ヶ原）コース 往復", stats:"距離 約10.8km / 標高差 約604m / 登り3:00・下り2:40", level:"初〜中級", note:"弥陀ヶ原の広大な木道と高山植物が魅力。8合目からはなだらかだが、仏生池小屋を過ぎると傾斜が増す。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:true, src:"やまがた百名山グレーディング（山形県）", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}},
    {name:"姥沢コース 往復（月山ペアリフト利用）", stats:"距離 約6.0km / 標高差 約464m / 登り2:05・下り1:35", level:"初〜中級", note:"リフトで標高1,520mまで上がれるため最短距離で山頂に立てる。牛首から山頂直下は岩場の急登になる。",
     popularity:3, trailhead:1, grade:{stamina:2, skill:"B", official:true, src:"やまがた百名山グレーディング（山形県）", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}},
    {name:"姥ヶ岳ハイキング（月山リフトコース）往復", stats:"距離 約1.2km / 標高差 約150m / 登り0:30・下り0:20", level:"初級", note:"リフト上駅からの入門コース。姥ヶ岳山頂からは月山や鳥海山を一望でき、家族連れにも人気。",
     popularity:2, trailhead:1, grade:{stamina:1, skill:"A", official:true, src:"やまがた百名山グレーディング（山形県）", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"残雪期。姥沢側は4/10からリフト運行開始だが雪渓が多くアイゼンが必要。8合目までの月山公園線は例年6月上旬まで冬期閉鎖。",
      6:"月山公園線の冬期閉鎖が解除（例年6月上旬）。弥陀ヶ原の雪解けと高山植物が進むが、姥沢側はまだ雪渓が残る。",
      7:"7月1日に月山神社本宮が開山。お花畑が見頃（6月中旬〜8月末）。庄内交通「月山八合目線」バスは7〜9月の指定日（主に土日）のみ運行。",
      8:"夏スキーとお花畑のピーク。お盆期間（8/13〜16）は混雑・特別ダイヤに注意。",
      9:"上旬は花、中旬から紅葉が始まる。月山神社本宮は9月15日頃閉山。9月1日〜3日は月山ペアリフトが設備更新工事で運休。",
      10:"紅葉が見頃（上旬〜中旬）。月山ペアリフト・関連路線バスは10月18日で夏山シーズン終了。下旬は初雪の可能性。"
    }
  }
},
{
  id:"oasahi", name_ja:"朝日岳（大朝日岳）", name_en:"Mt. Oasahi", region:"朝日連峰", area:"東北", prefecture:"山形県・新潟県",
  elevation:1870, hyakumeizan:true,
  coords:{lat:38.2606, lon:139.9223}, forecast_elevation:1800,
  grading:{
    ridgeline:1800,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6,7],
    snow_note:"豪雪地帯の朝日連峰主峰。稜線は森林限界が低く風を遮るものがなく、6月でも稜線上（特に銀玉水上部）に残雪が残り7月上旬までピッケル・アイゼンが有効な場合がある。無雪期の目安は7月中旬〜10月中旬で、9月でも初雪の可能性がある。アクセス林道・国道は大雨で崩落・通行規制が起きやすいため降水しきい値もやや厳しめに設定。"
  },
  trailheads:[
    {
      name:"古寺鉱泉登山口／古寺案内センター（標高675m）",
      access:[
        {mode:"タクシー", line:"大江タクシー（朝日連峰登山口送迎）", from:"JR左沢線 左沢駅",
         duration:"約60分",
         weekday:"予約制・定期便なし（時刻は要相談）", weekend:"同左",
         season:"通年（要事前予約、林道状況は要確認）。登山口駐車場（約200台）は協力金1,000円/台。古寺案内センターの2026年度の宿泊営業状況は要確認（TEL 090-4638-7260）", url:"https://www.oe-taxi.jp/pages/asahi-mountain.html", sample:true},
        {mode:"タクシー", line:"朝日タクシー（有限会社）", from:"JR左沢線 寒河江駅",
         duration:"約1時間30分（小型車¥16,300〜／ジャンボ¥23,900〜、往復料金込み）",
         weekday:"予約制・定期便なし", weekend:"同左",
         season:"通年（積雪期は要問合せ）", url:"https://yamagata-asahitaxi.co.jp/pages/8/", sample:true}
      ]
    },
    {
      name:"日暮沢登山口（標高約620m）",
      access:[
        {mode:"タクシー", line:"大江タクシー（朝日連峰登山口送迎）", from:"JR左沢線 左沢駅",
         duration:"約60分",
         weekday:"予約制・定期便なし（時刻は要相談）", weekend:"同左",
         season:"通年（要事前予約）。林道は大雨後に崩落・通行止めとなることがあるため、西川町商工観光課（0237-84-0566）へ事前確認を推奨", url:"https://www.oe-taxi.jp/pages/asahi-mountain.html", sample:true}
      ]
    },
    {
      name:"朝日鉱泉登山口（標高555m）",
      access:[
        {mode:"登山バス（乗合登山タクシー）", line:"朝日鉱泉登山バス秋便（朝日鉱泉ナチュラリストの家運営）", from:"JR左沢線 寒河江駅南口",
         duration:"約1時間30分",
         weekday:"寒河江駅発 例: 12:45（昼便）／朝日鉱泉発 例: 14:40", weekend:"同左（運行日は要確認）",
         season:"2026年秋便：9/18(金)〜23(水祝)・10/2(金)〜5(月)・10/9(金)〜12(月祝)。完全予約制（利用日の2日前まで）。夏期の定期便設定なし", url:"https://www.asahikosen.com/%E7%99%BB%E5%B1%B1%E3%83%90%E3%82%B9%E7%A7%8B%E4%BE%BF/", sample:true},
        {mode:"タクシー", line:"朝日タクシー（有限会社）", from:"JR左沢線 寒河江駅",
         duration:"約1時間20分（小型車¥15,900〜／ジャンボ¥23,300〜、往復料金込み）",
         weekday:"予約制・定期便なし", weekend:"同左",
         season:"通年。2026年は国道287号（寒河江・朝日町方面）が復旧工事のため時間帯規制あり（7/1〜8/16は終日通行可・待ち時間あり、8/17以降は平日朝8:30まで／昼12:00〜13:00／夕方17:00以降のみ通行可、土日祝は終日可）。庄内・国道112号方面は全面通行止め。事前に朝日鉱泉へ要確認", url:"https://www.asahikosen.com/%E3%83%9B%E3%83%BC%E3%83%A0/%E7%8F%BE%E5%9C%A8%E3%81%AE%E9%81%93%E8%B7%AF%E7%8A%B6%E6%B3%81/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"大朝日小屋（大朝日岳山頂避難小屋）", elevation:1785, open:"通年開放（無人の避難小屋・宿泊は予約不可）", reservation:"予約不可。利用協力費は宿泊2,000円・トイレのみ利用100円", url:"https://ooasahi.jimdofree.com/%E5%A4%A7%E6%9C%9D%E6%97%A5%E5%B0%8F%E5%B1%8B%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/", tel:""},
    {name:"古寺案内センター（旧古寺鉱泉）", elevation:675, open:"6月1日〜10月31日（天候により変動。2026年度の営業状況は要確認）", reservation:"電話予約制（2026年度の営業状況は要確認。駐車場は協力金1,000円/台）", url:"https://oekanko.jp/asahirenpo/", tel:"090-4638-7260"},
    {name:"朝日鉱泉ナチュラリストの家", elevation:555, open:"5月〜11月上旬（積雪期休業）。2026年は特定日のみ昼営業（7/19-20・8/9-11予定）、宿泊は要予約", reservation:"電話予約：自宅0237-67-3589（通年・不在時あり）／現地衛星電話090-7664-5880（5月上旬〜10月下旬のみ通話可）", url:"https://www.asahikosen.com/", tel:"0237-67-3589"},
    {name:"日暮沢小屋（避難小屋）", elevation:620, open:"通年開放（無人・シーズン中はトイレ使用可）", reservation:"予約不可（避難小屋）", url:"https://yamagatayama.com/hut/%E6%97%A5%E6%9A%AE%E6%B2%A2%E5%B0%8F%E5%B1%8B/", tel:""}
  ],
  routes:[
    {name:"古寺鉱泉（古寺案内センター）往復", stats:"距離 約18.1km（往復）/ 標高差 約1,200m / 往復コースタイム 約10:20（公表値・登下り内訳の公表なし）", level:"上級", note:"大朝日岳への最も一般的なルート。健脚なら日帰りも可能だが、大朝日小屋で1泊するのが安全。銀玉水上部は7月中旬まで残雪あり。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"やまがた百名山のグレーディング", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}},
    {name:"朝日鉱泉起点 中ツル尾根〜鳥原山 周回", stats:"距離 約19.5km（周回）/ 標高差 約1,300m / 周回コースタイム 約11:30（公表値・登下り内訳の公表なし）", level:"上級", note:"中ツル尾根を登り小朝日岳・鳥原山を経て周回。展望に優れるが鳥原山側は道が細く道迷いに注意。2026年は朝日鉱泉へのアクセス道路（国道287号）が復旧工事で時間帯規制中、事前確認必須。",
     popularity:2, trailhead:2, grade:{stamina:5, skill:"B", official:true, src:"やまがた百名山のグレーディング", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}},
    {name:"日暮沢〜竜門山〜大朝日岳〜古寺鉱泉 縦走", stats:"距離 約24km（日暮沢起点・古寺鉱泉下山）/ 標高差 累積約2,000m以上 / 1泊2日が目安", level:"上級", note:"朝日連峰主稜線を巡る代表的な縦走路。日暮沢口は大朝日岳への最短ルートともいわれる。竜門小屋または大朝日小屋で1泊するのが一般的。マイカー利用時は日暮沢⇔古寺鉱泉間の車両回収手段（タクシー等）を事前に手配。公表グレーディング表に完全一致する行がないため独自の保守的な推定値。",
     popularity:2, trailhead:null, grade:{stamina:7, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"残雪期。上級者・雪山装備前提。多くの登山口・山小屋がまだ冬季閉鎖。",
      6:"下旬から登山シーズン本格化。稜線・銀玉水上部などに残雪が残り、7月上旬まではピッケル・アイゼンが有効な場合がある。",
      7:"中旬以降は残雪がほぼ解消。ヒメサユリ・ニッコウキスゲなど高山植物が見頃。朝日鉱泉ナチュラリストの家は特定日のみ昼営業。",
      8:"盛夏。日差しが強く水場を活用した水分補給計画が重要。",
      9:"下旬から紅葉が始まる。朝日鉱泉登山バス秋便の運行開始（下旬〜）。稜線では早い年で初雪の便りが届くことも。",
      10:"紅葉最盛期（例年上旬〜中旬）。登山バス秋便運行。下旬は初雪の可能性があり装備に注意。",
      11:"初冬。山小屋・案内施設は順次冬季休業。降雪・凍結に厳重注意。"
    }
  }
},
{
  id:"zao", name_ja:"蔵王山（熊野岳）", name_en:"Mt. Zao (Kumano-dake)", region:"蔵王連峰", area:"東北", prefecture:"山形県・宮城県",
  elevation:1841, hyakumeizan:true,
  coords:{lat:38.1440, lon:140.4398}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"蔵王エコーライン・ハイラインは例年11月上旬〜翌4月下旬まで冬期閉鎖するほど積雪が多い（2025年は11/4〜2026/4/24閉鎖）。地蔵山頂駅（1,661m）より上は樹氷（スノーモンスター）が育つほど着雪・着氷が著しい開けた稜線で、10月には初雪、5月上旬まで雪の回廊や残雪が見られる。遮るもののない稜線は強風で知られるため、風のしきい値は本州の同標高の山より厳しめに設定。"
  },
  trailheads:[
    {
      name:"蔵王ロープウェイ 地蔵山頂駅（標高1,661m）",
      access:[
        {mode:"バス", line:"Z90・Z91系統 蔵王温泉線（山交バス）", from:"JR山形駅前",
         duration:"約37分",
         weekday:"山形駅前発 例: 6:50 / 7:40 / 8:40 / 9:20 / 10:20（以降ほぼ毎時発、最終18:55）", weekend:"山形駅前発 例: 6:50 / 7:40 / 8:40 / 9:20 / 9:30 / 10:20（以降ほぼ毎時発、増便あり、最終18:55）",
         season:"通年運行", url:"https://www.yamagatakotsu.jp/busroute1/z90/", sample:true},
        {mode:"ロープウェイ", line:"蔵王ロープウェイ 山麓線＋山頂線（蔵王山麓駅→樹氷高原駅→地蔵山頂駅）", from:"蔵王山麓駅（蔵王温泉）",
         duration:"乗継含め地蔵山頂駅まで約12分",
         weekday:"山麓線8:30〜17:00・山頂線8:45〜16:45（地蔵山頂駅行き上り最終は蔵王山麓駅発16:00）", weekend:"同左（繁忙期は臨時増発の場合あり）",
         season:"通年運行（2026年は5/7〜5/29山頂線点検整備のため運休、山麓線のみ営業）", url:"https://zaoropeway.co.jp/summer/guide.php", sample:true}
      ]
    },
    {
      name:"蔵王刈田山頂・蔵王レストハウス（蔵王ハイライン終点、標高約1,700m）",
      access:[
        {mode:"バス", line:"刈田山頂線（Z90・Z91の延長区間・山交バス）", from:"JR山形駅前",
         duration:"山形駅前〜蔵王温泉は約37分、蔵王温泉〜刈田山頂は延長区間のため所要時間は道路状況により変動（要確認）",
         weekday:"8月1日〜10月25日は毎日運行（発車時刻は蔵王温泉行きと共通、例: 6:50 / 7:40 / 8:40 発など）", weekend:"4月25日〜7月31日は土日祝のみ運行、8月以降は毎日運行に統合",
         season:"4月25日〜11月上旬（蔵王エコーライン冬期閉鎖に準ずる）", url:"https://www.yamagatakotsu.jp/busroute1/z90/", sample:true},
        {mode:"バス", line:"白石遠刈田線（宮城交通・土日祝運行）", from:"JR白石蔵王駅",
         duration:"約1時間33分",
         weekday:"運休（土日祝のみ運行）", weekend:"白石蔵王駅発 例: 9:38（蔵王刈田山頂11:11着）／ 蔵王刈田山頂発 例: 13:00（白石蔵王駅14:35着）",
         season:"4月25日〜11月上旬の土日祝運行（エコーライン・ハイラインの通行状況により運休の場合あり）", url:"https://www.miyakou.co.jp/pickup/zao/", sample:true},
        {mode:"バス（無料シャトル）", line:"グリーンエコー号（蔵王ライザワールド運行・予約不要）", from:"JRかみのやま温泉駅（かみのやま温泉観光案内所前バス停）",
         duration:"かみのやま温泉観光案内所前から刈田駐車場まで約1時間",
         weekday:"観光案内所前発 例: 9:20 / 13:25（蔵王ライザワールド経由、刈田駐車場着10:20 / 14:20）", weekend:"同左（毎日運行）",
         season:"2026年4月25日〜11月3日 毎日2往復運行（満車時乗車不可、悪天候時運休あり）", url:"https://www.zaoliza.co.jp/smmr/access/", sample:true},
        {mode:"有料道路", line:"蔵王ハイライン（宮城交通・マイカー／路線バス通行可）", from:"蔵王エコーライン 刈田峠",
         duration:"約5分（マイカー）",
         weekday:"7:30〜17:00（開通直後・冬期閉鎖前は8:00〜16:00に短縮）", weekend:"同左",
         season:"2026年4月24日〜11月上旬（冬期閉鎖）", url:"https://www.miyakou.co.jp/pickup/zao/", sample:true}
      ]
    },
    {
      name:"蔵王ライザスキー場 中丸山登山口（標高1,110m）",
      access:[
        {mode:"バス（無料シャトル）", line:"グリーンエコー号（蔵王ライザワールド運行・予約不要）", from:"JRかみのやま温泉駅（かみのやま温泉観光案内所前バス停）",
         duration:"約30分",
         weekday:"観光案内所前発 例: 9:20 / 13:25（蔵王ライザワールド着9:50 / 13:55）", weekend:"同左（毎日運行）",
         season:"2026年4月25日〜11月3日 毎日2往復運行", url:"https://www.zaoliza.co.jp/smmr/access/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"熊野岳避難小屋（蔵王山神社内）", elevation:1829, open:"通年開放（無人）", reservation:"—（無人避難小屋・緊急時以外使用不可、水場・トイレなし）", url:"", tel:""},
    {name:"刈田岳避難小屋", elevation:1745, open:"通年開放（無人）", reservation:"—（無人避難小屋・緊急時以外使用不可、水場・トイレなし）", url:"", tel:""}
  ],
  routes:[
    {name:"中丸山〜馬の背 縦走（蔵王ライザスキー場→熊野岳→刈田リフト上駅）", stats:"距離 約7.2km（片道） / 累積標高差 登り約930m・下り約320m / 標準コースタイム約4:36", level:"中級", note:"やまがた百名山グレーディング公表ルート。蔵王ライザスキー場→仙人橋→中丸山→熊野岳→馬の背→刈田リフト上駅と辿る、観光地化されていない静かな稜線歩き。起点と終点が異なるため、マイカーの場合は回収手段（グリーンエコー号やタクシー）を事前に計画すること。",
     popularity:2, trailhead:2, grade:{stamina:2, skill:"B", official:true, src:"やまがた百名山のグレーディング", url:"https://www.pref.yamagata.jp/050011/kurashi/shizen/hyakumeisan/grading.html"}},
    {name:"蔵王ロープウェイ 地蔵山頂駅→地蔵岳→熊野岳 往復（御釜展望）", stats:"距離 約5km（往復） / 標高差 約180m / 登り1:10・下り1:00", level:"初級", note:"ロープウェイで一気に標高1,661mまで上がり、地蔵岳・ワサ小屋跡を経て熊野岳山頂の蔵王山神社まで。稜線から御釜を見下ろせる。起終点が公表グレーディング表のルート（地蔵山頂駅〜樹氷高原駅縦走）と異なるため独自推定。御釜を囲む馬の背カルデラ（想定火口域）は火山ガスのため立入禁止区域があり、誘導看板の指示に従うこと。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"蔵王刈田山頂→刈田岳・御釜→熊野岳 往復", stats:"距離 約3.5km（往復） / 標高差 約140m / 登り0:50・下り0:40", level:"初級", note:"蔵王レストハウスから刈田岳・刈田嶺神社を経て馬の背を辿り熊野岳へ。御釜を間近に見下ろせる最短ルートで家族連れにも人気。稜線は遮るものがなく強風時は歩行注意。",
     popularity:3, trailhead:1, grade:{stamina:2, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"4月下旬に蔵王エコーライン・ハイラインが開通し「雪の回廊」が現れる。稜線にはまだ残雪が多く軽アイゼンがあると安心。ロープウェイ山頂線は点検整備による運休期間があるため要確認。",
      6:"御田ノ神湿原などでワタスゲ・コマクサをはじめ高山植物が咲き始める。梅雨の晴れ間の稜線歩きが狙い目。",
      7:"馬の背周辺でコマクサが見頃（例年下旬がピーク）。お釜のエメラルドグリーンが映える盛夏シーズンで、稜線は日差しと風を遮るものがなく防風・日焼け対策必須。",
      8:"登山者が最も多い時期。山交バスの刈田山頂線がこの時期から毎日運行になり公共交通でのアクセスがしやすい。活火山のため最新の噴火警戒レベルは気象庁の蔵王山ページ（https://www.data.jma.go.jp/vois/data/sendai/212_Zaozan/212_index.html）で確認を。",
      9:"下旬から山頂部の草紅葉が始まる。火山性地震などで噴火警戒レベルが変わることがあるため、入山前に気象庁の発表を確認。",
      10:"紅葉は例年9月下旬〜10月中旬が山頂付近の見頃。エコーラインは大混雑するため早めの便を。中旬以降は初雪の可能性あり。",
      11:"上旬に蔵王エコーライン・ハイラインが冬期閉鎖（例年11月上旬〜翌4月下旬）。以降は蔵王温泉側のロープウェイのみが山頂部への足となる（積雪期は別途冬山装備が必要）。"
    }
  }
},
{
  id:"iide", name_ja:"飯豊山", name_en:"Mt. Iide", region:"飯豊連峰", area:"東北", prefecture:"山形県・新潟県・福島県",
  elevation:2105, hyakumeizan:true,
  coords:{lat:37.854831, lon:139.70711}, forecast_elevation:2100,
  grading:{
    ridgeline:2000,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯にある飯豊連峰は残雪が非常に多く、稜線でも6月まで大きな雪渓が残る年が多い。7月以降も年により雪渓が残ることがあるため、直前の残雪・水場情報を必ず確認すること。"
  },
  trailheads:[
    {
      name:"御沢野営場・川入登山口（標高約548m）",
      access:[
        {mode:"タクシー", line:"山都タクシー", from:"JR磐越西線 山都駅",
         duration:"約40〜45分（片道）",
         weekday:"要予約・随時運行（運賃は山都タクシー 0241-38-2025 へ要確認）", weekend:"要予約・随時運行（週末・シーズン中は混み合うため早めの予約推奨）",
         season:"通年営業（かつて運行されていた季節限定の飯豊山登山アクセスバスは2026年度は運行なし。喜多方市は山都タクシーの利用を案内している）", url:"https://www.city.kitakata.fukushima.jp/soshiki/sangyo-y/43737.html", sample:true}
      ]
    },
    {
      name:"大日杉登山口・大日杉小屋（標高約606m）",
      access:[
        {mode:"タクシー", line:"めざみ交通", from:"JR米坂線 羽前椿駅／米沢駅",
         duration:"要問合せ（めざみ交通・予約制）",
         weekday:"要予約・随時運行", weekend:"要予約・随時運行",
         season:"町道「岳谷大日杉線」開通期間中（2026年度は4月27日から全面通行可能・冬期閉鎖あり）。小屋周辺は全携帯会社とも電話が通じない。", url:"https://www.town.iide.yamagata.jp/012/dainichisugikoya.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"三国岳避難小屋（三国小屋）", elevation:1560, open:"管理人常駐 7月3日〜10月11日（2026年度）。それ以外は無人開放の避難小屋。", reservation:"予約不要（避難小屋・利用協力金制、1泊3,000円）。シュラフ貸出・テントサイトなし。", url:"https://www.city.kitakata.fukushima.jp/soshiki/sangyo-y/43737.html", tel:"0241-38-3831"},
    {name:"切合小屋（切合避難小屋）", elevation:1740, open:"管理人常駐 7月3日〜10月12日（2026年度）。冬季閉鎖。", reservation:"要予約（公式サイトの問い合わせフォームより）。素泊まり3,500円、一泊二食9,000円、幕営2,000円/人ほか（2025年改定料金）。", url:"https://iide.3gaku.jp/", tel:""},
    {name:"飯豊山避難小屋（本山小屋）", elevation:2095, open:"管理人常駐 7月3日〜10月12日（2026年度）。それ以外は無人開放の避難小屋。", reservation:"予約不要（避難小屋・利用協力金制、1泊3,000円）。テントサイト約50張（1人2,000円）。", url:"https://www.city.kitakata.fukushima.jp/soshiki/sangyo-y/43737.html", tel:"0241-38-3831"},
    {name:"御西小屋（御西岳避難小屋）", elevation:1984, open:"管理人常駐 7月中旬〜8月下旬。それ以外は無人開放の避難小屋。", reservation:"予約不要（避難小屋・協力金制）。NPO法人「飯豊朝日を愛する会」が管理協力。", url:"https://yamagatayama.com/hut/%E5%BE%A1%E8%A5%BF%E5%B0%8F%E5%B1%8B/", tel:"090-5846-1858"}
  ],
  routes:[
    {name:"御沢野営場（川入）→ 三国小屋・切合小屋 経由 → 飯豊山本山 往復", stats:"標高差 約1,500m / 1泊2日（歩行時間の目安 1日目 約8時間25分・2日目 約6時間55分）", level:"上級", note:"福島県側からの最も一般的な登路。剣ヶ峰は岩場・鎖場の痩せ尾根。長丁場のため小屋泊まりでの1泊2日以上が前提。地蔵山直下の水場での給水が重要。",
     popularity:3, trailhead:0, grade:{stamina:9, skill:"C", official:false}},
    {name:"大日杉登山口 → 地蔵岳・切合小屋 経由 → 飯豊山本山 往復", stats:"標高差 約1,500m / 片道 約8時間（1泊2日が前提）", level:"上級", note:"登山口すぐのザンゲ坂以外は急坂が少なめだが、地蔵山直下まで水場がなく、種蒔山付近には残雪期に雪渓が残る。切合小屋で川入ルートと合流する。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"D", official:true, src:"やまがた百名山のグレーディング", url:"https://yamagatayama.com/wp-content/themes/yamagatayama/images/top/yamagatayama_grading_matrix03.pdf"}},
    {name:"御沢野営場（川入）→ 飯豊山本山 → 御西小屋 → 大日岳（飯豊連峰最高峰）往復", stats:"標高差 約1,550m / 2〜3泊が適当", level:"上級", note:"飯豊連峰の最高点2,128mの大日岳まで足を延ばす縦走。稜線歩きが長く、御西小屋以遠は幕営・避難小屋泊の装備と行動力が必須。天候悪化時の稜線の強風・雷に厳重注意。",
     popularity:1, trailhead:0, grade:{stamina:10, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"麓は残雪期の名残。稜線は大量の残雪が残る本格的な雪山で、アイゼン・ピッケルと読図・雪上歩行の技術が必須。山小屋は未開設。",
      6:"稜線の雪渓はなお多く残る。ヒメサユリなど花の季節が始まるが、小屋開設（7月上旬）前で残雪処理の技術が求められる。",
      7:"7月上旬から山小屋・避難小屋の管理人が順次常駐。イイデリンドウ・チングルマなどのお花畑が見頃を迎える。梅雨明け後が本番。",
      8:"夏山最盛期。稜線の雪渓はおおむね消えるが、年により沢型に残ることも。水場は年・時期により涸れることがあるため要確認。",
      9:"秋の高気圧に恵まれ安定した好天が多い。暑さも和らぎ歩きやすい時期だが、台風接近時は稜線の暴風・大雨に厳重注意。",
      10:"上旬から紅葉が進む。中旬（10月11〜12日頃）で避難小屋の管理人が撤収し無人化、以降は初雪の便りも入り始める。"
    }
  }
},
{
  id:"nishiazuma", name_ja:"西吾妻山", name_en:"Mt. Nishi-Azuma", region:"吾妻連峰", area:"東北", prefecture:"山形県・福島県",
  elevation:2035, hyakumeizan:true,
  coords:{lat:37.73814, lon:140.1408}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"豪雪地帯の吾妻連峰は根雪が11月頃から5月頃まで残り、稜線はアオモリトドマツの樹氷（スノーモンスター）で知られる。残雪期は雪庇・踏み抜きに注意。"
  },
  trailheads:[
    {
      name:"北望台（天元台高原ロープウェイ・リフト山頂、標高1,820m／米沢側）",
      access:[
        {mode:"バス", line:"米沢駅前－白布温泉－天元台湯元線（山形交通バス）", from:"JR米沢駅前",
         duration:"約45分（湯元＝天元台高原まで）",
         weekday:"米沢駅前発 例: 8:30 / 9:40 / 10:40 / 12:30 / 13:30 / 14:30 / 15:30", weekend:"米沢駅前発 例: 8:30 / 9:40 / 10:40 / 12:30 / 13:30 / 14:30 / 15:30（ほぼ1時間に1本、平日・土日祝でほぼ同ダイヤ）",
         season:"通年運行", url:"https://www.yamagatakotsu.jp/busroute5/yzs1/", sample:true},
        {mode:"ロープウェイ", line:"天元台ロープウェイ（湯元駅→天元台高原駅）", from:"湯元駅",
         duration:"約5分", weekday:"8:20〜17:00", weekend:"8:00〜17:00",
         season:"2026年6月13日〜11月3日（夏山・グリーンシーズン）", url:"https://www.green.tengendai.jp/ropeway-lift", sample:true},
        {mode:"リフト", line:"夏山リフト（天元台高原駅→北望台、3本乗継）", from:"天元台高原駅",
         duration:"約20分（3本乗継）", weekday:"8:30〜15:40（山頂側最終15:40）", weekend:"8:10〜15:40",
         season:"2026年6月13日〜10月25日（運休日あり、要公式サイト確認）", url:"https://www.green.tengendai.jp/ropeway-lift", sample:true}
      ]
    },
    {
      name:"グランデコパノラマゴンドラ山頂駅（標高約1,390m／福島側・デコ平）",
      access:[
        {mode:"シャトルバス", line:"猪苗代駅⇔グランデコ 無料シャトルバス（予約制）", from:"JR磐越西線 猪苗代駅",
         duration:"約40分",
         weekday:"猪苗代駅発 例: 10:10 / 12:10 / 15:00（前日17時までの事前予約制）", weekend:"猪苗代駅発 例: 10:10 / 12:10 / 15:00（前日17時までの事前予約制・曜日による違いの案内なし）",
         season:"2026年4月25日〜11月23日（ゴンドラ運行日は下記の通り限定）", url:"https://grandecoresort.co.jp/mountain/access/", sample:true},
        {mode:"ゴンドラ", line:"グランデコパノラマゴンドラ", from:"グランデコ山麓駅",
         duration:"要確認", weekday:"8:30〜15:00", weekend:"8:30〜15:30",
         season:"夏山: 2026年8月1日〜8月30日／紅葉: 2026年10月10日〜11月8日（天候により変更・運休あり）", url:"https://grandecoresort.co.jp/mountain/ja/ropeway/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"アルブ天元台", elevation:1350, open:"通年営業（グリーンシーズン・スキーシーズンとも、休館日は要問合せ）", reservation:"電話予約", url:"https://www.green.tengendai.jp/stay", tel:"0238-55-2236"},
    {name:"西吾妻避難小屋（無人・宿泊予約不要）", elevation:1980, open:"通年開放（無人）", reservation:"—", url:"https://yamagatayama.com/hut/%E8%A5%BF%E5%90%BE%E5%A6%BB%E5%B1%B1%E9%81%BF%E9%9B%A3%E5%B0%8F%E5%B1%8B/", tel:""}
  ],
  routes:[
    {name:"北望台～西吾妻山 往復（天元台コース）", stats:"距離 約9km（往復） / 標高差 約300m / 登り2:30・下り2:00", level:"初級〜中級", note:"ロープウェイ・リフトを乗り継ぎ北望台から人形石・かもしか展望台・大凹・梵天岩・西吾妻小屋を経て山頂へ。山頂は樹林で展望がなく、稜線の湿原（梵天岩・弁天山周辺）からの展望が定番。吾妻山は気象庁常時観測火山のため入山前に噴火警戒レベルを確認（気象庁 吾妻山: https://www.data.jma.go.jp/vois/data/sendai/213_Azumayama/213_index.html）。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"北望台～西吾妻山～若女平 縦走", stats:"距離 9.1km / 標高差 登り約540m・下り約1,500m / コースタイム目安 4.8時間", level:"中級", note:"山形県グレーディング公表ルート（起点リフト終点1,820m→西吾妻山2,035m→若女平登山口863m）。若女平登山口からの公共交通がないため、事前に送迎・車回送の計画が必要な片道ルート。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"やまがた百名山のグレーディング", url:"https://yamagatayama.com/wp-content/themes/yamagatayama/images/top/yamagatayama_grading_list02.pdf"}},
    {name:"グランデコ～西大巓～西吾妻山 往復（デコ平コース）", stats:"距離 約11km（往復・推定） / 標高差 約650m / 登り3:00・下り2:30（公式サイトの片道目安180分を基に往復を推定）", level:"中級〜上級", note:"グランデコパノラマゴンドラで標高約1,390mまで上がり、ブナ・オオシラビソ林を抜けて西大巓の稜線に出た後、湿原の木道を経て西吾妻山頂へ。ゴンドラの運行期間が夏は8月のみ・紅葉期は10月中旬〜11月上旬のみと短いため、事前に公式サイトで運行日を要確認。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。ロープウェイ・リフトは運休中（例年6月中旬営業開始）で、稜線には雪田が残る。",6:"中旬に天元台ロープウェイ・リフトが夏山運行を開始（2026年は6/13〜）。梅雨時は稜線が濃霧・強風になりやすい。",7:"湿原のチングルマ・ワタスゲなど高山植物が見頃。梅雨明け後が狙い目。",8:"夏山シーズン本番。グランデコ側のゴンドラは例年8月のみ運行（2026年は8/1〜8/30）。",9:"紅葉が始まる。台風接近時は稜線の強風・雷雨に厳重注意。",10:"紅葉のピーク（例年10月上旬〜中旬）。天元台リフトは10/25、ロープウェイは11/3で夏山営業終了（2026年）。グランデコ側は紅葉運行（10/10〜11/8）で再開。下旬は初雪の可能性あり。",11:"積雪期入り。天元台側はロープウェイ・リフトとも運休、グランデコ側も11/8で運行終了。以降は冬装備必須の本格的な雪山となる。"}
  }
},
{
  id:"adatara", name_ja:"安達太良山", name_en:"Mt. Adatara", region:"安達太良連峰", area:"東北", prefecture:"福島県",
  elevation:1700, hyakumeizan:true,
  coords:{lat:37.6211, lon:140.2879}, forecast_elevation:1650,
  grading:{
    ridgeline:1650,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"標高の割に森林限界が低い独立峰で、稜線は10月から雪雲の通り道になりやすい。谷筋・北面は5月まで残雪や凍結が残ることがあり軽アイゼン等の携行を検討。"
  },
  trailheads:[
    {
      name:"奥岳登山口（あだたら高原スキー場・標高約950m）",
      access:[
        {mode:"バス", line:"奥岳線［JICA・NTC経由］（福島交通）", from:"JR二本松駅前",
         duration:"約45分",
         weekday:"二本松駅前発 例: 8:13（奥岳8:58着）。奥岳発 例: 16:15（二本松駅前16:59着）。1日1往復のみ", weekend:"要確認（公式サイトで土休日ダイヤを確認）",
         season:"通年運行（本数が少なく積雪状況により運休の場合あり、詳細は要確認）", url:"https://busget.fukushima-koutu.co.jp/fromto/result/1312/990/", sample:true},
        {mode:"ロープウェイ", line:"あだたら山ロープウェイ（山頂駅＝薬師岳・標高1,350m）", from:"山麓駅（標高950m）",
         duration:"約10分", weekday:"8:30始発、上り最終15:50・下り最終16:20", weekend:"同左（混雑時は運行状況要確認）",
         season:"2026年は4月11日〜11月23日が通常運行日（荒天時・点検日は運休あり、詳細は公式運行カレンダー参照）", url:"https://www.adatara-resort.com/green/about/index.html", sample:true}
      ]
    },
    {
      name:"塩沢登山口（塩沢スキー場・標高約840m）",
      access:[
        {mode:"車", line:"路線バスなし。県道129号（塩沢石筵線）沿い", from:"JR二本松駅・二本松市街",
         duration:"要確認（自家用車のみ、二本松駅から車で約40分が目安）",
         weekday:"要確認", weekend:"要確認",
         season:"通年（積雪期は路面凍結・積雪に注意）", url:"https://www.nihonmatsu-kanko.jp/?p=462", sample:true}
      ]
    }
  ],
  huts:[
    {name:"くろがね小屋", elevation:1350, open:"建て替え工事のため休業中（2023年3月31日〜。福島県が整備、2028年度末頃 完成予定・要最新確認）", reservation:"休業中のため利用不可（建物・敷地内は立入禁止）", url:"https://www.tif.ne.jp/kuroganegoya/", tel:""},
    {name:"鉄山避難小屋（無人・避難小屋）", elevation:1677, open:"通年無人開放（水場・トイレなし、緊急避難目的）", reservation:"予約不要", url:"https://www.pref.fukushima.lg.jp/sec/16035b/hinangoya-04-tetsuzan.html", tel:""}
  ],
  routes:[
    {name:"奥岳コース（ロープウェイ・薬師岳経由）", stats:"距離 約2.5km（ロープウェイ山頂駅から）/ 標高差 約350m / 登り1:25・下り1:00", level:"初級", note:"ロープウェイで8合目・薬師岳（1,350m）まで一気に高度を稼げる、最も利用者が多い定番コース。仙女平分岐で表（県民の森）コースと合流。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"勢至平コース（くろがね小屋跡経由）", stats:"距離 約7km / 標高差 約750m / 登り3:05・下り2:10", level:"中級", note:"奥岳登山口からくろがね小屋（建替工事のため休業中・立入禁止）を経て峰の辻へ。峰の辻から沼ノ平方面は有毒な火山ガス発生地帯につき立入禁止。噴火警戒レベルは気象庁サイトで要確認 https://www.data.jma.go.jp/vois/data/sendai/214_Adatarayama/214_index.html",
     popularity:2, trailhead:0, grade:{stamina:5, skill:"B", official:false}},
    {name:"塩沢コース（湯川渓谷・僧悟台経由）", stats:"距離 約6.5km / 標高差 約860m / 登り3:15・下り2:20", level:"上級", note:"安達太良山で唯一、沢に沿って登るコース。三階滝・八幡滝・霧降り滝が連続する湯川渓谷を通る。渡渉・鎖場があり増水時は注意。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"B", official:false}},
    {name:"沼尻コース（沼ノ平火口壁 周回）", stats:"距離 約7km / 標高差 約750m / 登り3:55・下り2:45", level:"中〜上級", note:"猪苗代町・沼尻登山口から沼ノ平火口壁の外周を歩く。周辺は有毒な火山ガス発生地帯のため案内標識・立入禁止区域を厳守。噴火警戒レベルは気象庁サイトで要確認 https://www.data.jma.go.jp/vois/data/sendai/214_Adatarayama/214_index.html",
     popularity:1, trailhead:null, grade:{stamina:5, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{
      5:"残雪期。ロープウェイ山頂駅周辺や北面にまだ雪が残ることがあり、新緑が美しい時期。",
      6:"高山植物が咲き始め、梅雨の晴れ間が狙い目。",
      7:"沼ノ平のガレ場が輝く盛夏。火山ガス警戒区域には絶対に立ち入らないこと。",
      8:"日差しが強い盛夏。稜線は日焼け・熱中症対策を。午後は雷雲の発達に注意。",
      9:"下旬から紅葉が始まり、くろがね小屋周辺から色づく。",
      10:"紅葉が見頃（例年上旬〜中旬）。ロープウェイが大変混雑するため早朝便がおすすめ。",
      11:"初雪の便り。稜線は積雪・凍結が始まるため軽アイゼン等の携行を検討。"
    }
  }
},
{
  id:"bandai", name_ja:"磐梯山", name_en:"Mt. Bandai", region:"会津", area:"東北", prefecture:"福島県",
  elevation:1816, hyakumeizan:true,
  coords:{lat:37.6011, lon:140.0722}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"活火山特有の裸地が多く風を遮るものが少ない稜線。登山口へのアクセス路（磐梯山ゴールドライン）は例年11月中旬〜4月下旬が冬期閉鎖で、裏磐梯側は日本有数の豪雪地帯のためGW明けまで登山道に残雪が残ることがある。"
  },
  trailheads:[{
    name:"八方台登山口（標高1,194m）",
    access:[
      {mode:"タクシー", line:"磐梯観光タクシー", from:"JR磐越西線 猪苗代駅",
       duration:"約30分（距離24.9km、猪苗代観光協会公式データでは運賃目安9,410円）",
       weekday:"随時（要予約推奨）", weekend:"同左",
       season:"磐梯山ゴールドラインの冬期閉鎖（例年11月中旬〜4月下旬）を除く期間。猪苗代駅から各登山口への路線バスはない（磐梯山周辺観光推進連絡協議会「登山マップ」に明記）。", url:"https://www.bantaku.com/", sample:true}
    ]
  },{
    name:"猪苗代登山口（絶景・猪苗代スキー場内、標高約700m）",
    access:[
      {mode:"タクシー", line:"磐梯観光タクシー", from:"JR磐越西線 猪苗代駅",
       duration:"約10分（距離5.1km、猪苗代観光協会公式データでは運賃目安2,300円）",
       weekday:"随時（要予約推奨）", weekend:"同左",
       season:"通年（積雪期は道路状況要確認）。猪苗代駅から各登山口への路線バスはない。", url:"https://www.bantaku.com/", sample:true},
      {mode:"リフト", line:"登山者向け夏季リフト（絶景・猪苗代スキー場）", from:"スキー場ベースエリア",
       duration:"約20分で標高1,100mの降り場まで",
       weekday:"7:30〜15:00（上り最終14:30、スカイ第6ペアは上り最終14:10）", weekend:"同左（混雑時あり）",
       season:"2026年は7/11(土)〜10/25(日)の土日祝・指定日運行、7/18(土)〜8/31(月)は毎日運行", url:"https://www.inawashiro-ski.com/gelande/climbing/", sample:true}
    ]
  }],
  huts:[
    {name:"弘法清水小屋", elevation:1630, open:"4月下旬〜11月中旬（残雪状況により変動）", reservation:"予約不要（休憩所・売店、宿泊不可）", url:"https://koboshimizu.com/", tel:""},
    {name:"岡部小屋（弘法清水）", elevation:1630, open:"4月下旬〜11月中旬（残雪状況により変動）", reservation:"予約不要（休憩所・売店、宿泊不可）", url:"", tel:""}
  ],
  routes:[
    {name:"八方台登山口 往復（弘法清水経由）", stats:"距離 往復約7km / 標高差 約620m / 登り2:15・下り1:40", level:"初級", note:"6コース中もっとも標高差が小さく最短時間で登れる定番ルート。中ノ湯跡から尾根伝いに弘法清水へ。沼ノ平や山体北側火口付近には火山ガス発生箇所・警報サイレンがあり、鳴動時は速やかに下山（磐梯山周辺観光推進連絡協議会「登山マップ」より）。現在は噴火予報（噴火警戒レベル1）だが火口周辺で噴気・火山ガスの活動が続いており、気象庁で最新情報を要確認: https://www.data.jma.go.jp/vois/data/sendai/215_Bandaisan/215_index.html",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false}},
    {name:"猪苗代登山口 往復（沼ノ平経由）", stats:"標高差 約1,120m / 登り3:30・下り2:30（夏季リフト区間の利用で登り約2:00・下り約1:40に短縮可）", level:"中級", note:"スキー場ゲレンデを登り沼ノ平を経て弘法清水で他コースと合流する健脚向けルート。登山者向け夏季リフト（片道大人800円）を使えば標高1,100mまで時短できる。噴火警戒レベルは気象庁で要確認: https://www.data.jma.go.jp/vois/data/sendai/215_Bandaisan/215_index.html",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"B", official:false}},
    {name:"八方台⇔猪苗代 縦走（磐梯山山頂経由）", stats:"行動時間 目安約4時間45分（八方台→山頂2:15＋山頂→猪苗代登山口2:30、逆コースも可）", level:"中級", note:"起点と終点が異なるため、タクシー回送や2台デポなど事前の交通計画が必須（猪苗代駅から各登山口への路線バスはない）。山頂からは猪苗代湖と裏磐梯の噴火壁を一度に見渡せる。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      4:"磐梯山ゴールドラインは例年4月下旬に冬期閉鎖解除（2026年は4/21再開予定）。再開直後は登山道にまだ残雪が多い。",
      5:"再開通後もゴールドラインは5月上旬頃まで夜間通行止め（17:00〜7:00）が続く。残雪期のため軽アイゼン推奨、弘法清水小屋も営業を開始する。",
      6:"新緑が濃くなる時期。梅雨の晴れ間を狙いたい。",
      7:"高山植物が見頃。猪苗代スキー場の夏季リフトが7/18から8/31まで毎日運行になる。",
      8:"登山者が最も多い時期。午後は雷雨が発生しやすいため早朝出発を心がける。",
      9:"秋の気配。紅葉と夏の名残が混在する。",
      10:"裏磐梯側の紅葉は中旬〜下旬が見頃で大混雑。夏季リフトの運行は10/25まで。",
      11:"中旬に弘法清水小屋が閉店し、磐梯山ゴールドラインも中旬（2025年は11/14）に冬期閉鎖となる。初雪・路面凍結に注意。"
    }
  }
},
{
  id:"aizukoma", name_ja:"会津駒ヶ岳", name_en:"Mt. Aizu-Komagatake", region:"会津", area:"東北", prefecture:"福島県",
  elevation:2133, hyakumeizan:true,
  coords:{lat:37.0476, lon:139.3538}, forecast_elevation:2080,
  grading:{
    ridgeline:2080,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"檜枝岐村は特別豪雪地帯。中門岳へ続く稜線の湿原は6月中旬頃まで残雪が残り、10月には初雪もある。冬は山スキー・バックカントリーのメッカになるほどの豪雪地帯で、夏道での登山適期は6月中旬〜10月中旬に限られる。"
  },
  trailheads:[{
    name:"滝沢登山口（標高約1,120m）",
    access:[
      {mode:"バス", line:"桧枝岐線（会津乗合自動車＝会津バス）", from:"会津鉄道 会津田島駅",
       duration:"約1時間18分（「駒ヶ岳登山口」バス停下車、林道を歩いて約30分で階段のある滝沢登山口）",
       weekday:"会津田島駅発 例: 10:00 / 11:00 / 12:50 / 14:20（駒ヶ岳登山口 11:18 / 12:18 / 14:08 / 15:38 着）", weekend:"会津田島駅発 例: 10:00 / 11:00 / 12:50 / 14:20（土日祝日も同ダイヤ・繁忙期は増便の場合あり要確認）",
       season:"会津田島駅〜檜枝岐間は通年運行（2026/5/1ダイヤ改正）。檜枝岐から先の尾瀬御池〜尾瀬沼山峠間は5/23〜10/25運行（積雪状況により変更あり）", url:"https://www.aizubus.com/rosen/jikokuhyou", sample:true}
    ]
  }],
  huts:[
    {name:"駒の小屋", elevation:2060, open:"4月下旬〜10月下旬（例年。年により変動あり・要問合せ）", reservation:"電話予約制（毎年4月1日7時より受付開始）。素泊まり・寝具付き、食事提供なし（自炊）。電気・水道なしのランプの小屋", url:"https://komanokoya.com/", tel:"080-2024-5375"}
  ],
  routes:[
    {name:"滝沢登山口→駒の小屋→会津駒ヶ岳→中門岳 往復", stats:"標高差 約1,000m / 登り4:20（駒の小屋まで4:00＋山頂20分）・下り3:20（目安）", level:"中級", note:"檜枝岐村を代表する百名山ルート。駒の小屋を過ぎると湿原が広がり、山頂から中門岳へは池塘の点在する木道の稜線散歩。日帰りも駒の小屋泊まりも可能。水場は登山口から約2時間の1か所のみ（それ以降は水場なし）。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"滝沢登山口", to:"水場", up:"2:00"},
       {from:"水場", to:"駒の小屋", up:"2:00"},
       {from:"駒の小屋", to:"会津駒ヶ岳山頂", up:"0:20"},
       {from:"会津駒ヶ岳山頂", to:"中門岳", up:"1:00"}
     ], sample:true},
    {name:"滝沢登山口→会津駒ヶ岳→中門岳→大津岐峠→キリンテ登山口（富士見林道コース）", stats:"距離 約18km / 1泊2日", level:"中級", note:"駒の小屋で1泊し、中門岳から大津岐峠を経てキリンテへ下る縦走路。大津岐峠からキリンテ登山口までは標高差約900mを一気に下る長い下降。下山後はキリンテ発のバスで会津田島方面へ戻る。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"B", official:false},
     segments:[
       {from:"滝沢登山口", to:"駒の小屋", up:"4:00"},
       {from:"駒の小屋", to:"会津駒ヶ岳山頂", up:"0:20"},
       {from:"駒の小屋", to:"大津岐峠", down:"1:30"}
     ], sample:true},
    {name:"尾瀬御池・大杉岳経由 駒の小屋", stats:"駒の小屋まで約6時間", level:"上級", note:"尾瀬御池バス停から大杉岳を経由して駒の小屋へ至るロングルート。滝沢ルートより静かだが行動時間が長く、下山後は同じ檜枝岐線バスで戻る。",
     popularity:1, trailhead:null, grade:{stamina:7, skill:"B", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"残雪期。夏道が雪に埋もれる区間が多く、経験者・アイゼン携行向け。",6:"中旬から夏道が開通し登山適期に。ワタスゲ・チングルマなど湿原の花が咲き始める。",7:"檜枝岐村の山開きは例年7月上旬。上旬は稜線に残雪が残ることもある。中旬以降が本格的な花のシーズン。",8:"高山植物と池塘の湿原歩きが最盛期。中門岳への木道散歩が特に人気。",9:"下旬から紅葉が始まる。",10:"中旬が紅葉の見頃。下旬には初雪の便りも届き駒の小屋も閉まる。",11:"初冬。降雪が本格化し豪雪地帯らしい積雪に。",12:"積雪期。無雪期登山道は雪に埋もれ、山スキー・バックカントリーの領域になる。",1:"厳冬期。特別豪雪地帯で積雪は深く、雪崩リスクの高い斜面もある。",2:"厳冬期。日照時間が短く気象条件も厳しい。",3:"残雪期の始まり。まだ積雪は多く冬山装備が必要。",4:"下旬から駒の小屋が営業開始。登山口周辺にはまだ雪が残ることが多い。"}
  }
},
{
  id:"echigokoma", name_ja:"越後駒ヶ岳", name_en:"Mt. Echigo-Koma (Uonuma-Koma)", region:"越後三山", area:"上信越・尾瀬", prefecture:"新潟県",
  elevation:2003, hyakumeizan:true,
  coords:{lat:37.1236, lon:139.0752}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯（越後三山）。登山口へ通じる国道352号（枝折峠）は例年11月上旬〜6月下旬まで冬期閉鎖になり、稜線の残雪は7月にずれ込むこともある。独立峰的に立つ山容のため稜線は風を強く受けやすく、風予報は特に重視。"
  },
  trailheads:[{
    name:"枝折峠登山口（標高1,059m）",
    access:[
      {mode:"車", line:"自家用車・レンタカー（国道352号 樹海ライン）", from:"関越自動車道 小出IC",
       duration:"約40〜50分",
       weekday:"通行可（冬期閉鎖・災害復旧工事等による通行止め区間を除く）", weekend:"同左。紅葉期（9月中旬〜10月）の土日祝は早朝から枝折峠駐車場（約50台）が満車になりやすい",
       season:"国道352号は例年11月上旬〜6月下旬が冬期閉鎖（2026年は災害復旧工事のため開通が遅れ、大湯温泉〜枝折峠は6/19、枝折峠〜銀山平は6/26 15:00に通行可能化。区間により通行止めが続く年もあるため要確認）", url:"https://www.pref.niigata.lg.jp/site/uonuma-seibi/dourojouhou.html", sample:true},
      {mode:"シャトルバス", line:"うおぬま滝雲シャトルバス（魚沼市観光協会・秋の臨時運行）", from:"白銀の湯駐車場 / 交流センターユピオ",
       duration:"枝折峠駐車場まで約15〜20分", weekday:"運行なし（土日祝日のみ）",
       weekend:"滝雲鑑賞向けの早朝便が中心（例年始発4:00頃）。登山者の下山用に枝折峠発の臨時便（例年15:00前後発・1日1本）が設定される年あり。時刻は年度により変動するため要確認",
       season:"例年9月中旬〜10月下旬の土日祝のみ（2026年度の運行日程・時刻は例年夏〜秋に発表、本稿執筆時点では未発表のため要確認）", url:"https://www.iine-uonuma.jp/", sample:true}
    ]
  }],
  huts:[
    {name:"駒の小屋（越後駒ヶ岳避難小屋）", elevation:1970, open:"通年開放（避難小屋）。管理人常駐は例年5月中旬〜10月中旬の土日、8月・10月は平日も常駐", reservation:"避難小屋のため事前予約不可。利用協力金1人2,000円（毛布・銀マット少量あり、水場2箇所）", url:"https://www.city.uonuma.lg.jp/page/1013581.html", tel:"025-792-9754"}
  ],
  routes:[
    {name:"枝折峠 往復（明神峠・小倉山経由）", stats:"距離 約14.5km / 標高差 約1,280m / 登り4:40・下り3:10（歩行時間計7.8時間）", level:"中級", note:"越後三山を代表する定番コース。歩行時間が長いため駒の小屋での前後泊も一般的。枝折峠は「滝雲」（雲海の滝）の名所として知られ、秋の早朝は特に混雑する。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"新潟 山のグレーディング（越後駒ヶ岳・枝折峠登山口）", url:"https://www.pref.niigata.lg.jp/site/opendata/1356812341916.html"}},
    {name:"越後三山縦走（枝折峠→越後駒ヶ岳→中ノ岳→八海山→ロープウェイ山頂駅）", stats:"2〜3泊 / 縦走距離は行程により変動", level:"上級", note:"越後駒ヶ岳・中ノ岳・八海山を結ぶ本格縦走路。痩せ尾根・岩場を含み天候急変時の撤退判断が重要。中ノ岳避難小屋・千本檜小屋等を利用した計画が必要。",
     popularity:1, trailhead:0, grade:{stamina:9, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      6:"国道352号の冬期閉鎖明け直後。年によっては下旬まで枝折峠まで車で入れず、稜線には残雪も残る。融雪期の増水にも注意。",
      7:"梅雨明け後が登山本番。午後の雷雨に注意。",
      8:"盛夏の最盛期。日差しが強く稜線は遮るものが少ないため熱中症・脱水対策を。",
      9:"初秋。下旬から枝折峠で早朝の「滝雲」が見られる日が増える。",
      10:"紅葉と滝雲のハイシーズンで最も混雑。土日祝は「うおぬま滝雲シャトルバス」運行、枝折峠駐車場は早朝満車が常態化。",
      11:"初雪の便り。国道352号は例年11月上旬から冬期閉鎖に入るため通行状況を要確認。"
    }
  }
},
{
  id:"hiragatake", name_ja:"平ヶ岳", name_en:"Mt. Hiragatake", region:"越後三山・奥只見", area:"上信越・尾瀬", prefecture:"新潟県・群馬県",
  elevation:2141, hyakumeizan:true,
  coords:{lat:37.0019, lon:139.1708}, forecast_elevation:2100,
  grading:{
    ridgeline:2000,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"奥只見・尾瀬に隣接する日本有数の豪雪地帯。山頂台地の残雪は例年7月上旬まで残り、アクセス道路（国道352号・奥只見シルバーライン）の冬期閉鎖も6月上旬まで続く。残雪期はアイゼン・ピッケルと地図読み技術が必須。"
  },
  trailheads:[{
    name:"鷹ノ巣登山口（標高846m）",
    access:[
      {mode:"バス", line:"南越後観光バス（尾瀬⇔魚沼ルート）", from:"JR上越新幹線 浦佐駅東口",
       duration:"奥只見ダムまで約1時間15分",
       weekday:"運行なし（2026年は8/13〜16のみ例外運行、要予約）", weekend:"浦佐駅東口発 例: 7:45／13:40 → 奥只見ダム着 9:00／15:00（土日祝運行、要予約）",
       season:"2026年は6/1〜11/3の土日祝日と8/13〜16に運行（一部便は10/12まで。予約は魚沼市観光協会 025-792-7300、利用3日前まで）", url:"https://www.minamiechigo.co.jp/", sample:true},
      {mode:"定期船", line:"奥只見湖遊覧船 尾瀬口コース（奥只見観光）", from:"奥只見ダム",
       duration:"片道約40分（尾瀬口下船後、鷹ノ巣登山口まで徒歩約60分）",
       weekday:"運行なし（2026年は6/1〜5・7/13〜17・8/10〜14のみ平日も例外運行、要予約）", weekend:"奥只見発 例: 9:25／15:20 → 尾瀬口着 10:05／16:05（土日祝運行、要予約）",
       season:"2026年は6/1〜10/15運行（土日祝中心、上記例外日あり。予約は魚沼市観光協会 025-792-7300）", url:"http://www.okutadami.co.jp/boat/route_ozeguchi.html", sample:true},
      {mode:"車", line:"関越自動車道 魚沼ICから国道291号・県道50号（奥只見シルバーライン）・国道352号 経由", from:"関越自動車道 魚沼IC",
       duration:"奥只見シルバーライン経由で銀山平まで約40分、銀山平から鷹ノ巣登山口まで約1時間（駐車場は普通車20台、大型車不可）",
       weekday:"—", weekend:"—",
       season:"例年6月上旬〜10月下旬（シルバーラインは1月〜4月上旬、国道352号 銀山平〜鷹ノ巣間は10月下旬〜6月上旬が冬期通行止め）", url:"https://niigata-kankou.or.jp/spot/7592", sample:true}
    ]
  },{
    name:"中ノ岐登山口（プリンスルート、中ノ岐林道終点）",
    access:[
      {mode:"送迎バス", line:"銀山平温泉 宿泊施設の専用送迎（例: 奥只見山荘）", from:"銀山平温泉",
       duration:"片道約1時間30分（悪路の林道。一般車・徒歩での進入は不可）",
       weekday:"宿泊者専用・電話予約制。例: 宿発 3:50〜4:00 → 登山口発（登山開始）5:30（奥只見山荘公表の標準行程）", weekend:"同左",
       season:"例年7月中旬〜10月下旬（当年の送迎期間・開始終了日は各宿に要確認）", url:"https://www.okutadami.jp/", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"鷹ノ巣登山口 往復（台倉山・池ノ岳経由）", stats:"距離 往復約22.6km / 標高差 約1,300m（鷹ノ巣846m→山頂2,141m）/ 往復コースタイム 約11.8時間（新潟県グレーディング公表値・登下り内訳の公表なし）", level:"上級", note:"日本百名山屈指のロングデイハイク。山中に小屋はなく幕営指定地もない。幕営は緊急ビバーク以外禁止のため、必ず日帰り装備・早朝出発で臨むこと。台倉山〜池ノ岳間の水場（台倉清水など）は渇水期に涸れることがあるため要確認。山頂は広大な湿原・池塘地帯で、濃霧時は道迷いに注意。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"D", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/site/opendata/1356812341916.html"}},
    {name:"中ノ岐登山口 往復（プリンスルート）", stats:"標高差 約1,200m（中ノ岐登山口→山頂2,141m、概算）/ 登り約4:00・下り約2:30（宿泊施設の送迎登山プランの標準行程）", level:"中級", note:"昭和61年に皇太子（現・上皇陛下）が登られたことに由来する通称「プリンスルート」。鷹ノ巣尾根ルートより大幅に短く日帰り向きだが、中ノ岐林道は一般車通行止め・関係者専用ゲートがあり、銀山平の宿泊施設が提供する宿泊者専用送迎バスでしか登山口に入れない。ネット予約不可、電話予約のみ。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{6:"国道352号 銀山平〜鷹ノ巣間の冬期通行止めが明けるのは例年6月上旬。山頂台地にはまだ多量の残雪が残り、日帰り登山には早すぎる時期。",7:"山開きは例年7月上旬（2026年は7/5開催予定）。台倉山〜池ノ岳付近に残雪が残ることがあり雪渓のトラバースに注意。日照時間が長いこの時期が最有力。",8:"盛夏。山頂の湿原でヒメシャクナゲ・ワタスゲなど高山植物が見頃。日帰り最難関ルートのため早朝出発必須、午後の雷雨（夕立）に注意。",9:"台風シーズン。稜線に遮るものがなく風雨の影響を強く受けるため、天気予報を特に重視。",10:"紅葉は中旬頃が見頃。路線バスの土日祝運行は11/3まで続くが一部便は10/12で終了、定期船も10月中旬で運行終了のため、中旬以降は公共交通でのアクセス手段が減る。",11:"国道352号が冬期通行止めとなり、事実上入山不可。"}
  }
},
{
  id:"makihata", name_ja:"巻機山", name_en:"Mt. Makihata", region:"越後三山", area:"上信越・尾瀬", prefecture:"新潟県・群馬県",
  elevation:1967, hyakumeizan:true,
  coords:{lat:36.9786, lon:138.9644}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯。井戸尾根上部でも6月頃まで残雪が残り、山頂の池塘・草原地帯には融雪の遅い雪田が点在する。ヌクビ沢・割引沢は残雪のため例年8月末頃まで入山禁止（下山使用も通年禁止）。"
  },
  trailheads:[{
    name:"桜坂駐車場（標高730m）",
    access:[
      {mode:"タクシー", line:"六日町駅前〜桜坂駐車場（銀嶺タクシーほか市内タクシー会社）", from:"JR上越線 六日町駅",
       duration:"約25分",
       weekday:"要予約・時間帯問わず随時（運賃は距離制のため要確認）", weekend:"同左",
       season:"通年", url:"http://www.ginreitaxi.co.jp/", sample:true},
      {mode:"AIオンデマンド交通", line:"南魚沼市AIオンデマンド交通「MOSS」定時定路線（旧・南越後観光バス「沢口・清水〜六日町線」を2026年4月より引継ぎ）", from:"JR上越線 六日町駅",
       duration:"約30分（清水地区まで。桜坂駐車場へはさらに徒歩約40分）",
       weekday:"平日の朝・夕の時間帯に運行（旧路線バスの朝夕便を引継ぎ）。発車時刻はアプリ・LINE・コールセンターで要確認", weekend:"土日祝・年末年始は運休",
       season:"通年（2026年4月1日運行開始。旧路線バスは2026年3月31日で廃止）", url:"https://www.city.minamiuonuma.niigata.jp/docs/ondemand-koutsu.html", sample:true}
    ]
  }],
  huts:[
    {name:"巻機山避難小屋（無人・宿泊不可）", elevation:1830, open:"通年開放（無人・寝具なし・緊急避難用）", reservation:"不要（テント泊・幕営は禁止）", url:"", tel:"025-773-6665"}
  ],
  routes:[
    {name:"井戸尾根コース 往復", stats:"距離 約10.9km（往復）/ 標高差 約1,240m / 登り4:30・下り3:30", level:"中級", note:"巻機山の標準ルート。2〜4合目は降雨時に粘土質の泥で滑りやすい。山頂部（御機屋）から先は池塘と草原の広がるなだらかな地形。牛ヶ岳・割引岳まで足を延ばす場合は往復プラス1時間程度みておく。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/uploaded/attachment/456447.pdf"},
     segments:[
       {from:"桜坂駐車場", to:"焼松（5合目）", up:"1:30"},
       {from:"焼松（5合目）", to:"六合目展望台", up:"1:10"},
       {from:"六合目展望台", to:"前巻機山", up:"1:40"},
       {from:"前巻機山", to:"巻機山避難小屋", up:"0:10"},
       {from:"巻機山避難小屋", to:"巻機山山頂", up:"0:40"}
     ], sample:true},
    {name:"【周】割引沢ルート〜井戸尾根コース（割引岳経由）", stats:"距離 約10.5km（周回）/ 標高差 約1,240m / 歩行時間 約8:06", level:"上級", note:"割引沢を詰めて割引岳へ登り、井戸尾根で下山する沢主体の周回ルート。残雪のため例年8月末頃まで入山禁止。割引沢ルートは下山使用禁止（登り専用）。沢歩き・渡渉の技術が必要で一般登山者には勧めない。",
     popularity:1, trailhead:0, grade:{stamina:4, skill:"D", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/uploaded/attachment/456447.pdf"}},
    {name:"【周】ヌクビ沢ルート〜井戸尾根コース（天狗尾根分岐）", stats:"距離 約10.8km（周回）/ 標高差 約1,240m / 歩行時間 約8:18", level:"上級", note:"ヌクビ沢を詰める上級者向けルート。残雪のため例年8月末頃まで入山禁止。ヌクビ沢ルートは下山使用禁止（登り専用）。天狗尾根も同様に上級者向けで下山には使えず、一般登山者には勧めない。",
     popularity:1, trailhead:0, grade:{stamina:4, skill:"D", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/uploaded/attachment/456447.pdf"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"例年5月第4日曜日に山開き。井戸尾根上部にはまだ残雪が多く残る年も多い。",6:"残雪が徐々に消え、高山植物が咲き始める。ヌクビ沢・割引沢は残雪のため8月末頃まで入山禁止。",7:"お花畑が見頃。池塘群と草原が広がる山頂部の景観が美しい時期。",8:"夏山シーズン本番。下旬にヌクビ沢・割引沢の入山禁止が解除される年もあるが現地の最新情報を要確認。",9:"秋の花が咲き、下旬から紅葉が始まる。",10:"紅葉のピーク（上旬〜中旬）。下旬は初雪の可能性があり装備に注意。",11:"初雪と強風の季節。積雪により一般登山道としての利用は難しくなる。"}
  }
},
{
  id:"hiuchigatake", name_ja:"燧ヶ岳", name_en:"Mt. Hiuchigatake", region:"尾瀬", area:"上信越・尾瀬", prefecture:"福島県",
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
},
{
  id:"amakazari", name_ja:"雨飾山", name_en:"Mt. Amakazari", region:"頸城山塊", area:"上信越・尾瀬", prefecture:"長野県・新潟県",
  elevation:1963, hyakumeizan:true,
  coords:{lat:36.9021, lon:137.9626}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"小谷村・糸魚川市は日本有数の豪雪地帯。標高の割に積雪期が長く、荒菅沢や笹平の岩場には残雪が遅くまで残ることがある一方、10月には初雪も。残雪期はアイゼン・ピッケル必携。荒菅沢の徒渉は増水時に危険。"
  },
  trailheads:[
    {
      name:"雨飾高原登山口（雨飾高原キャンプ場・標高1,150m）",
      access:[
        {mode:"バス", line:"雨飾高原線（小谷村営バス／運行：アルピコ交通）", from:"JR大糸線 南小谷駅前",
         duration:"約41分",
         weekday:"南小谷駅前発 例: 7:30 / 10:06 / 12:20 / 15:03 / 16:53（いずれも雨飾高原まで直通、運賃740円）",
         weekend:"平日と同一ダイヤ（土・日・祝日も同じ運行）",
         season:"2026年4月1日〜11月30日（冬期運休）", url:"https://www.vill.otari.nagano.jp/soshiki/kankochiikishinko-kankoshoko/gyomu/9/1/163.html", sample:true}
      ]
    },
    {
      name:"雨飾山荘登山口（雨飾温泉・梶山新湯・標高約880m）",
      access:[
        {mode:"予約制ジャンボタクシー", line:"雨飾山・戸倉山登山タクシー（有限会社糸魚川タクシー）", from:"北陸新幹線 糸魚川駅アルプス口 / JR大糸線 根知駅",
         duration:"糸魚川駅から約1時間",
         weekday:"土・日・祝日のみ運行。糸魚川駅アルプス口発 例: 7:10 / 9:20（根知駅 7:30 / 9:40）。復路は雨飾山荘発 例: 8:20 / 16:10（根知駅 8:50 / 16:40）",
         weekend:"同上（土日祝日運行のため平日設定なし）",
         season:"2026年7月25日〜10月12日の土・日・祝日。利用日前日正午までの事前予約制", url:"https://www.itoigawataxi.com/amakazari", sample:true}
      ]
    }
  ],
  huts:[
    {name:"雨飾山荘（雨飾温泉）", elevation:880, open:"季節営業（例年5月中旬〜11月中旬、要問合せ）", reservation:"電話予約", url:"https://www.amakazarisanso.com/", tel:"090-9016-3212"},
    {name:"小谷温泉 大湯元 山田旅館", elevation:850, open:"通年営業", reservation:"電話予約（3ヶ月前から受付）", url:"https://otari-onsen.net/", tel:"0261-85-1221"}
  ],
  routes:[
    {name:"雨飾高原コース（小谷温泉・雨飾高原キャンプ場 往復）", stats:"標高差 約810m（雨飾高原登山口1,150m起点）/ 登り4:00・下り3:30", level:"中級", note:"荒菅沢からの急登の先、梯子の岩場を登ると金山との分岐点である笹平。笹平からは雨飾山荘（梶山新湯）への分岐もある。ルート上にトイレはなく、荒菅沢手前に携帯トイレ専用ブースあり（携帯トイレ販売500円）。9月下旬〜10月下旬の土日祝は駐車場満車時に雨飾荘より上部が通行止めとなる交通規制の対象期間。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"雨飾高原登山口", to:"荒菅沢", up:"2:00", down:"1:40"},
       {from:"荒菅沢", to:"笹平", up:"1:20", down:"1:10"},
       {from:"笹平", to:"雨飾山山頂", up:"0:40", down:"0:40"}
     ], sample:true},
    {name:"雨飾山荘コース（中の池・梶山新湯 往復）", stats:"標高差 約1,090m（雨飾温泉駐車場877m起点・新潟県グレーディング公表値）/ 登り4:30・下り3:30", level:"中級", note:"薬師尾根の急登から中の池を経て笹平で雨飾高原コースと合流する。同じ雨飾山荘発の大曲ルート（登り4:20・下り3:50）もある。笹平から先、上級者向けに鋸岳・鬼ヶ面山への縦走路が続くが、梯子の破損などで区間閉鎖が生じることがあるため現地情報の確認が必要。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/site/opendata/1356812341916.html"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{6:"山開き直後。雨飾高原キャンプ場の営業開始（例年6月中旬）に合わせて登山道が整備される。稜線には残雪が残ることがある。",7:"ブナ林の緑と高山植物（シラネアオイなど）が見頃。梅雨明け前後は荒菅沢の増水・徒渉に注意。",8:"盛夏の定番シーズン。荒菅沢の涼と布団菱の岩壁の展望が魅力。午後の雷雨に注意。",9:"下旬から紅葉と混雑が始まる。例年9月下旬から土日祝は交通規制（駐車場満車時に登山口より上部が通行止め）の対象期間に入る。",10:"紅葉最盛期（布団菱の錦繍が名物）で最混雑。笹平直下や山頂付近で長い待ち時間が発生することも。土日祝は交通規制と秋山登山相談所の開設あり。中旬以降は初雪の可能性。",11:"初雪・積雪期入り。雨飾高原キャンプ場は10月末で閉鎖、糸魚川側の登山タクシーも10月中旬で運行終了となり、アクセスが大きく制限される。"}
  }
},
{
  id:"naeba", name_ja:"苗場山", name_en:"Mt. Naeba", region:"上越国境", area:"上信越・尾瀬", prefecture:"新潟県・長野県",
  elevation:2145, hyakumeizan:true,
  coords:{lat:36.8459, lon:138.6903}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"上信越有数の豪雪地帯。祓川・小赤沢とも山頂直下まで6月中旬頃まで残雪が残ることが多く、無雪期装備での早期入山は雪渓・渡渉に注意。10月下旬以降は初雪の可能性が高い。"
  },
  trailheads:[{
    name:"祓川駐車場（町営駐車場・標高1,268m）",
    access:[
      {mode:"タクシー", line:"ゆざわ魚沼タクシー", from:"JR上越新幹線・上越線 越後湯沢駅",
       duration:"約25分（公式記載なし・要確認）", weekday:"随時（事前予約推奨）", weekend:"随時（登山シーズンの土日祝は予約必須）",
       season:"駐車場までの町道は例年6月上旬〜10月下旬のみ開通（積雪期は通行不可・要確認）", url:"https://www.e-yuzawa.gr.jp/sys/buy_rental_p/yuzawa_uonuma_taxi/", sample:true}
    ]
  },{
    name:"小赤沢三合目登山口（標高1,310m）",
    access:[
      {mode:"バス", line:"湯沢・森宮野原・百ノ木線（南越後観光バス、津南まで乗車）", from:"JR飯山線 森宮野原駅前",
       duration:"津南まで約15分", weekday:"森宮野原駅前発 例: 7:29 / 11:46 / 15:31", weekend:"森宮野原駅前発 例: 8:56 / 11:46 / 15:31 / 17:31",
       season:"通年（年末年始・お盆等は休日ダイヤ）", url:"http://www.vill.sakae.nagano.jp/docs/219.html", sample:true},
      {mode:"デマンド交通", line:"秋山郷線（津南→見玉→小赤沢、予約制）", from:"津南（上記路線バスから乗継）",
       duration:"津南から小赤沢まで約50分", weekday:"津南発 例: 11:25 / 14:10（小赤沢着 例: 12:20 / 15:05）", weekend:"同左（土日祝も運行、16:15発の便は土日祝運休）",
       season:"通年・要予約（前日17時までに電話025-766-2949）。小赤沢バス停から三合目駐車場までは公共交通機関なく、さらに送迎手配が必要（要確認）", url:"http://www.vill.sakae.nagano.jp/docs/219.html", sample:true}
    ]
  }],
  huts:[
    {name:"苗場山頂ヒュッテ（苗場山自然体験交流センター）", elevation:2100, open:"6月1日〜10月25日（予約制）", reservation:"予約専用ダイヤルへの電話のみ（メール・FAX不可）", url:"http://sakae-akiyamago.com/stay/4888/", tel:"080-7183-4024"},
    {name:"和田小屋（祓川ルート5合目）", elevation:1380, open:"夏季は7月中旬〜10月中旬頃（団体貸切限定・完全予約制、最新日程は要問合せ）。冬季はかぐらスキー場のベース施設として12月下旬〜5月上旬営業", reservation:"電話予約制（夏季は団体一棟貸し切りのみ）", url:"https://www.princehotels.co.jp/amuse/wadagoya_summer/", tel:"025-788-9221"}
  ],
  routes:[
    {name:"祓川ルート 往復（かぐらスキー場・和田小屋経由）", stats:"距離 約12.2km（往復）/ 標高差 約880m（累積登り1,220m）/ 登り4:00・下り2:40", level:"中級", note:"新潟県側の標準コース。和田小屋から下ノ芝・中ノ芝・上ノ芝を経て神楽ヶ峰へ。山頂台地は広大な高層湿原と池塘が広がる。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"新潟 山のグレーディング（五十音順）", url:"https://www.pref.niigata.lg.jp/uploaded/attachment/456447.pdf"}},
    {name:"小赤沢三合目コース 往復（秋山郷）", stats:"距離 約9.4km（往復）/ 標高差 約840m（累積登り840m）/ 登り3:30・下り2:40", level:"中級", note:"祓川ルートより短く、最短で山頂に立てる長野県側のコース。ブナ林から山頂湿原への変化が魅力。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング 一覧表", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/2026_grading_list.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。登山道の大半が雪に埋もれ、アイゼン・ピッケルなど雪山装備と経験が必要。",6:"祓川駐車場への道路が開通し山開き（例年6月上旬〜中旬、山頂ヒュッテも6/1営業開始）。残雪の雪渓・渡渉に注意。",7:"ワタスゲ・ニッコウキスゲなど高層湿原の花が見頃に近づく梅雨明け後が狙い目。",8:"池塘と青空が広がる最盛期。日帰りは早出を。",9:"花から草紅葉へ移行。台風接近時は増水・強風に注意。",10:"草紅葉・ナナカマドの紅葉が見頃（中旬頃）。下旬は初雪の可能性、25日で山頂ヒュッテが営業終了。",11:"初冬。積雪の可能性が高く一般登山向きではない。"}
  }
},
{
  id:"myoko", name_ja:"妙高山", name_en:"Mt. Myoko", region:"頸城山塊", area:"上信越・尾瀬", prefecture:"新潟県",
  elevation:2454, hyakumeizan:true,
  coords:{lat:36.8914, lon:138.1136}, forecast_elevation:2300,
  grading:{
    ridgeline:2300,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本海側有数の豪雪地帯。燕温泉コース（北地獄谷沿い）は残雪の遅い年で6月頃まで雪渓・滑落に注意が必要。黒沢池・高谷池周辺の雪田も遅くまで残る。"
  },
  trailheads:[
    {
      name:"燕温泉登山口（標高1,094m）",
      access:[
        {mode:"バス", line:"関・燕温泉線（妙高市営バス）", from:"えちごトキめき鉄道 妙高はねうまライン 関山駅",
         duration:"約30分",
         weekday:"関山駅発 例: 6:15 / 7:46 / 9:03 / 10:49（6:15便は土・日・祝日運休）", weekend:"関山駅発 例: 7:46 / 9:03 / 10:49 / 13:52",
         season:"通年運行（令和8年4月1日〜令和9年3月31日ダイヤ。冬期は積雪状況により運行形態が変わる場合あり）",
         url:"https://www.city.myoko.niigata.jp/docs/892.html", sample:true}
      ]
    },
    {
      name:"笹ヶ峰登山口（標高1,314m）",
      access:[
        {mode:"直行バス", line:"笹ヶ峰直行バス（頸南バス）", from:"えちごトキめき鉄道 妙高はねうまライン 妙高高原駅",
         duration:"約50分",
         weekday:"妙高高原駅発 例: 7:20 / 9:40 / 14:20（1日1往復の日は9:40発のみ運行）", weekend:"妙高高原駅発 例: 7:20 / 9:40 / 14:20（1日1往復の日は9:40発のみ運行）",
         season:"2026年は7/11(土)〜10/25(日)運行。7/25〜8/31は1日3往復、それ以外の期間は1日1往復の日が多いため運行日程表で要確認。",
         url:"https://www.marukei-g.com/pages/234/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"高谷池ヒュッテ", elevation:2100, open:"5月1日〜10月25日宿泊分まで（5月はプレオープンで素泊まりのみ）", reservation:"予約サイト（前日24時まで受付。利用月の2か月前1日0時に予約開始）。10名以上の団体・地域振興券利用は電話予約", url:"https://myokotourism.jp/kouyaike/", tel:"0255-78-7588"},
    {name:"黒沢池ヒュッテ", elevation:2000, open:"7月上旬〜10月下旬", reservation:"電話予約", url:"", tel:"0255-86-2261"}
  ],
  routes:[
    {name:"燕温泉コース 周回（北地獄谷・胸突き八丁・天狗堂）", stats:"距離 約7.8km / 標高差 約1,420m / 周回コースタイム 計11:06（新潟県公表値）", level:"中級", note:"北地獄谷沿いは噴気・崩落地形が続き、山頂直下の鎖場と胸突き八丁の急登が核心部。妙高山・火打山地域は任意の入域協力金（500円、登山保険付きは1,080円）制度あり。妙高山は気象庁の111活火山の一つ（噴火警戒レベル未設定）。登山前に気象庁「火山登山者向けの情報提供ページ」で最新情報を確認するとよい。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"１０県２山域 日本百名山「登山ルートグレーディング」一覧表（新潟県）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"笹ヶ峰→黒沢池ヒュッテ→妙高山 往復（1泊2日）", stats:"距離 約16km / 標高差 約1,150m / 1泊2日（登り目安6:30・下り目安5:00）", level:"中級", note:"黒沢池ヒュッテ・高谷池ヒュッテを拠点にした定番の1泊コース。大倉乗越からの下降は岩場とロープ場が連続するため下りは特に慎重に。火打山とセットで登る登山者が多い。妙高山・火打山地域は任意の入域協力金制度あり。",
     popularity:3, trailhead:1, grade:{stamina:6, skill:"C", official:false}},
    {name:"笹ヶ峰起点 火打山・妙高山 縦走（高谷池・黒沢池 経由・燕温泉下山）", stats:"距離 約19km / 標高差 累計約1,900m / 1泊2日（笹ヶ峰→高谷池ヒュッテ 約3:30、高谷池⇔火打山往復 約2:30、黒沢池ヒュッテ→妙高山→燕温泉 約6:30が目安）", level:"上級", note:"頸城三山を代表する縦走ルート。下山口（燕温泉）が起点（笹ヶ峰）と異なるため、マイカー利用時は回収の交通手配が必要。大倉乗越の岩場・鎖場は下り優先で慎重に通過。",
     popularity:2, trailhead:1, grade:{stamina:8, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。燕温泉コース・笹ヶ峰側とも残雪が多く軽アイゼン推奨。高谷池ヒュッテはプレオープン（素泊まりのみ）。",6:"梅雨期。上旬まで雪渓が残ることもある。高谷池ヒュッテは通常営業に切り替わる。",7:"花の最盛期（高谷池・黒沢池の湿原）。笹ヶ峰直行バスもこの時期から運行開始。",8:"夏山最盛期。午後の雷雨に注意。",9:"秋雨前線・台風シーズンで晴天率はやや下がるが、空気が澄む日も多い。",10:"紅葉のピーク（中旬頃）。下旬は初雪の可能性があり、笹ヶ峰直行バスも10/25で運行終了。",11:"初冬。ヒュッテは営業終了し積雪期の装備・経験が必須になる。"}
  }
},
{
  id:"hiuchiyama", name_ja:"火打山", name_en:"Mt. Hiuchi", region:"頸城山塊", area:"上信越・尾瀬", prefecture:"新潟県",
  elevation:2462, hyakumeizan:true,
  coords:{lat:36.9228, lon:138.0681}, forecast_elevation:2400,
  grading:{
    ridgeline:2400,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本海側有数の豪雪地帯・頸城山塊。稜線は5〜6月でも残雪や雪渓が残り、10月には初雪もある。笹ヶ峰へ通じる県道39号は例年11月中旬〜4月下旬は冬期閉鎖。"
  },
  trailheads:[{
    name:"笹ヶ峰登山口（標高1,314m）",
    access:[
      {mode:"バス", line:"笹ヶ峰直行バス（頸南バス）", from:"妙高高原駅（えちごトキめき鉄道妙高はねうまライン）",
       duration:"約50分",
       weekday:"妙高高原駅発 例: 7:20 / 9:40 / 14:20（1日3往復運行日）※1日1往復のみの日は9:40発のみ運行", weekend:"妙高高原駅発 例: 7:20 / 9:40 / 14:20（土日祝はほぼ1日3往復）",
       season:"2026年は7/11(土)〜10/25(日)運行。運行日により1日1往復（9:40発のみ）〜1日3往復まで変動、詳細は公式カレンダー要確認。冬期（例年11月中旬〜4月下旬）は県道が閉鎖され公共交通なし。", url:"https://www.marukei-g.com/pages/234/", sample:true}
    ]
  }],
  huts:[
    {name:"高谷池ヒュッテ", elevation:2110, open:"2026年は5/1(金)〜10/25(日)宿泊分まで（5月はプレオープン・素泊まりのみ）。それ以外の時期は無人の避難小屋", reservation:"完全予約制（モンベルオンラインストアで宿泊前日まで24時間受付。10名以上の団体・ふるさと納税宿泊券利用は電話予約）", url:"https://myokotourism.jp/kouyaike/", tel:"0255-78-7588"},
    {name:"黒沢池ヒュッテ", elevation:2014, open:"例年7月1日〜10月31日。それ以外の時期は無人", reservation:"電話予約制（公式サイト未確認のため運営者へ要問合せ）", url:"", tel:""}
  ],
  routes:[
    {name:"笹ヶ峰 往復（十二曲り・富士見平・高谷池ヒュッテ経由）", stats:"距離 約16.0km / 標高差 累積約1,310m / 登り5:30・下り3:00", level:"中級", note:"火打山の標準ルート。高谷池・天狗の庭の高層湿原とライチョウ（日本最北の生息地）で知られる。日帰りも可能だが健脚向けで、高谷池ヒュッテ泊が一般的。入域料（任意協力金500円、登山保険付きは計1,080円）への協力を。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/site/opendata/1356812341916.html"},
     segments:[
       {from:"笹ヶ峰登山口", to:"富士見平", up:"3:00"},
       {from:"富士見平", to:"高谷池ヒュッテ", up:"1:00"},
       {from:"高谷池ヒュッテ", to:"火打山山頂", up:"1:30"}
     ], sample:true},
    {name:"火打山・妙高山 縦走（黒沢池ヒュッテ泊）", stats:"1泊2日 / 距離 約18km（黒沢池ヒュッテ泊、笹ヶ峰起点）", level:"上級", note:"火打山から黒沢池・大倉乗越を経て妙高山へ向かう人気の縦走路。大倉乗越〜妙高山間は岩場の急な下りで、悪天候時や経験不足の場合は無理せず往路を戻ること。下山は燕温泉側または笹ヶ峰への周回。焼山・妙高山は活火山のため、登山前に気象庁の火山活動情報を確認（新潟焼山: https://www.data.jma.go.jp/vois/data/tokyo/307_Niigata-Yakeyama/307_index.html）。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"笹ヶ峰への道路除雪後、高谷池ヒュッテがプレオープン（素泊まりのみ）。稜線には残雪が多く軽アイゼン推奨。",6:"梅雨期。谷筋や北向き斜面に雪渓が残ることがある。",7:"山小屋が本格営業開始。ハクサンコザクラなど高山植物とライチョウの繁殖期。",8:"花と展望の最盛期。笹ヶ峰直行バスは1日3往復に増便。",9:"上旬は花、下旬から高谷池・天狗の庭で草紅葉が始まる。",10:"紅葉が見頃（中旬〜下旬）。ヒュッテ・直行バスとも10月下旬で今シーズンの営業を終了。",11:"県道39号（妙高高原公園線）が例年11月中旬から冬期閉鎖となり、笹ヶ峰への公共交通も終了。"}
  }
},
{
  id:"takatsuma", name_ja:"高妻山", name_en:"Mt. Takatsuma", region:"戸隠連峰", area:"上信越・尾瀬", prefecture:"長野県・新潟県",
  elevation:2353, hyakumeizan:true,
  coords:{lat:36.8000, lon:138.0519}, forecast_elevation:2200,
  grading:{
    ridgeline:2200,
    wind_caution:9, wind_danger:15,
    precip_caution:2, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"戸隠は日本有数の豪雪地帯。長野市公式情報でも例年11月〜6月は積雪ありとされ、大洞沢沿いの一不動コースは6月頃まで雪渓・渡渉が残ることがある。降雨時は沢の増水にも要警戒（無雪期でも）。積雪期は本格的な雪山装備必須。"
  },
  trailheads:[{
    name:"戸隠キャンプ場 登山者用駐車場（標高約1,171m）",
    access:[
      {mode:"バス（予約制・観光特急）", line:"観光特急戸隠線（アルピコ交通）", from:"JR長野駅 善光寺口7番のりば",
       duration:"約65分",
       weekday:"長野駅発 例: 6:50 / 7:50 / 8:20 / 8:50 / 9:20 / 9:50（早朝便が日帰り登山向け・平日土休日共通ダイヤ）", weekend:"長野駅発 例: 6:50 / 7:50 / 8:20 / 8:50 / 9:20 / 9:50（平日と同一ダイヤ）",
       season:"2026年4月1日〜6月30日ダイヤ（2026年3月9日改正版）で運行。7月以降は改定予定のため要確認。冬期は運休の可能性あり（要確認）。座席指定制・要事前予約（当日空席があれば乗車可）",
       url:"https://www.alpico.co.jp/traffic/local/nagano/togakushi/", sample:true}
    ]
  }],
  huts:[
    {name:"一不動避難小屋（無人・宿泊不可）", elevation:1750, open:"通年開放（無人・避難用）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"一不動コース（大洞沢）→弥勒尾根新道 周回", stats:"距離 約13.6km / 標高差 約1,182m / 登り5:30・下り4:05", level:"上級", note:"戸隠牧場からの定番周回。登りは一不動経由の大洞沢コースで滑滝・帯岩のクサリ場を通過（降雨後は大洞沢の増水に注意）、下りは鎖場の少ない弥勒尾根新道を使う。山小屋がなく日帰り必須のロングコース。下山後のバスは戸隠キャンプ場発（2026年4〜6月ダイヤ、要確認）。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"D", official:true, src:"信州 山のグレーディング（百名山グレーディング一覧表）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"戸隠キャンプ場駐車場", to:"一不動登山口", up:"0:20"},
       {from:"一不動登山口", to:"一不動避難小屋", up:"2:00"},
       {from:"一不動避難小屋", to:"五地蔵山", up:"1:00"},
       {from:"五地蔵山", to:"六弥勒", up:"0:10"},
       {from:"六弥勒", to:"高妻山山頂", up:"2:00"},
       {from:"高妻山山頂", to:"六弥勒", down:"1:30"},
       {from:"六弥勒", to:"弥勒新道登山口", down:"2:10"},
       {from:"弥勒新道登山口", to:"戸隠キャンプ場駐車場", down:"0:25"}
     ], sample:true},
    {name:"一不動コース（大洞沢） 往復", stats:"距離 約13.4km / 標高差 約1,182m / 登り5:30・下り4:20", level:"上級", note:"登り下りとも大洞沢沿いの一不動コースを使う往復ルート。滑滝・帯岩のクサリ場を上り下り両方で通過するため、周回ルートより鎖場通過回数が多い。降雨後の増水・泥濘に注意。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"D", official:true, src:"信州 山のグレーディング（百名山グレーディング一覧表）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"戸隠キャンプ場駐車場", to:"一不動登山口", up:"0:20", down:"0:20"},
       {from:"一不動登山口", to:"一不動避難小屋", up:"2:00", down:"1:30"},
       {from:"一不動避難小屋", to:"五地蔵山", up:"1:00", down:"0:50"},
       {from:"五地蔵山", to:"六弥勒", up:"0:10", down:"0:10"},
       {from:"六弥勒", to:"高妻山山頂", up:"2:00", down:"1:30"}
     ], sample:true}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。大洞沢沿いは雪渓・渡渉が残ることが多く上級者向け。マイカー・バスの季節運行開始時期は要確認。",6:"梅雨と残雪の両方に注意。沢筋（大洞沢）は雨で水量が急増するため無理をしない。",7:"梅雨明け以降が実質的なシーズン入り。行動時間が長いため早朝発必須。",8:"盛夏。午後の雷雨リスクが高く、早出早着を徹底。",9:"秋晴れが安定し始める登山適期。台風接近時は増水・強風に厳重警戒。",10:"紅葉と戸隠富士の眺望が見頃。中旬以降は初雪の可能性があり、装備を早めに冬支度へ切り替える。",11:"長野市公式情報でもこの時期から積雪が始まるとされ、無雪期装備での入山は非推奨。"}
  }
},
{
  id:"sukai", name_ja:"皇海山", name_en:"Mt. Sukai", region:"足尾山地", area:"関東周辺", prefecture:"栃木県・群馬県",
  elevation:2144, hyakumeizan:true,
  coords:{lat:36.6898, lon:139.3371}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:8,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"標高2,000m超の北面稜線は根雪になりやすく、鋸山〜皇海山間の岩稜・トラバースは晩秋〜春先まで凍結・残雪の危険が続く。無雪期・晴天限定の上級ルート。"
  },
  trailheads:[{
    name:"銀山平（標高829m）",
    access:[
      {mode:"鉄道", line:"わたらせ渓谷鐵道 わたらせ渓谷線", from:"桐生駅",
       duration:"通洞駅まで普通列車で約1時間40分（列車により異なる）",
       weekday:"要確認（日中はおおむね1〜2時間に1本、詳細は公式時刻表参照）", weekend:"要確認（土休日はトロッコ列車が増発、詳細は公式時刻表参照）",
       season:"通年運行（2026年3月14日改正ダイヤ）", url:"https://www.watetsu.com/rail-info/time-table.php", sample:true},
      {mode:"タクシー", line:"日光交通（配車タクシー）", from:"通洞駅",
       duration:"要確認（目安20分前後、固定ダイヤなしの配車制）",
       weekday:"配車随時（受付7:00〜23:00）", weekend:"配車随時（受付7:00〜23:00）",
       season:"通年", url:"https://www.nikko-kotsu.co.jp/contact/", sample:true}
    ]
  }],
  huts:[
    {name:"庚申山荘（避難小屋）", elevation:1500, open:"通年開放（無人の避難小屋）。沢水は4月中旬〜12月上旬のみ引水（要煮沸）、トイレは故障により使用不可の時期あり", reservation:"予約不要・利用無料", url:"https://www.city.nikko.lg.jp/soshiki/6/1027/1/375.html", tel:"0288-93-3116"},
    {name:"足尾の宿 かじか（旧・国民宿舎かじか荘）", elevation:830, open:"通年営業（臨時休館あり・要確認）", reservation:"公式サイトまたは電話予約（9:00〜18:00）", url:"https://ashio-kajika.jp/", tel:"0288-93-3420"}
  ],
  routes:[
    {name:"銀山平（庚申山荘経由）→庚申山→鋸山→皇海山→六林班峠 周回", stats:"距離 約26.5km（周回）/ 歩行時間 約14.1時間 / 累積標高差 登り2,610m・下り2,610m", level:"上級", note:"栃木県「山のグレーディング」で県内唯一の技術度D・体力度7に評価されたクラシックルート。群馬側・栗原川林道（皇海橋）は台風被害で長期通行止めのため、現在は実質この銀山平発の周回が唯一のルート。鋸山の鎖場と六林班峠付近の崩壊気味のトラバースが核心部。庚申山荘に前泊する1泊2日、または未明発の日帰り強行が一般的。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"D", official:true, src:"栃木県 山のグレーディング地域別一覧表", url:"https://www.pref.tochigi.lg.jp/d04/yama/documents/r4-grading-tiikibetsu.pdf"}},
    {name:"銀山平（庚申山荘経由）→鋸山→皇海山 往復（六林班峠を通らず往路を戻る）", stats:"距離 約24km（往復）/ 行動時間 目安14〜16時間 / 標高差 登り約1,600m", level:"上級", note:"六林班峠周辺の崩壊トラバースを避けたい場合の選択肢。往路を戻るため道迷いの心配は周回より少ないが、鋸山の鎖場を往復で2回通過する。公表グレーディング表とは経路が異なるため独自の保守的な推定値。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"D", official:false}},
    {name:"庚申山 往復（皇海山へは向かわない場合）", stats:"距離 約14.5km（往復）/ 歩行時間 約6.8時間 / 標高差 登り1,570m・下り1,570m", level:"中級", note:"庚申山荘と庚申山だけが目的なら日帰り可能。庚申山は絶滅危惧種コウシンソウの自生地として、また奇岩の多い山として知られる。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"C", official:true, src:"栃木県 山のグレーディング地域別一覧表", url:"https://www.pref.tochigi.lg.jp/d04/yama/documents/r4-grading-tiikibetsu.pdf"}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{5:"アカヤシオが稜線を彩る好期。ただし年によっては稜線に残雪が残るので注意。",6:"梅雨入り前が狙い目。シロヤシオなど花も豊富だが、梅雨入り後は増水・滑落リスクが上がる。",7:"梅雨明け後は日が長く行動時間を確保しやすいが、蒸し暑さと藪の繁茂が本格化する。",8:"猛暑と雷雨（午後の雷）に要警戒。長時間行動になるルートなので熱中症対策必須。",9:"台風シーズン。増水・倒木・道の崩落に注意しつつ秋晴れの日を狙いたい。",10:"紅葉と晴天が重なりやすい好機。ただし日没が早まるため、通常より早い出発が必須。",11:"初雪の便り。稜線から一気に冬支度が必要になる。"}
  }
},
{
  id:"hotakayama", name_ja:"武尊山（上州武尊）", name_en:"Mt. Hotaka (Joshu-Hotaka)", region:"上州武尊", area:"上信越・尾瀬", prefecture:"群馬県",
  elevation:2158, hyakumeizan:true,
  coords:{lat:36.8053, lon:139.1325}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"群馬・新潟県境に近い豪雪地帯の独立峰。家ノ串付近の稜線トラバースは7月中旬まで雪田が残ることがある（川場村観光協会「武尊登山ルート」図）。根雪は長く、冬は稜線が強風にさらされやすい。"
  },
  trailheads:[
    {
      name:"武尊神社登山口（裏見の滝、標高約1,100m）",
      access:[
        {mode:"バス+徒歩", line:"水上線 谷川岳・宝川・湯の小屋方面行き（関越交通）", from:"JR上越線 水上駅",
         duration:"「武尊橋」バス停まで約20〜30分、下車後は林道・キャンプ場経由で登山口まで徒歩約1時間30分",
         weekday:"水上駅発 多数便あり（本数は多いが「武尊橋」着の正確な時刻・登山口までの徒歩ルートは要確認）", weekend:"同左",
         season:"通年運行（積雪期はダイヤが変わる場合あり）", url:"https://kan-etsu.net/publics/index/20/", sample:true},
        {mode:"タクシー", line:"関越交通タクシー（沼田営業所）", from:"JR上越新幹線 上毛高原駅／JR上越線 水上駅",
         duration:"上毛高原駅から約40〜50分",
         weekday:"随時運行（事前予約推奨）", weekend:"同左",
         season:"通年（積雪期は道路状況により要確認）", url:"https://kan-etsu.net/publics/index/12/", sample:true}
      ]
    },
    {
      name:"川場・ベースキャンプ川場／川場スキー場登山口（標高約1,150m）",
      access:[
        {mode:"無料送迎バス（予約制）", line:"川場スキー場シャトルバス", from:"JR上越新幹線 上毛高原駅／JR上越線 沼田駅",
         duration:"上毛高原駅から約60分、沼田駅から約95分（バス＋タクシー）",
         weekday:"スキー場営業期間中運行・要事前予約（正確な時刻は要確認）", weekend:"同左",
         season:"川場スキー場の冬季営業期間のみ（例年12月上旬〜3月下旬、要確認）", url:"https://www.kawaba.co.jp/access/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"手小屋沢避難小屋（無人）", elevation:1650, open:"通年開放（1992年度改築、無人・水場記載なし）", reservation:"—", url:"", tel:""},
    {name:"武尊避難小屋（無人）", elevation:2080, open:"通年開放（針葉樹林の中、近くに水場なし。冬季は積雪状況により使用不可）", reservation:"—", url:"", tel:""},
    {name:"旭小屋（無人）", elevation:1460, open:"通年開放（旭小屋コースの起点）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"武尊神社（裏見の滝）→手小屋沢避難小屋 周回（剣ヶ峰山経由）", stats:"距離 約9〜10km / 標高差 約1,050m / 登り5:30・下り4:00（目安）", level:"中級", note:"「行者ころげ」の鎖場と手小屋沢避難小屋を経て稜線へ。武尊山（沖武尊）から剣ヶ峰山を回って武尊神社へ戻る周回が主流。稜線は風の通り道で、視界不良時は道迷いに注意。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"D", official:false}},
    {name:"ベースキャンプ川場→高手山→剣ヶ峰山→武尊山", stats:"距離 約11km / 標高差 約1,000m / 登り5:05・下り3:45", level:"初級〜中級", note:"川場村側からの定番コース。「登山道はよく整備されているので安心」（川場村観光協会資料）。剣ヶ峰山からの展望が良い。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"ベースキャンプ川場", to:"高手山", up:"0:45"},
       {from:"高手山", to:"剣ヶ峰山", up:"3:00"},
       {from:"剣ヶ峰山", to:"武尊山", up:"1:20"}
     ], sample:true},
    {name:"川場スキー場 リフト利用→剣ヶ峰山→武尊山（積雪期限定）", stats:"リフト終点（標高約1,870m）から標高差 約290m / 行動時間 目安4〜5時間", level:"中級〜上級（積雪期技術）", note:"川場スキー場のリフト（クリスタルエクスプレス等）を使い標高約1,870mまで上がって稜線へ。スキー場公式ルールで登山届の提出とココヘリ携行が必須、下山後は窓口に報告。夏季はリフト運行なし（川場スキー場は冬季シーズンのみ営業、公式サイトで要確認）。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,9,10],
    notes:{
      5:"残雪期。家ノ串付近のトラバースなど稜線には雪田が残ることがあり、アイゼン携行が安心。",
      6:"梅雨の晴れ間を狙う。新緑と高山植物が増え始める（新・花の百名山）。",
      7:"年によっては中旬まで雪田が残る。稜線の花が見頃に。",
      8:"盛夏。稜線は午後の雷雨に注意。",
      9:"秋晴れが増え、稜線歩きに適した季節。",
      10:"紅葉が見頃（中旬〜下旬）。周辺県道は積雪前に冬季閉鎖される場合あり。",
      11:"周辺県道が冬季閉鎖される時期（例年11月中旬〜、林野庁資料）。初雪の便りも。",
      12:"積雪期。川場スキー場のリフト利用・剣ヶ峰山経由が定番だが、雪崩・道迷いのリスクが高く経験者同伴と冬山装備が必須。",
      1:"厳冬期。稜線は強風・低温にさらされる。",
      2:"厳冬期。日帰りでも雪山装備と技術が必要。",
      3:"残雪期に入るが積雪はまだ多い。踏み抜き・雪崩に注意。",
      4:"周辺県道の冬季閉鎖が明ける時期（例年5月下旬までのところも、要確認）。まだ残雪が多い。"
    }
  }
},
{
  id:"kusatsushirane", name_ja:"草津白根山（本白根山）", name_en:"Mt. Kusatsu-Shirane (Motoshirane)", region:"草津白根", area:"上信越・尾瀬", prefecture:"群馬県",
  elevation:2171, hyakumeizan:true,
  coords:{lat:36.6183, lon:138.5278}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"独立峰で遮るもののない火山性の裸地。頂稜を走る国道292号（志賀草津高原ルート）が例年11月中旬〜4月下旬は積雪のため冬期閉鎖になるほどの豪雪・強風地帯。"
  },
  trailheads:[{
    name:"白根山レストハウス付近（国道292号沿い・標高約2,000m）",
    access:[
      {mode:"車", line:"国道292号 志賀草津高原ルート", from:"草津温泉バスターミナル",
       duration:"約20〜30分",
       weekday:"要確認（現在は火口周辺の立入規制区域につき駐停車不可・通過のみ）", weekend:"要確認（同左）",
       season:"道路自体は例年4月下旬〜11月中旬に開通（冬期閉鎖：例年11月中旬〜4月下旬）。2026年は5/29に冬期閉鎖解除、ただし火山規制中は道路以外への立入不可。", url:"https://www.pref.gunma.jp/page/716190.html", sample:true},
      {mode:"バス", line:"草津温泉～白根火山線（ジェイアールバス関東）", from:"草津温泉バスターミナル",
       duration:"約20分（運行時）",
       weekday:"要確認（2026年7月時点、公式時刻表に便の掲載なし＝運休中）", weekend:"要確認（同左）",
       season:"火山活動の影響で長期運休中。運行再開時は要問合せ。", url:"https://www.jrbuskanto.co.jp/bus_etc/cntimep01.cfm?pa=1&pb=1&pc=j0450131&pd=0&st=1", sample:true}
    ]
  }],
  huts:[
    {name:"白根山レストハウス（展望・売店、宿泊不可）", elevation:2000, open:"通常は4月下旬〜11月中旬（現在：火山規制のため全面休業中）", reservation:"—", url:"https://www.town.kusatsu.gunma.jp/www/contents/1485317234625/index.html", tel:"0279-88-8111"}
  ],
  routes:[
    {name:"本白根山周回（弓池・空釜・鏡池コース）", stats:"距離 約7km / 標高差 約350m / 登り2:00・下り1:30", level:"初級", note:"【2026年7月現在・登山不可】本白根山の遊歩道は2018年噴火後の被災箇所未復旧に加え、火口周辺規制のため長期閉鎖中。国道292号は通行できるが車窓のみで沿道に立ち入れず、湯釜見学も不可。最新の規制状況は気象庁（https://www.data.jma.go.jp/vois/data/tokyo/305_Kusatsu-Shiranesan/305_index.html）と草津町公式サイトで要確認。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"本白根山最高点 展望台コース（空釜見晴台 往復）", stats:"距離 約3km / 標高差 約200m / 登り1:00・下り0:45", level:"初級", note:"【2026年7月現在・登山不可】上と同じ理由で閉鎖中。開通済みの区間は志賀草津高原ルート沿いの展望のみ（芳ヶ平湿地群の遊歩道も入山禁止が続く）。",
     popularity:1, trailhead:0, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[7,8],
    notes:{
      4:"道路の冬期閉鎖解除は例年4月下旬（2026年は5/29と大幅に遅れた）。閉鎖解除後も火山規制が優先。",
      5:"本来は残雪期からコマクサの時期への移行期。2026年は噴火警戒レベル引下げ（5/15）後も登山道規制は継続。",
      6:"梅雨。例年は本白根山のコマクサが咲き始める時期だが、現在は登山道自体が入山禁止。",
      7:"例年ならコマクサ大群落の見頃（〜7月下旬）。現在は火口周辺規制により本白根山・湯釜とも立入不可。",
      8:"高山植物の見頃が続くシーズンだが、現在は登山道閉鎖中。国道292号からの車窓景観のみ楽しめる。",
      9:"例年は秋の花（ヒメシャジン等）と紅葉の走り。規制状況は流動的なため気象庁・草津町公式で要確認。",
      10:"初雪の可能性が出てくる。豪雪地帯のため道路の冬期閉鎖（例年11月中旬）が近づく。",
      11:"中旬から国道292号が冬期閉鎖（例年11/12頃〜翌4月下旬）。"
    }
  }
},
{
  id:"azumaya", name_ja:"四阿山", name_en:"Mt. Azumaya", region:"上信越高原（菅平・浅間山系）", area:"上信越・尾瀬", prefecture:"長野県・群馬県",
  elevation:2354, hyakumeizan:true,
  coords:{lat:36.5417, lon:138.4131}, forecast_elevation:2300,
  grading:{
    ridgeline:2300,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"浅間山系に連なる独立峰的な地形で、冬は日本海側からの季節風が山頂稜線に遮られず直接吹き付ける。標高の割に強風になりやすいため風のしきい値は控えめに設定。残雪は5月上旬まで残ることがある。"
  },
  trailheads:[
    {
      name:"菅平牧場登山口（標高1,590m）",
      access:[
        {mode:"バス", line:"菅平高原線（上田バス）", from:"JR上田駅",
         duration:"約60分（菅平高原「ダボス」下車。牧場入口まではさらに徒歩または車で約4km・要確認）",
         weekday:"上田駅発 例: 7:05 / 8:15 / 9:25 / 11:30 / 13:30 / 15:50", weekend:"土日祝も同一ダイヤ運行（例: 7:05 / 8:15 / 9:25 / 11:30 / 13:30 / 15:50）",
         season:"通年運行（一部便は季節運行 7/1〜8/31・12/18〜3/31）", url:"https://www.uedabus.co.jp/sugadaira/20251001sugadaira-kogen.pdf", sample:true}
      ]
    },
    {
      name:"あずまや高原登山口（旧あずまや高原ホテル前・標高約1,450m）",
      access:[
        {mode:"マイカー", line:"公共交通機関なし（要確認）", from:"上信越自動車道 上田菅平IC",
         duration:"約30〜40分（国道144号を鳥居峠方面へ、峠の手前で県道182号へ左折）",
         weekday:"—", weekend:"—",
         season:"通年（積雪期は道路状況要確認）", url:"https://ueda-kanko.or.jp/", sample:true}
      ]
    },
    {
      name:"パルコール嬬恋リゾート ゴンドラ山頂駅（標高2,050m）",
      access:[
        {mode:"ゴンドラ", line:"パルコール嬬恋リゾート 夏山ゴンドラ（関東最長・片道約20分）", from:"パルコール嬬恋リゾート駐車場",
         duration:"約20分",
         weekday:"運休（土日祝のみ運行）", weekend:"8:00〜15:00の間で随時運行（上り最終15:00頃・要確認）",
         season:"2026年グリーンシーズン: 7/11（土）〜10/12（月・祝）の土日祝日運行", url:"https://tsumagoiskiresort.life/summer-gondola/", sample:true}
      ]
    }
  ],
  huts:[],
  routes:[
    {name:"菅平牧場起点 根子岳・四阿山 周回", stats:"距離 約9.5km（周回）/ 累積標高差 登り・下りとも約1,100m / コースタイム合計 約7:18（公表値、休憩含まず）", level:"中級", note:"根子岳を経て外輪山の尾根伝いに四阿山へ。牧場入場は入山協力金（大人300円・小人100円、料金は現地要確認）が必要な区間あり。上り下りの内訳は公表合計時間からの目安配分。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"あずまや高原（旧あずまや高原ホテル）起点 往復", stats:"距離 約7.6km（往復目安）/ 標高差 約900m / 登り3:20・下り2:40（独自推定）", level:"中級", note:"ホテルは2020年5月閉館だが、登山口手前の無料駐車場・登山道は利用可能（トイレなし）。上部は風衝地の草原帯でお花畑が広がる。稜線から浅間山を望むが、浅間山は活火山のため気象庁の噴火警戒レベル（https://www.data.jma.go.jp/vois/data/report/activity_info/306.html）を事前に確認し、レベルに応じた入山可能範囲を守ること。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:false}},
    {name:"パルコール嬬恋ゴンドラ利用 往復", stats:"距離 片道約3.4km・往復約6.8km / 標高差 約300m（ゴンドラ山頂駅起点）/ 登り1:30・下り1:10（独自推定）", level:"初級", note:"ゴンドラで標高2,050mまで上がれるため初心者向けの最短コース。ゴンドラの運行日・運行時間は季節・天候で変動するため必ず事前確認。",
     popularity:2, trailhead:2, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"残雪期。あずまや高原ルート上部や稜線には雪が残ることがあり注意。",6:"梅雨の晴れ間に。牧場では放牧が始まる時期。",7:"菅平牧場の売店営業は例年7/20〜8/20頃（入山協力金 大人300円・小人100円、要現地確認）。高山植物が見頃を迎える。",8:"お盆期間は駐車場・バスとも混雑。午後の雷雨に注意。",9:"秋晴れが増えて歩きやすい時期。",10:"紅葉は中旬前後が見頃。パルコール嬬恋の2026年グリーンシーズンゴンドラは10/12（月・祝）までの土日祝運行。",11:"初雪の便り。あずまや高原ホテル閉館に伴い付近に施設はなく、日没も早いため時間管理に注意。"}
  }
},
{
  id:"asama", name_ja:"浅間山", name_en:"Mt. Asama", region:"浅間連峰", area:"上信越・尾瀬", prefecture:"長野県・群馬県",
  elevation:2568, hyakumeizan:true,
  coords:{lat:36.4064, lon:138.5231}, forecast_elevation:2500,
  grading:{
    ridgeline:2400,
    wind_caution:10, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"関東平野からの季節風を遮るもののない独立峰的な成層火山で、外輪山・山頂部は一年を通じて風が強い。冬は高峰高原周辺でも積雪・路面凍結が常態化し、森林限界を超えた山頂部は吹きさらしの火山礫・岩塊帯となるため、風の予報を特に重視する。"
  },
  trailheads:[
    {
      name:"車坂峠登山口（高峰高原ビジターセンター、標高1,973m）",
      access:[
        {mode:"バス", line:"高峰高原線（ジェイアールバス関東）", from:"しなの鉄道 小諸駅／JR佐久平駅",
         duration:"小諸駅から約55分・佐久平駅から約1時間",
         weekday:"佐久平駅発 例: 8:40 / 14:00（小諸駅・きのこの森経由、高峰高原ホテル前着）", weekend:"同左（毎日運行ダイヤ）",
         season:"通年運行（冬期は高峰温泉を通過せずアサマ2000スキー場発着に変更）", url:"https://www.jrbuskanto.co.jp/jwp/office/komoro", sample:true},
        {mode:"車", line:"チェリーパークライン（県道80号小諸中込線）", from:"上信越自動車道 小諸IC",
         duration:"約30分",
         weekday:"通年通行可（冬期閉鎖なし、積雪・凍結のためスタッドレスタイヤ必須）", weekend:"同左",
         season:"道路は通年通行可。高峰高原ビジターセンター自体の営業は4月下旬〜11月上旬", url:"https://www.city.komoro.lg.jp/soshikikarasagasu/sangyoushinkoubu/shokokankoka/2/1/1/9803.html", sample:true}
      ]
    },
    {
      name:"天狗温泉浅間山荘登山口（標高1,400m）",
      access:[
        {mode:"車", line:"アサマサンライン経由", from:"上信越自動車道 小諸IC",
         duration:"約25分",
         weekday:"通年通行可（積雪期は道路状況を要確認）", weekend:"同左",
         season:"通年", url:"https://tenguspa.com/access.html", sample:true},
        {mode:"送迎（要予約・宿泊者限定）", line:"小諸駅⇔天狗温泉浅間山荘", from:"しなの鉄道 小諸駅",
         duration:"約25分",
         weekday:"送迎あり・要予約（対応時間は要問い合わせ）。それ以外はタクシー等を利用", weekend:"同左",
         season:"通年", url:"https://tenguspa.com/access.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"高峰高原ホテル", elevation:2000, open:"通年営業", reservation:"電話・Web予約", url:"https://www.takamine-kougen.co.jp/", tel:"0267-25-3000"},
    {name:"天狗温泉 浅間山荘", elevation:1400, open:"通年営業（要問い合わせ）", reservation:"電話予約", url:"https://tenguspa.com/", tel:"0267-22-0959"},
    {name:"火山館（小諸市営・休憩所、宿泊不可）", elevation:1995, open:"8:30〜17:15、毎週月・火曜定休（火山活動時は臨時休館あり）", reservation:"—", url:"https://www.city.komoro.lg.jp/soshikikarasagasu/sangyoushinkoubu/shokokankoka/2/1/1/2403.html", tel:""}
  ],
  routes:[
    {name:"お手軽絶景コース（車坂峠→トーミの頭→黒斑山 往復）", stats:"距離 約6km / 標高差 約400m / 歩行時間 約3:10", level:"初級",
     note:"浅間山外輪山の最高点・黒斑山を目指す定番コース。トーミの頭からの絶壁と浅間山本体の大展望が見どころ。噴火警戒レベル1・2で入山可（長野県佐久地域振興局公式コース紹介）。積雪期は冬山初心者にも比較的向くが、風の予報は必ず確認すること。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:false}},
    {name:"浅間山・活火山体感コース（天狗温泉浅間山荘→火山館→賽の河原分岐→前掛山 往復）", stats:"距離 約12km / 標高差 約1,100m / 歩行時間 約6:40", level:"中級",
     note:"火口に最も近づける前掛山（2,524m）を目指すメインコース。噴火警戒レベル1の時のみ前掛山まで入山可（レベル2以下では火山館までしか入れない）。ヘルメット携行推奨、コース上にシェルターあり。最新の警戒レベルは気象庁公式サイト（https://www.data.jma.go.jp/vois/data/tokyo/306_Asamayama/306_index.html）で必ず確認すること。長野県登山安全条例により登山計画書の提出も必須。",
     popularity:3, trailhead:1, grade:{stamina:5, skill:"B", official:false}},
    {name:"いいとこどり縦走コース（車坂峠→黒斑山→Jバンド→火山館→天狗温泉浅間山荘）", stats:"距離 約13km / 標高差 登り約400m・下り約1,700m / 歩行時間 約5:30", level:"中級",
     note:"外輪山を経て火口間近の稜線を歩き、火山館経由で下山する縦走コース。起点（車坂峠）と終点（天狗温泉浅間山荘）が異なるため、マイカー利用時は車両回送やタクシー手配が必要。噴火警戒レベル1・2で入山可能だが、レベル2の場合は仙人岳〜Jバンド〜湯の平口分岐が火口から2km以内の区域を通るため長居は禁物、異変を感じたら直ちに下山すること。積雪期（12〜4月）は歩行技術を要するため「お手軽絶景コース」が推奨される。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      4:"高峰高原ビジターセンターの営業開始は例年4月下旬。残雪や路面状況は要確認。",
      5:"新緑の季節。2026年は5月22日に噴火警戒レベルが2から1へ引き下げられ、5月23日から前掛山までの入山規制が緩和された。",
      6:"梅雨の晴れ間を狙う時期。外輪山では高山植物が咲き始める。",
      7:"夏山シーズン本番。午後の雷雨や火山ガスの状況に注意。",
      8:"盛夏。日差しと展望を遮るもののない稜線歩きになるため、熱中症・日焼け対策を。",
      9:"秋晴れが増え、外輪山からの展望が特に良くなる時期。",
      10:"紅葉の見頃（中旬〜下旬）。高峰高原ビジターセンターの営業終了は例年11月上旬。",
      11:"初雪の便り。ビジターセンターは例年11月上旬で冬期休業に入る。",
      12:"厳冬期に入る。積雪・強風のため一般登山者には不向き。",
      1:"厳冬期。冬山装備と経験が必須。",
      2:"厳冬期。強風と低温が続く。",
      3:"残雪期。踏み抜きや雪崩に注意。"
    }
  }
},
{
  id:"ryokami", name_ja:"両神山", name_en:"Mt. Ryokami", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"埼玉県",
  elevation:1723, hyakumeizan:true,
  coords:{lat:36.0234, lon:138.8413}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:2, precip_danger:8,
    snow_months:[12,1,2,3,4],
    snow_note:"標高は1,723mと低いが山頂直下は北面の岩稜・鎖場で日照が乏しく、根雪や凍結が3月頃まで残ることがある。奥秩父の低山ゆえ雪より雨に弱く、濡れた鎖での滑落事故が多発しているため無雪期でも雨量基準は厳しめに設定。"
  },
  trailheads:[
    {
      name:"日向大谷口（両神山荘前・標高約640m）",
      access:[
        {mode:"バス", line:"日向大谷・三峰口線（小鹿野町営バス）", from:"三峰口駅",
         duration:"約1時間（薬師の湯・両神庁舎前経由）",
         weekday:"三峰口駅発 例: 7:48 / 10:40 / 13:40 / 17:37（日向大谷口まで直通する便と両神庁舎前止まりの便があり要確認）", weekend:"土曜・日曜・祝日も平日と同じ時刻",
         season:"通年", url:"https://www.town.ogano.lg.jp/cms/wp-content/uploads/2025/03/hinataooyamitumineguchisaen.pdf", sample:true},
        {mode:"バス", line:"西武秩父駅線→日向大谷・三峰口線（小鹿野町営バス、薬師の湯で乗換）", from:"西武秩父駅",
         duration:"約1時間25分（薬師の湯で乗換）",
         weekday:"西武秩父駅発 例: 8:23 → 薬師の湯 9:09着／9:13発 → 日向大谷口 9:48着", weekend:"土曜・日曜・祝日も平日と同じ時刻",
         season:"通年", url:"https://www.town.ogano.lg.jp/cms/wp-content/uploads/2025/04/choueijikoku.seibuchichibuekisen.pdf", sample:true}
      ]
    },
    {
      name:"上落合橋（八丁峠コース登山口・標高約1,140m）",
      access:[
        {mode:"車", line:"路線バスなし。金山志賀坂線（森林管理道）沿い", from:"国道299号 志賀坂トンネル手前",
         duration:"要確認（自家用車のみ。駐車スペース5〜6台・トイレなし）",
         weekday:"要確認", weekend:"要確認",
         season:"冬期通行止め（例年12月上旬〜4月下旬、志賀坂峠〜上落合橋間）。【2026年7月時点】路体崩落により金山志賀坂線は期間未定で終日通行止めのため登山口に到達不可。加えてツキノワグマ対策のため上落合橋登山口〜両神山山頂間は2026年6月4日から当面の間入山禁止。再開は埼玉県・小鹿野町の最新情報を要確認", url:"https://www.pref.saitama.lg.jp/soshiki/b0504/tozanjoho/tsukokise/kamiotiaibasi.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"両神山荘（民宿・日向大谷口）", elevation:640, open:"通年（要予約）", reservation:"電話予約", url:"", tel:""},
    {name:"清滝小屋（避難小屋・無人）", elevation:1300, open:"通年開放（無人・トイレ設備の一部が使用不可の場合あり）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"日向大谷口 表参道 往復", stats:"距離 要確認 / 標高差 約1,100m / 往復 約7.4時間（小鹿野町観光協会調べ）", level:"上級", note:"清滝小屋から山頂にかけて鎖場が連続。過去1年で滑落事故2件・転倒事故2件が発生しており（小鹿野町観光協会 山岳情報・2026年7月参照）、濡れた鎖は特に滑りやすい。三点支持を徹底し鎖に頼りすぎないこと。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"C", official:false}},
    {name:"八丁峠（上落合橋）コース 往復", stats:"標高差 約580m / 距離・時間 要確認（鎖場が連続する岩稜ルート）", level:"上級", note:"【2026年7月現在 通行不可】金山志賀坂線の路体崩落で登山口まで到達不可。加えてツキノワグマ対策のため上落合橋登山口〜山頂間が2026年6月4日から入山禁止（当面の間）。再開時期未定のため出発前に必ず埼玉県・小鹿野町の最新情報を確認すること。通行可能な時期も鎖場30箇所以上が連続する健脚者向けルート。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"D", official:false}}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{4:"中旬からミツバツツジ。残雪はほぼないが朝晩の冷え込みと霜に注意。",5:"中旬にニリンソウが見頃。ゴールデンウィーク後が狙い目。",6:"梅雨で鎖場が濡れやすく、滑落事故が増える時期。無理をしない。",7:"蒸し暑く樹林帯主体で展望に恵まれにくい。クマの目撃情報にも注意し熊鈴を携行。",9:"残暑が落ち着き始め行動しやすくなる。",10:"紅葉が始まり行楽シーズンでバスが混み合う日も。",11:"上旬が紅葉の見頃。中旬以降は霜・凍結に注意。",12:"八丁峠・志賀坂峠方面の林道が冬期通行止めに入る（例年12月上旬〜）。"}
  }
},
{
  id:"goryu", name_ja:"五竜岳", name_en:"Mt. Goryu", region:"後立山連峰", area:"北アルプス・御嶽", prefecture:"長野県・富山県",
  elevation:2814, hyakumeizan:true,
  coords:{lat:36.658407, lon:137.752691}, forecast_elevation:2750,
  grading:{
    ridgeline:2750,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"白岳直下の鎖場や遠見尾根上部・西遠見山周辺は6月頃まで残雪あり。牛首の岩稜は積雪・凍結時は極めて危険。"
  },
  trailheads:[{
    name:"エイブル白馬五竜テレキャビン アルプス平駅・地蔵の頭（標高1,530m）",
    access:[
      {mode:"シャトルバス", line:"エスカルプラザ行 無料シャトルバス（白馬五竜高山植物園）", from:"JR大糸線 神城駅",
       duration:"約15分",
       weekday:"神城駅発 例: 8:00 / 9:40 / 10:45 / 11:15 / 12:20 / 12:45 / 13:00", weekend:"平日・土日とも同ダイヤ（運行日は毎日）",
       season:"2026年は早期開園6/6・7・13・14（土日限定）、通常開園6/20〜10/18は毎日運行", url:"https://www.hakubaescal.com/shokubutsuen/access/", sample:true},
      {mode:"テレキャビン", line:"エイブル白馬五竜テレキャビン（ゴンドラ）", from:"山麓エスカルプラザ",
       duration:"約8分",
       weekday:"始発8:15（登山シーズンは早朝便運行日あり・時刻は要事前確認）、上り最終16:00・下り最終16:30", weekend:"同左",
       season:"2026年は早期開園6/6・7・13・14（土日限定）、通常開園6/20〜10/18は毎日運行", url:"https://www.hakubaescal.com/shokubutsuen/gondola/cal/", sample:true}
    ]
  }],
  huts:[
    {name:"五竜山荘", elevation:2490, open:"4月下旬〜5月上旬・6月下旬〜10月中旬（2026年は4/25〜5/5、6/20〜10/12）", reservation:"Web予約中心（yamayado.com「YamaYado Hub」）。当日電話予約は空きがあれば加算料金あり", url:"https://hakubakan.com/lodge/goryusanso/", tel:"0261-72-2002"},
    {name:"唐松岳頂上山荘", elevation:2620, open:"6月下旬〜10月中旬（2026年は6/27〜10/13）", reservation:"Web予約中心（宿泊日の30日前0時受付開始）・テント泊も要予約", url:"http://karamatsu.jp/", tel:"090-5204-7876"}
  ],
  routes:[
    {name:"遠見尾根ルート（アルプス平駅・地蔵の頭〜五竜山荘〜五竜岳 往復）", stats:"距離 約15.4km（往復）/ 標高差 約1,282m（アルプス平駅1,530m→山頂2,814m）/ 登り6:50・下り5:05", level:"上級", note:"テレキャビンを使っても長丁場。白岳直下の鎖場・岩稜と西遠見山周辺の雪田処理が核心部。日帰りも可能だが五竜山荘一泊が一般的。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"},
     segments:[
       {from:"アルプス平駅・地蔵の頭", to:"小遠見山", up:"1:30", down:"1:00"},
       {from:"小遠見山", to:"五竜山荘", up:"4:00", down:"3:00"},
       {from:"五竜山荘", to:"五竜岳山頂", up:"1:00", down:"0:45"}
     ], sample:true},
    {name:"唐松岳からの縦走（八方尾根〜唐松岳〜牛首〜五竜岳〜遠見尾根）", stats:"距離 約17.1km（八方池山荘→五竜岳→アルプス平駅）/ 累積登り約1,660m・累積下り約1,970m / 合計コースタイム 約12.1時間（1泊が前提）", level:"上級", note:"唐松岳頂上山荘泊まりが定番。核心は牛首の岩稜帯の鎖場（残雪期・強風時は特に危険、ヘルメット推奨）。五竜山荘でさらに1泊する2泊3日プランも一般的。",
     popularity:2, trailhead:null, grade:{stamina:5, skill:"C", official:true, src:"信州 山のグレーディング（八方池山荘発・アルプス平駅着）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"小遠見山ハイキング（アルプス平駅〜小遠見山 往復）", stats:"距離 約4.6km（往復目安）/ 標高差 約480m（1,530m→2,007m）/ 片道約1:30", level:"初級", note:"地蔵ケルンから360度パノラマ。五竜岳・鹿島槍ヶ岳の好展望地として登山者以外にも人気。展望リフト運休期間は徒歩分が延びる。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"A", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"テレキャビンは早期開園の特別営業（土日限定）のみ。稜線は残雪期の装備が必須。",6:"6/20の通常開園から本格シーズン入り。遠見尾根上部・白岳直下は残雪が多く軽アイゼン推奨。",7:"梅雨明け後が狙い目。コマクサ・ハクサンイチゲなど高山植物が見頃。",8:"夏山最盛期。五竜山荘・唐松岳頂上山荘とも混雑。稜線は午後の雷雨に注意。",9:"上旬は盛夏の延長、中旬から冷え込みが強まる。台風シーズンのため予報を要確認。",10:"紅葉と初雪が交錯。2026年はテレキャビン10/18まで、五竜山荘10/12・唐松岳頂上山荘10/13で小屋じまい予定。中旬以降は冬装備が必要。"}
  }
},
{
  id:"kashimayari", name_ja:"鹿島槍ヶ岳", name_en:"Mt. Kashimayari", region:"後立山連峰", area:"北アルプス・御嶽", prefecture:"長野県・富山県",
  elevation:2889, hyakumeizan:true,
  coords:{lat:36.6245, lon:137.7469}, forecast_elevation:2850,
  grading:{
    ridgeline:2850,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"双耳峰の稜線・八峰キレット・赤岩尾根は3,000m級に迫る岩稜帯で風の通り道。山小屋自身が『例年、柏原新道が全線で通行可能になるのは6月下旬〜10月下旬。11月上旬になれば大雪でいつ通行不能になってもおかしくない』と案内しており、5〜6月上旬・10月下旬以降は残雪・凍結・積雪期装備の判断が必須。"
  },
  trailheads:[
    {
      name:"柏原新道登山口（扇沢、標高1,338m）",
      access:[
        {mode:"バス", line:"扇沢線（アルピコ交通・北アルプス交通 共同運行）", from:"JR大糸線 信濃大町駅前",
         duration:"約35〜40分",
         weekday:"信濃大町駅前発 例: 6:15 / 7:05 / 8:00 / 9:00 / 10:00（運行日区分あり、詳細は公式サイトの時刻表参照）", weekend:"信濃大町駅前発 例: 6:15 / 7:05 / 8:00 / 9:00 / 10:00（土休日は増便あり、詳細は公式サイトの時刻表参照）",
         season:"2026年4月15日〜11月30日。2026年は登山口の『扇沢橋』で夏山・秋山シーズンを通して大規模補修工事があり、周辺駐車スペースが大幅に縮小される見込み（種池山荘・冷池山荘公式サイトの案内）。公共交通の利用が強く推奨されている。", url:"https://www.alpico.co.jp/traffic/local/hakuba/ogizawa/", sample:true}
      ]
    },
    {
      name:"大谷原登山口・赤岩尾根登山口（標高1,084m）",
      access:[
        {mode:"タクシー", line:"信濃大町駅からのタクシー（決まった路線バスなし）", from:"JR大糸線 信濃大町駅",
         duration:"約30分",
         weekday:"通年運行・要予約（大町市内タクシー各社。料金目安は片道約6,500円 — 大町市観光協会の案内）。下山時は冷池山荘で予約可能。", weekend:"同左",
         season:"通年（登山適期は6月下旬〜10月）", url:"https://kanko-omachi.gr.jp/spot/tozanguchi7/", sample:true},
        {mode:"バス", line:"市民バス ふれあい号「平（源汲）コース」（大町市）", from:"信濃大町駅（鹿島バス停まで。大谷原へはさらに徒歩・タクシー）",
         duration:"要確認",
         weekday:"運行あり（正確な便数・時刻は大町市公式サイトで要確認）", weekend:"土日祝日は運休（大町市観光協会の案内による）",
         season:"通年", url:"https://www.city.omachi.nagano.jp/kurashi/kotsu", sample:true}
      ]
    }
  ],
  huts:[
    {name:"種池山荘", elevation:2450, open:"2026年7月1日（水）〜10月17日（土）", reservation:"完全予約制。予約専用電話 0261-22-1263（7月以降 9:00〜17:00、5〜6月は10:00〜17:00・FAX不可）またはネット予約サイト。山小屋直通（緊急連絡用）080-1379-4042。", url:"https://www.kasimayari.jp/annai.htm", tel:"0261-22-1263"},
    {name:"冷池山荘", elevation:2410, open:"2026年7月1日（水）〜10月17日（土）", reservation:"完全予約制。予約専用電話 0261-22-1263（7月以降 9:00〜17:00、5〜6月は10:00〜17:00・FAX不可）またはネット予約サイト。山小屋直通（緊急連絡用）080-1379-4041。冬季は避難室を開放（使用料2,000円/人・自己責任）。", url:"https://www.kasimayari.jp/annai.htm", tel:"0261-22-1263"},
    {name:"新越山荘", elevation:2465, open:"2026年7月15日（水）〜9月26日（土）", reservation:"完全予約制。予約専用電話 0261-22-1263（9:00〜17:00・FAX不可）またはネット予約サイト。山小屋直通（緊急連絡用）080-1379-4043。テント指定地なし。", url:"https://www.kasimayari.jp/annai.htm", tel:"0261-22-1263"}
  ],
  routes:[
    {name:"柏原新道 扇沢起点 鹿島槍ヶ岳（南峰）往復", stats:"距離 約21.2km（往復）/ 累積標高差 登り約2,440m・下り約2,440m / 合計コースタイム 約14時間48分（1泊2日〜2泊3日が目安）", level:"上級", note:"種池山荘・冷池山荘公式サイトが案内する最も一般的なプラン。1泊目種池・2泊目冷池（またはその逆）でゆったり登るのが最も人気。危険箇所は少ないが行程が長大なため、体力・小屋泊装備が前提。2026年は登山口の扇沢橋工事で駐車場が縮小、公共交通利用推奨（山小屋公式サイトの案内）。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"赤岩尾根 大谷原起点 鹿島槍ヶ岳（南峰）往復", stats:"距離 約18.4km（往復）/ 累積標高差 登り約2,050m・下り約2,050m / 合計コースタイム 約14時間12分（1泊2日〜2泊3日が目安）", level:"上級", note:"柏原新道より急登でハシゴ・鎖場が多く、山小屋公式サイトも『赤岩尾根登山道はやや急登で柏原新道とちがってハシゴ段が多い』と案内。主に下山路として使われることが多い。大谷原の駐車スペースはごく少数のため公共交通機関がなくタクシー利用が前提。",
     popularity:1, trailhead:1, grade:{stamina:6, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"大谷原（赤岩尾根）→ 冷池山荘 → 鹿島槍ヶ岳 → 種池山荘 → 扇沢（柏原新道）縦走", stats:"距離 約19.8km（片道通し）/ 累積標高差 登り約2,400m・下り約2,140m / 合計コースタイム 約15時間6分（2泊3日が目安）", level:"上級", note:"種池山荘・冷池山荘公式サイトが『ゆったり二泊コース』のプラン３として紹介する周回ルート。赤岩尾根を登り、柏原新道を下ることで同じ道を歩かずに周回できる。下山口の扇沢と登山口の大谷原が離れているため、事前に交通手段（タクシー）の計画が必要。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"八峰キレット縦走（五竜岳・アルプス平駅 → 鹿島槍ヶ岳 → 大谷原）", stats:"距離 約21.3km / 累積標高差 登り約2,140m・下り約2,580m / 合計コースタイム 約19時間18分（2〜3泊が目安）", level:"上級", note:"後立山連峰随一の難所・八峰キレットを越えて五竜岳と鹿島槍ヶ岳を結ぶ健脚者・経験者向け縦走。岩稜の通過には鎖場・梯子が連続する。起点は五竜岳側（テレキャビン アルプス平駅）でこの山の登山口一覧には含まれないため、白馬五竜のゴンドラ公式サイト等で別途アクセスを確認すること。",
     popularity:1, trailhead:null, grade:{stamina:7, skill:"D", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"残雪期。柏原新道・赤岩尾根とも夏道が雪に埋もれ、アイゼン・ピッケルと的確な読図が必須。山小屋は未開設で、一般登山者向けの時期ではない。",
      6:"下旬にかけて柏原新道が順次雪解けし通行可能に近づくが、年による差が大きい。山小屋開設（7月1日）に向けた準備期間。",
      7:"1日に種池山荘・冷池山荘が、15日に新越山荘が開山。梅雨明け後が本番。稜線のお花畑が見頃を迎える。",
      8:"夏山最盛期。稜線は好天が続きやすいが午後の雷雨に注意。種池山荘名物『夏のピザ祭り』が開催される（お盆頃まで）。2026年は駐車場縮小のため週末・お盆の日帰りマイカー登山は公式に他山域への振替が呼びかけられている。",
      9:"秋の高気圧で安定した好天が多い。新越山荘は26日で閉山。下旬から紅葉が始まる。",
      10:"紅葉最盛期（上〜中旬）。種池山荘・冷池山荘は17日に閉山。閉山後は無雪期装備での入山適期を過ぎ、急速に積雪期の様相となる。",
      11:"初冬。柏原新道は通行不能になり得る時期に入り、一般登山者向けの季節は終わる。"
    }
  }
},
{
  id:"tsurugi", name_ja:"剱岳", name_en:"Mt. Tsurugi", region:"立山連峰", area:"北アルプス・御嶽", prefecture:"富山県",
  elevation:2999, hyakumeizan:true,
  coords:{lat:36.6234, lon:137.6172}, forecast_elevation:2900,
  grading:{
    ridgeline:2900,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"山頂直下の「カニのたてばい・よこばい」は鎖場・鉄杭が連続する痩せた岩稜。凍結・残雪時は鎖が使えず致命的な滑落事故に直結するため、雨天後の低温や早期降雪・遅くまで残る雪渓には特に警戒が必要。"
  },
  trailheads:[
    {name:"室堂ターミナル（標高2,450m）",
     access:[
       {mode:"電車", line:"立山線（富山地方鉄道）", from:"電鉄富山駅",
        duration:"約1時間",
        weekday:"日中は概ね30分〜1時間間隔で運行。始発・終電は公式サイトで要確認。", weekend:"同左（増発の場合あり・要確認）",
        season:"通年", url:"https://www.chitetsu.co.jp/", sample:true},
       {mode:"ケーブルカー", line:"立山ケーブルカー（立山黒部貫光）", from:"立山駅",
        duration:"約7分",
        weekday:"高原バスに接続する形で運行。始発・最終・便数は季節・日により変動するため公式時刻表で要確認。", weekend:"同左",
        season:"2026年は4/15〜11/3（11/4〜11/30は減便ダイヤ）", url:"https://www.alpen-route.com/timetable/", sample:true},
       {mode:"バス", line:"立山高原バス（立山黒部貫光）", from:"美女平",
        duration:"約50分",
        weekday:"ケーブルカーからの接続便として運行。始発・最終は公式時刻表で要確認。", weekend:"同左",
        season:"2026年は4/15〜11/3（11/4〜11/30は減便ダイヤ）", url:"https://www.alpen-route.com/timetable/", sample:true}
     ]},
    {name:"馬場島登山口（標高762m）",
     access:[
       {mode:"タクシー", line:"上市町内タクシー（早月尾根登山口への路線バスなし）", from:"上市駅（富山地方鉄道）",
        duration:"約40分",
        weekday:"定期バスはなく、通年タクシー利用が基本。事前予約推奨。", weekend:"同左",
        season:"通年（積雪期は道路状況により運休の場合あり）", url:"https://www.asahi-taxi0456.com/", sample:true}
     ]}
  ],
  huts:[
    {name:"剣山荘", elevation:2475, open:"7月上旬〜10月上旬（年度により変動、2026年の詳細日程は公式サイト要確認）",
     reservation:"電話予約（連絡所 076-482-1564）。夏季は山荘直通番号あり。", url:"https://www.kenzanso.com/", tel:"076-482-1564"},
    {name:"剱澤小屋", elevation:2400, open:"2026年は7月10日〜10月4日",
     reservation:"電話予約（8:00〜16:00、営業期間中）。Web予約サイト「やまたん」も利用可。", url:"https://tsurugisawagoya.com/", tel:"080-1968-1620"},
    {name:"早月小屋", elevation:2200, open:"2026年は7月17日〜10月4日（宿泊可能日）",
     reservation:"電話予約（営業期間中、5:00〜19:45）。シーズン外はメールが確実。", url:"https://hayatsukikoya.com/", tel:"090-7740-9233"},
    {name:"立山室堂山荘", elevation:2450, open:"2026年は4月15日〜11月23日",
     reservation:"要事前予約（公式サイト参照）。隣接して建つ旧「室堂小屋」（国指定重要文化財・現存最古の山小屋建築）とは別棟の現行宿泊施設。", url:"http://www.murodou.co.jp/", tel:"076-463-1228"}
  ],
  routes:[
    {name:"別山尾根 往復（室堂発）", stats:"距離 約16.7km（往復）/ 標高差 約1,900m / 合計コースタイム 約13時間20分（剣山荘泊まりの1泊2日が標準）", level:"上級",
     note:"日本を代表する岩稜ルート。山頂直下のカニのたてばい（登り専用）・よこばい（下り専用）は鎖場・鉄杭が連続し、ヘルメット必携。一服剱・前剱も痩せ尾根とクサリ場が続く。剣山荘または剱澤小屋での1泊が基本、日帰りは推奨しない。",
     popularity:3, trailhead:0,
     grade:{stamina:5, skill:"E", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/index.html"}},
    {name:"早月尾根 往復（馬場島発）", stats:"距離 約15.8km（往復）/ 標高差 約2,430m / 合計コースタイム 約15時間（早月小屋泊まりの1泊2日が標準）", level:"上級",
     note:"標高差2,200m超をひたすら登る国内屈指の急登ルート。前半は展望の乏しい樹林帯の直登、上部は岩稜でカニのハサミなどの岩場が続く。日帰りは経験豊富な健脚上級者のみ。",
     popularity:2, trailhead:1,
     grade:{stamina:6, skill:"E", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/index.html"}},
    {name:"早月尾根→別山尾根 縦走（馬場島→室堂）", stats:"距離 約16.2km（片道）/ 標高差 登り約3,050m・下り約1,360m / 合計コースタイム 約14時間40分（早月小屋・剣山荘泊などで2日以上が標準）", level:"上級",
     note:"早月尾根を登り、山頂を越えて別山尾根から室堂へ抜ける代表的な縦走プラン。行動時間・標高差ともに大きく、鎖場でのすれ違い判断と天候読みが要る。下山後は立山黒部アルペンルートで下山。",
     popularity:2, trailhead:1,
     grade:{stamina:7, skill:"E", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/index.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"アルペンルートは4/15開通。剱岳本体は残雪期の対象で残雪期経験のある上級者向け。積雪期の富山県登山届出条例（後述）は5/15まで適用。",
      6:"梅雨。稜線でも雪渓や凍結が残る年があり、カニのたてばい・よこばいが本格的な残雪装備なしでは通過できないことも。小屋開設前で行動は自己完結が前提。",
      7:"上旬は稜線に残雪が残ることがある。中旬（剣山荘は7月上旬、剱澤小屋は7/10、早月小屋は7/17）に各小屋が営業を始め、一般シーズンが本格化。",
      8:"盛夏で登山者が最も多い時期。小屋・幕営地は混雑しやすく、午後は雷雨が発生しやすいので早出・早着が鉄則。",
      9:"秋晴れが増え、天候が安定しやすい好期。稜線の紅葉が始まる。",
      10:"上旬〜中旬に稜線から紅葉。各小屋は10月上旬〜10月4日頃に閉鎖予定（2026年）で、以降は無雪期装備での一般登山が難しくなる。",
      11:"初冬。小屋は閉鎖済み、アルペンルートの便数も減る。無雪期の一般登山はほぼ終了。",
      12:"積雪期入り。富山県登山届出条例により12/1〜翌5/15に剱岳周辺で登山をする場合は登山日の20日前までに登山届の提出が義務。特別危険地区は12/1〜4/15の立入自粛が求められる。"
    }
  }
},
{
  id:"tateyama", name_ja:"立山（大汝山）", name_en:"Mt. Tateyama (Onanjiyama)", region:"立山連峰", area:"北アルプス・御嶽", prefecture:"富山県",
  elevation:3015, hyakumeizan:true,
  coords:{lat:36.575959, lon:137.619808}, forecast_elevation:3000,
  grading:{
    ridgeline:3000,
    wind_caution:9, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"一ノ越から雄山・大汝山にかけての岩稜は7月上旬まで雪渓が残ることがあり、アイゼン・ピッケルの要否を要判断。9月末以降は稜線の初雪・凍結にも注意。3,000m級のため気温は麓より18〜20℃低い。なお立山（弥陀ヶ原）は気象庁の常時観測火山（噴火警戒レベル1・2019年5月30日発表以降継続）で、室堂近くの地獄谷は高濃度の火山ガスのため立入禁止が続く。みくりが池温泉周辺でもガス臭時は滞留を避け、最新状況は気象庁の弥陀ヶ原ページ（data.jma.go.jp/vois/data/tokyo/309_Midagahara/309_index.html）で確認を。"
  },
  trailheads:[{
    name:"室堂ターミナル（標高2,450m）",
    access:[
      {mode:"電車", line:"富山地方鉄道 立山線", from:"電鉄富山駅（JR富山駅）",
       duration:"約1時間",
       weekday:"要確認", weekend:"要確認",
       season:"通年", url:"https://www.chitetsu.co.jp/?page_id=18889", sample:true},
      {mode:"ケーブルカー", line:"立山ケーブルカー（立山黒部貫光）", from:"立山駅（標高475m）",
       duration:"約7分／1.3km",
       weekday:"立山駅発 例: 6:40 / 7:00（以降は運行日限定便が混在し等間隔ではない。全便は公式時刻表で要確認）", weekend:"同左（繁忙期は増発の場合あり）",
       season:"2026年度は4/15〜11/3（11/4〜11/30は別紙ダイヤに切替）", url:"https://www.alpen-route.com/", sample:true},
      {mode:"バス", line:"立山高原バス（立山黒部貫光）", from:"美女平駅（標高977m）",
       duration:"約50分（美女平→弥陀ヶ原 約30分/15km、弥陀ヶ原→室堂 約20分/8km）",
       weekday:"要確認（立山ケーブルカーの到着に接続して運行）", weekend:"要確認",
       season:"2026年度は4/15〜11/3（弥陀ヶ原・弘法の乗降可能期間は7/1〜11/10予定）", url:"https://www.alpen-route.com/", sample:true},
      {mode:"バス・ケーブルカー・ロープウェイ", line:"立山黒部アルペンルート 長野側（関電トンネル電気バス→黒部ケーブルカー→立山ロープウェイ→立山トンネルトロリーバス）", from:"扇沢",
       duration:"約2時間（乗り継ぎ含む）",
       weekday:"要確認", weekend:"要確認",
       season:"2026年度は4/15〜11/30（11/4〜11/30は別紙ダイヤ）", url:"https://www.alpen-route.com/", sample:true}
    ]
  }],
  huts:[
    {name:"一の越山荘", elevation:2700, open:"2026年は4/25（土）〜10/17（土）夜の宿泊分まで", reservation:"電話予約制", url:"http://tateyama-1nokoshi.in.coocan.jp/", tel:"090-1632-4629"},
    {name:"みくりが池温泉", elevation:2410, open:"2026年は4/15〜11/24（6/14〜26は改修工事のため休館予定）・日本一高所の天然温泉、日帰り入浴9:00〜16:00", reservation:"Web予約（クレジット決済）または電話予約（現地精算）", url:"https://www.mikuri.com/", tel:"076-463-1441"}
  ],
  routes:[
    {name:"室堂→一ノ越→雄山→大汝山 往復", stats:"距離 約7.4km / 標高差 約565m / 登り2:30・下り2:00", level:"中級", note:"立山の最高点・大汝山まで足を延ばす最も一般的なコース。一ノ越までは整備された歩きやすい道、雄山からは岩稜歩き。山頂直下の雄山神社峰本社は例年7/1〜9/30開山（登拝料 大人700円・小人300円、御祈祷受付8:00〜15:00）。3,000m級のため天候急変・落雷・低体温症に厳重注意。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false}},
    {name:"雄山 往復（室堂ターミナル）", stats:"距離 5.8km / 標高差 約553m / 登り2:00・下り1:30", level:"初級〜中級", note:"富山県グレーディング公表ルート。大汝山へは向かわず雄山山頂（雄山神社峰本社）で折り返す最短コース。初めての3,000m峰入門として人気。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}},
    {name:"雄山→真砂岳 周回＜大走り下山＞（室堂ターミナル）", stats:"距離 約9.1km / 標高差 累積970m / 登り3:00・周回6:00", level:"中級", note:"富山県グレーディング公表ルート。一ノ越から雄山・大汝山（ルート中の最高点）を経て真砂岳へ縦走し、大走りの雪渓・ザレ場を室堂へ一気に下る立山三山周回コース。下山路は落石・スリップに注意。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      4:"立山黒部アルペンルートは例年4/15前後に富山側が全線開通するが、室堂周辺はまだ厳冬期の様相。無雪期登山道はまだ開かない。",
      5:"一ノ越山荘は例年4月下旬に開山するが、登山道には残雪・雪渓が多く残り雪山装備が必須。視界不良時の道迷いに注意。",
      6:"梅雨。稜線は年によって残雪が多く、雪渓のトラバースにアイゼン・ピッケルが必要な区間が残ることがある。",
      7:"7/1に雄山神社峰本社が開山（登拝料が必要）。上旬はまだ雪渓が残ることがあり、下旬から本格的な夏山シーズンに。",
      8:"シーズン最盛期。稜線ではコマクサ・チングルマ等の高山植物が見頃。午後は雷雲が発生しやすく、早朝出発・早めの行動を。",
      9:"9/30で雄山神社峰本社が閉山。中旬から紅葉が始まり、下旬には稜線で初雪の可能性も出てくる。",
      10:"2026年は10/17に一の越山荘が閉山。稜線は根雪が始まる年もあり、防寒・防風・アイゼンなど積雪期に準ずる装備が必要。",
      11:"アルペンルート富山側の本シーズンは11/3で終了（11/4〜11/30は別ダイヤの短縮運行）。厳冬期に近い状況で、雪山の経験と装備が必須。"
    }
  }
},
{
  id:"yakushi", name_ja:"薬師岳", name_en:"Mt. Yakushidake", region:"立山連峰", area:"北アルプス・御嶽", prefecture:"富山県",
  elevation:2926, hyakumeizan:true,
  coords:{lat:36.4689, lon:137.5447}, forecast_elevation:2900,
  grading:{
    ridgeline:2900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"太郎平から先は森林限界を超えた広い稜線が山頂まで続き、東面の金作谷カールなどには初夏まで大きな雪田が残る。稜線は9月末から積雪・凍結が始まるため、無雪期装備で歩けるのは実質7〜9月中心と考えたほうがよい。"
  },
  trailheads:[{
    name:"折立登山口（標高1,350m）",
    access:[
      {mode:"直行バス", line:"夏山バス 有峰線 直通バス（富山地方鉄道）", from:"富山駅前（南口）2番のりば",
       duration:"約1時間40分（途中トイレ休憩なし）。折立駐車場は無料・約100台（登山シーズンの週末は満車になりやすい）",
       weekday:"富山駅前発 例: 6:10（2026年は7/11〜8/23の毎日運行）", weekend:"富山駅前発 例: 6:10（2026年は8/29〜9/27は土・日・祝のみ運行）",
       season:"2026年度は7月11日〜9月27日（7/11〜8/23は毎日、8/29〜9/27は土日祝のみ）。予約は乗車日1ヶ月前9時から、当日空席があれば現金で乗車可。雨量規制による有峰林道通行止め時は運休。",
       url:"https://www.chitetsu.co.jp/?page_id=741", sample:true},
      {mode:"バス", line:"夏山バス 有峰線 電車・バス乗継（有峰口駅⇔折立）", from:"富山地方鉄道 立山線 有峰口駅",
       duration:"有峰口駅前発、折立まで約55分",
       weekday:"有峰口駅前発 例: 10:00（電鉄富山からの特急接続は平日9:00発）→折立10:55着", weekend:"有峰口駅前発 例: 10:00（特急接続は土日祝9:00発）→折立10:55着",
       season:"2026年度は7月11日〜9月27日（直通バスと同じ運行日）。富山地鉄乗車券センター（076-442-8122）で要予約。",
       url:"https://www.chitetsu.co.jp/?page_id=741", sample:true},
      {mode:"自家用車", line:"有峰林道 小見線・折立線（有料林道）", from:"富山IC・富山西IC方面 → 亀谷連絡所",
       duration:"亀谷連絡所から折立まで約40分。通行料金は小型車2,700円・大型車6,600円・二輪等600円（1回、令和8年度改定）。通行可能時間は6:00〜20:00（夜間通行禁止）。",
       weekday:"時間制限内は随時通行可（連絡所での支払いは現金のみ）", weekend:"同左",
       season:"2026年度は6月1日に小見線・折立線が開通。冬季は全線通行止め（例年11月中旬頃〜翌6月上旬、年により変動）。降雨時は雨量規制で通行止めになることがあるため事前に要確認。",
       url:"https://www.pref.toyama.jp/1603/kendodukuri/shinrinkasen/shinrin/kj00009876/kj00009876-001-01.html", sample:true}
    ]
  }],
  huts:[
    {name:"太郎平小屋", elevation:2330, open:"2026年6月6日〜10月18日", reservation:"太郎平小屋グループ山小屋ご予約システム（Web、2026年5月7日9:00受付開始）または電話。素泊まり・個室等プランあり。", url:"https://ltaro.com/lodge/tarodaira-goya/", tel:"076-482-1418"},
    {name:"太郎平キャンプ場（旧・薬師峠キャンプ場）", elevation:2294, open:"例年7月上旬〜9月下旬。2026年度の営業開始日はヘリ荷上げ・現地準備の進み具合により未定で、決まり次第ロッジ太郎の公式サイトで告知される。", reservation:"現地受付（誓約書記入必須）。クマ対策として食料は原則テント内に置かず、新設の食糧庫で保管。", url:"https://ltaro.com/news/post-409/", tel:"076-482-1418"},
    {name:"薬師岳山荘", elevation:2701, open:"例年7月上旬〜10月上旬（2026年の正式日程は公式サイト未掲載・電話で要確認）", reservation:"電話予約制（人数によらず必須、目安は2ヶ月ほど前）。支払いは現地現金のみ。当日キャンセル100%・前日キャンセル50%の取消料あり。", url:"https://www.yakushidake-sansou.com/", tel:"076-451-9222"}
  ],
  routes:[
    {name:"折立 → 太郎平 → 薬師峠 → 薬師岳山荘 → 薬師岳山頂 往復", stats:"距離 往復約20.5km / 標高差 約1,600m（折立1,350m〜山頂2,926m、累積登り約1,810m） / 1泊2日（公表コースタイム合計 約13.7時間・目安 1日目 折立→薬師岳山荘 約6:00・2日目 山頂往復＋下山 約7:40）", level:"中級", note:"北アルプス深部への最短ルートで、太郎平小屋・太郎平キャンプ場（テント泊）・薬師岳山荘のいずれかで1泊するのが標準。太郎平から先は森林限界を超え、東面の金作谷カールなど氷河地形とライチョウの生息地が広がる稜線歩きになる。遮るもののない稜線のため悪天候時は無理をしない。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}},
    {name:"立山（室堂ターミナル）→ 龍王岳・五色ヶ原・スゴ乗越 経由 → 薬師岳 → 折立 縦走", stats:"距離 約28.6km / 標高差 累積登り約2,230m・下り約3,300m / 2〜3泊が適当（公表コースタイム合計 約20.8時間）", level:"上級", note:"立山室堂から龍王岳の肩・五色ヶ原、スゴ乗越を経て北薬師岳・薬師岳を越え折立へ下る北アルプス屈指のロングルート（富山県公表表では「龍王岳→薬師岳（室堂ターミナル・折立）」の行に対応）。五色ヶ原山荘・スゴ乗越小屋など稜線上の小屋を利用した2〜3泊が前提。稜線が長く悪天候時のエスケープが少ないため、天候判断と体力・経験が求められる。",
     popularity:1, trailhead:null, grade:{stamina:8, skill:"C", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"有峰林道は6月1日開通予定（マイカーのみ、夏山バスは7月中旬から）。太郎平小屋は6月6日開山。稜線にはまだ残雪が多く、雪渓・凍結への備えが必要。",
      7:"7月11日から夏山バス運行開始。太郎平キャンプ場の営業開始日は現地準備の状況次第（公式サイトで告知）。お花畑と残雪が同居する時期。",
      8:"夏山シーズン最盛期で登山者が最も多い。バスは8月23日まで毎日運行、以降は土日祝のみに減便。金作谷カールなどの雪田は縮小するが場所によっては残る。",
      9:"上旬は土日祝のみバス運行（〜9/27）。中旬から紅葉が始まり、稜線の防寒対策が必須になる。",
      10:"上旬から薬師岳山荘（10月上旬）・太郎平小屋（10月18日）が順次営業終了。以降は無雪期装備での日帰りは難しく、本格的な冬支度が必要。有峰林道も例年11月中旬頃までに冬季閉鎖となる。"
    }
  }
},
{
  id:"kurobegoro", name_ja:"黒部五郎岳", name_en:"Mt. Kurobegoro", region:"黒部源流域（北アルプス）", area:"北アルプス・御嶽", prefecture:"富山県・岐阜県",
  elevation:2840, hyakumeizan:true,
  coords:{lat:36.3925, lon:137.5400}, forecast_elevation:2800,
  grading:{
    ridgeline:2800,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"山名の由来ともなった山頂直下の大カール（圏谷）や北ノ俣岳周辺の雪田は、年によって7月に入っても雪渓が残る。稜線は森林限界より上で風を遮るものがなく、無雪期でも強風・低体温症への備えが必須。北アルプスでも屈指の奥地で、悪天候時の停滞・撤退判断が命に直結する。"
  },
  trailheads:[
    {
      name:"折立登山口（標高1,350m）",
      access:[
        {mode:"バス", line:"夏山バス 有峰線（富山地方鉄道）", from:"富山駅前（南口）2番のりば",
         duration:"約1時間40分",
         weekday:"富山駅前発 6:10（折立着7:50）／折立発12:10（富山駅前着14:10）", weekend:"同ダイヤ（運行日は運行カレンダーによる）",
         season:"2026年は7/11(土)〜8/23(日)毎日運行、8/29(土)〜9/27(日)は土日祝のみ運行。予約制（乗車日の1か月前9時から受付）。雨量規制による有峰林道通行止めで運休の場合あり。", url:"https://www.chitetsu.co.jp/?page_id=741", sample:true},
        {mode:"電車+バス乗継", line:"富山地方鉄道 立山線（特急）→ 夏山バス 有峰線 乗継", from:"電鉄富山駅",
         duration:"電車・バス合計 約1時間55分（有峰口で乗換）",
         weekday:"バス乗継 有峰口駅前発10:00→折立10:55着（接続する電鉄富山発の特急時刻は公式時刻表で要確認）", weekend:"同ダイヤ",
         season:"直通バスと同期間・同運行日。バス区間は予約制。", url:"https://www.chitetsu.co.jp/?page_id=741", sample:true}
      ]
    },
    {
      name:"新穂高温泉登山口（標高約1,090m）",
      access:[
        {mode:"バス", line:"平湯・新穂高線（濃飛バス）", from:"JR高山本線 高山駅（高山濃飛バスセンター）",
         duration:"約45分",
         weekday:"高山発 例: 6:00 / 7:00 / 8:10 / 9:40 / 10:40（おおむね1時間に1本）", weekend:"同左（増便日あり）",
         season:"通年運行（高山・平湯温泉からの乗車は予約不要）。積雪期は減便。", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true},
        {mode:"高速バス", line:"松本〜新穂高線（アルピコ交通・濃飛バス共同運行）", from:"松本バスターミナル",
         duration:"約2時間",
         weekday:"松本発 例: 7:40 / 9:55 / 10:55 / 11:55 / 13:05 / 14:55 / 17:45", weekend:"同ダイヤ",
         season:"季節・便数限定運行、要予約（乗車日の1か月前から受付）。2026年は11月15日まで運行を確認。詳細な運行開始日は公式サイトで要確認。", url:"https://www.alpico.co.jp/traffic/express/matsumoto_takayama/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"太郎平小屋", elevation:2330, open:"2026年6月6日〜10月18日（天候・残雪状況により変動の可能性あり）", reservation:"Web予約または電話予約（2026年シーズンの宿泊予約受付は5月7日開始予定）", url:"https://ltaro.com/lodge/tarodaira-goya/", tel:"076-482-1418"},
    {name:"薬師沢小屋", elevation:1920, open:"2026年7月1日〜10月8日", reservation:"Web予約または電話予約（太郎平小屋グループ共通）", url:"https://ltaro.com/lodge/yakushizawa-goya/", tel:"076-482-1418"},
    {name:"黒部五郎小舎", elevation:2350, open:"2026年7月10日〜10月15日（予約制）", reservation:"オンライン宿泊予約システムで空室確認・予約。当日の予約変更・キャンセルは現地電話へ。", url:"https://www.sugorokugoya.com/kurobe/", tel:"080-1588-1606（現地直通・営業期間中7:00〜19:00）／0577-34-6268（双六小屋事務所・9:00〜18:00）"},
    {name:"双六小屋", elevation:2600, open:"2026年7月10日〜10月20日（予約制）", reservation:"オンライン宿泊予約システムで空室確認・予約。当日の予約変更・キャンセルは現地電話へ。", url:"https://www.sugorokugoya.com/sugoroku/", tel:"090-3480-0434（現地直通・営業期間中7:00〜19:00）／0577-34-6268（事務所・9:00〜18:00）"}
  ],
  routes:[
    {name:"折立→太郎平小屋→北ノ俣岳（上ノ岳）→黒部五郎岳 往復", stats:"距離 往復約30.1km / 標高差 累積登り約2,290m・下り約2,290m / 合計コースタイム 往復約17時間35分（富山県 山のグレーディングより）", level:"上級", note:"富山県側からの最短ルートだが日帰りは不可能。太郎平小屋（または薬師沢小屋経由）で1泊し、黒部五郎小舎まで足を延ばして2泊3日にするのが一般的。北ノ俣岳から先は森林限界を超えた稜線歩きが長く、ガスが出ると視界不良になりやすい。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"B", official:true, src:"富山県 山のグレーディング", url:"https://www.pref.toyama.jp/1709/kurashi/sportsleisure/tozan/kj00021724/kj00021724-001-01.html"}},
    {name:"新穂高温泉→双六小屋→三俣蓮華岳（巻道）→黒部五郎小舎→黒部五郎岳 往復", stats:"距離 往復約44.0km / 標高差 累積登り約3,670m・下り約3,670m / 合計コースタイム 往復約25時間12分（岐阜県 山のグレーディングより）", level:"上級", note:"岐阜県側からの主要ルート。小池新道・鏡平・双六小屋を経て北アルプス核心部を縦断する長丁場で、3泊4日が標準。双六小屋〜三俣蓮華岳間は稜線の風雨に注意。わさび平・鏡平など水場は豊富。",
     popularity:3, trailhead:1, grade:{stamina:10, skill:"C", official:true, src:"岐阜県 山のグレーディング", url:"https://www.pref.gifu.lg.jp/page/14382.html"}},
    {name:"折立→黒部五郎岳→双六岳→新穂高温泉 縦走", stats:"距離 通算約35〜40km（片道、太郎平・黒部五郎小舎・双六小屋経由） / 標高差 大きなアップダウンを繰り返す稜線縦走 / 3〜4泊が目安", level:"上級", note:"富山・岐阜どちらの県のグレーディング表にも起終点が一致する行がないため独自推定（点線表示）。北アルプス最奥部を横断する健脚向けルートで、荷物・行動時間ともに長期山行の装備と経験が必要。下山口の交通機関の時刻に合わせた計画が必須。",
     popularity:1, trailhead:0, grade:{stamina:10, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期。稜線は本格的な雪山でアイゼン・ピッケルと読図技術が必須。山小屋はすべて未開設。",
      6:"太郎平小屋・薬師沢小屋が順次開く時期（6月6日〜）だが、黒部五郎小舎・双六小屋は7月10日まで未開設。稜線・カールにはなお雪渓が多く残る。",
      7:"中旬から黒部五郎小舎・双六小屋が開き主要ルートが揃う。梅雨明け後が本番で、カール周辺のお花畑が見頃を迎える。",
      8:"夏山最盛期。稜線の雪渓はおおむね消えるが、カール上部には残ることもある。",
      9:"安定した晴天が多く歩きやすい時期。中旬から紅葉が始まるが、台風接近時は稜線の暴風雨に厳重注意。",
      10:"上旬〜中旬が紅葉の見頃。中旬過ぎから小屋が順次閉まり（黒部五郎小舎10/15、太郎平小屋10/18）、以降は初雪の便りも入り始める。"
    }
  }
},
{
  id:"suisho", name_ja:"水晶岳（黒岳）", name_en:"Mt. Suisho (Kurodake)", region:"黒部源流域（北アルプス）", area:"北アルプス・御嶽", prefecture:"富山県",
  elevation:2986, hyakumeizan:true,
  coords:{lat:36.4264, lon:137.6028}, forecast_elevation:2900,
  grading:{
    ridgeline:2900,
    wind_caution:12, wind_danger:18,
    precip_caution:3, precip_danger:9,
    snow_months:[9,10,11,12,1,2,3,4,5,6],
    snow_note:"北アルプス最深部の3,000m級岩稜。稜線は9月から初雪が降り始め、6月まで雪渓・残雪が残る年が多く、残雪期はアイゼン・ピッケルが前提。登山口から山頂まで最短でも1泊2日以上を要し、悪天候時に短時間で下山・撤退できないため、風予報は特に厳しめに見る。"
  },
  trailheads:[
    {
      name:"高瀬ダム登山口（ブナ立尾根登山口・標高約1,275m）",
      access:[
        {mode:"バス", line:"裏銀座登山バス（大町市）", from:"JR信濃大町駅（大町温泉郷経由）",
         duration:"約35分",
         weekday:"信濃大町駅発 例: 要確認（1日4往復・特定日運行のため公式サイトで要確認）", weekend:"同左",
         season:"2026年は7月17日〜10月25日の特定日運行（予約不要）", url:"https://uraginzabus.com/", sample:true},
        {mode:"タクシー", line:"七倉〜高瀬ダム特定タクシー（アルピコタクシー大町支社・アルプス第一交通）", from:"七倉登山口（七倉山荘前ゲート）",
         duration:"約15分",
         weekday:"夏山繁忙期は朝5:00頃から運行、片道約2,700円（4人乗り普通車・2026年7月現在）。始発は個人予約不可で七倉広場タクシー乗り場に並ぶ順番待ち。", weekend:"同左",
         season:"新高瀬川発電所管理用道路の通行可能期間中（残雪状況により変動、詳細は大町市観光協会サイトで要確認）", url:"https://webmarunaka.com/nanakura/access", sample:true}
      ]
    },
    {
      name:"折立登山口（標高約1,350m）",
      access:[
        {mode:"バス", line:"夏山バス 有峰線（富山地方鉄道）", from:"富山駅前",
         duration:"約1時間40分（直通便の場合）",
         weekday:"富山駅前発 例: 6:10（折立7:50着）、折立発 例: 12:10（富山駅前14:10着）。このほか有峰口駅で乗り継ぐ便もあり本数は日により異なる。", weekend:"同左",
         season:"例年7月上旬〜9月下旬。富山駅からの直通便は期間限定（2026年の正確な運行区分・時刻は公式サイトで要確認）", url:"https://www.chitetsu.co.jp/?page_id=741", sample:true}
      ]
    }
  ],
  huts:[
    {name:"烏帽子小屋", elevation:2551, open:"2026年は7月11日（土）〜9月30日（水）", reservation:"予約センター（宿泊日の1か月前から受付）", url:"https://www.ne.jp/asahi/eboshidake/2628/", tel:"050-3171-2604"},
    {name:"野口五郎小屋", elevation:2870, open:"例年7月中旬〜9月下旬（詳細は公式サイトで要確認）", reservation:"電話予約のみ（メール・SNSでの予約不可）", url:"https://www.gorougoya.com/", tel:"090-3149-1197"},
    {name:"水晶小屋", elevation:2900, open:"2026年は7月10日〜9月30日", reservation:"電話（山小屋直通・営業期間中7:00〜16:00）またはメール予約", url:"https://mitsumatasanso.com/suisho", tel:"050-8892-3572"},
    {name:"雲ノ平山荘", elevation:2650, open:"例年7月上旬〜9月下旬（詳細は公式サイトで要確認）", reservation:"電話予約または公式サイト予約フォーム", url:"https://kumonodaira.com/", tel:"050-8882-5954"}
  ],
  routes:[
    {name:"裏銀座縦走（高瀬ダム→ブナ立尾根→烏帽子小屋→野口五郎岳→水晶小屋→水晶岳）", stats:"標高差 約1,710m（高瀬ダム1,275m→水晶岳2,986m）/ 片道距離 約16km / 2泊3日が標準（1日目 高瀬ダム→烏帽子小屋 約4〜5時間、2日目 烏帽子小屋→野口五郎小屋→水晶小屋 約7〜8時間、3日目 水晶小屋→水晶岳山頂往復＋下山または縦走継続）", level:"上級", note:"ブナ立尾根は北アルプス三大急登の一つ。七倉〜高瀬ダム間は一般車両通行不可で特定タクシー利用が前提。稜線に出てからも展望は良いが小屋間隔が長く、悪天候時の避難場所が少ない。",
     popularity:3, trailhead:0, grade:{stamina:9, skill:"C", official:false}},
    {name:"折立→太郎平→雲ノ平経由 水晶岳 往復", stats:"標高差 約1,640m（折立1,350m→水晶岳2,986m、累積標高差はアップダウンを含めさらに大きい）/ 3泊4日以上が目安（折立→太郎平→薬師沢小屋、薬師沢小屋→雲ノ平→水晶小屋、水晶岳往復後に周辺の山小屋へ、下山という日程が一般的）", level:"上級", note:"「日本最後の秘境」雲ノ平の平坦な庭園状の稜線を経由する、時間はかかるが眺望に優れたルート。薬師沢の渡渉・梯子や雲ノ平から水晶小屋への岩稜帯は天候急変時に注意。", popularity:2, trailhead:1, grade:{stamina:10, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期・厳冬期に近い状態。稜線の主要小屋も未開設で一般登山の適期外。",
      6:"山小屋開設前で残雪も多く、上級者・積雪期装備が前提。",
      7:"中旬に主要な山小屋が開き本格的なシーズン開始。梅雨明けのタイミングと残雪状況に注意。",
      8:"盛夏の最盛期。午後は雷雨が発生しやすく、稜線での行動時間配分と早出早着が重要。",
      9:"稜線の草紅葉が始まる。下旬は冷え込みが強まり、初雪の可能性もあるため防寒装備必須。",
      10:"山小屋がほぼ閉じる時期（下旬までに下山推奨）。稜線は積雪・凍結の危険が急速に高まる。"
    }
  }
},
{
  id:"washiba", name_ja:"鷲羽岳", name_en:"Mt. Washiba", region:"北アルプス（裏銀座・黒部源流域）", area:"北アルプス・御嶽", prefecture:"長野県・富山県",
  elevation:2924, hyakumeizan:true,
  coords:{lat:36.402996, lon:137.60525}, forecast_elevation:2900,
  grading:{
    ridgeline:2900,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"黒部川源流域の最深部に位置し、どのルートも山小屋2泊以上が前提。稜線は9月末から積雪・凍結が始まり、悪天候時に短時間で下山できる地形ではないため、天気予報と停滞判断は特に慎重に。"
  },
  trailheads:[{
    name:"新穂高温泉登山口（標高1,091m・新穂高登山指導センター）",
    access:[
      {mode:"バス", line:"新穂高線（濃飛乗合自動車）", from:"高山濃飛バスセンター（JR高山駅前）",
       duration:"約1時間45分",
       weekday:"高山濃飛バスセンター発 例: 6:00 / 7:00 / 7:40 / 8:10（以降は要確認）", weekend:"同左",
       season:"通年運行（積雪期は減便、詳細は要確認）", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true},
      {mode:"バス", line:"新穂高線（濃飛乗合自動車）", from:"平湯温泉（平湯バスターミナル）",
       duration:"約45分",
       weekday:"平湯温泉発 例: 7:00 / 7:40 / 8:00 / 8:40（以降は要確認）", weekend:"同左",
       season:"通年運行", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true}
    ]
  },{
    name:"高瀬ダム登山口（七倉より先・標高約1,275m）",
    access:[
      {mode:"バス", line:"裏銀座登山バス（大町市運行）", from:"JR大糸線 信濃大町駅",
       duration:"約45分（七倉山荘前まで）",
       weekday:"特定日運行・発車時刻は公式サイトの時刻表画像を要確認", weekend:"同左",
       season:"2026年は7月17日〜10月25日の特定日運行（乗車予約不要）", url:"https://uraginzabus.com/", sample:true},
      {mode:"タクシー", line:"七倉〜高瀬ダム間シャトルタクシー（アルピコタクシー大町支社・アルプス第一交通）", from:"七倉山荘前（七倉ゲート）",
       duration:"約15分",
       weekday:"随時運行 例: 夏山繁忙期は5:00〜運行開始（通常期6:30〜17:00、終業40分前まで受付）", weekend:"同左",
       season:"通年（積雪期の運行は要問合せ）。高瀬ダムより先はマイカー規制、徒歩の場合は七倉から約1時間50分", url:"https://webmarunaka.com/nanakura/access", sample:true}
    ]
  }],
  huts:[
    {name:"わさび平小屋", elevation:1400, open:"7月10日〜10月20日（2026年度・予約制）", reservation:"公式Web予約または電話。当日の予約・変更は現地電話へ", url:"https://www.sugorokugoya.com/wasabi/", tel:"090-8074-7778"},
    {name:"鏡平山荘", elevation:2300, open:"7月10日〜10月15日（2026年度・予約制）", reservation:"公式Web予約または電話。当日の予約・変更は現地電話へ", url:"https://www.sugorokugoya.com/kagami/", tel:"090-1566-7559"},
    {name:"双六小屋", elevation:2600, open:"7月10日〜10月20日（2026年度・完全予約制）", reservation:"公式Web予約または電話（事務所0577-34-6268 9:00〜18:00）", url:"https://www.sugorokugoya.com/sugoroku/", tel:"090-3480-0434"},
    {name:"三俣山荘", elevation:2550, open:"7月4日〜10月15日（2026年度・完全予約制）", reservation:"公式Web予約（宿泊日の60日前から受付、予約金制度あり）。当日変更は現地電話", url:"https://mitsumatasanso.com/mitsumata", tel:"050-8882-5833"},
    {name:"水晶小屋", elevation:2900, open:"7月10日〜9月30日（2026年度・三俣山荘グループ）", reservation:"公式Web予約（三俣山荘グループ）。当日変更は現地電話", url:"https://mitsumatasanso.com/suisho", tel:"050-8892-3572"}
  ],
  routes:[
    {name:"新穂高温泉→わさび平→鏡平→双六小屋→三俣山荘 経由 鷲羽岳 往復", stats:"距離 約36km（往復）/ 標高差 約1,830m / 山小屋2泊3日が標準（歩行時間の目安 1日目 新穂高→双六小屋 約7〜8時間・2日目 双六小屋→三俣山荘→鷲羽岳往復→双六小屋泊 約6〜7時間・3日目 下山 約6時間）", level:"上級", note:"北アルプス最奥部への長丁場。小池新道は鏡平までよく整備された樹林帯・岩ゴロ道、双六小屋から先は稜線歩き。三俣山荘から鷲羽岳山頂直下は急なガレの登り。日帰り・軽装での入山は不可。",
     popularity:3, trailhead:0, grade:{stamina:9, skill:"B", official:false}},
    {name:"高瀬ダム→ブナ立尾根→烏帽子岳→野口五郎岳→水晶岳 経由 鷲羽岳（裏銀座縦走）", stats:"距離 約30km（高瀬ダム〜鷲羽岳・片道）/ 標高差 約1,650m / 山小屋2〜3泊が標準", level:"上級", note:"「北アルプス三大急登」のブナ立尾根で稜線に上がり、烏帽子岳・野口五郎岳・水晶岳を経て黒部源流の鷲羽岳へ抜ける裏銀座縦走の核心部。稜線歩きが長く、悪天候時のエスケープが乏しい。新穂高側へ下山するか上高地側へ抜けるかは体力・天候を見て判断。",
     popularity:2, trailhead:1, grade:{stamina:9, skill:"C", official:false}},
    {name:"三俣山荘→鷲羽岳 往復（縦走中の立ち寄り）", stats:"距離 約2.4km / 標高差 約370m / 登り1:00・下り0:45", level:"中級", note:"三俣山荘を拠点に鷲羽岳山頂だけを往復する場合の目安。山頂からは槍穂高・立山・水晶岳など北アルプス核心部の大展望。稜線上部はガレ・強風に注意。",
     popularity:2, trailhead:null, grade:{stamina:3, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"多くの山小屋がまだ営業前（開設は概ね7月上旬〜中旬）。稜線には残雪が多く残り、雪渓歩行の技術と装備が必要な残雪期。",
      7:"上旬〜中旬に主要な山小屋が順次営業開始。梅雨明け後が北アルプス最奥部への本格的な入山シーズンの始まり。",
      8:"夏山最盛期。小屋・テント場とも混雑しやすく予約は早めに。午後の雷雨が多いため早出・早着を徹底。",
      9:"上旬まで盛夏の延長、下旬から稜線で紅葉と初雪が交錯し始める。三俣山荘・双六小屋とも中旬にかけて営業終了に向かう。",
      10:"多くの山小屋が中旬〜下旬で営業終了（水晶小屋は9月末まで）。稜線は積雪・凍結が本格化し、無雪期装備での入山は難しくなる。"
    }
  }
},
{
  id:"yari", name_ja:"槍ヶ岳", name_en:"Mt. Yari", region:"北アルプス南部", area:"北アルプス・御嶽", prefecture:"長野県・岐阜県",
  elevation:3180, hyakumeizan:true,
  coords:{lat:36.3420, lon:137.6478}, forecast_elevation:3100,
  grading:{
    ridgeline:3100,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:9,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"山頂直下・穂先の梯子と鎖は残雪・凍結に非常に弱く、6月頃まで雪渓や凍結箇所が残る年が多い。槍沢・飛騨沢とも上部は雪渓歩行になることがあり、アイゼン・ピッケルと技術が必要。"
  },
  trailheads:[
    {
      name:"上高地バスターミナル（標高1,504m）",
      access:[
        {mode:"バス", line:"上高地線（新島々駅－上高地、アルピコ交通）", from:"アルピコ交通上高地線 新島々駅（松本駅から私鉄で約30分）",
         duration:"約1時間5分（新島々駅から）",
         weekday:"新島々駅発 例: 7:10 / 8:00 / 8:40 / 9:30", weekend:"新島々駅発 例: 7:10 / 8:00 / 8:40 / 9:30（平日・休日の別記載なし、繁忙期は増便）",
         season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/shinshimashima/", sample:true},
        {mode:"直行バス", line:"ナショナルパークライナー（アルピコ交通・予約優先制）", from:"松本バスターミナル",
         duration:"約1時間35分〜45分",
         weekday:"松本BT発 例: 5:30 / 7:05 / 10:15 / 11:55", weekend:"松本BT発 例: 5:30 / 7:05 / 10:15 / 11:55（曜日により便数増減あり、詳細は公式サイト参照）",
         season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/national/", sample:true},
        {mode:"シャトルバス", line:"沢渡－上高地線（アルピコ交通、マイカー規制区間の乗り継ぎ）", from:"沢渡（さわんど）駐車場",
         duration:"約30分",
         weekday:"要確認（約30分間隔で運行）", weekend:"要確認（繁忙期は増便）",
         season:"2026年4月17日〜11月15日（上高地マイカー規制期間）", url:"https://www.kamikochi.or.jp/access/sawando/", sample:true}
      ]
    },
    {
      name:"新穂高温泉（新穂高ロープウェイ第1乗り場前・登山指導センター、標高約1,091m）",
      access:[
        {mode:"バス", line:"新穂高線（濃飛バス）", from:"高山濃飛バスセンター／平湯温泉",
         duration:"約1時間45分（高山から）・約35分（平湯温泉から）",
         weekday:"高山濃飛バスセンター発 例: 6:00 / 7:00 / 8:10 / 10:40", weekend:"高山濃飛バスセンター発 例: 6:00 / 7:00 / 8:10 / 10:40（繁忙期は増便、迂回運行日あり）",
         season:"通年運行（積雪期は減便、詳細は公式サイト参照）", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true},
        {mode:"シャトルバス", line:"あかんだな駐車場・平湯温泉－上高地線（アルピコ交通）", from:"あかんだな駐車場（新穂高・上高地縦走時の乗り継ぎ拠点）",
         duration:"約35分（上高地まで）",
         weekday:"あかんだな駐車場発 例: 4:50〜16:50（30分間隔）", weekend:"同左（繁忙期は増便）",
         season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/hirayu/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"槍沢ロッヂ", elevation:1820, open:"4月27日〜11月3日（2026年）", reservation:"WEB予約（事前決済制）推奨。営業期間中は現地電話でも予約可。", url:"https://www.yarigatake.co.jp/yarisawa/", tel:"090-8250-2297"},
    {name:"殺生ヒュッテ（殺生小屋）", elevation:2870, open:"6月6日〜10月11日（2026年）", reservation:"WEB予約推奨。テント場あり（フロントで受付）。", url:"https://www.yarigatake.co.jp/sesshou/", tel:"080-8108-0361"},
    {name:"ヒュッテ大槍", elevation:2884, open:"2026年7月1日〜10月12日宿泊分まで（燕山荘グループ運営）", reservation:"WEB宿泊予約システム（当日朝7時まで受付）。電話予約もWEBに集約。", url:"https://www.enzanso.co.jp/hutte-ooyari", tel:"080-8728-8805（衛星電話のため通話料が高め）"},
    {name:"槍ヶ岳山荘", elevation:3080, open:"4月27日〜11月3日（2026年）。夏季診療所は7月20日頃〜8月20日頃併設。", reservation:"WEB予約推奨（宿泊1か月前の朝9時受付開始）。現地電話でも予約可。", url:"https://www.yarigatake.co.jp/yarigatake/", tel:"090-2641-1911"}
  ],
  routes:[
    {name:"上高地→横尾→槍沢→槍ヶ岳山荘→穂先 往復（槍沢ルート）", stats:"距離 約39km（往復）/ 標高差 約1,680m / 1泊2日が前提（公表コースタイム合計 約20時間）", level:"上級", note:"上高地からの最も一般的な登路。横尾までは平坦な林道歩き、槍沢に入ってから徐々に傾斜が増し、山荘直下の梯子・鎖が連続する「穂先」が核心部。",
     popularity:3, trailhead:0, grade:{stamina:8, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"新穂高温泉→槍平小屋→飛騨沢→槍ヶ岳山荘→穂先 往復（飛騨沢ルート）", stats:"距離 約26km（往復）/ 標高差 約2,090m / 1泊2日が前提（公表コースタイム合計 約17時間）", level:"上級", note:"岐阜県側からの最短路。槍平小屋を過ぎると飛騨乗越まで急登が続き、標高差が大きく体力を要する。落石の多い沢沿い区間もある。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"C", official:true, src:"岐阜県 山のグレーディング（日本百名山ルート一覧表）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"表銀座縦走（中房温泉→燕岳→大天井岳→槍ヶ岳→上高地）", stats:"2〜3泊 / 距離 約37.5km（燕岳登山口→槍ヶ岳→上高地）/ 公表コースタイム合計 約25時間20分", level:"上級", note:"北アルプス随一の展望縦走路。大天井岳から先はやせ尾根やヒュッテ西岳周辺の岩場もあり、天候急変時の稜線での行動判断が求められる。小屋予約必須。",
     popularity:2, trailhead:null, grade:{stamina:9, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表・上高地下山まで含む全行程）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"残雪期。槍沢・飛騨沢とも上部は雪渓が連続し、アイゼン・ピッケルと雪上歩行技術が必須。主要山小屋は未開設（槍ヶ岳山荘・槍沢ロッヂは4月27日開山予定）。",
      6:"梅雨。上部の雪渓はなお残るが、殺生ヒュッテ（6月6日開設）など小屋が順次営業を始める。穂先の梯子・鎖は残雪・凍結に厳重注意。",
      7:"梅雨明け以降が本格シーズン。ヒュッテ大槍・南岳小屋・大天井ヒュッテなど高所の小屋も7月上旬〜中旬に開設し、全ルートが歩きやすくなる。",
      8:"夏山最盛期。上高地・新穂高とも登山者で大混雑し、山小屋・テント場は早めの予約が必須。午後は雷雨が多く早出早着が鉄則。",
      9:"上旬は盛夏の延長、下旬から稜線の草紅葉が始まる。台風接近時は稜線の暴風・大雨に厳重注意。",
      10:"紅葉と初雪が交錯する時期。中旬以降は積雪・凍結が急速に進み、南岳小屋・大天井ヒュッテなど高所の小屋から順に閉じる（10月11〜12日頃）。",
      11:"初旬に槍ヶ岳山荘・槍沢ロッヂも閉山（11月3日まで）。以降は本格的な積雪期に入り、無雪期装備での入山は困難。"
    }
  }
},
{
  id:"okuhotaka", name_ja:"穂高岳（奥穂高岳）", name_en:"Mt. Hotaka (Okuhotaka)", region:"北アルプス南部（穂高連峰）", area:"北アルプス・御嶽", prefecture:"長野県・岐阜県",
  elevation:3190, hyakumeizan:true,
  coords:{lat:36.2892, lon:137.6481}, forecast_elevation:3100,
  grading:{
    ridgeline:3100,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"涸沢カールの雪渓は例年7月上旬まで残り、ザイテングラート下部や穂高岳山荘直下の岩稜も残雪と混在する。無雪期でも山頂直下・吊尾根・重太郎新道は転落・滑落事故が国内有数に多い区間で、荒天時は稜線への突入を控えること。"
  },
  trailheads:[{
    name:"上高地バスターミナル（標高1,505m）",
    access:[
      {mode:"電車+バス", line:"松本電鉄上高地線（電車）+ 上高地線バス（アルピコ交通）", from:"JR松本駅",
       duration:"乗継含め約1時間45分",
       weekday:"松本駅発 例: 6:31 / 8:01 / 9:24 / 12:09（新島々駅でバスに乗換、上高地着 例: 8:15 / 9:45 / 11:10 / 13:55）", weekend:"平日・休日の区別なし（上記と同一）",
       season:"2026年4月17日〜11月15日（上高地マイカー規制期間と同一）", url:"https://www.alpico.co.jp/traffic/local/kamikochi/shinshimashima/", sample:true},
      {mode:"直行バス", line:"ナショナルパークライナー（アルピコ交通・予約優先制）", from:"松本バスターミナル",
       duration:"約1時間35分", weekday:"松本バスターミナル発 例: 5:30 / 10:15（上高地着 例: 7:05 / 11:55）", weekend:"同上（予約優先・満席時は先着順で乗車不可の場合あり）",
       season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/national/", sample:true},
      {mode:"バス", line:"平湯温泉〜上高地線（濃飛バス、岐阜県側からのアクセス）", from:"平湯温泉（高山方面から）",
       duration:"約25〜30分", weekday:"平湯温泉発 例: 5:00始発、6:00以降は毎時00分・30分発、最終17:55発", weekend:"同上",
       season:"2026年4月17日〜11月15日", url:"https://www.nouhibus.co.jp/route_bus/kamikochi-line/", sample:true}
    ]
  }],
  huts:[
    {name:"涸沢ヒュッテ", elevation:2350, open:"4月27日〜11月3日（2026年、5月11日〜31日は改修工事のため休業）", reservation:"完全予約制。1〜4名は宿泊予約サイト「やまたん」（Web）、5名以上・相部屋希望は電話。2026年シーズンの予約受付は3月27日8時開始。", url:"https://karasawa-hyutte.com/inn/", tel:"090-9002-2534"},
    {name:"涸沢小屋", elevation:2350, open:"4月27日〜11月3日（2026年）", reservation:"電話予約。4/27〜5/25分は4/25一斉受付、以降は1ヵ月前の同日から受付。", url:"https://karasawagoya.com/", tel:"090-2204-1300"},
    {name:"穂高岳山荘", elevation:2996, open:"4月27日〜11月3日（2026年、売店のみ11月4日も営業）", reservation:"電話または公式Web予約ページから", url:"https://www.hotakadakesanso.com/reservation", tel:"090-7869-0045（営業期間中・現地直通、8:00〜19:00）"},
    {name:"岳沢小屋", elevation:2170, open:"4月27日〜11月3日（2026年）", reservation:"電話予約", url:"https://www.yarigatake.co.jp/dakesawa/", tel:"090-2546-2100（現地直通、7月22日〜10月17日）"}
  ],
  routes:[
    {name:"上高地→横尾→涸沢→ザイテングラート→穂高岳山荘→奥穂高岳 往復", stats:"距離 約36.6km（往復）/ 標高差 約1,690m / 合計コースタイム17.7時間（1泊2日〜2泊3日が標準、日帰りは非推奨）", level:"上級", note:"最も一般的な登路。ザイテングラート上部から穂高岳山荘直下、山頂直下の岩稜は毎年滑落事故が発生する区間でヘルメット推奨。横尾までは平坦な林道歩き。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"C", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"上高地→横尾→涸沢カール 往復（山頂は目指さない）", stats:"距離 約30.6km（往復）/ 標高差 約750m / 合計コースタイム11.3時間（日帰りも可能だが小屋泊が一般的）", level:"中級", note:"氷河圏谷・涸沢カールと穂高の岩壁を眺めるトレッキング。9月下旬〜10月上旬の紅葉期が特に人気で大混雑。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"上高地→岳沢小屋→重太郎新道→前穂高岳→吊尾根→奥穂高岳", stats:"標高差 約1,690m / 片道 約8〜9時間（岳沢小屋泊を含む1泊2日以上が前提、日帰り不可）", level:"上級", note:"重太郎新道は梯子・鎖の連続する急登、吊尾根は切れ落ちた岩稜のトラバースが続く上級者向けルート。信州グレーディングの公表ルート（前穂高岳＜重太郎新道＞、奥穂高岳＜涸沢＞、穂高縦走＜北穂→前穂＞）のいずれとも起点・区間が一致しないため独自推定。下山は涸沢・上高地経由が一般的。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"D", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      4:"17日から上高地の通行規制期間が始まり山開き。稜線は残雪期でまだ一般登山者は少なく、雪崩・滑落に厳重注意。",
      5:"残雪期。涸沢・岳沢とも雪渓が深く残り、アイゼン・ピッケルが必須。涸沢ヒュッテは5月11日〜31日改修工事のため休業（2026年）。",
      6:"梅雨の晴れ間を狙う時期。涸沢の雪渓はまだ多く残り、ザイテングラート下部の岩と雪の境目は特に注意。",
      7:"中旬以降、山開きで小屋が全面営業に入り本格シーズン入り。梅雨明け後は晴天率が高いが午後の雷雨に注意。",
      8:"夏山最盛期。涸沢カールのお花畑が見頃。稜線は大混雑と落石リスクが高まるため早出早着が鉄則。",
      9:"上旬まで盛夏の延長、中旬から涸沢の紅葉が始まり下旬にピーク。朝晩は氷点下近くまで冷え込む。",
      10:"上旬〜中旬が涸沢紅葉の最盛期で登山者・小屋とも大混雑。中旬以降は初雪・凍結が本格化し無雪期装備での登山は次第に困難に。",
      11:"上旬で営業小屋が続々閉鎖（涸沢・穂高岳山荘とも11月3日前後で小屋じまい）、上高地の通行規制も11月15日で冬期閉鎖。以降は冬山装備・技術が必須。"
    }
  }
},
{
  id:"kasa", name_ja:"笠ヶ岳", name_en:"Mt. Kasagatake", region:"北アルプス南部", area:"北アルプス・御嶽", prefecture:"岐阜県",
  elevation:2897, hyakumeizan:true,
  coords:{lat:36.31556, lon:137.55028}, forecast_elevation:2800,
  grading:{
    ridgeline:2800,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"笠新道上部から稜線にかけては6月頃まで残雪が残る年が多い。クリヤ谷は沢沿いで渡渉箇所が複数あり、大雨・増水時は通行を避ける（岐阜県グレーディングも渡渉注意を明記）。"
  },
  trailheads:[
    {
      name:"新穂高温泉登山口（標高約1,090m・登山者用駐車場あり）",
      access:[
        {mode:"バス", line:"平湯・新穂高線（濃飛バス）", from:"JR高山駅前 高山濃飛バスセンター",
         duration:"約1時間30分〜2時間（便により異なる）",
         weekday:"高山濃飛バスセンター発 例: 7:00 / 7:40 / 8:40 / 9:40 / 10:40（新穂高温泉 着 例: 8:12 / 8:32 / 10:12 / 11:12 / 12:12）", weekend:"土日祝も同ダイヤ。7月18日〜10月12日は高山6:00発の特急便を増発（公式時刻表2026/4/1版で確認）",
         season:"通年運行。一部区間はデマンド予約制（濃飛バス高山営業所 0577-33-7780・前日18時までに要予約）", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true},
        {mode:"バス", line:"平湯・新穂高線（濃飛バス）", from:"平湯温泉（松本・高山方面から乗継）",
         duration:"約25〜45分",
         weekday:"平湯温泉発 例: 7:00 / 7:40 / 8:00 / 8:40 / 9:40", weekend:"同ダイヤ",
         season:"通年運行", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true}
      ]
    },
    {
      name:"中尾高原口（クリヤ谷ルート登山口・標高約970m）",
      access:[
        {mode:"バス", line:"平湯・新穂高線（濃飛バス）", from:"JR高山駅前 高山濃飛バスセンター",
         duration:"約1時間20分〜1時間30分",
         weekday:"中尾高原口 着 例: 7:27 / 8:07 / 9:07 / 10:07 / 11:07", weekend:"同ダイヤ",
         season:"通年運行。一部区間はデマンド予約制（濃飛バス高山営業所 0577-33-7780・前日18時までに要予約）", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"笠ヶ岳山荘", elevation:2820, open:"2026年は7月10日〜10月11日宿泊分まで（ヘリコプター物資輸送の都合で変動あり）", reservation:"完全予約制・電話のみ（予約受付は6月1日開始、9:00〜12:00・13:00〜17:00、メール不可、連泊不可）。山荘から徒歩約10分にテント場あり（水は7月上旬までしか取れない年も）。", url:"https://kasagatake.com/", tel:"090-7020-5666"},
    {name:"鏡平山荘（小池新道ルート上・標高2,300m）", elevation:2300, open:"2026年は7月10日〜10月15日", reservation:"Web予約または現地電話（090-1566-7559・営業期間中）。テント設営は不可。", url:"https://www.sugorokugoya.com/kagami/", tel:"090-1566-7559"},
    {name:"わさび平小屋（左俣林道沿い・前泊/下山後の拠点）", elevation:1400, open:"2026年は7月10日〜10月20日（予約制）", reservation:"Web予約または現地電話。テント場あり（約30張）。", url:"https://www.sugorokugoya.com/wasabi/", tel:"090-8074-7778"}
  ],
  routes:[
    {name:"新穂高温泉 → 笠新道 往復", stats:"距離 約22.3km / 標高差 約1,810m / 合計コースタイム 約14時間50分（岐阜県グレーディング公表値・休憩含まず）", level:"上級", note:"北アルプス屈指の急登「笠新道」を使う最も一般的なルート。日帰りも不可能ではないが健脚向けで、わさび平小屋か笠ヶ岳山荘での1泊が現実的。杓子平から上は森林限界を超え、稜線は強風・落雷に厳重注意。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:true, src:"岐阜県 山のグレーディング（笠ヶ岳（新穂高）〈笠新道〉）", url:"https://www.pref.gifu.lg.jp/page/14382.html"}},
    {name:"新穂高温泉 → 笠新道（登り）→ 笠ヶ岳 → 小池新道・鏡平（下り）周回", stats:"距離 約29.3km / 累積標高差 登り約2,680m・下り約2,680m / 合計コースタイム 約16時間30分（岐阜県グレーディング公表値・休憩含まず）", level:"上級", note:"登路と下山路を分ける定番の周回プラン。下りの小池新道は鏡平の池に映る槍穂高の眺めが魅力だが行程が長く、鏡平山荘か双六小屋方面での2泊が現実的。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:true, src:"岐阜県 山のグレーディング（笠ヶ岳（新穂高）〈笠新道・小池新道〉）", url:"https://www.pref.gifu.lg.jp/page/14382.html"}},
    {name:"新穂高温泉 → 笠新道（登り）→ 笠ヶ岳 → クリヤ谷（下り）→ 中尾高原口", stats:"距離 約18.5km / 累積標高差 登り約2,230m・下り約2,350m / 合計コースタイム 約15時間30分（岐阜県グレーディング公表値・休憩含まず）", level:"上級", note:"下山にクリヤ谷を使う健脚・経験者向けルート。沢沿いの道で渡渉が複数あり、大雨後・増水時は通行を避けること。登山口と下山口が異なるため、事前に中尾高原口からのバス時刻・交通手段を確認しておく。",
     popularity:1, trailhead:0, grade:{stamina:6, skill:"C", official:true, src:"岐阜県 山のグレーディング（笠ヶ岳（新穂高・槍見）〈笠新道〉）", url:"https://www.pref.gifu.lg.jp/page/14382.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"笠新道下部から山頂・稜線にかけて大量の残雪が残る本格的な残雪期。山小屋は未開設で、アイゼン・ピッケルと雪上歩行技術が必須。",
      6:"笠ヶ岳山荘・鏡平山荘・わさび平小屋はいずれも7月10日頃の開設前で営業していない。稜線付近はなお残雪が多く残る年が多い。",
      7:"7月10日前後に沿線の山小屋が一斉に開設し夏山シーズン本番を迎える。梅雨明け後の安定した晴天が狙い目。",
      8:"盛夏で最も晴天が安定する時期。稜線の強い日射と熱中症対策、午後に発達しやすい雷雨（特にクリヤ谷など沢筋の増水）に注意。",
      9:"秋の高気圧に恵まれ好天が続きやすい。台風接近時は稜線の暴風・大雨とクリヤ谷の増水に厳重注意。",
      10:"上旬は紅葉が見頃。笠ヶ岳山荘は例年10月11日頃に営業を終了（年により変動）。中旬以降は初雪・凍結が本格化し無雪期装備では危険。"
    }
  }
},
{
  id:"yake", name_ja:"焼岳", name_en:"Mt. Yakedake", region:"北アルプス南部", area:"北アルプス・御嶽", prefecture:"長野県・岐阜県",
  elevation:2455, hyakumeizan:true,
  coords:{lat:36.2264, lon:137.5883}, forecast_elevation:2400,
  grading:{
    ridgeline:2400,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"山頂直下は森林限界を超えたザレ場・火山礫帯。残雪期はアイゼン・ピッケルが必要で、新中の湯登山口までの道路も雪解け・凍結の影響を受けやすい。"
  },
  trailheads:[
    {
      name:"新中の湯登山口（標高1,600m）",
      access:[
        {mode:"バス", line:"上高地線 路線バス（アルピコ交通・予約優先制）", from:"アルピコ交通 新島々駅",
         duration:"新島々駅から中の湯バス停まで約50分。新中の湯登山口へは中の湯バス停からさらに旧国道を約3km・登り約100m進む必要があり、公共交通機関はないため徒歩または要タクシー（要確認）",
         weekday:"新島々駅発 例: 7:10 / 8:00 / 8:40（中の湯バス停着 例: 7:58 / 8:48 / 9:28）", weekend:"2026年運行期間中は土日祝も同一ダイヤ",
         season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/shinshimashima/", sample:true},
        {mode:"マイカー", line:"公共交通機関なし（要確認）", from:"長野自動車道 松本IC",
         duration:"約1時間（国道158号を上高地・平湯方面へ、中の湯温泉旅館の先の旧道沿いに登山口駐車スペースあり）",
         weekday:"—", weekend:"—",
         season:"通年（積雪期は道路事情により通行止めの場合あり・要確認）", url:"https://nakanoyu-onsen.jp/", sample:true}
      ]
    },
    {
      name:"上高地・河童橋登山口（標高約1,505m）",
      access:[
        {mode:"シャトルバス", line:"あかんだな駐車場・平湯温泉〜上高地シャトルバス（アルピコ交通）", from:"あかんだな駐車場／平湯温泉",
         duration:"約25〜30分",
         weekday:"あかんだな駐車場発 例: 4:50始発（約30分間隔で運行、上高地発の最終は例: 17:30）", weekend:"2026年運行期間中は土日祝も同一ダイヤ",
         season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/hirayu/", sample:true},
        {mode:"バス", line:"上高地線 路線バス（アルピコ交通・予約優先制）", from:"アルピコ交通 新島々駅",
         duration:"新島々駅から上高地バスターミナルまで約65分",
         weekday:"新島々駅発 例: 7:10 / 8:00 / 8:40（上高地着 例: 8:15 / 9:05 / 9:45）", weekend:"2026年運行期間中は土日祝も同一ダイヤ",
         season:"2026年4月17日〜11月15日", url:"https://www.alpico.co.jp/traffic/local/kamikochi/shinshimashima/", sample:true}
      ]
    },
    {
      name:"中尾焼岳登山口（中尾高原・標高約1,150m）",
      access:[
        {mode:"バス", line:"平湯・新穂高線（濃飛バス）", from:"高山濃飛バスセンター",
         duration:"約48分",
         weekday:"高山発 例: 7:40 / 10:40 / 13:40（中尾焼岳登山口着 例: 8:28 / 12:08 / 15:08）", weekend:"2026年運行期間中は土日祝も同一ダイヤ",
         season:"通年運行（本数は季節により変動、最新時刻表は要確認）", url:"https://www.nouhibus.co.jp/route_bus/shinhotaka-line/", sample:true},
        {mode:"マイカー", line:"公共交通機関なし（要確認）", from:"中部縦貫自動車道 高山IC",
         duration:"約40分（国道158号・471号で新穂高温泉方面へ、中尾高原の登山口駐車場を利用）",
         weekday:"—", weekend:"—",
         season:"通年（冬期は積雪のため要注意）", url:"https://www.okuhida.or.jp/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"焼岳小屋", elevation:2050, open:"6月中旬〜10月中旬（2026年は6/21〜10/18の予定・要確認）", reservation:"電話予約制", url:"http://www.m-kamikouchi.jp/yakedake/", tel:"090-2753-2560"},
    {name:"中の湯温泉旅館（新中の湯登山口の宿・日帰り入浴可）", elevation:1500, open:"2026年の営業案内は4月17日〜11月15日（公式サイト。「通年営業の宿」の表記もあり冬期の営業は要確認）", reservation:"電話・Web予約", url:"https://nakanoyu-onsen.jp/", tel:"0263-95-2407"}
  ],
  routes:[
    {name:"新中の湯ルート 往復", stats:"距離 約6.4km（往復）/ 標高差 約844m / 登り3:00・下り2:00（合計コースタイム5.0時間・信州グレーディング公表値、登下配分は独自区分）", level:"初級〜中級", note:"焼岳で最も歩かれる短時間コース。北峰（2,444m）のみ登頂可、南峰・火口域（正賀湖周辺）は立入禁止。入山前に気象庁 焼岳の火山活動状況（https://www.data.jma.go.jp/vois/data/tokyo/310_Yakedake/310_index.html）で噴火警戒レベルを確認すること（2026年3月4日時点でレベル1）。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"上高地ルート（焼岳小屋経由）往復", stats:"距離 約14.8km（往復）/ 標高差 約940m / 登り4:00・下り3:00（独自推定・要確認）", level:"中級", note:"焼岳小屋直下の長い金属梯子が核心部。北峰のみ登頂可、南峰・火口域は立入禁止。上高地はマイカー規制区域のためバス・タクシーでのアクセスが前提。噴火警戒レベルは気象庁で要確認。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"C", official:false}},
    {name:"中尾ルート 往復", stats:"距離 約10.9km（往復）/ 標高差 約1,290m / 登り4:30・下り3:10（合計コースタイム7.7時間・岐阜県グレーディング公表値、登下配分は独自区分）", level:"中級", note:"中尾峠を越えると上高地側の大展望。北峰のみ登頂可、南峰・火口域は立入禁止。クマ生息地域のため鈴・ラジオ携帯と登山届の提出必須（新穂高登山指導センター 0578-89-3610）。噴火警戒レベルは気象庁で要確認。",
     popularity:2, trailhead:2, grade:{stamina:4, skill:"C", official:true, src:"岐阜県 山のグレーディング", url:"https://www.pref.gifu.lg.jp/page/14382.html"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      4:"多くの登山口・山小屋は営業前。残雪状況次第では上級者向け。",
      5:"新中の湯登山口までの道路開通や焼岳小屋の営業開始は例年5月下旬〜6月。残雪期はアイゼン携行を。",
      6:"梅雨の晴れ間を狙う時期。焼岳小屋は例年6月下旬に営業開始（要確認）。",
      7:"本格的な夏山シーズン。中の湯温泉旅館で下山後の日帰り入浴も可能。",
      8:"お盆期間は上高地・新穂高とも大混雑。バス予約・小屋予約は早めに。",
      9:"秋晴れが多く快適。焼岳小屋泊での上高地ルートもおすすめ。",
      10:"紅葉と初雪が交錯する時期。焼岳小屋は例年10月中旬（2026年は10/18予定）で営業終了。",
      11:"多くの登山口・山小屋が閉鎖。積雪・凍結のため冬山装備と経験がない場合は入山を控える。"
    }
  }
},
{
  id:"ontake", name_ja:"御嶽山", name_en:"Mt. Ontake", region:"御嶽山系", area:"北アルプス・御嶽", prefecture:"長野県・岐阜県",
  elevation:3067, hyakumeizan:true,
  coords:{lat:35.8928, lon:137.4806}, forecast_elevation:3000,
  grading:{
    ridgeline:2900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"独立峰の3,000m級火山で稜線は遮るものがなく風が強い。飯森高原駅（黒沢口）・田の原（王滝口）とも森林限界を越えると雪渓や凍結が5月頃まで残ることがある。"
  },
  trailheads:[
    {
      name:"御岳ロープウェイ 飯森高原駅（黒沢口七合目・標高2,150m）",
      access:[
        {mode:"バス", line:"おんたけ交通 御岳ロープウェイ線", from:"JR中央本線 木曽福島駅",
         duration:"約40分（ロープウェイ山麓駅まで）",
         weekday:"要確認（季節運行・木曽福島駅前出札所で要事前確認）", weekend:"要確認（季節運行・木曽福島駅前出札所で要事前確認）",
         season:"夏山シーズン中心（ロープウェイ営業期間に合わせて運行）", url:"https://ontakekotsu.com/regular", sample:true},
        {mode:"ロープウェイ", line:"おんたけロープウェイ（山麓駅 鹿ノ瀬 → 飯森高原駅・標高2,150m）", from:"山麓駅（鹿ノ瀬）",
         duration:"約15分",
         weekday:"要確認（始発・最終便は公式サイト参照）", weekend:"要確認（始発・最終便は公式サイト参照）",
         season:"2026年は4月25日〜11月8日予定", url:"https://ontake-rope2150.jp/guide/", sample:true}
      ]
    },
    {
      name:"田の原（王滝口七合目・標高約2,180m）",
      access:[
        {mode:"バス", line:"王滝村営バス 田の原線（おんたけ交通に運行委託）", from:"JR中央本線 木曽福島駅前",
         duration:"約1時間15分",
         weekday:"運休（土日祝日のみ運行）", weekend:"木曽福島駅発 例: 8:40 / 13:45（2026年は7月4日〜10月18日の土日祝日運行）",
         season:"2026年は7月4日〜10月18日の土日祝日のみ", url:"https://www.vill.otaki.nagano.jp/kurashi/basu_tanohara.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"女人堂（黒沢口八合目）", elevation:2470, open:"7月上旬〜10月上旬頃（休憩・軽食・売店中心、宿泊は要問い合わせ）", reservation:"電話予約", url:"https://ontake-nyonindo.jimdofree.com/", tel:"090-8329-1385"},
    {name:"石室山荘（黒沢口九合目）", elevation:2820, open:"7月上旬〜10月上旬頃", reservation:"電話予約（黒澤館扱い）", url:"", tel:"0264-46-2016"},
    {name:"二ノ池山荘", elevation:2905, open:"2026年は7月1日〜10月11日", reservation:"Web予約", url:"http://ninoike2905.com/", tel:""},
    {name:"二の池ヒュッテ", elevation:2905, open:"夏山シーズン（完全予約制）", reservation:"LINE予約制", url:"https://www.ninoikehutte.com/", tel:""},
    {name:"剣ヶ峰避難シェルター（コンクリート製・宿泊不可）", elevation:3060, open:"通年設置（緊急退避専用）", reservation:"—", url:"", tel:""},
    {name:"八丁ダルミ避難シェルター（宿泊不可）", elevation:2900, open:"通年設置（緊急退避専用）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"黒沢口 飯森高原駅→女人堂→石室山荘→剣ヶ峰 往復", stats:"距離 約11km / 標高差 約920m / 登り4:00・下り3:00（目安）", level:"中級", note:"最も一般的なコース。2026年の黒沢口（黒沢十字路〜剣ヶ峰）開放期間は7月1日8:00〜10月14日正午（木曽町公式サイトで要最新確認）。八合目女人堂〜三ノ池ルートは現在通行不可。噴火警戒レベル1でも剣ヶ峰周辺（地獄谷火口付近）はヘルメット携行推奨。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"王滝口 田の原→王滝頂上→剣ヶ峰 往復", stats:"距離 約7.5km / 標高差 約890m / 登り3:00・下り2:15（目安）", level:"中級", note:"標高2,180mの田の原からスタートする最短コース。2026年の王滝口（田の原〜王滝頂上〜剣ヶ峰）開放期間は7月10日9:00〜10月14日正午（王滝村公式サイトで要最新確認）。九合目から奥の院方面・お鉢めぐり登山道は引き続き入山禁止（王滝村公式）。王滝村はヘルメット着用を明記して呼びかけている。八丁ダルミ・剣ヶ峰付近にコンクリート製シェルターあり。",
     popularity:3, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"残雪期。飯森高原駅・田の原ともロープウェイ／バス運行前後で入山ルートが限られる。雪上装備が必要。",
      6:"梅雨。ロープウェイ・バスは季節運行開始直後で運休日あり、事前確認必須。",
      7:"2026年は黒沢口が7/1、王滝口が7/10に剣ヶ峰までの規制が緩和される予定（気象庁の噴火警戒レベルにより変更あり）。ヘルメット携行を。",
      8:"最盛期。お花畑と眺望が良い一方、午後は雷雨に注意。混雑日は山小屋・バスとも早めの計画を。",
      9:"秋晴れが増える好期。紅葉は稜線から始まる。",
      10:"2026年は10月14日正午で剣ヶ峰までの規制緩和期間が終了予定（木曽町・王滝村公式で要確認）。中旬以降の初雪・凍結に注意。",
      11:"ロープウェイ・バスとも順次冬期運休。積雪期の入山は装備・経験が必要。"
    }
  }
},
{
  id:"utsukushigahara", name_ja:"美ヶ原（王ヶ頭）", name_en:"Mt. Utsukushigahara (Ogato)", region:"美ヶ原・霧ヶ峰", area:"八ヶ岳・中信高原", prefecture:"長野県",
  elevation:2034, hyakumeizan:true,
  coords:{lat:36.225796, lon:138.107445}, forecast_elevation:2000,
  grading:{
    ridgeline:2000,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:8,
    snow_months:[11,12,1,2,3,4],
    snow_note:"山頂台地は木々の遮蔽がほぼない開けた草原のため、積雪期は地形自体は緩やかでも地吹雪や視界不良になりやすい。ビーナスラインは11月下旬〜4月下旬（2025-26年は11/19〜4/21）冬期閉鎖、アザレアラインは積雪・凍結に注意。雷雲の発達も速いため、無雪期も夏の午後は要警戒。"
  },
  trailheads:[
    {
      name:"三城牧場（三城いこいの広場、標高1,420m）",
      access:[
        {mode:"マイカー", line:"路線バスなし（要確認）。アザレアライン（県道67号）経由", from:"長野自動車道 松本IC",
         duration:"約30分", weekday:"—", weekend:"—",
         season:"通年（積雪・凍結期は冬用タイヤ必須。日帰り登山者用駐車場は17時以降・冬期閉鎖）", url:"https://www.sanjiro-camp.com/", sample:true}
      ]
    },
    {
      name:"美ヶ原自然保護センター・山本小屋・王ヶ頭ホテル（美ヶ原高原、標高約2,000m）",
      access:[
        {mode:"バス", line:"信州美ヶ原高原 直行バス（アルピコタクシー運行・要予約）", from:"JR松本駅（アルプス口）",
         duration:"約80分（美ヶ原温泉・浅間温泉・美鈴湖・思い出の丘 経由）",
         weekday:"松本駅発 例: 8:15 / 13:15（毎日運行日）", weekend:"松本駅発 例: 8:15 / 13:15（土日祝運行日）",
         season:"2026年は土日祝運行 6/6〜10/12、毎日運行 7/13〜8/31（期間外は運休）", url:"https://www.utsukushigahara-bus.net/", sample:true},
        {mode:"マイカー", line:"ビーナスライン経由", from:"中央自動車道 岡谷IC・長野自動車道 松本IC",
         duration:"約40〜70分（アクセスルートにより変動）", weekday:"—", weekend:"—",
         season:"通年（2025年11/19〜2026年4/21は和田峠〜美ヶ原台上 冬期通行止め）", url:"https://www.venus-line.net/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"山本小屋ふる里館", elevation:2000, open:"通年営業（一部休館日あり・要確認）", reservation:"公式サイトWeb予約または電話予約", url:"https://www.furusatokan.jp/", tel:"0268-86-2311"},
    {name:"王ヶ頭ホテル", elevation:2000, open:"通年営業", reservation:"公式サイトWeb予約または電話予約", url:"https://www.ougatou.jp/", tel:"0263-50-8765"}
  ],
  routes:[
    {name:"【周】美ヶ原（三城牧場）＜ダテ河原→塩くれ場・広小場＞", stats:"距離 8.3km / 標高差 約614m（三城牧場1,420m→王ヶ頭2,034m）/ 周回4:24（信州グレーディング公表値）", level:"初〜中級", note:"通称「百曲がり」。ダテ河原から樹林帯を抜けて塩くれ場・王ヶ頭台地に上がり、王ヶ頭・美しの塔を巡って広小場経由で三城牧場へ戻る周回路。上部は牧場の柵沿いを歩く牧歌的な高原歩き。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.123 — 信州グレーディング本表は美ヶ原対象外のため百名山合同表の行）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"美ヶ原高原 遊歩道（美ヶ原自然保護センター〜王ヶ頭〜王ヶ鼻 往復）", stats:"距離 約6km（往復）/ 標高差 約60m / 登り1:20・下り1:00（独自推定）", level:"初級", note:"台地状の高原を舗装路・砂利道でたどる百名山屈指の easy な道。三角点のある王ヶ頭（電波塔群）を経て、断崖の展望地・王ヶ鼻まで足を延ばせる。牛が放牧される牧場沿いは柵の開閉に注意。",
     popularity:2, trailhead:1, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"ビーナスライン開通直後は残雪・路面凍結の可能性あり。牧場の開牧前で静か。",6:"レンゲツツジが見頃。梅雨時は霧が出やすく、視界不良に注意。",7:"直行バスが毎日運行に切り替わる（7/13〜）。夏の高原植物が咲き始め、午後は雷雲注意。",8:"避暑地として最も賑わう時期。日中でも涼しいが、雷雲の発達が速いため午後の行動は早めに切り上げる。",9:"秋の花と牧場の牛たちの姿。空気が澄み、北アルプスの展望が良い。",10:"草紅葉が広がる。中旬（10/12）で直行バスの土日祝運行が終了。",11:"下旬にビーナスライン冬期閉鎖（2025年は11/19〜）。積雪前の静かな高原歩きができる。"}
  }
},
{
  id:"kirigamine", name_ja:"霧ヶ峰（車山）", name_en:"Mt. Kirigamine (Kurumayama)", region:"美ヶ原・霧ヶ峰", area:"八ヶ岳・中信高原", prefecture:"長野県",
  elevation:1925, hyakumeizan:true,
  coords:{lat:36.1028, lon:138.1967}, forecast_elevation:1900,
  grading:{
    ridgeline:1800,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"山名の由来どおり、盛夏でも霧が出ると木の少ない草原状の稜線で道標を見失いやすい（雨・低い雲の予報日は特に注意）。冬期は遮る物のない高原状地形のため地吹雪・積雪が発達しやすい。"
  },
  trailheads:[
    {
      name:"八島湿原（沢渡駐車場・標高約1,640m）",
      access:[
        {mode:"バス", line:"霧ヶ峰線・八島湿原線（アルピコ交通）", from:"JR上諏訪駅諏訪湖口（西口）",
         duration:"約45分（八島湿原まで）",
         weekday:"運行なし（土日祝日および8月1日〜8月30日の毎日運行のみ）", weekend:"上諏訪駅発 例: 9:35 / 10:35 / 14:30（八島湿原着 例: 10:20 / 11:20 / 15:15）",
         season:"2026年5月2日〜10月25日（ニッコウキスゲ最盛期は道路渋滞により大幅遅延の場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kirigamine/", sample:true}
      ]
    },
    {
      name:"車山肩（標高約1,800m）",
      access:[
        {mode:"バス", line:"霧ヶ峰線・八島湿原線（アルピコ交通）", from:"JR上諏訪駅諏訪湖口（西口）",
         duration:"約1時間（車山肩まで）",
         weekday:"運行なし（土日祝日および8月1日〜8月30日の毎日運行のみ）", weekend:"上諏訪駅発 例: 9:35 / 10:35 / 14:30（車山肩着 例: 10:35 / 11:35 / 15:30）",
         season:"2026年5月2日〜10月25日（ニッコウキスゲ最盛期は道路渋滞により大幅遅延の場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kirigamine/", sample:true}
      ]
    },
    {
      name:"車山高原（リフト山麓駅・標高約1,670m）",
      access:[
        {mode:"バス", line:"霧ヶ峰線・八島湿原線（アルピコ交通）", from:"JR上諏訪駅諏訪湖口（西口）",
         duration:"約1時間5分（車山高原まで）",
         weekday:"運行なし（土日祝日および8月1日〜8月30日の毎日運行のみ）", weekend:"上諏訪駅発 例: 9:35 / 10:35 / 14:30（車山高原着 例: 10:43 / 11:43 / 15:38）",
         season:"2026年5月2日〜10月25日（ニッコウキスゲ最盛期は道路渋滞により大幅遅延の場合あり）", url:"https://www.alpico.co.jp/traffic/local/suwa/kirigamine/", sample:true},
        {mode:"リフト", line:"車山高原SKYPARK展望リフト（スカイライナー→スカイパノラマ乗継）", from:"車山高原山麓駅",
         duration:"約15〜25分（乗継ぎ・山頂駅まで）",
         weekday:"9:00〜16:00上り最終（下り最終16:30、繁忙期は8:30始発）", weekend:"同左（繁忙期は増発の場合あり）",
         season:"2026年は4/18〜19・4/24〜11/3・11/21〜23営業（荒天時は運休）", url:"https://summer.kurumayama-skypark.com/lift-2", sample:true}
      ]
    }
  ],
  huts:[
    {name:"ころぼっくるひゅって", elevation:1820, open:"4月下旬〜11月下旬・12月下旬〜3月下旬（冬期は土日祝日のみ営業）", reservation:"完全予約制（電話のみ）", url:"https://www.instagram.com/korobokkuru_hutte/", tel:"0266-58-0573"},
    {name:"鷲が峰ひゅって", elevation:1659, open:"通年営業（積雪期は道路状況により変動）", reservation:"オンライン予約カレンダーまたはメールフォーム", url:"https://nature2.jp/wasshie/", tel:"0266-58-8088"},
    {name:"ヒュッテみさやま（ヒュッテ御射山）", elevation:1630, open:"4月末〜10月末（冬期休業）", reservation:"電話予約", url:"http://park19.wakwak.com/~misayama/", tel:"0266-75-2370"}
  ],
  routes:[
    {name:"【周】霧ヶ峰（八島湿原）＜鷲ヶ峰→蝶々深山・車山肩＞", stats:"距離 約13.3km / 標高差 約620m / 周回コースタイム 約6:12", level:"中級", note:"鷲ヶ峰の岩場を越えて霧ヶ峰の主稜線を大きく一周する定番ロングコース。ニッコウキスゲの時期は特に賑わう。県公表グレーディング掲載ルート。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"車山肩 往復", stats:"距離 約1.6km / 標高差 約125m / 登り0:30・下り0:25", level:"初級", note:"ころぼっくるひゅって前から高原状の道を辿る、霧ヶ峰随一の手軽な往復コース。山頂には旧気象レーダー観測所のドームがある。",
     popularity:3, trailhead:1, grade:{stamina:1, skill:"A", official:false}},
    {name:"車山高原リフト（山頂駅）往復", stats:"距離 約0.5km / 標高差 約60m / 登り0:15・下り0:10", level:"初級", note:"リフトを2本乗り継いで山頂駅まで上がれば、山頂まではわずかな歩き。家族連れやご来光ツアーにも人気。",
     popularity:2, trailhead:2, grade:{stamina:1, skill:"A", official:false}},
    {name:"八島湿原 木道一周", stats:"距離 約3.7km / 標高差 約30m / 一周1:10", level:"初級", note:"高層湿原を巡る木道の散策路。ニッコウキスゲ以外にも高山植物が豊富だが、保護柵内・湿原内への立入りは厳禁。",
     popularity:2, trailhead:0, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"ビーナスラインの冬期閉鎖が解ける時期。残雪が残る年もあるが新緑が美しい。",
      6:"ニッコウキスゲが咲き始める。梅雨時は霧が濃く、視界不良による道迷いに注意。",
      7:"ニッコウキスゲが最盛期（例年7月中旬〜下旬）。電気柵で食害から保護されている区画があり立入禁止。観光客で道路・駐車場とも大混雑し、バスは遅延しやすい。",
      8:"花の最盛期は過ぎるが高原らしい涼しさが魅力。午後は雷雲が発達しやすく早めの行動を。",
      9:"マツムシソウなど秋の花とすすきの穂が見頃。台風シーズンは強風に注意。",
      10:"草紅葉（くさもみじ）が見頃。下旬以降はビーナスラインの冬期閉鎖・積雪の可能性があり要確認。",
      11:"積雪・路面凍結のおそれがあり、路線バス・リフトとも運休期に入る。"
    }
  }
},
{
  id:"kobushi", name_ja:"甲武信ヶ岳", name_en:"Mt. Kobushigatake", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"長野県・山梨県・埼玉県",
  elevation:2475, hyakumeizan:true,
  coords:{lat:35.9091, lon:138.7289}, forecast_elevation:2400,
  grading:{
    ridgeline:2400,
    wind_caution:13, wind_danger:19,
    precip_caution:4, precip_danger:12,
    snow_months:[11,12,1,2,3,4],
    snow_note:"奥秩父主脈は樹林帯が長く風は比較的穏やかだが、山頂直下の岩場や国師ヶ岳・三宝山周辺の稜線、千曲川源流の渡渉箇所は積雪・凍結期に滑落・道迷いの危険が増す。11月〜4月は軽アイゼン以上を推奨。"
  },
  trailheads:[
    {
      name:"毛木平登山口（標高1,433m）",
      access:[
        {mode:"バス", line:"川上村営バス（梓山線）", from:"JR小海線 信濃川上駅",
         duration:"信濃川上駅から梓山まで約15分。梓山バス停から毛木平登山口までは徒歩約1時間（マイカー・タクシー利用が現実的）",
         weekday:"信濃川上駅発 例: 6:45 / 8:15 / 10:42 / 13:27 / 15:10 / 16:39 / 17:58 / 19:35（詳しい運行区分は季節・曜日により変わるため要確認）", weekend:"平日ダイヤに準ずるが土日祝は一部減便あり・要確認",
         season:"通年運行（6月〜9月は期間ダイヤ、それ以外の時期は梓山発時刻等が変わるため要確認）", url:"https://www.vill.kawakami.nagano.jp/www/contents/1710984551276/index.html", sample:true},
        {mode:"車", line:"中央自動車道 須玉ICから川上村道経由", from:"中央自動車道 須玉IC",
         duration:"約1時間（毛木平駐車場手前の一部区間を除き舗装路）",
         weekday:"—", weekend:"—",
         season:"通年（積雪・凍結期は冬用タイヤ必須）", url:"https://www.vill.kawakami.nagano.jp/www/contents/1001000000018/index.html", sample:true}
      ]
    },
    {
      name:"西沢渓谷入口登山口（標高1,110m）",
      access:[
        {mode:"バス", line:"西沢渓谷線（山梨交通）", from:"JR中央本線 塩山駅",
         duration:"約60分",
         weekday:"塩山駅発 例: 8:30 / 9:05 / 11:25 / 13:30 / 14:30（運行日区分〈●△×印〉により発着時刻が変わるため要確認）", weekend:"土日祝は8:30便が運行（詳細は時刻表参照）・要確認",
         season:"通年運行（2026年は4/25〜11/23の特定日ダイヤ、4/30・5/1と7/21〜8/31・10/1〜11/13は毎日運行）", url:"https://ykbus.jp/index/route_bus/route_sp_info/nishizawa_valley/", sample:true}
      ]
    },
    {
      name:"大弛峠登山口（標高2,365m）",
      access:[
        {mode:"バス", line:"大弛峠線（栄和交通）", from:"JR中央本線 塩山駅北口",
         duration:"約1時間25分",
         weekday:"塩山駅北口発 例: 7:30 / 9:00（季節運行のため平日設定は要確認）", weekend:"塩山駅北口発 例: 7:30 / 9:00",
         season:"2026年は5/30〜11/8の土日祝運行（道路状況により早期終了の場合あり）。要予約・運賃は現金のみ", url:"https://eiwa-kotsu.jp/oodarumi.html", sample:true},
        {mode:"車", line:"県営林道 川上牧丘線（大弛峠経由）", from:"中央自動車道 勝沼IC",
         duration:"約1時間30分",
         weekday:"—", weekend:"—",
         season:"冬季閉鎖あり（例年12月〜5月は通行不可。開通・閉鎖時期は要確認）", url:"https://www.city.yamanashi.yamanashi.jp/soshiki/17/14045.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"甲武信小屋", elevation:2360, open:"4月末〜11月末（年末年始等の特別営業は要確認）", reservation:"電話予約（受付8:00〜20:00、16:00〜18:00は不可の場合あり）", url:"https://www.kobushigoya.net/", tel:"090-3337-8947"},
    {name:"十文字小屋（十文字峠）", elevation:2035, open:"2026年は4月〜（閉鎖時期は公式サイトで要確認）", reservation:"電話予約（受付9:00〜20:00、チェックイン14:00〜）", url:"http://www.hut10monji.com/", tel:"090-1031-5352"}
  ],
  routes:[
    {name:"毛木平 周回（千曲川源流遊歩道→甲武信ヶ岳→十文字峠）", stats:"距離 約15.4km（周回）/ 標高差 起点毛木平1,433m→最高点(三宝山)2,483m", level:"中級", note:"千曲川（信濃川）水源地標を経由する信州側の代表コース。日帰りも可能だが健脚向けで、十文字小屋で1泊すれば余裕を持てる。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"西沢渓谷入口 徳ちゃん新道（戸渡尾根）往復", stats:"距離 往復約14.8km / 累積標高差 約1,560m（西沢渓谷入口1,110m→山頂2,475m）/ コースタイム合計 約10.3時間（山梨県 山のグレーディング公表値）", level:"中級", note:"木賊山を経て山頂へ向かう山梨側の代表コース。徳ちゃん新道は急登主体。下山を近丸新道に変える場合はコースタイムが変わる。",
     popularity:3, trailhead:1, grade:{stamina:4, skill:"B", official:true, src:"山梨県 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"}},
    {name:"大弛峠 発着 国師ヶ岳経由 甲武信ヶ岳 往復", stats:"距離 約19.7km（往復）/ 累積標高差 約840m / コースタイム合計 約12.0時間（山梨県 山のグレーディング公表値）", level:"中級", note:"日本一標高の高い車道峠（大弛峠、標高2,365m）から国師ヶ岳(2,592m)を経て稜線をたどるコース。標高が高く体力度の割に歩きやすいが、林道は冬季閉鎖、バスも季節運行のため計画に注意。",
     popularity:2, trailhead:2, grade:{stamina:4, skill:"B", official:true, src:"山梨県 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"}}
  ],
  seasonality:{
    best:[5,6,7,8,9,10],
    notes:{
      5:"新緑と残雪が入り混じる時期。稜線の日陰は凍結が残ることがあり軽アイゼン携行が安心。大弛峠への林道は5月中に冬季閉鎖が解除される見込み（年による）。",
      6:"梅雨の晴れ間がねらい目。十文字峠周辺はシャクナゲが見頃。",
      7:"夏山シーズン本番。標高2,400m超の稜線は避暑にも向く。",
      8:"盛夏。日中の雷雨に注意し早出早着を心がける。西沢渓谷線バスは8/13〜15運休便あり。",
      9:"残暑が和らぎ歩きやすい。台風接近時は千曲川源流沿いの増水・道迷いに注意。",
      10:"紅葉が見頃（上旬〜中旬が目安）。大弛峠線バスは2026年は11/8まで運行予定。",
      11:"初冬。大弛峠への林道・バスは冬季閉鎖に向かい順次運休。積雪・凍結が本格化する。"
    }
  }
},
{
  id:"fuji", name_ja:"富士山", name_en:"Mt. Fuji", region:"富士山", area:"富士・伊豆・箱根", prefecture:"山梨県・静岡県",
  elevation:3776, hyakumeizan:true,
  coords:{lat:35.3606, lon:138.7274}, forecast_elevation:3700,
  grading:{
    ridgeline:3700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:8,
    snow_months:[1,2,3,4,5,6,9,10,11,12],
    snow_note:"独立峰のため山頂は地形に遮られず常時強風に晒され、麓の予報より体感は格段に激しい。標高3,000m超で高山病リスクも高く、開山期(7月〜9月上旬)以外は真夏でも積雪・凍結があり得るため通年で凍結チェック対象とする。"
  },
  trailheads:[
    {
      name:"富士スバルライン五合目（標高2,305m・吉田ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急バス・富士スバルライン五合目線）", from:"富士急行 富士山駅・河口湖駅",
         duration:"約2時間5分（富士山駅から）",
         weekday:"富士山駅発 例: 6:30〜17:30の毎時30分発（マイカー規制期間中）", weekend:"同左",
         season:"2026年7月1日〜9月10日（富士スバルラインのマイカー規制は2026年7/3 18:00〜9/10 18:00）", url:"https://www.fujikyubus.co.jp/mycar/timetablefares/", sample:true},
        {mode:"シャトルバス", line:"富士山パーキング⇔富士スバルライン五合目線（マイカー規制期間限定・富士急バス）", from:"富士山パーキング（富士北麓駐車場、乗換駐車場1,000円/回）",
         duration:"要確認", weekday:"要確認（往復3,400円）", weekend:"要確認",
         season:"2026年7月4日〜9月10日", url:"https://www.fujisanparking.jp/mycar.html", sample:true}
      ]
    },
    {
      name:"吉田口 馬返（標高約1,450m・吉田ルート旧登山道起点）",
      access:[
        {mode:"バス", line:"富士急バス 馬返線", from:"富士急行 富士山駅",
         duration:"要確認", weekday:"要確認（運行本数僅少）", weekend:"要確認",
         season:"要確認（富士急バス公式サイトで要確認）", url:"https://bus.fujikyu.co.jp/rosen/detail/id/5", sample:true}
      ]
    },
    {
      name:"御殿場口新五合目（標高1,440m・御殿場ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急モビリティ・水ヶ塚公園行「Z」系統）", from:"JR御殿場駅 富士山口1番のりば",
         duration:"約30分",
         weekday:"御殿場駅発 例: 7:35 / 10:35 / 13:35 / 15:45", weekend:"御殿場駅発 例: 上記に加え8:40",
         season:"2026年7月10日〜9月10日", url:"https://www.fujikyumobility.com/rosen/k13tob0000000d4j-att/2026summerclimbingbus.pdf", sample:true}
      ]
    },
    {
      name:"須走口五合目（標高2,000m・須走ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急モビリティ・須走口五合目行「Q」系統）", from:"JR御殿場駅 富士山口3番のりば",
         duration:"約1時間",
         weekday:"御殿場駅発 例: 6:45 / 7:45 / 8:40 / 9:40 / 10:40 / 11:40 / 13:00 / 13:55 / 15:30", weekend:"同左",
         season:"2026年7月1日〜9月10日", url:"https://www.fujikyumobility.com/rosen/k13tob0000000d4j-att/2026summerclimbingbus.pdf", sample:true}
      ]
    },
    {
      name:"富士宮口五合目（標高2,400m・富士宮ルート）",
      access:[
        {mode:"バス", line:"富士登山バス（富士急静岡バス・富士宮口五合目行）", from:"JR新富士駅5番のりば・JR富士宮駅6番のりば",
         duration:"新富士駅から約1時間25分（1便） / 富士宮駅から約1時間20分（1便）",
         weekday:"富士宮駅発 例: 6:35 / 8:15 / 10:35 / 11:55 / 14:05 / 16:10（新富士駅発は2便のみ運行日限定 例: 7:30）", weekend:"同左",
         season:"2026年7月10日〜8月30日・9/5・9/6の毎日運行", url:"https://www.shizuokabus.co.jp/noriai-bus_fujitozan/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"本八合目 トモエ館（吉田ルート・須走ルート合流点）", elevation:3400, open:"2026年7月1日〜9月10日", reservation:"完全予約制（Web予約のみ、前日・当日のみ電話可）", url:"https://tomoekan.com/", tel:"0555-24-6511"},
    {name:"元祖七合目 山口山荘（富士宮ルート）", elevation:3010, open:"7月上旬〜9月上旬", reservation:"電話予約（メール・フォーム不可）", url:"https://fujisan-ganso.jp/", tel:"090-7022-2234"},
    {name:"八合五勺 御来光館（吉田ルート・須走ルート合流点、山頂直下）", elevation:3450, open:"2026年7月1日〜9月10日宿泊分まで", reservation:"Web予約のみ（電話予約・ツアー予約不可）", url:"https://www.goraikoukan.jp/", tel:"0555-73-8815"}
  ],
  routes:[
    {name:"吉田ルート（スバルライン五合目〜山頂）往復", stats:"距離 登り6.8km・下り7km / 標高差 約1,471m / 登り6:00・下り4:00",
     level:"中級", note:"日本一の登山者数を誇る定番ルート。2026年は通行予約制・通行料4,000円、五合目ゲートは14:00〜翌3:00閉鎖（山小屋宿泊者は除外）、1日4,000人上限。弾丸登山（山小屋に泊まらず夜通し登る行為）は高山病・低体温症のリスクが高く、行政・関係団体が自粛を呼びかけている。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.138、山梨県本表ではNo.104）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"吉田ルート 馬返起点（吉田口五合目経由）〜山頂 往復", stats:"距離 馬返〜五合目 約3km・登り約3:30 ＋ 五合目〜山頂 登り6:00・下り4:00 / 標高差 約2,326m",
     level:"上級", note:"スバルラインのマイカー規制・バス混雑を避け、一合目から歴史ある吉田口旧登山道を通しで歩く健脚向けコース。馬返にバス停はあるが本数僅少・運行期間は要確認。",
     popularity:1, trailhead:1, grade:{stamina:6, skill:"B", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.139、山梨県本表ではNo.105）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"御殿場ルート（御殿場口新五合目〜山頂）往復", stats:"距離 登り10.5km・下り8.4km / 標高差 約2,336m / 登り9:00・下り4:00",
     level:"上級", note:"4ルート中もっとも標高差が大きい健脚コース。下山の「大砂走り」が名物だが山小屋・水場が少なく十分な装備と体力が必須。2026年は静岡県側の入山手続き（eラーニング修了・入山料4,000円・事前登録）が必要。",
     popularity:2, trailhead:2, grade:{stamina:7, skill:"B", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.140）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"須走ルート（須走口五合目〜山頂）往復", stats:"距離 登り6.9km・下り6.2km / 標高差 約1,776m / 登り7:00・下り4:00",
     level:"中級", note:"樹林帯からスタートし火山礫の道へ。八合目で吉田ルートと合流するため上部は混雑しやすい。下山は砂走りが楽しめる。2026年は静岡県側の入山手続きが必要。",
     popularity:2, trailhead:3, grade:{stamina:6, skill:"B", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.141）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"富士宮ルート（富士宮口五合目〜山頂）往復", stats:"距離 登り4.3km・下り4.3km / 標高差 約1,376m / 登り5:00・下り3:00",
     level:"中級", note:"4ルート中もっとも距離が短く山頂（剣ヶ峰）にも近いが、その分傾斜が急で高度を一気に稼ぐため高山病リスクに注意。2026年は静岡県側の入山手続きが必要。",
     popularity:3, trailhead:4, grade:{stamina:5, skill:"B", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.142）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      1:"厳冬期。無雪期装備での登山は極めて危険で、一般登山者の入山は不可。",
      2:"厳冬期。凍結・雪崩リスクが高く一般登山者の入山は非推奨。",
      3:"残雪多く天候急変も激しい。閉山期のため山小屋・救助体制はない。",
      4:"残雪期。ゲートによる規制がない区間もあるが、天候急変・道迷いに厳重注意。",
      5:"GW前後は残雪期の富士山を目指す登山者もいるが、閉山前で山小屋・救助体制がなく雪山経験と装備が必須。",
      6:"梅雨。開山直前の準備期間。マイカー規制・通行予約・入山手続きの最新情報を各公式サイトで要確認。",
      7:"吉田・須走ルートは7/1、富士宮・御殿場ルートは7/10に開山（2026年）。全ルートでマイカー規制・入山料（各4,000円）・事前登録/通行予約が必須。梅雨明け前後は荒天が残りやすい。",
      8:"登山者最盛期。五合目・山頂・お鉢巡りは大変混雑。弾丸登山（夜通し無休憩で登る行為）は高山病・低体温症のリスクが高く、行政・関係団体が自粛を呼びかけている。午後は雷雨も発生しやすい。",
      9:"2026年は9月10日（木）に閉山。閉山後は山小屋・救助体制が撤収し極めて危険なため、一般登山者の入山自粛が呼びかけられている。上旬までが実質的なラストチャンス。",
      10:"閉山済み。積雪・凍結が本格化し無雪期装備での入山はできない。",
      11:"厳冬期に向け積雪が増加。",
      12:"厳冬期。"
    }
  }
},
{
  id:"tanzawa", name_ja:"丹沢山", name_en:"Mt. Tanzawa", region:"丹沢", area:"関東周辺", prefecture:"神奈川県",
  elevation:1567, hyakumeizan:true,
  coords:{lat:35.474293, lon:139.16268}, forecast_elevation:1560,
  grading:{
    ridgeline:1560,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[12,1,2,3,4],
    snow_note:"積雪は少なく樹林帯主体の山だが、丹沢名物のヤマビル（5〜10月）と夏の樹林帯の蒸し暑さは季節ごとの要注意事項。厳冬期は稜線で霜柱・凍結が起きやすい。"
  },
  trailheads:[{
    name:"大倉バス停（標高290m）",
    access:[
      {mode:"バス", line:"神奈川中央交通 渋02系統（渋沢駅北口〜大倉）", from:"小田急線 渋沢駅北口 2番のりば",
       duration:"約15分",
       weekday:"要確認（神奈川中央交通の公式サイトで確認してください）", weekend:"要確認（同上）",
       season:"通年", url:"https://www.kanachu.co.jp/", sample:true}
    ]
  },{
    name:"ヤビツ峠（標高761m）",
    access:[
      {mode:"バス", line:"神奈川中央交通 秦21系統（秦野駅〜ヤビツ峠）", from:"小田急線 秦野駅 4番のりば",
       duration:"約50分",
       weekday:"要確認（神奈川中央交通の公式サイトで確認してください）", weekend:"要確認（同上）",
       season:"通年（冬期は積雪・凍結による運休あり）", url:"https://www.kanachu.co.jp/", sample:true}
    ]
  },{
    name:"塩水橋（標高約410m）",
    access:[
      {mode:"バス", line:"神奈川中央交通 厚20系統（本厚木駅〜宮ヶ瀬）", from:"小田急線・JR相模線 本厚木駅",
       duration:"約50分（宮ヶ瀬バス停まで）",
       weekday:"要確認（神奈川中央交通の公式サイトで確認してください）", weekend:"要確認（同上）",
       season:"通年", url:"https://www.kanachu.co.jp/", sample:true},
      {mode:"徒歩", line:"宮ヶ瀬バス停→塩水橋（車道歩き）", from:"宮ヶ瀬バス停",
       duration:"徒歩約1時間（約4km）",
       weekday:"—", weekend:"—",
       season:"塩水林道は土砂崩落・ゲート閉鎖で通行止めになることが多く、事前に神奈川県自然環境保全センターへ要確認", url:"https://www.pref.kanagawa.jp/docs/f4y/02yama/kouen_kouenhodou/003.html", sample:true}
    ]
  }],
  huts:[
    {name:"みやま山荘", elevation:1567, open:"通年営業（丹沢山頂）", reservation:"電話予約制（宿泊日の2ヶ月前から9:00〜19:00・小屋直通のみ、留守電不可）", url:"https://miyamasansou.com/", tel:"090-2624-7229"},
    {name:"尊仏山荘", elevation:1491, open:"通年営業（塔ノ岳山頂）", reservation:"電話予約（受付9:00〜19:00）", url:"https://sonbutsusanso.amebaownd.com/", tel:"070-2796-5270"}
  ],
  routes:[
    {name:"大倉尾根〜塔ノ岳経由 丹沢山 往復", stats:"距離 約21km / 標高差 約1,280m / 登り4:50・下り3:30", level:"上級", note:"表丹沢の定番・大倉尾根を塔ノ岳まで登り、稜線を丹沢山まで延長する一等三角点ピークへのロングコース。日帰りも可能だが健脚向けで、初めては尊仏山荘かみやま山荘での1泊が安心。",
     popularity:3, trailhead:0, grade:{stamina:7, skill:"B", official:false}},
    {name:"表尾根縦走（ヤビツ峠→三ノ塔→塔ノ岳→丹沢山→大倉）", stats:"距離 約21km / 標高差（累積） 約1,530m / 登り5:30・下り3:30", level:"上級", note:"表尾根の岩稜と大展望を経て丹沢主脈の稜線歩きへとつなぐ長丁場の健脚コース。行者ヶ岳の鎖場や下山口までのバス便の少なさに注意し、早出必須。1泊も検討したい。",
     popularity:2, trailhead:1, grade:{stamina:8, skill:"B", official:false}},
    {name:"塩水橋〜天王寺尾根 丹沢山 往復", stats:"距離 約11km / 標高差 約1,160m / 登り3:30・下り2:30", level:"中級", note:"丹沢山への最短コースとして知られるが、起点の塩水林道は崩落・ゲート閉鎖による通行止めが多く事前確認が必須。日陰の樹林帯が続き夏でも比較的涼しい反面、道標が少なく地図読みは必要。",
     popularity:2, trailhead:2, grade:{stamina:5, skill:"B", official:false}}
  ],
  seasonality:{
    best:[1,4,10,11,12],
    notes:{
      1:"空気が澄み富士山や南アルプスまで見渡せる好機。稜線は霜柱と凍結に注意し、軽アイゼン携行が安心。",
      4:"残雪はほぼ消え新緑が始まる時期。塩水林道のゲート開通状況は事前確認を。",
      5:"シロヤシオなど新緑が見頃を迎える一方、ヤマビルが動き出すシーズン入り。沢沿い・湿った登山道は塩や忌避剤で対策を。",
      6:"梅雨で登山道がぬかるみやすい。ヤマビルの活動もこの時期から本格化する。",
      7:"ヤマビル最盛期かつ樹林帯の蒸し暑さが厳しい季節。早出早着と十分な水分計画を。",
      9:"残暑と秋雨前線の影響で天候が不安定。晴れ間を選べば静かな稜線歩きができる。",
      10:"紅葉が始まり気候も安定してくる。ヤマビルの活動は徐々に収まってくる。",
      11:"紅葉と富士山の展望が一年で最も美しい時期。日没が早いのでヘッドランプを忘れずに。",
      12:"晴天率が高く展望の黄金期に入るが、稜線は霜と凍結が始まるため滑り止めを携行したい。"
    }
  }
},
{
  id:"amagi", name_ja:"天城山（万三郎岳）", name_en:"Mt. Amagi (Banzaburodake)", region:"伊豆", area:"富士・伊豆・箱根", prefecture:"静岡県",
  elevation:1406, hyakumeizan:true,
  coords:{lat:34.8628, lon:139.0018}, forecast_elevation:1300,
  grading:{
    ridgeline:1300,
    wind_caution:12, wind_danger:20,
    precip_caution:3, precip_danger:8,
    snow_months:[12,1,2,3],
    snow_note:"伊豆の低山で積雪自体はまれだが、山頂稜線は冬に凍結・霜柱が発生しやすい。雨や雪の翌朝は木段・木の根が凍って滑りやすいので注意。"
  },
  trailheads:[{
    name:"天城高原ゴルフ場登山口（標高1,040m）",
    access:[
      {mode:"バス", line:"天城東急リゾート線（東海バス）", from:"JR伊東線・伊豆急行線 伊東駅",
       duration:"約55分",
       weekday:"伊東駅発 例: 7:55 / 10:15 / 15:40", weekend:"伊東駅発 例: 7:55 / 10:15 / 14:15（増発便）/ 15:40（増発便は土曜・特定期間のみ運行。2026年は5/3〜6・8/2〜7・8/9〜14・9/20〜22・12/27〜1/1）",
       season:"通年運行", url:"https://www.tokaibus.jp/rosen/timetable.html", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"シャクナゲコース 周回（万二郎岳・万三郎岳）", stats:"距離 約7.4km（周回）/ 累積標高差 登り約590m・下り約590m / 歩行時間 約4:20（県グレーディング公表値）", level:"初級〜中級", note:"天城高原ゴルフ場から万二郎岳・万三郎岳を巡る定番周回。アマギシャクナゲ（5月下旬〜6月上旬）とヒメシャラ純林が見どころ。馬の背周辺は展望が開ける一方、風を遮るものがない。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"静岡県 山のグレーディング", url:"https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/052/256/shizuoka_grading02.pdf"}},
    {name:"天城縦走路コース（天城高原ゴルフ場→万二郎岳→万三郎岳→八丁池→天城峠）", stats:"距離 約17.5km（片道）/ 行動時間 約7:35（運営者公式コースタイム）", level:"上級", note:"天城峠（旧天城トンネル）まで抜ける長丁場の縦走。天城峠側のバスは本数が少なく、下山後の交通は事前に公式時刻表で要確認。八丁池までの往復に短縮する行程も可。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false},
     segments:[
       {from:"天城高原ゴルフ場（天城縦走路登山口）", to:"万二郎岳", up:"1:05"},
       {from:"万二郎岳", to:"万三郎岳", up:"1:00"},
       {from:"万三郎岳", to:"戸塚峠（小岳経由）", up:"1:20"},
       {from:"戸塚峠", to:"八丁池（白田峠経由）", up:"1:15"},
       {from:"八丁池", to:"天城峠", up:"2:15"},
       {from:"天城峠", to:"天城峠バス停（旧天城トンネル経由）", up:"0:40"}
     ], sample:true}
  ],
  seasonality:{
    best:[5,10,11],
    notes:{
      1:"積雪は少ないが山頂稜線は凍結しやすい。防寒・滑り止め必携。",
      2:"厳冬期。木段・木の根の凍結に注意。",
      3:"残雪より路面凍結が主。日中は春めくが朝は冷え込む。",
      4:"新緑が始まる。ブナ・ヒメシャラの芽吹き。",
      5:"下旬からアマギシャクナゲが見頃を迎える。",
      6:"シャクナゲは上旬まで見られる。梅雨入り後は木段が滑りやすい。",
      7:"梅雨明け後は樹林で直射日光を避けられるが蒸し暑い。",
      8:"盛夏。バス増発期間あり。水分補給と熱中症対策を。",
      9:"台風シーズン。強風時は稜線区間を避ける判断を。",
      10:"紅葉が始まる。行楽シーズンでバスが混雑しやすい。",
      11:"ブナ・カエデの紅葉見頃。中旬以降は防寒を。"
    }
  }
},
{
  id:"utsugi", name_ja:"空木岳", name_en:"Mt. Utsugi", region:"中央アルプス", area:"中央アルプス", prefecture:"長野県",
  elevation:2864, hyakumeizan:true,
  coords:{lat:35.7189, lon:137.8172}, forecast_elevation:2800,
  grading:{
    ridgeline:2700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:9,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"大地獄・小地獄より上は花崗岩の痩せ尾根で森林限界も高い。初雪は10月、根雪は11月から、残雪は5月頃まで稜線に残りアイゼン・ピッケルが前提となる年が多い。池山尾根は標高差2,000m超の長丁場でエスケープルートが乏しく、稜線の悪天候は撤退の判断を遅らせがちなので風予報は厳しめに見る。"
  },
  trailheads:[{
    name:"駒ヶ根高原・菅の台バスセンター（標高850m）",
    access:[
      {mode:"バス", line:"駒ヶ岳ロープウェイ線（伊那バス）", from:"JR飯田線 駒ヶ根駅前",
       duration:"約12分",
       weekday:"駒ヶ根駅前発の時刻は季節ダイヤで変動（夏ダイヤは約30分間隔 — 具体時刻は公式時刻表PDFで要確認）", weekend:"同左（土日祝の増便有無も公式時刻表で要確認）",
       season:"通年運行。夏ダイヤ（2026年4/10〜6/14、6/20〜11/30）は駒ヶ根駅前5:00始発〜16:00最終・30分間隔。冬ダイヤ（4/1〜4/6、12/7〜翌1/26、2/5〜3/31）は8:00〜15:00の1時間間隔。ロープウェイ点検運休期間（2026年4/7〜4/9、6/15〜6/19、12/1〜12/6等）は駒ヶ根橋までの折返し運行。",
       url:"https://www.ibgr.jp/komagatake-ropeway/", sample:true},
      {mode:"車", line:"自家用車・レンタカー（菅の台バスセンター駐車場 または 駒ヶ根高原スキー場駐車場）", from:"中央自動車道 駒ヶ根IC",
       duration:"約5分",
       weekday:"—", weekend:"—",
       season:"菅の台バスセンター駐車場は通年24時間（普通車800円/24h）。駒ヶ根高原スキー場駐車場は無料だがスキー場営業期間（12月中旬〜3月上旬）は使用不可。池山林道（古城線）は落石・小崩落のため一般車両は当面の間ゲート閉鎖・通行止めで、林道終点までは入れない（駒ヶ根高原からは徒歩で登る）。",
       url:"https://www.city.komagane.nagano.jp/soshikiichiran/syoukoukankouka/sangakukougengakari/tozanjyohou/4107.html", sample:true}
    ]
  }],
  huts:[
    {name:"駒峰ヒュッテ", elevation:2790, open:"2026年は7月11日(土)〜10月12日(月)（それ以外は冬期避難小屋として一部利用のみ）", reservation:"完全予約制・メールのみ受付（alpees@outlook.jp、電話予約不可）。定員21名、テント設営不可、素泊まりのみ（食料・飲料の販売あり）", url:"http://www.komaho.net/", tel:""},
    {name:"木曽殿山荘", elevation:2587, open:"7月上旬〜10月中旬（年により変動、要問合せ）", reservation:"電話予約のみ（受付6:00〜19:00）", url:"https://www.kisodonosansou.com/", tel:"090-5638-8193"},
    {name:"池山小屋（避難小屋・無人）", elevation:1750, open:"通年（無人）", reservation:"予約不要（維持協力金1,000円）。収容20〜30人、水場・トイレあり", url:"", tel:""}
  ],
  routes:[
    {name:"池山尾根 往復（駒峰ヒュッテ泊）", stats:"距離 約19.7km（往復）/ 標高差 約2,050m / 合計コースタイム 約12時間48分（駒峰ヒュッテ泊まりの1泊2日が標準）", level:"上級", note:"大地獄・小地獄は鎖・階段の連続する痩せ尾根で、過去に転落・滑落事故も発生している。池山林道（古城線）は一般車両通行止めのため、駒ヶ根高原スキー場駐車場や菅の台バスセンターから林道終点まで歩く区間が加わる（下記コースタイムに含む）。日帰りは健脚向けで、駒峰ヒュッテ泊の1泊2日が一般的。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.144）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"駒ヶ根高原スキー場駐車場", to:"三本木地蔵", up:"0:50"},
       {from:"三本木地蔵", to:"池山林道終点", up:"0:20"},
       {from:"池山林道終点", to:"池山小屋(手前水場)", up:"1:10"},
       {from:"池山小屋(手前水場)", to:"尻無", up:"0:40"},
       {from:"尻無", to:"マセナギ", up:"0:10"},
       {from:"マセナギ", to:"大地獄・小地獄", up:"0:30"},
       {from:"大地獄・小地獄", to:"迷い尾根", up:"0:40"},
       {from:"迷い尾根", to:"空木平分岐", up:"1:10"},
       {from:"空木平分岐", to:"駒石", up:"0:30"},
       {from:"駒石", to:"駒峰ヒュッテ", up:"0:40"},
       {from:"駒峰ヒュッテ", to:"空木岳山頂", up:"0:10"}
     ], sample:true},
    {name:"空木岳・南駒ヶ岳・越百山 周回（今朝沢橋起点）", stats:"距離 約25.0km（周回）/ 標高差 約2,500m / 合計コースタイム 約17時間42分（越百小屋泊などで1泊2日以上が前提）", level:"上級", note:"伊奈川ダム上流の今朝沢橋を起点に、南駒ヶ岳・仙涯嶺を越えて空木岳へ至る周回の健脚コース。今朝沢橋への林道は大桑村側からのアクセスで公共交通機関はなく、マイカー・タクシー利用が前提。",
     popularity:2, trailhead:null, grade:{stamina:7, skill:"D", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.145）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"主脈縦走（空木岳→木曽殿山荘→木曽駒ヶ岳）1泊2日", stats:"距離 約9km（片道、空木岳山頂〜木曽駒ヶ岳山頂）/ 標高差 登り約950m・下り約850m（独自推定、複数のアップダウンあり）", level:"上級", note:"駒峰ヒュッテから東川岳・木曽殿山荘を経て木曽駒ヶ岳へ抜ける中央アルプス主脈縦走路。木曽殿山荘泊が標準の1泊2日。逆向き（木曽駒→空木岳、千畳敷・駒ヶ根高原起点）の公式グレーディングは信州 山のグレーディング No.157（体力度6・技術C）として公表されているが、起点・向きが異なるためこちらは独自推定に留める。",
     popularity:2, trailhead:null, grade:{stamina:7, skill:"D", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"残雪期。池山尾根上部や稜線に雪が残り、駒峰ヒュッテ・木曽殿山荘とも未開設で無雪期装備では困難。",
      6:"残雪はおおむね消えるが稜線の雪渓が遅くまで残る年もある。梅雨の増水・ぬかるみに注意。",
      7:"中旬（7月11日）に駒峰ヒュッテが開設し夏山シーズン本番へ。梅雨明けの晴れ間を狙いたい。",
      8:"夏山最盛期。空木平・稜線一帯で高山植物が見頃。",
      9:"秋晴れが増え歩きやすい時期だが、台風接近時は稜線の暴風雨に厳重注意。",
      10:"紅葉は上旬〜中旬がピーク。10月12日に駒峰ヒュッテが閉鎖、木曽殿山荘も中旬に閉まり、以降は初雪の便りが入り始める。",
      11:"初雪・積雪期。山小屋はすべて閉鎖し、無雪期装備での入山は推奨できない。"
    }
  }
},
{
  id:"ena", name_ja:"恵那山", name_en:"Mt. Ena", region:"中央アルプス", area:"中央アルプス", prefecture:"長野県・岐阜県",
  elevation:2191, hyakumeizan:true,
  coords:{lat:35.4431, lon:137.5979}, forecast_elevation:2150,
  grading:{
    ridgeline:2100,
    wind_caution:12, wind_danger:18,
    precip_caution:3, precip_danger:8,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"山頂まで深い樹林に覆われ風自体は比較的穏やかだが、例年11月上旬に初冠雪、12月から根雪。残雪は日陰で5月まで残ることがあり、積雪期はアイゼン・チェーンスパイク必携。中央アルプス最南端の深い山でエスケープが乏しいため、悪天候時は無理をしない。"
  },
  trailheads:[
    {
      name:"広河原登山口〈峰越林道ゲート〉（標高1,135m）",
      access:[
        {mode:"タクシー", line:"信南交通タクシー（タク配管理所）", from:"JR飯田線 飯田駅 または 昼神温泉",
         duration:"飯田駅から約50分・昼神温泉から約30分（要確認）",
         weekday:"予約制（発着時刻の定めなし）", weekend:"予約制（発着時刻の定めなし）",
         season:"林道通行可能期間のみ。2026年7月現在、大雨により登山口手前の橋が破損し通行止め・復旧見込み未定（阿智村商工観光課 0265-43-2220で要確認）",
         url:"https://www.shinnan.co.jp/", sample:true}
      ]
    },
    {
      name:"黒井沢登山口（標高1,175m）",
      access:[
        {mode:"タクシー", line:"近鉄東美タクシー中津川営業所 / 東鉄タクシー中津川配車センター", from:"JR中央本線 中津川駅",
         duration:"約40分（要確認）",
         weekday:"予約制", weekend:"予約制",
         season:"令和2年7月豪雨による林道法面崩落のため登山口手前で通行止めが続き、復旧のめどは立っていない（中津川市農林整備課 0573-72-2112で要確認）",
         url:"https://www.kintetsu-taxi.co.jp/toubi/", sample:true}
      ]
    },
    {
      name:"前宮登山口（標高740m）",
      access:[
        {mode:"バス", line:"川上線 恵那山ウェストン公園前ゆき（北恵那交通）", from:"JR中央本線 中津川駅前",
         duration:"バス約23分＋ウェストン公園前バス停から登山口まで徒歩約30分（現地案内板で要確認）",
         weekday:"中津川駅前発 例: 7:00 / 8:12 / 13:10 / 15:55 / 16:35 / 17:00（2025年10月1日改正）",
         weekend:"中津川駅前発 例: 8:12 / 13:10 / 16:45（2025年10月1日改正・休日ダイヤ）",
         season:"バスは通年運行だが、前宮ルートの登山道は以前からの崩落個所により通行止め（中津川観光協会で要確認）",
         url:"https://kitaena.co.jp/timetable/", sample:true}
      ]
    },
    {
      name:"神坂峠登山口（標高1,567m）",
      access:[
        {mode:"タクシー", line:"近鉄東美タクシー中津川営業所 / 信南交通タクシー", from:"JR中央本線 中津川駅 または 昼神温泉",
         duration:"中津川駅から約50分（要確認）",
         weekday:"予約制", weekend:"予約制",
         season:"アクセス林道（大谷霧ヶ原線・強清水〜萬岳荘）は例年12月1日〜4月中旬冬季閉鎖。2026年は安全対策工事による通行止め（令和7年8月1日〜令和8年4月24日予定）を経て解除済み。積雪・落石時は要確認",
         url:"https://www.kintetsu-taxi.co.jp/toubi/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"恵那山頂避難小屋（無人）", elevation:2140, open:"通年（無人開放・避難小屋のため予約不要）", reservation:"—", url:"", tel:""},
    {name:"萬岳荘（富士見台高原・神坂峠側の拠点小屋）", elevation:1690, open:"グリーンシーズン 4月29日〜11月24日／ウィンターシーズン 11月23日〜翌4月末頃", reservation:"完全予約制（小屋泊・テント泊・車中泊とも）", url:"https://bangakusou.wixsite.com/home", tel:"070-2667-6618"}
  ],
  routes:[
    {name:"広河原（峰越林道ゲート）往復", stats:"距離 約11.8km（往復）/ 標高差 累積約1,170m（登り・下りとも）/ 合計コースタイム 6:00（上り下り内訳の公表なし）", level:"中級", note:"最も歩かれてきた表口ルート。峰越林道ゲートから林道歩き＋登山道で稜線へ。2026年7月現在、大雨で登山口手前の橋が破損し通行止め・復旧見込み未定（阿智村商工観光課0265-43-2220で要確認）。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.146）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"黒井沢往復", stats:"距離 約15.0km（往復）/ 標高差 累積約1,330m / 合計コースタイム 7:30", level:"中級", note:"沢沿いを詰めて主稜線の恵那山頂避難小屋へ合流。令和2年7月豪雨による林道法面崩落で登山口までの林道が通行止めのまま復旧のめどが立っていない（中津川市農林整備課0573-72-2112で要確認）。",
     popularity:1, trailhead:1, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.147）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"前宮往復", stats:"距離 約13.3km（往復）/ 標高差 累積約1,530m / 合計コースタイム 11:24", level:"上級", note:"恵那神社ゆかりの表参道で最も歴史がある道。合計コースタイムが11時間超と長く日帰りは厳しいため恵那山頂避難小屋での1泊が前提。登山道に以前からの崩落個所があり通行止め（中津川観光協会で要確認）。",
     popularity:1, trailhead:2, grade:{stamina:5, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.148）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"神坂峠往復（大判山経由）", stats:"距離 約12.6km（往復）/ 標高差 累積約1,340m / 合計コースタイム 8:42", level:"中級", note:"大判山を経由して主稜線を辿るコース。2026年7月現在、4本の公表ルートの中で唯一通行可能。アクセス林道（大谷霧ヶ原線）は例年12月〜4月中旬が冬季閉鎖。前泊は萬岳荘が便利。",
     popularity:3, trailhead:3, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.149）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[5,6,7,9,10],
    notes:{
      4:"神坂峠側アクセス林道の冬季閉鎖が例年4月中旬に解除される。残雪や融雪によるぬかるみに注意。",
      5:"新緑の時期。林道解除直後は落石・倒木が残ることがある。日陰には残雪が残ることも。",
      6:"梅雨入り。沢沿いの黒井沢ルートは増水しやすい（現在通行止め）。",
      7:"梅雨明け後が狙い目。樹林帯の登りは蒸し暑く、稜線での雷にも注意。",
      8:"盛夏。長時間樹林帯を歩くため水分・塩分を多めに。",
      9:"残暑が落ち着き歩きやすくなる時期。",
      10:"紅葉の季節。神坂峠〜大判山の稜線からの展望が良い。",
      11:"例年11月上旬に初冠雪の便り。アクセス林道は12月1日から冬季閉鎖に入る。",
      12:"積雪期。神坂峠側の林道が冬季閉鎖となり車でのアプローチができなくなる。"
    }
  }
},
{
  id:"kaikoma", name_ja:"甲斐駒ヶ岳", name_en:"Mt. Kaikoma", region:"南アルプス北部", area:"南アルプス", prefecture:"山梨県・長野県",
  elevation:2967, hyakumeizan:true,
  coords:{lat:35.7579, lon:138.2367}, forecast_elevation:2900,
  grading:{
    ridgeline:2700,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:9,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"花崗岩の白い岩肌で知られる山頂部と黒戸尾根上部（刃渡り・梯子・鎖場）は着雪・凍結に非常に弱く、10月から翌年5月頃までアイゼン・ピッケルが必要になる年が多い。黒戸尾根は登山口770mから山頂2,967mまで標高差2,200mあり、稜線と登山口で天候・気温差が大きいことにも注意。"
  },
  trailheads:[
    {
      name:"北沢峠（標高2,030m）",
      access:[
        {mode:"バス", line:"南アルプス林道バス「南アルプスクイーンライン」（伊那市営）", from:"戸台パーク（仙流荘、マイカー規制のため一般車はここまで）",
         duration:"約50分（戸台パーク→北沢峠）",
         weekday:"戸台パーク発 例: 8:12 / 10:12 / 12:17 / 14:20（毎日）。7/10〜10/12はこれに5:52発が加わる", weekend:"戸台パーク発 例: 6:37（4/25〜7/9・10/13〜11/3の土日祝のみ追加）/ 8:12 / 10:12 / 12:17 / 14:20。7/10〜10/12は5:52発も運行",
         season:"2026年は4/25〜11/3運行（4/25〜5/31は戸台口〜歌宿間のみ、6/1〜11/3が北沢峠までの全区間運行）", url:"https://www.inacity.jp/kankojoho/sangaku_alps/minamialps/minamialps_jikokuhyo.html", sample:true},
        {mode:"車", line:"自家用車（戸台パーク／仙流荘駐車場まで。そこから先は終日マイカー規制でバスのみ）", from:"中央自動車道 伊那IC",
         duration:"約30分（伊那ICから戸台パークまで）",
         weekday:"通行可。戸台パーク駐車場に停めてバスに乗り継ぐ", weekend:"同左。夏山シーズンの週末は駐車場が満車になることがある",
         season:"通年通行可（積雪期の道路状況は要問合せ）", url:"https://www.inacity.jp/kankojoho/sangaku_alps/minamialps/174h_nok20220621.html", sample:true},
        {mode:"バス（現在運休中）", line:"南アルプス市営バス 広河原⇄北沢峠線", from:"広河原",
         duration:"—",
         weekday:"運休中", weekend:"運休中",
         season:"2019年10月の台風19号による林道（山梨県営林道南アルプス線）被災のため広河原〜北沢峠間は全面通行止めが続いており、バスも運休中（2026年時点で復旧見込みは未公表）。北沢峠へは長野県伊那市側の南アルプス林道バスを利用すること。", url:"https://minami-alpskankou.jp/?page_id=6542", sample:true}
      ]
    },
    {
      name:"竹宇駒ケ岳神社／尾白川渓谷駐車場（標高約770m）",
      access:[
        {mode:"タクシー", line:"タクシー（小淵沢タクシー・須玉三共タクシー・北杜タクシー等 — 北杜市観光協会の案内）", from:"JR中央本線 小淵沢駅／長坂駅／日野春駅",
         duration:"約20〜30分（小淵沢駅から）",
         weekday:"バス路線は廃止されており、事前に電話でタクシーを予約するのが確実", weekend:"同左。夏山シーズンの週末は台数に余裕を持って手配を",
         season:"通年（積雪・凍結期は道路状況に注意）", url:"https://www.hokuto-kanko.jp/spot/ojiragawa_valley/", sample:true},
        {mode:"車", line:"自家用車（尾白川渓谷駐車場、無料・普通車約100台）", from:"中央自動車道 小淵沢IC／須玉IC",
         duration:"約20〜30分",
         weekday:"通行可", weekend:"紅葉期・夏山シーズンの週末は満車になることがある",
         season:"通年（冬期は路面凍結に注意）", url:"https://www.hokuto-kanko.jp/spot/ojiragawa_valley/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"北沢峠こもれび山荘（旧長衛荘）", elevation:2036, open:"2026年は4月25日〜11月3日（林道バスの運行状況により延長・短縮の可能性あり）・年末年始営業あり", reservation:"完全予約制。WEB予約（Yamatanやまたん）推奨。電話予約は期間中050-1722-3710（9:00〜16:00）、期間外0265-94-6001", url:"https://www.ina-city-kankou.co.jp/yamagoya/kitazawa/", tel:"050-1722-3710"},
    {name:"仙水小屋", elevation:2130, open:"6月中旬〜10月下旬", reservation:"完全予約制（20人）。テント場11張は予約不要・有料", url:"https://www.minamialps-net.jp/yamagoya/021_sensui", tel:"080-5076-5494（期間中）／0551-28-8173（期間外）"},
    {name:"七丈小屋", elevation:2380, open:"通年。2026年夏山営業は5月25日〜11月23日宿泊分（管理人常駐・食事提供あり）。冬期は2026年1月5日以降、金・土・祝日中心の限定営業で管理人不在・宿泊不可", reservation:"公式サイトからのオンライン予約推奨（4月1日は電話が混雑しやすい）。11名以上の団体等は要電話。電話受付13:00〜20:00", url:"https://www.kaikoma.info/", tel:"090-3226-2967"}
  ],
  routes:[
    {name:"北沢峠 往復（双児山・駒津峰経由）", stats:"距離 約6.8km（往復）/ 標高差 約940m（北沢峠2,030m→山頂2,967m、累積登り1,110m）/ 合計コースタイム 約7:12（公表値、休憩含まず）", level:"中級", note:"北沢峠から双児山・駒津峰を経て六方石から直登または摩利支天経由で山頂へ。花崗岩の岩稜・鎖場が続き、体力度以上に岩場歩きの経験が要る。日帰りも可能だが早発ちが前提。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.169）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】北沢峠＜仙水峠・双児山＞", stats:"距離 約8.4km（周回）/ 標高差 累積登り・下りとも約1,170m（北沢峠起点）/ 合計コースタイム 約7:12（公表値、休憩含まず）", level:"中級", note:"仙水峠・仙水小屋・駒津峰を経由する周回コース。仙水峠までの岩ゴロの道と山頂直下の岩稜が核心部。山梨県公表ルートだが起点は北沢峠のため、広河原〜北沢峠間の林道が不通の現在は長野県伊那市側から入山することになる。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"山梨 山のグレーディング（日本百名山ルート一覧表 No.170）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"黒戸尾根 往復（竹宇駒ケ岳神社）", stats:"距離 約17.3km（往復）/ 標高差 約2,200m（竹宇駒ケ岳神社770m→山頂2,967m、累積登り2,320m）/ 合計コースタイム 約15:00（公表値、休憩含まず）", level:"上級", note:"標高差2,200mの日本三大急登の一つ。刃渡り・梯子・鎖場が連続し、七丈小屋での1泊2日が前提。日本アルプス屈指のロングルートで、体力・岩場経験の両方が必要。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"D", official:true, src:"山梨 山のグレーディング（日本百名山ルート一覧表 No.171）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"南アルプス林道バスは4月25日から運行開始（2026年は戸台口〜歌宿間のみ、北沢峠までは6月1日から）。稜線・黒戸尾根上部にはまだ残雪が多い。",
      6:"6月1日から北沢峠まで全区間バス運行。梅雨で天候が不安定になりやすく、上旬は黒戸尾根8合目より上に残雪が残ることもある。",
      7:"梅雨明け後が本番。花崗岩の稜線は直射日光と落雷のリスクが高く、午後の雷雨に注意。",
      8:"盛夏で最も混雑。七丈小屋・こもれび山荘・仙水小屋とも完全予約制のため早めの予約が必須。",
      9:"残暑が落ち着き歩きやすい時期。台風接近時は南アルプス林道バスが運休することがある。",
      10:"紅葉と花崗岩の白い稜線の対比が美しい。南アルプス林道バスは11月3日で運行終了するため、下旬の計画は運行カレンダーを要確認。",
      11:"南アルプス林道バスは運行終了。以降は本格的な残雪期の装備・技術が必要になる。七丈小屋は冬期、金・土・祝日中心の限定営業（管理人不在・宿泊不可）に切り替わる。"
    }
  }
},
{
  id:"senjo", name_ja:"仙丈ヶ岳", name_en:"Mt. Senjogatake", region:"南アルプス北部", area:"南アルプス", prefecture:"長野県・山梨県",
  elevation:3033, hyakumeizan:true,
  coords:{lat:35.7201, lon:138.1836}, forecast_elevation:3000,
  grading:{
    ridgeline:3000,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"藪沢カール内・小仙丈尾根上部は6月頃まで残雪が残ることが多い。小仙丈尾根は森林限界から山頂まで遮るものがない稜線で、天候急変時は3,000m級特有の強風にさらされ体感温度が急低下する。"
  },
  trailheads:[{
    name:"北沢峠（標高約2,032m）",
    access:[
      {mode:"バス", line:"南アルプス林道バス（伊那市営）", from:"戸台パーク（旧・仙流荘、2025年4月からバス停が仙流荘前ロータリー内に移転）",
       duration:"約50分",
       weekday:"戸台パーク発 例: 8:12 / 10:12 / 12:17 / 14:20（毎日）。7/10〜10/12はこれに5:52発が加わる", weekend:"戸台パーク発 例: 6:37（4/25〜7/9・10/13〜11/3の土休日のみ追加）/ 8:12 / 10:12 / 12:17 / 14:20。7/10〜10/12は5:52発も運行",
       season:"2026年4/25〜11/3。4/25〜5/31は歌宿止まり、6/1〜11/3が北沢峠まで運行（天候等で早期終了の場合あり）", url:"https://www.inacity.jp/kankojoho/sangaku_alps/minamialps/minamialps_jikokuhyo.html", sample:true},
      {mode:"バス（乗継）", line:"JRバス関東 高遠線 → 伊那市営バス 長谷線", from:"JR飯田線 伊那市駅",
       duration:"乗継込みで約1時間", weekday:"伊那市駅発、高遠駅で長谷線（平日運行）に乗り継ぎ、南アルプス林道バスの発車時刻に接続するダイヤ。具体的な発車時刻は要確認", weekend:"長谷線は平日運行が基本のため、土休日の接続体系は別系統になる場合あり。要確認（南アルプス林道バス営業所 0265-98-2821 へ問い合わせ推奨）",
       season:"南アルプス林道バスの運行期間に準ずる", url:"https://www.inacity.jp/kurashi/kotsu_jikokuhyo/bus_rosenjikokuhyo/busjikokuhyo/index.html", sample:true}
    ]
  }],
  huts:[
    {name:"大平山荘", elevation:2036, open:"7月上旬〜10月下旬", reservation:"電話予約（TEL・FAX 0265-78-3761。営業期間中の現地連絡先は公式サイトで要確認）。北沢峠バス停より徒歩約10分", url:"https://ohdaira.sakura.ne.jp/", tel:"0265-78-3761"},
    {name:"馬の背ヒュッテ", elevation:2630, open:"2026年7/1〜10/13（最終宿泊10/12）", reservation:"Web予約（Yamatan）中心・事前決済制。個人予約は4/15 13時受付開始", url:"https://www.yamatan.net/hut/umanosehutte", tel:"090-2503-2630"},
    {name:"仙丈小屋", elevation:2885, open:"2026年6/12〜10/12", reservation:"Web予約は4/1 11時受付開始（宿泊希望日の3ヶ月前0:00〜）。電話予約は営業期間中のみ", url:"https://www.ina-city-kankou.co.jp/yamagoya/senjo/", tel:"090-1883-3033"}
  ],
  routes:[
    {name:"小仙丈尾根 往復", stats:"距離 約9.5km / 標高差 約1,000m（累積登り約1,120m） / 往復 合計コースタイム 7:36", level:"中級", note:"北沢峠から山頂へ至る最も一般的なルート。樹林帯を抜けると小仙丈ヶ岳から先は遮るものがない稜線歩きで、風の影響を強く受ける。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.179）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"周回（小仙丈尾根↑・藪沢新道↓）＜小仙丈ヶ岳＞", stats:"距離 約9.2km / 標高差 約1,000m（累積登り約1,120m） / 周回 合計コースタイム 7:12", level:"中級", note:"小仙丈尾根で登り、仙丈小屋から藪沢カール・馬の背ヒュッテを経て藪沢新道で北沢峠へ下る周回。カール内は残雪期・大雨後の増水に注意。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.180、山梨県掲載）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"馬の背ヒュッテ・仙丈小屋泊 1泊2日（周回）", stats:"1日目: 北沢峠→藪沢新道→馬の背ヒュッテ 泊 計3:30 / 2日目: 馬の背ヒュッテ→仙丈小屋→仙丈ヶ岳→小仙丈尾根→北沢峠 計4:30", level:"初〜中級", note:"日帰りだと行動時間が長くなるため、余裕を持って1泊で歩くプラン。馬の背ヒュッテ・仙丈小屋とも要予約。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"南アルプス林道バスは歌宿止まり（5/31まで）。北沢峠まではさらに歩く必要があり、本格的な残雪期装備が必須。",6:"6/1から北沢峠までバス運行開始。藪沢カールや稜線上部にはまだ雪が残ることが多い。",7:"梅雨明け後が本番。7月中旬からお花畑が見頃になり始める。",8:"夏山シーズン本番。バス本数も多い。午後の雷雨に注意。",9:"秋晴れが増え、稜線からの展望が良くなる。虫も減って歩きやすい。",10:"上旬〜中旬が紅葉の見頃。下旬は初雪の可能性があり稜線の防寒・滑り止め装備を。バスは11/3までの予定だが天候次第で前倒し終了あり。",11:"初冬。11/3で林道バスの運行終了予定（積雪状況により前倒しの可能性）。"}
  }
},
{
  id:"hoo", name_ja:"鳳凰山（観音岳）", name_en:"Mt. Hoo (Kannondake)", region:"南アルプス北部", area:"南アルプス", prefecture:"山梨県",
  elevation:2841, hyakumeizan:true,
  coords:{lat:35.70173, lon:138.304594}, forecast_elevation:2800,
  grading:{
    ridgeline:2800,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"白い花崗岩の砂礫稜線は遮るものがなく強風・低体温に直結しやすい。鳳凰小屋〜観音岳の『近道』は北斜面で日が当たらず、晩秋〜早春は積雪・凍結が長く残る（鳳凰小屋公式情報）。稜線の残雪は年により5月まで。"
  },
  trailheads:[
    {
      name:"夜叉神峠登山口（標高1,380m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 甲府駅・竜王・芦安駐車場～広河原線（山梨交通）", from:"JR中央本線 甲府駅",
         duration:"約1時間12分",
         weekday:"甲府駅発 例: 9:05 / 10:05 / 12:05 / 14:05（夜叉神峠登山口着 10:17 / 11:17 / 13:17 / 15:17）", weekend:"甲府駅発 例: 4:35 / 6:55 / 9:05 / 10:05 / 12:05 / 14:05（夜叉神峠登山口着 5:47 / 8:07 / 10:17 / 11:17 / 13:17 / 15:17）",
         season:"2026年6/26(金)〜11/3(火・祝)運行。南アルプス山岳交通適正化協議会への利用者協力金（片道300円）が別途必要", url:"https://ykbus.jp/route_bus/route_sp_info/hirogawara/", sample:true},
        {mode:"自家用車", line:"夜叉神峠登山口駐車場（無料・約100台）", from:"中央道 甲府昭和IC",
         duration:"約50分",
         weekday:"通年利用可（夜叉神峠から先の広河原方面はマイカー規制区間）", weekend:"同左",
         season:"駐車場自体は南アルプスマイカー規制の対象外で通年乗入れ可（冬期は積雪・凍結に注意）", url:"https://www.city.minami-alps.yamanashi.jp/kankou/yama/topics/", sample:true}
      ]
    },
    {
      name:"青木鉱泉（標高1,090m）",
      access:[
        {mode:"登山バス", line:"鳳凰三山登山バス（茅ヶ岳観光バス・完全予約制）", from:"JR中央本線 韮崎駅（駅前ロータリー2番乗り場）",
         duration:"約50分（運賃は事前確認要）",
         weekday:"運行なし（土日・三連休のみの運行）", weekend:"韮崎駅発 例: 7:10 / 9:10（青木鉱泉着 8:00 / 10:00）",
         season:"2026年6/20(土)〜10/12(月・祝)の土日・三連休運行。完全予約制（利用日の1ヶ月前〜2日前までに要予約、定員18名）", url:"https://houougoya.jp/access/", sample:true},
        {mode:"タクシー", line:"甲斐タクシー", from:"JR中央本線 韮崎駅",
         duration:"約45分（運賃目安 8,500円）",
         weekday:"随時（事前予約推奨）", weekend:"随時（事前予約推奨）",
         season:"通年", url:"https://www.kai-taxi.com/tourism.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"南御室小屋", elevation:2420, open:"4月下旬(GW)〜11月上旬（例年11月2日頃終了）。6月上旬より常駐営業予定（ヘリ荷揚げ状況により変動・公式サイトで要確認）。年末年始は天候により素泊まり営業の場合あり", reservation:"電話予約（現地直通携帯、20時以降は不可）または公式LINE", url:"https://www.houousan.com/", tel:"090-3406-3404"},
    {name:"薬師岳小屋", elevation:2720, open:"4月下旬(GW)〜11月上旬（例年11月2日頃終了）。6月上旬より常駐営業予定（ヘリ荷揚げ状況により変動・公式サイトで要確認）。年末年始は天候により素泊まり営業の場合あり", reservation:"電話予約（現地直通携帯、20時以降は不可）または公式LINE", url:"https://www.houousan.com/", tel:"090-5561-1242"},
    {name:"鳳凰小屋", elevation:2382, open:"2026年は4/25・5/1〜5/5(GW)、5/23〜24(週末)、5/29〜11/7が通常営業。年末年始は未定（要問合せ）", reservation:"宿泊は完全予約制（電話 8〜13時・15〜19時）。テント泊は8名以上か指定日のみ予約制", url:"https://houougoya.jp/", tel:"0551-27-2466"}
  ],
  routes:[
    {name:"夜叉神峠 往復", stats:"距離 約24.5km（往復）／ 標高差 約1,461m（累積標高差 登り1,850m・下り1,850m）／ 合計コースタイム 約13.1時間（公表値）", level:"中級", note:"稜線には南御室小屋・薬師岳小屋があり水・トイレに困りにくい。行程が長く日帰りは健脚向け、山小屋1泊での計画が現実的。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"B", official:true, src:"日本百名山ルート一覧表（10県2山域・山のグレーディング、掲載県:山梨県、No.187）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】青木鉱泉〈地蔵岳・中道〉", stats:"距離 約15.8km（周回）／ 標高差 約1,751m（累積標高差 登り2,090m・下り2,090m）／ 合計コースタイム 約12.6時間（公表値）", level:"中級", note:"ドンドコ沢を登って鳳凰小屋・地蔵岳へ、中道を下って青木鉱泉に戻る周回。ドンドコ沢は五色滝など滝が連続する急登、中道は展望のない樹林の下り（鳳凰小屋公式情報）。",
     popularity:3, trailhead:1, grade:{stamina:5, skill:"C", official:true, src:"日本百名山ルート一覧表（10県2山域・山のグレーディング、掲載県:山梨県、No.188）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{4:"登山道はまだ残雪・凍結が多く上級者向け。山小屋は未営業、青木鉱泉行き登山バスも運行前で、夜叉神峠へは自家用車のみ。",5:"残雪期。鳳凰小屋・南御室小屋・薬師岳小屋がGW前後から週末営業を開始（本格営業は6月）。稜線に雪が残る年は軽アイゼンを。",6:"上旬〜中旬に山小屋が常駐営業に切り替わる（ヘリ荷揚げ状況次第・公式サイトで要確認）。タカネビランジなど高山植物が咲き始める。梅雨の晴れ間を狙いたい。",7:"盛夏。白い花崗岩の稜線と青空のコントラストが美しい。午後の雷雨に注意。",8:"夏山最盛期。タカネビランジ・シャクナゲの後は展望重視の稜線歩きに。日中の雷リスクは引き続き高い。",9:"稜線は爽快な展望期に入る。台風接近時は無理をしない判断を。",10:"紅葉と初冠雪が交錯する時期。夜叉神峠行き登山バスは11/3まで、青木鉱泉行き登山バスは10/12までの運行なのでアクセス計画に注意。中旬以降は朝晩氷点下。",11:"山小屋は例年11月上旬で通常営業を終了（南御室小屋・薬師岳小屋は11月2日頃、鳳凰小屋は2026年は11/7まで）。稜線は積雪・強風の本格的な冬型に入る。"}
  }
},
{
  id:"kitadake", name_ja:"北岳", name_en:"Mt. Kitadake", region:"南アルプス北部（白峰三山）", area:"南アルプス", prefecture:"山梨県",
  elevation:3193, hyakumeizan:true,
  coords:{lat:35.6746, lon:138.2388}, forecast_elevation:3100,
  grading:{
    ridgeline:3100,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"草すべり上部から北岳肩の小屋にかけては例年6月下旬まで雪渓が残り、キタダケソウ（6月下旬〜7月上旬固有種）は残雪が明けた直後に見頃を迎える。八本歯のコル経由（大樺沢左俣）は梯子・鎖が連続し、残雪期・降雨後は特に滑落注意。標高3,000m級の稜線は風の通り道で、荒天時は風予報を最優先すること。"
  },
  trailheads:[
    {
      name:"広河原（標高1,520m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 甲府・竜王・芦安駐車場～広河原線（山梨交通）", from:"JR甲府駅南口バスターミナル",
         duration:"約1時間40分",
         weekday:"甲府駅発 例: 6:55 / 9:05 / 10:05 / 12:05 / 14:05（7/18〜8/23は毎日運行、8/24〜11/3は土休日中心の運行）", weekend:"甲府駅発 例: 4:35 / 6:55 / 9:05 / 10:05 / 12:05 / 14:05（夏期は早朝4:35発の便あり。広河原発は例: 10:00 / 11:00 / 12:00 / 14:00 / 16:35）",
         season:"2026年6/26(金)〜11/3(火・祝)。この期間のみ「南アルプスマイカー規制」で一般車両通行止め・バス/タクシー運行、期間外は林道が冬期閉鎖され徒歩でも通行不可。", url:"https://www.minamialps-net.jp/access/bus-1-1", sample:true},
        {mode:"乗合タクシー", line:"市営芦安駐車場〜広河原（芦安観光タクシー）", from:"市営芦安駐車場",
         duration:"約50分",
         weekday:"芦安駐車場発 例: 5:10 / 7:00 / 12:00 / 16:30（要事前連絡、季節・曜日により変動）", weekend:"芦安駐車場発 例: 5:10 / 7:00 / 12:00 / 16:30（夏期土休日は増便あり。広河原発は例: 8:00 / 10:00 / 12:00 / 14:00）",
         season:"2026年6/26〜11/3", url:"https://www.minamialps-net.jp/access/taxi-1", sample:true},
        {mode:"直行バス", line:"新宿発 南アルプス登山者用バス（山梨交通・要予約）", from:"新宿駅西口",
         duration:"夜行 約8時間15分", weekday:"新宿発 例: 22:00（毎週火曜運行日あり、広河原着 例: 6:13）", weekend:"新宿発 例: 22:00（毎週金曜運行、広河原着 例: 6:13）",
         season:"2026年は7月上旬〜10月上旬の金曜（一部期間は火曜も増発）。運行日は年により変動するため要確認。", url:"https://ykbus.jp/travel/hirogawara/", sample:true}
      ]
    },
    {
      name:"奈良田（標高約830m、南アルプス南部への南口）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 奈良田～広河原線（山梨交通）", from:"奈良田駐車場・奈良田温泉",
         duration:"約45分",
         weekday:"奈良田発 例: 5:30 / 8:40 / 15:30（広河原発は例: 7:00 / 14:30 / 16:35）", weekend:"奈良田発 例: 5:30 / 8:40 / 15:30（同左、繁忙期は増便の場合あり）",
         season:"2026年6/26〜11/3", url:"https://www.minamialps-net.jp/access/bus-3-1", sample:true},
        {mode:"バス", line:"早川町乗合バス（身延駅～奈良田温泉）", from:"JR身延線 身延駅・下部温泉駅",
         duration:"身延駅から奈良田温泉まで約1時間30分",
         weekday:"身延駅発 例: 7:05 / 11:25 / 13:45 / 16:45 / 18:30（奈良田温泉発は例: 6:35 / 9:50 / 13:50 / 15:55）", weekend:"平日とほぼ同一（土日祝は身延駅6:11発・18:30発の2便が運休）",
         season:"通年運行（南アルプス登山バスの奈良田線と接続）", url:"https://www.town.hayakawa.yamanashi.jp/people/taffic.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"白根御池小屋", elevation:2236, open:"6月中旬〜11月上旬（2026年は6/15〜、閉山日は例年11月上旬・要確認）", reservation:"完全予約制。小屋泊・テント泊とも南アルプス市の予約システム「南ぷすリザーブ」からのWeb予約のみで、電話予約は不可。", url:"https://shiraneoike.ashiyasu.com/", tel:"090-3201-7683"},
    {name:"北岳肩の小屋", elevation:3000, open:"2026年6月26日〜10月25日（予定）", reservation:"電話予約のみ（ショートメール・DMでの受付は不可）", url:"https://katanokoya.com/", tel:"090-4606-0068"},
    {name:"北岳山荘（南アルプス市営・指定管理）", elevation:2900, open:"2026年6/15〜11/3（宿泊は連泊上限あり）", reservation:"完全予約制。南アルプス市の予約システム「南ぷすリザーブ」からのWeb予約のみで、電話予約は不可。", url:"https://kitadake.ashiyasu.com/", tel:"090-4529-4947（営業期間中の問い合わせ用）"}
  ],
  routes:[
    {name:"草すべり（広河原）往復", stats:"距離 約11.5km（往復）/ 標高差 約1,730m / 登り6:00・下り4:40（合計コースタイム10.7時間・信州グレーディング公表値）", level:"中級", note:"北岳の標準ルート。白根御池小屋泊が一般的で、日帰りは健脚者向け。草すべりは急登の直登区間で落石・残雪期のスリップに注意。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.172）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"広河原", to:"白根御池小屋", up:"2:00", down:"1:40"},
       {from:"白根御池小屋", to:"北岳肩の小屋", up:"3:00", down:"2:20"},
       {from:"北岳肩の小屋", to:"北岳山頂", up:"1:00", down:"0:40"}
     ], sample:true},
    {name:"【縦走】北岳→農鳥岳（広河原→奈良田）", stats:"距離 約25.3km / 標高差 登り約2,550m・下り約3,250m / 合計コースタイム18.3時間（信州グレーディング公表値、1泊2日以上が前提）", level:"上級", note:"白峰三山縦走。北岳山荘（または北岳肩の小屋）に泊まり、間ノ岳・農鳥岳を越えて大門沢を奈良田へ下る。稜線が長く悪天候時のエスケープが乏しいため、天候判断と体力配分がより重要。大門沢の下降は長く膝への負担が大きい。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.173）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周回】大樺沢・八本歯のコル経由（広河原）", stats:"距離 約13km（周回）/ 標高差 約1,680m / 登り6:30・下り4:30（独自推定）", level:"上級", note:"大樺沢二俣から左俣を詰めて八本歯のコルへ。梯子と鎖が連続する上級者向けルートで、大樺沢の雪渓が残る時期はアイゼン携行が望ましい。下山は草すべり経由が一般的。信州グレーディング公表ルート（No.172/173）とは起点・区間が一致しないため独自推定。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"広河原へのアクセスとなる南アルプス林道・県道は6月26日にマイカー規制とともに開通（2026年）。それ以前は登山バス自体が運行しておらず、事実上入山できない。開通直後は草すべり上部にまだ残雪が多く、キタダケソウが咲き始める。",
      7:"梅雨明け後が本番。キタダケソウは6月下旬〜7月上旬が見頃で、その後は他の高山植物へ移る。午後の雷雨に注意。",
      8:"盛夏。小屋・バスとも通常営業で最も賑わう時期。稜線の混雑と午後の雷雨リスクが高いため早出早着を徹底。",
      9:"上旬は残暑が続き、中旬から朝晩冷え込みが強まる。台風接近時は登山バスが運休することがあるため直前の運行情報確認が必須。",
      10:"紅葉が進むが、上旬でも初雪の可能性がある高山。中旬以降は防寒・滑落対策の装備が必要。バス・小屋は11月3日前後で今シーズンの営業を終える。",
      11:"3日でマイカー規制と登山バスが終了し、以降は南アルプス林道・県道が冬期閉鎖されて広河原への交通手段がなくなる。本格的な積雪期に入り、無雪期装備での入山は困難。"
    }
  }
},
{
  id:"ainodake", name_ja:"間ノ岳", name_en:"Mt. Ainodake", region:"南アルプス北部", area:"南アルプス", prefecture:"山梨県・静岡県",
  elevation:3190, hyakumeizan:true,
  coords:{lat:35.6461, lon:138.2283}, forecast_elevation:3100,
  grading:{
    ridgeline:3100,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"草すべりの雪渓は例年6月下旬〜7月上旬まで残ることがあり、残雪期はアイゼン・ピッケルが必要。北岳山荘から間ノ岳・農鳥小屋にかけては樹林のない3,000m級のトラバース主体の稜線が長く続き、悪天候時は風を遮る場所も逃げ場もほぼない。低体温症・道迷いのリスクが高いため、荒天予報時は稜線への突入を控えること。"
  },
  trailheads:[
    {
      name:"広河原登山口（標高1,520m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 甲府駅・芦安駐車場〜広河原線（山梨交通）", from:"JR甲府駅南口・芦安駐車場",
         duration:"甲府駅から約1時間55分／芦安駐車場から約1時間",
         weekday:"甲府駅発 例: 9:05 / 10:05 / 12:05（7/18〜8/23は4:35・6:55・14:05発も毎日運行）", weekend:"甲府駅発 例: 9:05 / 10:05 / 12:05（8/24〜11/3の土休日は4:35・6:55・14:05発も運行）",
         season:"2026年は6月26日〜11月3日運行（南アルプス市営バスは2026年度運行休止）", url:"https://ykbus.jp/route_bus/route_sp_info/hirogawara/", sample:true}
      ]
    },
    {
      name:"奈良田登山口（白峰三山縦走・大門沢下山口、標高約830m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 奈良田〜広河原線（山梨交通）", from:"奈良田駐車場（第一発電所・野呂川発電所経由）",
         duration:"約45分〜50分（奈良田〜広河原）",
         weekday:"広河原発（下山方向）例: 7:00 / 14:30（8/24〜11/3土休日は16:35発も運行）", weekend:"広河原発（下山方向）例: 7:00 / 14:30（7/18〜8/23は16:35発も毎日運行）",
         season:"2026年は6月26日〜11月3日運行（奈良田発5:30便は7/1〜8/31毎日・9/1〜11/3土休日のみ）", url:"https://ykbus.jp/route_bus/route_sp_info/hirogawara/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"白根御池小屋", elevation:2236, open:"2026年は6月15日〜11月上旬", reservation:"予約システム「南ぷすリザーブ」推奨（2026年度受付は4月1日10:00開始）、電話も可", url:"https://shiraneoike.ashiyasu.com/", tel:"090-3201-7683"},
    {name:"北岳肩の小屋", elevation:3000, open:"6月中旬〜11月上旬（開始・終了日は年により変動、要確認）", reservation:"電話予約のみ（Web予約不可）", url:"https://katanokoya.com/", tel:"055-288-2421（事務所）／090-4606-0068（現地・営業期間中）"},
    {name:"北岳山荘", elevation:2900, open:"2026年は6月下旬〜11月上旬", reservation:"完全予約制。予約システム「南ぷすリザーブ」のみ・電話予約不可（2026年度受付は4月1日10:00開始）", url:"https://kitadake.ashiyasu.com/", tel:"090-4529-4947（現地・営業期間中の問合せ用、予約不可）"},
    {name:"農鳥小屋", elevation:2800, open:"例年7月上旬〜10月中旬頃（年により変動、要確認）", reservation:"原則不要。5名以上または連休中の宿泊は要連絡", url:"https://notorihut.jimdofree.com/", tel:"0556-48-2533"},
    {name:"大門沢小屋", elevation:1765, open:"例年7月1日〜10月中旬", reservation:"電話予約", url:"https://www.daimonzawa.com/", tel:"090-7635-4244"}
  ],
  routes:[
    {name:"広河原→白根御池小屋→草すべり→北岳→北岳山荘→間ノ岳 往復", stats:"距離 約19.1km（往復）/ 標高差 累積登り・下りとも約2,060m / 合計コースタイム16.0時間（日帰りは健脚限定、北岳山荘か肩の小屋での1泊2日が標準）", level:"上級", note:"日本第2位・北岳（3,193m）の山頂を経由してさらに間ノ岳まで稜線を往復する。北岳山頂から間ノ岳往復だけでも2〜3時間かかり、日帰りは行動時間が長大なため北岳山荘泊が現実的。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.163）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"白峰三山縦走（広河原→北岳→間ノ岳→農鳥岳→大門沢→奈良田）", stats:"距離 約25.3km / 標高差 累積登り約2,550m・下り約3,250m / 合計コースタイム18.3時間（2泊3日が標準）", level:"上級", note:"日本第2位・北岳と第3位タイ・間ノ岳、農鳥岳を結ぶ南アルプス屈指の縦走路。北岳山荘・農鳥小屋（または大門沢小屋）で2泊するのが一般的。間ノ岳から農鳥岳にかけては森林限界上のトラバースが長く続き、悪天候時は撤退路が限られる。下山は大門沢小屋を経て奈良田へ。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.173）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"残雪期の終盤。草すべり上部や北岳山荘周辺に雪渓が残ることがありアイゼン携行が安心。登山バスは6月26日運行開始。",
      7:"山開き後、稜線の小屋が本格営業に入る。梅雨明け（例年7月中旬〜下旬）まで天候不安定で午後の雷雨に注意。",
      8:"盛夏。稜線でも日中の強い日差しと午後の雷雨リスクが続く。北岳山荘・農鳥小屋とも混雑するため予約は早めに。",
      9:"上旬は残暑が残るが中旬以降は秋の高気圧で安定した晴天が増える。朝晩は氷点下近くまで冷え込み始める。",
      10:"稜線から草紅葉が始まり中旬にかけて見頃。上旬でも初雪の可能性があり防寒・アイゼンの携行を検討。登山バスは11月3日まで。"
    }
  }
},
{
  id:"shiomi", name_ja:"塩見岳", name_en:"Mt. Shiomi", region:"南アルプス南部", area:"南アルプス", prefecture:"長野県・静岡県",
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
},
{
  id:"warusawa", name_ja:"悪沢岳（荒川東岳）", name_en:"Mt. Warusawa (Arakawa-Higashidake)", region:"南アルプス南部", area:"南アルプス", prefecture:"静岡県",
  elevation:3141, hyakumeizan:true,
  coords:{lat:35.5006, lon:138.1822}, forecast_elevation:3050,
  grading:{
    ridgeline:3050,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"千枚小屋〜中岳避難小屋間の稜線は森林限界を超え、6月上旬まで雪渓や凍結が残る。エスケープ路がほとんどない行程のため、荒天時は無理に進まず小屋で停滞する判断が重要。"
  },
  trailheads:[
    {
      name:"畑薙第一ダム夏期臨時駐車場（マイカーはここまで）",
      access:[
        {mode:"バス（夏季季節運行・要予約）", line:"南アルプス登山線（しずてつジャストライン）", from:"JR静岡駅前",
         duration:"約3時間20分（白樺荘経由）",
         weekday:"静岡駅前発 例: 10:00（白樺荘13:10・畑薙夏期臨時駐車場13:20着）／復路 畑薙発14:30（白樺荘14:40・静岡駅前17:50着）", weekend:"同上（運行期間中は毎日運行）",
         season:"2026年7月16日(木)〜8月16日(日)・毎日運行（1日1往復のみ、要事前予約・乗車前日19:00までに手続き）", url:"https://www.justline.co.jp/news/20260611/22914/", sample:true},
        {mode:"タクシー（相乗り・要予約）", line:"南アルプス登山送迎便（千代田タクシー）", from:"静岡駅北口 等",
         duration:"約3時間半", weekday:"要問合せ（相乗り便は運行日・時刻が変動）", weekend:"要問合せ",
         season:"登山シーズン中（要事前予約）", url:"https://www.chiyodataxi.com/travel-taxi/%E5%8D%97%E3%82%A2%E3%83%AB%E3%83%97%E3%82%B9%E7%99%BB%E5%B1%B1%E9%80%81%E8%BF%8E%E4%BE%BF-%E7%9B%B8%E4%B9%97%E3%82%8A/", sample:true}
      ]
    },
    {
      name:"椹島（さわらじま）ロッヂ（標高1,120m・一般車進入不可）",
      access:[
        {mode:"送迎バス（対象山小屋の宿泊者専用・要予約）", line:"特種東海フォレスト送迎バス（畑薙〜椹島）", from:"畑薙第一ダム夏期臨時駐車場",
         duration:"約1時間10分",
         weekday:"畑薙発 例: 7:30・15:00（椹島8:40・16:10着）／椹島発 例: 6:10・10:30・13:00（畑薙7:20・11:40・14:10着）", weekend:"同上（7/16〜8/31は毎日、9/1〜10/12は日祝運行・平日は月〜土運行）",
         season:"2026年7月11日〜10月12日（4/26〜7/10・10/13以降は宿泊予約時に個別調整）。※椹島ロッヂ・千枚小屋・荒川小屋・中岳避難小屋など対象施設への1泊以上の宿泊者限定、テント泊のみは対象外。往復無料（宿泊料に含む）。2026年6月26〜27日の大雨で東俣林道の路肩が崩落し一時運休したが、仮復旧により7/9から予約受付を再開。悪天候・林道状況により運休する場合あり。", url:"https://www.t-forest.com/alpsinfo/bus/", sample:true}
      ]
    },
    {
      name:"鳥倉登山口（越路・標高約1,630m）",
      access:[
        {mode:"バス（夏季季節運行）", line:"南アルプス登山バス 鳥倉線（伊那バス）", from:"JR飯田線 伊那大島駅前",
         duration:"約1時間45分",
         weekday:"伊那大島駅前発 例: 6:45／12:10（鳥倉登山口着8:30／13:55）", weekend:"同上（運行期間中は毎日運行）",
         season:"2026年7月18日(土)〜8月30日(日)の毎日", url:"https://www.ibgr.jp/general-route/torikura_off2/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"千枚小屋", elevation:2600, open:"2026年7月11日〜10月11日（予定）", reservation:"Web予約優先（特種東海フォレスト予約センター／まいたび）・完全予約制ではないが事前予約推奨", url:"https://www.t-forest.com/alpsinfo/reservation/", tel:"0547-46-4717"},
    {name:"荒川小屋", elevation:2600, open:"2026年7月11日〜10月11日（予定）", reservation:"Web予約優先（特種東海フォレスト予約センター／まいたび）", url:"https://www.t-forest.com/alpsinfo/reservation/", tel:"0547-46-4717"},
    {name:"中岳避難小屋（夏期のみ管理人常駐）", elevation:3080, open:"2026年7月11日〜9月22日（予定・夏期以外は無人避難小屋）", reservation:"予約不要（当日受付）", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"}
  ],
  routes:[
    {name:"【周】千枚岳→悪沢岳（荒川東岳）→荒川中岳・前岳→赤石岳（椹島発着）", stats:"距離 約27.4km（周回）/ 標高差 登り約3,290m・下り約3,290m / 公表コースタイム合計 約19時間48分（2泊3日が標準）", level:"上級", note:"千枚岳・悪沢岳・赤石岳を一気に踏む南アルプス南部の代表的周回。千枚小屋・荒川小屋（または中岳避難小屋）・赤石小屋を利用した2泊3日が標準。マイカー規制のため東海フォレスト送迎バスの利用が前提。",
     popularity:3, trailhead:1, grade:{stamina:8, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.168）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】千枚岳・悪沢岳（荒川東岳）周回（二軒小屋発着）", stats:"距離 約14.7km（周回）/ 標高差 登り約1,970m・下り約1,970m / 公表コースタイム合計 約12時間30分（1泊2日が標準）", level:"上級", note:"二軒小屋ロッヂを起点に千枚岳・悪沢岳を周回する比較的短いルート。ただし二軒小屋ロッヂは東俣林道の改良工事に伴い一般営業を休止中（2026年時点）。再開時期は運営元の十山株式会社（TEL 0547-36-5160）へ要確認。",
     popularity:1, trailhead:null, grade:{stamina:5, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.167）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【縦】荒川岳前岳→悪沢岳（荒川東岳）縦走（鳥倉→椹島）", stats:"距離 約32.4km / 標高差 登り約3,200m・下り約3,710m / 公表コースタイム合計 約20時間30分（2〜3泊が前提）", level:"上級", note:"鳥倉登山口から三伏峠・塩見岳方面の稜線を経て荒川前岳・悪沢岳（東岳）へ縦走し椹島へ下る大縦走。長野・静岡の県境をまたぎ行程が長くエスケープが少ない上級者向けルート。",
     popularity:2, trailhead:2, grade:{stamina:9, skill:"D", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.166）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪期。山小屋・送迎バスとも営業前で一般登山には不向き。",6:"梅雨。山小屋・送迎バスは7/11開始前で、稜線には残雪が残る。",7:"7/11から山小屋・送迎バスが営業開始（2026年は6月末の大雨による林道被害からの仮復旧を経て7/9に予約受付再開）。千枚岳周辺のお花畑が見頃に向かう。",8:"盛夏で登山バス・送迎バスとも運行がフル体制。午後の雷雨と土砂災害に注意。",9:"上旬〜中旬は盛夏の延長、下旬から紅葉が始まる。9/24〜10/9頃は一部山小屋・送迎バスが予約不要（当日受付）になる年が多い。",10:"紅葉ピークだが山小屋（10/11予定）・送迎バス（10/12予定）とも中旬に営業終了。以降はマイカー規制のみ残りアクセスが極端に難しくなる。初雪にも注意。"}
  }
},
{
  id:"akaishi", name_ja:"赤石岳", name_en:"Mt. Akaishi", region:"南アルプス南部", area:"南アルプス", prefecture:"静岡県・長野県",
  elevation:3121, hyakumeizan:true,
  coords:{lat:35.4613, lon:138.1575}, forecast_elevation:3050,
  grading:{
    ridgeline:3050,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:9,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"南アルプス南部の深い山域で、椹島から稜線に出るまでの行程が長くエスケープルートが乏しい。小赤石岳〜赤石岳の主稜線は森林限界上で風を遮るものがなく、残雪は例年6月頃までに消えるが、悪天候時は停滞・撤退の判断を早めに。"
  },
  trailheads:[{
    name:"椹島（さわらじま）登山口・椹島ロッヂ（標高1,120m）",
    access:[
      {mode:"バス（夏季限定・要予約）", line:"南アルプス登山線（しずてつジャストライン）", from:"JR静岡駅",
       duration:"約3時間30分",
       weekday:"静岡駅前 10:00発（畑薙臨時駐車場 14:30発）", weekend:"同左（運行期間中は毎日運行）",
       season:"2026年は7月16日〜8月16日のみ運行（要事前予約・乗車前日19:00までに手続き）", url:"https://www.justline.co.jp/news/20260611/22914/", sample:true},
      {mode:"乗合タクシー", line:"南アルプス登山送迎便（千代田タクシー）", from:"JR静岡駅",
       duration:"約3時間",
       weekday:"事前予約制。通常便8,500円/名・椹島便11,000円/名（片道・公式サイト2026年現在）", weekend:"同左（事前予約制）",
       season:"夏山シーズン運行、詳細・運行日は要確認", url:"https://www.chiyodataxi.com/travel-taxi/%E5%8D%97%E3%82%A2%E3%83%AB%E3%83%97%E3%82%B9%E7%99%BB%E5%B1%B1%E9%80%81%E8%BF%8E%E4%BE%BF-%E7%9B%B8%E4%B9%97%E3%82%8A/", sample:true},
      {mode:"自家用車（畑薙第一ダムまで）", line:"新東名高速・新静岡IC経由 県道189号・県道60号等", from:"新静岡IC",
       duration:"約2時間30分",
       weekday:"随時", weekend:"随時",
       season:"通年（市道閑蔵線は法面復旧工事に伴う時間帯通行規制・夜間通行止めの区間あり、静岡市道路通行規制情報で要確認）。畑薙第一ダムより先の東俣林道は一般車両通行不可、椹島へは送迎バス利用が必須", url:"https://www.t-forest.com/alpsinfo/access/", sample:true},
      {mode:"送迎バス（宿泊者専用・要予約）", line:"特種東海フォレスト送迎バス（畑薙第一ダム⇔椹島ロッヂ）", from:"畑薙夏期臨時駐車場",
       duration:"約70分",
       weekday:"畑薙発 例: 7:30 / 15:00　椹島発 例: 6:10 / 10:30 / 13:00", weekend:"同左",
       season:"2026年は7月11日〜10月12日運行（7/11〜9/23は事前予約必須、9/24〜10/9は予約不要で当日乗車可）。特種東海フォレスト運営の山小屋・ロッヂに1泊以上宿泊する人限定、テント泊のみの行程は対象外", url:"https://www.t-forest.com/alpsinfo/bus/", sample:true}
    ]
  }],
  huts:[
    {name:"赤石小屋", elevation:2500, open:"2026年7月11日〜10月11日（予定）", reservation:"事前予約制（Web予約は6月1日受付開始、予約なし宿泊は+1,000円）。水場・トイレあり。", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"},
    {name:"赤石岳避難小屋（山頂直下）", elevation:3090, open:"2026年7月11日〜9月22日（予定）", reservation:"事前予約制（特種東海フォレストが窓口）。素泊まりのみ・食事提供なし・水場なし、トイレあり。収容約10人。", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"},
    {name:"百間洞山の家", elevation:2560, open:"2026年7月11日〜8月31日（2026年は改修工事のため小屋泊の営業期間を短縮・予定）", reservation:"事前予約制（Web予約は6月1日受付開始）。水場・トイレあり、テント幕営可（別料金）。", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"}
  ],
  routes:[
    {name:"赤石岳（椹島）大倉尾根（東尾根）往復", stats:"距離 16.9km（往復）/ 累積標高差 登り2,550m・下り2,550m / 合計コースタイム14.8時間（標準1泊2日、赤石小屋泊が一般的）", level:"上級", note:"椹島から赤石小屋を経て大倉尾根（東尾根）を登る、赤石岳への最短ルート。日帰りは非現実的で赤石小屋での1泊が前提。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.165）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【縦】赤石岳→聖岳（椹島・聖沢）", stats:"距離 28.2km（椹島→赤石岳→聖岳→聖沢登山口、縦走）/ 累積標高差 登り3,780m・下り3,760m / 合計コースタイム22.9時間（標準2泊3日、赤石小屋・百間洞山の家泊などが一般的）", level:"上級", note:"赤石岳から百間洞・聖岳を経て聖沢へ下る南アルプス南部の代表的な縦走路。下山地の聖沢登山口からのバス便は限られるため下山交通の事前確認が必須。",
     popularity:2, trailhead:0, grade:{stamina:9, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.164）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】千枚岳→荒川岳→赤石岳（椹島）周回", stats:"距離 27.4km（周回）/ 累積標高差 登り3,290m・下り3,290m / 合計コースタイム19.8時間（標準2泊3日、千枚小屋・荒川小屋泊などが一般的）", level:"上級", note:"千枚岳・荒川三山（悪沢岳）を経て赤石岳へ至る南アルプス南部の代表的な周回路。悪沢岳側の登山データでも同じルート（No.168）として扱う。",
     popularity:2, trailhead:0, grade:{stamina:8, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.168）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{7:"7月11日に東海フォレスト送迎バスと各山小屋が営業開始。梅雨明け前後は残雪と大雨に注意。静岡駅発の南アルプス登山線バスは2026年は7/16〜8/16のみの運行。",8:"夏山最盛期。稜線は日中の雷雨・夕立に注意し、早出早着を徹底。百間洞山の家は2026年は改修工事のため8/31で小屋泊営業終了予定。",9:"台風シーズン。送迎バス運休の可能性があるため出発前に東海フォレスト公式サイトで運行状況を要確認。9/24〜10/9は送迎バスが予約不要の当日便に切り替わる。",10:"紅葉と初雪の季節。送迎バスの運行は10/12まで（10/13以降は林道工事のため個別調整）。中旬以降は積雪・凍結に注意。"}
  }
},
{
  id:"hijiri", name_ja:"聖岳", name_en:"Mt. Hijiri", region:"南アルプス南部", area:"南アルプス", prefecture:"長野県・静岡県",
  elevation:3013, hyakumeizan:true,
  coords:{lat:35.4227, lon:138.1404}, forecast_elevation:2950,
  grading:{
    ridgeline:2950,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"前聖岳山頂部は森林限界を超えるハイマツ帯で風を遮るものがなく、6月頃まで雪田が残る年もある。南アルプス南部の深い山域で聖平小屋以外にエスケープ先が乏しく、行程も長いため、悪天候時は稜線に上がる前の早めの停滞・撤退判断が重要。"
  },
  trailheads:[
    {
      name:"聖光小屋（便ヶ島、標高970m）",
      access:[
        {mode:"自家用車", line:"国道152号・矢筈トンネル経由 遠山郷方面林道（芝沢ゲートまで）", from:"中央自動車道 飯田IC",
         duration:"約1時間20分（飯田ICから芝沢ゲートまで）。芝沢ゲートから便ヶ島まではさらに徒歩約2時間（易老渡経由）",
         weekday:"随時（芝沢ゲート駐車場約50台、協力金1,000円程度）", weekend:"同左（繁忙期は満車の場合あり）",
         season:"林道赤石線は崩落による通行規制が頻発。飯田市公式情報では2026年6月26日時点でナギナカ沢付近が一部通行不可、便ヶ島より先（西沢渡方面・聖岳登山道）は災害復旧工事のため当分の間通行止め（2026年7月8日時点、遠山郷観光協会確認）。入山前に必ず飯田市公式サイトで最新状況を確認すること。",
         url:"https://www.city.iida.lg.jp/soshiki/23/rindou-tsuukou.html", sample:true},
        {mode:"タクシー（事前予約制・乗合）", line:"道の駅遠山郷⇔易老渡 送迎タクシー", from:"道の駅遠山郷（JR飯田線 飯田駅からバス乗継）",
         duration:"約1時間20分（易老渡まで）。易老渡から便ヶ島まではさらに徒歩約30分",
         weekday:"往路 例: 4:30発 / 復路 例: 13:00発（事業者・日により変動、要予約時確認）", weekend:"同左",
         season:"2026年は7月1日〜11月8日運行。完全事前予約制で当日申込不可。芝沢ゲート駐車場での発着は不可（道の駅遠山郷または最寄り駅からのみ）",
         url:"https://tohyamago.com/archives/3681", sample:true}
      ]
    },
    {
      name:"聖沢登山口（標高1,140m）",
      access:[
        {mode:"バス（夏季限定・完全予約制）", line:"南アルプス登山線（静岡駅前〜畑薙第一ダム、しずてつジャストライン）", from:"JR静岡駅",
         duration:"約3時間20分（畑薙第一ダムまで）",
         weekday:"静岡駅前発 例: 10:00発（畑薙臨時駐車場着 例: 13:20）、復路 畑薙臨時駐車場発 例: 14:30", weekend:"同左（1日1往復のみ）",
         season:"2026年は7月16日〜8月16日運行予定。前日19時までにWeb予約が必要", url:"https://www.justline.co.jp/", sample:true},
        {mode:"送迎バス（宿泊者専用・要予約）", line:"特種東海フォレスト送迎バス（畑薙第一ダム⇔椹島、入山時のみ聖沢登山口で途中下車可）", from:"畑薙第一ダム駐車場",
         duration:"約50分（聖沢登山口まで、目安）",
         weekday:"畑薙第一ダム発 例: 7:30 / 15:00（椹島行き。聖沢登山口での下車希望は事前申告制）", weekend:"同左",
         season:"2026年は7月11日〜10月12日運行。7/11〜9/23は完全予約制、9/24〜10/9は当日乗車可。椹島ロッジまたは東海フォレスト管轄の山小屋宿泊者専用でテント泊のみは利用不可。下山側（聖沢登山口からの乗車）は不可のため下山ルートは別途計画が必要。",
         url:"https://www.t-forest.com/alpsinfo/bus/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"聖光小屋", elevation:970, open:"2026年は4月24日〜10月12日の予定", reservation:"電話予約制。できるだけ1週間前までに連絡（2026年は3月20日予約受付開始予定）", url:"https://seikougoya.info/", tel:"090-7027-2645"},
    {name:"聖平小屋", elevation:2260, open:"2026年は7月11日（土）〜9月23日（水）（9月22日宿泊分まで）", reservation:"小屋泊は事前予約制（井川観光協会予約サイトより）。テント泊は予約不要（2026年度から予約制廃止）", url:"https://hijiridairagoya.wixsite.com/hijiri", tel:"080-1560-6309（井川観光協会・予約窓口、平日10:00〜14:00）"}
  ],
  routes:[
    {name:"聖岳（聖光小屋起点）往復", stats:"距離 約18.3km（往復）/ 標高差 累積登り約2,370m・下り約2,370m（聖光小屋970m⇔聖岳3,013m）/ 合計コースタイム 約12時間54分（聖平小屋泊まりの1泊2日が標準）", level:"上級", note:"便ヶ島から西沢渡・薊畑を経て聖平小屋、聖岳山頂へ。2026年は便ヶ島より先（西沢渡方面）が災害復旧工事のため当分の間通行止め（2026年7月8日時点）。通行再開状況は必ず飯田市公式・遠山郷観光協会で確認すること。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.184）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"聖岳（聖沢登山口起点）往復", stats:"距離 約20.8km（往復）/ 標高差 累積登り約2,640m・下り約2,640m（聖沢登山口1,140m⇔前聖岳3,013m）/ 合計コースタイム 約15時間36分（聖平小屋泊まりの1泊2日が標準）", level:"上級", note:"聖沢吊橋・造林小屋跡を経て聖平小屋、前聖岳山頂へ。2026年は長野県側（聖光小屋ルート）が通行止めのため、静岡県側からの本ルートが事実上の主要登路。東海フォレスト送迎バスは入山時のみ利用可（下山時の乗車は不可）。",
     popularity:3, trailhead:1, grade:{stamina:7, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.185）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【縦】聖岳・茶臼岳（聖沢登山口→畑薙大吊橋）", stats:"距離 約25.6km（片道）/ 標高差 累積登り約3,200m・下り約3,380m（聖沢登山口1,140m→前聖岳3,013m→茶臼岳2,604m→畑薙大吊橋960m）/ 合計コースタイム 約19時間54分（2泊3日が標準）", level:"上級", note:"聖岳から南岳・上河内岳を経て茶臼岳、畑薙大吊橋へ抜ける南部主稜線縦走。畑薙大吊橋バス停から畑薙第一ダムへの交通は東海フォレスト送迎バス（要予約・宿泊条件あり）や南アルプス登山線の運行状況を事前確認すること。",
     popularity:2, trailhead:1, grade:{stamina:8, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.186）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【縦】聖岳→赤石岳（聖光小屋・椹島）＜兎岳・大沢岳・小赤石岳往復＞", stats:"距離 約29.8km（片道）/ 標高差 累積登り約4,170m・下り約4,020m（聖光小屋970m→聖岳3,013m→兎岳・大沢岳・小赤石岳（往復）→赤石岳3,120m→椹島ロッジ1,120m）/ 合計コースタイム 約24時間12分（2〜3泊が標準）", level:"上級", note:"聖岳から南部主稜線を赤石岳まで縦走する健脚向けロングルート。聖光小屋起点だが2026年は西沢渡方面の通行止めにより実質入山不可（飯田市公式で要確認）。",
     popularity:2, trailhead:0, grade:{stamina:10, skill:"D", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.183）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪期。稜線は雪と岩が混在し一般登山シーズン外。",6:"梅雨期。融雪と大雨による林道・登山道の崩落が起きやすい時期。",7:"梅雨明け後にシーズン入り。聖光小屋・聖平小屋とも営業開始（7月中旬〜）。2026年は林道赤石線の便ヶ島〜西沢渡間が災害復旧工事のため通行止め中、必ず現地・自治体公式で最新状況を確認。",8:"盛夏。東海フォレスト送迎バス・南アルプス登山線とも運行中でアクセスしやすい時期だが午後の雷雨に注意。",9:"聖平小屋は9月22日宿泊分まで営業。中旬以降は小屋の閉鎖が進むため終了日を要確認。紅葉は下旬から始まる。",10:"聖光小屋は10月12日まで営業予定だが、静岡側の多くの小屋・送迎バスは9月で終了するため単独装備での計画が必要。初雪の可能性あり。"}
  }
},
{
  id:"tekari", name_ja:"光岳", name_en:"Mt. Tekari", region:"南アルプス南部", area:"南アルプス", prefecture:"長野県・静岡県",
  elevation:2591, hyakumeizan:true,
  coords:{lat:35.3382, lon:138.0838}, forecast_elevation:2550,
  grading:{
    ridgeline:2550,
    wind_caution:12, wind_danger:18,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"日本アルプス最南のハイマツ南限にあたる稜線で、11月には根雪となり5月まで残雪が残ることがある。易老岳〜光岳間や茶臼岳からの稜線は積雪期に道迷い・滑落の危険が高く、深南部ゆえ悪天候時のエスケープルートも乏しい。行動時間が長いコースが多く、疲労による低体温症にも注意。"
  },
  trailheads:[
    {
      name:"易老渡登山口（標高880m）",
      access:[
        {mode:"タクシー（予約制）", line:"易老渡線 乗合タクシー（信州遠山郷観光協会が取次・複数事業者運行）", from:"道の駅遠山郷",
         duration:"約1時間20分（芝沢ゲート通過は5:00〜16:00の間のみ）",
         weekday:"道の駅遠山郷発 例: 4:30／復路 易老渡駐車場発 例: 13:00（要事前予約、運賃はメーター制または時間制で事業者により異なり目安15,000〜20,000円/台）", weekend:"平日と同じ運行体制（要事前予約）",
         season:"2026年度（令和8年度）は7/1〜11/8の運行予定。道路状況により変更の可能性があるため運行事業者へ要確認", url:"https://tohyamago.com/archives/3681", sample:true},
        {mode:"車＋徒歩", line:"国道152号→下栗経由 市道南信濃142号線（芝沢ゲートまで）＋そこから徒歩", from:"飯田市街（国道152号）",
         duration:"芝沢ゲートまでは車、そこから易老渡までは徒歩約1時間30分",
         weekday:"—", weekend:"—",
         season:"芝沢ゲートより先は一般車両通行不可の年がほとんどで、大雨による崩落で歩行も通行止めになることがある（2026年6月にもゲート付近で土砂崩落が発生）。入山前に信州遠山郷公式サイトで最新の通行状況を要確認", url:"https://tohyamago.com/archives/1710", sample:true}
      ]
    },
    {
      name:"畑薙大吊橋登山口（標高960m）",
      access:[
        {mode:"バス", line:"南アルプス登山線（静鉄ジャストライン）", from:"JR静岡駅前",
         duration:"約3時間20分（畑薙臨時駐車場まで）。駐車場から畑薙大吊橋までは徒歩約20分",
         weekday:"静岡駅前発 例: 10:00（畑薙臨時駐車場13:20着）", weekend:"平日と同一ダイヤで運行（運行期間中は土日祝も毎日運行）",
         season:"2026年は7/16〜8/16のみの毎日運行（要事前予約、2026年6/12 13:00予約受付開始・乗車前日19:00締切）。運賃は片道大人5,000円", url:"https://www.justline.co.jp/news/20260611/22914/", sample:true},
        {mode:"車", line:"新東名高速道路 新静岡ICから県道27号ほか経由", from:"新東名高速道路 新静岡IC",
         duration:"約2時間30分",
         weekday:"—", weekend:"—",
         season:"夏期（例年7月中旬〜10月上旬）は畑薙第一ダムの約2km手前に夏期臨時駐車場が開設され、そこから先はマイカー規制。東海フォレスト送迎バスは椹島方面の宿泊者専用のため、光岳・茶臼岳方面は臨時駐車場から畑薙大吊橋まで徒歩となる", url:"https://www.t-forest.com/alpsinfo/access/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"光岳小屋（県営）", elevation:2520, open:"2026年は7/11(土)〜9/30(水)予定（正式な営業期間は例年6月頃確定）", reservation:"Web予約のみ（chillnn予約サイト、2026年は6/22(月)9:00受付開始）。支払いは現地にて現金のみ。複数日程の重複予約は避けるよう案内あり", url:"https://www.town.kawanehon.shizuoka.jp/soshiki/kankoshoko/tekarigoya/index.html", tel:"0547-58-7077"},
    {name:"茶臼小屋", elevation:2400, open:"2026年は7/11(土)〜9/23(水)", reservation:"事前予約制（井川観光協会 山小屋予約サイト）。小屋泊・テント泊（10張・1人2,000円）とも要予約。水場あり（無料）、食事の提供なし", url:"https://ikawa-kanko.com/", tel:""}
  ],
  routes:[
    {name:"易老渡 往復（光岳小屋泊）", stats:"距離 往復約16.4km / 標高差 約1,711m（易老渡880m→光岳2,591m）/ 公表コースタイム合計 約13時間48分（長野県 山のグレーディング公表値）", level:"上級", note:"南アルプス深南部への代表的な入門ルート。易老岳までの急登に続き、光岳小屋までの長い稜線歩きが続く。日帰りは現実的でなく光岳小屋またはテント泊で1泊が基本。易老岳から先は水場が乏しく、行動中の給水計画が重要。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.181）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"畑薙大吊橋 茶臼小屋・光岳小屋 経由 往復（2泊3日目安）", stats:"距離 往復約29.3km / 標高差 約1,644m（畑薙大吊橋960m→茶臼岳2,604m、光岳2,591mへ縦走）/ 公表コースタイム合計 約10時間30分（静岡 山のグレーディング公表値。実際の行程は茶臼小屋・光岳小屋で最低1泊、多くは2泊3日が目安）", level:"上級", note:"ウソッコ沢を渡って茶臼小屋へ上がり、亀甲山・易老岳を越えて光岳へ至る静岡側の縦走路。行程が長く水場・幕営適地も限られるため、公表コースタイムだけで日程を詰めず余裕を持った計画が必須。東海フォレスト送迎バス（椹島方面）は本ルートの対象外。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"D", official:true, src:"静岡 山のグレーディング（日本百名山ルート一覧表 No.182）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪期。登山道にはまだ雪や凍結が残り、光岳小屋・茶臼小屋とも営業前で一般向きではない。",6:"梅雨。小屋営業前で日程を組みにくく、ウソッコ沢など沢筋は増水時の渡渉が危険。",7:"中旬から光岳小屋・茶臼小屋が営業開始（例年7/11頃）。梅雨明け後が本格的なシーズン入り。",8:"盛夏。光石周辺やハイマツ帯の展望が良い。稜線でも蒸し暑い日があり熱中症・水分管理に注意。",9:"上旬までが小屋営業期間の中心（茶臼小屋は9/23、光岳小屋は9/30頃まで）。中旬以降は台風接近に注意。",10:"小屋閉鎖後。初雪が早く、日帰り装備での入山は避ける。"}
  }
},
{
  id:"hakusan", name_ja:"白山（御前峰）", name_en:"Mt. Hakusan (Gozengamine)", region:"両白山地", area:"北陸・近畿", prefecture:"石川県・岐阜県",
  elevation:2702, hyakumeizan:true,
  coords:{lat:36.1548, lon:136.7715}, forecast_elevation:2700,
  grading:{
    ridgeline:2450,
    wind_caution:10, wind_danger:16,
    precip_caution:4, precip_danger:12,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯。砂防新道上部や南竜〜室堂間には水屋尻雪渓・カンクラ雪渓・万才谷雪渓など複数の雪渓が7月上旬まで残り、視界不良時はルートを見失いやすい。根雪は例年11月には積もり始める。"
  },
  trailheads:[
    {
      name:"別当出合（標高1,260m）",
      access:[
        {mode:"バス", line:"白山登山バス 金沢便〈急行〉（北陸鉄道）＋市ノ瀬〜別当出合シャトルバス", from:"JR金沢駅西口",
         duration:"市ノ瀬まで約2時間10分＋シャトルバス約20分",
         weekday:"金沢駅西口発 例: 6:00 / 6:15（運行日注意）→市ノ瀬着 例: 8:12 / 8:27", weekend:"同左（運行日は白山登山バス運行日カレンダーによる）",
         season:"2026年は7/4〜10/12の設定運行日のみ運行（運行日カレンダーは北陸鉄道公式で要確認）", url:"https://www.hokutetsu.co.jp/", sample:true},
        {mode:"バス", line:"白山登山バス 松任便（㈱マップ）", from:"IR松任駅南口",
         duration:"市ノ瀬まで約1時間10分（途中、白峰・菜さい経由）",
         weekday:"運行日・発着時刻は㈱マップ公式と石川県の運行カレンダーで要確認（早朝発・午後下山便の設定）", weekend:"同左（運行日注意）",
         season:"2026年運行日カレンダーによる（7〜10月）", url:"https://map.ishikawa.jp/", sample:true},
        {mode:"シャトルバス", line:"市ノ瀬〜別当出合シャトルバス（石川県白山登山交通対策協議会）", from:"市ノ瀬",
         duration:"約20分",
         weekday:"規制日は早朝から午後まで約20〜30分間隔でピストン運行（上り・下りの運行時間帯は年度の運行カレンダーで要確認）", weekend:"同左（規制日・規制翌日でダイヤが変わるため要確認）",
         season:"2026年マイカー規制日（7/4〜10/12の指定日、詳細は運行カレンダー）のみ運行。運賃は大人片道1,000円・往復2,000円", url:"https://www.pref.ishikawa.lg.jp/hakusan/tozaninf/peak2.html", sample:true},
        {mode:"マイカー", line:"中部縦貫自動車道 白山IC 経由 国道157号・県道白山公園線", from:"白山IC",
         duration:"市ノ瀬まで約40分（別当出合へはマイカー規制日以外のみ乗入れ可）",
         weekday:"マイカー規制日は市ノ瀬〜別当出合間が終日通行止め・駐車禁止（11月30日まで）のためシャトルバスに乗換必須", weekend:"同左",
         season:"通年（積雪期は県道白山公園線の白峰以奥が冬期閉鎖）", url:"https://www.pref.ishikawa.lg.jp/hakusan/tozaninf/peak2.html", sample:true}
      ]
    },
    {
      name:"大白川温泉登山口（平瀬道・標高1,256m）※2026年は登山口未開通",
      access:[
        {mode:"マイカー", line:"県道451号白山公園線（白川村大白川〜平瀬、13.2km）経由", from:"道の駅 飛騨白山（国道156号）",
         duration:"平常時は登山口まで約30〜40分",
         weekday:"2026年は前年の大雪による道路施設復旧工事のため全線が終日通行止め。解除は令和8年10月1日（木）予定", weekend:"同左（歩行者・自転車も通行不可）",
         season:"例年6月上旬〜10月下旬が通行可能期間だが、2026年シーズンはほぼ全期間通行止め", url:"https://www.pref.gifu.lg.jp/uploaded/attachment/500867.pdf", sample:true},
        {mode:"バス", line:"濃飛バス 平瀬温泉線（夏季運行）", from:"JR高山駅 / 白川郷（合掌造り集落）",
         duration:"高山駅から平瀬温泉バス停まで約78分・白川郷から約20分",
         weekday:"運行日・時刻は濃飛バス公式サイトで要確認（登山口へは平瀬温泉バス停からさらに車移動が必要）", weekend:"同左",
         season:"夏季運行。2026年は登山口手前の県道が10月1日まで通行止めのため、この区間の利用は事実上不可", url:"https://www.nouhibus.co.jp/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"白山室堂（白山室堂ビジターセンター）", elevation:2450, open:"春山期 5/1〜6/30（素泊まりのみ）・夏山期 7/1〜8/31（食事付）・秋山期 9/1〜10/15予定（食事付）", reservation:"電話予約のみ（白山室堂予約センター、2026年は4/1 9:00より受付開始）", url:"https://hakusan-guide.or.jp/hakusan_stay/murodou/", tel:"076-273-1001"},
    {name:"白山雷鳥荘", elevation:2450, open:"5月1日〜10月15日", reservation:"電話予約のみ（白山室堂予約センターに集約）", url:"https://hakusan-guide.or.jp/hakusan_stay/hakusan_raicyousou/", tel:"076-273-1001"},
    {name:"南竜山荘", elevation:2080, open:"7月1日〜10月15日（期間中無休）", reservation:"電話予約（南竜山荘予約センター、9:00〜17:00・13:00〜14:00を除く）", url:"https://city-hakusan.com/hakusan/naryusanso/", tel:"076-259-2022"},
    {name:"甚之助避難小屋（無人・宿泊不可）", elevation:1970, open:"通年開放", reservation:"—（緊急時利用。夏秋は水場あり）", url:"", tel:""}
  ],
  routes:[
    {name:"砂防新道 別当出合〜白山室堂〜御前峰 往復", stats:"距離 約12.0km（別当出合〜白山室堂間6.0km×往復）/ 標高差 約1,190m（御前峰山頂へはさらに+約250m）/ 登り4:00・下り2:30（別当出合〜白山室堂、白山観光協会公表の標準コースタイム）", level:"中級", note:"最もポピュラーなルート。登り専用「付け替え道」・下り専用「旧道」に分離運用（下りは滑りやすい旧道区間に注意）。中飯場・甚之助避難小屋を経由。白山は活火山（現在の噴火警戒レベルは気象庁 https://www.data.jma.go.jp/vois/data/report/activity_info/313.html で要確認）。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false}},
    {name:"観光新道 別当出合〜白山室堂〜御前峰（砂防新道との周回下山に利用）", stats:"距離 約12.2km（別当出合〜白山室堂間6.1km×往復）/ 標高差 約1,190m / 登り4:50・下り3:00（白山観光協会公表の標準コースタイム）", level:"中級", note:"お花畑と展望に優れるが砂防新道よりやや健脚向け。別当出合〜別当坂分岐は急坂のため悪天候時は増水した沢の通過に注意。改良工事等で季節的に通行止めになる場合あり、事前に石川県公式サイトで確認を。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false}},
    {name:"平瀬道 大白川温泉〜白山室堂〜御前峰 往復", stats:"距離 約14.2km（往復）/ 標高差 約1,446m（大白川温泉1,256m→御前峰2,702m）/ 合計コースタイム 約8:12（岐阜県グレーディング公表値。参考：白山観光協会公表の大白川〜白山室堂間は6.9km・登り4:10下り2:50）", level:"中級", note:"※2026年は登山口へのアクセス道（県道白山公園線）が10月1日まで終日全面通行止めのため事実上登山不可。開通後も紅葉と初雪が重なる短い期間のみの利用となる見込み。ブナ・ミズナラ・ダケカンバの美林で知られる。大倉山避難小屋は改修状況を事前確認のこと。",
     popularity:1, trailhead:1, grade:{stamina:4, skill:"C", official:true, src:"岐阜県 山のグレーディング（日本百名山ルート一覧表 No.160）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"残雪期。白山室堂は素泊まりのみの春山期（5/1〜6/30）。登山道はまだ雪に覆われ、アイゼン・ピッケルなど本格的な雪山装備と経験が必要。",
      6:"梅雨入り。雪解けが進むが上部には雪渓が残る。山開きは7月1日。",
      7:"7月1日 山開き。マイカー規制とシャトルバス運行が始まる（2026年は7/4〜）。高山植物が咲き始めるが梅雨明けまでは大雨に注意。",
      8:"夏山最盛期。お盆期間は市ノ瀬駐車場・シャトルバスとも大混雑。午後は雷雨が発生しやすく早めの下山を。",
      9:"花の最盛期は過ぎるが涼しく歩きやすい好期。台風接近時は登山を控える。",
      10:"紅葉が見頃（例年10月上旬）。10月12日でマイカー規制終了、10月15日で白山室堂・南竜山荘は閉山。中旬以降は初雪の可能性があり装備に注意。2026年は平瀬道の県道が10月1日に開通予定だが、閉山間際のごく短い期間の利用となる。",
      11:"初雪と積雪で通常登山は困難。県道白山公園線など主要道路も順次冬期閉鎖。"
    }
  }
},
{
  id:"arashima", name_ja:"荒島岳", name_en:"Mt. Arashima", region:"両白山地", area:"北陸・近畿", prefecture:"福井県",
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
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false}},
    {name:"中出コース 往復", stats:"距離 約9.5km / 標高差 約870m / 登り3:40・下り2:40", level:"中級", note:"深田久弥が登ったとされるコース。小荒島岳（標高1,186m）を経由し、白山や大野盆地の展望が良い。勝原コースより登山者は少なく静か。駐車場・トイレ・水場あり。",
     popularity:2, trailhead:1, grade:{stamina:5, skill:"B", official:false}},
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
},
{
  id:"ibuki", name_ja:"伊吹山", name_en:"Mt. Ibuki", region:"伊吹山地", area:"北陸・近畿", prefecture:"滋賀県",
  elevation:1377, hyakumeizan:true,
  coords:{lat:35.4181, lon:136.4239}, forecast_elevation:1350,
  grading:{
    ridgeline:1250,
    wind_caution:12, wind_danger:20,
    precip_caution:4, precip_danger:12,
    snow_months:[11,12,1,2,3,4],
    snow_note:"1927年に世界最深積雪11.82mを記録した豪雪地。伊吹山ドライブウェイは積雪のため12月〜3月は閉鎖され、この時期の山頂アクセス手段はない。営業期間の4月・11月端境期は山頂付近に残雪・凍結が残ることがある。"
  },
  trailheads:[
    {
      name:"伊吹山ドライブウェイ 山頂駐車場（標高1,260m）",
      access:[
        {mode:"自動車", line:"伊吹山ドライブウェイ（有料道路・日本自動車道株式会社）", from:"名神高速道路 関ケ原IC（岐阜県関ケ原町側入口）",
         duration:"料金所から山頂駐車場まで約30〜40分（全長17km）",
         weekday:"営業時間内随時通行可（最終入場は閉門2時間前）", weekend:"同左（夏季一部土日祝は夜間特別営業あり）",
         season:"4月第3土曜〜11月23日ごろ（2026年は4/18〜11/23予定）・12月〜3月は積雪のため閉鎖", url:"https://www.ibukiyama-driveway.jp/", sample:true},
        {mode:"バス", line:"伊吹山登山バス（近江鉄道グループ）", from:"JR米原駅 ⇄ スカイテラス伊吹山（山頂駐車場）",
         duration:"約60分",
         weekday:"往路 米原駅発 例: 8:30（復路時刻・1日乗車券4,000円等の詳細は公式ページで要確認）", weekend:"同左",
         season:"2026年は7/18〜8/31毎日運行・9月は土日祝のみ運行。表登山道の全面通行禁止が続く現在、車がない場合の唯一の公共交通手段", url:"https://www.ohmitetudo.co.jp/bus/icoico/event/ibukiyamatozanbus2026/", sample:true}
      ]
    },
    {
      name:"伊吹登山口（上野登山口・標高約220m）表登山道 ※2026年7月現在 通行禁止",
      access:[
        {mode:"バス", line:"長岡登山口線（近江鉄道グループ 湖国バス）", from:"JR近江長岡駅",
         duration:"約16分",
         weekday:"近江長岡駅発 便あり（具体的な発車時刻は要確認）", weekend:"土曜・日曜・祝日は運休（伊吹山登山道の入山禁止に伴う措置、2025年4月29日以降）",
         season:"バス自体は平日中心に運行中。ただし登山道は2023年7月豪雨による崩落（2024年7月の土石流でさらに拡大）で表登山道・弥高登山道・上平寺登山道・バリエーションルートとも土地所有者により全面通行禁止、再開時期は未定（冬山登山も対象外）", url:"https://www.ohmitetudo.co.jp/bus/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"対山館", elevation:1370, open:"4月中旬〜11月中旬・土日祝を中心に天候により営業（夏季がメイン、2026年新規開場予定）", reservation:"メール予約（件名に「宿泊」と明記）", url:"https://taizankan.her.jp/", tel:"090-7117-6283"},
    {name:"松仙館", elevation:1370, open:"4月中旬〜11月中旬・土日祝を中心に天候により営業（夏季がメイン）", reservation:"公式サイトのWeb予約フォームから", url:"https://www.shousenkan.com/", tel:"080-1493-8536"},
    {name:"えびすや（売店・食事、宿泊は要予約）", elevation:1370, open:"4月中旬〜11月中旬・土日祝を中心に天候により営業（夏季がメイン）", reservation:"電話予約", url:"", tel:"080-2510-5792"},
    {name:"宮崎屋（売店・食事のみ）", elevation:1370, open:"4月中旬〜11月中旬・土日祝を中心に天候により営業（夏季がメイン）", reservation:"—", url:"", tel:"0749-58-0172"}
  ],
  routes:[
    {name:"西登山道 往復（山頂駐車場発）", stats:"距離 約2km / 標高差 約120m / 登り0:40・下り0:30", level:"初級", note:"伊吹山ドライブウェイ山頂駐車場（スカイテラス伊吹山）から山頂を結ぶ最も歩きやすいルート。砂利道主体の緩やかな道で高齢者・子供連れにも向く。麓からの登山道（表登山道等）は現在全面通行禁止のため、2026年7月時点で山頂へはこのドライブウェイ経由のみ。協力金・入山料の設定は確認されていない（ドライブウェイ通行料金のみ）。",
     popularity:3, trailhead:0, grade:{stamina:1, skill:"A", official:false},
     segments:[{from:"山頂駐車場", to:"伊吹山山頂", up:"0:40", down:"0:30"}], sample:true},
    {name:"西登山道→山頂→中央登山道 周回", stats:"距離 約1.5km / 標高差 約120m / 登り0:40・下り0:20", level:"初級", note:"下りに使う中央登山道は距離最短だが急勾配・階段が多く滑りやすい。お花畑を効率よく巡れる周回コース。",
     popularity:2, trailhead:0, grade:{stamina:1, skill:"A", official:false},
     segments:[{from:"山頂駐車場（西登山道）", to:"伊吹山山頂", up:"0:40"}, {from:"伊吹山山頂", to:"山頂駐車場（中央登山道）", down:"0:20"}], sample:true},
    {name:"西登山道→山頂→東登山道 周回（花畑周遊）", stats:"距離 約2.5km / 標高差 約120m / 登り0:40・下り1:00", level:"初級〜中級", note:"東登山道は下り専用（登り不可）。大きな岩の露出や石がゴロゴロした歩きづらい区間があり、軽装は避け登山靴推奨。周回で最も花の種類を楽しめる。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:false},
     segments:[{from:"山頂駐車場（西登山道）", to:"伊吹山山頂", up:"0:40"}, {from:"伊吹山山頂", to:"山頂駐車場（東登山道経由）", down:"1:00"}], sample:true}
  ],
  seasonality:{
    best:[5,6,7,8,9,10],
    notes:{4:"ドライブウェイ開通（2026年は4/18予定）。開通直後は山頂付近に残雪・強風の可能性あり。",5:"春の花が咲き始める。残雪はほぼ消えるが朝晩は冷え込む。",6:"梅雨入り。山頂は年間約300日霧が発生するとされ視界不良になりやすい。",7:"お花畑が本格化。真夏日は熱中症対策必須（登山道はほぼ日陰なし）。",8:"お花畑が最盛期（シモツケソウ・サラシナショウマ等）。夏季は一部週末に夜間特別営業あり。",9:"残暑と台風シーズン。遮るもののない草原状の山頂は強風時に特に危険。",10:"紅葉と秋の花が楽しめる。下旬は冷え込みが強まる。",11:"11月23日ごろ閉鎖（2026年は11/23予定）。積雪前の最終アクセス期。"}
  }
},
{
  id:"odaigahara", name_ja:"大台ヶ原山", name_en:"Mt. Odaigahara", region:"台高山脈", area:"北陸・近畿", prefecture:"奈良県・三重県",
  elevation:1695, hyakumeizan:true,
  coords:{lat:34.1850, lon:136.1091}, forecast_elevation:1650,
  grading:{
    ridgeline:1650,
    wind_caution:10, wind_danger:16,
    precip_caution:5, precip_danger:15,
    snow_months:[4,11],
    snow_note:"年間降水量4,000mmを超える日本有数の多雨地帯のため、通常より高めの雨量閾値に設定。大台ヶ原ドライブウェイ自体が例年12月上旬〜4月下旬は冬期通行止めで積雪期は入山不可。開通直後の4月末や初雪の11月は路面凍結・残雪に注意。"
  },
  trailheads:[
    {
      name:"大台ヶ原ビジターセンター駐車場（標高約1,570m）",
      access:[
        {mode:"バス", line:"大台ヶ原直行バス そらかぜ（大台ヶ原線・完全予約制／奈良交通）", from:"イオンモール橿原（大和八木駅南口・橿原神宮前駅東口 経由）",
         duration:"約3時間25分（イオンモール橿原から）",
         weekday:"イオンモール橿原発 例: 7:50（大和八木駅南口 例: 8:15／橿原神宮前駅東口 例: 8:30、大台ヶ原着 例: 11:16）復路 大台ヶ原発 例: 16:00", weekend:"毎日同一ダイヤで運行（土日祝も同じ）",
         season:"2026年4月25日（土）〜11月23日（月・祝）の毎日運行（乗車1か月前9:00〜前日16:00までの事前予約制。天候・道路状況により運休の場合あり）", url:"https://www.narakotsu.co.jp/temporary/spring_oodaigahara/", sample:true},
        {mode:"マイカー", line:"大台ヶ原ドライブウェイ（県道大台ヶ原公園川上線・県道40号）経由", from:"国道169号 上北山村中心部",
         duration:"約40分",
         weekday:"—", weekend:"—",
         season:"冬期通行止め（2025年度は12/1 15:00〜2026年4/20 15:00）を除き通行可。天候・道路状況により変更あり", url:"https://www.pref.nara.lg.jp/n094/2977.html", sample:true}
      ]
    },
    {
      name:"大杉谷登山口（標高約280m）",
      access:[
        {mode:"バス", line:"大杉峡谷登山バス（エス・パール交通・完全予約制）", from:"JR紀勢本線 三瀬谷駅（道の駅奥伊勢おおだい発）",
         duration:"約1時間30分",
         weekday:"運行日は要問合せ（最少催行人数あり）", weekend:"通常期は道の駅奥伊勢おおだい発 例: 10:30（登山口着 例: 12:00）だがGW等の期により発着時刻が異なる。※3日前までの完全予約制",
         season:"2026年度は3期制で運行: 第一期4/25〜5/30・第二期6/6〜9/12・第三期9/19〜11/21（各期で運行曜日・時刻が異なる。公式サイトで要確認）", url:"https://spearl-kotsu.com/mountain-climbining-bus/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"心・湯治館（大台ヶ原山の家）", elevation:1570, open:"4月下旬〜11月下旬（冬季休業。2026年の詳細営業期間は要問合せ）", reservation:"電話・FAXによる完全予約制", url:"https://www.cocoro-toujikan.com/", tel:"07468-2-0120"},
    {name:"桃の木山の家（大杉谷）", elevation:475, open:"大杉谷登山道の開山期間中（例年4月下旬〜11月下旬・2026年の詳細は公式サイトで要確認）", reservation:"完全予約制（電話）", url:"https://www.momonokigoya.jp/", tel:"0597-32-2052"}
  ],
  routes:[
    {name:"東大台周回（日出ヶ岳・正木ヶ原・大蛇嵓・シオカラ谷）", stats:"距離 約9.3km / 標高差 約220m / 周回4:00〜4:30", level:"初級", note:"事前手続き不要。ほぼ全区間が整備された木道・遊歩道だが、大蛇嵓は断崖絶壁のため強風・雨天・霧の日は滑落に厳重注意。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"ビジターセンター駐車場", to:"日出ヶ岳", up:"0:40"},
       {from:"日出ヶ岳", to:"正木ヶ原", up:"0:40"},
       {from:"正木ヶ原", to:"大蛇嵓", up:"0:50"},
       {from:"大蛇嵓", to:"シオカラ谷吊り橋", up:"0:50"},
       {from:"シオカラ谷吊り橋", to:"ビジターセンター駐車場", up:"0:40"}
     ], sample:true},
    {name:"西大台周回（ブナ原生林・シャクナゲ坂、利用調整地区）", stats:"距離 約9km / 標高差 約200m / 周回4:30〜5:00", level:"中級", note:"環境省 近畿地方環境事務所が管理する西大台利用調整地区。入山には事前予約・立入認定証の取得と、ビジターセンターでの事前レクチャー受講が必須（当日申込不可・人数制限あり）。ブナ・ミズナラの原生林を巡る。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:false}},
    {name:"大杉谷縦走（大杉谷登山口→大蛇嵓→日出ヶ岳）", stats:"1泊2日 / 距離 約16.2km（大杉谷登山口起点）", level:"上級", note:"7つの滝と11本の吊り橋を巡る日本三大渓谷・大杉谷を遡り、東大台へ抜ける健脚向けロングコース。桃の木山の家での1泊が一般的。登山バスは完全予約制・週末中心運行のため事前手配必須。増水時・台風後は通行止めになることがあるため大杉谷登山センターで最新状況を要確認。",
     popularity:2, trailhead:1, grade:{stamina:8, skill:"C", official:false}}
  ],
  seasonality:{
    best:[5,9,10],
    notes:{4:"下旬にドライブウェイが開通（例年4/20頃）。開通直後は残雪や霧氷が残ることがある。",5:"新緑とシャクナゲの季節。西大台の事前レクチャーも本格化。",6:"梅雨入り。日本有数の多雨地帯のため集中豪雨時は入山を控える。",7:"梅雨明け後は避暑地として人気。台風接近時は増水・強風に注意。",8:"標高1,600m台の涼しさを求める避暑ハイクの定番。夕立・雷に注意。",9:"台風シーズン。増水・強風時は大蛇嵓など断崖部が特に危険。",10:"紅葉が見頃（例年10月上旬〜中旬）。マイカー・バスとも混雑。",11:"紅葉終盤〜初冬。12月上旬からドライブウェイが冬期通行止めとなり以降は入山不可。"}
  }
},
{
  id:"omine", name_ja:"大峰山（八経ヶ岳）", name_en:"Mt. Omine (Hakkyogatake)", region:"大峰山脈", area:"北陸・近畿", prefecture:"奈良県",
  elevation:1915, hyakumeizan:true,
  coords:{lat:34.1736, lon:135.9072}, forecast_elevation:1900,
  grading:{
    ridgeline:1800,
    wind_caution:10, wind_danger:16,
    precip_caution:4, precip_danger:12,
    snow_months:[12,1,2,3,4],
    snow_note:"紀伊半島有数の多雨地帯に位置し、積雪期は湿った重い雪になりやすい。アクセス路の国道309号（天川村北角〜上北山村西原）が例年12月上旬〜4月上旬に冬期通行止めとなり、行者還トンネル西口へのマイカーアクセス自体が絶たれるため事実上の閉山期となる。"
  },
  trailheads:[{
    name:"行者還トンネル西口駐車場（標高約1,100m）",
    access:[
      {mode:"バス", line:"下市口駅〜天川川合線（奈良交通）", from:"近鉄吉野線 下市口駅",
       duration:"約54分（天川川合まで）",
       weekday:"下市口駅発 1日数便（概ね1〜2時間に1本。時刻は奈良交通公式の時刻表検索または天川村掲載の時刻表PDFで要確認）", weekend:"同左（土日祝の増便あり・要確認）",
       season:"通年運行（積雪・路面凍結時は運休・遅延の場合あり・要確認）", url:"https://www.narakotsu.co.jp/", sample:true},
      {mode:"タクシー", line:"千石タクシー（下市町）ほか地元タクシー", from:"天川川合バス停 または 近鉄下市口駅",
       duration:"下市口駅から約1時間10分（運賃は公式料金表に行者還トンネル西口の掲載なし・要事前見積り、要予約）",
       weekday:"要予約・営業時間目安 7時頃〜20時頃", weekend:"要予約・営業時間目安 7時頃〜20時頃",
       season:"通年（国道309号が冬期通行止めの間は行者還トンネル西口まで運行不可）", url:"https://www.sengokutaxi.jp/charge", sample:true},
      {mode:"車", line:"国道309号（マイカー）", from:"天川村中心部（天川川合）",
       duration:"約40分",
       weekday:"—", weekend:"—",
       season:"駐車場は有料（普通車1,000円/日）。国道309号は狭隘区間・白倉トンネル（高さ2.6m制限）あり、天川村北角〜上北山村西原間は例年12月上旬〜4月上旬冬期通行止め（令和6年度実績: 2024年12月3日15時〜2025年4月3日15時。年度の正式日時は奈良県・天川村の発表で要確認）。", url:"https://www.vill.tenkawa.nara.jp/", sample:true}
    ]
  }],
  huts:[
    {name:"弥山小屋", elevation:1870, open:"4月下旬〜11月中旬（要予約・管理人常駐は予約日のみ）", reservation:"電話予約制", url:"https://www.vill.tenkawa.nara.jp/tourism/news/6087/", tel:"090-2223-1332"}
  ],
  routes:[
    {name:"行者還トンネル西口→奥駈道出合→弥山→八経ヶ岳 往復", stats:"距離 約9km（往復）/ 標高差 約900m / 登り3:35・下り2:50", level:"中級", note:"近畿最高峰への最も一般的なルート。世界遺産・大峯奥駈道の一部。八経ヶ岳〜弥山間の鞍部にはオオヤマレンゲ保護柵があり、扉は必ず閉めること。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"行者還トンネル西口", to:"奥駈道出合", up:"1:00", down:"0:45"},
       {from:"奥駈道出合", to:"聖宝ノ宿跡", up:"1:10", down:"1:00"},
       {from:"聖宝ノ宿跡", to:"弥山", up:"0:50", down:"0:35"},
       {from:"弥山", to:"八経ヶ岳山頂", up:"0:35", down:"0:30"}
     ], sample:true},
    {name:"奥駈道 縦走（八経ヶ岳→明星ヶ岳分岐→高崎横手→栃尾辻→天川川合）", stats:"距離 約13km（八経ヶ岳から天川川合まで）/ 下り主体・行動約4:20（八経ヶ岳から）", level:"中級〜上級", note:"弥山小屋泊または日帰り強行のいずれか。下山後の天川川合から下市口駅方面のバス時刻を事前に確認しておくこと。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"B", official:false}},
    {name:"弥山川遡行コース（熊渡起点）", stats:"距離・時間とも要事前確認（沢沿いの上級ルート）", level:"上級", note:"天川村公式サイトが「手足を使って岩をよじ登る場所が多く、遭難や滑落が多い」「初心者はご遠慮ください」と明記する健脚・経験者向けルート。国道309号沿いの熊渡（熊谷）が起点。",
     popularity:1, trailhead:null, grade:{stamina:8, skill:"D", official:false}}
  ],
  seasonality:{
    best:[5,6,7,9,10],
    notes:{
      4:"残雪が残ることがある。国道309号の冬期通行止めは例年4月上旬解除だが年による。弥山小屋の営業開始は4月下旬から。",
      5:"新緑と残雪の境目。ゴールデンウィークは駐車場・弥山小屋とも混雑しやすい。",
      6:"梅雨入り。奥駈道の岩場・木道は雨で滑りやすくなる。",
      7:"オオヤマレンゲが見頃（例年7月上旬〜中旬）。保護柵の扉は必ず閉めること。梅雨明け前後の大雨に注意。",
      8:"盛夏。標高1,900m級で稜線は比較的涼しいが、台風接近時は行者還トンネル周辺が通行止めになりやすい。",
      9:"台風・秋雨前線シーズン。大雨後は国道309号や登山道の土砂崩れ・通行止めが起きやすく事前確認が必須。",
      10:"紅葉が奥駈道全体に広がる好シーズン。",
      11:"紅葉終盤〜初雪。弥山小屋は中旬に営業終了。",
      12:"積雪・凍結期。国道309号の冬期通行止めが例年12月上旬から始まり、行者還トンネル西口への車でのアクセスが絶たれる。",
      1:"厳冬期。積雪・凍結でアクセス路自体が通行止め。入山するなら本格的な雪山装備と経験が必須。",
      2:"厳冬期。積雪最深期。国道309号は通行止め継続中。",
      3:"残雪期。国道309号の通行止めは例年4月上旬まで続く。"
    }
  }
},
{
  id:"daisen", name_ja:"大山（伯耆大山）", name_en:"Mt. Daisen (Hoki-Daisen)", region:"中国山地・大山", area:"中国・四国", prefecture:"鳥取県",
  elevation:1729, hyakumeizan:true,
  coords:{lat:35.3712, lon:133.5432}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"日本海側気候の豪雪の山。冬は数mの積雪があり大山周辺はスキー場が並ぶ。夏山登山道の上部は4月頃まで残雪が残る年があり、11月中旬以降は根雪になりやすい。"
  },
  trailheads:[
    {
      name:"博労座駐車場・南光河原駐車場（標高約770m、夏山登山道口）",
      access:[
        {mode:"バス", line:"本宮・大山線（観光道路経由、日本交通）", from:"JR米子駅",
         duration:"約50分",
         weekday:"米子駅発 例: 7:20 / 9:30 / 14:00 / 15:20 / 16:50 / 18:10", weekend:"米子駅発 例: 9:30 / 14:00 / 15:20 / 16:50 / 18:10（早朝7:20便は平日のみ運行の可能性、要確認）",
         season:"通年運行（積雪時は遅延・迂回の場合あり）", url:"https://www.nihonkotsu.jp/bus_local/yonago/index.html", sample:true},
        {mode:"車", line:"米子自動車道 溝口IC・山陰道 米子東ICから県道経由", from:"溝口IC／米子東IC",
         duration:"約20〜25分（約10〜12km）", weekday:"随時", weekend:"随時",
         season:"通年（博労座駐車場600台・年中無休。冬季は積雪・チェーン規制に注意）", url:"https://tourismdaisen.com/about_daisen/access/", sample:true}
      ]
    },
    {
      name:"桝水高原 天空リフト山麓駅（標高約760m、ユートピアコース登山口）",
      access:[
        {mode:"リフト", line:"天空リフト（大山ますみず高原リフト・スノーパーク）", from:"桝水高原リフト山麓駅",
         duration:"片道約8分（山頂展望台 標高900mまで、標高差140m）", weekday:"9:00〜17:00の間運行", weekend:"同左",
         season:"4月〜11月中旬（グリーンシーズン営業。2026年の正確な運行開始・終了日は要確認）", url:"https://www.masumizu.net/lift.html", sample:true},
        {mode:"車", line:"米子自動車道 溝口ICから県道45号経由", from:"溝口IC",
         duration:"約20分", weekday:"随時", weekend:"随時",
         season:"通年（無料駐車場250台。冬季は積雪に注意）", url:"https://www.masumizu.net/access.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"大山頂上避難小屋（弥山山頂、無人・宿泊は緊急時のみ）", elevation:1700, open:"通年開放（トイレは例年4月下旬〜5月上旬に開設、10月下旬〜11月上旬に閉鎖）", reservation:"—（緊急時以外の宿泊利用は自粛要請）", url:"https://www.pref.tottori.lg.jp/175622.htm", tel:""},
    {name:"六合目避難小屋（無人・携帯トイレブースのみ）", elevation:1350, open:"通年開放", reservation:"—", url:"", tel:""},
    {name:"元谷避難小屋（無人・行者コース上）", elevation:872, open:"通年開放", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"夏山登山道～行者コース 周回（弥山）", stats:"距離 約8.2km（周回）/ 標高差 約930m / 登り3:00・下り2:30", level:"中級", note:"大山を代表する定番ルート。頂上は弥山（1,709m）まで — 剣ヶ峰（1,729m）への稜線は崩落のため縦走禁止（三角点周辺も立入禁止）。8合目から先は木道整備区間で、崩落を防ぐ「一木一石運動」（登山者が石を一つ山頂へ運ぶ）の対象区域。下山は元谷を経て大神山神社奥宮へ抜けるのが定番。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"博労座駐車場", to:"行者谷分かれ", up:"1:10"},
       {from:"行者谷分かれ", to:"六合目避難小屋", up:"0:20"},
       {from:"六合目避難小屋", to:"弥山山頂", up:"1:30"},
       {from:"弥山山頂", to:"六合目避難小屋", up:"0:55"},
       {from:"六合目避難小屋", to:"大神山神社奥宮（元谷経由）", up:"1:05"},
       {from:"大神山神社奥宮", to:"博労座駐車場", up:"0:30"}
     ], sample:true},
    {name:"ユートピアコース（桝水高原→象ヶ鼻）", stats:"距離 約4km（片道）/ 標高差 約650m / 登り2:30・下り2:00", level:"上級", note:"大山北壁と三鈷峰の大展望が魅力の中〜上級ルート。上・中宝珠越を経てユートピア避難小屋（水・トイレなし）、さらに象ヶ鼻まで。7月下旬〜8月上旬はお花畑が見頃。象ヶ鼻から先、剣ヶ峰方面への縦走路は崩落のため通行禁止。「砂すべり」は豪雨による崩落が進み危険なため利用は勧められていない。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{4:"残雪期。夏山登山道の上部にはまだ雪が残る年があり、軽アイゼンが有効な場合も。頂上避難小屋のトイレは下旬〜5月上旬に順次開設。",5:"例年ゴールデンウィーク明けに大山夏山開き。残雪の状況を要確認。",6:"梅雨入り。ブナの新緑が美しいが登山道は滑りやすい。",7:"本格的な夏山シーズン。下旬からユートピアコースのお花畑が見頃に。登山口では「大山入山協力金」への協力を呼びかけ中。",8:"盛夏。標高が低い区間は日中の暑さに注意。夕立・雷に警戒。お盆期間は麓のバスが土日祝ダイヤで運休便あり。",9:"台風シーズン。秋晴れの日を狙いたい。",10:"紅葉のベストシーズン（中旬〜下旬）。大山寺・南光河原周辺が特に有名で駐車場が混雑する。",11:"初冬。中旬以降は天空リフトが運休、積雪・凍結が始まる。"}
  }
},
{
  id:"tsurugisan", name_ja:"剣山", name_en:"Mt. Tsurugi", region:"四国山地", area:"中国・四国", prefecture:"徳島県",
  elevation:1955, hyakumeizan:true,
  coords:{lat:33.8536, lon:134.0943}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4],
    snow_note:"山頂一帯は木の少ない笹原の広い台地で風の通り道。かつて剣山スキー場があったほど積雪は多く、稜線は吹きだまりができやすい。冬期は国道438号・439号の見ノ越周辺が通行止めになり、リフト・登山バスとも運休する。"
  },
  trailheads:[{
    name:"見ノ越登山口（標高1,420m・剣山観光センター）",
    access:[
      {mode:"リフト", line:"剣山観光登山リフト（剣山観光登山リフト株式会社）", from:"見ノ越駅",
       duration:"約15分（標高差330m・延長830mを西島駅まで）",
       weekday:"見ノ越発 9:00〜16:30（毎時運行）", weekend:"同左。8月は8:00始発、10月の土日祝は7:00始発〜15:30終発",
       season:"2026年4月18日〜11月30日ごろ（毎日運行・強風時等は運休、正確な最終運行日は公式で要確認）", url:"https://turugirift.com/guide.html", sample:true},
      {mode:"バス", line:"剣山登山バス（つるぎ町・貞光〜一宇ルート）", from:"JR貞光駅／道の駅貞光ゆうゆう館",
       duration:"約1時間35分（貞光駅発9:24見ノ越着）",
       weekday:"運行日は貞光駅発 例: 7:50（見ノ越9:24着）", weekend:"運行日は貞光駅発 例: 13:20（見ノ越13:45着）",
       season:"2026年度は4月18日〜11月23日の土日祝運行（6月は運休）。GW（4/18〜5/6）・7/4〜8/31・10/1〜11/3は毎日運行。冬期（12〜3月）は運休", url:"https://www.town.tokushima-tsurugi.lg.jp/docs/2343466.html", sample:true},
      {mode:"バス", line:"三好市営バス／東祖谷スクールバス（京上〜久保〜剣山）", from:"久保（四国交通バスで阿波池田方面と接続）",
       duration:"約50分（久保発〜見ノ越着）",
       weekday:"運行日は久保発 例: 10:20（見ノ越11:10着）", weekend:"運行日は久保発 例: 13:18（見ノ越14:08着）",
       season:"2026年度は4月18日〜11月23日の土日祝運行。GW・7/4〜8/31・10/1〜11/3は毎日運行。11月24日〜3月末は運休", url:"https://www.miyoshi.i-tokushima.jp/docs/860375.html", sample:true},
      {mode:"マイカー", line:"国道438号（貞光方面）／国道439号（東祖谷・祖谷方面）", from:"徳島自動車道 美馬IC",
       duration:"美馬ICから約1時間",
       weekday:"見ノ越に町営駐車場あり（有料）", weekend:"繁忙期は満車の場合あり",
       season:"冬期（例年12月中旬〜3月末頃）は積雪・路面凍結のため見ノ越周辺の国道438号・439号で通行止め（一部夜間通行止め）が実施される。最新の道路状況は要確認", url:"https://turugirift.com/road/", sample:true}
    ]
  }],
  huts:[
    {name:"剣山頂上ヒュッテ", elevation:1955, open:"4月下旬〜11月23日（2026年）", reservation:"電話予約制", url:"https://tsurugisan-hutte.com/", tel:"080-2997-8482"},
    {name:"一の森ヒュッテ（美馬市営）", elevation:1879, open:"4月28日〜11月10日（2026年・宿泊受付は11月5日まで）", reservation:"要予約（利用日の3日前までに電話予約）。営業期間外は美馬市観光交流課(0883-52-5610)へ", url:"https://www.city.mima.lg.jp/kanko/map/list/4042.html", tel:"090-4851-3793"}
  ],
  routes:[
    {name:"見ノ越〜西島駅（リフト）〜大剣神社コース・尾根道コース 周回", stats:"距離 西島駅発着で往復約2.5km / 標高差 徒歩区間は約205m（見ノ越からの総標高差535mのうちリフトが330m分を担当）/ 登り1:00・下り0:50", level:"初級", note:"上りは大剣神社経由（上り60分）、下りは刀掛けの松を通る尾根道コース（上り40分の道を下る）が定番の周回。大剣神社の御神水で喉を潤せる。剣山本宮宝蔵石神社は山頂直下。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false},
     segments:[
       {from:"見ノ越駅", to:"西島駅", up:"0:15", down:"0:15"},
       {from:"西島駅", to:"剣山山頂（大剣神社経由）", up:"1:00"},
       {from:"剣山山頂", to:"西島駅（尾根道・刀掛けの松経由）", down:"0:35"}
     ], sample:true},
    {name:"剣山〜次郎笈 縦走（往復）", stats:"距離 往復約3km（吊り尾根） / 標高差 稜線を数十m上下 / 往復0:50", level:"初〜中級", note:"剣山と次郎笈を結ぶ笹原の吊り尾根歩き。展望抜群だが遮るものがなく強風時は要注意。次郎笈からさらに丸石・三嶺方面への縦走路が続く。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:false}},
    {name:"剣山〜一の森 往復（行場コース経由も可）", stats:"距離 往復約2km / 標高差 剣山〜一の森は約80m下って登り返し / 往復0:50（行場コース経由は刀掛けの松〜一の森が1:30）", level:"中級", note:"一の森ヒュッテが立つ静かなピーク。刀掛けの松から行場コースを回ると断崖沿いの巻き道で足元注意（キレンゲショウマ群生地、8月見頃）。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{
      4:"登山バスは4月18日頃から運行開始（要確認）。稜線に残雪が残ることがある。",
      5:"新緑とシャクナゲ。ゴールデンウィーク期間はリフト・登山バスとも毎日運行。",
      6:"梅雨。登山バスは月間運休（要確認）となるため、リフト直行かマイカーが確実。",
      7:"7月中旬に山開き（剣山本宮宝蔵石神社の神輿渡御）。キレンゲショウマは蕾が色づき始める。夏でも午後は雷雨に注意。",
      8:"四国有数の避暑地で家族連れも多い。リフトは8:00始発に繰り上がる。キレンゲショウマ群生地が見頃。午後の雷雨に警戒。",
      9:"台風シーズン。太平洋側の剣山系は雨量が多い地域なので接近時は無理をしない。次郎笈との縦走が気持ちよい季節。",
      10:"笹原の草紅葉と紅葉が見頃。土日祝はリフト・登山バスとも早朝から運行、混雑する。",
      11:"11月23日前後で山小屋・登山リフト・登山バスが順次営業終了（年により変動、要確認）。初冠雪の便りも。",
      12:"国道438号・439号の見ノ越周辺が冬期通行止めとなり、リフト・登山バスとも運休。積雪期は本格的な雪山装備が必要。"
    }
  }
},
{
  id:"ishizuchi", name_ja:"石鎚山", name_en:"Mt. Ishizuchi", region:"四国山地", area:"中国・四国", prefecture:"愛媛県",
  elevation:1982, hyakumeizan:true,
  coords:{lat:33.76777, lon:133.115086}, forecast_elevation:1950,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:2, precip_danger:8,
    snow_months:[12,1,2,3,4],
    snow_note:"山頂直下の鎖場（一〜三の鎖）は積雪期に着雪・凍結し滑落事故が多発。石鎚スカイラインは12月1日〜3月31日が冬期閉鎖のため土小屋側からは到達不可。積雪期は成就ルート（ロープウェイ）のみが現実的だが、アイゼン・ピッケル・冬山経験が必須。"
  },
  trailheads:[
    {
      name:"石鎚登山ロープウェイ 山頂成就駅（標高1,300m）",
      access:[
        {mode:"バス", line:"西之川線（せとうちバス）", from:"JR伊予西条駅（西条駅前）",
         duration:"約1時間21分",
         weekday:"西条駅前発 例: 7:10 / 10:00 / 13:10 / 15:50", weekend:"西条駅前発 例: 7:10 / 10:00 / 13:10 / 15:50（土日祝も同ダイヤ）",
         season:"通年運行（2025年10月1日改正ダイヤ）", url:"https://www.setouchibus.co.jp/rosen/pdf/time/13_nishinokawa.pdf", sample:true},
        {mode:"ロープウェイ", line:"石鎚登山ロープウェイ", from:"山麓下谷駅（標高455m）",
         duration:"約8分（通常毎時00・20・40分発、繁忙期は10分毎増発）",
         weekday:"季節により始発・終電が変動。例: 1/2〜4/28・11/4〜12月は8:40〜17:00、7〜8月平日は8:00〜18:00", weekend:"季節により変動。例: GW（4/29〜5/6）は7:40〜18:00、7/1〜7/10のお山開き期間は4:00〜18:00、7〜8月土日祝は7:40〜18:00",
         season:"通年運行。ただし春に定期点検の長期運休あり — 2026年（令和8年）は4/6〜4/24の約3週間全便運休（公式サイト）", url:"https://www.ishizuchi.com/rw-2", sample:true}
      ]
    },
    {
      name:"土小屋（石鎚スカイライン終点、標高1,492m）",
      access:[
        {mode:"マイカー", line:"石鎚スカイライン（愛媛県道石鎚公園線）", from:"国道33号 面河（関門ゲート）",
         duration:"約30分（関門〜土小屋 約17.1km）",
         weekday:"開門時間内のみ通行可。例: 9〜11月・4/1〜4/28は7:00〜18:00、7/11〜8/31は7:00〜20:00、7/1〜7/10（お山開き）は4:00〜20:00", weekend:"平日と同じ開閉門時間（曜日による違いなし）",
         season:"4月1日〜11月30日（12月1日〜3月31日は冬期閉鎖）。時間雨量40mm以上・連続雨量200mm以上等の異常気象時も通行止め。路線バスの定期運行なし。", url:"https://www.pref.ehime.jp/page/1209.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"石鎚神社頂上山荘", elevation:1974, open:"5月1日〜11月3日（予約受付期間は1月20日〜11月3日）", reservation:"電話予約優先（メールフォームは宿泊10日前まで）。宿泊費はチェックイン時に現金前払い。", url:"https://sanso.ishizuchisan.jp/reserve", tel:"080-1998-4591"},
    {name:"国民宿舎石鎚", elevation:1492, open:"4月初旬〜11月（冬季休館）", reservation:"電話予約のみ", url:"https://ishizuchikanko.com/ishizuchi_hotel/", tel:"0897-53-0005"},
    {name:"土小屋白石ロッジ", elevation:1492, open:"4月末〜11月末（石鎚スカイラインの積雪状況により変動）※スタッフ不足のため現在新規予約休止中・代替は国民宿舎石鎚を案内", reservation:"電話予約のみ（受付8:00〜18:00、現在新規受付停止）", url:"https://ishizuchikanko.com/shiraishilodge/", tel:"0897-53-0007"}
  ],
  routes:[
    {name:"成就ルート（八丁坂・夜明峠経由）往復", stats:"距離 約8.5km（往復）/ 標高差 約690m / 登り3:00・下り2:15", level:"中級", note:"試しの鎖・一の鎖・二の鎖・三の鎖があり、いずれも巻き道（迂回路）あり。弥山から真の最高点・天狗岳へは岩稜を往復約15〜30分、鎖場より難度が高いので無理をしない。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.191）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"山頂成就駅", to:"成就社", up:"0:25", down:"0:20"},
       {from:"成就社", to:"夜明峠", up:"1:15", down:"0:55"},
       {from:"夜明峠", to:"弥山山頂", up:"1:20", down:"1:00"}
     ], sample:true},
    {name:"土小屋ルート往復", stats:"距離 約9.2km（往復）/ 標高差 約480m / 登り2:10・下り1:38", level:"初級〜中級", note:"岩黒山・筒上山を望む稜線歩きが気持ちよい定番コース。山頂直下で成就ルートと合流し三の鎖・迂回路を経て弥山へ。石鎚スカイライン冬期閉鎖中（12〜3月）は土小屋へ到達不可。",
     popularity:3, trailhead:1, grade:{stamina:2, skill:"B", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.193）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"土小屋", to:"夜明峠", up:"1:15", down:"0:53"},
       {from:"夜明峠", to:"弥山山頂", up:"0:55", down:"0:45"}
     ], sample:true},
    {name:"縦走 石鎚山（成就⇔土小屋）", stats:"距離 約8.8km（片道）/ 標高差 登り約830m・下り約620m / 登り2:40・下り2:00", level:"中級", note:"山頂を挟んで成就ルートと土小屋ルートを結ぶ縦走。マイカー利用時は駐車地点の回収が課題（西之川⇔土小屋間はタクシー利用者が多い）。逆コース（土小屋→成就）も所要時間はほぼ同じ。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.192）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"周回 土小屋（十字分岐・御塔谷）", stats:"距離 約14.3km（周回）/ 標高差 累積登り・下りとも約1,480m / 登り3:00・下り2:48", level:"中級", note:"十字分岐から御塔谷を下る周回路。渡渉・岩場があり土小屋往復より脚力が必要。増水時は御塔谷を避け往路（夜明峠経由）を戻る判断を。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"C", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.194）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{1:"厳冬期。ロープウェイは通年運行だが山頂部は本格的な雪山でアイゼン・ピッケル・冬山経験が必須。土小屋へは石鎚スカイライン冬期閉鎖のため到達不可。",2:"積雪最盛期。成就ルートも山頂直下は雪山装備が必須。",3:"残雪期。下旬から雪解けが進むが山頂直下の鎖場周辺はまだ危険。",4:"1日に石鎚スカイラインが開通するが山頂部にはまだ残雪あり。下旬から本格シーズン入り。",5:"新緑とアケボノツツジが美しい。大型連休は大混雑しロープウェイ待ち時間が長くなりやすい。",6:"梅雨入り前後。梅雨の晴れ間を狙うと人が少なく快適。",7:"1〜10日はお山開き大祭（ロープウェイ早発）。海の日連休も大混雑。夏本番は午後の雷雨・熱中症に注意。",8:"盛夏。標高のわりに蒸し暑い。午後の雷雨に備え早出・早着を心がける。",9:"台風シーズン。石鎚スカイラインは時間雨量40mm等の基準で通行止めになることがある。",10:"紅葉最盛期（例年上旬〜中旬が見頃）。行楽シーズンで大混雑、マイカーは早着推奨。",11:"紅葉終盤〜初冬。石鎚スカイラインは30日で冬期閉鎖、土小屋への到達は月末まで。",12:"1日から石鎚スカイライン冬期閉鎖。ロープウェイ側のみアクセス可能で、積雪・凍結に厳重注意。"}
  }
},
{
  id:"sobo", name_ja:"祖母山", name_en:"Mt. Sobo", region:"祖母・傾・大崩山系", area:"九州・屋久島", prefecture:"大分県・宮崎県",
  elevation:1756, hyakumeizan:true,
  coords:{lat:32.8281, lon:131.3471}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:4, precip_danger:12,
    snow_months:[12,1,2,3],
    snow_note:"九州山地でも冬型が強まると稜線は着氷・樹氷になる。積雪量自体は本州の高山ほど多くないが、岩場・鎖場の凍結と北谷・神原への林道凍結には要警戒。北谷登山口のトイレは凍結防止のため12月上旬〜3月は閉鎖。"
  },
  trailheads:[
    {
      name:"北谷登山口（標高1,113m）",
      access:[
        {mode:"タクシー", line:"神和交通", from:"JR延岡駅・高千穂バスセンター等",
         duration:"約50分（高千穂中心部から）",
         weekday:"予約制・定時運行なし（要事前予約）", weekend:"同左",
         season:"通年（登山口までの道路改良工事は令和8年1月13日終了・通行可。冬期路面凍結、大雨・台風時の通行止めに注意。最新状況は高千穂町公式サイトで要確認）",
         url:"https://www.shinwa-koutsu.com/", sample:true}
      ]
    },
    {
      name:"神原登山口（標高627m・第一駐車場20台）",
      access:[
        {mode:"あいのりタクシー", line:"カモシカ号（ユネスココース）", from:"JR豊後竹田駅",
         duration:"約30分（カモシカ号タケタ公式の案内）",
         weekday:"竹田駅発 例: 7:00 / 9:15、登山口発 例: 15:30 / 17:30（月〜土曜運行）", weekend:"土曜は運行、日曜運休",
         season:"通年（乗車前日15時までの要予約・運賃片道2,000円）", url:"https://www.taketa-businfo.jp/unesco/index.html", sample:true}
      ]
    },
    {
      name:"尾平登山口（標高600m・もみじ屋駐車場15台）",
      access:[
        {mode:"コミュニティバス", line:"長谷川線（豊後大野市コミュニティバス）", from:"JR緒方駅",
         duration:"約1時間13分（尾平鉱山まで直通便のみ）",
         weekday:"緒方駅からの便数・時刻は要確認（尾平鉱山まで直通する便は限られ、途中止まりの便あり — 豊後大野市コミュニティバスの現行時刻表で確認を）", weekend:"土日祝は運休",
         season:"月〜金曜運行（8/6・12/31〜1/3運休）。運賃定額200円", url:"https://www.bungo-ohno.jp/docs/2020092900017/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"祖母山九合目避難小屋", elevation:1650, open:"通年開放（無人・避難小屋。設備・利用可否の詳細は要確認）", reservation:"予約不要（携帯トイレ持参推奨）", url:"", tel:""}
  ],
  routes:[
    {name:"北谷登山口 千間平コース 往復", stats:"距離 約9.7km / 標高差 約640m / 往復5:00（公表合計コースタイム）", level:"中級", note:"稜線歩きが長く展望に優れる北谷側の一般ルート。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.207）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"北谷登山口 風穴コース 往復", stats:"距離 約6.0km / 標高差 約640m / 往復5:30（公表合計コースタイム）", level:"中級", note:"千間平コースより短いが勾配が急。下りでの使用は滑落に注意。",
     popularity:1, trailhead:0, grade:{stamina:2, skill:"C", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.208）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"北谷登山口 千間平→風穴 周回", stats:"距離 約7.8km（編集部概算） / 標高差 約640m / 登り(千間平)目安3:00・下り(風穴)目安2:30（公表往復値からの編集部推定、合計時間の公式値なし）", level:"中級", note:"北谷登山口で最もよく歩かれる周回パターン。勾配の緩い千間平を登り、急な風穴を慎重に下る組み合わせ。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"C", official:false}},
    {name:"神原登山口 本登山道 往復", stats:"距離 約8.5km / 標高差 約1,130m / 往復6:42（公表合計コースタイム）", level:"中級", note:"大分県側の一般ルート。国観峠を経由する。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.201）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"尾平登山口 宮原コース 往復", stats:"距離 約10.0km / 標高差 約1,160m / 往復8:24（公表合計コースタイム）", level:"中級", note:"かつての鉱山集落・尾平からの伝統的なルート。黒金山尾根との周回も可能（別ルート・未収録）。",
     popularity:2, trailhead:2, grade:{stamina:4, skill:"B", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.203）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{
      1:"厳冬期。まれに樹氷が見られるが、岩場の凍結と防寒装備に注意。",
      2:"厳冬期。同上。軽アイゼン等の滑り止めを推奨。",
      3:"残雪・路面凍結が残ることがある。林道の冬季通行規制解除時期は要確認。",
      4:"新緑とアケボノツツジ。高千穂側の山開き神事は5月3日。",
      5:"アケボノツツジ・ミツバツツジが見頃。山開き（5/3）以降は登山者が増える。",
      6:"梅雨入り。集中豪雨時は渡渉箇所が増水し危険。増水時は無理せず撤退を。",
      7:"梅雨明け後は好天が続くが、稜線でも真夏日になり得る。水分を多めに携行。",
      8:"台風シーズン。接近時は北谷・神原への林道が通行止めになりやすく、自治体公式サイトで要確認。",
      9:"台風接近に注意。中旬以降は秋の気配。",
      10:"紅葉が始まり、行楽シーズンで登山者・マイカーが増える。",
      11:"紅葉終盤〜初冬。稜線・岩場で凍結が始まる年もある。北谷登山口のトイレは12月上旬で閉鎖。",
      12:"積雪・路面凍結の可能性。北谷への林道は凍結しやすくスタッドレス推奨。"
    }
  }
},
{
  id:"aso", name_ja:"阿蘇山（高岳）", name_en:"Mt. Aso (Takadake)", region:"阿蘇", area:"九州・屋久島", prefecture:"熊本県",
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
},
{
  id:"kirishima", name_ja:"霧島山（韓国岳）", name_en:"Mt. Karakuni (Kirishima)", region:"霧島", area:"九州・屋久島", prefecture:"鹿児島県・宮崎県",
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
     popularity:2, trailhead:1, grade:{stamina:1, skill:"A", official:false}}
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
},
{
  id:"kaimon", name_ja:"開聞岳", name_en:"Mt. Kaimon", region:"薩摩半島", area:"九州・屋久島", prefecture:"鹿児島県",
  elevation:924, hyakumeizan:true,
  coords:{lat:31.1802, lon:130.5283}, forecast_elevation:900,
  grading:{
    ridgeline:900,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:9,
    snow_months:[1,2],
    snow_note:"標高924mで九州最南端に近く、積雪はごく稀（数年に一度頂上付近が薄く白くなる程度）。むしろ低標高ゆえ盛夏は酷暑となり、熱中症が年間で最大のリスク（詳細は月別ノート参照）。"
  },
  trailheads:[{
    name:"かいもん山麓ふれあい公園（2合目登山口・標高約120m）",
    access:[
      {mode:"鉄道", line:"JR指宿枕崎線", from:"JR鹿児島中央駅",
       duration:"要確認（本数が少なく、指宿駅での乗換が必要な便が多い）",
       weekday:"開聞駅着 指宿・鹿児島中央方面（上り） 例: 5:44 / 6:59 / 8:27 / 9:02 / 14:23 / 16:50 / 19:36 / 21:03（2026年7月24日時点の掲載時刻）",
       weekend:"要確認（土休日で時刻が異なる場合はJR九州公式サイトで日付を指定して確認）",
       season:"通年", url:"https://www.jrkyushu-timetable.jp/cgi-bin/sp/sp-tt_dep.cgi/2893200/", sample:true},
      {mode:"徒歩", line:"JR開聞駅→かいもん山麓ふれあい公園（2合目登山口）", from:"JR開聞駅",
       duration:"徒歩約20分", weekday:"—", weekend:"—",
       season:"通年", url:"https://www.ibusuki.or.jp/tourism/play/kaimonpark/", sample:true},
      {mode:"車", line:"指宿スカイライン・県道243号経由", from:"指宿市街",
       duration:"要確認（指宿市街から車で30〜40分が目安）", weekday:"—", weekend:"—",
       season:"通年、マイカー規制なし。中央管理棟前に無料駐車場80台（身障者用・妊産婦用スペースあり）", url:"https://www.city.ibusuki.lg.jp/kosodate/park/kaimon/14609.html", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"2合目登山口（かいもん山麓ふれあい公園）→山頂 往復", stats:"距離 要確認 / 標高差 約800m / 登り約3:00・下り約2:30", level:"中級", note:"2合目から山頂まで一本道が螺旋状に山を一周する珍しい構造（日本百名山最低峰クラス）。7〜8合目は岩場、9合目付近に長さ5mのはしごがあり、山頂直下は両手を使う岩登り。登山道・山頂ともにトイレなし（公園の中央管理棟で済ませておく）。標高が低いぶん盛夏は酷暑となり熱中症リスクが高いため、早朝出発と十分な水分（目安500ml×3本以上）を。活火山だが2026年7月時点で気象庁の噴火警戒レベル運用対象外（気象庁「噴火警戒レベル運用火山」一覧 data.jma.go.jp/vois/data/filing/level/keikailevel.html に鹿児島県では桜島・薩摩硫黄島・口永良部島・諏訪之瀬島のみ掲載、開聞岳は含まれず）。火山活動に変化があれば気象庁発表を確認。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"2合目登山口（かいもん山麓ふれあい公園）", to:"2.5合目", up:"0:15"},
       {from:"2.5合目", to:"5合目", up:"0:45"},
       {from:"5合目", to:"7合目", up:"0:35"},
       {from:"7合目", to:"9合目", up:"0:35"},
       {from:"9合目", to:"山頂", up:"0:20"}
     ], sample:true}
  ],
  seasonality:{
    best:[1,2,3,4,5,10,11,12],
    notes:{
      1:"年間で最も登山者が少ない時期。晴天率は高いが季節風が強い日は9合目のはしご・岩場で体を持っていかれないよう注意。",
      2:"引き続き空気が澄み遠望が利く。防寒より防風対策を優先。",
      3:"寒さが緩み、一年で最も登りやすい時期のひとつ。",
      4:"新緑と行楽シーズン。ふれあい公園の駐車場が混みやすい。",
      5:"梅雨入り前の好天が多いが、すでに日差しは強く暑さ対策が必要。",
      6:"梅雨本番。降雨・雷に加え、濡れた7〜8合目の岩場は滑りやすい。",
      7:"梅雨明け後は本格的な酷暑期。標高が低く気温が下がりにくいため熱中症リスクが年間最高。早朝出発必須。",
      8:"年間で最も暑い時期に加え台風シーズン。台風接近・上陸時は登山を中止する。",
      9:"台風シーズンが続く。暑さのピークは過ぎるが油断しない。",
      10:"暑さが落ち着き行楽日和が増える。紅葉はほとんどないが海と空の眺めが美しい。",
      11:"気候が安定し、一年で最も登りやすい時期。",
      12:"季節風がやや強まるが積雪はほぼない。年末年始は公園の開場時間に注意。"
    }
  }
},
{
  id:"miyanoura", name_ja:"宮之浦岳", name_en:"Mt. Miyanoura", region:"屋久島", area:"九州・屋久島", prefecture:"鹿児島県（屋久島）",
  elevation:1936, hyakumeizan:true,
  coords:{lat:30.3361, lon:130.5041}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:11, wind_danger:17,
    precip_caution:12, precip_danger:35,
    snow_months:[12,1,2,3],
    snow_note:"屋久島の奥岳は「ひと月に35日雨が降る」と称される日本有数の多雨地帯（山中は年間降水量8,000〜10,000mm超）。並の雨は日常なのでprecipの危険域はやや高めに設定しているが、前線・台風による集中豪雨は花之江河や沢の徒渉点の増水・土砂災害に直結するため軽視しないこと。冬季(12〜3月)は稜線が着雪・凍結することがあり軽アイゼン推奨（九州最南の百名山だが標高1,900m級のため積雪は毎年発生）。"
  },
  trailheads:[
    {
      name:"淀川登山口（標高1,360m）",
      access:[
        {mode:"バス", line:"ヤクスギランド・紀元杉線（種子島・屋久島交通）", from:"合庁前（屋久島町役場前）/ 安房港",
         duration:"紀元杉まで約1時間強、紀元杉から淀川登山口まで徒歩約40分",
         weekday:"合庁前発 例: 9:20 / 13:30（紀元杉着10:27 / 14:37）", weekend:"土日祝も同ダイヤ（例: 9:20 / 13:30発）",
         season:"通年運行（2026年3月1日改正ダイヤ。荒天・道路状況により運休あり）", url:"https://yakukan.jp/safe-travel/brochure-download.html", sample:true},
        {mode:"登山タクシー", line:"まつばんだタクシー 登山送迎（貸切）", from:"宮之浦・安房の宿泊施設等",
         duration:"淀川登山口まで約1時間", weekday:"要予約・営業時間4:00〜19:00", weekend:"同左",
         season:"通年（日帰り周回には路線バスより早い時間の送迎が実質必須）", url:"https://yakushima.co.jp/", sample:true}
      ]
    },
    {
      name:"荒川登山口（標高600m）",
      access:[
        {mode:"登山バス", line:"荒川登山バス（屋久島山岳部保全利用協議会／屋久島レクリエーションの森保護管理協議会）", from:"屋久杉自然館前バス停",
         duration:"約40分", weekday:"屋久杉自然館前発 例: 5:00 / 5:20 / 5:40 / 14:00", weekend:"土日祝も同ダイヤ",
         season:"3月1日〜11月30日（町道荒川線マイカー規制期間、2026年運行確認済み。この期間は一般車両乗入不可）", url:"http://yakushima-tozan.com/bus/", sample:true},
        {mode:"バス", line:"宮之浦港⇔空港⇔安房⇔屋久杉自然館線（種子島・屋久島交通）", from:"宮之浦港",
         duration:"屋久杉自然館前まで約50分（始発は荒川登山バス始発5:00に接続）", weekday:"宮之浦港発 例: 4:00", weekend:"同左",
         season:"通年運行（2026年3月1日改正ダイヤ）", url:"https://yakukan.jp/safe-travel/brochure-download.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"淀川小屋（無人避難小屋）", elevation:1380, open:"通年（無人・無料・先着順）", reservation:"予約不可（先着順・満員時はテント泊等で譲り合い）", url:"https://www.env.go.jp/park/yakushima/ywhcc/tozan/huts.html", tel:""},
    {name:"新高塚小屋（無人避難小屋）", elevation:1460, open:"通年（無人・無料・先着順）", reservation:"予約不可（先着順・満員時はテント泊等で譲り合い）", url:"https://www.env.go.jp/park/yakushima/ywhcc/tozan/huts.html", tel:""}
  ],
  routes:[
    {name:"淀川登山口 往復（花之江河・投石平経由）", stats:"距離 約13.0km / 標高差 約900m（アップダウン含む累積）/ 登り5:00・下り4:00", level:"上級", note:"九州最高峰への最短ルート。日帰りは健脚向けで、屋久島町公式情報でも往復所要時間9〜10時間とされる。入山前に屋久島山岳部環境保全協力金（日帰り1,000円）の納入を。",
     popularity:3, trailhead:0, grade:{stamina:8, skill:"C", official:false},
     segments:[
       {from:"淀川登山口", to:"淀川小屋", up:"0:40", down:"0:35"},
       {from:"淀川小屋", to:"花之江河", up:"1:00", down:"0:50"},
       {from:"花之江河", to:"投石平", up:"1:10", down:"0:55"},
       {from:"投石平", to:"宮之浦岳山頂", up:"2:10", down:"1:40"}
     ], sample:true},
    {name:"縦走（淀川登山口→宮之浦岳→新高塚小屋→縄文杉→荒川登山口）", stats:"1泊2日 / 約21.0km", level:"上級", note:"無人避難小屋（新高塚小屋）泊が標準。1日目に宮之浦岳を越え、2日目に縄文杉を経て荒川登山口へ下山。荒川登山口は3〜11月マイカー規制のため下山後は荒川登山バスで屋久杉自然館へ。入山前に保全協力金（山中泊2,000円）の納入を。",
     popularity:3, trailhead:0, grade:{stamina:10, skill:"C", official:false},
     segments:[
       {from:"淀川登山口", to:"宮之浦岳山頂", up:"5:00"},
       {from:"宮之浦岳山頂", to:"新高塚小屋", down:"2:00"},
       {from:"新高塚小屋", to:"縄文杉", down:"1:20"},
       {from:"縄文杉", to:"荒川登山口", down:"2:30"}
     ], sample:true}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{
      1:"厳冬期。稜線は積雪・凍結し防寒装備と滑落注意が必須。町道荒川線のマイカー規制はない時期だが林道凍結に注意。",
      2:"厳冬期。降雪・凍結が続く。日帰り往復も装備次第で長時間化しやすい。",
      3:"3/1から町道荒川線マイカー規制と荒川登山バスの運行が再開。残雪期のため軽アイゼン推奨。",
      4:"新緑の季節。まだ稜線に残雪が残ることがある。GWは淀川小屋・花之江河周辺が混雑。",
      5:"上旬はシャクナゲが見頃。中旬以降は梅雨入りが多く、豪雨での増水に注意。",
      6:"本格的な梅雨。屋久島有数の多雨期で連日の降水が普通、沢の徒渉点は増水に警戒。",
      7:"梅雨明け後は晴天率が上がるが、直射日光と蒸し暑さが厳しい。水分計画は多めに。",
      8:"台風シーズン本番。荒川登山バスの運休や町道通行止めが起こり得るため事前に運行情報を要確認。",
      9:"引き続き台風シーズン。荒川登山バス・マイカー規制の最新状況は屋久島山岳部保全利用協議会の情報を確認。",
      10:"台風が落ち着き始め、行楽シーズン。晴天率が高く縦走にも向く。",
      11:"照葉樹林や稜線の紅葉が進む。マイカー規制・荒川登山バスは11/30までで、月末は下山計画に注意。",
      12:"積雪が始まり、荒川登山バスは運休期間入り（翌年3月再開）。稜線の防寒・凍結対策必須。"
    }
  }
},
{
  id:"kayagatake", name_ja:"茅ヶ岳", name_en:"Mt. Kayagatake", region:"奥秩父前衛", area:"奥秩父・奥多摩", prefecture:"山梨県",
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
},
{
  id:"kentoku", name_ja:"乾徳山", name_en:"Mt. Kentoku", region:"奥秩父", area:"奥秩父・奥多摩", prefecture:"山梨県",
  elevation:2031, hyakumeizan:false,
  coords:{lat:35.8227, lon:138.7149}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:2, precip_danger:8,
    snow_months:[11,12,1,2,3,4],
    snow_note:"標高の割に山頂直下は花崗岩の岩場・鎖場（髭剃岩・雷岩・最後の鳳岩20m）が連続し、着雪・凍結時は滑落リスクが急上昇する。雨天時も同様に岩が滑りやすいため、降水しきい値は低めに設定。11月下旬〜4月は軽アイゼン携行を推奨。"
  },
  trailheads:[{
    name:"徳和登山口（乾徳山登山口バス停・徳和駐車場から徒歩約20分、標高約830m）",
    access:[
      {mode:"バス", line:"市民バス 西沢渓谷線（笛吹観光自動車）", from:"JR中央本線 山梨市駅",
       duration:"約32分",
       weekday:"山梨市駅発 例: 9:12 / 10:21 / 13:50 / 15:17（毎日同一ダイヤ）", weekend:"山梨市駅発 例: 9:12 / 10:21 / 13:50 / 15:17（平日と同時刻）",
       season:"通年運行（1月1日・1月2日は運休）", url:"https://www.city.yamanashi.yamanashi.jp/site/city-bus/9090.html", sample:true},
      {mode:"バス", line:"塩山駅〜恵林寺〜窪平〜乾徳山登山口〜西沢渓谷入口線（山梨交通）", from:"JR中央本線 塩山駅",
       duration:"約32分",
       weekday:"塩山駅発 例: 9:05 / 13:30 / 14:30（4/22〜5/7・7/8〜8/15・9/30〜11/19は毎日運行、それ以外の平日は運休）", weekend:"塩山駅発 例: 8:30 / 9:05 / 13:30 / 14:30（4/15〜11/19の土曜・日曜・祝日運行）",
       season:"季節運行・2026年は4/15〜11/19が基本（詳細な運行日パターンは要確認）", url:"https://ykbus.jp/index/route_bus/route_sp_info/nishizawa_valley/", sample:true}
    ]
  }],
  huts:[
    {name:"高原ヒュッテ（国師ヶ原・無人避難小屋、トイレ併設）", elevation:1600, open:"通年開放（緊急避難用・冬期はトイレ使用不可）", reservation:"予約不要（宿泊前提の施設ではない）", url:"https://www.city.yamanashi.yamanashi.jp/soshiki/17/14049.html", tel:""}
  ],
  routes:[
    {name:"徳和 銀晶水コース 往復", stats:"距離 約10.5km（往復）/ 標高差 約1,200m / 登り4:10・下り2:26", level:"中級", note:"山頂直下の鎖場（髭剃岩・雷岩・最後の鳳岩20m）が核心部。鳳岩には巻き道あり。岩場は雨天・着雪時は特に慎重に。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"山梨 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"},
     segments:[
       {from:"徳和登山口", to:"銀晶水", up:"1:30", down:"0:40"},
       {from:"銀晶水", to:"国師ヶ原十字路", up:"1:00", down:"0:43"},
       {from:"国師ヶ原十字路", to:"扇平", up:"0:40", down:"0:28"},
       {from:"扇平", to:"乾徳山山頂", up:"1:00", down:"0:35"}
     ], sample:true},
    {name:"徳和 周回（銀晶水→山頂→水のタル→道満尾根）", stats:"距離 約11km（周回）/ 標高差 約1,200m / 登り4:10・下り3:00", level:"中級", note:"登りは銀晶水コースと同じ、下山は黒金山への分岐（水のタル）を経て道満尾根を下る周回。県グレーディング表は往復ルートのみの公表で本ルートとは起点・形状が異なるため独自推定。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"C", official:false}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{
      4:"下部は残雪が消え春めくが、山頂直下の岩場・鎖場には雪や氷が残ることがある。",
      5:"新緑とミツバツツジ。国師ヶ原周辺の残雪は概ね消える。",
      6:"梅雨の晴れ間を狙う。鎖場は雨で滑りやすく、増水した沢の渡渉にも注意。",
      7:"盛夏で徳和からの樹林帯歩きは蒸し暑い。午後の雷雨が多く早出早着を心がける。",
      8:"残暑と午後雷雨のリスクが高い時期。日帰りなら早朝出発必須、熱中症対策を。",
      9:"上旬はまだ残暑。中旬以降は秋晴れが増えて歩きやすくなる。",
      10:"国師ヶ原・扇平から山頂にかけて紅葉が見頃（中旬〜下旬）。行楽シーズンで駐車場・バスが混雑しやすい。",
      11:"上旬まで紅葉、中旬以降は霜・凍結が始まる。岩場・鎖場は特に慎重に。"
    }
  }
},
{
  id:"mitsutoge", name_ja:"三ツ峠山", name_en:"Mt. Mitsutoge", region:"御坂山地", area:"富士・伊豆・箱根", prefecture:"山梨県",
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
},
{
  id:"kintoki", name_ja:"金時山", name_en:"Mt. Kintoki", region:"箱根", area:"富士・伊豆・箱根", prefecture:"神奈川県・静岡県",
  elevation:1212, hyakumeizan:false,
  coords:{lat:35.2897, lon:139.0049}, forecast_elevation:1150,
  grading:{
    ridgeline:1150,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:8,
    snow_months:[12,1,2,3],
    snow_note:"標高1,212mの低山のため積雪はまれで根雪にはならないが、山頂直下の露岩帯・痩せ尾根は冬季の早朝に凍結しやすく、軽アイゼンが有効な年もある。逆に樹林帯を抜ける夏は蒸し暑さがこもりやすく、初心者に人気の山だけに熱中症対策と早出早着を心がけたい。"
  },
  trailheads:[
    {
      name:"公時神社（金時神社入口バス停・標高約700m）",
      access:[
        {mode:"バス", line:"新宿・御殿場・箱根線 特急（小田急ハイウェイバス）", from:"東京・新宿（バスタ新宿）",
         duration:"約2時間5分",
         weekday:"バスタ新宿発、金時神社入口着 例: 8:39 / 9:09 / 9:39 / 11:39 / 14:09 / 15:39 / 18:09", weekend:"バスタ新宿発、金時神社入口着 例: 8:39 / 9:09 / 9:39 / 11:09 / 12:09 / 14:09 / 15:39 / 18:09",
         season:"通年運行（金時神社入口・乙女峠を含む東名小山〜箱根山のホテル間の停留所は予約不可・バス停で待ち車内精算）", url:"https://odakyu-highway.jp/hakone/", sample:true},
        {mode:"バス", line:"新宿・御殿場・箱根線 特急（小田急ハイウェイバス、御殿場駅発着区間）", from:"JR御殿場線 御殿場駅（箱根乙女口③番のりば）",
         duration:"約19分",
         weekday:"御殿場駅発、金時神社入口着 例: 8:39 / 9:09 / 9:39 / 11:39 / 14:09", weekend:"御殿場駅発、金時神社入口着 例: 8:39 / 9:09 / 9:39 / 11:09 / 12:09 / 14:09",
         season:"通年運行", url:"https://odakyu-highway.jp/hakone/", sample:true},
        {mode:"バス（乗継）", line:"箱根登山バス「桃源台」方面行→仙石案内所前で小田急ハイウェイバス「御殿場駅」方面行に乗継", from:"箱根登山鉄道 箱根湯本駅",
         duration:"合計約35分（要確認）",
         weekday:"要確認（日中30分〜1時間に1本程度運行）", weekend:"要確認",
         season:"通年", url:"https://www.hakonenavi.jp/hakone-tozanbus/", sample:true}
      ]
    },
    {
      name:"乙女峠バス停（標高800m）",
      access:[
        {mode:"バス", line:"新宿・御殿場・箱根線 特急（小田急ハイウェイバス）", from:"東京・新宿（バスタ新宿）",
         duration:"約2時間",
         weekday:"バスタ新宿発、乙女峠着 例: 8:35 / 9:05 / 9:35 / 11:35 / 14:05 / 15:35 / 18:05", weekend:"バスタ新宿発、乙女峠着 例: 8:35 / 9:05 / 9:35 / 11:05 / 12:05 / 14:05 / 15:35 / 18:05",
         season:"通年運行（金時神社入口・乙女峠を含む東名小山〜箱根山のホテル間の停留所は予約不可・バス停で待ち車内精算）", url:"https://odakyu-highway.jp/hakone/", sample:true},
        {mode:"バス", line:"新宿・御殿場・箱根線 特急（小田急ハイウェイバス、御殿場駅発着区間）", from:"JR御殿場線 御殿場駅（箱根乙女口③番のりば）",
         duration:"約15分",
         weekday:"御殿場駅発、乙女峠着 例: 8:35 / 9:05 / 9:35 / 11:35 / 14:05", weekend:"御殿場駅発、乙女峠着 例: 8:35 / 9:05 / 9:35 / 11:05 / 12:05 / 14:05",
         season:"通年運行", url:"https://odakyu-highway.jp/hakone/", sample:true}
      ]
    },
    {
      name:"JR御殿場線 足柄駅（標高330m）",
      access:[
        {mode:"電車", line:"JR御殿場線", from:"JR御殿場線 松田駅（小田急線 新松田駅隣接）／JR東海道線 国府津駅",
         duration:"松田駅から約20分",
         weekday:"要確認（本数が少ない区間のため事前に公式時刻表で確認を推奨）", weekend:"要確認",
         season:"通年運行", url:"https://railway.jr-central.co.jp/time-schedule/search/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"元祖金時茶屋（金時茶屋）", elevation:1212, open:"通年営業 7:00〜16:30（金時娘の茶屋として知られる）", reservation:"予約不要（軽食・甘味の売店）", url:"https://www.hakonenavi.jp/spot/14516", tel:"090-3158-1239"}
  ],
  routes:[
    {name:"乙女峠→長尾山→金時山 往復", stats:"距離 約6.2km（往復）/ 累積標高差 登り約620m・下り約620m / 歩行時間 約3:00（県グレーディング公表値）", level:"初級", note:"長尾山を経由する稜線ルートで、振り返ると富士山がきれいに見える区間が長い。乙女峠バス停は新宿・御殿場方面からの高速バスが直接停車し便利。",
     popularity:3, trailhead:1, grade:{stamina:2, skill:"A", official:true, src:"静岡県 山のグレーディング", url:"https://www.pref.shizuoka.jp/kankosports/kanko/kankoseisaku/1040866/1052256.html"}},
    {name:"公時神社（金時公園）→矢倉沢峠→金時山 往復", stats:"距離 約4.8km（往復）/ 標高差 約510m / 登り1:20・下り1:00", level:"初級", note:"金時山で最も歩かれている入門コース。矢倉沢峠までは樹林帯の穏やかな道、峠から山頂直下は露岩と鎖場が連続し滑落注意。山頂は360度の大展望で、富士山の眺めが特に有名（元祖金時茶屋・金太郎茶屋の2軒の茶屋がある）。なお箱根山（大涌谷方面）で火山活動に関する情報が発表されることがあるが、金時山の登山道は大涌谷から離れており通常は直接の影響はない。念のため気象庁「箱根山」の噴火警戒レベルは事前に確認しておきたい。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:false},
     segments:[
       {from:"金時神社入口バス停（公時神社）", to:"矢倉沢峠", up:"0:45", down:"0:35"},
       {from:"矢倉沢峠", to:"金時山山頂", up:"0:35", down:"0:25"}
     ], sample:true},
    {name:"乙女峠→金時山→公時神社 縦走（周回）", stats:"距離 約6.3km（縦走）/ 標高差 登り約510m・下り約510m / 行動時間 約2:45〜3:00", level:"初級〜中級", note:"乙女峠から登って公時神社（金時神社入口バス停）へ下山する、あるいはその逆コースをたどる定番の縦走プラン。行き帰りで異なるバス路線・異なる展望を楽しめる。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"A", official:false},
     segments:[
       {from:"乙女峠バス停", to:"長尾山", up:"0:40"},
       {from:"長尾山", to:"金時山山頂", up:"0:35"},
       {from:"金時山山頂", to:"金時神社入口バス停（公時神社）", down:"1:00"}
     ], sample:true},
    {name:"足柄駅→矢倉沢地蔵堂・足柄峠→金時山 往復", stats:"距離 約12.0km（往復）/ 累積標高差 登り約900m・下り約900m / 歩行時間 約5:42（県グレーディング公表値）", level:"中級", note:"静岡県側で最も長いコース。矢倉沢地蔵堂・足柄峠（万葉公園・足柄城址）を経由する歴史街道歩き。バス便に頼らずJR駅から直接歩き出せるが健脚向き、静かな登山を楽しめる。",
     popularity:1, trailhead:2, grade:{stamina:3, skill:"A", official:true, src:"静岡県 山のグレーディング", url:"https://www.pref.shizuoka.jp/kankosports/kanko/kankoseisaku/1040866/1052256.html"}}
  ],
  seasonality:{
    best:[1,2,4,5,10,11,12],
    notes:{
      1:"空気が澄み、富士山の眺めが一年で最も美しい時期。稜線は霜柱と凍結の可能性があるので軽アイゼン携行が安心。",
      2:"同様に展望の好機が続くが、冷え込みと北寄りの風には注意。",
      3:"春霞が出始める頃だが、晴れれば気持ちよく歩ける。花粉の時期でもある。",
      4:"新緑が始まり気候も安定。ゴールデンウィークは山頂・茶屋・バスとも混雑必至。",
      5:"新緑とさわやかな気候の好季節。日中の日差しは強くなり始める。",
      6:"梅雨で登山道がぬかるみやすく、露岩帯は特に滑りやすい。展望も期待薄。",
      7:"樹林帯の蒸し暑さがこもりやすい。低山ゆえの熱中症リスクが高く、水分計画と早出早着を。",
      8:"猛暑と午後の雷雨に注意。稜線・山頂は遮るものがなく落雷の危険もあるため早めの行動を。",
      9:"残暑と台風・秋雨前線の影響を受けやすいが、晴れ間を選べば快適。",
      10:"紅葉が始まり気候も安定してくる。行楽シーズンでバスが混み合う。",
      11:"紅葉と富士山の展望を両方楽しめる、一年で最も人気の時期。バス・駐車場とも早め行動を。",
      12:"空気が澄み展望良好だが、日没が早いのでヘッドランプと下山時刻の余裕を。"
    }
  }
},
{
  id:"otake", name_ja:"大岳山", name_en:"Mt. Otake", region:"奥多摩", area:"奥秩父・奥多摩", prefecture:"東京都",
  elevation:1266, hyakumeizan:false,
  coords:{lat:35.7652, lon:139.1304}, forecast_elevation:1250,
  grading:{
    ridgeline:1250,
    wind_caution:11, wind_danger:17,
    precip_caution:3, precip_danger:10,
    snow_months:[12,1,2],
    snow_note:"積雪自体は少ないが、ロックガーデン沢沿いの日陰や山頂直下の岩場は凍結しやすく軽アイゼン・チェーンスパイクが安心。低山ゆえ夏は蒸し暑く、樹林帯でも熱中症リスクが高い点は風雨とは別に要注意。"
  },
  trailheads:[{
    name:"御岳山ケーブル御岳山駅（標高831m）",
    access:[
      {mode:"バス", line:"西東京バス 御10/御11系統（御岳駅⇔ケーブル下）", from:"JR青梅線 御嶽駅",
       duration:"約10分",
       weekday:"御嶽駅発 要確認（西東京バス公式ハイキング時刻表で確認・2026年4月1日改正）", weekend:"御嶽駅発 要確認（同上、土休日ダイヤ）",
       season:"通年", url:"https://www.nisitokyobus.co.jp/wp/wp-content/uploads/2026/03/20260401_hiking_Okutama.pdf", sample:true},
      {mode:"ケーブルカー", line:"御岳登山鉄道 御岳山ケーブル（滝本駅⇔御岳山駅）", from:"滝本駅（標高407m、バス「ケーブル下」下車すぐ）",
       duration:"約6分",
       weekday:"滝本駅発 例: 7:30 / 9:00 / 11:10 / 14:10（始発7:30・最終18:30、多客時増発あり）", weekend:"滝本駅発 例: 7:30 / 8:10 / 10:02 / 14:18（始発7:30・最終18:30、朝は約16分間隔の時間帯あり）",
       season:"通年（多客時増発、点検等による運休あり）", url:"https://www.mitaketozan.co.jp/timetable.html", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"御岳山ケーブル→武蔵御嶽神社→ロックガーデン（綾広の滝）→大岳山 往復", stats:"距離 約9.8km / 標高差 約470m / 登り2:50・下り2:20", level:"中級", note:"奥多摩三山の一で都心からも同定できる特徴的な山容。ロックガーデン（岩石園）の沢沿いを抜けて大岳山荘跡（2008年営業終了・廃屋）を経由し、大岳神社の先が山頂。岩場主体の登りで雨天時は滑りやすい。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:false},
     segments:[
       {from:"御岳山ケーブル御岳山駅", to:"武蔵御嶽神社", up:"0:25", down:"0:20"},
       {from:"武蔵御嶽神社", to:"綾広の滝（ロックガーデン）", up:"0:45", down:"0:40"},
       {from:"綾広の滝", to:"大岳山荘跡", up:"1:15", down:"1:00"},
       {from:"大岳山荘跡", to:"大岳山山頂", up:"0:25", down:"0:20"}
     ], sample:true},
    {name:"奥の院・鍋割山経由 大岳山 往復", stats:"距離 約7.6km / 標高差 約440m / 登り2:20・下り1:50", level:"中級", note:"ロックガーデンを通らず稜線を直進する最短コース。奥の院峰・鍋割山の細かいアップダウンが続く。東京都御岳ビジターセンターの目安では武蔵御嶽神社〜大岳山が片道約2:30・往復約5:00。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"B", official:false}},
    {name:"鋸尾根縦走（御岳山→大岳山→鋸山→愛宕山→奥多摩駅）", stats:"距離 約13km / 標高差（累積）約1,150m / 登り3:00・下り4:30", level:"上級", note:"鋸尾根は鎖場・ハシゴが連続する痩せ尾根で下り主体でも体力を要する。愛宕山直下の急な石段を経てJR奥多摩駅へ。エスケープが少なく早出必須。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:false}}
  ],
  seasonality:{
    best:[1,4,5,10,11,12],
    notes:{1:"空気が澄む厳冬期。ロックガーデンの沢沿いや北面の岩場は凍結するため軽アイゼンが安心。",4:"新緑と麓の桜。武蔵御嶽神社の参道歩きも楽しめる季節。",5:"ヤマツツジが見頃を迎え、花の百名山らしい彩りが出る時期。",7:"梅雨明け後は低山特有の蒸し暑さが強まる。御岳山周辺のレンゲショウマは見頃だが、大岳山本体は日陰が少なく熱中症対策と早出が必須。",8:"酷暑期。樹林帯でも気温・湿度が高く、水分携行と行動時間の短縮を。台風接近時は増水・倒木にも注意。",10:"紅葉が始まり行楽シーズンで混雑。ケーブルカーは待ち時間が出ることも。",11:"紅葉と展望の好期。日没が早いのでヘッドランプ携行を。",12:"空気が澄み富士山方面の展望が良いが、ロックガーデンの日陰は凍結し始める。"}
  }
}
];
