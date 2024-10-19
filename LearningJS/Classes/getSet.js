
//Object
const person = {
  name: 'Jonas',
  lastName: 'Kirk',
  moneyOnAcc: [50, 200, 500, 210],

  get getAccount() {
    return this.moneyOnAcc
  },
 
  set setNewAcc(number) {
    this.moneyOnAcc.push(number)
  },
  getAcc: function(number) {
    return this.getAccount[number]
  },

}
person.setNewAcc = 400;
console.log(person.moneyOnAcc); // [ 50, 200, 500, 210, 400 ]
console.log(person.getAcc(1)); // 200



// Class getters - setters

class Personq{
  constructor(name, accont) {
    this.name = name
    this.accont = accont
  }
  get getName() {
    return this.name
  }
  get getAcc(){return this.accont}
  set setNewAcc(number) {
    this.accont.push(number)
  }
  getAccNumber(number) {
    return this.getAcc[number]
  }
}

const jack = new Personq('Jack', [10, 59, 100, 50])
console.log(jack.getAccNumber(0));

