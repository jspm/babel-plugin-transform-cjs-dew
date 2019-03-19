var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nullRequire = function () {
    var e = new Error("Cannot find module '" + id + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }();

  var p;

  try {
    p = _nullRequire('unknown');
  } catch (e) {
    console.log('IT WAS NOT FOUND!');
  }

  try {
    var p = _nullRequire('it is not known');
  } catch (e) {
    throw e;
  }

  return exports;
}