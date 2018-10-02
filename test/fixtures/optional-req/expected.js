var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var x;

  try {
    x = null;
  } catch (e) {}

  if (x) console.log('Have optional');else console.log('No optional');
  return exports;
}