import { dew as _aDew } from "./x/a/a.js";
import { dew as _bDew } from "./x/b/b.js";
import { dew as _cDew } from "./x/c/c.js";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = function (e, e2) {
    return e === "a" && (e2 === "a.js" || e2 === "a") ? _aDew() : e === "b" && (e2 === "b.js" || e2 === "b") ? _bDew() : e === "c" && (e2 === "c.js" || e2 === "c") ? _cDew() : null;
  }(style, item);
  return exports;
}