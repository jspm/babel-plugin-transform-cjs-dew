module.exports = {
  nowrap: true,
  esmDependencies (name) {
    if (name === 'buffer')
      return true;
  }
}
