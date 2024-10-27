//SORT -> this function changes the array itself
const names = ['John', 'Curtis', 'Aurea', '1Real']
names.sort()
console.log(names); // [ '1Real', 'Aurea', 'Curtis', 'John' ]
//not gonna work with numbers
const numbers = [-30, 100, 55, -34, 70]
console.log(numbers.sort()); // [ -30, -34, 100, 55, 70 ]
//be work with parameters
// Ascending order:
console.log(numbers.sort((a, b) => a-b)); //[ -34, -30, 55, 70, 100 ]
// Descending order:
console.log(numbers.sort((a, b) => b-a)); //[ 100, 70, 55, -30, -34 ]

// SORT -> this function changes the array itself
const unsorted = [5, 2, 10, 7]
const sorted = unsorted.sort((a, b) => a - b)
console.log(unsorted); // [ 2, 5, 7, 10 ]
console.log(sorted);// [ 2, 5, 7, 10 ]

// How to not change 'unsorted' array => create a new one with Spread
const unsortedCopy = [...unsorted].sort((a, b) => a - b)
console.log(unsortedCopy); // [ 2, 5, 7, 10 ]
console.log(unsorted); // [ 5, 2, 10, 7 ]


