/* Write your code below. Good luck! 🙂 */
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.bmi = this.mass / this.height * this.height;
    return this.bmi;
  },
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
      this.bmi = this.mass / this.height * this.height;
      return this.bmi;
  },
};
console.log(`${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}\'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.calcBMI() < john.calcBMI() ? mark.fullName : john.fullName}\'s (${mark.calcBMI() < john.calcBMI() ? mark.bmi : john.bmi})!`)

const familyObj = {
  wife: {
    name: 'Maria',
    age: 34,
  },
  doughter: {
    name: 'Maia',
    age: 12,
  }
};
// Obj => Array
const [newArr, newArr2] = Object.entries(familyObj);
console.log(newArr, newArr2);

// Arr => Map
const toMap = new Map([newArr]);
console.log(toMap);

// Map => Arr
const [keys, values] = [...toMap.keys(), ...toMap.values()];
console.log(keys, values);

