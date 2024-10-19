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



