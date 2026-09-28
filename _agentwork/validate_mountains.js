// JScript validator for data/mountains.js — run with:
//   cscript //nologo validate_mountains.js <path-to-mountains.js>
var stm = new ActiveXObject("ADODB.Stream");
stm.Type = 2; stm.Charset = "utf-8"; stm.Open();
stm.LoadFromFile(WScript.Arguments(0));
var src = stm.ReadText();
stm.Close();

// JScript is ES3: no const. The data file only uses const for the top-level array.
src = src.replace(/\bconst\b/g, "var");

try {
  eval(src);
} catch (e) {
  WScript.Echo("SYNTAX ERROR: " + e.message);
  WScript.Quit(1);
}

if (typeof MOUNTAINS === "undefined") {
  WScript.Echo("ERROR: MOUNTAINS is undefined after eval");
  WScript.Quit(1);
}
WScript.Echo("Parsed OK: " + MOUNTAINS.length + " mountains");

// Canonical area list (\u-escaped because cscript reads this source as ANSI):
// 北海道 東北 上信越・尾瀬 関東周辺 奥秩父・奥多摩 八ヶ岳・中信高原 北アルプス・御嶽
// 中央アルプス 南アルプス 富士・伊豆・箱根 北陸・近畿 中国・四国 九州・屋久島
var AREAS = {};
var AREA_LIST = [
  "\u5317\u6d77\u9053", // 北海道
  "\u6771\u5317", // 東北
  "\u4e0a\u4fe1\u8d8a\u30fb\u5c3e\u702c", // 上信越・尾瀬
  "\u95a2\u6771\u5468\u8fba", // 関東周辺
  "\u5965\u79e9\u7236\u30fb\u5965\u591a\u6469", // 奥秩父・奥多摩
  "\u516b\u30f6\u5cb3\u30fb\u4e2d\u4fe1\u9ad8\u539f", // 八ヶ岳・中信高原
  "\u5317\u30a2\u30eb\u30d7\u30b9\u30fb\u5fa1\u5dbd", // 北アルプス・御嶽
  "\u4e2d\u592e\u30a2\u30eb\u30d7\u30b9", // 中央アルプス
  "\u5357\u30a2\u30eb\u30d7\u30b9", // 南アルプス
  "\u5bcc\u58eb\u30fb\u4f0a\u8c46\u30fb\u7bb1\u6839", // 富士・伊豆・箱根
  "\u5317\u9678\u30fb\u8fd1\u757f", // 北陸・近畿
  "\u4e2d\u56fd\u30fb\u56db\u56fd", // 中国・四国
  "\u4e5d\u5dde\u30fb\u5c4b\u4e45\u5cf6" // 九州・屋久島
];
for (var ai = 0; ai < AREA_LIST.length; ai++) AREAS[AREA_LIST[ai]] = 1;

