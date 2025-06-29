

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

// function to return new object
const newObj = (obj, model = 'Being', date = Date()) => ({
  ...obj,
  model,
  date
})

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
const transformer = function (string, callback) {
  console.log(callback(string));
};
transformer('Java and Javascript', replaceFirstJToK); // Kava and Javascript
transformer('Java and Javascript', firstUpperCaseWord) // JAVA and Javascript
// OR
transformer('', ()=> firstUpperCaseWord('java and Javascript')); // JAVA and Javascript



// RETURNABLE functions
const multiply = function (firstNumber) {
  return function (secondNumber) {
    console.log('result: ' + firstNumber * secondNumber);
  };
};
multiply(5)(10);
// Short way
const multiplyArrow = firstNumber => secondNumber => console.log('result: ' + firstNumber * secondNumber);



