let array = [5, 6, 2]
let average = function (a) { 
  return (a.reduce((acc, val) => acc + val) / a.length) | 0;
}
average(array);
console.log(average(array));


array.forEach(a => { console.log(a) })


const one = [0, 1, 2]
const two = ['task', 'story', 'epic']
const object1 = {}
for (let el = 0; el < one.length; el++) {
  object1[el] = two[el]
}
console.log(object1);

