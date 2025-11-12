/* 
 for...in: Used to loop through the properties of an object.
 Reference: https://www.w3schools.com/js/js_loop_forin.asp
*/ 

// Object with an Array
let course = {
  name: "software enginerring",
  duration: 4,
  students: ['Cristian','Hazel', 'Meaghann' , 'Benjamin', 'Misty', 'Christopher', 'Elias',  'Melissa',  'Dustin', 'Dylan',  'Michael',  'Kyran',  'Rhett',  'Anthony',  'Luke', 'Raul',  'Aiden',  'Alessandro',  'Joewens',  'Madelyn',  'Devin',  'Alexander' ]
}

console.log (course.name)
console.log (course.duration)
console.log (course.students)

for (let key in course) {
  console.log (key)
}

for (let key in course) {
  console.log (course[key])
}

for (let i=0; i< course.students.length; i++) {
  console.log (course.students[i])
}