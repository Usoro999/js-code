// Class expression
const PersonCl = class {
  
}

// Class declaration
class PersonCl1 {
  constructor(firstName, lastName) { 
    this.firstName = firstName
    this.lastName = lastName  
  }
  // Instance method
  fullName() {
    console.log(this.firstName+this.lastName);
     return this.firstName+this.lastName
  }
  // Static method
  static calcAge(age) {
    return 2024 - age
  }
  calcAge(age) {
    return 2024 - age
  }
  static money = 2000;

  static multipleMoney(multiple) { 
    this.money = multiple * this.money // static variable is always in static method  
    return this.money
  }
 
}
const jessica = new PersonCl1('Jessica', 'Star')
jessica.fullName()
console.log(PersonCl1.calcAge(1985)) // 39
console.log(PersonCl1.multipleMoney(2)) 
console.info(PersonCl1.money)
PersonCl1.multipleMoney(2)
console.info(PersonCl1.money)
 

// INHERITANCE
class StudentCl extends PersonCl1{
  constructor(firstName, lastName, course) {
    super(firstName, lastName)
    this.course = course
  }

}
const martha = new StudentCl('Martha', 'Smith', 'Technic')
martha.calcAge(1999) // 25
martha.fullName() // MarthaSmith

