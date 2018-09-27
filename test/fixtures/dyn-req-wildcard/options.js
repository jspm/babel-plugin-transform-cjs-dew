module.exports = {
  resolveWildcard (name) {
    if (name === './x/*')
      return './x/z'
  }
}
