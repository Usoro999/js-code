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
 