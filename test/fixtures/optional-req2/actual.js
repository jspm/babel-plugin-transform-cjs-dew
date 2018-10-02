try {
  var supportsColor = require('supports-color');

  if (supportsColor) {
    console.log('has supports color');
  }
} catch (error) {}
