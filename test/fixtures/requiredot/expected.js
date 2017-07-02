export var exports = {};
var module = {
  get exports() {
    return exports;
  },

  set exports(_exports) {
    exports = _exports;
  }

};
export var __dewExec = function () {
  __dewExec = null;
  delete {}['asdf'];
  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = '/resolved';
  fs.readFile(path);
};
