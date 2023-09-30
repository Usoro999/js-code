

const arr = ['Den', '1250', true];

arr.push('Ukraine'); // add a new element into end
arr.unshift('Poland'); //add a new element into begining and can return a length og array

const arrLength = arr.push(777); // add a new element and return a length of array

arr.pop(); // remove the last element // does NOT return the length // it returns the removed element
arr.shift(); // remove the first element // does NOT return the length // it returns the removed element
 
arr.includes('Frank'); //
console.log(arr.includes(1250)); // if types are different = false



//-----------------------------------------------------------------------
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


// for-of loops
const players = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];
for (const item of players) {
  console.log(item);
};
for (const item of players.entries()) {
  console.log(item);
}
for (const [i,j] of players.entries()) {
  console.log(`${i + 1}: ${j}`);
}