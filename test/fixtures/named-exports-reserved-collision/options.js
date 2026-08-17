// zod exports both `_function` and `function`; the reserved-word alias for the
// latter must not collide with the former's direct declaration.
module.exports = {
  nowrap: true,
  esmDependencies: () => true,
  namedExports: ['_function', 'function']
};
