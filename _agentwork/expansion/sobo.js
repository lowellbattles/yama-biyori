{
  id:"sobo", name_ja:"祖母山", name_en:"Mt. Sobo", region:"祖母・傾・大崩山系", prefecture:"大分県・宮崎県",
  elevation:1756, hyakumeizan:true,
  coords:{lat:32.8281, lon:131.3471}, forecast_elevation:1700,
  grading:{
    ridgeline:1700,
    wind_caution:10, wind_danger:16,
    precip_caution:4, precip_danger:12,
    snow_months:[12,1,2,3],
    snow_note:"九州山地でも冬型が強まると稜線は着氷・樹氷になる。積雪量自体は本州の高山ほど多くないが、岩場・鎖場の凍結と北谷・神原への林道凍結には要警戒。北谷登山口のトイレは凍結防止のため12月上旬〜3月は閉鎖。"
  },
  trailheads:[
    {
      name:"北谷登山口（標高1,113m）",
      access:[
        {mode:"タクシー", line:"神和交通", from:"JR延岡駅・高千穂バスセンター等",
         duration:"約50分（高千穂中心部から）",
         weekday:"予約制・定時運行なし（要事前予約）", weekend:"同左",
         season:"通年（登山口までの道路改良工事は令和8年1月13日終了・通行可。冬期路面凍結、大雨・台風時の通行止めに注意。最新状況は高千穂町公式サイトで要確認）",
         url:"https://www.shinwa-koutsu.com/", sample:true}
      ]
    },
    {
      name:"神原登山口（標高627m・第一駐車場20台）",
      access:[
        {mode:"あいのりタクシー", line:"カモシカ号（ユネスココース）", from:"JR豊後竹田駅",
         duration:"約30分（カモシカ号タケタ公式の案内）",
         weekday:"竹田駅発 例: 7:00 / 9:15、登山口発 例: 15:30 / 17:30（月〜土曜運行）", weekend:"土曜は運行、日曜運休",
         season:"通年（乗車前日15時までの要予約・運賃片道2,000円）", url:"https://www.taketa-businfo.jp/unesco/index.html", sample:true}
      ]
    },
    {
      name:"尾平登山口（標高600m・もみじ屋駐車場15台）",
      access:[
        {mode:"コミュニティバス", line:"長谷川線（豊後大野市コミュニティバス）", from:"JR緒方駅",
         duration:"約1時間13分（尾平鉱山まで直通便のみ）",
         weekday:"緒方駅からの便数・時刻は要確認（尾平鉱山まで直通する便は限られ、途中止まりの便あり — 豊後大野市コミュニティバスの現行時刻表で確認を）", weekend:"土日祝は運休",
         season:"月〜金曜運行（8/6・12/31〜1/3運休）。運賃定額200円", url:"https://www.bungo-ohno.jp/docs/2020092900017/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"祖母山九合目避難小屋", elevation:1650, open:"通年開放（無人・避難小屋。設備・利用可否の詳細は要確認）", reservation:"予約不要（携帯トイレ持参推奨）", url:"", tel:""}
  ],
  routes:[
    {name:"北谷登山口 千間平コース 往復", stats:"距離 約9.7km / 標高差 約640m / 往復5:00（公表合計コースタイム）", level:"中級", note:"稜線歩きが長く展望に優れる北谷側の一般ルート。",
     popularity:2, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.207）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}, sample:true},
    {name:"北谷登山口 風穴コース 往復", stats:"距離 約6.0km / 標高差 約640m / 往復5:30（公表合計コースタイム）", level:"中級", note:"千間平コースより短いが勾配が急。下りでの使用は滑落に注意。",
     popularity:1, trailhead:0, grade:{stamina:2, skill:"C", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.208）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}, sample:true},
    {name:"北谷登山口 千間平→風穴 周回", stats:"距離 約7.8km（編集部概算） / 標高差 約640m / 登り(千間平)目安3:00・下り(風穴)目安2:30（公表往復値からの編集部推定、合計時間の公式値なし）", level:"中級", note:"北谷登山口で最もよく歩かれる周回パターン。勾配の緩い千間平を登り、急な風穴を慎重に下る組み合わせ。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"C", official:false}, sample:true},
    {name:"神原登山口 本登山道 往復", stats:"距離 約8.5km / 標高差 約1,130m / 往復6:42（公表合計コースタイム）", level:"中級", note:"大分県側の一般ルート。国観峠を経由する。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.201）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}, sample:true},
    {name:"尾平登山口 宮原コース 往復", stats:"距離 約10.0km / 標高差 約1,160m / 往復8:24（公表合計コースタイム）", level:"中級", note:"かつての鉱山集落・尾平からの伝統的なルート。黒金山尾根との周回も可能（別ルート・未収録）。",
     popularity:2, trailhead:2, grade:{stamina:4, skill:"B", official:true, src:"祖母・傾・大崩山系 山のグレーディング（10県2山域の日本百名山ルート一覧表 No.203）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}, sample:true}
  ],
  seasonality:{
    best:[4,5,10,11],
    notes:{
      1:"厳冬期。まれに樹氷が見られるが、岩場の凍結と防寒装備に注意。",
      2:"厳冬期。同上。軽アイゼン等の滑り止めを推奨。",
      3:"残雪・路面凍結が残ることがある。林道の冬季通行規制解除時期は要確認。",
      4:"新緑とアケボノツツジ。高千穂側の山開き神事は5月3日。",
      5:"アケボノツツジ・ミツバツツジが見頃。山開き（5/3）以降は登山者が増える。",
      6:"梅雨入り。集中豪雨時は渡渉箇所が増水し危険。増水時は無理せず撤退を。",
      7:"梅雨明け後は好天が続くが、稜線でも真夏日になり得る。水分を多めに携行。",
      8:"台風シーズン。接近時は北谷・神原への林道が通行止めになりやすく、自治体公式サイトで要確認。",
      9:"台風接近に注意。中旬以降は秋の気配。",
      10:"紅葉が始まり、行楽シーズンで登山者・マイカーが増える。",
      11:"紅葉終盤〜初冬。稜線・岩場で凍結が始まる年もある。北谷登山口のトイレは12月上旬で閉鎖。",
      12:"積雪・路面凍結の可能性。北谷への林道は凍結しやすくスタッドレス推奨。"
    }
  }
}
