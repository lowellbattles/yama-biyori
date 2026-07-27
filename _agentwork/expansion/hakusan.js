{
  id:"hakusan", name_ja:"白山（御前峰）", name_en:"Mt. Hakusan (Gozengamine)", region:"両白山地", prefecture:"石川県・岐阜県",
  elevation:2702, hyakumeizan:true,
  coords:{lat:36.1548, lon:136.7715}, forecast_elevation:2700,
  grading:{
    ridgeline:2450,
    wind_caution:10, wind_danger:16,
    precip_caution:4, precip_danger:12,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"日本有数の豪雪地帯。砂防新道上部や南竜〜室堂間には水屋尻雪渓・カンクラ雪渓・万才谷雪渓など複数の雪渓が7月上旬まで残り、視界不良時はルートを見失いやすい。根雪は例年11月には積もり始める。"
  },
  trailheads:[
    {
      name:"別当出合（標高1,260m）",
      access:[
        {mode:"バス", line:"白山登山バス 金沢便〈急行〉（北陸鉄道）＋市ノ瀬〜別当出合シャトルバス", from:"JR金沢駅西口",
         duration:"市ノ瀬まで約2時間10分＋シャトルバス約20分",
         weekday:"金沢駅西口発 例: 6:00 / 6:15（運行日注意）→市ノ瀬着 例: 8:12 / 8:27", weekend:"同左（運行日は白山登山バス運行日カレンダーによる）",
         season:"2026年は7/4〜10/12の設定運行日のみ運行（運行日カレンダーは北陸鉄道公式で要確認）", url:"https://www.hokutetsu.co.jp/", sample:true},
        {mode:"バス", line:"白山登山バス 松任便（㈱マップ）", from:"IR松任駅南口",
         duration:"市ノ瀬まで約1時間10分（途中、白峰・菜さい経由）",
         weekday:"運行日・発着時刻は㈱マップ公式と石川県の運行カレンダーで要確認（早朝発・午後下山便の設定）", weekend:"同左（運行日注意）",
         season:"2026年運行日カレンダーによる（7〜10月）", url:"https://map.ishikawa.jp/", sample:true},
        {mode:"シャトルバス", line:"市ノ瀬〜別当出合シャトルバス（石川県白山登山交通対策協議会）", from:"市ノ瀬",
         duration:"約20分",
         weekday:"規制日は早朝から午後まで約20〜30分間隔でピストン運行（上り・下りの運行時間帯は年度の運行カレンダーで要確認）", weekend:"同左（規制日・規制翌日でダイヤが変わるため要確認）",
         season:"2026年マイカー規制日（7/4〜10/12の指定日、詳細は運行カレンダー）のみ運行。運賃は大人片道1,000円・往復2,000円", url:"https://www.pref.ishikawa.lg.jp/hakusan/tozaninf/peak2.html", sample:true},
        {mode:"マイカー", line:"中部縦貫自動車道 白山IC 経由 国道157号・県道白山公園線", from:"白山IC",
         duration:"市ノ瀬まで約40分（別当出合へはマイカー規制日以外のみ乗入れ可）",
         weekday:"マイカー規制日は市ノ瀬〜別当出合間が終日通行止め・駐車禁止（11月30日まで）のためシャトルバスに乗換必須", weekend:"同左",
         season:"通年（積雪期は県道白山公園線の白峰以奥が冬期閉鎖）", url:"https://www.pref.ishikawa.lg.jp/hakusan/tozaninf/peak2.html", sample:true}
      ]
    },
    {
      name:"大白川温泉登山口（平瀬道・標高1,256m）※2026年は登山口未開通",
      access:[
        {mode:"マイカー", line:"県道451号白山公園線（白川村大白川〜平瀬、13.2km）経由", from:"道の駅 飛騨白山（国道156号）",
         duration:"平常時は登山口まで約30〜40分",
         weekday:"2026年は前年の大雪による道路施設復旧工事のため全線が終日通行止め。解除は令和8年10月1日（木）予定", weekend:"同左（歩行者・自転車も通行不可）",
         season:"例年6月上旬〜10月下旬が通行可能期間だが、2026年シーズンはほぼ全期間通行止め", url:"https://www.pref.gifu.lg.jp/uploaded/attachment/500867.pdf", sample:true},
        {mode:"バス", line:"濃飛バス 平瀬温泉線（夏季運行）", from:"JR高山駅 / 白川郷（合掌造り集落）",
         duration:"高山駅から平瀬温泉バス停まで約78分・白川郷から約20分",
         weekday:"運行日・時刻は濃飛バス公式サイトで要確認（登山口へは平瀬温泉バス停からさらに車移動が必要）", weekend:"同左",
         season:"夏季運行。2026年は登山口手前の県道が10月1日まで通行止めのため、この区間の利用は事実上不可", url:"https://www.nouhibus.co.jp/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"白山室堂（白山室堂ビジターセンター）", elevation:2450, open:"春山期 5/1〜6/30（素泊まりのみ）・夏山期 7/1〜8/31（食事付）・秋山期 9/1〜10/15予定（食事付）", reservation:"電話予約のみ（白山室堂予約センター、2026年は4/1 9:00より受付開始）", url:"https://hakusan-guide.or.jp/hakusan_stay/murodou/", tel:"076-273-1001"},
    {name:"白山雷鳥荘", elevation:2450, open:"5月1日〜10月15日", reservation:"電話予約のみ（白山室堂予約センターに集約）", url:"https://hakusan-guide.or.jp/hakusan_stay/hakusan_raicyousou/", tel:"076-273-1001"},
    {name:"南竜山荘", elevation:2080, open:"7月1日〜10月15日（期間中無休）", reservation:"電話予約（南竜山荘予約センター、9:00〜17:00・13:00〜14:00を除く）", url:"https://city-hakusan.com/hakusan/naryusanso/", tel:"076-259-2022"},
    {name:"甚之助避難小屋（無人・宿泊不可）", elevation:1970, open:"通年開放", reservation:"—（緊急時利用。夏秋は水場あり）", url:"", tel:""}
  ],
  routes:[
    {name:"砂防新道 別当出合〜白山室堂〜御前峰 往復", stats:"距離 約12.0km（別当出合〜白山室堂間6.0km×往復）/ 標高差 約1,190m（御前峰山頂へはさらに+約250m）/ 登り4:00・下り2:30（別当出合〜白山室堂、白山観光協会公表の標準コースタイム）", level:"中級", note:"最もポピュラーなルート。登り専用「付け替え道」・下り専用「旧道」に分離運用（下りは滑りやすい旧道区間に注意）。中飯場・甚之助避難小屋を経由。白山は活火山（現在の噴火警戒レベルは気象庁 https://www.data.jma.go.jp/vois/data/report/activity_info/313.html で要確認）。",
     popularity:3, trailhead:0, grade:{stamina:5, skill:"B", official:false}, sample:true},
    {name:"観光新道 別当出合〜白山室堂〜御前峰（砂防新道との周回下山に利用）", stats:"距離 約12.2km（別当出合〜白山室堂間6.1km×往復）/ 標高差 約1,190m / 登り4:50・下り3:00（白山観光協会公表の標準コースタイム）", level:"中級", note:"お花畑と展望に優れるが砂防新道よりやや健脚向け。別当出合〜別当坂分岐は急坂のため悪天候時は増水した沢の通過に注意。改良工事等で季節的に通行止めになる場合あり、事前に石川県公式サイトで確認を。",
     popularity:2, trailhead:0, grade:{stamina:6, skill:"B", official:false}, sample:true},
    {name:"平瀬道 大白川温泉〜白山室堂〜御前峰 往復", stats:"距離 約14.2km（往復）/ 標高差 約1,446m（大白川温泉1,256m→御前峰2,702m）/ 合計コースタイム 約8:12（岐阜県グレーディング公表値。参考：白山観光協会公表の大白川〜白山室堂間は6.9km・登り4:10下り2:50）", level:"中級", note:"※2026年は登山口へのアクセス道（県道白山公園線）が10月1日まで終日全面通行止めのため事実上登山不可。開通後も紅葉と初雪が重なる短い期間のみの利用となる見込み。ブナ・ミズナラ・ダケカンバの美林で知られる。大倉山避難小屋は改修状況を事前確認のこと。",
     popularity:1, trailhead:1, grade:{stamina:4, skill:"C", official:true, src:"岐阜県 山のグレーディング（日本百名山ルート一覧表 No.160）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}, sample:true}
  ],
  seasonality:{
    best:[7,8,9,10],
    notes:{
      5:"残雪期。白山室堂は素泊まりのみの春山期（5/1〜6/30）。登山道はまだ雪に覆われ、アイゼン・ピッケルなど本格的な雪山装備と経験が必要。",
      6:"梅雨入り。雪解けが進むが上部には雪渓が残る。山開きは7月1日。",
      7:"7月1日 山開き。マイカー規制とシャトルバス運行が始まる（2026年は7/4〜）。高山植物が咲き始めるが梅雨明けまでは大雨に注意。",
      8:"夏山最盛期。お盆期間は市ノ瀬駐車場・シャトルバスとも大混雑。午後は雷雨が発生しやすく早めの下山を。",
      9:"花の最盛期は過ぎるが涼しく歩きやすい好期。台風接近時は登山を控える。",
      10:"紅葉が見頃（例年10月上旬）。10月12日でマイカー規制終了、10月15日で白山室堂・南竜山荘は閉山。中旬以降は初雪の可能性があり装備に注意。2026年は平瀬道の県道が10月1日に開通予定だが、閉山間際のごく短い期間の利用となる。",
      11:"初雪と積雪で通常登山は困難。県道白山公園線など主要道路も順次冬期閉鎖。"
    }
  }
}
