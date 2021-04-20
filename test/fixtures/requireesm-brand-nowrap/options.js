module.exports = {
  nowrap: true,
  esmDependencies (x) {
    if (x === 'thing')
      return 'namespace';
    return 'namespace-interop';
  }
};
