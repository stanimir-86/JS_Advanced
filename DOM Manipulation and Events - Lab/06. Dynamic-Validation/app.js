function validate() {
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("change", function () {
        const email = emailInput.value.toLowerCase(); // Convert to lowercase
        const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/; // Regular expression for valid email format

        if (!emailPattern.test(email)) {
            emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
        }
    });
}