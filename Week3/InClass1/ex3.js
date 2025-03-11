



let bill = prompt("Enter bill amount:")

if (isNaN(bill) || bill < 0) {
    alert("Invalid input. Please enter a positive number that is over 0");
} else {
    let tipPercent = prompt("Enter tip percent:")

    if (isNaN(tipPercent) || tipPercent < 0) {
        alert("Invalid input. Please enter a non negative number that is over 0");
    } else {
        let total = tipPercent/100 * bill;
        let tip = total.toFixed(2);
    
        confirm(`Tip: $${tip}`);
    }
}


 