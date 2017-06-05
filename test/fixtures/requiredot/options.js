module.exports = {
  resolve (x) {
    if (x === './asdf.js')
      return '/resolved';
  }
};
