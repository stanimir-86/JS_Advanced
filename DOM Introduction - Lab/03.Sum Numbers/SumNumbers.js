// function calc() {
//     let input1 = document.getElementById('num1');//вземам първия инпут по ID
//     let input2 = document.getElementById('num2');//вземам втория импут по ID
//     let num1 = Number(input1.value);//обръщам ги към числа
//     let num2 = Number(input2.value);//...
//     let sumInput = document.getElementById('sum');//вземам си input sum
//     sumInput.value = num1 + num2;//и му придавам стойност.
// }

function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sum = document.getElementById('sum');
    let sums = num1 + num2;
    sum.value = sums;
}


