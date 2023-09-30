// REST, since it is on left side of =


//Arrays
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others); // 1 2 [ 3, 4, 5, 6 ]  === others is an array name

const menu = ['pizza', 'soup', 'burger'];
const menu2 = ['tea', 'coffee', 'drink', 'wine'];
const [first, , third, ...rest] = [...menu, ...menu2];
console.log(first, third, rest); // pizza burger [ 'tea', 'coffee', 'drink', 'wine' ] -- rest is WITHOUT 'SOUP' 

// Objects
const family = {
  wife: {
    name: 'Maria',
    age: 34,
  },
  doughter: {
    name: 'Maia',
    age: 12,
  },
  cat: {
    name: 'Lolo',
    age: 3,
  }
}
const { wife, ...rest1 } = family;
console.log(wife, rest1); // { name: 'Maria', age: 34 } { doughter: { name: 'Maia', age: 12 }, cat: { name: 'Lolo', age: 3 } }


// Functions with REST
const func = function (...nubmers) {
  const arr = [nubmers];
  console.log(nubmers);
}
func(5, 6, 7, 8, 'string'); // [ 5, 6, 7, 8, 'string' ]

const func1 = function (...nubmers) {
  const arr = [nubmers];
  console.log(nubmers);
}
const x = [5, 6, 7];
func1(x); // [ [ 5, 6, 7 ] ]
func1(...x); // [ 5, 6, 7 ]


