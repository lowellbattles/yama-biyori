{
  id:"okuhotaka", name_ja:"穂高岳（奥穂高岳）", name_en:"Mt. Hotaka (Okuhotaka)", region:"北アルプス南部（穂高連峰）", prefecture:"長野県・岐阜県",
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
}
