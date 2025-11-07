/* 
Reference: https://www.w3schools.com/js/js_variables.asp
let variable:   block scope (if, function, ....)
const variable: block Scope
var variable:   function scope
*/


if (false) {
  let myName = "Farnaz"
  var myAge = 40
  const myHeight = 160

  console.log ("inside block: " + myName)
  console.log ("inside block: " + myAge)
  console.log ("inside block: " + myHeight)
}


// console.log ("outside Block: " + myName)
// console.log ("outside Block: " + myAge)
// console.log ("outside block: " + myHeight)


if (true) {
  let myName = "Farnaz"
  var myAge = 40
  const myHeight = 160

  function myFunc () {
    console.log ("inside function: " + myName)
    console.log ("inside block: " + myAge)
    console.log ("inside block: " + myHeight)
  }

  console.log ("inside block: " + myName)
  console.log ("inside block: " + myAge)
  console.log ("inside block: " + myHeight)
  myFunc ()
}