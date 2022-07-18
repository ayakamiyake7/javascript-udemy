function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

function Japanese(name, age) {
  Person.call(this, name, age);
}
Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.bye = function () {
  console.log("Konnichiwa " + this.name);
};

const taro = new Japanese("Taro", 23);
console.log(taro);

taro.hello();
taro.bye();
