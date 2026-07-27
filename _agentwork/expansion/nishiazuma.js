{
  id:"nishiazuma", name_ja:"西吾妻山", name_en:"Mt. Nishi-Azuma", region:"吾妻連峰", prefecture:"山形県・福島県",
  elevation:2035, hyakumeizan:true,
  coords:{lat:37.73814, lon:140.1408}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"豪雪地帯の吾妻連峰は根雪が11月頃から5月頃まで残り、稜線はアオモリトドマツの樹氷（スノーモンスター）で知られる。残雪期は雪庇・踏み抜きに注意。"
  },
  trailheads:[
    {
      name:"北望台（天元台高原ロープウェイ・リフト山頂、標高1,820m／米沢側）",
      access:[
        {mode:"バス", line:"米沢駅前－白布温泉－天元台湯元線（山形交通バス）", from:"JR米沢駅前",
         duration:"約45分（湯元＝天元台高原まで）",
         weekday:"米沢駅前発 例: 8:30 / 9:40 / 10:40 / 12:30 / 13:30 / 14:30 / 15:30", weekend:"米沢駅前発 例: 8:30 / 9:40 / 10:40 / 12:30 / 13:30 / 14:30 / 15:30（ほぼ1時間に1本、平日・土日祝でほぼ同ダイヤ）",
         season:"通年運行", url:"https://www.yamagatakotsu.jp/busroute5/yzs1/", sample:true},
        {mode:"ロープウェイ", line:"天元台ロープウェイ（湯元駅→天元台高原駅）", from:"湯元駅",
         duration:"約5分", weekday:"8:20〜17:00", weekend:"8:00〜17:00",
         season:"2026年6月13日〜11月3日（夏山・グリーンシーズン）", url:"https://www.green.tengendai.jp/ropeway-lift", sample:true},
        {mode:"リフト", line:"夏山リフト（天元台高原駅→北望台、3本乗継）", from:"天元台高原駅",
         duration:"約20分（3本乗継）", weekday:"8:30〜15:40（山頂側最終15:40）", weekend:"8:10〜15:40",
         season:"2026年6月13日〜10月25日（運休日あり、要公式サイト確認）", url:"https://www.green.tengendai.jp/ropeway-lift", sample:true}
      ]
    },
    {
      name:"グランデコパノラマゴンドラ山頂駅（標高約1,390m／福島側・デコ平）",
      access:[
        {mode:"シャトルバス", line:"猪苗代駅⇔グランデコ 無料シャトルバス（予約制）", from:"JR磐越西線 猪苗代駅",
         duration:"約40分",
         weekday:"猪苗代駅発 例: 10:10 / 12:10 / 15:00（前日17時までの事前予約制）", weekend:"猪苗代駅発 例: 10:10 / 12:10 / 15:00（前日17時までの事前予約制・曜日による違いの案内なし）",
         season:"2026年4月25日〜11月23日（ゴンドラ運行日は下記の通り限定）", url:"https://grandecoresort.co.jp/mountain/access/", sample:true},
        {mode:"ゴンドラ", line:"グランデコパノラマゴンドラ", from:"グランデコ山麓駅",
         duration:"要確認", weekday:"8:30〜15:00", weekend:"8:30〜15:30",
         season:"夏山: 2026年8月1日〜8月30日／紅葉: 2026年10月10日〜11月8日（天候により変更・運休あり）", url:"https://grandecoresort.co.jp/mountain/ja/ropeway/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"アルブ天元台", elevation:1350, open:"通年営業（グリーンシーズン・スキーシーズンとも、休館日は要問合せ）", reservation:"電話予約", url:"https://www.green.tengendai.jp/stay", tel:"0238-55-2236"},
    {name:"西吾妻避難小屋（無人・宿泊予約不要）", elevation:1980, open:"通年開放（無人）", reservation:"—", url:"https://yamagatayama.com/hut/%E8%A5%BF%E5%90%BE%E5%A6%BB%E5%B1%B1%E9%81%BF%E9%9B%A3%E5%B0%8F%E5%B1%8B/", tel:""}
  ],
  routes:[
    {name:"北望台～西吾妻山 往復（天元台コース）", stats:"距離 約9km（往復） / 標高差 約300m / 登り2:30・下り2:00", level:"初級〜中級", note:"ロープウェイ・リフトを乗り継ぎ北望台から人形石・かもしか展望台・大凹・梵天岩・西吾妻小屋を経て山頂へ。山頂は樹林で展望がなく、稜線の湿原（梵天岩・弁天山周辺）からの展望が定番。吾妻山は気象庁常時観測火山のため入山前に噴火警戒レベルを確認（気象庁 吾妻山: https://www.data.jma.go.jp/vois/data/sendai/213_Azumayama/213_index.html）。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"A", official:false}},
    {name:"北望台～西吾妻山～若女平 縦走", stats:"距離 9.1km / 標高差 登り約540m・下り約1,500m / コースタイム目安 4.8時間", level:"中級", note:"山形県グレーディング公表ルート（起点リフト終点1,820m→西吾妻山2,035m→若女平登山口863m）。若女平登山口からの公共交通がないため、事前に送迎・車回送の計画が必要な片道ルート。",
     popularity:2, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"やまがた百名山のグレーディング", url:"https://yamagatayama.com/wp-content/themes/yamagatayama/images/top/yamagatayama_grading_list02.pdf"}},
    {name:"グランデコ～西大巓～西吾妻山 往復（デコ平コース）", stats:"距離 約11km（往復・推定） / 標高差 約650m / 登り3:00・下り2:30（公式サイトの片道目安180分を基に往復を推定）", level:"中級〜上級", note:"グランデコパノラマゴンドラで標高約1,390mまで上がり、ブナ・オオシラビソ林を抜けて西大巓の稜線に出た後、湿原の木道を経て西吾妻山頂へ。ゴンドラの運行期間が夏は8月のみ・紅葉期は10月中旬〜11月上旬のみと短いため、事前に公式サイトで運行日を要確認。",
     popularity:2, trailhead:1, grade:{stamina:4, skill:"B", official:false}}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{5:"残雪期。ロープウェイ・リフトは運休中（例年6月中旬営業開始）で、稜線には雪田が残る。",6:"中旬に天元台ロープウェイ・リフトが夏山運行を開始（2026年は6/13〜）。梅雨時は稜線が濃霧・強風になりやすい。",7:"湿原のチングルマ・ワタスゲなど高山植物が見頃。梅雨明け後が狙い目。",8:"夏山シーズン本番。グランデコ側のゴンドラは例年8月のみ運行（2026年は8/1〜8/30）。",9:"紅葉が始まる。台風接近時は稜線の強風・雷雨に厳重注意。",10:"紅葉のピーク（例年10月上旬〜中旬）。天元台リフトは10/25、ロープウェイは11/3で夏山営業終了（2026年）。グランデコ側は紅葉運行（10/10〜11/8）で再開。下旬は初雪の可能性あり。",11:"積雪期入り。天元台側はロープウェイ・リフトとも運休、グランデコ側も11/8で運行終了。以降は冬装備必須の本格的な雪山となる。"}
  }
}
