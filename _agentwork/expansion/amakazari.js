{
  id:"amakazari", name_ja:"雨飾山", name_en:"Mt. Amakazari", region:"頸城山塊", prefecture:"長野県・新潟県",
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
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"新潟 山のグレーディング", url:"https://www.pref.niigata.lg.jp/site/opendata/1356812341916.html"},
     sample:true}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{6:"山開き直後。雨飾高原キャンプ場の営業開始（例年6月中旬）に合わせて登山道が整備される。稜線には残雪が残ることがある。",7:"ブナ林の緑と高山植物（シラネアオイなど）が見頃。梅雨明け前後は荒菅沢の増水・徒渉に注意。",8:"盛夏の定番シーズン。荒菅沢の涼と布団菱の岩壁の展望が魅力。午後の雷雨に注意。",9:"下旬から紅葉と混雑が始まる。例年9月下旬から土日祝は交通規制（駐車場満車時に登山口より上部が通行止め）の対象期間に入る。",10:"紅葉最盛期（布団菱の錦繍が名物）で最混雑。笹平直下や山頂付近で長い待ち時間が発生することも。土日祝は交通規制と秋山登山相談所の開設あり。中旬以降は初雪の可能性。",11:"初雪・積雪期入り。雨飾高原キャンプ場は10月末で閉鎖、糸魚川側の登山タクシーも10月中旬で運行終了となり、アクセスが大きく制限される。"}
  }
}
