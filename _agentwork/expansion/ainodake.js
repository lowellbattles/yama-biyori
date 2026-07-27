{
  id:"ainodake", name_ja:"間ノ岳", name_en:"Mt. Ainodake", region:"南アルプス北部", prefecture:"山梨県・静岡県",
  elevation:3190, hyakumeizan:true,
  coords:{lat:35.6461, lon:138.2283}, forecast_elevation:3100,
  grading:{
    ridgeline:3100,
    wind_caution:8, wind_danger:13,
    precip_caution:3, precip_danger:8,
    snow_months:[10,11,12,1,2,3,4,5,6],
    snow_note:"草すべりの雪渓は例年6月下旬〜7月上旬まで残ることがあり、残雪期はアイゼン・ピッケルが必要。北岳山荘から間ノ岳・農鳥小屋にかけては樹林のない3,000m級のトラバース主体の稜線が長く続き、悪天候時は風を遮る場所も逃げ場もほぼない。低体温症・道迷いのリスクが高いため、荒天予報時は稜線への突入を控えること。"
  },
  trailheads:[
    {
      name:"広河原登山口（標高1,520m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 甲府駅・芦安駐車場〜広河原線（山梨交通）", from:"JR甲府駅南口・芦安駐車場",
         duration:"甲府駅から約1時間55分／芦安駐車場から約1時間",
         weekday:"甲府駅発 例: 9:05 / 10:05 / 12:05（7/18〜8/23は4:35・6:55・14:05発も毎日運行）", weekend:"甲府駅発 例: 9:05 / 10:05 / 12:05（8/24〜11/3の土休日は4:35・6:55・14:05発も運行）",
         season:"2026年は6月26日〜11月3日運行（南アルプス市営バスは2026年度運行休止）", url:"https://ykbus.jp/route_bus/route_sp_info/hirogawara/", sample:true}
      ]
    },
    {
      name:"奈良田登山口（白峰三山縦走・大門沢下山口、標高約830m）",
      access:[
        {mode:"バス", line:"南アルプス登山バス 奈良田〜広河原線（山梨交通）", from:"奈良田駐車場（第一発電所・野呂川発電所経由）",
         duration:"約45分〜50分（奈良田〜広河原）",
         weekday:"広河原発（下山方向）例: 7:00 / 14:30（8/24〜11/3土休日は16:35発も運行）", weekend:"広河原発（下山方向）例: 7:00 / 14:30（7/18〜8/23は16:35発も毎日運行）",
         season:"2026年は6月26日〜11月3日運行（奈良田発5:30便は7/1〜8/31毎日・9/1〜11/3土休日のみ）", url:"https://ykbus.jp/route_bus/route_sp_info/hirogawara/", sample:true}
      ]
    }
  ],
  huts:[
    {name:"白根御池小屋", elevation:2236, open:"2026年は6月15日〜11月上旬", reservation:"予約システム「南ぷすリザーブ」推奨（2026年度受付は4月1日10:00開始）、電話も可", url:"https://shiraneoike.ashiyasu.com/", tel:"090-3201-7683"},
    {name:"北岳肩の小屋", elevation:3000, open:"6月中旬〜11月上旬（開始・終了日は年により変動、要確認）", reservation:"電話予約のみ（Web予約不可）", url:"https://katanokoya.com/", tel:"055-288-2421（事務所）／090-4606-0068（現地・営業期間中）"},
    {name:"北岳山荘", elevation:2900, open:"2026年は6月下旬〜11月上旬", reservation:"完全予約制。予約システム「南ぷすリザーブ」のみ・電話予約不可（2026年度受付は4月1日10:00開始）", url:"https://kitadake.ashiyasu.com/", tel:"090-4529-4947（現地・営業期間中の問合せ用、予約不可）"},
    {name:"農鳥小屋", elevation:2800, open:"例年7月上旬〜10月中旬頃（年により変動、要確認）", reservation:"原則不要。5名以上または連休中の宿泊は要連絡", url:"https://notorihut.jimdofree.com/", tel:"0556-48-2533"},
    {name:"大門沢小屋", elevation:1765, open:"例年7月1日〜10月中旬", reservation:"電話予約", url:"https://www.daimonzawa.com/", tel:"090-7635-4244"}
  ],
  routes:[
    {name:"広河原→白根御池小屋→草すべり→北岳→北岳山荘→間ノ岳 往復", stats:"距離 約19.1km（往復）/ 標高差 累積登り・下りとも約2,060m / 合計コースタイム16.0時間（日帰りは健脚限定、北岳山荘か肩の小屋での1泊2日が標準）", level:"上級", note:"日本第2位・北岳（3,193m）の山頂を経由してさらに間ノ岳まで稜線を往復する。北岳山頂から間ノ岳往復だけでも2〜3時間かかり、日帰りは行動時間が長大なため北岳山荘泊が現実的。",
     popularity:3, trailhead:0, grade:{stamina:6, skill:"C", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.163）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}},
    {name:"白峰三山縦走（広河原→北岳→間ノ岳→農鳥岳→大門沢→奈良田）", stats:"距離 約25.3km / 標高差 累積登り約2,550m・下り約3,250m / 合計コースタイム18.3時間（2泊3日が標準）", level:"上級", note:"日本第2位・北岳と第3位タイ・間ノ岳、農鳥岳を結ぶ南アルプス屈指の縦走路。北岳山荘・農鳥小屋（または大門沢小屋）で2泊するのが一般的。間ノ岳から農鳥岳にかけては森林限界上のトラバースが長く続き、悪天候時は撤退路が限られる。下山は大門沢小屋を経て奈良田へ。",
     popularity:2, trailhead:0, grade:{stamina:7, skill:"C", official:true, src:"山梨県 山のグレーディング（日本百名山ルート一覧表 No.173）", url:"https://www.pref.nagano.lg.jp/kankoki/sangyo/kanko/documents/hyakumeizangradingroutelist.pdf"}}
  ],
  seasonality:{
    best:[7,8,9],
    notes:{
      6:"残雪期の終盤。草すべり上部や北岳山荘周辺に雪渓が残ることがありアイゼン携行が安心。登山バスは6月26日運行開始。",
      7:"山開き後、稜線の小屋が本格営業に入る。梅雨明け（例年7月中旬〜下旬）まで天候不安定で午後の雷雨に注意。",
      8:"盛夏。稜線でも日中の強い日差しと午後の雷雨リスクが続く。北岳山荘・農鳥小屋とも混雑するため予約は早めに。",
      9:"上旬は残暑が残るが中旬以降は秋の高気圧で安定した晴天が増える。朝晩は氷点下近くまで冷え込み始める。",
      10:"稜線から草紅葉が始まり中旬にかけて見頃。上旬でも初雪の可能性があり防寒・アイゼンの携行を検討。登山バスは11月3日まで。"
    }
  }
}
