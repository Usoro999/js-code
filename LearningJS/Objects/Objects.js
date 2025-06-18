
export const engineer = {
  name: 'Yurii',
  lastName: 'Soro',
  skill: ['java', 'javascript', 'selenium', 'cypress'],
  birthday: 1985,
  
  family: {
    wife: {
      name: 'Maria',
      age: 34,
    },
    daughter: {
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
  // Use first method within second
  printMessage: function () {
    return `${this.name} is ${this.calAge()} age old, and 
    he has ${this.calcSalary() > 1000 ? 'good' : 'bad'} salary.`
  },
  // 2 type to initiate object method
  languages({ lang1, lang2, lang3 }) {
    console.log(`I know ${lang1} and ${lang2} and ${lang3}!!`);
  },
};

console.log(engineer.lastName);
console.log(engineer['lastName']);

engineer.location = 'Portugal'; // we can add a new parameter to the object
engineer['region'] = 'Porto';

console.log(engineer);
console.log(engineer.calAge()); // Invoke objects method
console.log(engineer['calcSalary']());
console.log(engineer.printMessage());


// Use arrays in objects
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ];
const hours = {
  [weekdays[0]]: { open: '10.00', close: '22.00' },
  [weekdays[1]]: { open: '10.00', close: '22.00' },
  [weekdays[2]]: { open: '10.00', close: '22.00' },
};

// Array from object
const days = Object.keys(hours); // [mon, tue, wed]

// String from object -> array
let strDays = '';
for (const day of days) {
  strDays += `${day}, `;
}
console.log(`We are opened on ${days.length} days: ${strDays}`);


