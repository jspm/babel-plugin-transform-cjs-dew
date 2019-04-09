module.exports = {
  resolve (name, { browserResolve }) {
    if (browserResolve) {
      if (name.startsWith('./'))
        return '/base/' + name.substr(2);
      if (name.startsWith('../'))
        return '/' + name.substr(3);
    }
  }
}
