function focused() {
    const inputFilds = document.querySelectorAll('input');
    let inputFildsArr = Array.from(inputFilds);

    inputFildsArr.forEach((input) => {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlur);
    });
    function inputFocus(e) {
        let sectionElement = e.target.parentNode;
        debugger
        sectionElement.classList.add('focused');
    }
    function inputBlur(e) {
        let sectionElement = e.target.parentNode;
        sectionElement.classList.remove("focused");
    }
}