{
  id:"kobushi", name_ja:"甲武信ヶ岳", name_en:"Mt. Kobushigatake", region:"奥秩父", prefecture:"長野県・山梨県・埼玉県",
  elevation:2475, hyakumeizan:true,
  coords:{lat:35.9091, lon:138.7289}, forecast_elevation:2400,
  grading:{
    ridgeline:2400,
    wind_caution:13, wind_danger:19,
    precip_caution:4, precip_danger:12,
    snow_months:[11,12,1,2,3,4],
    snow_note:"奥秩父主脈は樹林帯が長く風は比較的穏やかだが、山頂直下の岩場や国師ヶ岳・三宝山周辺の稜線、千曲川源流の渡渉箇所は積雪・凍結期に滑落・道迷いの危険が増す。11月〜4月は軽アイゼン以上を推奨。"
  },
  trailheads:[
    {
      name:"毛木平登山口（標高1,433m）",
      access:[
        {mode:"バス", line:"川上村営バス（梓山線）", from:"JR小海線 信濃川上駅",
         duration:"信濃川上駅から梓山まで約15分。梓山バス停から毛木平登山口までは徒歩約1時間（マイカー・タクシー利用が現実的）",
         weekday:"信濃川上駅発 例: 6:45 / 8:15 / 10:42 / 13:27 / 15:10 / 16:39 / 17:58 / 19:35（詳しい運行区分は季節・曜日により変わるため要確認）", weekend:"平日ダイヤに準ずるが土日祝は一部減便あり・要確認",
         season:"通年運行（6月〜9月は期間ダイヤ、それ以外の時期は梓山発時刻等が変わるため要確認）", url:"https://www.vill.kawakami.nagano.jp/www/contents/1710984551276/index.html", sample:true},
        {mode:"車", line:"中央自動車道 須玉ICから川上村道経由", from:"中央自動車道 須玉IC",
         duration:"約1時間（毛木平駐車場手前の一部区間を除き舗装路）",
         weekday:"—", weekend:"—",
         season:"通年（積雪・凍結期は冬用タイヤ必須）", url:"https://www.vill.kawakami.nagano.jp/www/contents/1001000000018/index.html", sample:true}
      ]
    },
    {
      name:"西沢渓谷入口登山口（標高1,110m）",
      access:[
        {mode:"バス", line:"西沢渓谷線（山梨交通）", from:"JR中央本線 塩山駅",
         duration:"約60分",
         weekday:"塩山駅発 例: 8:30 / 9:05 / 11:25 / 13:30 / 14:30（運行日区分〈●△×印〉により発着時刻が変わるため要確認）", weekend:"土日祝は8:30便が運行（詳細は時刻表参照）・要確認",
         season:"通年運行（2026年は4/25〜11/23の特定日ダイヤ、4/30・5/1と7/21〜8/31・10/1〜11/13は毎日運行）", url:"https://ykbus.jp/index/route_bus/route_sp_info/nishizawa_valley/", sample:true}
      ]
    },
    {
      name:"大弛峠登山口（標高2,365m）",
      access:[
        {mode:"バス", line:"大弛峠線（栄和交通）", from:"JR中央本線 塩山駅北口",
         duration:"約1時間25分",
         weekday:"塩山駅北口発 例: 7:30 / 9:00（季節運行のため平日設定は要確認）", weekend:"塩山駅北口発 例: 7:30 / 9:00",
         season:"2026年は5/30〜11/8の土日祝運行（道路状況により早期終了の場合あり）。要予約・運賃は現金のみ", url:"https://eiwa-kotsu.jp/oodarumi.html", sample:true},
        {mode:"車", line:"県営林道 川上牧丘線（大弛峠経由）", from:"中央自動車道 勝沼IC",
         duration:"約1時間30分",
         weekday:"—", weekend:"—",
         season:"冬季閉鎖あり（例年12月〜5月は通行不可。開通・閉鎖時期は要確認）", url:"https://www.city.yamanashi.yamanashi.jp/soshiki/17/14045.html", sample:true}
      ]
    }
  ],
  huts:[
    {name:"甲武信小屋", elevation:2360, open:"4月末〜11月末（年末年始等の特別営業は要確認）", reservation:"電話予約（受付8:00〜20:00、16:00〜18:00は不可の場合あり）", url:"https://www.kobushigoya.net/", tel:"090-3337-8947"},
    {name:"十文字小屋（十文字峠）", elevation:2035, open:"2026年は4月〜（閉鎖時期は公式サイトで要確認）", reservation:"電話予約（受付9:00〜20:00、チェックイン14:00〜）", url:"http://www.hut10monji.com/", tel:"090-1031-5352"}
  ],
  routes:[
    {name:"毛木平 周回（千曲川源流遊歩道→甲武信ヶ岳→十文字峠）", stats:"距離 約15.4km（周回）/ 標高差 起点毛木平1,433m→最高点(三宝山)2,483m", level:"中級", note:"千曲川（信濃川）水源地標を経由する信州側の代表コース。日帰りも可能だが健脚向けで、十文字小屋で1泊すれば余裕を持てる。",
     popularity:3, trailhead:0, grade:{stamina:4, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"西沢渓谷入口 徳ちゃん新道（戸渡尾根）往復", stats:"距離 往復約14.8km / 累積標高差 約1,560m（西沢渓谷入口1,110m→山頂2,475m）/ コースタイム合計 約10.3時間（山梨県 山のグレーディング公表値）", level:"中級", note:"木賊山を経て山頂へ向かう山梨側の代表コース。徳ちゃん新道は急登主体。下山を近丸新道に変える場合はコースタイムが変わる。",
     popularity:3, trailhead:1, grade:{stamina:4, skill:"B", official:true, src:"山梨県 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"}},
    {name:"大弛峠 発着 国師ヶ岳経由 甲武信ヶ岳 往復", stats:"距離 約19.7km（往復）/ 累積標高差 約840m / コースタイム合計 約12.0時間（山梨県 山のグレーディング公表値）", level:"中級", note:"日本一標高の高い車道峠（大弛峠、標高2,365m）から国師ヶ岳(2,592m)を経て稜線をたどるコース。標高が高く体力度の割に歩きやすいが、林道は冬季閉鎖、バスも季節運行のため計画に注意。",
     popularity:2, trailhead:2, grade:{stamina:4, skill:"B", official:true, src:"山梨県 山のグレーディング", url:"https://www.pref.yamanashi.jp/kankou-sgn/shintyaku/grading.html"}}
  ],
  seasonality:{
    best:[5,6,7,8,9,10],
    notes:{
      5:"新緑と残雪が入り混じる時期。稜線の日陰は凍結が残ることがあり軽アイゼン携行が安心。大弛峠への林道は5月中に冬季閉鎖が解除される見込み（年による）。",
      6:"梅雨の晴れ間がねらい目。十文字峠周辺はシャクナゲが見頃。",
      7:"夏山シーズン本番。標高2,400m超の稜線は避暑にも向く。",
      8:"盛夏。日中の雷雨に注意し早出早着を心がける。西沢渓谷線バスは8/13〜15運休便あり。",
      9:"残暑が和らぎ歩きやすい。台風接近時は千曲川源流沿いの増水・道迷いに注意。",
      10:"紅葉が見頃（上旬〜中旬が目安）。大弛峠線バスは2026年は11/8まで運行予定。",
      11:"初冬。大弛峠への林道・バスは冬季閉鎖に向かい順次運休。積雪・凍結が本格化する。"
    }
  }
}
