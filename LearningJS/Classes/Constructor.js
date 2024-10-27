
//Constructor
const Person = function (firstName, lastname) {
  this.firstName = firstName
  this.lastname = lastname
}


const piter = new Person('Piter', 'Jonas')
console.log(piter.firstName, piter.lastname);

// add functions to class PROTOTYPE
Person.prototype.fullName = function (firstName, lastName) {
  this.fullName = firstName + lastName
  console.log(this.fullName);
  
}
piter.fullName('jeck', 'Milk')
console.log(piter); // Person { firstName: 'Piter', lastname: 'Jonas', fullName: 'jeckMilk' }
console.log(piter.__proto__); // { fullName: [Function (anonymous)] }

// Add STATIC method to classes with constructor
Person.fullName = function (name, lastname) {
  return this.fullName = name+lastname
}
console.log(Person.fullName('Jack', 'Singo')); // JackSingo


// INHERITANCE from Person
const Student = function (firstName,lastname,course) {
  Person.call(this,firstName,lastname)
  this.course = course
}
Student.prototype.introduce = function(){
  console.log(`Hello, i'm ${this.firstName} ${this.lastname} and stadiing on ${this.course}`);

}
Student.prototype = Object.create(Person.prototype)
const john = new Student('John', 'More', 'Science')
john.introduce()

// Person inherits from Student 
Person.prototype = new Student()
const Gorge = new Person('John', 'R')
Gorge.introduce() // introduce() from Student is available in Person 