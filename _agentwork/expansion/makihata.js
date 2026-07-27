{
  id:"makihata", name_ja:"巻機山", name_en:"Mt. Makihata", region:"越後三山", prefecture:"新潟県・群馬県",
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
}
