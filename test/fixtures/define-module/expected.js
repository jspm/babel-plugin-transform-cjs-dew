var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(module, 'exports', {
    get() {
      return 'yo';
    }

  });
  exports = module.exports;
}