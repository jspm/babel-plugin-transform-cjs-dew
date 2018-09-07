var exports = {},
    _dewExec = false;

var _global = typeof self !== "undefined" ? self : global;

export function dew() {
  var asdf;
  if (_dewExec) return exports;
  _dewExec = true;
  exports = 1;
  require = 2;
  module = 3;
  __filename = 4;
  __dirname = 5;
  _global.asdf = asdf = 6;
}