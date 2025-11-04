/*
 Reference: https://www.w3schools.com/js/js_string_methods.asp
 Concatination: Used when displaying information
 String Lenght: Used in form validation
 Changing Case: Used to change letter casing
 Accessing characters: Used in validation or checks
 Searching in Strings: Used for input validation, like checking if an email includes “@” before submission.
 Trimming WhiteSpace: Used to removes spaces from start and end.
*/

let studentFirstName = "farnaz"
let studentLastName = "Towhidi"


// Concatination
let studentFullName = studentFirstName +  " " + studentLastName
let greetingToStudent = `Welcome to our class ${studentFullName}`


// Changing Case
let originalText = "WELCOME to our class"
console.log (originalText.toLowerCase())
console.log (originalText.toUpperCase())

// Access character
let welcomeMessage = "Welcome to our class"
console.log (welcomeMessage[0])
console.log (welcomeMessage[1])
console.log (welcomeMessage[2])

// Lenght
console.log (welcomeMessage.length)

// Triming
let welcomeMessage2 = "           Welcome to js"
console.log (welcomeMessage2)
console.log (welcomeMessage2.trim())

// Searching
let studentEmail = "farnaz.towhidi@gmail.com"
console.log (studentEmail.includes("Farnaz"))