{
  id:"sukai", name_ja:"皇海山", name_en:"Mt. Sukai", region:"足尾山地", prefecture:"栃木県・群馬県",
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
}
