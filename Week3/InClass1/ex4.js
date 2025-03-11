
let total = 0;
let count = 0;
let failures = 0;

while (true) {

  let input = prompt("Please enter score (Enter 'q' to quit or a negative value):");


  if (input.toLowerCase() === "q" || parseFloat(input) < 0) {
    break;
  }


  let score = parseFloat(input);


  if (isNaN(score)) {
    alert("Invalid input. Please enter a valid number.");
    continue; 
  }


  total += score;
  count++;


  if (score < 50) {
    failures++;
  }
}


let average = count > 0 ? (total / count).toFixed(1) : 0;


alert(
  `Total Scores Entered: ${count}
  Average Score: ${average}
  Total Failures: ${failures}
  `
);
