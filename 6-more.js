'use strict';

function vehicleType(color, code, age) {
  let result = color;
  if (code == 1 && age == 5) {
    result = "a" + " " + result + " " + "used" + " " + "car"
  };
  if (code == 2 && age == 5) {
    result = "a" + " " + result + " " + "used" + " " + "motorbike"
  };
  return result;
}

console.log(vehicleType("blue", 1, 5))

