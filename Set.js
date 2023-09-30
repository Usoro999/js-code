// SET -> unique values
const nameSet = new Set('Soro Yurii');
console.log(nameSet);  // { 'S', 'o', 'r', ' ', 'Y', 'u', 'i' }
console.log(new Set('Soro').size);  //  3  (Sor)

const menu1 = new Set(['Pizza', 'Pasta', 'Burger', 'Pasta']); // Set(3) { 'Pizza', 'Pasta', 'Burger' }
console.log(menu1.has('Pizza')); // true
console.log(menu1.size); // 3 
menu1.add('Rizotto'); 
menu1.delete('Pasta');
menu1.clear;

//Loop
for (const item of menu1) {
  console.log(item);
}

// Array => Set
const staff = ['Manager', 'Chef', 'Waiter', 'Chef', 'Waiter', 'Waiter'];
const staffUniqueSet = new Set(staff); //Set(3) { 'Manager', 'Chef', 'Waiter' }
const staffUniqueArr = [...new Set(staff)]; // [ 'Manager', 'Chef', 'Waiter' ]

console.log(new Set(['Manager', 'Chef', 'Waiter', 'Chef', 'Waiter', 'Waiter']).size); // 3

