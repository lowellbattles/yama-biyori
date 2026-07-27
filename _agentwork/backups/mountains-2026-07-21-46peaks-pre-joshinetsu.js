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
     region: "山域",  prefecture: "県",
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
  id:"tsubakuro", name_ja:"燕岳", name_en:"Mt. Tsubakuro", region:"北アルプス", prefecture:"長野県",
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
    notes:{5:"残雪期。雪上歩行装備必須だが人は少なめ。",6:"梅雨の晴れ間狙い。残雪は概ね消える。",7:"コマクサ見頃（7月中旬〜8月上旬）。",9:"秋晴れと紅葉の始まり。",10:"上旬は紅葉、下旬は初雪に注意。"}
  }
},
{
  id:"karamatsu", name_ja:"唐松岳", name_en:"Mt. Karamatsu", region:"北アルプス", prefecture:"長野県・富山県",
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
  id:"shirouma", name_ja:"白馬岳", name_en:"Mt. Shirouma", region:"北アルプス", prefecture:"長野県・富山県",
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
  id:"jonen", name_ja:"常念岳", name_en:"Mt. Jonen", region:"北アルプス", prefecture:"長野県",
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
  id:"norikura", name_ja:"乗鞍岳（剣ヶ峰）", name_en:"Mt. Norikura", region:"北アルプス", prefecture:"長野県・岐阜県",
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
  id:"kisokoma", name_ja:"木曽駒ヶ岳", name_en:"Mt. Kiso-Komagatake", region:"中央アルプス", prefecture:"長野県",
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
  id:"akadake", name_ja:"赤岳", name_en:"Mt. Akadake", region:"八ヶ岳", prefecture:"長野県・山梨県",
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
  id:"tateshina", name_ja:"蓼科山", name_en:"Mt. Tateshina", region:"八ヶ岳", prefecture:"長野県",
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
  id:"kitayoko", name_ja:"北横岳", name_en:"Mt. Kitayokodake", region:"八ヶ岳", prefecture:"長野県",
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
    notes:{2:"スノーシュー・軽アイゼンの雪山入門先として人気。ロープウェイ利用でも厳冬期装備は必須。",5:"残雪が遅くまで残り北斜面は凍結も。軽アイゼンがあると安心。",6:"シラビソの深い緑と坪庭の火山地形。短時間で登れるため梅雨の晴れ間向き。",7:"コケモモなど高山植物が咲く盛夏。家族連れにも歩きやすいベストシーズン。",8:"涼しい避暑ハイクに最適。ロープウェイ・バスとも増便され混雑する。",10:"カラマツの黄葉と初霧氷のコントラスト。下旬は積雪が始まり冬支度を。"}
  }
},
{
  id:"nasu", name_ja:"那須岳（茶臼岳）", name_en:"Mt. Nasu (Chausu)", region:"那須連山", prefecture:"栃木県",
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
  id:"kuju", name_ja:"久住山（くじゅう連山）", name_en:"Mt. Kuju", region:"くじゅう連山", prefecture:"大分県",
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
  id:"tanigawa", name_ja:"谷川岳", name_en:"Mt. Tanigawa", region:"上越国境", prefecture:"群馬県・新潟県",
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
    notes:{6:"残雪と新緑。雪渓歩きの装備を。",7:"高山植物の宝庫（ホソバヒナウスユキソウなど）。",9:"下旬から山頂部の紅葉。",10:"上〜中旬が紅葉ピーク。天神平の草紅葉も見事。",11:"初雪。一般登山は終了の目安。"}
  }
},
{
  id:"kinpu", name_ja:"金峰山", name_en:"Mt. Kinpu", region:"奥秩父", prefecture:"山梨県・長野県",
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
    notes:{5:"残雪が稜線に残ることがあり、軽アイゼン携行が安心。バス運行開始前はアクセス注意。",6:"新緑とシャクナゲの季節。大弛峠線の運行が始まり公共交通で登りやすくなる。",7:"夏山シーズン本番。午後の雷雨に注意し、早出早着を。",8:"気温は快適だが夕立が多い。五丈岩と360度の展望。",10:"紅葉と初冠雪が重なる時期。朝晩は氷点下になり防寒必須。",11:"上旬でバス運行終了。降雪・凍結が始まり冬山装備の世界へ。"}
  }
},
{
  id:"mizugaki", name_ja:"瑞牆山", name_en:"Mt. Mizugaki", region:"奥秩父", prefecture:"山梨県",
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
  id:"kumotori", name_ja:"雲取山", name_en:"Mt. Kumotori", region:"奥秩父", prefecture:"東京都・埼玉県・山梨県",
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
  id:"daibosatsu", name_ja:"大菩薩嶺", name_en:"Mt. Daibosatsu", region:"奥秩父", prefecture:"山梨県",
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
  id:"shibutsu", name_ja:"至仏山", name_en:"Mt. Shibutsu", region:"尾瀬", prefecture:"群馬県",
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
    notes:{4:"残雪期利用期間（2026年は4/17〜5/6のみ・雪山装備必須）。尾瀬保護財団の案内を確認。",5:"【重要】植生保護のため5月上旬〜6月中旬は至仏山登山道が全面閉鎖。",6:"下旬に閉鎖解除（2026年は6/19まで閉鎖）。開通直後は残雪と泥濘に注意。",7:"蛇紋岩帯にホソバヒナウスユキソウなど固有の高山植物が咲く最盛期。",9:"下旬から尾瀬ヶ原の草紅葉。静かな山歩きが楽しめる。",10:"草紅葉と初雪の季節。下旬で山小屋・鳩待峠行きバスが順次終了。"}
  }
},
{
  id:"nikkoshirane", name_ja:"日光白根山", name_en:"Mt. Nikko-Shirane", region:"日光連山", prefecture:"栃木県・群馬県",
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
    notes:{5:"森林限界付近は残雪が残り、軽アイゼンが必要な年もある。",6:"固有種シラネアオイの開花期。湯元温泉線のバス運行が始まる。",7:"コマクサなど高山植物の最盛期。梅雨明け後は展望も安定。",8:"夏山シーズン本番。午後の雷雨に注意し早出早着を。",10:"山頂部の紅葉と初冠雪が重なる。下旬でロープウェイ線バスの運行終了。",11:"積雪期に入り一般登山は困難。冬装備と経験が必要。"}
  }
},
{
  id:"nantai", name_ja:"男体山", name_en:"Mt. Nantai", region:"日光連山", prefecture:"栃木県",
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
    notes:{4:"4月25日に開山。山頂部はまだ残雪が残ることがある。",5:"新緑の中禅寺湖畔から一気に高度を上げる。朝は冷え込むので防寒を。",7:"月末から男体山登拝大祭（7/31〜8/7）。期間中は深夜登拝も可能。",8:"夏山最盛期。樹林帯を抜けると日差しが強く、水は多めに。",10:"中禅寺湖と紅葉を見下ろす絶景の季節。山頂は初冠雪の便りも。",11:"11月11日で閉山。以降は入山できないため計画に注意。"}
  }
},
{
  id:"akagi", name_ja:"赤城山（黒檜山）", name_en:"Mt. Akagi (Kurobi)", region:"上毛三山", prefecture:"群馬県",
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
  id:"tonodake", name_ja:"塔ノ岳", name_en:"Mt. Tonodake", region:"丹沢", prefecture:"神奈川県",
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
    notes:{1:"富士山と相模湾の展望は年間随一。霜解けの泥濘に注意、チェーンスパイク携行が安心。",5:"新緑とシロヤシオが見事。ヤマビルが動き出す時期で沢沿いは対策を。",7:"蒸し暑く午後は雷雨も。ヤマビル最盛期のため塩・忌避剤の携行と早出早着を。",9:"残暑と秋雨で条件は不安定。晴れ間を選べば静かな山歩き。",11:"空気が澄み紅葉と富士山の展望が最高。日没が早いのでヘッドランプを忘れずに。",12:"晴天率が高く展望の黄金期。霜と凍結が始まるので防寒と滑り止めを。"}
  }
},
{
  id:"oyama", name_ja:"大山（丹沢）", name_en:"Mt. Oyama", region:"丹沢", prefecture:"神奈川県",
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
    notes:{1:"空気が澄み山頂から江の島・相模湾・富士山の眺望が最高。初詣客で参道が賑わう。",4:"桜と新緑が参道を彩る快適な季節。花冷え対策に一枚多めの防寒を。",7:"蒸し暑く展望も霞みがち。早朝出発がおすすめ。",9:"残暑が落ち着き始めるが台風・秋雨に注意。空いた平日が狙い目。",11:"大山寺・下社の紅葉ライトアップで一年最大の混雑期。ケーブルは増発されるが待ち時間覚悟で。",12:"冬晴れの展望期。山頂北面は霜や凍結が出るため軽アイゼンがあると安心。"}
  }
},
{
  id:"tsukuba", name_ja:"筑波山", name_en:"Mt. Tsukuba", region:"筑波山地", prefecture:"茨城県",
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
    notes:{1:"冬晴れの日は関東平野と富士山・スカイツリーまで見渡せる。元旦はケーブルカーが早朝運転。",2:"山麓の筑波山梅林で梅まつり（2月中旬〜3月）。登山と観梅の組み合わせに最適。",4:"カタクリの花とヤマザクラ、続いてツツジが山を彩る華やかな季節。",7:"標高が低く蒸し暑い。早朝スタートかケーブルカー・ロープウェイ併用で暑さを回避。",11:"紅葉の最盛期でロープウェイ夜間運行も実施。土日は山頂とバスの混雑必至。",12:"澄んだ空気で展望が良く人も減る静かな季節。岩場の凍結には注意。"}
  }
},
{
  id:"rishiri", name_ja:"利尻山（利尻岳）", name_en:"Mt. Rishiri (Rishiri-dake)", region:"利尻島", prefecture:"北海道",
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
  id:"rausu", name_ja:"羅臼岳", name_en:"Mt. Rausu", region:"知床", prefecture:"北海道",
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
  id:"shari", name_ja:"斜里岳", name_en:"Mt. Shari", region:"斜里岳道立自然公園", prefecture:"北海道",
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
  id:"meakan", name_ja:"阿寒岳（雌阿寒岳）", name_en:"Mt. Meakan (Meakandake)", region:"阿寒", prefecture:"北海道",
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
  id:"asahidake", name_ja:"旭岳", name_en:"Mt. Asahidake", region:"大雪山系", prefecture:"北海道",
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
  id:"tomuraushi", name_ja:"トムラウシ山", name_en:"Mt. Tomuraushi", region:"大雪山系", prefecture:"北海道",
  elevation:2141, hyakumeizan:true,
  coords:{lat:43.5271, lon:142.8486}, forecast_elevation:2100,
  grading:{
    ridgeline:1700,
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
},
{
  id:"poroshiri", name_ja:"幌尻岳", name_en:"Mt. Poroshiri", region:"日高山脈", prefecture:"北海道",
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
  id:"yotei", name_ja:"羊蹄山（後方羊蹄山）", name_en:"Mt. Yotei (Ezo-Fuji)", region:"後方羊蹄", prefecture:"北海道",
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
  id:"iwaki", name_ja:"岩木山", name_en:"Mt. Iwaki", region:"津軽", prefecture:"青森県",
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
  id:"hakkoda", name_ja:"八甲田山（大岳）", name_en:"Mt. Hakkoda (Odake)", region:"八甲田", prefecture:"青森県",
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
},
{
  id:"iwate", name_ja:"岩手山", name_en:"Mt. Iwate", region:"奥羽山脈", prefecture:"岩手県",
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
  id:"hayachine", name_ja:"早池峰山", name_en:"Mt. Hayachine", region:"北上山地", prefecture:"岩手県",
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
  id:"chokai", name_ja:"鳥海山", name_en:"Mt. Chokai", region:"鳥海山系", prefecture:"山形県・秋田県",
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
  id:"gassan", name_ja:"月山", name_en:"Mt. Gassan", region:"出羽三山", prefecture:"山形県",
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
  id:"oasahi", name_ja:"朝日岳（大朝日岳）", name_en:"Mt. Oasahi", region:"朝日連峰", prefecture:"山形県・新潟県",
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
  id:"zao", name_ja:"蔵王山（熊野岳）", name_en:"Mt. Zao (Kumano-dake)", region:"蔵王連峰", prefecture:"山形県・宮城県",
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
  id:"iide", name_ja:"飯豊山", name_en:"Mt. Iide", region:"飯豊連峰", prefecture:"山形県・新潟県・福島県",
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
  id:"nishiazuma", name_ja:"西吾妻山", name_en:"Mt. Nishi-Azuma", region:"吾妻連峰", prefecture:"山形県・福島県",
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
  id:"adatara", name_ja:"安達太良山", name_en:"Mt. Adatara", region:"安達太良連峰", prefecture:"福島県",
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
  id:"bandai", name_ja:"磐梯山", name_en:"Mt. Bandai", region:"会津", prefecture:"福島県",
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
  id:"aizukoma", name_ja:"会津駒ヶ岳", name_en:"Mt. Aizu-Komagatake", region:"会津", prefecture:"福島県",
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
}
];
