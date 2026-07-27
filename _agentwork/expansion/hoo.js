{
  id:"hoo", name_ja:"鳳凰山（観音岳）", name_en:"Mt. Hoo (Kannondake)", region:"南アルプス北部", prefecture:"山梨県",
  elevation:2841, hyakumeizan:true,
  coords:{lat:35.70173, lon:138.304594}, forecast_elevation:2800,
  grading:{
    ridgeline:2800,
    wind_caution:9, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"白い花崗岩の砂礫稜線は遮るものがなく強風・低体温に直結しやすい。鳳凰小屋〜観音岳の『近道』は北斜面で日が当たらず、晩秋〜早春は積雪・凍結が長く残る（鳳凰小屋公式情報）。稜線の残雪は年により5月まで。"
  },
  trailheads:[
    {
      name:"夜叉神峠登山口（標高1,380m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 甲府駅・竜王・芦安駐車場～広河原線（山梨交通）", from:"JR中央本線 甲府駅",
         duration:"約1時間12分",
         weekday:"甲府駅発 例: 9:05 / 10:05 / 12:05 / 14:05（夜叉神峠登山口着 10:17 / 11:17 / 13:17 / 15:17）", weekend:"甲府駅発 例: 4:35 / 6:55 / 9:05 / 10:05 / 12:05 / 14:05（夜叉神峠登山口着 5:47 / 8:07 / 10:17 / 11:17 / 13:17 / 15:17）",
         season:"2026年6/26(金)〜11/3(火・祝)運行。南アルプス山岳交通適正化協議会への利用者協力金（片道300円）が別途必要", url:"https://ykbus.jp/route_bus/route_sp_info/hirogawara/", sample:true},
        {mode:"自家用車", line:"夜叉神峠登山口駐車場（無料・約100台）", from:"中央道 甲府昭和IC",
         duration:"約50分",
         weekday:"通年利用可（夜叉神峠から先の広河原方面はマイカー規制区間）", weekend:"同左",
         season:"駐車場自体は南アルプスマイカー規制の対象外で通年乗入れ可（冬期は積雪・凍結に注意）", url:"https://www.city.minami-alps.yamanashi.jp/kankou/yama/topics/", sample:true}
      ]
    },
    {
      name:"青木鉱泉（標高1,090m）",
      access:[
        {mode:"登山バス", line:"鳳凰三山登山バス（茅ヶ岳観光バス・完全予約制）", from:"JR中央本線 韮崎駅（駅前ロータリー2番乗り場）",
         duration:"約50分（運賃は事前確認要）",
         weekday:"運行なし（土日・三連休のみの運行）", weekend:"韮崎駅発 例: 7:10 / 9:10（青木鉱泉着 8:00 / 10:00）",
         season:"2026年6/20(土)〜10/12(月・祝)の土日・三連休運行。完全予約制（利用日の1ヶ月前〜2日前までに要予約、定員18名）", url:"https://houougoya.jp/access/", sample:true},
        {mode:"タクシー", line:"甲斐タクシー", from:"JR中央本線 韮崎駅",
         duration:"約45分（運賃目安 8,500円）",
         weekday:"随時（事前予約推奨）", weekend:"随時（事前予約推奨）",
         season:"通年", url:"https://www.kai-taxi.com/tourism.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"南御室小屋", elevation:2420, open:"4月下旬(GW)〜11月上旬（例年11月2日頃終了）。6月上旬より常駐営業予定（ヘリ荷揚げ状況により変動・公式サイトで要確認）。年末年始は天候により素泊まり営業の場合あり", reservation:"電話予約（現地直通携帯、20時以降は不可）または公式LINE", url:"https://www.houousan.com/", tel:"090-3406-3404"},
    {name:"薬師岳小屋", elevation:2720, open:"4月下旬(GW)〜11月上旬（例年11月2日頃終了）。6月上旬より常駐営業予定（ヘリ荷揚げ状況により変動・公式サイトで要確認）。年末年始は天候により素泊まり営業の場合あり", reservation:"電話予約（現地直通携帯、20時以降は不可）または公式LINE", url:"https://www.houousan.com/", tel:"090-5561-1242"},
    {name:"鳳凰小屋", elevation:2382, open:"2026年は4/25・5/1〜5/5(GW)、5/23〜24(週末)、5/29〜11/7が通常営業。年末年始は未定（要問合せ）", reservation:"宿泊は完全予約制（電話 8〜13時・15〜19時）。テント泊は8名以上か指定日のみ予約制", url:"https://houougoya.jp/", tel:"0551-27-2466"}
  ],
  routes:[
    {name:"夜叉神峠 往復", stats:"距離 約24.5km（往復）／ 標高差 約1,461m（累積標高差 登り1,850m・下り1,850m）／ 合計コースタイム 約13.1時間（公表値）", level:"中級", note:"稜線には南御室小屋・薬師岳小屋があり水・トイレに困りにくい。行程が長く日帰りは健脚向け、山小屋1泊での計画が現実的。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"B", official:true, src:"日本百名山ルート一覧表（10県2山域・山のグレーディング、掲載県:山梨県、No.187）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"【周】青木鉱泉〈地蔵岳・中道〉", stats:"距離 約15.8km（周回）／ 標高差 約1,751m（累積標高差 登り2,090m・下り2,090m）／ 合計コースタイム 約12.6時間（公表値）", level:"中級", note:"ドンドコ沢を登って鳳凰小屋・地蔵岳へ、中道を下って青木鉱泉に戻る周回。ドンドコ沢は五色滝など滝が連続する急登、中道は展望のない樹林の下り（鳳凰小屋公式情報）。",
     popularity:3, trailhead:1, grade:{stamina:5, skill:"C", official:true, src:"日本百名山ルート一覧表（10県2山域・山のグレーディング、掲載県:山梨県、No.188）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{4:"登山道はまだ残雪・凍結が多く上級者向け。山小屋は未営業、青木鉱泉行き登山バスも運行前で、夜叉神峠へは自家用車のみ。",5:"残雪期。鳳凰小屋・南御室小屋・薬師岳小屋がGW前後から週末営業を開始（本格営業は6月）。稜線に雪が残る年は軽アイゼンを。",6:"上旬〜中旬に山小屋が常駐営業に切り替わる（ヘリ荷揚げ状況次第・公式サイトで要確認）。タカネビランジなど高山植物が咲き始める。梅雨の晴れ間を狙いたい。",7:"盛夏。白い花崗岩の稜線と青空のコントラストが美しい。午後の雷雨に注意。",8:"夏山最盛期。タカネビランジ・シャクナゲの後は展望重視の稜線歩きに。日中の雷リスクは引き続き高い。",9:"稜線は爽快な展望期に入る。台風接近時は無理をしない判断を。",10:"紅葉と初冠雪が交錯する時期。夜叉神峠行き登山バスは11/3まで、青木鉱泉行き登山バスは10/12までの運行なのでアクセス計画に注意。中旬以降は朝晩氷点下。",11:"山小屋は例年11月上旬で通常営業を終了（南御室小屋・薬師岳小屋は11月2日頃、鳳凰小屋は2026年は11/7まで）。稜線は積雪・強風の本格的な冬型に入る。"}
  }
}