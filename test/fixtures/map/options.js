module.exports = {
  resolve (name) {
    if (name === 'process')
      return 'process-custom.js';
    if (name.startsWith('thing'))
      return 'https://site.com/' + name;
  }
}
