var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // this isnt supposed to work, but so be it
  exports = 'asdf';
  return exports;
}