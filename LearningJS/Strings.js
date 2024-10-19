const airline = 'TAP Air Portugal';
const plane = '737';

console.log(plane[0]) // 7
console.log('737'[0]);  // 7

console.log(airline.length); // 16
console.log('737'.length);  //  3

console.log(airline.indexOf('P')); // 2 
console.log(airline.lastIndexOf('P')); // 8

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air => 4 -begin, 7 - end
console.log((airline.slice(4, airline.indexOf(' ')))); // Air
console.log(airline.slice(-3)); // gal => slice from the end
console.log(airline.slice(4, -3)); // Air Portu
console.log(airline.concat('GGG')); // TAP Air PortugalGGG

const pssangerName = 'jOnAS';
const lowerName = pssangerName.toLowerCase();
const normalName = lowerName[0].toUpperCase() + lowerName.slice(1);
console.log(normalName);

const withSpaces = '   space   ';
console.log(withSpaces.trim()); // 'space'

const string = 'All passangers ca go to the gate 1 or gate 5';
console.log(string.replace('gate', 'door')); // All passangers ca go to the door 1 or gate 5
console.log(string.replace(/gate/g, 'door')); // All passangers ca go to the door 1 or door 5
console.log(string.replaceAll('gate', 'door')); // All passangers ca go to the door 1 or door 5

const air = airline.split(' ');
console.log(air); // [ 'TAP', 'Air', 'Portugal' ]

const [firstName, secondName] = 'Yurii Soroka'.split(' ');

const str = ['Mr.', firstName, secondName.toUpperCase()].join(' ');
console.log(str); // Mr. Yurii SOROKA

console.log(str.padStart(30, '+')); // ++++++++++++++Mr. Yurii SOROKA
console.log(str.padEnd(30, '+')); // Mr. Yurii SOROKA++++++++++++++

console.log(str.repeat(5)); // Mr. Yurii SOROKAMr. Yurii SOROKAMr. Yurii SOROKAMr. Yurii SOROKAMr. Yurii SOROKA








