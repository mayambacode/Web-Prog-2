
//Variable Declaration and Data Types (2 marks)

let name = "Joey"
let age =  25
let isStudent = true
let food = ["Apple", "Chocolate", "Pizza", "Hamburger"]


/* Functions (3 marks)
    Create a function called calculateArea that takes the radius of a circle as 
    a parameter and returns the area of the circle. Use the formula: 
    area = π * r^2 (where π is approximately 3.14159).
 */
function calculateArea() {
    let radius = parseFloat(document.getElementById("radius").value);
    let calculate = 3.14159 * Math.pow(radius, 2)
    let area = document.getElementById("area");
    area.textContent = "Area is: " + calculate.toFixed(2);
}


// console.log(calculateArea(5))

/* 
    Create another function called reverseString that takes a string as a 
    parameter and returns the reversed string.
 */
function reverseString() {
    let str = document.getElementById("str").value;
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    let reverse = document.getElementById("reverse");
    reverse.textContent = "Reversed String: " + newString;
}
console.log(reverseString("Hello"))

/* Write a function called gradeCalculator that takes a numerical score as a 
parameter and returns a letter grade based on the following scale:
    90-100: A
    80-89: B
    70-79: C
    60-69: D
    0-59: F 
*/
function gradeCalculator() {
    let marks = parseInt(document.getElementById("marks").value)
    let grade = document.getElementById("grade");
    if (marks >= 90 && marks <= 100){
        grade.textContent = "Grade is: " + "A"
    }
    else if (marks >= 80 && marks <= 89){
        grade.textContent = "Grade is: " + "B"
    }
    else if (marks >= 70 && marks <= 79){
        grade.textContent =  "Grade is: " + "C"
    }
    else if (marks >= 60 && marks <= 69){
        grade.textContent = "Grade is: " +  "D"
    }
    else if (marks >= 0 && marks <= 59){
        grade.textContent = "Grade is: " + "F"
    }
}

console.log(gradeCalculator(85))