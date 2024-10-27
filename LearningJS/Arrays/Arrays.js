
// Destructuring array
const arr2 = [2, 5, 'go'];
const [a, b, c] = arr2;
const [first, , third] = arr2; // skip second array's element

// Switching variables
let var1 = 10;
let var2 = 'go';
[var1, var2] = [var2, var1];
console.log(var1, var2);

//Recieve 2 values from a function
function multyplyToFive(firstNumber, secondNumber) {
  return [firstNumber * 5, secondNumber * 5];
}
const [result1, result2] = multyplyToFive(3, 8);
console.log(result1, result2); // 15 40

// Nested destructuring
const nestedArray = [3, 5, [7, 8]];
const [i, , [j, k]] = nestedArray;
console.log(i, j, k); // 3, 7, 8

// Default values
const [f = 1, l = 1, d = 1] = [8, 2,,9];
console.log(f, l, d); // d = 5

const ab = [1, 3, 2]
const cs = ab.toSorted()
console.log(cs);




