{
  id:"ryokami", name_ja:"両神山", name_en:"Mt. Ryokami", region:"奥秩父", prefecture:"埼玉県",
  elevation:1723, hyakumeizan:true,
  coords:{lat:36.0234, lon:138.8413}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:2, precip_danger:8,
    snow_months:[12,1,2,3,4],
    snow_note:"標高は1,723mと低いが山頂直下は北面の岩稜・鎖場で日照が乏しく、根雪や凍結が3月頃まで残ることがある。奥秩父の低山ゆえ雪より雨に弱く、濡れた鎖での滑落事故が多発しているため無雪期でも雨量基準は厳しめに設定。"
  },
  trailheads:[
    {
      name:"日向大谷口（両神山荘前・標高約640m）",
      access:[
        {mode:"バス", line:"日向大谷・三峰口線（小鹿野町営バス）", from:"三峰口駅",
         duration:"約1時間（薬師の湯・両神庁舎前経由）",
         weekday:"三峰口駅発 例: 7:48 / 10:40 / 13:40 / 17:37（日向大谷口まで直通する便と両神庁舎前止まりの便があり要確認）", weekend:"土曜・日曜・祝日も平日と同じ時刻",
         season:"通年", url:"https://www.town.ogano.lg.jp/cms/wp-content/uploads/2025/03/hinataooyamitumineguchisaen.pdf", sample:true},
        {mode:"バス", line:"西武秩父駅線→日向大谷・三峰口線（小鹿野町営バス、薬師の湯で乗換）", from:"西武秩父駅",
         duration:"約1時間25分（薬師の湯で乗換）",
         weekday:"西武秩父駅発 例: 8:23 → 薬師の湯 9:09着／9:13発 → 日向大谷口 9:48着", weekend:"土曜・日曜・祝日も平日と同じ時刻",
         season:"通年", url:"https://www.town.ogano.lg.jp/cms/wp-content/uploads/2025/04/choueijikoku.seibuchichibuekisen.pdf", sample:true}
      ]
    },
    {
      name:"上落合橋（八丁峠コース登山口・標高約1,140m）",
      access:[
        {mode:"車", line:"路線バスなし。金山志賀坂線（森林管理道）沿い", from:"国道299号 志賀坂トンネル手前",
         duration:"要確認（自家用車のみ。駐車スペース5〜6台・トイレなし）",
         weekday:"要確認", weekend:"要確認",
         season:"冬期通行止め（例年12月上旬〜4月下旬、志賀坂峠〜上落合橋間）。【2026年7月時点】路体崩落により金山志賀坂線は期間未定で終日通行止めのため登山口に到達不可。加えてツキノワグマ対策のため上落合橋登山口〜両神山山頂間は2026年6月4日から当面の間入山禁止。再開は埼玉県・小鹿野町の最新情報を要確認", url:"https://www.pref.saitama.lg.jp/soshiki/b0504/tozanjoho/tsukokise/kamiotiaibasi.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"両神山荘（民宿・日向大谷口）", elevation:640, open:"通年（要予約）", reservation:"電話予約", url:"", tel:""},
    {name:"清滝小屋（避難小屋・無人）", elevation:1300, open:"通年開放（無人・トイレ設備の一部が使用不可の場合あり）", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"日向大谷口 表参道 往復", stats:"距離 要確認 / 標高差 約1,100m / 往復 約7.4時間（小鹿野町観光協会調べ）", level:"上級", note:"清滝小屋から山頂にかけて鎖場が連続。過去1年で滑落事故2件・転倒事故2件が発生しており（小鹿野町観光協会 山岳情報・2026年7月参照）、濡れた鎖は特に滑りやすい。三点支持を徹底し鎖に頼りすぎないこと。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"C", official:false}},
    {name:"八丁峠（上落合橋）コース 往復", stats:"標高差 約580m / 距離・時間 要確認（鎖場が連続する岩稜ルート）", level:"上級", note:"【2026年7月現在 通行不可】金山志賀坂線の路体崩落で登山口まで到達不可。加えてツキノワグマ対策のため上落合橋登山口〜山頂間が2026年6月4日から入山禁止（当面の間）。再開時期未定のため出発前に必ず埼玉県・小鹿野町の最新情報を確認すること。通行可能な時期も鎖場30箇所以上が連続する健脚者向けルート。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"D", official:false}}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{4:"中旬からミツバツツジ。残雪はほぼないが朝晩の冷え込みと霜に注意。",5:"中旬にニリンソウが見頃。ゴールデンウィーク後が狙い目。",6:"梅雨で鎖場が濡れやすく、滑落事故が増える時期。無理をしない。",7:"蒸し暑く樹林帯主体で展望に恵まれにくい。クマの目撃情報にも注意し熊鈴を携行。",9:"残暑が落ち着き始め行動しやすくなる。",10:"紅葉が始まり行楽シーズンでバスが混み合う日も。",11:"上旬が紅葉の見頃。中旬以降は霜・凍結に注意。",12:"八丁峠・志賀坂峠方面の林道が冬期通行止めに入る（例年12月上旬〜）。"}
  }
}