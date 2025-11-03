/*
Variable hoisting in JavaScript is a behavior where variable are moved to the top 
of their scope before the code is executed. The behavior depends on whether you use var, let, or const.
*/


// var: var is hoisted, but only the declaration, not the initialization.
console.log(x); // undefined — not an error
var x = 5;




// let and const are hoisted too, but they are in a "temporal dead zone" from the start of the block 
// until the declaration is encountered. A temporal dead zone (TDZ) is the area of a block where a 
// variable is inaccessible until the moment the computer completely initializes it with a value.
// console.log(y); // ❌ ReferenceError
// let y = 10;

// console.log(z); // ❌ ReferenceError
// const z = 20;



