//Old Object creation
const PersonProto = {
  // constructor
  init(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  },

  fullName() {
    return this.firstName + this.lastName
  }
}

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 'Kon')
console.log(sarah.fullName())

// New Object creation
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    return this.firstName + this.lastName
  }
}

const newSarah = new Person('Sarah', 'Kon')