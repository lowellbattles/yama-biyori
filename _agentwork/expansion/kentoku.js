{
  id:"kentoku", name_ja:"乾徳山", name_en:"Mt. Kentoku", region:"奥秩父", prefecture:"山梨県",
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
}
