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
  if (!m.prefecture) errs.push(tag + ": missing prefecture");
  if (typeof m.elevation !== "number") errs.push(tag + ": bad elevation");
  if (!m.coords || typeof m.coords.lat !== "number" || typeof m.coords.lon !== "number") errs.push(tag + ": bad coords");
  if (typeof m.forecast_elevation !== "number") errs.push(tag + ": bad forecast_elevation");
  if (typeof m.hyakumeizan !== "boolean") errs.push(tag + ": bad hyakumeizan");
  if (!m.grading || typeof m.grading.wind_caution !== "number" || typeof m.grading.wind_danger !== "number") errs.push(tag + ": bad grading");
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
    }
  }
  if (m.trailheads) {
    for (var t = 0; t < m.trailheads.length; t++) {
      var th = m.trailheads[t];
      if (!th.access || !th.access.length) errs.push(tag + " trailhead " + t + ": no access entries");
    }
  }
}
if (errs.length) {
  WScript.Echo("FIELD ERRORS (" + errs.length + "):\n" + errs.join("\n"));
  WScript.Quit(1);
}
WScript.Echo("All field checks passed");
