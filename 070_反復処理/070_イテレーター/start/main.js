function getIterator(max) {
  let i = 0;

  return {
    next: function () {
      if (i >= max) {
        return {
          done: true,
        };
      }
      return {
        done: false,
        value: i++,
      };
    },
  };
}

const it = getIterator(10);
console.log(it.next());
console.log(it.next());
console.log(it.next());
