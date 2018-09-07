var exports = {},
    _dewExec = false;
var module = {
  exports: exports
};
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  delete {}['asdf'];

  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = "/resolved";
  fs.readFile(path);
  exports = module.exports;
}