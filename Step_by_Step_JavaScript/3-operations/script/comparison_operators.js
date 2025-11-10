/*
  Reference: https://www.w3schools.com/js/js_comparisons.asp#:~:text=When%20comparing%20a%20string%20with,NaN%20which%20is%20always%20false%20.&text=When%20comparing%20two%20strings%2C%20%222,1%20is%20less%20than%202.
*/

let age1 = 15;
let age2  = 11; 
let age3 = "10"



console.log (age1 == age2)      // check equal value
console.log (age1 == age3)      // check equal value
console.log (age1 === age2)     // check equal value and equal type
console.log (age1 != age2)      // not equal
console.log (age1 !== age3)     // check not equal value and equal type
console.log (age1 > age2)     // greater than
console.log (age1 >= age2)    // greater than or equal to
console.log (age1 < age2)     // less than
console.log (age1 <= age2)    // less than or equal to



if ((age1 > age2) && (age2 > age3)) {
  console.log ("you are older")
}

if ((age1 > 10) || (age2 > 10)) {
  console.log ("You need a .....")
}