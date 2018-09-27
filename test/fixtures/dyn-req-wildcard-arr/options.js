module.exports = {
  resolveWildcard (name) {
    if (name === './x/*/*.js')
      return ['./x/a/a.js', './x/b/b.js', './x/c/c.js'];
  }
}
