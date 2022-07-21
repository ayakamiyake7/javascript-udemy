const arry = [1, 2, 3, 4, 5];

// arry.forEach(function (v, i, arry) {
//   console.log(v);
// });

const newArray = arry.map(function (v, i, arry) {
  console.log(v);
  return v * 2;
});
console.log(newArray);

const filterArry = arry.filter(function (v, i, arry) {
  return i >= 1;
});
console.log(filterArry);
