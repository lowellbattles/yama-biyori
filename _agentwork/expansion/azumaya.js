{
  id:"azumaya", name_ja:"四阿山", name_en:"Mt. Azumaya", region:"上信越高原（菅平・浅間山系）", prefecture:"長野県・群馬県",
  elevation:2354, hyakumeizan:true,
  coords:{lat:36.5417, lon:138.4131}, forecast_elevation:2300,
  grading:{
    ridgeline:2300,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[11,12,1,2,3,4,5],
    snow_note:"浅間山系に連なる独立峰的な地形で、冬は日本海側からの季節風が山頂稜線に遮られず直接吹き付ける。標高の割に強風になりやすいため風のしきい値は控えめに設定。残雪は5月上旬まで残ることがある。"
  },
  trailheads:[
    {
      name:"菅平牧場登山口（標高1,590m）",
      access:[
        {mode:"バス", line:"菅平高原線（上田バス）", from:"JR上田駅",
         duration:"約60分（菅平高原「ダボス」下車。牧場入口まではさらに徒歩または車で約4km・要確認）",
         weekday:"上田駅発 例: 7:05 / 8:15 / 9:25 / 11:30 / 13:30 / 15:50", weekend:"土日祝も同一ダイヤ運行（例: 7:05 / 8:15 / 9:25 / 11:30 / 13:30 / 15:50）",
         season:"通年運行（一部便は季節運行 7/1〜8/31・12/18〜3/31）", url:"https://www.uedabus.co.jp/sugadaira/20251001sugadaira-kogen.pdf", sample:true}
      ]
    },
    {
      name:"あずまや高原登山口（旧あずまや高原ホテル前・標高約1,450m）",
      access:[
        {mode:"マイカー", line:"公共交通機関なし（要確認）", from:"上信越自動車道 上田菅平IC",
         duration:"約30〜40分（国道144号を鳥居峠方面へ、峠の手前で県道182号へ左折）",
         weekday:"—", weekend:"—",
         season:"通年（積雪期は道路状況要確認）", url:"https://ueda-kanko.or.jp/", sample:true}
      ]
    },
    {
      name:"パルコール嬬恋リゾート ゴンドラ山頂駅（標高2,050m）",
      access:[
        {mode:"ゴンドラ", line:"パルコール嬬恋リゾート 夏山ゴンドラ（関東最長・片道約20分）", from:"パルコール嬬恋リゾート駐車場",
         duration:"約20分",
         weekday:"運休（土日祝のみ運行）", weekend:"8:00〜15:00の間で随時運行（上り最終15:00頃・要確認）",
         season:"2026年グリーンシーズン: 7/11（土）〜10/12（月・祝）の土日祝日運行", url:"https://tsumagoiskiresort.life/summer-gondola/", sample:true}
      ]
    }
  ],
  huts:[],
  routes:[
    {name:"菅平牧場起点 根子岳・四阿山 周回", stats:"距離 約9.5km（周回）/ 累積標高差 登り・下りとも約1,100m / コースタイム合計 約7:18（公表値、休憩含まず）", level:"中級", note:"根子岳を経て外輪山の尾根伝いに四阿山へ。牧場入場は入山協力金（大人300円・小人100円、料金は現地要確認）が必要な区間あり。上り下りの内訳は公表合計時間からの目安配分。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"B", official:true, src:"信州 山のグレーディング", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/gure-dexingu.html"}},
    {name:"あずまや高原（旧あずまや高原ホテル）起点 往復", stats:"距離 約7.6km（往復目安）/ 標高差 約900m / 登り3:20・下り2:40（独自推定）", level:"中級", note:"ホテルは2020年5月閉館だが、登山口手前の無料駐車場・登山道は利用可能（トイレなし）。上部は風衝地の草原帯でお花畑が広がる。稜線から浅間山を望むが、浅間山は活火山のため気象庁の噴火警戒レベル（https://www.data.jma.go.jp/vois/data/report/activity_info/306.html）を事前に確認し、レベルに応じた入山可能範囲を守ること。",
     popularity:2, trailhead:1, grade:{stamina:3, skill:"B", official:false}},
    {name:"パルコール嬬恋ゴンドラ利用 往復", stats:"距離 片道約3.4km・往復約6.8km / 標高差 約300m（ゴンドラ山頂駅起点）/ 登り1:30・下り1:10（独自推定）", level:"初級", note:"ゴンドラで標高2,050mまで上がれるため初心者向けの最短コース。ゴンドラの運行日・運行時間は季節・天候で変動するため必ず事前確認。",
     popularity:2, trailhead:2, grade:{stamina:1, skill:"A", official:false}}
  ],
  seasonality:{
    best:[6,7,8,9,10],
    notes:{5:"残雪期。あずまや高原ルート上部や稜線には雪が残ることがあり注意。",6:"梅雨の晴れ間に。牧場では放牧が始まる時期。",7:"菅平牧場の売店営業は例年7/20〜8/20頃（入山協力金 大人300円・小人100円、要現地確認）。高山植物が見頃を迎える。",8:"お盆期間は駐車場・バスとも混雑。午後の雷雨に注意。",9:"秋晴れが増えて歩きやすい時期。",10:"紅葉は中旬前後が見頃。パルコール嬬恋の2026年グリーンシーズンゴンドラは10/12（月・祝）までの土日祝運行。",11:"初雪の便り。あずまや高原ホテル閉館に伴い付近に施設はなく、日没も早いため時間管理に注意。"}
  }
}
