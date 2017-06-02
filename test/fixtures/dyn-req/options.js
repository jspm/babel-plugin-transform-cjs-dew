module.exports = {
  requireResolve (name) {
    if (name.startsWith('./'))
      return '/base' + name.substr(2);
    if (name.startsWith('../'))
      return '/' + name.substr(2);
    if (name[0] === '/')
      return name;
  }
}