var errs = [];
var seen = {};
for (var i = 0; i < MOUNTAINS.length; i++) {
  var m = MOUNTAINS[i];
  var tag = (m && m.id) ? m.id : ("#" + i);
  if (!m.id) errs.push(tag + ": missing id");
  if (seen[m.id]) errs.push("duplicate id: " + m.id);
  seen[m.id] = 1;
  if (!m.name_ja) errs.push(tag + ": missing name_ja");
  if (!m.name_en) errs.push(tag + ": missing name_en");
  if (!m.region) errs.push(tag + ": missing region");
  if (!m.area) errs.push(tag + ": missing area");
  else if (!AREAS[m.area]) errs.push(tag + ": area not in the canonical 13 (see AREA_LIST in this validator)");
  if (!m.prefecture) errs.push(tag + ": missing prefecture");
  if (typeof m.elevation !== "number") errs.push(tag + ": bad elevation");
  if (!m.coords || typeof m.coords.lat !== "number" || typeof m.coords.lon !== "number") errs.push(tag + ": bad coords");
  if (typeof m.forecast_elevation !== "number") errs.push(tag + ": bad forecast_elevation");
  if (typeof m.hyakumeizan !== "boolean") errs.push(tag + ": bad hyakumeizan");
  if (!m.trip || typeof m.trip.tokyo_day !== "boolean" || typeof m.trip.hut !== "boolean" || typeof m.trip.car !== "boolean") errs.push(tag + ": trip needs {tokyo_day, hut, car} booleans");
  else if (m.trip.tokyo_day && (m.trip.hut || m.trip.car)) errs.push(tag + ": trip.tokyo_day cannot be true together with hut or car");
  if (!m.grading || typeof m.grading.wind_caution !== "number" || typeof m.grading.wind_danger !== "number") errs.push(tag + ": bad grading");
  if (m.grading) {
    var gk = m.grading;
    if (gk.snow_caution != null && typeof gk.snow_caution !== "number") errs.push(tag + ": bad snow_caution");
    if (gk.snow_danger != null && typeof gk.snow_danger !== "number") errs.push(tag + ": bad snow_danger");
    if (gk.cold_warn != null && typeof gk.cold_warn !== "number") errs.push(tag + ": bad cold_warn");
    if (gk.freeze_buffer != null && typeof gk.freeze_buffer !== "number") errs.push(tag + ": bad freeze_buffer");
    if (gk.snow_caution != null && gk.snow_danger != null && gk.snow_caution >= gk.snow_danger) errs.push(tag + ": snow_caution must be < snow_danger");
  }
  if (!m.trailheads || !m.trailheads.length) errs.push(tag + ": no trailheads");
  if (!m.routes || !m.routes.length) errs.push(tag + ": no routes");
  if (!m.seasonality || !m.seasonality.best) errs.push(tag + ": no seasonality");
  if (m.routes) {
    for (var r = 0; r < m.routes.length; r++) {
      var rt = m.routes[r];
      if (rt.grade) {
        if (typeof rt.grade.stamina !== "number" || rt.grade.stamina < 1 || rt.grade.stamina > 10) errs.push(tag + " route " + r + ": bad stamina");
        if (!rt.grade.skill || !/^[A-E]$/.test(rt.grade.skill)) errs.push(tag + " route " + r + ": bad skill");
        if (rt.grade.official === true && !rt.grade.src) errs.push(tag + " route " + r + ": official without src");
      }
      if (typeof rt.trailhead === "number" && (!m.trailheads || rt.trailhead >= m.trailheads.length)) errs.push(tag + " route " + r + ": trailhead index out of range");
      if (rt.sample === true && (!rt.segments || !rt.segments.length)) errs.push(tag + " route " + r + ": sample:true without segments (flag renders nowhere)");
      if (rt.sample === true && rt.verified) errs.push(tag + " route " + r + ": sample and verified are mutually exclusive");
      if (rt.verified && !/^\d{4}-\d{2}-\d{2}$/.test(rt.verified)) errs.push(tag + " route " + r + ": bad verified date (YYYY-MM-DD)");
      if (rt.verified && (!rt.segments || !rt.segments.length)) errs.push(tag + " route " + r + ": verified without segments (flag renders nowhere)");
      if (rt.segments && rt.segments.length && rt.sample !== true && !rt.verified) errs.push(tag + " route " + r + ": segments need sample:true or verified:\"YYYY-MM-DD\"");
    }
  }
  if (m.trailheads) {
    for (var t = 0; t < m.trailheads.length; t++) {
      var th = m.trailheads[t];
      if (!th.access || !th.access.length) { errs.push(tag + " trailhead " + t + ": no access entries"); continue; }
      for (var a = 0; a < th.access.length; a++) {
        var ac = th.access[a];
        var hasS = ac.sample === true, hasV = !!ac.verified;
        if (hasS && hasV) errs.push(tag + " trailhead " + t + " access " + a + ": sample and verified are mutually exclusive");
        if (!hasS && !hasV) errs.push(tag + " trailhead " + t + " access " + a + ": needs sample:true or verified:\"YYYY-MM-DD\"");
        if (hasV && !/^\d{4}-\d{2}-\d{2}$/.test(ac.verified)) errs.push(tag + " trailhead " + t + " access " + a + ": bad verified date (YYYY-MM-DD)");
      }
    }
  }
}
if (errs.length) {
  WScript.Echo("FIELD ERRORS (" + errs.length + "):\n" + errs.join("\n"));
  WScript.Quit(1);
}
WScript.Echo("All field checks passed");
