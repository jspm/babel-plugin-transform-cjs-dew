import { dew as _process2Dew } from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _process = _process2Dew();

  function process() {
    console.log("custom process");
  }

  _process.nextTick(() => {
    process();
  });

  return exports;
}