'use strict';

//2. Create a function named colorCar that receives a color argument. 
//It should returns a string, for example'a red car' when called with 'red' as argument.
//Test your function by calling it, passing a color name as a string and using console.log to print the result.



function colorCar(color) {
  return colorCar = ('a' + ' ' + color + ' ' + 'car');
}
function colorCar2(color) {
  return colorCar2 = ('a' + ' ' + color + ' ' + 'car' + ' ');
}
function fastBike(speed) {
  return fastBike = ('a' + ' ' + speed + ' ' + 'and' + ' ' + 'beautiful' + ' ' + 'bike!')
}
console.log('My favorite color is red that is why I like' + ' ' + colorCar('red'));
console.log('But if I was rich and could get a second car I like' + ' ' + colorCar2('blue') + 'also.');
console.log('In reality all I want and need is' + ' ' + fastBike('fast'));


