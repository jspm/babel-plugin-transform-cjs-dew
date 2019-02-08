module.exports = {
  resolve (name) {
    if (name.startsWith('./'))
      return '/base' + name.substr(1);
    if (name.startsWith('../'))
      return '/' + name.substr(1);
    if (name[0] === '/')
      return name;
  }
}
