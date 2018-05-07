'use strict';

//Create a function that takes 3 arguments and returns the sum of the these arguments.
//Test your function by calling it with three numbers and using console.log

function sumOfThreeArguments() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumOfThreeArguments(85, 27, 3)); //115
