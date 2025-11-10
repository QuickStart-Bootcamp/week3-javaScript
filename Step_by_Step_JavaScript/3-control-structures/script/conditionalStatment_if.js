/* 
  Reference: https://www.w3schools.com/js/js_if_else.asp
  Reference: https://www.w3schools.com/js/js_comparisons.asp#:~:text=When%20comparing%20a%20string%20with,NaN%20which%20is%20always%20false%20.&text=When%20comparing%20two%20strings%2C%20%222,1%20is%20less%20than%202.
*/

let studentAge  = 12
let childAge = 13;
let adultAge = 18;
let studentName = "Sebastian";


if (studentAge < adultAge) {
  // run this code if condition is true
  console.log("Student is younger than the adult age threshold");
}

if (studentAge <= adultAge) {
  console.log("Student is younger than or equal to the adult age threshold");
}

if (studentAge == childAge) {
  console.log("Student age is equal to child age");
}

if (studentAge === childAge) {
  console.log("Student age is strictly equal to child age (value and type)");
}

if (studentAge != adultAge) {
  console.log("Student age is not equal to adult age");
}

if (studentAge !== adultAge) {
  console.log("Student age is strictly not equal to adult age (value or type differs)");
}

if (studentAge > childAge) {
  console.log("Student is older than the child age threshold");
}

if (studentAge >= childAge) {
  console.log("Student is older than or equal to the child age threshold");
}


// AND example: two very different conditions
if (studentAge < childAge && studentName === "Sebastian") {
  console.log("Student is a child AND the name is Sebastian");
}

// OR example: either one condition is enough
if (studentAge >= adultAge || studentName === "Sebastian") {
  console.log("Either the student is an adult OR the name is Sebastian");
}