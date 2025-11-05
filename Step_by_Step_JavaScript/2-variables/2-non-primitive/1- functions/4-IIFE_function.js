// Immediately Invoked Function Expression 
// IIFE = Anonymous = Noname function

// function with no parameters
(function() {
  console.log("Hi");
  console.log("Welcome to our class");
  console.log("My name is Roberto");
})();


// function with parameters
(function(studentName) {
  console.log(`Welcome to our class ${studentName}`);
  console.log("My name is Roberto");
  console.log(`How old are you ${studentName}?`);
  console.log("This is QuickStart");
  console.log(`${studentName}! Your mentor is Usman`);
})("Farnaz");


// function with return value
let sum = (function(num1, num2) {
  return num1 + num2;
})(2, 3);

console.log(sum); // 5



let discountedPrice = (function(price, discountPercent) {
  let discountAmount = price * discountPercent;
  let finalPrice = price - discountAmount;
  return finalPrice;
})(12, 0.2);

console.log(discountedPrice); // 9.6

