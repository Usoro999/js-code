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








