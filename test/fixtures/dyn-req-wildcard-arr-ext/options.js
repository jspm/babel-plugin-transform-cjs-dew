module.exports = {
  wildcardExtensions: ['.js', '.json', '.node'],
  resolve (name) {
    if (name === './x/*/*')
      return ['./x/a/a.js', './x/b/b.js', './x/c/c.js'];
  }
}
