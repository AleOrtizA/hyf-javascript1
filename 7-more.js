'use strict';

let vehicles = ['car', 'motorbike', 'caravan'];

function vehicleType(color, code, age) {
  let result = color;
  if (code == 1 && age == 5) {
    result = "a" + " " + result + " " + "used" + " " + "car"
  };
  if (code == 2 && age == 5) {
    result = "a" + " " + result + " " + "used" + " " + "motorbike"
  };
  if (code == 3 && age == 1) {
    result = "a" + " " + result + " " + "new" + " " + "caravan"
  };
  //if (code == 3 && age == 1) {
  //result = "unknown vehicle"
  //}; // I do not know what to do with this, it gives me unwanted results.

  return result;
}

console.log(vehicleType('green', 3, 1));





