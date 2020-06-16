var globalThis = 5;
global.globalThis = 10;

console.log(globalThis);

(function () {
  console.log(this.globalThis);
})();

