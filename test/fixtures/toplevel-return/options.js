module.exports = {
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  nowrap: true,
  esmDependencies: () => true
};
