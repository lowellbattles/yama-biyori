{
  id:"warusawa", name_ja:"悪沢岳（荒川東岳）", name_en:"Mt. Warusawa (Arakawa-Higashidake)", region:"南アルプス南部", prefecture:"静岡県",
  elevation:3141, hyakumeizan:true,
  coords:{lat:35.5006, lon:138.1822}, forecast_elevation:3050,
  grading:{
    ridgeline:3050,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"千枚小屋〜中岳避難小屋間の稜線は森林限界を超え、6月上旬まで雪渓や凍結が残る。エスケープ路がほとんどない行程のため、荒天時は無理に進まず小屋で停滞する判断が重要。"
  },
  trailheads:[
    {
      name:"畑薙第一ダム夏期臨時駐車場（マイカーはここまで）",
      access:[
        {mode:"バス（夏季季節運行・要予約）", line:"南アルプス登山線（しずてつジャストライン）", from:"JR静岡駅前",
         duration:"約3時間20分（白樺荘経由）",
         weekday:"静岡駅前発 例: 10:00（白樺荘13:10・畑薙夏期臨時駐車場13:20着）／復路 畑薙発14:30（白樺荘14:40・静岡駅前17:50着）", weekend:"同上（運行期間中は毎日運行）",
         season:"2026年7月16日(木)〜8月16日(日)・毎日運行（1日1往復のみ、要事前予約・乗車前日19:00までに手続き）", url:"https://www.justline.co.jp/news/20260611/22914/", sample:true},
        {mode:"タクシー（相乗り・要予約）", line:"南アルプス登山送迎便（千代田タクシー）", from:"静岡駅北口 等",
         duration:"約3時間半", weekday:"要問合せ（相乗り便は運行日・時刻が変動）", weekend:"要問合せ",
         season:"登山シーズン中（要事前予約）", url:"https://www.chiyodataxi.com/travel-taxi/%E5%8D%97%E3%82%A2%E3%83%AB%E3%83%97%E3%82%B9%E7%99%BB%E5%B1%B1%E9%80%81%E8%BF%8E%E4%BE%BF-%E7%9B%B8%E4%B9%97%E3%82%8A/", sample:true}
      ]
    },
    {
      name:"椹島（さわらじま）ロッヂ（標高1,120m・一般車進入不可）",
      access:[
        {mode:"送迎バス（対象山小屋の宿泊者専用・要予約）", line:"特種東海フォレスト送迎バス（畑薙〜椹島）", from:"畑薙第一ダム夏期臨時駐車場",
         duration:"約1時間10分",
         weekday:"畑薙発 例: 7:30・15:00（椹島8:40・16:10着）／椹島発 例: 6:10・10:30・13:00（畑薙7:20・11:40・14:10着）", weekend:"同上（7/16〜8/31は毎日、9/1〜10/12は日祝運行・平日は月〜土運行）",
         season:"2026年7月11日〜10月12日（4/26〜7/10・10/13以降は宿泊予約時に個別調整）。※椹島ロッヂ・千枚小屋・荒川小屋・中岳避難小屋など対象施設への1泊以上の宿泊者限定、テント泊のみは対象外。往復無料（宿泊料に含む）。2026年6月26〜27日の大雨で東俣林道の路肩が崩落し一時運休したが、仮復旧により7/9から予約受付を再開。悪天候・林道状況により運休する場合あり。", url:"https://www.t-forest.com/alpsinfo/bus/", sample:true}
      ]
    },
    {
      name:"鳥倉登山口（越路・標高約1,630m）",
      access:[
        {mode:"バス（夏季季節運行）", line:"南アルプス登山バス 鳥倉線（伊那バス）", from:"JR飯田線 伊那大島駅前",
         duration:"約1時間45分",
         weekday:"伊那大島駅前発 例: 6:45／12:10（鳥倉登山口着8:30／13:55）", weekend:"同上（運行期間中は毎日運行）",
         season:"2026年7月18日(土)〜8月30日(日)の毎日", url:"https://www.ibgr.jp/general-route/torikura_off2/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"千枚小屋", elevation:2600, open:"2026年7月11日〜10月11日（予定）", reservation:"Web予約優先（特種東海フォレスト予約センター／まいたび）・完全予約制ではないが事前予約推奨", url:"https://www.t-forest.com/alpsinfo/reservation/", tel:"0547-46-4717"},
    {name:"荒川小屋", elevation:2600, open:"2026年7月11日〜10月11日（予定）", reservation:"Web予約優先（特種東海フォレスト予約センター／まいたび）", url:"https://www.t-forest.com/alpsinfo/reservation/", tel:"0547-46-4717"},
    {name:"中岳避難小屋（夏期のみ管理人常駐）", elevation:3080, open:"2026年7月11日〜9月22日（予定・夏期以外は無人避難小屋）", reservation:"予約不要（当日受付）", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"}
  ],
  routes:[
    {name:"【周】千枚岳→悪沢岳（荒川東岳）→荒川中岳・前岳→赤石岳（椹島発着）", stats:"距離 約27.4km（周回）/ 標高差 登り約3,290m・下り約3,290m / 公表コースタイム合計 約19時間48分（2泊3日が標準）", level:"上級", note:"千枚岳・悪沢岳・赤石岳を一気に踏む南アルプス南部の代表的周回。千枚小屋・荒川小屋（または中岳避難小屋）・赤石小屋を利用した2泊3日が標準。マイカー規制のため東海フォレスト送迎バスの利用が前提。",
     popularity:3, trailhead:1, grade:{stamina:8, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.168）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】千枚岳・悪沢岳（荒川東岳）周回（二軒小屋発着）", stats:"距離 約14.7km（周回）/ 標高差 登り約1,970m・下り約1,970m / 公表コースタイム合計 約12時間30分（1泊2日が標準）", level:"上級", note:"二軒小屋ロッヂを起点に千枚岳・悪沢岳を周回する比較的短いルート。ただし二軒小屋ロッヂは東俣林道の改良工事に伴い一般営業を休止中（2026年時点）。再開時期は運営元の十山株式会社（TEL 0547-36-5160）へ要確認。",
     popularity:1, trailhead:null, grade:{stamina:5, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.167）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【縦】荒川岳前岳→悪沢岳（荒川東岳）縦走（鳥倉→椹島）", stats:"距離 約32.4km / 標高差 登り約3,200m・下り約3,710m / 公表コースタイム合計 約20時間30分（2〜3泊が前提）", level:"上級", note:"鳥倉登山口から三伏峠・塩見岳方面の稜線を経て荒川前岳・悪沢岳（東岳）へ縦走し椹島へ下る大縦走。長野・静岡の県境をまたぎ行程が長くエスケープが少ない上級者向けルート。",
     popularity:2, trailhead:2, grade:{stamina:9, skill:"D", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.166）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"残雪期。山小屋・送迎バスとも営業前で一般登山には不向き。",6:"梅雨。山小屋・送迎バスは7/11開始前で、稜線には残雪が残る。",7:"7/11から山小屋・送迎バスが営業開始（2026年は6月末の大雨による林道被害からの仮復旧を経て7/9に予約受付再開）。千枚岳周辺のお花畑が見頃に向かう。",8:"盛夏で登山バス・送迎バスとも運行がフル体制。午後の雷雨と土砂災害に注意。",9:"上旬〜中旬は盛夏の延長、下旬から紅葉が始まる。9/24〜10/9頃は一部山小屋・送迎バスが予約不要（当日受付）になる年が多い。",10:"紅葉ピークだが山小屋（10/11予定）・送迎バス（10/12予定）とも中旬に営業終了。以降はマイカー規制のみ残りアクセスが極端に難しくなる。初雪にも注意。"}
  }
}
