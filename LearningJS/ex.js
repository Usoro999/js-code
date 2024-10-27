let array = [5, 6, 2]
let average = function (a) { 
  return (a.reduce((acc, val) => acc + val, 0) / a.length) | 0;
}
average(array);
console.log(average(array));

