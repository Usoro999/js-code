// keys and values can be  

const restorant = new Map();
restorant.set('name', 'Italiano');
restorant.set(1, 'Roma');
restorant.set(2, 'Lisboa');
console.log(restorant.set(3, 'Kyev')); // return all map 
//Map(4) {
//   'name' => 'Italiano',
//   1 => 'Roma',
//   2 => 'Lisboa',
//   3 => 'Kyev'
// }
restorant
  .set('categories', ['italian', 'ukrainian', 'portuguise'])
  .set('close', 23)
  .set('open', 10)
  .set(true, 'We are open')
  .set(false,'We are closed')

restorant.get('name');
restorant.get('1'); // undefined since 1 is an integer not string

const time = 21;
console.log(restorant.get(time > restorant.get('open') && time < restorant.get('close'))); // 'Wea are open' => true as a result of comparing
restorant.has('open'); // true
restorant.delete(2);

// Example 1
restorant.set([1, 2], 'Paris');
restorant.get([1, 2]); // undefined
// Example 2 
const ar = [1, 2];
restorant.set(ar, 'Paris');
restorant.get(ar); // Paris

/////////////
const question = new Map([
  ['question', 'What is the best language'],
  [1, 'java'],
  [2, 'C++'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Yuhuu'],
  [false, 'Try again']
]);

// Convert Object to Map
const familyObj = {
  wife: {
    name: 'Maria',
    age: 34,
  },
  doughter: {
    name: 'Maia',
    age: 12,
  }
};
const familyMap = new Map(Object.entries(familyObj)); // 
//Map(2) {
//   'wife' => { name: 'Maria', age: 34 },
//   'doughter' => { name: 'Maia', age: 12 }
// }


// Convert Map to Array
const familyArr = [...familyMap];
//[
//   [ 'wife', { name: 'Maria', age: 34 } ],
//   [ 'doughter', { name: 'Maia', age: 12 } ]
// ]
const [firstElement, secondElement] = [...familyMap];
console.log(firstElement, secondElement);
// [ 'wife', { name: 'Maria', age: 34 } ][ 'doughter', { name: 'Maia', age: 12 } ]


// LOOP
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer === question.get('correct') ? question.get(true) : question.get(false));
// Another way V
console.log(question.get(answer === question.get('correct')));

