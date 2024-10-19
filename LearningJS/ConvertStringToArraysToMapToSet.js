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
// Obj => Array
const [newArr, newArr2] = Object.entries(familyObj);
console.log(newArr, newArr2);

// Arr => Map
const toMap = new Map([newArr]);
console.log(toMap);

// Map => Arr
const [keys, values] = [...toMap.keys(), ...toMap.values()];
console.log(keys, values);

// STRING to ARRAY
const string = 'string'
const arrr = [...string] // use SPREAD operator
console.log(arrr); // [ 's', 't', 'r', 'i', 'n', 'g' ]
