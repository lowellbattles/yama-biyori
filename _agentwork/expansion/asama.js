{
  id:"asama", name_ja:"浅間山", name_en:"Mt. Asama", region:"浅間連峰", prefecture:"長野県・群馬県",
  elevation:2568, hyakumeizan:true,
  coords:{lat:36.4064, lon:138.5231}, forecast_elevation:2500,
  grading:{
    ridgeline:2400,
    wind_caution:10, wind_danger:15,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"関東平野からの季節風を遮るもののない独立峰的な成層火山で、外輪山・山頂部は一年を通じて風が強い。冬は高峰高原周辺でも積雪・路面凍結が常態化し、森林限界を超えた山頂部は吹きさらしの火山礫・岩塊帯となるため、風の予報を特に重視する。"
  },
  trailheads:[
    {
      name:"車坂峠登山口（高峰高原ビジターセンター、標高1,973m）",
      access:[
        {mode:"バス", line:"高峰高原線（ジェイアールバス関東）", from:"しなの鉄道 小諸駅／JR佐久平駅",
         duration:"小諸駅から約55分・佐久平駅から約1時間",
         weekday:"佐久平駅発 例: 8:40 / 14:00（小諸駅・きのこの森経由、高峰高原ホテル前着）", weekend:"同左（毎日運行ダイヤ）",
         season:"通年運行（冬期は高峰温泉を通過せずアサマ2000スキー場発着に変更）", url:"https://www.jrbuskanto.co.jp/jwp/office/komoro", sample:true},
        {mode:"車", line:"チェリーパークライン（県道80号小諸中込線）", from:"上信越自動車道 小諸IC",
         duration:"約30分",
         weekday:"通年通行可（冬期閉鎖なし、積雪・凍結のためスタッドレスタイヤ必須）", weekend:"同左",
         season:"道路は通年通行可。高峰高原ビジターセンター自体の営業は4月下旬〜11月上旬", url:"https://www.city.komoro.lg.jp/soshikikarasagasu/sangyoushinkoubu/shokokankoka/2/1/1/9803.html", sample:true}
      ]
    },
    {
      name:"天狗温泉浅間山荘登山口（標高1,400m）",
      access:[
        {mode:"車", line:"アサマサンライン経由", from:"上信越自動車道 小諸IC",
         duration:"約25分",
         weekday:"通年通行可（積雪期は道路状況を要確認）", weekend:"同左",
         season:"通年", url:"https://tenguspa.com/access.html", sample:true},
        {mode:"送迎（要予約・宿泊者限定）", line:"小諸駅⇔天狗温泉浅間山荘", from:"しなの鉄道 小諸駅",
         duration:"約25分",
         weekday:"送迎あり・要予約（対応時間は要問い合わせ）。それ以外はタクシー等を利用", weekend:"同左",
         season:"通年", url:"https://tenguspa.com/access.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"高峰高原ホテル", elevation:2000, open:"通年営業", reservation:"電話・Web予約", url:"https://www.takamine-kougen.co.jp/", tel:"0267-25-3000"},
    {name:"天狗温泉 浅間山荘", elevation:1400, open:"通年営業（要問い合わせ）", reservation:"電話予約", url:"https://tenguspa.com/", tel:"0267-22-0959"},
    {name:"火山館（小諸市営・休憩所、宿泊不可）", elevation:1995, open:"8:30〜17:15、毎週月・火曜定休（火山活動時は臨時休館あり）", reservation:"—", url:"https://www.city.komoro.lg.jp/soshikikarasagasu/sangyoushinkoubu/shokokankoka/2/1/1/2403.html", tel:""}
  ],
  routes:[
    {name:"お手軽絶景コース（車坂峠→トーミの頭→黒斑山 往復）", stats:"距離 約6km / 標高差 約400m / 歩行時間 約3:10", level:"初級",
     note:"浅間山外輪山の最高点・黒斑山を目指す定番コース。トーミの頭からの絶壁と浅間山本体の大展望が見どころ。噴火警戒レベル1・2で入山可（長野県佐久地域振興局公式コース紹介）。積雪期は冬山初心者にも比較的向くが、風の予報は必ず確認すること。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:false}},
    {name:"浅間山・活火山体感コース（天狗温泉浅間山荘→火山館→賽の河原分岐→前掛山 往復）", stats:"距離 約12km / 標高差 約1,100m / 歩行時間 約6:40", level:"中級",
     note:"火口に最も近づける前掛山（2,524m）を目指すメインコース。噴火警戒レベル1の時のみ前掛山まで入山可（レベル2以下では火山館までしか入れない）。ヘルメット携行推奨、コース上にシェルターあり。最新の警戒レベルは気象庁公式サイト（https://www.data.jma.go.jp/vois/data/tokyo/306_Asamayama/306_index.html）で必ず確認すること。長野県登山安全条例により登山計画書の提出も必須。",
     popularity:3, trailhead:1, grade:{stamina:5, skill:"B", official:false}},
    {name:"いいとこどり縦走コース（車坂峠→黒斑山→Jバンド→火山館→天狗温泉浅間山荘）", stats:"距離 約13km / 標高差 登り約400m・下り約1,700m / 歩行時間 約5:30", level:"中級",
     note:"外輪山を経て火口間近の稜線を歩き、火山館経由で下山する縦走コース。起点（車坂峠）と終点（天狗温泉浅間山荘）が異なるため、マイカー利用時は車両回送やタクシー手配が必要。噴火警戒レベル1・2で入山可能だが、レベル2の場合は仙人岳〜Jバンド〜湯の平口分岐が火口から2km以内の区域を通るため長居は禁物、異変を感じたら直ちに下山すること。積雪期（12〜4月）は歩行技術を要するため「お手軽絶景コース」が推奨される。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      4:"高峰高原ビジターセンターの営業開始は例年4月下旬。残雪や路面状況は要確認。",
      5:"新緑の季節。2026年は5月22日に噴火警戒レベルが2から1へ引き下げられ、5月23日から前掛山までの入山規制が緩和された。",
      6:"梅雨の晴れ間を狙う時期。外輪山では高山植物が咲き始める。",
      7:"夏山シーズン本番。午後の雷雨や火山ガスの状況に注意。",
      8:"盛夏。日差しと展望を遮るもののない稜線歩きになるため、熱中症・日焼け対策を。",
      9:"秋晴れが増え、外輪山からの展望が特に良くなる時期。",
      10:"紅葉の見頃（中旬〜下旬）。高峰高原ビジターセンターの営業終了は例年11月上旬。",
      11:"初雪の便り。ビジターセンターは例年11月上旬で冬期休業に入る。",
      12:"厳冬期に入る。積雪・強風のため一般登山者には不向き。",
      1:"厳冬期。冬山装備と経験が必須。",
      2:"厳冬期。強風と低温が続く。",
      3:"残雪期。踏み抜きや雪崩に注意。"
    }
  }
}
