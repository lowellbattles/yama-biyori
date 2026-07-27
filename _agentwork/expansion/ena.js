{
  id:"ena", name_ja:"恵那山", name_en:"Mt. Ena", region:"中央アルプス", prefecture:"長野県・岐阜県",
  elevation:2191, hyakumeizan:true,
  coords:{lat:35.4431, lon:137.5979}, forecast_elevation:2150,
  grading:{
    ridgeline:2100,
    wind_caution:12, wind_danger:18,
    precip_caution:3, precip_danger:8,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"山頂まで深い樹林に覆われ風自体は比較的穏やかだが、例年11月上旬に初冠雪、12月から根雪。残雪は日陰で5月まで残ることがあり、積雪期はアイゼン・チェーンスパイク必携。中央アルプス最南端の深い山でエスケープが乏しいため、悪天候時は無理をしない。"
  },
  trailheads:[
    {
      name:"広河原登山口〈峰越林道ゲート〉（標高1,135m）",
      access:[
        {mode:"タクシー", line:"信南交通タクシー（タク配管理所）", from:"JR飯田線 飯田駅 または 昼神温泉",
         duration:"飯田駅から約50分・昼神温泉から約30分（要確認）",
         weekday:"予約制（発着時刻の定めなし）", weekend:"予約制（発着時刻の定めなし）",
         season:"林道通行可能期間のみ。2026年7月現在、大雨により登山口手前の橋が破損し通行止め・復旧見込み未定（阿智村商工観光課 0265-43-2220で要確認）",
         url:"https://www.shinnan.co.jp/", sample:true}
      ]
    },
    {
      name:"黒井沢登山口（標高1,175m）",
      access:[
        {mode:"タクシー", line:"近鉄東美タクシー中津川営業所 / 東鉄タクシー中津川配車センター", from:"JR中央本線 中津川駅",
         duration:"約40分（要確認）",
         weekday:"予約制", weekend:"予約制",
         season:"令和2年7月豪雨による林道法面崩落のため登山口手前で通行止めが続き、復旧のめどは立っていない（中津川市農林整備課 0573-72-2112で要確認）",
         url:"https://www.kintetsu-taxi.co.jp/toubi/", sample:true}
      ]
    },
    {
      name:"前宮登山口（標高740m）",
      access:[
        {mode:"バス", line:"川上線 恵那山ウェストン公園前ゆき（北恵那交通）", from:"JR中央本線 中津川駅前",
         duration:"バス約23分＋ウェストン公園前バス停から登山口まで徒歩約30分（現地案内板で要確認）",
         weekday:"中津川駅前発 例: 7:00 / 8:12 / 13:10 / 15:55 / 16:35 / 17:00（2025年10月1日改正）",
         weekend:"中津川駅前発 例: 8:12 / 13:10 / 16:45（2025年10月1日改正・休日ダイヤ）",
         season:"バスは通年運行だが、前宮ルートの登山道は以前からの崩落個所により通行止め（中津川観光協会で要確認）",
         url:"https://kitaena.co.jp/timetable/", sample:true}
      ]
    },
    {
      name:"神坂峠登山口（標高1,567m）",
      access:[
        {mode:"タクシー", line:"近鉄東美タクシー中津川営業所 / 信南交通タクシー", from:"JR中央本線 中津川駅 または 昼神温泉",
         duration:"中津川駅から約50分（要確認）",
         weekday:"予約制", weekend:"予約制",
         season:"アクセス林道（大谷霧ヶ原線・強清水〜萬岳荘）は例年12月1日〜4月中旬冬季閉鎖。2026年は安全対策工事による通行止め（令和7年8月1日〜令和8年4月24日予定）を経て解除済み。積雪・落石時は要確認",
         url:"https://www.kintetsu-taxi.co.jp/toubi/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"恵那山頂避難小屋（無人）", elevation:2140, open:"通年（無人開放・避難小屋のため予約不要）", reservation:"—", url:"", tel:""},
    {name:"萬岳荘（富士見台高原・神坂峠側の拠点小屋）", elevation:1690, open:"グリーンシーズン 4月29日〜11月24日／ウィンターシーズン 11月23日〜翌4月末頃", reservation:"完全予約制（小屋泊・テント泊・車中泊とも）", url:"https://bangakusou.wixsite.com/home", tel:"070-2667-6618"}
  ],
  routes:[
    {name:"広河原（峰越林道ゲート）往復", stats:"距離 約11.8km（往復）/ 標高差 累積約1,170m（登り・下りとも）/ 合計コースタイム 6:00（上り下り内訳の公表なし）", level:"中級", note:"最も歩かれてきた表口ルート。峰越林道ゲートから林道歩き＋登山道で稜線へ。2026年7月現在、大雨で登山口手前の橋が破損し通行止め・復旧見込み未定（阿智村商工観光課0265-43-2220で要確認）。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.146）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"黒井沢往復", stats:"距離 約15.0km（往復）/ 標高差 累積約1,330m / 合計コースタイム 7:30", level:"中級", note:"沢沿いを詰めて主稜線の恵那山頂避難小屋へ合流。令和2年7月豪雨による林道法面崩落で登山口までの林道が通行止めのまま復旧のめどが立っていない（中津川市農林整備課0573-72-2112で要確認）。",
     popularity:1, trailhead:1, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.147）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"前宮往復", stats:"距離 約13.3km（往復）/ 標高差 累積約1,530m / 合計コースタイム 11:24", level:"上級", note:"恵那神社ゆかりの表参道で最も歴史がある道。合計コースタイムが11時間超と長く日帰りは厳しいため恵那山頂避難小屋での1泊が前提。登山道に以前からの崩落個所があり通行止め（中津川観光協会で要確認）。",
     popularity:1, trailhead:2, grade:{stamina:5, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.148）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"神坂峠往復（大判山経由）", stats:"距離 約12.6km（往復）/ 標高差 累積約1,340m / 合計コースタイム 8:42", level:"中級", note:"大判山を経由して主稜線を辿るコース。2026年7月現在、4本の公表ルートの中で唯一通行可能。アクセス林道（大谷霧ヶ原線）は例年12月〜4月中旬が冬季閉鎖。前泊は萬岳荘が便利。",
     popularity:3, trailhead:3, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.149）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[5,6,7,9,10],
    notes:{
      4:"神坂峠側アクセス林道の冬季閉鎖が例年4月中旬に解除される。残雪や融雪によるぬかるみに注意。",
      5:"新緑の時期。林道解除直後は落石・倒木が残ることがある。日陰には残雪が残ることも。",
      6:"梅雨入り。沢沿いの黒井沢ルートは増水しやすい（現在通行止め）。",
      7:"梅雨明け後が狙い目。樹林帯の登りは蒸し暑く、稜線での雷にも注意。",
      8:"盛夏。長時間樹林帯を歩くため水分・塩分を多めに。",
      9:"残暑が落ち着き歩きやすくなる時期。",
      10:"紅葉の季節。神坂峠〜大判山の稜線からの展望が良い。",
      11:"例年11月上旬に初冠雪の便り。アクセス林道は12月1日から冬季閉鎖に入る。",
      12:"積雪期。神坂峠側の林道が冬季閉鎖となり車でのアプローチができなくなる。"
    }
  }
}
