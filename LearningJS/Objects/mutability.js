let a = 10
// Don't change global variable 'a' in the function
const myFn = (a) => { 
  a = 20; // this will not change the global variable 'a'
  console.log(a); // 20
}
myFn(a);
console.log(a); // 10 => global variable 'a' remains unchanged


// Change global variable 'a' in the function
const myFn2 = () => { 
  a = 30; // this will change the global variable 'a'
  console.log(a); // 30 
}
myFn2();
console.log(a); // 30 => global variable 'a' is now changed to 30

// Object mutability
const myObject = {
  a: 10
}
const myFn3 = (obj) => {
  obj.a = 20; // this will change the property 'a' of the object
}
myFn3(myObject);
console.log(myObject.a); // 20 => property 'a' of the object is now changed to 20

//Don't change object property
const myFn4 = (obj) => {
  obj = { ...obj };
  obj.a = 30 // this will not change the original object, it creates a new object
  console.log(obj.a); // 30
}
myFn4(myObject);
console.log(myObject.a); // 20 => original object remains unchanged