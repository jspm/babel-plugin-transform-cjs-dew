var exports = {};
asdf();
asdf();
asdf();

function asdf(obj) {
  console.log("c");
}

asdf();
export default exports;
const _asdf = exports.asdf;
export { _asdf as asdf };