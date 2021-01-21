function Person(name) {
  this.name = name;
}

const greet = function () {
  return `Hi, Welcome ${this.name}`;
};

const varun = new Person("varun");

greet.call(varun, "");

function sumOfTwoNums() {
  return this.a + this.b;
}

console.log(sumOfTwoNums.call({ a: 10, b: 5 }));
console.log(greet.call(varun));
