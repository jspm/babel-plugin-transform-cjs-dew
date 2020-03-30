function compile(param, filters, theReporter) {
  return 'compiled';
}
var compile;
(function (compile) {
  compile.compiler = true;
})(compile || (compile = {}));
module.exports = compile;