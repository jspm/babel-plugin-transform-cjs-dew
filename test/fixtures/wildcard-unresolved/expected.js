var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  for (x of thing) require(`unknown/${x}`);

  return exports;
}