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

  try {
    var supportsColor = _notFound('supports-color');

    if (supportsColor) {
      console.log('has supports color');
    }
  } catch (error) {}

  return exports;
}