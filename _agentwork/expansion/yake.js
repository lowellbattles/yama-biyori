{
  id:"yake", name_ja:"焼岳", name_en:"Mt. Yakedake", region:"北アルプス南部", prefecture:"長野県・岐阜県",
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
}
