'use strict';
//Create a function called printObject that takes an object as a parameter and prints out all of its properties and values.
//Next, create an object that contains some properties with values.Now call your function and passing the object just created as an argument to test your function.
//Your function should not make any assumptions about the actual object passed.Instead, you should find a way to obtain the property keys and their values programmatically.

function printObject(object) {

  for (const key in object) {
    console.log('Property: ' + key + '\tValue: ' + object[key]);
  }

}

const person = {
  firstName: 'Alejandra',
  lastName: 'Ortiz',
  ocupation: 'Writer',
  otherOcupation: 'Photographer'
};

printObject(person);