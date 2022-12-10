var exports = {};
const x = {
  y: "z"
};
const other = "z";
function p(arg) {
  console.log(arg);
}
new Function("_temp", "x", "other", "p", `with (_temp) { {
  p(other + y);
} }`)(x, x, other, p);
try {
  new Function("_temp2", `with (_temp2) { with(this.document)
      with(this.form)
        with(this.element)
          return eval("(function(event){" + this.body + "})"); }`)(exports.document.defaultView || Object.create(null));
} catch (err) {
  throw err;
}
export default exports;