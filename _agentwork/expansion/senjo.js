{
  id:"senjo", name_ja:"仙丈ヶ岳", name_en:"Mt. Senjogatake", region:"南アルプス北部", prefecture:"長野県・山梨県",
  elevation:3033, hyakumeizan:true,
  coords:{lat:35.7201, lon:138.1836}, forecast_elevation:3000,
  grading:{
    ridgeline:3000,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:10,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"藪沢カール内・小仙丈尾根上部は6月頃まで残雪が残ることが多い。小仙丈尾根は森林限界から山頂まで遮るものがない稜線で、天候急変時は3,000m級特有の強風にさらされ体感温度が急低下する。"
  },
  trailheads:[{
    name:"北沢峠（標高約2,032m）",
    access:[
      {mode:"バス", line:"南アルプス林道バス（伊那市営）", from:"戸台パーク（旧・仙流荘、2025年4月からバス停が仙流荘前ロータリー内に移転）",
       duration:"約50分",
       weekday:"戸台パーク発 例: 8:12 / 10:12 / 12:17 / 14:20（毎日）。7/10〜10/12はこれに5:52発が加わる", weekend:"戸台パーク発 例: 6:37（4/25〜7/9・10/13〜11/3の土休日のみ追加）/ 8:12 / 10:12 / 12:17 / 14:20。7/10〜10/12は5:52発も運行",
       season:"2026年4/25〜11/3。4/25〜5/31は歌宿止まり、6/1〜11/3が北沢峠まで運行（天候等で早期終了の場合あり）", url:"https://www.inacity.jp/kankojoho/sangaku_alps/minamialps/minamialps_jikokuhyo.html", sample:true},
      {mode:"バス（乗継）", line:"JRバス関東 高遠線 → 伊那市営バス 長谷線", from:"JR飯田線 伊那市駅",
       duration:"乗継込みで約1時間", weekday:"伊那市駅発、高遠駅で長谷線（平日運行）に乗り継ぎ、南アルプス林道バスの発車時刻に接続するダイヤ。具体的な発車時刻は要確認", weekend:"長谷線は平日運行が基本のため、土休日の接続体系は別系統になる場合あり。要確認（南アルプス林道バス営業所 0265-98-2821 へ問い合わせ推奨）",
       season:"南アルプス林道バスの運行期間に準ずる", url:"https://www.inacity.jp/kurashi/kotsu_jikokuhyo/bus_rosenjikokuhyo/busjikokuhyo/index.html", sample:true}
    ]
  }],
  huts:[
    {name:"大平山荘", elevation:2036, open:"7月上旬〜10月下旬", reservation:"電話予約（TEL・FAX 0265-78-3761。営業期間中の現地連絡先は公式サイトで要確認）。北沢峠バス停より徒歩約10分", url:"https://ohdaira.sakura.ne.jp/", tel:"0265-78-3761"},
    {name:"馬の背ヒュッテ", elevation:2630, open:"2026年7/1〜10/13（最終宿泊10/12）", reservation:"Web予約（Yamatan）中心・事前決済制。個人予約は4/15 13時受付開始", url:"https://www.yamatan.net/hut/umanosehutte", tel:"090-2503-2630"},
    {name:"仙丈小屋", elevation:2885, open:"2026年6/12〜10/12", reservation:"Web予約は4/1 11時受付開始（宿泊希望日の3ヶ月前0:00〜）。電話予約は営業期間中のみ", url:"https://www.ina-city-kankou.co.jp/yamagoya/senjo/", tel:"090-1883-3033"}
  ],
  routes:[
    {name:"小仙丈尾根 往復", stats:"距離 約9.5km / 標高差 約1,000m（累積登り約1,120m） / 往復 合計コースタイム 7:36", level:"中級", note:"北沢峠から山頂へ至る最も一般的なルート。樹林帯を抜けると小仙丈ヶ岳から先は遮るものがない稜線歩きで、風の影響を強く受ける。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.179）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"周回（小仙丈尾根↑・藪沢新道↓）＜小仙丈ヶ岳＞", stats:"距離 約9.2km / 標高差 約1,000m（累積登り約1,120m） / 周回 合計コースタイム 7:12", level:"中級", note:"小仙丈尾根で登り、仙丈小屋から藪沢カール・馬の背ヒュッテを経て藪沢新道で北沢峠へ下る周回。カール内は残雪期・大雨後の増水に注意。",
     popularity:3, trailhead:0, grade:{stamina:3, skill:"C", official:true, src:"信州 山のグレーディング（日本百名山ルート一覧表 No.180、山梨県掲載）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"馬の背ヒュッテ・仙丈小屋泊 1泊2日（周回）", stats:"1日目: 北沢峠→藪沢新道→馬の背ヒュッテ 泊 計3:30 / 2日目: 馬の背ヒュッテ→仙丈小屋→仙丈ヶ岳→小仙丈尾根→北沢峠 計4:30", level:"初〜中級", note:"日帰りだと行動時間が長くなるため、余裕を持って1泊で歩くプラン。馬の背ヒュッテ・仙丈小屋とも要予約。",
     popularity:2, trailhead:0, grade:{stamina:4, skill:"C", official:false}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{5:"南アルプス林道バスは歌宿止まり（5/31まで）。北沢峠まではさらに歩く必要があり、本格的な残雪期装備が必須。",6:"6/1から北沢峠までバス運行開始。藪沢カールや稜線上部にはまだ雪が残ることが多い。",7:"梅雨明け後が本番。7月中旬からお花畑が見頃になり始める。",8:"夏山シーズン本番。バス本数も多い。午後の雷雨に注意。",9:"秋晴れが増え、稜線からの展望が良くなる。虫も減って歩きやすい。",10:"上旬〜中旬が紅葉の見頃。下旬は初雪の可能性があり稜線の防寒・滑り止め装備を。バスは11/3までの予定だが天候次第で前倒し終了あり。",11:"初冬。11/3で林道バスの運行終了予定（積雪状況により前倒しの可能性）。"}
  }
}