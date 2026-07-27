{
  id:"daisen", name_ja:"大山（伯耆大山）", name_en:"Mt. Daisen (Hoki-Daisen)", region:"中国山地・大山", prefecture:"鳥取県",
  elevation:1729, hyakumeizan:true,
  coords:{lat:35.3712, lon:133.5432}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"日本海側気候の豪雪の山。冬は数mの積雪があり大山周辺はスキー場が並ぶ。夏山登山道の上部は4月頃まで残雪が残る年があり、11月中旬以降は根雪になりやすい。"
  },
  trailheads:[
    {
      name:"博労座駐車場・南光河原駐車場（標高約770m、夏山登山道口）",
      access:[
        {mode:"バス", line:"本宮・大山線（観光道路経由、日本交通）", from:"JR米子駅",
         duration:"約50分",
         weekday:"米子駅発 例: 7:20 / 9:30 / 14:00 / 15:20 / 16:50 / 18:10", weekend:"米子駅発 例: 9:30 / 14:00 / 15:20 / 16:50 / 18:10（早朝7:20便は平日のみ運行の可能性、要確認）",
         season:"通年運行（積雪時は遅延・迂回の場合あり）", url:"https://www.nihonkotsu.jp/bus_local/yonago/index.html", sample:true},
        {mode:"車", line:"米子自動車道 溝口IC・山陰道 米子東ICから県道経由", from:"溝口IC／米子東IC",
         duration:"約20〜25分（約10〜12km）", weekday:"随時", weekend:"随時",
         season:"通年（博労座駐車場600台・年中無休。冬季は積雪・チェーン規制に注意）", url:"https://tourismdaisen.com/about_daisen/access/", sample:true}
      ]
    },
    {
      name:"桝水高原 天空リフト山麓駅（標高約760m、ユートピアコース登山口）",
      access:[
        {mode:"リフト", line:"天空リフト（大山ますみず高原リフト・スノーパーク）", from:"桝水高原リフト山麓駅",
         duration:"片道約8分（山頂展望台 標高900mまで、標高差140m）", weekday:"9:00〜17:00の間運行", weekend:"同左",
         season:"4月〜11月中旬（グリーンシーズン営業。2026年の正確な運行開始・終了日は要確認）", url:"https://www.masumizu.net/lift.html", sample:true},
        {mode:"車", line:"米子自動車道 溝口ICから県道45号経由", from:"溝口IC",
         duration:"約20分", weekday:"随時", weekend:"随時",
         season:"通年（無料駐車場250台。冬季は積雪に注意）", url:"https://www.masumizu.net/access.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"大山頂上避難小屋（弥山山頂、無人・宿泊は緊急時のみ）", elevation:1700, open:"通年開放（トイレは例年4月下旬〜5月上旬に開設、10月下旬〜11月上旬に閉鎖）", reservation:"—（緊急時以外の宿泊利用は自粛要請）", url:"https://www.pref.tottori.lg.jp/175622.htm", tel:""},
    {name:"六合目避難小屋（無人・携帯トイレブースのみ）", elevation:1350, open:"通年開放", reservation:"—", url:"", tel:""},
    {name:"元谷避難小屋（無人・行者コース上）", elevation:872, open:"通年開放", reservation:"—", url:"", tel:""}
  ],
  routes:[
    {name:"夏山登山道～行者コース 周回（弥山）", stats:"距離 約8.2km（周回）/ 標高差 約930m / 登り3:00・下り2:30", level:"中級", note:"大山を代表する定番ルート。頂上は弥山（1,709m）まで — 剣ヶ峰（1,729m）への稜線は崩落のため縦走禁止（三角点周辺も立入禁止）。8合目から先は木道整備区間で、崩落を防ぐ「一木一石運動」（登山者が石を一つ山頂へ運ぶ）の対象区域。下山は元谷を経て大神山神社奥宮へ抜けるのが定番。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false},
     segments:[
       {from:"博労座駐車場", to:"行者谷分かれ", up:"1:10"},
       {from:"行者谷分かれ", to:"六合目避難小屋", up:"0:20"},
       {from:"六合目避難小屋", to:"弥山山頂", up:"1:30"},
       {from:"弥山山頂", to:"六合目避難小屋", up:"0:55"},
       {from:"六合目避難小屋", to:"大神山神社奥宮（元谷経由）", up:"1:05"},
       {from:"大神山神社奥宮", to:"博労座駐車場", up:"0:30"}
     ], sample:true},
    {name:"ユートピアコース（桝水高原→象ヶ鼻）", stats:"距離 約4km（片道）/ 標高差 約650m / 登り2:30・下り2:00", level:"上級", note:"大山北壁と三鈷峰の大展望が魅力の中〜上級ルート。上・中宝珠越を経てユートピア避難小屋（水・トイレなし）、さらに象ヶ鼻まで。7月下旬〜8月上旬はお花畑が見頃。象ヶ鼻から先、剣ヶ峰方面への縦走路は崩落のため通行禁止。「砂すべり」は豪雨による崩落が進み危険なため利用は勧められていない。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{4:"残雪期。夏山登山道の上部にはまだ雪が残る年があり、軽アイゼンが有効な場合も。頂上避難小屋のトイレは下旬〜5月上旬に順次開設。",5:"例年ゴールデンウィーク明けに大山夏山開き。残雪の状況を要確認。",6:"梅雨入り。ブナの新緑が美しいが登山道は滑りやすい。",7:"本格的な夏山シーズン。下旬からユートピアコースのお花畑が見頃に。登山口では「大山入山協力金」への協力を呼びかけ中。",8:"盛夏。標高が低い区間は日中の暑さに注意。夕立・雷に警戒。お盆期間は麓のバスが土日祝ダイヤで運休便あり。",9:"台風シーズン。秋晴れの日を狙いたい。",10:"紅葉のベストシーズン（中旬〜下旬）。大山寺・南光河原周辺が特に有名で駐車場が混雑する。",11:"初冬。中旬以降は天空リフトが運休、積雪・凍結が始まる。"}
  }
}
