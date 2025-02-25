// Function to generate a random character
const allowUppercase = true
const allowLowercase = true
const allowNumbers = true
const allowSpecialCharacters = true
const passwordLength = 17
let password = ""


const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabc'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const specialCharacters = '!@#$%^&*()'

const characters = (allowLowercase ? lowerCase : "")
  + (allowUppercase ? upperCase : "")
  + (allowNumbers ? numbers : "")
  + (allowSpecialCharacters ? specialCharacters : "")


for (let i = 0; i < passwordLength; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length))
}

console.log(password);
