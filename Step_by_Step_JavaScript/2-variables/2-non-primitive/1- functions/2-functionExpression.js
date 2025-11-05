// Anonymous Function Expression

// function with no parameters
const greetingQuickstartExpr = function() {
  console.log("Hi");
  console.log("Welcome to our class");
  console.log("My name is Roberto");
};

// function with parameters
const greetingStudentExpr = function(studentName) {
  console.log(`Welcome to our class ${studentName}`);
  console.log("My name is Roberto");
  console.log(`How old are you ${studentName}?`);
  console.log("This is QuickStart");
  console.log(`${studentName}! Your mentor is Usman`);
};


// function with return value
const addNumbersExpr = function(num1, num2) {
  let result = num1 + num2;
  return result;
};


// Real-World Scenario
const calculateDiscountExpr = function(price, discountPercent) {
  let discountAmount = price * discountPercent;
  let finalPrice = price - discountAmount;
  return finalPrice;
};
