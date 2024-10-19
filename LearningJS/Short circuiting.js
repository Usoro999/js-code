// OR

console.log(5 || 'string'); // 5 -- the first truth value in the chain
console.log('' || 10); // 10
console.log(true || 0); // true

console.log(undefined || null); // null -- if there are all false values -> log the last false value
console.log('' || undefined || 5 || 'string' || [5,4,3]); // 5 -- the first truth value in the chain

let variable; // undefined
const a = variable ? variable : 10; // 10

let variable1 = true; // defined
const a1 = variable || 10 // true

// AND

console.log(5 && 'String'); // String -- log the last true value
console.log(0 && 'String'); // 0 -- if there are false value -> log false value

function abc() {
  console.log('Hello');
};
if (abc) {              // if the function exists -> excecute if 
  console.log("Hi");
};

guests.abcd && abc();  // Nothing be loged since guests.abcd is not excist
guests.abcd || abc();  // Loged the first true value

// Nullish coalescing operator
let guests = 0;
const a2 = guests || 10  // 10 -- it is NOT logical since there are NO guests!!
const a3 = guests ?? 10  // 0 -- the real number of guests

// undefined and null  = nullish values
// '' or 0 = not nullish 


// OR assignment operator

const restorant1 = {
  name: 'La pasta',
  guests: 20
};
const restorant2 = {
  name: 'pizzza',
  owner: 'Tribiani'
};

restorant1.guests = restorant1.guests || 10  // 20 
restorant2.guests = restorant2.guests || 35  // 35 ==> if the .guests is not excist -> assign 10
// shortest way
restorant1.guests ||= 10;
restorant2.guests ||= 35;

// Nullish assignment operator -> if .guests = 0 or ''
restorant1.guests ||= 10; // 10 ->> If the value is null it does not work properly 👇
restorant1.guests ??= 10; // 0

// AND assignment operator
restorant1.owner = restorant1.owner && '<anonimuous>'; // undefined -- since .owner is not excist
restorant2.owner = restorant2.owner && '<anonimuous>'; // <anonimuous> 
//shortest way 
restorant1.owner &&= '<anonimuous>';
restorant2.owner &&= '<anonimuous>';
