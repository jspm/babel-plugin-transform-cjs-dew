var p;
try {
  p = require('unknown');
}
catch (e) {
  console.log('IT WAS NOT FOUND!');
}

try {
  var p = require('it is not known');
}
catch (e) {
  throw e;
}
