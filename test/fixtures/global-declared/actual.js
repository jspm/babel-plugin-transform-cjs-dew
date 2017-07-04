var global = 5;
p = 10, q = 11;
module.exports = global;

var obj = {};

var p = {
  method: function () {
    obj = {};
  }
};
