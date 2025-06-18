
// if we work with Object we change the item in there
let nameQ = [1, 2, 6, [5, 8]];
let lastElementOfNameQ = nameQ[nameQ.length - 1]; // lastElementOfNameQ == ARRAY
lastElementOfNameQ[1] = 200; // initially we work with Object(array) in the array
console.log(nameQ); // [ 1, 2, 6, [ 5, 200 ] ]

//if we work with primitive data we don't change the item in the array
let named = [1, 2, 6, 5, 8];
let lastElementOfNamed = named[named.length - 1]; // lastElementOfNamed == PRIMITIVE DATA
lastElementOfNamed = 200; // initially we work with primitive date in the array
console.log(named); //[ 1, 2, 6, 5, 8 ]

// How to change only copied object?
let nameA = [1, 2, 6, [5, 8]];
let lastElementOfNameA = [...nameA[nameA.length - 1]]; // lastElementOfNameA == ARRAY
lastElementOfNameA = 100
console.log(nameA) // [ 1, 2, 6, [ 5, 8 ] ]

