
// if we work with Object we change the item in there
let nameq = [1, 2, 6, [5, 8]];
let lastElementOfNameq = nameq[nameq.length - 1]; // lastElementOfNameq == ARRAY
lastElementOfNameq[1] = 200; // initially we work with Object(array) in the array
console.log(nameq); // [ 1, 2, 6, [ 5, 200 ] ]

//if we work with primitive data we don't change the item in the array
let named = [1, 2, 6, 5, 8];
let lastElementOfNamed = named[named.length - 1]; // lastElementOfNamed == PRIMITIVE DATA
lastElementOfNamed = 200; // initially we work with primitive date in the array
console.log(named); //[ 1, 2, 6, 5, 8 ]