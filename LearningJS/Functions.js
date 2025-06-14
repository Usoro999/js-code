

// Default parameters
function flight(numberOfPlane = '750', numPassengers = 100, price = 300) {
  // ES5
  // numberOfPlane = numberOfPlane || '750';
  // numPassengers = numPassengers || 100;
  //price = price || 300;
  const obj = {
    numberOfPlane,
    numPassengers,
    price,
  }
  const arr = [];
  arr.push(obj);
  console.log(arr);
  
}
flight('747', 56, 100); // [ { numberOfPlane: '747', numPassengers: 56, price: 100 } ]
flight('747', 56); //[ { numberOfPlane: '747', numPassengers: 56, price: 300 } ]
flight('747', undefined, 100); /// [ { numberOfPlane: '747', numPassengers: 100, price: 100 } ]


// Passing by Value === using primitive values => variables wont be changed
let a = 50;
function changeA(a) {
  a = 100;
}
changeA(a);
console.log(a); // 50 => values do not change since they are primitive

// How to change global variable
let b = 50;
function changeA() {
  b = 100;  
}
changeA();
console.log(b); // 100


// Passing by reference => variables always be changed
const obj = {
  price: 444,
  flight: '757'
}
function changeObj(obj) {
  obj.price = 800;
}
changeObj(obj);
console.log(obj.price); // 800  => obj are changed since the link to obj is copied, not the obj


// Higher-Order functions
// Create call back function
const replaceFirstJToK = function (string) {
  return string.replace('J', 'K');
};
const firstUpperCaseWord = function (string) {
  const [first, ...others] = string.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Create Higher-Order function
const transformer = function (string, fn) {
  console.log(fn(string));
  
};
transformer('Java and Javascript', replaceFirstJToK); // Kava and Javascript
transformer('Java and Javascript', firstUpperCaseWord) // JAVA and Javascript


// RETURNABLE functions
const multiply = function (firstNumber) {
  return function (secondNumber) {
    console.log('result: ' + firstNumber * secondNumber);
  };
};
multiply(5)(10);
// Short way
const multiplyArrow = firstNumber => secondNumber => console.log('result: ' + firstNumber * secondNumber);
