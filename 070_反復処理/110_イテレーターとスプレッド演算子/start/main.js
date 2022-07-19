const array1 = [1, 2, 3, 4, 5];
const array2 = [0, ...array1, 6];
// console.log(array1, array2);

function sum(...args) {
  let ret = 0;
  for (let v of args) {
    ret = ret + v;
  }
  return ret;
}
const result = sum(1, 2, 3, 4);
console.log(result);

const obj1 = { prop1: "value1" };
