
const engenieer = {
  name: 'Yurii',
  lastName: 'Soro',
  skill: ['java', 'javascript', 'selenium', 'cypress'],
  birthday: 1985,
  
  family: {
    wife: {
      name: 'Maria',
      age: 34,
    },
    doughter: {
      name: 'Maia',
      age: 12,
    }
  },

  //Object methods 
  calAge: function () {
    return 2023 - this.birthday;
  },
  calcSalary: function () {
    this.salary = this.skill.length * 500;
    return this.salary;
  },
  printMessage: function () {
    return `${this.name} is ${this.calAge()} age old, and 
    he has ${this.calcSalary() > 1000 ? 'good' : 'bad'} salary.`
  },
  languages({ lang1, lang2, lang3 }) {
    console.log(`I know ${lang1} and ${lang2} and ${lang3}!!`);
  },
};

console.log(engenieer.lastName);
console.log(engenieer['lastName']);

engenieer.location = 'Portugal'; // we can add a new parameter to the object
engenieer['region'] = 'Porto';

console.log(engenieer);
console.log(engenieer.calAge()); // Invoke objects method
console.log(engenieer['calcSalary']());
console.log(engenieer.printMessage());



// Destructuring objects
const { name, lastName, skill } = engenieer; // Names of variables must be the same as object's
console.log(skill); // [ 'java', 'javascript', 'selenium', 'cypress' ]

//Rename new variables
const { name: objectName, lastName: objectLastName, skill: objectSkill } = engenieer; 
console.log(objectLastName); // Soro

// Default values
const { name: oName, age = [], lastName: oLastName } = engenieer; // when age is not excist in engenieer
console.log(age);

//Mutating variables
let a = 10;
let b = 5;
const obj = { a: 100, b: 500, c: 90, d:88 };
({ a, b } = obj);
console.log(a, b); // 100 500

//Nested objects
const { wife } = engenieer.family; // parse all object from engenieer
console.log(wife); // { name: 'Maria', age: 34 }

const { wife: { name: eName, age: eAge } } = engenieer.family; // parse variables from obj in obj
console.log(eName, eAge); // Maria 34

//Destructuring the function from obj
engenieer.languages({
  lang1: 'java',
  lang2: 'javascript',
  lang3: 'html',
});

// Use arrays in objects
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ];
const hours = {
  [weekdays[0]]: { open: '10.00', close: '22.00' },
  [weekdays[1]]: { open: '10.00', close: '22.00' },
  [weekdays[2]]: { open: '10.00', close: '22.00' },
};
// Loops in objects
// Objects names
for (const day of Object.keys(hours)) {
  console.log(day); // mon tue wed
}
const days = Object.keys(hours); // [mon, tue, wed]
let strDays = '';
for (const day of days) {
  strDays += `${day}, `;
}
console.log(`We are opened on ${days.length} days: ${strDays}`);

// Objects values
const oHours = Object.values(hours);
console.log(oHours);

// Convert Object to Array
const hoursArray = Object.entries(hours);
console.log(hoursArray);

for (const [day, { open, close } ] of hoursArray) {
  console.log(`Market works on ${day}: from ${open} to ${close}`);
  
}


