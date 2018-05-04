!function (exports) {
  this.another = 'y';
  console.log(this.another);
  
  this['fn']();

  exports.p = 'q';
}(this);