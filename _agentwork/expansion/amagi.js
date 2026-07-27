{
  id:"amagi", name_ja:"天城山（万三郎岳）", name_en:"Mt. Amagi (Banzaburodake)", region:"伊豆", prefecture:"静岡県",
  elevation:1406, hyakumeizan:true,
  coords:{lat:34.8628, lon:139.0018}, forecast_elevation:1300,
  grading:{
    ridgeline:1300,
    wind_caution:12, wind_danger:20,
    precip_caution:3, precip_danger:8,
    snow_months:[12,1,2,3],
    snow_note:"伊豆の低山で積雪自体はまれだが、山頂稜線は冬に凍結・霜柱が発生しやすい。雨や雪の翌朝は木段・木の根が凍って滑りやすいので注意。"
  },
  trailheads:[{
    name:"天城高原ゴルフ場登山口（標高1,040m）",
    access:[
      {mode:"バス", line:"天城東急リゾート線（東海バス）", from:"JR伊東線・伊豆急行線 伊東駅",
       duration:"約55分",
       weekday:"伊東駅発 例: 7:55 / 10:15 / 15:40", weekend:"伊東駅発 例: 7:55 / 10:15 / 14:15（増発便）/ 15:40（増発便は土曜・特定期間のみ運行。2026年は5/3〜6・8/2〜7・8/9〜14・9/20〜22・12/27〜1/1）",
       season:"通年運行", url:"https://www.tokaibus.jp/rosen/timetable.html", sample:true}
    ]
  }],
  huts:[],
  routes:[
    {name:"シャクナゲコース 周回（万二郎岳・万三郎岳）", stats:"距離 約7.4km（周回）/ 累積標高差 登り約590m・下り約590m / 歩行時間 約4:20（県グレーディング公表値）", level:"初級〜中級", note:"天城高原ゴルフ場から万二郎岳・万三郎岳を巡る定番周回。アマギシャクナゲ（5月下旬〜6月上旬）とヒメシャラ純林が見どころ。馬の背周辺は展望が開ける一方、風を遮るものがない。",
     popularity:3, trailhead:0, grade:{stamina:2, skill:"B", official:true, src:"静岡県 山のグレーディング", url:"https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/052/256/shizuoka_grading02.pdf"}},
    {name:"天城縦走路コース（天城高原ゴルフ場→万二郎岳→万三郎岳→八丁池→天城峠）", stats:"距離 約17.5km（片道）/ 行動時間 約7:35（運営者公式コースタイム）", level:"上級", note:"天城峠（旧天城トンネル）まで抜ける長丁場の縦走。天城峠側のバスは本数が少なく、下山後の交通は事前に公式時刻表で要確認。八丁池までの往復に短縮する行程も可。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false},
     segments:[
       {from:"天城高原ゴルフ場（天城縦走路登山口）", to:"万二郎岳", up:"1:05"},
       {from:"万二郎岳", to:"万三郎岳", up:"1:00"},
       {from:"万三郎岳", to:"戸塚峠（小岳経由）", up:"1:20"},
       {from:"戸塚峠", to:"八丁池（白田峠経由）", up:"1:15"},
       {from:"八丁池", to:"天城峠", up:"2:15"},
       {from:"天城峠", to:"天城峠バス停（旧天城トンネル経由）", up:"0:40"}
     ], sample:true}
  ],
  seasonality:{
    best:[5,10,11],
    notes:{
      1:"積雪は少ないが山頂稜線は凍結しやすい。防寒・滑り止め必携。",
      2:"厳冬期。木段・木の根の凍結に注意。",
      3:"残雪より路面凍結が主。日中は春めくが朝は冷え込む。",
      4:"新緑が始まる。ブナ・ヒメシャラの芽吹き。",
      5:"下旬からアマギシャクナゲが見頃を迎える。",
      6:"シャクナゲは上旬まで見られる。梅雨入り後は木段が滑りやすい。",
      7:"梅雨明け後は樹林で直射日光を避けられるが蒸し暑い。",
      8:"盛夏。バス増発期間あり。水分補給と熱中症対策を。",
      9:"台風シーズン。強風時は稜線区間を避ける判断を。",
      10:"紅葉が始まる。行楽シーズンでバスが混雑しやすい。",
      11:"ブナ・カエデの紅葉見頃。中旬以降は防寒を。"
    }
  }
}
