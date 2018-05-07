'use strict';

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);
//Explain why making a change to o1 does not affect o3. Because any changes to o1 are local changes.

//Explain why making a changes o2 does affect o3. because o3 is the same as o2.


