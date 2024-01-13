// function extractText() {
//     let lis = document.getElementsByTagName('li');//взимам всички елементи като хтмл колекция
//     let liArray = Array.from(lis);//обръщам html колекцията към масив.
//     let allTexts = liArray.map(x => x.textContent);//за всеки елемент от получавам текста му.
//     let textArea = document.getElementById('result')//дай ми този елемент ,който има ID 'result
//     textArea.value = allTexts.join("\n");//по този начин пълним value с текст.
// }

function extractText() {
    let liItems = document.querySelectorAll('li');
    let textArea = document.getElementById("result");
    let fullText = "";
    for (const el of liItems) {
        fullText += el.textContent + '\n';
    }
    textArea.value = fullText;
}

