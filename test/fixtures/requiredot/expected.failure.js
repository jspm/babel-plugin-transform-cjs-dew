var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return module.exports;
  _dewExec = true;

  function _notFound(id) {
    var e = new Error("Cannot find module '" + id + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }

  delete {}['asdf'];

  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = "/resolved";
  fs.readFile(path);
  return module.exports;
}