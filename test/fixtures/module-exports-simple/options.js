module.exports = {
  nowrap: true,
  esmDependencies: () => true,
  namedExports: ['asdf'],
  define: {
    'process.env.NODE_ENV': '"production"'
  }
};
