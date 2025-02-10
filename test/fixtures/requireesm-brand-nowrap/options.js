module.exports = {
  nowrap: true,
  cjsMarker: true,
  esmDependencies (x) {
    if (x === 'thing')
      return 'namespace';
    return 'namespace-interop';
  }
};
