let studentAge  = 21
/* 
  Reference: https://www.w3schools.com/js/js_if_else.asp
  Reference: https://www.w3schools.com/js/js_comparisons.asp#:~:text=When%20comparing%20a%20string%20with,NaN%20which%20is%20always%20false%20.&text=When%20comparing%20two%20strings%2C%20%222,1%20is%20less%20than%202.
*/


if (studentAge < 13) {
  // run this code if condition is true
  console.log ("You are a child") 
}
else if (studentAge < 20 ) {
  // run this code if condition is false
  console.log ("You are a teenager")
}
else {
  console.log ("You are an adult")
}