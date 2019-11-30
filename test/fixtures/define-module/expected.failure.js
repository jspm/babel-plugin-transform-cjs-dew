var exports = {};
var module = {
  exports: exports
};
Object.defineProperty(module, 'exports', {
  get() {
    return 'yo';
  }

});

function () {
  Object.defineProperty(module, 'exports', {
    get() {
      return 'yo';
    }

  });
}()

export default module.exports;