{
  id:"iide", name_ja:"飯豊山", name_en:"Mt. Iide", region:"飯豊連峰", prefecture:"山形県・新潟県・福島県",
  elevation:2105, hyakumeizan:true,
  coords:{lat:37.854831, lon:139.70711}, forecast_elevation:2100,
  grading:{
    ridgeline:2000,
    wind_caution:8, wind_danger:14,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯にある飯豊連峰は残雪が非常に多く、稜線でも6月まで大きな雪渓が残る年が多い。7月以降も年により雪渓が残ることがあるため、直前の残雪・水場情報を必ず確認すること。"
  },
  trailheads:[
    {
      name:"御沢野営場・川入登山口（標高約548m）",
      access:[
        {mode:"タクシー", line:"山都タクシー", from:"JR磐越西線 山都駅",
         duration:"約40〜45分（片道）",
         weekday:"要予約・随時運行（運賃は山都タクシー 0241-38-2025 へ要確認）", weekend:"要予約・随時運行（週末・シーズン中は混み合うため早めの予約推奨）",
         season:"通年営業（かつて運行されていた季節限定の飯豊山登山アクセスバスは2026年度は運行なし。喜多方市は山都タクシーの利用を案内している）", url:"https://www.city.kitakata.fukushima.jp/soshiki/sangyo-y/43737.html", sample:true}
      ]
    },
    {
      name:"大日杉登山口・大日杉小屋（標高約606m）",
      access:[
        {mode:"タクシー", line:"めざみ交通", from:"JR米坂線 羽前椿駅／米沢駅",
         duration:"要問合せ（めざみ交通・予約制）",
         weekday:"要予約・随時運行", weekend:"要予約・随時運行",
         season:"町道「岳谷大日杉線」開通期間中（2026年度は4月27日から全面通行可能・冬期閉鎖あり）。小屋周辺は全携帯会社とも電話が通じない。", url:"https://www.town.iide.yamagata.jp/012/dainichisugikoya.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"三国岳避難小屋（三国小屋）", elevation:1560, open:"管理人常駐 7月3日〜10月11日（2026年度）。それ以外は無人開放の避難小屋。", reservation:"予約不要（避難小屋・利用協力金制、1泊3,000円）。シュラフ貸出・テントサイトなし。", url:"https://www.city.kitakata.fukushima.jp/soshiki/sangyo-y/43737.html", tel:"0241-38-3831"},
    {name:"切合小屋（切合避難小屋）", elevation:1740, open:"管理人常駐 7月3日〜10月12日（2026年度）。冬季閉鎖。", reservation:"要予約（公式サイトの問い合わせフォームより）。素泊まり3,500円、一泊二食9,000円、幕営2,000円/人ほか（2025年改定料金）。", url:"https://iide.3gaku.jp/", tel:""},
    {name:"飯豊山避難小屋（本山小屋）", elevation:2095, open:"管理人常駐 7月3日〜10月12日（2026年度）。それ以外は無人開放の避難小屋。", reservation:"予約不要（避難小屋・利用協力金制、1泊3,000円）。テントサイト約50張（1人2,000円）。", url:"https://www.city.kitakata.fukushima.jp/soshiki/sangyo-y/43737.html", tel:"0241-38-3831"},
    {name:"御西小屋（御西岳避難小屋）", elevation:1984, open:"管理人常駐 7月中旬〜8月下旬。それ以外は無人開放の避難小屋。", reservation:"予約不要（避難小屋・協力金制）。NPO法人「飯豊朝日を愛する会」が管理協力。", url:"https://yamagatayama.com/hut/%E5%BE%A1%E8%A5%BF%E5%B0%8F%E5%B1%8B/", tel:"090-5846-1858"}
  ],
  routes:[
    {name:"御沢野営場（川入）→ 三国小屋・切合小屋 経由 → 飯豊山本山 往復", stats:"標高差 約1,500m / 1泊2日（歩行時間の目安 1日目 約8時間25分・2日目 約6時間55分）", level:"上級", note:"福島県側からの最も一般的な登路。剣ヶ峰は岩場・鎖場の痩せ尾根。長丁場のため小屋泊まりでの1泊2日以上が前提。地蔵山直下の水場での給水が重要。",
     popularity:3, trailhead:0, grade:{stamina:9, skill:"C", official:false}},
    {name:"大日杉登山口 → 地蔵岳・切合小屋 経由 → 飯豊山本山 往復", stats:"標高差 約1,500m / 片道 約8時間（1泊2日が前提）", level:"上級", note:"登山口すぐのザンゲ坂以外は急坂が少なめだが、地蔵山直下まで水場がなく、種蒔山付近には残雪期に雪渓が残る。切合小屋で川入ルートと合流する。",
     popularity:2, trailhead:1, grade:{stamina:7, skill:"D", official:true, src:"やまがた百名山のグレーディング", url:"https://yamagatayama.com/wp-content/themes/yamagatayama/images/top/yamagatayama_grading_matrix03.pdf"}},
    {name:"御沢野営場（川入）→ 飯豊山本山 → 御西小屋 → 大日岳（飯豊連峰最高峰）往復", stats:"標高差 約1,550m / 2〜3泊が適当", level:"上級", note:"飯豊連峰の最高点2,128mの大日岳まで足を延ばす縦走。稜線歩きが長く、御西小屋以遠は幕営・避難小屋泊の装備と行動力が必須。天候悪化時の稜線の強風・雷に厳重注意。",
     popularity:1, trailhead:0, grade:{stamina:10, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      5:"麓は残雪期の名残。稜線は大量の残雪が残る本格的な雪山で、アイゼン・ピッケルと読図・雪上歩行の技術が必須。山小屋は未開設。",
      6:"稜線の雪渓はなお多く残る。ヒメサユリなど花の季節が始まるが、小屋開設（7月上旬）前で残雪処理の技術が求められる。",
      7:"7月上旬から山小屋・避難小屋の管理人が順次常駐。イイデリンドウ・チングルマなどのお花畑が見頃を迎える。梅雨明け後が本番。",
      8:"夏山最盛期。稜線の雪渓はおおむね消えるが、年により沢型に残ることも。水場は年・時期により涸れることがあるため要確認。",
      9:"秋の高気圧に恵まれ安定した好天が多い。暑さも和らぎ歩きやすい時期だが、台風接近時は稜線の暴風・大雨に厳重注意。",
      10:"上旬から紅葉が進む。中旬（10月11〜12日頃）で避難小屋の管理人が撤収し無人化、以降は初雪の便りも入り始める。"
    }
  }
}
