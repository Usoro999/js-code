// Creating a string object
const myString = new String("Hello, world!");

// Logging the string object to the console
console.log(myString);

const char_array = [...myString];
// Logging the character array to the console
console.log(char_array);
//myString[0] = 'h'; // This won't change the string as strings are immutable in JavaScript
// Logging the original string to the console
console.log(myString);
const myString2 = myString.replace(myString[0],'k')
// Logging the modified string to the console
console.log(myString2);