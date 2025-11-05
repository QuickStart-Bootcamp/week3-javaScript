// An arrow function in JavaScript is a more concise way of writing functions.
// It can take parameters (optional, depending on the task).
// Arrow functions use the => syntax. Instead of using the traditional function keyword, you use => to define the function.

// function with no parameters
const greetingQuickstartArrow = () => {
  console.log("Hi");
  console.log("Welcome to our class");
  console.log("My name is Roberto");
};

// function with parameters
const greetingStudentArrow = (studentName) => {
  console.log(`Welcome to our class ${studentName}`);
  console.log("My name is Roberto");
  console.log(`How old are you ${studentName}?`);
  console.log("This is QuickStart");
  console.log(`${studentName}! Your mentor is Usman`);
};


// function with return value
const addNumbersArrow = (num1, num2) => num1 + num2;


// Real-World Scenario
const calculateDiscountArrow = (price, discountPercent) => {
  let discountAmount = price * discountPercent;
  let finalPrice = price - discountAmount;
  return finalPrice;
};
