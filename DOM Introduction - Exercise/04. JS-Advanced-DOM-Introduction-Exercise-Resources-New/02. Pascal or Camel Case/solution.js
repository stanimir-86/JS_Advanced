function solve() {
  // const CAMEL_CASE = "Camel Case";
  // const PASCAL_CASE = "Pascal Case";

  // //capture elements
  // let inputValueByLowerCase = document.getElementById('text').value.toLowerCase();
  // let currentCaseValue = document.getElementById('naming-convention').value;
  // let result = document.getElementById('result');
  // //validate case
  // if (currentCaseValue !== CAMEL_CASE && currentCaseValue !== PASCAL_CASE) {
  //   result.textContent = "Error!";
  //   return;
  // }
  // let arrofStr = inputValueByLowerCase.split(' ');
  // let output = '';
  // let startingPoint = 0;
  // if (currentCaseValue === CAMEL_CASE) {
  //   output += arrofStr[0];//вземам първата буква
  //   startingPoint = 1;
  // }
  // for (let i = startingPoint; i < arrofStr.length; i++) {
  //   const currentWord = arrofStr[i];
  //   output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);
  //   result.textContent = output;
  // }

  const inputTextElement = document.getElementById('text').value;
  const inputConventionElement = document.getElementById('naming-convention').value;
  let finalText = '';
  if (inputConventionElement === "Camel Case") {
    let convertText = inputTextElement.toLowerCase().split(" ");
    finalText += convertText.shift();
    convertText.forEach(element => {
      finalText += element[0].toUpperCase() + element.substring(1);
    });

  } else if ("Pascal Case" === inputConventionElement) {

    let convertText = inputTextElement.toLowerCase().split(" ");
    convertText.forEach(element => {
      finalText += element[0].toUpperCase() + element.substring(1);
    });
    debugger
  } else {
    finalText += 'Error!';
  }
  document.getElementById('result').textContent = finalText;

}