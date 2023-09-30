const family = {
  wife: {
    name: 'Maria',
    age: 34,
  },
  doughter: {
    name: 'Maia',
    age: 12,
  }
};
console.log(family.dog?.name); // do not log error when object variable is not excist

const object = [{ name: 'Jonas', email: 'jonas@gmai.com' }];
console.log(object[0]?.name ?? 'User array is empty'); // Jonas -- if the array is empty => User array is empty

