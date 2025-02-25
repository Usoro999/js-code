// SPREAD, since it is on right side of =

const arr = [1, 2, 3];
//need to create an array with 4 and 5 on the begining and with elements from arr
//1.
const arr1 = [4, 5, arr[0], arr[1], arr[2]];
//2. 
const arr2 = [4, 5, ...arr]; // spread operator [4,5,1,2,3] 
// NOT
const arr3 = [4, 5, arr]; // [4,5, [1,2,3]]

console.log(...arr2); // 4 5 1 2 3 -- like individual elements

const ob = [1, 2, 3, 4, 5, 5,]
const max = Math.max(...ob); // 5

// Spread arrays
const menu = ['pizza', 'tea', 'coffee'];
const newMenu = [...menu, 'soup', 'fri potato'];
console.log(newMenu); // [ 'pizza', 'tea', 'coffee', 'soup', 'fri potato' ]

const superMenu = [...menu, ...newMenu];

// Spread strings
const str = 'Jonas';
const arrayStr = [...str, 'S','T'];
console.log(arrayStr); // [ 'J', 'o', 'n', 'a', 's', 'S', 'T' ]

// Spread in functions
const gadgets = [
  'iPhone',
  'iPad',
  'Mac'
];
function printGadgets(el1,el2,el3) {
  console.log(`I have ${el1} and ${el2} and ${el3}`)
};
printGadgets(...gadgets); // I have iPhone and iPad and Mac

// Real copy of element
const gadgetsCopy = [...gadgets]; // Creating a new array - changing in first does not change in the second
const gadgetCopy = gadgets; // changing in first - change it in the second

// Create variables from array
let [ d, f, g ] = [...gadgets];
console.log(d, f, g); // iPhone iPad Mac
// Create variables from string
const str1 = 'usb';
const [h, y, t] = [...str1];
console.log(h, y, t); // u s b