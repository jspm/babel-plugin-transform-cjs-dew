export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};
export var __esdew = function () {
  __esdew = null;
  delete {}['asdf'];
  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = '/resolved';
  fs.readFile(path);
};
