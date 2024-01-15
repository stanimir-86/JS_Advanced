function addItem() {

    let imputElement = document.getElementById("newItemText").value;//вземам си инпут елемента
    let ulTag = document.getElementById("items");//вземам си таг елемента,където ще поставям новия елемент
    let newElement = document.createElement("li");//създвам нов html element
    newElement.textContent = imputElement;//придавам стойност на html element
    ulTag.appendChild(newElement);//апендвам го към ul taga

}