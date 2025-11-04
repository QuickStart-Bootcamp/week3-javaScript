/*
  Rules for Naming Variables
  1- Must start with a letter, underscore (_), or dollar sign ($).
  2- Cannot start with a number.
  3- Case-sensitive (myVar and myvar are different).
  4- Cannot use reserved JavaScript keywords.
  Primitive: number, string, boolean, undefine, null, symbol, bigint
*/


// 1. number
let age = 49
let price = 19.99
let temperature = -5

// 2. string  
let myName = "Farnaz Towhidi"
let greetingMessage = 'Welcome to our class'
let greetingToStudent = `Welcome to our class ${myName}`
let greetingFromQuickstart = "         Welcome to our today class,js"


// 3. boolean
let isStudent = false      
isStudent = true


// 4. undefine
let studentName



// 5. null
let classData = null



// 6. symbol
let id1 = Symbol ("id1")
let id2 = Symbol ("id1")



// 7. bigInt
let bigNumber = 123456789012345678901234567890n;



let myVar = 12
console.log (`The type of myVar is:` + typeof(myVar))

myVar = "Farnaz Towhidi"
console.log (`The type of myVar is:` + typeof(myVar))

myVar = true
console.log (`The type of myVar is:` + typeof(myVar))







