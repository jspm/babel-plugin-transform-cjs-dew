const x = { y: 'z' };

const other = 'z';

function p (arg) {
  console.log(arg);
}

with (x) {
  p(other + y);
}


try {
  with(this.document.defaultView || Object.create(null))
    with(this.document)
      with(this.form)
        with(this.element)
          return eval("(function(event){" + this.body + "})");
}
catch (err) {
  throw err;
}
