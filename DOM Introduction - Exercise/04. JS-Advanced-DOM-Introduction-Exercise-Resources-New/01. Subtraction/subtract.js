function subtract() {
    // let firstNumNumber = Number(document.getElementById('firstNumber').value);
    // let secondNumNumber = Number(document.getElementById('secondNumber').value);
    // let subs = firstNumNumber - secondNumNumber;
    // let result = document.getElementById('result').textContent = subs;
    let firstN = Number(document.getElementById('firstNumber').value);
    let secondN = Number(document.getElementById('secondNumber').value);
    let result = firstN - secondN;
    document.getElementById('result').textContent = result;
   

}