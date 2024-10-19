//Object
const PersonProto = {
  // constructor
  init(firstn, lastn) {
    this.firstn = firstn
    this.lastn = lastn
  },

  fullName() {
    return this.firstn + this.lastn
  }
}

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 'Conor')
console.log(sarah.fullName())