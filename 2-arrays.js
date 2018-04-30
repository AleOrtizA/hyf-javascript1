'use strict';
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);

//Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

// Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals);

//Write a console.log statement that explains in words you think the new value of the array is.
console.log("The new value of this array is:['blowfish','meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);

//Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array)
console.log('The array has a length of:' + favoriteAnimals.length);

//Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

//Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, 
//but you don't know the position or the index of the item in the array, how can you find it?
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));

//Log the index of 'meerkat'. Add a message so it says: 
//'The item you are looking for is at index: '(here you should show the index of the item).
favoriteAnimals.splice(1, 1);
console.log(favoriteAnimals);