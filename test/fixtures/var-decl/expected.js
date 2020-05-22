var exports = {};

// General rule:
// - last function declaration is implicit assignment
// - var statements after first are assignments
(function () {
  function x() {}

  // function
  console.log(x);
})();

(function () {
  function x() {}

  x = 10;
  x = 11; // 11

  console.log(x);
})();

(function () {
  function x() {} // function


  console.log(x);
})();

(function () {
  function x() {
    return "b";
  } // b


  console.log(x());
})();

(function () {
  x = 5;

  function x() {} // 5


  console.log(x);
})();

export default exports;