{
  id:"ishizuchi", name_ja:"石鎚山", name_en:"Mt. Ishizuchi", region:"四国山地", prefecture:"愛媛県",
  elevation:1982, hyakumeizan:true,
  coords:{lat:33.76777, lon:133.115086}, forecast_elevation:1950,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:2, precip_danger:8,
    snow_months:[12,1,2,3,4],
    snow_note:"山頂直下の鎖場（一〜三の鎖）は積雪期に着雪・凍結し滑落事故が多発。石鎚スカイラインは12月1日〜3月31日が冬期閉鎖のため土小屋側からは到達不可。積雪期は成就ルート（ロープウェイ）のみが現実的だが、アイゼン・ピッケル・冬山経験が必須。"
  },
  trailheads:[
    {
      name:"石鎚登山ロープウェイ 山頂成就駅（標高1,300m）",
      access:[
        {mode:"バス", line:"西之川線（せとうちバス）", from:"JR伊予西条駅（西条駅前）",
         duration:"約1時間21分",
         weekday:"西条駅前発 例: 7:10 / 10:00 / 13:10 / 15:50", weekend:"西条駅前発 例: 7:10 / 10:00 / 13:10 / 15:50（土日祝も同ダイヤ）",
         season:"通年運行（2025年10月1日改正ダイヤ）", url:"https://www.setouchibus.co.jp/rosen/pdf/time/13_nishinokawa.pdf", sample:true},
        {mode:"ロープウェイ", line:"石鎚登山ロープウェイ", from:"山麓下谷駅（標高455m）",
         duration:"約8分（通常毎時00・20・40分発、繁忙期は10分毎増発）",
         weekday:"季節により始発・終電が変動。例: 1/2〜4/28・11/4〜12月は8:40〜17:00、7〜8月平日は8:00〜18:00", weekend:"季節により変動。例: GW（4/29〜5/6）は7:40〜18:00、7/1〜7/10のお山開き期間は4:00〜18:00、7〜8月土日祝は7:40〜18:00",
         season:"通年運行。ただし春に定期点検の長期運休あり — 2026年（令和8年）は4/6〜4/24の約3週間全便運休（公式サイト）", url:"https://www.ishizuchi.com/rw-2", sample:true}
      ]
    },
    {
      name:"土小屋（石鎚スカイライン終点、標高1,492m）",
      access:[
        {mode:"マイカー", line:"石鎚スカイライン（愛媛県道石鎚公園線）", from:"国道33号 面河（関門ゲート）",
         duration:"約30分（関門〜土小屋 約17.1km）",
         weekday:"開門時間内のみ通行可。例: 9〜11月・4/1〜4/28は7:00〜18:00、7/11〜8/31は7:00〜20:00、7/1〜7/10（お山開き）は4:00〜20:00", weekend:"平日と同じ開閉門時間（曜日による違いなし）",
         season:"4月1日〜11月30日（12月1日〜3月31日は冬期閉鎖）。時間雨量40mm以上・連続雨量200mm以上等の異常気象時も通行止め。路線バスの定期運行なし。", url:"https://www.pref.ehime.jp/page/1209.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"石鎚神社頂上山荘", elevation:1974, open:"5月1日〜11月3日（予約受付期間は1月20日〜11月3日）", reservation:"電話予約優先（メールフォームは宿泊10日前まで）。宿泊費はチェックイン時に現金前払い。", url:"https://sanso.ishizuchisan.jp/reserve", tel:"080-1998-4591"},
    {name:"国民宿舎石鎚", elevation:1492, open:"4月初旬〜11月（冬季休館）", reservation:"電話予約のみ", url:"https://ishizuchikanko.com/ishizuchi_hotel/", tel:"0897-53-0005"},
    {name:"土小屋白石ロッジ", elevation:1492, open:"4月末〜11月末（石鎚スカイラインの積雪状況により変動）※スタッフ不足のため現在新規予約休止中・代替は国民宿舎石鎚を案内", reservation:"電話予約のみ（受付8:00〜18:00、現在新規受付停止）", url:"https://ishizuchikanko.com/shiraishilodge/", tel:"0897-53-0007"}
  ],
  routes:[
    {name:"成就ルート（八丁坂・夜明峠経由）往復", stats:"距離 約8.5km（往復）/ 標高差 約690m / 登り3:00・下り2:15", level:"中級", note:"試しの鎖・一の鎖・二の鎖・三の鎖があり、いずれも巻き道（迂回路）あり。弥山から真の最高点・天狗岳へは岩稜を往復約15〜30分、鎖場より難度が高いので無理をしない。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.191）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"山頂成就駅", to:"成就社", up:"0:25", down:"0:20"},
       {from:"成就社", to:"夜明峠", up:"1:15", down:"0:55"},
       {from:"夜明峠", to:"弥山山頂", up:"1:20", down:"1:00"}
     ], sample:true},
    {name:"土小屋ルート往復", stats:"距離 約9.2km（往復）/ 標高差 約480m / 登り2:10・下り1:38", level:"初級〜中級", note:"岩黒山・筒上山を望む稜線歩きが気持ちよい定番コース。山頂直下で成就ルートと合流し三の鎖・迂回路を経て弥山へ。石鎚スカイライン冬期閉鎖中（12〜3月）は土小屋へ到達不可。",
     popularity:3, trailhead:1, grade:{stamina:2, skill:"B", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.193）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"},
     segments:[
       {from:"土小屋", to:"夜明峠", up:"1:15", down:"0:53"},
       {from:"夜明峠", to:"弥山山頂", up:"0:55", down:"0:45"}
     ], sample:true},
    {name:"縦走 石鎚山（成就⇔土小屋）", stats:"距離 約8.8km（片道）/ 標高差 登り約830m・下り約620m / 登り2:40・下り2:00", level:"中級", note:"山頂を挟んで成就ルートと土小屋ルートを結ぶ縦走。マイカー利用時は駐車地点の回収が課題（西之川⇔土小屋間はタクシー利用者が多い）。逆コース（土小屋→成就）も所要時間はほぼ同じ。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.192）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"周回 土小屋（十字分岐・御塔谷）", stats:"距離 約14.3km（周回）/ 標高差 累積登り・下りとも約1,480m / 登り3:00・下り2:48", level:"中級", note:"十字分岐から御塔谷を下る周回路。渡渉・岩場があり土小屋往復より脚力が必要。増水時は御塔谷を避け往路（夜明峠経由）を戻る判断を。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"C", official:true, src:"石鎚山系 山のグレーディング（日本百名山ルート一覧表 No.194）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[5,6,9,10],
    notes:{1:"厳冬期。ロープウェイは通年運行だが山頂部は本格的な雪山でアイゼン・ピッケル・冬山経験が必須。土小屋へは石鎚スカイライン冬期閉鎖のため到達不可。",2:"積雪最盛期。成就ルートも山頂直下は雪山装備が必須。",3:"残雪期。下旬から雪解けが進むが山頂直下の鎖場周辺はまだ危険。",4:"1日に石鎚スカイラインが開通するが山頂部にはまだ残雪あり。下旬から本格シーズン入り。",5:"新緑とアケボノツツジが美しい。大型連休は大混雑しロープウェイ待ち時間が長くなりやすい。",6:"梅雨入り前後。梅雨の晴れ間を狙うと人が少なく快適。",7:"1〜10日はお山開き大祭（ロープウェイ早発）。海の日連休も大混雑。夏本番は午後の雷雨・熱中症に注意。",8:"盛夏。標高のわりに蒸し暑い。午後の雷雨に備え早出・早着を心がける。",9:"台風シーズン。石鎚スカイラインは時間雨量40mm等の基準で通行止めになることがある。",10:"紅葉最盛期（例年上旬〜中旬が見頃）。行楽シーズンで大混雑、マイカーは早着推奨。",11:"紅葉終盤〜初冬。石鎚スカイラインは30日で冬期閉鎖、土小屋への到達は月末まで。",12:"1日から石鎚スカイライン冬期閉鎖。ロープウェイ側のみアクセス可能で、積雪・凍結に厳重注意。"}
  }
}
