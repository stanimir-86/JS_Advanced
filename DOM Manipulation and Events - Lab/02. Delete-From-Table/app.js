function deleteByEmail() {
    let emeilInputElement = document.querySelector("input[name='email']");//селектиране по аиме на атрибут input type="text" name="email"
    let emailCellElements = document.querySelectorAll("tr td:nth-of-type(2)");//Selects the second element of td siblings
    let resultElement = document.getElementById("result");
    let emailElements = Array.from(emailCellElements);//обръщам към масив nood колекцията
    let targetElement = emailElements.find(x => x.textContent === emeilInputElement.value);
    //с find намирам елемент,на който текста е равен на инпут елемент value.
    // targetElement.remove();//премахвам елемента от дом дървото,а не от паметта

    if (targetElement) {
        targetElement.parentNode.remove();//така вече трия и елемент и родител.Целия ред.
        resultElement.textContent = "Deleted.";
    } else {
        resultElement.textContent = "Not found.";

    }
}