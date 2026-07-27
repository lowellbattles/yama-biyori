{
  id:"yari", name_ja:"槍ヶ岳", name_en:"Mt. Yari", region:"北アルプス南部", prefecture:"長野県・岐阜県",
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
}
