var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = exports = main;

  function main() {}

  exports.another = 'export';
  return exports;
}