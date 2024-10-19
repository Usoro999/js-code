// MAP method -> create a new array
const arrayEUR = [100, 50, 35, 70, 95]
// clasic 
let arrayUSD = arrayEUR.map(function (value) {
  return value * 1.1
})
// shorter
arrayUSD = arrayEUR.map(value => value * 1.1)
console.log(arrayUSD);


// FILTER method -> create a new array
const arrayBIG = arrayEUR.filter(value => value > 50) 
console.log(arrayBIG); // [ 100, 70, 95 ]

// REDUCE method => sum of all values
const sum = arrayEUR.reduce(function(sum, value, index, arrayEUR){
  return sum+value
}, 0) // =>> start from 0
console.log(sum); // 350
// REDUCE method => subtract of all values
const subtract = arrayEUR.reduce(function(sum, value, index, arrayEUR){
  return sum-value
}, 1000) // =>> start from 1000
console.log(subtract); // 650

// MAX value in array using Reduce
const max = arrayEUR.reduce((max, value) => {
  if (max > value) return max
  else return value
})
console.log(max); // 100

// Chaining of methods
const valletUSD = arrayEUR
  .map(val => val * 1.1)
  .reduce((sum, val) => sum + val)

// FIND method -> find the first element with condition
const numbers = [5, -4, 9, -3, 0, 99]
const number = numbers.find(num => num > 7)
console.log(number); // 9
