var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  if (1) return 0 && undefined;
  if (2) return;
  if (3) return (a && b || c) && undefined;
  {
    return 5 && undefined;
  }
}