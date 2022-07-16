let c = (function () {
  console.log("called");

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log("privateFn is called");
  }
  function publicFn() {
    console.log("publicFn is called" + privateVal++);
  }

  return {
    publicFn,
    publicVal,
  };
})();

c.publicFn();
c.publicFn();
c.publicFn();
console.log(c.publicVal);
