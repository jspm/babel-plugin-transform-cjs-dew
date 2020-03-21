// General rule:
// - last function declaration is implicit assignment
// - var statements after first are assignments

(function () {
  function x () {}
  var x;

  // function
  console.log(x);
})();

(function () {
  function x () {}
  var x = 10;
  var x = 11;

  // 11
  console.log(x);
})();

(function () {
  var x;
  function x () {}

  // function
  console.log(x);
})();

(function () {
  function x () {
    return 'a';
  }
  function x () {
    return 'b';
  }

  // b
  console.log(x());
})();

(function () {
  var x = 5;
  function x () {}

  // 5
  console.log(x);
})();
