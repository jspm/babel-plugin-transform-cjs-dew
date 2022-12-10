function p() {}
for (p of [1, 2, 3]) {
  console.log(p);
}
for (p in {
  1: 0,
  2: 0,
  3: 0
}) {
  console.log(p);
}
for (p = 1; p <= 3; p++) {
  console.log(p);
}
export default {};