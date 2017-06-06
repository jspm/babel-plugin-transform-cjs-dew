export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};
export var __demExec = function () {
  __demExec = null;
  delete {}['asdf'];
  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = '/resolved';
  fs.readFile(path);
};
