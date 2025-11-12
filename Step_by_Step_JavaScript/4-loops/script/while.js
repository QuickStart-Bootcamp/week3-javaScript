/*
  Reference: https://www.w3schools.com/js/js_loop_while.asp
*/

// Print numbers from 1 to 4 using a while loop
// Loop through an array (remove items until empty)

let i = 1

while (i < 5) {
  console.log (i)
  i = i +1;
}

let students = ['farnaz', 'tom', 'marry']

console.log (students.length)

while (students.length > 0) {
   students.shift ()
   console.log (students)
 } 