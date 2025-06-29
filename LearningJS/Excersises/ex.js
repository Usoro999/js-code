let array = [5, 6, 2]
let average = function (a) { 
  return (a.reduce((acc, val) => acc + val) / a.length) | 0;
}
average(array);
console.log(average(array));


array.forEach(a => { console.log(a) })

// Collect two arrays to one object with key and value
const one = [0, 1, 2]
const two = ['task', 'story', 'epic']
const object1 = {}
for (let el = 0; el < one.length; el++) {
  object1[el] = two[el]
}
console.log(object1);


const findIndexes = (array, target)=>{
  for (let i = 0; i <= array.length - 1; i++){
    for (let j = 1; j <= array.length - 1; j++) {
      if (array[i] + array[j] === target) {
        return [i,j]
      }
    }
  }
}
console.log(findIndexes([2, 5, 10, 8, 3], 15))

//Palindrome checking -> 123 and 321 => false

const palindromeChecking = (number) => {
  let string = number.toString()
  const newString = [...string].reverse().join('')
  console.log(string, newString)
  
  return string === newString
}
console.log(palindromeChecking(757))

//Fizz & Buzz

const createArray = (n) => {
  let array = []
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz')
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(i)
    }
  }
  console.log(array)
}
createArray(10)