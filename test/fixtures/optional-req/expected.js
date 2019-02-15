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

  var x;

  try {
    x = _notFound('x');
  } catch (e) {}

  if (x) console.log('Have optional');else console.log('No optional');
  return exports;
}