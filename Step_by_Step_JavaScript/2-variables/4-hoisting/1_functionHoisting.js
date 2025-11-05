/*
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top 
of their scope (either function scope or global scope) before the code is executed.
*/

greet(); // ✅ Works fine

function greet() {
  console.log("Hello!");
}