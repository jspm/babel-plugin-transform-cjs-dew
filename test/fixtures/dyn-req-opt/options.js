module.exports = {
  resolve (name, opts) {
    if (opts.optional)
      return null;
  },
  browserOnly: true
}
