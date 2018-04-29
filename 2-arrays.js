'use strict';
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);

favoriteAnimals.push('meerkat');
console.log(favoriteAnimals);

console.log('this array has a value of; blowfish, capricorn, giraffe and meerkat');

console.log(favoriteAnimals);

favoriteAnimals.splice(2, 3);
console.log(favoriteAnimals);

console.log(favoriteAnimals.indexOf('meerkat'));
