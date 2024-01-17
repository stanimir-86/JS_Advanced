function toggle() {
    const MORE = "More";
    const LESS = "Less";

    let buttonSpan = document.querySelector(".button");
    let divWrapperText = document.querySelector("#extra");

    buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;
    divWrapperText.style.display = divWrapperText.style.display === "none" ||
        divWrapperText.style.display === ""
        ? "block"
        : "none";
}

