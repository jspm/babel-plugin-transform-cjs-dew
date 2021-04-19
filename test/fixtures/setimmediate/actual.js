const fn = require('dep');

setImmediate(function () {
  fn();
});

(function () {
  var process, _process, _process2, _process3;
  setImmediate(() => {});
})();

console.log(process);
