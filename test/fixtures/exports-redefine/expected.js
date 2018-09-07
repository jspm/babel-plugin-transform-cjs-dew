var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return module.exports;
  _dewExec = true;
  var exports = 'asdf';
  module.exports = 'asdf';
  return module.exports;
}