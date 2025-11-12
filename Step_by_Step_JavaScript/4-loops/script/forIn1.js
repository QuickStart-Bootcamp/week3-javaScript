/* 
  for...in: Used to loop through the properties of an object.
  Reference: https://www.w3schools.com/js/js_loop_forin.asp
  Step-by-step execution
*/ 

// Simple Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log (key)
}

for (let key in person) {
  console.log (person[key])
}

