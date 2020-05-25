var exports = {};
var other;
console.log(create);

function create() {}

console.log(create);
exports.create = create;
export default exports;
const _create = exports.create;
export { _create as create };