
document.addEventListener("DOMContentLoaded", function () {
    const numLevels = document.getElementById("num");
    const fabricOptions = document.querySelectorAll("input[name='fabric']");
    const optionCheckboxes = document.querySelectorAll("input[type='checkbox']");
    const totalSpan = document.querySelector("#total span");

    function calculateTotal() {
        // Get the number of levels (default is 3)
        let levels = parseInt(numLevels.value, 10);

        // Get the selected fabric price
        let fabricCost = 0;
        fabricOptions.forEach(radio => {
            if (radio.checked) {
                fabricCost = parseFloat(radio.value);
            }
        });

        // Sum up checked options
        let optionsTotal = 0;
        optionCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                optionsTotal += parseFloat(checkbox.value);
            }
        });

        // Calculate final total
        let estimatedTotal = (levels * fabricCost) + optionsTotal;

        // Display the total with 2 decimal places
        totalSpan.textContent = `$${estimatedTotal.toFixed(2)}`;
    }

    // Attach the same event listener to all relevant inputs
    const allInputs = [...fabricOptions, ...optionCheckboxes, numLevels];
    allInputs.forEach(input => {
        input.addEventListener("change", calculateTotal);
    });

    // Initial calculation on page load
    calculateTotal();
});