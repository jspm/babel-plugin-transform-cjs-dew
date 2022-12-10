import { dew as _processDew } from "process";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _processDew();
  if (typeof process === "object" || process.env.NODE_ENV === "something") {
    console.log("guarded!");
  }
  return exports;
}