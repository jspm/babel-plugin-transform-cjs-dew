var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var module;
  module.exports = 'asdf';
  return exports;
}