var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return module.exports;
  _dewExec = true;
  Object.defineProperty(module, 'exports', {
    get() {
      return 'yo';
    }

  });
  return module.exports;
}