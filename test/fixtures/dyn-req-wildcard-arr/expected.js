import { dew as _xAAJsDew } from "./x/a/a.js";
import { dew as _xBBJsDew } from "./x/b/b.js";
import { dew as _xCCJsDew } from "./x/c/c.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (e, e2) {
    return e === "a" && e2 === "a" ? _xAAJsDew() : e === "b" && e2 === "b" ? _xBBJsDew() : e === "c" && e2 === "c" ? _xCCJsDew() : null;
  }(style, item);

  return exports;
}