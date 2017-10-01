/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

const food = 'pineapple';

const isMyFavoriteFood = (food='thousand-year-old egg') => {
  food === 'thousand-year-old egg';
};

const isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

// const User = (options) => {
//   this.username = options.username;
//   this.password = options.password;
//   this.sayHi = () => {
//     return this.username + ' says hello!';
//   };
// }

class User{
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  sayHi(){
    this.username + 'says hello!';
  }
}

const username = 'JavaScriptForever';
const password = 'password';

let me = new User({username, password});

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = (...args) => args.reduce((memo, val) => memo + val);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// };

const argsToCb = (cb, ...args) => cb(...args);
//{
//   let args = Array.prototype.slice.call(arguments);
//   return cb.apply(null, args.splice(1));
// };

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

/* eslint-enable */
