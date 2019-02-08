module.exports = {
  wildcardExtensions: ['.js', '.json', '.node'],
  resolveWildcard (name) {
    if (name === './x/*/*')
      return ['./x/a/a.js', './x/b/b.js', './x/c/c.js'];
  }
}
