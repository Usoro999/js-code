const arr = ['Den', '1250', true, 30,50,-2];

arr.push('Ukraine'); // add a new element into end
arr.unshift('Poland'); //add a new element into begining and can return a length og array

const arrLength = arr.push(777); // add a new element and return a length of array

arr.pop(); // remove the last element // does NOT return the length // it returns the removed element
arr.shift(); // remove the first element // does NOT return the length // it returns the removed element

// find Equality -> true or false
arr.includes('Frank'); //
console.log(arr.includes(1250)); // if types are different = false
arr.some(elem => elem === '1250') // true

//SOME = find with Condition -> false or true
arr.some(elem => elem > 0) 

// EVERY
arr.every(elem => typeof elem == 'string') // false
arr.every(elem => elem.includes('Frank')); 

//SLICE -> new copy from array - const arr = ['Den', '1250', true]
arr.slice(1) // ['1250', true]
arr.slice(-1) //['Den', '1250']

//SPLICE -> delete elements from array - const arr = ['Den', '1250', true]
arr.splice(1) //// ['1250', true] -----> changes arr!!! arr = ['Den']

//REVERSE ->  arr = ['Den', '1250', true]
arr.reverse() // [true, 'Den', '1250']

// CONCAT 
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = array1.concat(array2) // [1,2,3,4,5,6]
array3 = [...array1, ...array2] // thr same aso CONCAT

//JOIN
array1 = [1, 2, 3]
array1.join(' - ') // new string = '1 - 2 - 3'

// AT
array1 = [1, 2, 3, 4]
array1.at(0) // == array1[0]
// the last ellement by AT
array1.at(-1) //array1[array1.length - 1]

// FLAT
const arrNested = [[9, 100], [4, 3], 5, [33, 90], 9]
console.log(arrNested.flat()); //[9, 100,  4, 3,5,  33, 90, 9]










// STRING to ARRAY
const string = 'string'
const arrr = [...string] // use SPREAD operator
console.log(arrr);