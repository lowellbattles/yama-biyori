// JScript validator for ONE expansion object file (_agentwork/expansion/<id>.js).
// The file must contain exactly one JS object literal: { id:"...", ... }
// Run: cscript //nologo _agentwork\validate_single.js _agentwork\expansion\<id>.js
var stm = new ActiveXObject("ADODB.Stream");
stm.Type = 2; stm.Charset = "utf-8"; stm.Open();
stm.LoadFromFile(WScript.Arguments(0));
var src = stm.ReadText();
stm.Close();
// strip BOM if present
if (src.charCodeAt(0) === 0xFEFF) src = src.substring(1);
src = "var MOUNTAINS = [" + src.replace(/\bconst\b/g, "var") + "];";

try {
  eval(src);
} catch (e) {
  WScript.Echo("SYNTAX ERROR: " + e.message);
  WScript.Quit(1);
}
if (typeof MOUNTAINS === "undefined" || MOUNTAINS.length !== 1) {
  WScript.Echo("ERROR: file must contain exactly one object literal");
  WScript.Quit(1);
}
var errs = [];
var m = MOUNTAINS[0];
var tag = (m && m.id) ? m.id : "#0";
if (!m.id) errs.push(tag + ": missing id");
if (!/^[a-z0-9-]+$/.test(m.id || "")) errs.push(tag + ": id must be ascii kebab-case");
if (!m.name_ja) errs.push(tag + ": missing name_ja");
if (!m.name_en) errs.push(tag + ": missing name_en");
if (!m.region) errs.push(tag + ": missing region");
if (!m.prefecture) errs.push(tag + ": missing prefecture");
if (typeof m.elevation !== "number") errs.push(tag + ": bad elevation");
if (!m.coords || typeof m.coords.lat !== "number" || typeof m.coords.lon !== "number") errs.push(tag + ": bad coords");
if (typeof m.forecast_elevation !== "number") errs.push(tag + ": bad forecast_elevation");
if (typeof m.hyakumeizan !== "boolean") errs.push(tag + ": bad hyakumeizan");
if (!m.grading || typeof m.grading.wind_caution !== "number" || typeof m.grading.wind_danger !== "number") errs.push(tag + ": bad grading");
if (m.grading && !m.grading.snow_note) errs.push(tag + ": missing grading.snow_note");
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
    if (rt.segments && rt.sample !== true) errs.push(tag + " route " + r + ": segments without sample:true");
    if (rt.sample === true && (!rt.segments || !rt.segments.length)) errs.push(tag + " route " + r + ": sample:true without segments (flag renders nowhere)");
  }
}
if (m.trailheads) {
  for (var t = 0; t < m.trailheads.length; t++) {
    var th = m.trailheads[t];
    if (!th.access || !th.access.length) { errs.push(tag + " trailhead " + t + ": no access entries"); continue; }
    for (var a = 0; a < th.access.length; a++) {
      if (th.access[a].sample !== true) errs.push(tag + " trailhead " + t + " access " + a + ": missing sample:true");
      if (!th.access[a].url) errs.push(tag + " trailhead " + t + " access " + a + ": missing url");
    }
  }
}
if (errs.length) {
  WScript.Echo("FIELD ERRORS (" + errs.length + "):\n" + errs.join("\n"));
  WScript.Quit(1);
}
WScript.Echo("OK: " + m.id + " (" + m.name_ja + ") passes all single-object checks");
