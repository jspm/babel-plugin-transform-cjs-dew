var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  System._nodeRequire("foo");
  SystemJS._nodeRequire("bar");
  return exports;
}