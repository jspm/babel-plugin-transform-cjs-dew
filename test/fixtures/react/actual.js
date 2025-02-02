if ("object" === typeof process && "function" === typeof process.emit) {
  console.log(typeof process === 'object' && true);
  process.emit("uncaughtException", 'boo');
  return;
}
