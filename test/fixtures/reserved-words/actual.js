const package = 'asdf';
p(package);

function p (implements) {
  var o = {
    let: implements
  };
  var { let } = o;
  console.log(let);
}
