
document.addEventListener("DOMContentLoaded", function () {
    const yarnType = document.getElementById("yarn");
    const quantity = document.getElementById("quantity");
    const errorSpan = document.createElement("span"); // Create an error message span
    errorSpan.classList.add("error");
    errorSpan.style.color = "red";
    quantity.parentNode.appendChild(errorSpan); // Append it after the quantity input

    function validateQuantity() {   
        if (yarnType.value === "natural" && quantity.value > 5) {
            errorSpan.textContent = "You may only purchase a maximum of 5 natural fibre yarns.";
            quantity.value = 5; // Enforce the max limit
        } else {
            errorSpan.textContent = ""; // Clear error if not applicable
        }
    }

    // Event listeners
    yarnType.addEventListener("change", function () {
        if (yarnType.value === "natural" && quantity.value > 5) {
            quantity.value = 5; // Reset quantity to max valid value
        }
        validateQuantity();
    });

    quantity.addEventListener("input", validateQuantity);
});