import { dew as _anotherDew } from "another";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var thing = null;

  var another = _anotherDew();

  exports.y = function p() {
    return null;
  };

  return exports;
}