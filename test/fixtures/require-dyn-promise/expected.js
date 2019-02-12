var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Promise.resolve(import(asdf).then(m => m.default));
  return exports;
}