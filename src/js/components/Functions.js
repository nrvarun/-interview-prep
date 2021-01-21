const arrayAndManipulate = (arr, cb) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }

  return newArr;
};

console.log(arrayAndManipulate([1, 2, 3], (item) => item * 2));

const createFunc = () => (num) => num;

const outer = createFunc();

const innerFunc = outer(3);
console.log(innerFunc);

const counterFunc = () => {
  let counter = 0;

  const incrementCounter = () => counter++;

  return incrementCounter;
};

const myNewFunc = counterFunc();
console.log(myNewFunc());
console.log(myNewFunc());

const myNewAnotherFunc = counterFunc();
console.log(myNewAnotherFunc());
console.log(myNewAnotherFunc());

const addNum = (a, b) => a + b;
const divideNum = (a, b) => a / b;
const subtractNum = (a, b) => a - b;
const multiplyNum = (a, b) => a * b;

//Higher Order Functions

const currying = (fn) => (a) => (b) => fn(a, b);
const curriedMultiply = currying(multiplyNum);

console.log(curriedMultiply(4)(3));

const HOF = (a, b, fn) => fn(a, b);
const addHOF = HOF(6, 4, addNum);
const subtractHOF = HOF(6, 4, subtractNum);
const divideHOF = HOF(6, 4, divideNum);

console.log(addHOF);

const getToDos = async () => {
  const getRes = await fetch("http://jsonplaceholder.typicode.com/todos");
  const getData = await getRes.json();
};

getToDos();
