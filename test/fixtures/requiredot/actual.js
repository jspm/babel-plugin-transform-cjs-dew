delete require.cache['asdf'];
require.extensions['.yay'] = function () {};

if (require.main === module) {
  console.log('cli');
}

var path = require.resolve('./asdf.js');
fs.readFile(path);
