// random number generator
console.log(Math.random()); // 0.12345678901234568
console.log(Math.random() * 10); //  number is less or equal to 10
console.log(Math.floor(Math.random() * 10)); // rounds number to integer 


//
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(Number.parseInt(9 ** (1/3))); // 2
console.log(5 ** 5); // 3125 -> 5*5*5*5*5
console.log(Math.pow(5, 2)); // 5*5 => 25
console.log(Math.pow(2, 5)); // 2*2*2*2*2 => 32

// Absolute value
console.log(Math.abs(-5)); // 5


console.log(Math.trunc(9 / 2)); // 4.5 => 4

// Rounding
console.log(Math.round(25.23)); // 25
console.log(Math.round(25.99)); // 26
console.log(Math.ceil(25.01)); // 26
console.log((Math.floor(25.99))); //25

// Rounding decimals
console.log(2.4354.toFixed(2)); // => string "2.44"
console.log(Number(3.43547.toFixed(4))); //  3.4355

// Reminder operator
console.log(7 % 2); // 1
const isEven = () => 5 % 2 === 0
console.log(isEven()); // false

// BigInt
console.log(42423141242353455435344); // 4.242314124235346e+22
console.log(324234141432432324324234234n); // 324234141432432324324234234n
console.log(BigInt(3242234)); // 3242234n
console.log(11n / 3n); //  3

console.log(Math.PI); // 3.14

console.log(Math.max(5, 10)); // 10
console.log(Math.min(5, 10)); // 5











