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
}
const jesica = new PersonCl1('Jesica', 'Star')
jesica.fullName()
console.log(PersonCl1.calcAge(1985)) // 39




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

const mark = new StudentCl()
