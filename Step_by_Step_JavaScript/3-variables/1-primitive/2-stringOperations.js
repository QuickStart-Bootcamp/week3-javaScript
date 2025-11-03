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
let studentLastName = "towhidi"


// Concatination
let studentFullName = studentFirstName + " " + studentLastName  // using +
let welcomeMessage = "Welcome " + studentFullName               
let welcomeMessage2 = `welcome ${studentFullName}`              // using template literal (preferred)


// String Lenght
console.log ("The length of student name is:" + studentFullName.length)


//  Changing Case
let originalText = "Hello"
console.log (originalText.toLowerCase())
console.log (originalText.toUpperCase())


// Accessing characters
let userPassword = "A12345"
console.log (userPassword[0])
console.log (userPassword[userPassword.length-1])

// Searching in Strings
let sampleEmail = 'farnaz.towhidi@gmail.com'
console.log (sampleEmail.includes ("@"))

//  Trimming WhiteSpace
let greetingMassage = "     Welcome to class.       "
console.log (greetingMassage)
console.log (greetingMassage.trim())




