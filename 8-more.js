'use strict';

function advertisement(vehicleNames) {
  let advertiseByJoe = '';

  for (let i = 0; i < vehicleNames.length; i++) {
    const serviceInPlural = vehicleNames[i] + 's';
    if (i === (vehicleNames.length - 1)) {

      advertiseByJoe += 'and ' + serviceInPlural + '.';
    } else {
      advertiseByJoe += serviceInPlural + ', ';
    }
  }

  return 'Amazing Joe\'s Garage, we service ' + advertiseByJoe;

}


const vehicles = ['car', 'motorbike', 'caravan', 'bike'];

const text = advertisement(vehicles);
console.log(text);

//homework done thanks to Tamim.