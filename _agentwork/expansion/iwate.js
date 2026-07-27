{
  id:"iwate", name_ja:"岩手山", name_en:"Mt. Iwate", region:"奥羽山脈", prefecture:"岩手県",
  elevation:2038, hyakumeizan:true,
  coords:{lat:39.8526, lon:141.0011}, forecast_elevation:1900,
  grading:{
    ridgeline:1900,
    wind_caution:10, wind_danger:16,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5],
    snow_note:"「南部片富士」と呼ばれる独立峰の成層火山で、8合目より上は森林限界を超えたザレ場・岩礫帯が山頂まで続き遮るものがない。東北の独立峰は積雪期が長く、稜線の残雪は6月まで残ることがある一方、10月には初雪が降ることも珍しくない。"
  },
  trailheads:[
    {
      name:"馬返し登山口（標高633m・柳沢コース起点）",
      access:[
        {mode:"車", line:"自家用車・レンタカー", from:"東北自動車道 滝沢IC",
         duration:"約15分・約8km",
         weekday:"—", weekend:"—",
         season:"通年（冬期は積雪のため道路状況を要確認）。活火山のため入山規制状況により通行不可の場合あり", url:"https://www.city.takizawa.iwate.jp/kanko/shizen-kanko/contents-7625", sample:true},
        {mode:"タクシー", line:"滝沢交通（019-694-3277）／みたけタクシー（019-688-1335）", from:"IGRいわて銀河鉄道 滝沢駅",
         duration:"約20分・約11km",
         weekday:"随時（事前予約推奨・時刻指定なし）", weekend:"同左",
         season:"通年", url:"https://www.city.takizawa.iwate.jp/kanko/shizen-kanko/contents-7625", sample:true}
      ]
    },
    {
      name:"焼走り登山口（岩手山焼走り国際交流村、標高約550m）",
      access:[
        {mode:"車", line:"自家用車・レンタカー", from:"東北自動車道 西根IC",
         duration:"約19分・約7.1km",
         weekday:"—", weekend:"—",
         season:"通年（冬期は積雪のため道路状況を要確認）。活火山のため入山規制状況により通行不可の場合あり", url:"https://www.city.hachimantai.lg.jp/", sample:true},
        {mode:"電車＋タクシー", line:"IGRいわて銀河鉄道（好摩駅乗換）＋JR花輪線 大更駅からタクシー（要予約）", from:"盛岡駅",
         duration:"大更駅まで鉄道で約35分、駅からタクシーで焼走り登山口まで（タクシーの所要時間・料金は要確認）",
         weekday:"要確認（事前にタクシー会社へ確認推奨）", weekend:"要確認",
         season:"通年", url:"https://igr.jp/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"八合目避難小屋", elevation:1750, open:"管理人常駐 2026年7月1日〜10月16日（無人期間も避難小屋として通年利用は可能）", reservation:"3名以下は予約不要。4名以上はウェブ予約必須（キャンセル等は滝沢市に電話）。宿泊協力金は大人2,000円・高校生等1,500円・中学生1,000円・小学生以下無料", url:"https://www.city.takizawa.iwate.jp/kanko/shizen-kanko/contents-7625", tel:"019-656-6535"},
    {name:"平笠不動避難小屋", elevation:1600, open:"通年（無人）", reservation:"予約不要（無人の避難小屋。水場なし、トイレあり）", url:"https://www.env.go.jp/nature/nationalparks/list/towada-hachimantai/course/18/", tel:""}
  ],
  routes:[
    {name:"柳沢コース（馬返し 往復）", stats:"距離 約11.4km（往復）/ 標高差 約1,405m / 登り4:30・下り3:30", level:"中級", note:"「南部片富士」岩手山の表登山道。2.5合目で旧道（ガレ場・展望良好）と新道（森林コース）が分岐し、4合目まで新道を進んでから旧道に合流するのが推奨ルート。8合目に避難小屋と水場「御成清水」。活火山のため登山前に気象庁の噴火警戒レベルを必ず確認（https://www.data.jma.go.jp/vois/data/sendai/207_Iwatesan/207_index.html）。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false}},
    {name:"焼走りコース（往復）", stats:"距離 約17km（往復）/ 標高差 約1,490m / 登り5:10・下り3:50", level:"中級", note:"国指定天然記念物「焼走り溶岩流」の脇を抜ける展望の良いロングコース。平笠不動避難小屋（無人・水場なし）を経て山頂へ。活火山のため登山前に気象庁の噴火警戒レベルを必ず確認（https://www.data.jma.go.jp/vois/data/sendai/207_Iwatesan/207_index.html）。",
     popularity:2, trailhead:1, grade:{stamina:6, skill:"B", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{
      5:"残雪期。上部はまだ雪が残り軽アイゼンが有効な年もある。8合目避難小屋は管理人不在期間（無人小屋としては利用可）。",
      6:"高山植物（コマクサ・ミヤマキンバイ等）が咲き始める。梅雨の晴れ間を狙いたい。",
      7:"7月1日に8合目避難小屋の管理人常駐が始まり実質的な山開き。活火山のため気象庁の噴火警戒レベルと登山道の規制状況を必ず事前確認（気象庁 https://www.data.jma.go.jp/vois/data/sendai/207_Iwatesan/207_index.html／岩手県 https://www.pref.iwate.jp/kurashikankyou/anzenanshin/bosai/kazanbosai/1004223.html）。",
      8:"盛夏で花・展望とも安定するが、午後の雷雨に注意し早出早着を心掛ける。",
      9:"秋晴れの日が増え、下旬から山頂付近で紅葉が始まる。",
      10:"紅葉は中旬が見頃。8合目避難小屋の管理人常駐は10月16日まで（2026年）。下旬は初雪の可能性があり冬装備の準備を。"
    }
  }
}
