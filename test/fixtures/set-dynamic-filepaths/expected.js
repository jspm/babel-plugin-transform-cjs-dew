var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  console.log('blah.js');
  console.log('');
  return exports;
}