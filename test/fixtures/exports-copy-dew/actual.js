exports = module.exports = main

function main () {
  require('./outer.js');
}

exports.another = 'export'
