import { dew as _anotherDew } from "another";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function _notFound(id) {
    var e = new Error("Cannot find module '" + id + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }

  var thing = _notFound('thing');

  var another = _anotherDew();

  exports.y = function p() {
    return _notFound('thing');
  };

  return exports;
}