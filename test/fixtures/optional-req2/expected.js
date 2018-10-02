var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  try {
    var supportsColor = require('supports-color');

    if (supportsColor) {
      console.log('has supports color');
    }
  } catch (error) {}

  return exports;
}