var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const _package = "asdf";
  p(_package);

  function p(_implements) {
    var o = {
      let: _implements
    };
    var {
      let: _let
    } = o;
    console.log(_let);
  }

  return exports;
}