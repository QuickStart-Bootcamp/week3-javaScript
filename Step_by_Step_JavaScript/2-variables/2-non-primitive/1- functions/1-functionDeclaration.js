// Function: A block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes/calls it.
// It can take parameters (optional, depending on the task).
// Reference: https://www.w3schools.com/js/js_functions.asp



// function with no parameters
function greetingQuickstart () {
  console.log ("Hi")
  console.log ("Welcome to our class")
  console.log ("My name is Roberto")
}


// function with parameters
function greetingStudent (studentName) {
  console.log (`Welcome to our class ${studentName}`)
  console.log ("my name is Roberto")
  console.log (`how old are you ${studentName}`)
  console.log ("This is quickstart")
  console.log (`${studentName} ! Your mentor is Usman `)
}


// function with return value
function addNumbers (num1, num2) {
  let result = num1 + num2
  return result
}


// Real-World Scenario
function calculateDiscount (price, discountPercent) {
  let discountAmount = (price * discountPercent)
  let finalPrice = price - discountAmount 
  return finalPrice
}




