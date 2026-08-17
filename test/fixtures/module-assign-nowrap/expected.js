var exports = {};
var module = {};
var init = function () {
  return new Promise(function (resolve) {
    // emscripten modularisation undefines module so that emcc's
    // `module['exports'] = Module` tail is skipped
    module = undefined;
    resolve({});
  });
};
if (true) {
  exports = init;
  exports.default = init;
}
export default exports;