// asks for a whole number greater than 0
// Use the Math.sqrt() function to calculate the square root of the user-entered number
//Display the output “Square root of N is R” in a dialog (where N is the user-entered number 
// and R is the square root of the user-entered number, formatted to 1 decimal place.
// If the user enters an invalid value, display an error message.

let input = parseInt(prompt("Enter a whole number greater than 0:"));

let num = parseFloat(input);

if (isNaN(num) || num < 0) {
    alert("Invalid input. Please enter a whole number greater than 0.");
} else {
    let sqrt = Math.sqrt(num);
    alert("Square root of " + num + " is " + sqrt.toFixed(1));
}
