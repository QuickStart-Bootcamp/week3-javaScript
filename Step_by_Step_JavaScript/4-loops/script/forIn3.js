/* 
 for...in: Used to loop through the properties of an object.
 Reference: https://www.w3schools.com/js/js_loop_forin.asp
*/ 

// Nested JSON Object
let studentJSON = {
  "id": 101,
  "name": "Sara",
  "grades": {
    "math": 90,
    "english": 85
  },
  "hobbies": ["reading", "coding"]
};


for (let key in studentJSON) {
  console.log (studentJSON[key])
}