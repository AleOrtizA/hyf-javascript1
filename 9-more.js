'use strict';

let vehicles = ['car', 'motorbike', 'caravan', 'airplane'];

function vehicleType(color, code, age) {
  let result = color;
  if (code == 1 && age == 5) {
    result = "a" + " " + result + " " + "used" + " " + "car"
  };
  if (code == 2 && age == 5) {
    result = "a" + " " + result + " " + "used" + " " + "motorbike"
  };
  if (code == 3 && age == 5) {
    result = "a" + " " + result + " " + "new" + " " + "caravan"
  };
  if (code == 3 && age == 1) {
    result = "a" + " " + result + " " + "new" + " " + "airplane"
  };


  return result;
}

console.log(vehicleType('green', 3, 1));
