// Convert String to Numbers
console.log(Number('352')); //352
console.log(+'352'); //352

// PARSE
console.log(Number.parseInt('231gfdssdf')); // 231
console.log(Number.parseInt('aa231')); // Nan
console.log(Number.parseInt('2.31gfdssdf')); // 2
console.log(Number.parseFloat('2.31gfdssdf')); // 2.31

//Checking if it is number or NaN
console.log(Number.isFinite(123123)); // true
console.log(Number.isNaN(123123)); // false
console.log(Number.isInteger(123123)); // true


//Convert float to number
console.log(parseFloat('231.123')); // 231.123
console.log(parseInt(231.123)); // 231

let number = 123.4324
console.log(Math.trunc(number)); // 123
// Bitwise OR
let a = 1235.453 | 0
console.log(a); // 1235
// Bitwise NOT
console.log(~2.55); // -3


// Check is number is Integer
let isInteger = Number.isInteger(124.56) // false

isInteger = (a % 1 === 0)
console.log(isInteger);







