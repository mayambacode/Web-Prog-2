document.addEventListener("DOMContentLoaded", function () {
    const yarnType = document.getElementById("yarn");
    const quantity = document.getElementById("quantity");

    function validateQuantity() {
        if (yarnType.value === "natural" && quantity.value > 5) {
            quantity.setCustomValidity("You may only purchase a maximum of 5 natural fibre yarns.");
            quantity.reportValidity(); // Show validation message
            quantity.value = 5; // Reset quantity to 5
        } else {
            quantity.setCustomValidity(""); // Clear error if valid
        }
    }

    quantity.addEventListener("input", validateQuantity);

    yarnType.addEventListener("change", function () {
        if (yarnType.value === "natural" && quantity.value > 5) {
            quantity.value = 5; // Reset if yarn type is switched to Natural Fibre
        }
        validateQuantity(); // Re-check quantity validity
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        validateQuantity(); // Ensure validation is checked before submitting
        if (!quantity.checkValidity()) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});