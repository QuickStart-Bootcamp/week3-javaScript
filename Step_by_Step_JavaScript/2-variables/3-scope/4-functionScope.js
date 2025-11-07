/* 
Reference: https://www.w3schools.com/js/js_variables.asp
let variable:   block scope (if, function, ....)
const variable: block Scope
var variable:   function scope
*/

function myFunc () {
  let myName = "Farnaz"
  var myAge = 40
  const myHeight = 160

  console.log ("inside function: " + myName)
  console.log ("inside function: " + myAge)
  console.log ("inside function: " + myHeight)

  if (true) {
    console.log ("inside block: " + myName)
    console.log ("inside block: " + myAge)
    console.log ("inside block: " + myHeight)
  }
}

myFunc ()
// console.log ("outside Block: " + myName)
// console.log ("outside Block: " + myAge)
// console.log ("outside block: " + myHeight)

