{
  id:"tanzawa", name_ja:"丹沢山", name_en:"Mt. Tanzawa", region:"丹沢", prefecture:"神奈川県",
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
}
