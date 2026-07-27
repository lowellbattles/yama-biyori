{
  id:"tsurugi", name_ja:"剱岳", name_en:"Mt. Tsurugi", region:"立山連峰", prefecture:"富山県",
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
}
