/*
 for loop: Repeat some code a LIMITED amount of time
 Reference: https://www.w3schools.com/js/js_loop_for.asp
*/

// Example 1: Counting Numbers from 1 to 10
for (let i = 1 ; i <=10; i++) {
  console.log (`Number: i`)
}

// Example 2: Looping Through an Array
let students = ["Ali", "Maria", "John", "Sara"];

for (i = 0 ; i< students.length ; i++ ) {
  console.log (students[i])
}


// Example 3: Find Total Score

let scores = [85, 90, 78, 92, 88, 72, 89, 50, 100, 87];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}

console.log("Total Score:", total);




