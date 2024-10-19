const moment = require("moment/moment");

// yarn add moment


const now = Date() // Sun Dec 10 2023 16:51:40 GMT+0200 (Eastern European Standard Time)
console.log(now);
const future = new Date(2045, 10, 25, 3, 15, 30)
console.log(future.toString()) // Sat Nov 25 2045 03:15:30 GMT+0200 (Eastern European Standard Time)

// Add days to date
future.setDate(future.getDate() + 3) //Tue Nov 28 2045 03:15:30 GMT+0200 (Eastern European Standard Time)




const now1 = new Date() // 2023-12-10T14:53:05.231Z
now1.getDate()
now1.getHours()
console.log(+now1); // time in miliseconds(Number) => 1703082619484




// Moment ext https://momentjs.com/
// yarn add moment
let dayNow = moment().format('dddd')
 

