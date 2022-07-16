let a = "hello";
let b = a;
b = "Bye";
console.log(a, b);

let c = {
  prop: "hello",
};
let d = c;
// d.prop = "bye";
d = { prop: "bye" };
console.log(c, d);
