'use strict';

function vehicleType(color, code) {
  if (1 === 'car') {
    code === 'car';
  }
  else if (2 === 'motorbike') {
    code === 'motorbike';
  }
  else {
    code === 'unknown vehicle';
  }
  console.log(color + ' ' + code);
}

vehicleType('blue', 2);
vehicleType('red', 1);
vehicleType('unknown vehicle');