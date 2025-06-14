import { engineer } from "./Objects.js";

// Destructuring-unpacking objects
const { name, lastName, skill } = engineer; // Names of variables must be the same as object's
console.log(skill); // [ 'java', 'javascript', 'selenium', 'cypress' ]

//Rename new variables
const { name: objectName, lastName: objectLastName, skill: objectSkill } = engineer; 
console.log(objectLastName) // Soro

// Default values
const { name: oName, age = [], lastName: oLastName } = engineer; // when age is not exist in engineer
console.log(age)

//Mutating variables
let a = 10;
let b = 5;
const obj = { a: 100, b: 500, c: 90, d:88 };
({ a, b } = obj);
console.log(a, b); // 100 500

//Nested objects
const { wife } = engineer.family; // parse all object from engineer
console.log(wife); // { name: 'Maria', age: 34 }

const { wife: { name: eName, age: eAge } } = engineer.family; // parse variables from obj in obj
console.log(eName, eAge); // Maria 34

//Destructuring the function from obj
engineer.languages({
  lang1: 'java',
  lang2: 'javascript',
  lang3: 'html',
});
