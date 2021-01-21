const user = {};

user.name = "varun";
user.sayMyName = function () {
  console.log(this.name);
};

user.sayMyName();

const userCreator = (name, score) => {
  const newUser = Object.create(userFunctionStore);

  newUser.name = name;
  newUser.score = score;

  console.log(newUser);

  return newUser;
};

const userFunctionStore = {
  sayMyName: function () {
    return this.name;
  },
  whatsMyScore: function () {
    return this.score;
  },
};

const user1 = userCreator("varun", 75);
const user2 = userCreator("arun", 95);
console.log(user1.pro);
console.log(user1.whatsMyScore());
console.log(user2.whatsMyScore());

console.log("<---Object--->");
console.log(Object.prototype);

const HeroCreator = function (name, power) {
  this.name = name;
  this.power = power;
};

HeroCreator.prototype.sayMyName = function () {
  return this.name;
};

const batman = new HeroCreator("Batman", "Haha, i am invincible");
const superman = new HeroCreator("Superman", "I am so sick at night");

console.log(batman.sayMyName());
console.log(superman.sayMyName());

console.log(HeroCreator.prototype);
console.log(userCreator.prototype);

console.log("<---Object--->");
