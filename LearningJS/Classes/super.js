class Patient {
  constructor(name, fullName, nationality) {
    this.name = name;
    this.fullName = fullName;
    this.nationality = nationality;
  }
  whichNationality() {
    return `${this.name} ${this.fullName} is ${this.nationality}`;
    
  }
}
class Spouse extends Patient { 
  constructor(name, fullName, job, nationality) {
    super(name, fullName, nationality);
    this.job = job;
    super.whichNationality()
  }
  activities() {
    console.log(`${this.name} - ${this.fullName} like swimming`);
    
  }
}
class Child extends Patient { 
  constructor(name, fullName, age) {
    super(name, fullName);
    this.age = age;
  }
}

const patrick = new Spouse("Patrick", "Gouver", "IT", "Ukrainian");
patrick.activities();
console.log(patrick.whichNationality());

 
 