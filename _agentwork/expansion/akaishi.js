{
  id:"akaishi", name_ja:"赤石岳", name_en:"Mt. Akaishi", region:"南アルプス南部", prefecture:"静岡県・長野県",
  elevation:3121, hyakumeizan:true,
  coords:{lat:35.4613, lon:138.1575}, forecast_elevation:3050,
  grading:{
    ridgeline:3050,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:9,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"南アルプス南部の深い山域で、椹島から稜線に出るまでの行程が長くエスケープルートが乏しい。小赤石岳〜赤石岳の主稜線は森林限界上で風を遮るものがなく、残雪は例年6月頃までに消えるが、悪天候時は停滞・撤退の判断を早めに。"
  },
  trailheads:[{
    name:"椹島（さわらじま）登山口・椹島ロッヂ（標高1,120m）",
    access:[
      {mode:"バス（夏季限定・要予約）", line:"南アルプス登山線（しずてつジャストライン）", from:"JR静岡駅",
       duration:"約3時間30分",
       weekday:"静岡駅前 10:00発（畑薙臨時駐車場 14:30発）", weekend:"同左（運行期間中は毎日運行）",
       season:"2026年は7月16日〜8月16日のみ運行（要事前予約・乗車前日19:00までに手続き）", url:"https://www.justline.co.jp/news/20260611/22914/", sample:true},
      {mode:"乗合タクシー", line:"南アルプス登山送迎便（千代田タクシー）", from:"JR静岡駅",
       duration:"約3時間",
       weekday:"事前予約制。通常便8,500円/名・椹島便11,000円/名（片道・公式サイト2026年現在）", weekend:"同左（事前予約制）",
       season:"夏山シーズン運行、詳細・運行日は要確認", url:"https://www.chiyodataxi.com/travel-taxi/%E5%8D%97%E3%82%A2%E3%83%AB%E3%83%97%E3%82%B9%E7%99%BB%E5%B1%B1%E9%80%81%E8%BF%8E%E4%BE%BF-%E7%9B%B8%E4%B9%97%E3%82%8A/", sample:true},
      {mode:"自家用車（畑薙第一ダムまで）", line:"新東名高速・新静岡IC経由 県道189号・県道60号等", from:"新静岡IC",
       duration:"約2時間30分",
       weekday:"随時", weekend:"随時",
       season:"通年（市道閑蔵線は法面復旧工事に伴う時間帯通行規制・夜間通行止めの区間あり、静岡市道路通行規制情報で要確認）。畑薙第一ダムより先の東俣林道は一般車両通行不可、椹島へは送迎バス利用が必須", url:"https://www.t-forest.com/alpsinfo/access/", sample:true},
      {mode:"送迎バス（宿泊者専用・要予約）", line:"特種東海フォレスト送迎バス（畑薙第一ダム⇔椹島ロッヂ）", from:"畑薙夏期臨時駐車場",
       duration:"約70分",
       weekday:"畑薙発 例: 7:30 / 15:00　椹島発 例: 6:10 / 10:30 / 13:00", weekend:"同左",
       season:"2026年は7月11日〜10月12日運行（7/11〜9/23は事前予約必須、9/24〜10/9は予約不要で当日乗車可）。特種東海フォレスト運営の山小屋・ロッヂに1泊以上宿泊する人限定、テント泊のみの行程は対象外", url:"https://www.t-forest.com/alpsinfo/bus/", sample:true}
    ]
  }],
  huts:[
    {name:"赤石小屋", elevation:2500, open:"2026年7月11日〜10月11日（予定）", reservation:"事前予約制（Web予約は6月1日受付開始、予約なし宿泊は+1,000円）。水場・トイレあり。", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"},
    {name:"赤石岳避難小屋（山頂直下）", elevation:3090, open:"2026年7月11日〜9月22日（予定）", reservation:"事前予約制（特種東海フォレストが窓口）。素泊まりのみ・食事提供なし・水場なし、トイレあり。収容約10人。", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"},
    {name:"百間洞山の家", elevation:2560, open:"2026年7月11日〜8月31日（2026年は改修工事のため小屋泊の営業期間を短縮・予定）", reservation:"事前予約制（Web予約は6月1日受付開始）。水場・トイレあり、テント幕営可（別料金）。", url:"https://www.t-forest.com/alpsinfo/climber/lodgeinfo/", tel:"0547-46-4717"}
  ],
  routes:[
    {name:"赤石岳（椹島）大倉尾根（東尾根）往復", stats:"距離 16.9km（往復）/ 累積標高差 登り2,550m・下り2,550m / 合計コースタイム14.8時間（標準1泊2日、赤石小屋泊が一般的）", level:"上級", note:"椹島から赤石小屋を経て大倉尾根（東尾根）を登る、赤石岳への最短ルート。日帰りは非現実的で赤石小屋での1泊が前提。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.165）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【縦】赤石岳→聖岳（椹島・聖沢）", stats:"距離 28.2km（椹島→赤石岳→聖岳→聖沢登山口、縦走）/ 累積標高差 登り3,780m・下り3,760m / 合計コースタイム22.9時間（標準2泊3日、赤石小屋・百間洞山の家泊などが一般的）", level:"上級", note:"赤石岳から百間洞・聖岳を経て聖沢へ下る南アルプス南部の代表的な縦走路。下山地の聖沢登山口からのバス便は限られるため下山交通の事前確認が必須。",
     popularity:2, trailhead:0, grade:{stamina:9, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.164）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】千枚岳→荒川岳→赤石岳（椹島）周回", stats:"距離 27.4km（周回）/ 累積標高差 登り3,290m・下り3,290m / 合計コースタイム19.8時間（標準2泊3日、千枚小屋・荒川小屋泊などが一般的）", level:"上級", note:"千枚岳・荒川三山（悪沢岳）を経て赤石岳へ至る南アルプス南部の代表的な周回路。悪沢岳側の登山データでも同じルート（No.168）として扱う。",
     popularity:2, trailhead:0, grade:{stamina:8, skill:"D", official:true, src:"静岡県 山のグレーディング（日本百名山ルート一覧表 No.168）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{7:"7月11日に東海フォレスト送迎バスと各山小屋が営業開始。梅雨明け前後は残雪と大雨に注意。静岡駅発の南アルプス登山線バスは2026年は7/16〜8/16のみの運行。",8:"夏山最盛期。稜線は日中の雷雨・夕立に注意し、早出早着を徹底。百間洞山の家は2026年は改修工事のため8/31で小屋泊営業終了予定。",9:"台風シーズン。送迎バス運休の可能性があるため出発前に東海フォレスト公式サイトで運行状況を要確認。9/24〜10/9は送迎バスが予約不要の当日便に切り替わる。",10:"紅葉と初雪の季節。送迎バスの運行は10/12まで（10/13以降は林道工事のため個別調整）。中旬以降は積雪・凍結に注意。"}
  }
}
