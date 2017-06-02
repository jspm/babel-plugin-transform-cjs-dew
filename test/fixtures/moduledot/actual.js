for (let i = 0; i < module.children.length; i++) {
  module.children[i].thing;
}

if (module.loaded && module.parent) {
  ok();
}

console.log(module.filename);
console.log(module['id']);

module.require('x');
