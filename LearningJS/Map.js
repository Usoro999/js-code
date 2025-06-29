// keys and values can be  

const pizzeria = new Map();
pizzeria.set('name', 'Italian');
pizzeria.set(1, 'Roma');
pizzeria.set(2, 'Lisbon');
console.log(pizzeria.set(3, 'Kiev')); // return all map 
//Map(4) {
//   'name' => 'Italian',
//   1 => 'Roma',
//   2 => 'Lisbon',
//   3 => 'Kiev'
// }
pizzeria
  .set('categories', ['italian', 'ukrainian', 'portuguese'])
  .set('close', 23)
  .set('open', 10)
  .set(true, 'We are open')
  .set(false,'We are closed')

pizzeria.get('name');
pizzeria.get('1'); // undefined since 1 is an integer not string

const time = 21;
console.log(pizzeria.get(time > pizzeria.get('open') && time < pizzeria.get('close'))); // 'Wea are open' => true as a result of comparing
pizzeria.has('open'); // true
pizzeria.delete(2);

// Example 1
pizzeria.set([1, 2], 'Paris');
pizzeria.get([1, 2]); // undefined
// Example 2 
const ar = [1, 2];
pizzeria.set(ar, 'Paris');
pizzeria.get(ar); // Paris

/////////////
const question = new Map([
  ['question', 'What is the best language'],
  [1, 'java'],
  [2, 'C++'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Wuhu'],
  [false, 'Try again']
]);
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer === question.get('correct') ? question.get(true) : question.get(false));
// Another way V
console.log(question.get(answer === question.get('correct')));



// Convert Object to Map
const familyObj = {
  wife: {
    name: 'Maria',
    age: 34,
  },
  daughter: {
    name: 'Maia',
    age: 12,
  }
};
const familyMap = new Map(Object.entries(familyObj)); // 
//Map(2) {
//   'wife' => { name: 'Maria', age: 34 },
//   'daughter' => { name: 'Maia', age: 12 }
// }


// Convert Map to Array
const familyArr = [...familyMap];
//[
//   [ 'wife', { name: 'Maria', age: 34 } ],
//   [ 'daughter', { name: 'Maia', age: 12 } ]
// ]
const [firstElement, secondElement] = [...familyMap];
console.log(firstElement, secondElement);
// [ 'wife', { name: 'Maria', age: 34 } ][ 'daughter', { name: 'Maia', age: 12 } ]


// FOR LOOP
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//forEach loop
question.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
})

