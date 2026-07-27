{
  id:"naeba", name_ja:"苗場山", name_en:"Mt. Naeba", region:"上越国境", prefecture:"新潟県・長野県",
  elevation:2145, hyakumeizan:true,
  coords:{lat:36.8459, lon:138.6903}, forecast_elevation:2100,
  grading:{
    ridgeline:2100,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"上信越有数の豪雪地帯。祓川・小赤沢とも山頂直下まで6月中旬頃まで残雪が残ることが多く、無雪期装備での早期入山は雪渓・渡渉に注意。10月下旬以降は初雪の可能性が高い。"
  },
  trailheads:[{
    name:"祓川駐車場（町営駐車場・標高1,268m）",
    access:[
      {mode:"タクシー", line:"ゆざわ魚沼タクシー", from:"JR上越新幹線・上越線 越後湯沢駅",
       duration:"約25分（公式記載なし・要確認）", weekday:"随時（事前予約推奨）", weekend:"随時（登山シーズンの土日祝は予約必須）",
       season:"駐車場までの町道は例年6月上旬〜10月下旬のみ開通（積雪期は通行不可・要確認）", url:"https://www.e-yuzawa.gr.jp/sys/buy_rental_p/yuzawa_uonuma_taxi/", sample:true}
    ]
  },{
    name:"小赤沢三合目登山口（標高1,310m）",
    access:[
      {mode:"バス", line:"湯沢・森宮野原・百ノ木線（南越後観光バス、津南まで乗車）", from:"JR飯山線 森宮野原駅前",
       duration:"津南まで約15分", weekday:"森宮野原駅前発 例: 7:29 / 11:46 / 15:31", weekend:"森宮野原駅前発 例: 8:56 / 11:46 / 15:31 / 17:31",
       season:"通年（年末年始・お盆等は休日ダイヤ）", url:"http://www.vill.sakae.nagano.jp/docs/219.html", sample:true},
      {mode:"デマンド交通", line:"秋山郷線（津南→見玉→小赤沢、予約制）", from:"津南（上記路線バスから乗継）",
       duration:"津南から小赤沢まで約50分", weekday:"津南発 例: 11:25 / 14:10（小赤沢着 例: 12:20 / 15:05）", weekend:"同左（土日祝も運行、16:15発の便は土日祝運休）",
       season:"通年・要予約（前日17時までに電話025-766-2949）。小赤沢バス停から三合目駐車場までは公共交通機関なく、さらに送迎手配が必要（要確認）", url:"http://www.vill.sakae.nagano.jp/docs/219.html", sample:true}
    ]
  }],
  huts:[
    {name:"苗場山頂ヒュッテ（苗場山自然体験交流センター）", elevation:2100, open:"6月1日〜10月25日（予約制）", reservation:"予約専用ダイヤルへの電話のみ（メール・FAX不可）", url:"http://sakae-akiyamago.com/stay/4888/", tel:"080-7183-4024"},
    {name:"和田小屋（祓川ルート5合目）", elevation:1380, open:"夏季は7月中旬〜10月中旬頃（団体貸切限定・完全予約制、最新日程は要問合せ）。冬季はかぐらスキー場のベース施設として12月下旬〜5月上旬営業", reservation:"電話予約制（夏季は団体一棟貸し切りのみ）", url:"https://www.princehotels.co.jp/amuse/wadagoya_summer/", tel:"025-788-9221"}
  ],
  routes:[
    {name:"祓川ルート 往復（かぐらスキー場・和田小屋経由）", stats:"距離 約12.2km（往復）/ 標高差 約880m（累積登り1,220m）/ 登り4:00・下り2:40", level:"中級", note:"新潟県側の標準コース。和田小屋から下ノ芝・中ノ芝・上ノ芝を経て神楽ヶ峰へ。山頂台地は広大な高層湿原と池塘が広がる。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"新潟 山のグレーディング（五十音順）", url:"https://www.pref.niigata.lg.jp/uploaded/attachment/456447.pdf"}},
    {name:"小赤沢三合目コース 往復（秋山郷）", stats:"距離 約9.4km（往復）/ 標高差 約840m（累積登り840m）/ 登り3:30・下り2:40", level:"中級", note:"祓川ルートより短く、最短で山頂に立てる長野県側のコース。ブナ林から山頂湿原への変化が魅力。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング 一覧表", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/2026_grading_list.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。登山道の大半が雪に埋もれ、アイゼン・ピッケルなど雪山装備と経験が必要。",6:"祓川駐車場への道路が開通し山開き（例年6月上旬〜中旬、山頂ヒュッテも6/1営業開始）。残雪の雪渓・渡渉に注意。",7:"ワタスゲ・ニッコウキスゲなど高層湿原の花が見頃に近づく梅雨明け後が狙い目。",8:"池塘と青空が広がる最盛期。日帰りは早出を。",9:"花から草紅葉へ移行。台風接近時は増水・強風に注意。",10:"草紅葉・ナナカマドの紅葉が見頃（中旬頃）。下旬は初雪の可能性、25日で山頂ヒュッテが営業終了。",11:"初冬。積雪の可能性が高く一般登山向きではない。"}
  }
}
