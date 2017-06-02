module.exports = {
  requireResolve (x) {
    if (x === './asdf.js')
      return '/resolved';
  }
};
