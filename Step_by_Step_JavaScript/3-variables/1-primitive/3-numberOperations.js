/*
  Reference: https://www.w3schools.com/js/js_number_methods.asp
  Reference: https://www.w3schools.com/js/js_math.asp 
  >, <, ==: Game score
  Rounding: Used in billing or pricing, where prices are rounded to the nearest dollar or cent.
  Math: Ready js object, Reference: https://www.w3schools.com/js/js_math.asp 
*/

let price = 12.95
let tax = 5.5


let total = price + tax
price = price + 12;
price = price - 12;
price = price * 2;
price = price / 2;
price++ ;
price--;

let score = 85
console.log (score < 90)

let newPrice = Math.round (price)
console.log (newPrice)




