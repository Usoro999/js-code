// Simple example where a variable arrayOfPoints is not secured by

let arrayOfPoints = []
function addPoint(x) {
  arrayOfPoints.push(x)
}
function getAvgOfPoints() {
  let sum = arrayOfPoints.reduce((a, b) => a + b)
  return sum / arrayOfPoints.length
}
addPoint(5)
addPoint(7)
addPoint(8)
console.log(getAvgOfPoints().toFixed(2));
 

// Closures -> function createObjectPoints() is like a class 
function createObjectPoints() { 
  let arrayOfObjPoints = [] // Array is secured(hidden) inside createObjectPoints()
  function addObjPoint(x) {
    arrayOfObjPoints.push(x)
    }
  function getAvgOfObjPoints() {
    let sum = arrayOfObjPoints.reduce((a, b) => a + b)
    return sum / arrayOfObjPoints.length
    }
  return {addObjPoint, getAvgOfObjPoints} // we return these to use as methods of created objects
}


let points = createObjectPoints() // declare new object of createObjectPoints
points.addObjPoint(4)
points.addObjPoint(10)
console.log(points.getAvgOfObjPoints());
 

// Nested closures 1
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // 20

// Nested closures 2
const e1 = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e1;
      };
    };
  };
}
const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20