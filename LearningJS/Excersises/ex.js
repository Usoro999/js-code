let array = [5, 6, 2]
let average = function (a) { 
  return (a.reduce((acc, val) => acc + val) / a.length) | 0;
}
average(array);
console.log(average(array));


array.forEach(a => { console.log(a) })