let listA = ['a', 'b']
let a = 10

function changeList(list) {
  list[0] = 'banana'
  a = true
  //console.log(list);
  
}
console.log(a);

console.log(listA);
changeList(listA);
console.log(listA);
console.log(a);

