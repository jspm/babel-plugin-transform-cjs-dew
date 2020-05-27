module.exports = require('external');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('another');
}

{
  let exports = 5;
  module.exports = require('another');
}
