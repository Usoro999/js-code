import { Car } from '../Enums.js'


const myCar = Car.FORD
const whatMyCar = (myCar) => {
  switch (myCar) {
    case Car.TOYOTA:
      console.log('Your car is a Toyota')
      break
    case Car.HONDA:
      console.log('Your car is a Honda')
      break
    case Car.FORD:
      console.log('Your car is a Ford')
      break
    default:
      console.log('Your car is not recognized')
  }
}

const age = 18;
switch (true) {
    case age > 10 && age < 50:
        console.log('Вік більше 10 і менше 50');
        break;
    case age >= 50:
        console.log('Вік 50 або більше');
        break;
    case age <= 10:
        console.log('Вік 10 або менше');
        break;
    default:
        console.log('Невідомий вік');
}