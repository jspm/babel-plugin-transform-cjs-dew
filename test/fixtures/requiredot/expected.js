var exports = {};
var module = {
  exports: exports
};

var __dew__ = function () {
  __dew__ = null;
  delete {}['asdf'];
  ({})['.yay'] = function () {};

  if (undefined === module) {
    console.log('cli');
  }

  var path = '/resolved';
  fs.readFile(path);
  exports = module.exports;
};

export { exports, __dew__ };