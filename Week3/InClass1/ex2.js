// Write a program that asks the user to enter their first name.
// Use the String’s length property to display the number of 
  // characters in the user’s name inside a dialog box e.g.
//"Your name NAME has L characters.”
// where NAME is the user-entered name in all upper-case 
// and L is the number of characters in the user-entered name.

let nameInput = prompt("Enter your first name")

 alert(`Your name ${nameInput.toUpperCase()} has ${nameInput.length} characters`);
