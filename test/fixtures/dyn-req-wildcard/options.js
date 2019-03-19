module.exports = {
  resolve (name) {
    if (name === './x/*')
      return './x/z'
  }
}
