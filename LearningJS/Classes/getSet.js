
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

class Person1{
  constructor(name, account) {
    this.name = name
    this.account = account
  }
  set name(name) {
    this._name = name
  }
  get getAcc(){return this.account}
  set setAcc(number) {
    this.account.push(number)
  }
  getAccNumber(number) {
    return this.getAcc[number]
  }
}

const jack = new Person1('Jack', [10, 59, 100, 50])
console.log(jack.getAccNumber(0));


// Example 2

class BankAccount { 
  constructor(name, lastName, account) {
    this.name = name 
    this.lastName = lastName;
    this.account = account;
  }
  set name(name) {
    if (typeof name === 'string' && name.length > 0) {
      this._name = name;
    } else throw new Error('Invalid name: name must be a non-empty string')
  }
  set account(account) {
    if (typeof account === "number") {
      this._account = account;
    }
      else console.log("Invalid account number"); 
  }
  set lastName(lastName) {
    if (typeof lastName === "string" && lastName.length > 0) {
      this._lastName = lastName;
    }
    else console.log("Invalid last name");
  }
  static create(name, lastName, account) {
    if (typeof name === "string" && typeof lastName === "string" && typeof account === "number") {
      return new BankAccount(name, lastName, account);
    } else {
      throw new Error("Invalid parameters");
    }
 }
}
//1
let JacksonAccount;
try {
  JacksonAccount = new BankAccount("Jackson", "Jack", 348989545);
} catch (error) {
  console.log("Invalid name");
  
}
console.log(JacksonAccount); 

//2
const melissa = BankAccount.create("name", "lastName", 234545)
console.log(melissa);
