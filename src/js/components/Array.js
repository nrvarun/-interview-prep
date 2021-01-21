const _ = {};

_.each = (arr, cb) => {
  if (Array.isArray(arr)) {
    //Array here
    //Loop through them and call the callback
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
    }
  } else {
    //Not array D:, Objects
    for (let key in arr) {
      cb(lsit[key], key, arr);
    }
  }
};

_.map = (arr, cb) => {
  const newArr = [];

  if (Array.isArray(arr)) {
    //Array items here
    _.each(arr, (v, i, arr) => newArr.push(cb(v)));
  } else {
    //Object here
    for (let key in arr) {
      newArr.push(cb(arr[key], key, arr));
    }
  }

  return newArr;
};

_.filter = (arr, cb) => {
  const newArr = [];

  if (Array.isArray(arr)) {
    //Array items here

    _.each(arr, function (v, i, arr) {
      if (cb(v, i, arr) === true) {
        newArr.push(v);
      }
    });
  }

  return newArr;
};

_.reduce = (arr, cb, initial) => {
  let memo = initial;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = arr[0];
    } else {
      memo = cb(arr[i], memo);
    }
  }

  return memo;
};

const flat = (arr, newArr = []) => {
  _.each(arr, (v, i, arr) => {
    if (Array.isArray(v)) {
      flat(v, newArr);
    } else {
      newArr.push(v);
    }
  });

  return newArr;
};

const weapons = ["candlestick", "lead pipe", "revolver"];
const makeBroken = (item) => `broken ${item}`;
console.log(_.map(weapons, makeBroken));

_.each(["Varun", "Arun", "Siddhu"], (item, index, arr) => {
  console.log(item, index, arr);
});

const filteredArr = _.filter(
  ["Varun", "Arun", "Siddhu"],
  (item) => item === "Arun"
);
console.log(filteredArr);

console.log("<-- Reduce -->");
console.log(_.reduce([2, 3, 5], (v, sum) => v + sum));
console.log("<-- Reduce -->");

console.log("<-- Flat -->");
console.log(flat([2, [3, [4, 6, [7, 8]], 9], 5]));
console.log("<-- Flat -->");
