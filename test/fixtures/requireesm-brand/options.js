module.exports = {
  esmDependencies (x) {
    if (x === 'thing')
      return 'namespace';
    return 'namespace-interop';
  }
};
