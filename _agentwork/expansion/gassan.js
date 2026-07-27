{
  id:"gassan", name_ja:"月山", name_en:"Mt. Gassan", region:"出羽三山", prefecture:"山形県",
  elevation:1984, hyakumeizan:true,
  coords:{lat:38.549136, lon:140.026971}, forecast_elevation:1900,
  grading:{
    ridgeline:1700,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"出羽三山随一の豪雪地帯。姥沢側は例年7月上旬まで残雪が多く、志津野営場〜牛首間で雪渓歩行になる年もある。羽黒口（弥陀ヶ原）は比較的緩やかだが8月でも雪渓が残ることがある。"
  },
  trailheads:[{
    name:"月山八合目（羽黒口、標高1,380m）",
    access:[
      {mode:"バス", line:"庄内交通「月山八合目線」（鶴岡駅前・羽黒随神門・羽黒山頂 経由）", from:"庄内交通 鶴岡駅前①のりば・エスモールバスターミナル",
       duration:"約2時間（羽黒山頂で月山八合目行きに乗継）",
       weekday:"月山八合目線は主に土曜・日曜・祝日と夏期の指定日のみ運行（平日はほぼ運休）。運行日は鶴岡駅前発 例: 6:03 / 7:03 → 羽黒山頂で乗継 → 月山八合目 着 例: 8:00 / 9:00",
       weekend:"運行日の鶴岡駅前発 例: 6:03 / 7:03 → 月山八合目 着 例: 8:00 / 9:00（羽黒山頂発11:55→月山八合目着12:50、羽黒山頂発14:05→月山八合目着15:00の便もあり）",
       season:"2026年は7月〜9月の指定運行日のみ（庄内交通公式サイトの運行カレンダー要確認。お盆期間8/13〜16は日曜・祝休日ダイヤ）",
       url:"https://www.shonaikotsu.jp/local_bus/t0008_haguro.html", sample:true}
    ]
  },{
    name:"姥沢（志津口・月山ペアリフト下駅、標高約1,150m）",
    access:[
      {mode:"バス", line:"月山志津温泉線（西川町営バス）", from:"西川IC（山交バス・高速バス「山形－鶴岡・酒田線」等の乗継地点）",
       duration:"西川IC〜姥沢 約50分",
       weekday:"西川IC発 例: 8:50 / 11:35 / 14:25 / 16:32（姥沢着 例: 9:39 / 12:25 / 15:15 / 17:23）。一部便は前日・当日予約制のデマンド便（月山観光タクシー☎0237-74-2310）。",
       weekend:"西川IC発 例: 8:50 / 11:35 / 14:25（土日祝は最終便のみ平日と別ダイヤで同じ17:23姥沢着）。下山は姥沢発 西川IC行 例: 10:05 / 12:35 / 14:15 / 16:00。",
       season:"姥沢⇔志津間は2026年4月10日〜10月18日運行。西川IC〜志津間は4/1〜11/30運行だが便数は季節で変動。",
       url:"https://www.town.nishikawa.yamagata.jp/soshiki/chomin/1272.html", sample:true},
      {mode:"リフト", line:"月山ペアリフト（月山観光開発株式会社）", from:"姥沢リフト下駅",
       duration:"約15分（上駅標高1,520m）",
       weekday:"8:00〜16:30運行（上り最終16:15）", weekend:"同左",
       season:"2026年は4月10日〜10月18日運行（9月1日〜3日は秋の設備更新工事のため運休）",
       url:"https://mt-gassan.com/mountain/", sample:true}
    ]
  }],
  huts:[
    {name:"月山佛生池小屋（九合目）", elevation:1743, open:"6月下旬〜9月下旬（2026年は6月末〜9月27日を予定）", reservation:"電話予約制（受付18:00〜19:30、5月上旬より予約受付開始）。メール不可。", url:"https://bussyouike.travel.coocan.jp/", tel:"090-8783-9555"},
    {name:"月山頂上小屋（山頂直下）", elevation:1970, open:"6月下旬〜9月中旬〜下旬", reservation:"電話予約制（シーズン中は090-8781-7731、シーズン外は0235-62-2757）", url:"https://www5c.biglobe.ne.jp/~gassan/index.html/", tel:"090-8781-7731"}
  ],
  routes:[
    {name:"羽黒（弥陀ヶ原）コース 往復", stats:"距離 約10.8km / 標高差 約604m / 登り3:00・下り2:40", level:"初〜中級", note:"弥陀ヶ原の広大な木道と高山植物が魅力。8合目からはなだらかだが、仏生池小屋を過ぎると傾斜が増す。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"A", official:true, src:"やまがた百名山グレーディング（山形県）", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}},
    {name:"姥沢コース 往復（月山ペアリフト利用）", stats:"距離 約6.0km / 標高差 約464m / 登り2:05・下り1:35", level:"初〜中級", note:"リフトで標高1,520mまで上がれるため最短距離で山頂に立てる。牛首から山頂直下は岩場の急登になる。",
     popularity:3, trailhead:1, grade:{stamina:2, skill:"B", official:true, src:"やまがた百名山グレーディング（山形県）", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}},
    {name:"姥ヶ岳ハイキング（月山リフトコース）往復", stats:"距離 約1.2km / 標高差 約150m / 登り0:30・下り0:20", level:"初級", note:"リフト上駅からの入門コース。姥ヶ岳山頂からは月山や鳥海山を一望でき、家族連れにも人気。",
     popularity:2, trailhead:1, grade:{stamina:1, skill:"A", official:true, src:"やまがた百名山グレーディング（山形県）", url:"https://yamagatayama.com/wp-content/uploads/2024/06/yamagata_grading.pdf"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"残雪期。姥沢側は4/10からリフト運行開始だが雪渓が多くアイゼンが必要。8合目までの月山公園線は例年6月上旬まで冬期閉鎖。",
      6:"月山公園線の冬期閉鎖が解除（例年6月上旬）。弥陀ヶ原の雪解けと高山植物が進むが、姥沢側はまだ雪渓が残る。",
      7:"7月1日に月山神社本宮が開山。お花畑が見頃（6月中旬〜8月末）。庄内交通「月山八合目線」バスは7〜9月の指定日（主に土日）のみ運行。",
      8:"夏スキーとお花畑のピーク。お盆期間（8/13〜16）は混雑・特別ダイヤに注意。",
      9:"上旬は花、中旬から紅葉が始まる。月山神社本宮は9月15日頃閉山。9月1日〜3日は月山ペアリフトが設備更新工事で運休。",
      10:"紅葉が見頃（上旬〜中旬）。月山ペアリフト・関連路線バスは10月18日で夏山シーズン終了。下旬は初雪の可能性。"
    }
  }
}
