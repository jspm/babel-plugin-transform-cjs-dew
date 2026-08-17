var init = function () {
  return new Promise(function (resolve) {
    // emscripten modularisation undefines module so that emcc's
    // `module['exports'] = Module` tail is skipped
    module = undefined;
    resolve({});
  });
};

if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = init;
  module.exports.default = init;
}
