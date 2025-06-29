import { Car } from '../Enums.js'


let myCar = Car.FORD
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

// How to use the logic without SWITCH

myCar = 'FORD'
console.log(Car[myCar] || 'Mercedes') // Mercedes is like default value from SWITCH
