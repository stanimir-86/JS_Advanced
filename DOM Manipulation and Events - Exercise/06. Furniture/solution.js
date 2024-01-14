function solve() {

  const [generateButton, buyButton] = document.querySelectorAll("button");
  const [incomeTextAreaRef, resultTextAreaRef] = document.querySelectorAll('textarea');

  const tableBodyRef = document.querySelector("tbody");

  generateButton.addEventListener('click', generateHandler);
  buyButton.addEventListener('click', buyHandler);

  function generateHandler() {
    if (!incomeTextAreaRef.value) {
      return;
    }
    let value = JSON.parse(incomeTextAreaRef.value);
    for (const element of value) {
      let domElements = createTableDataWithInnerHTML(element);
      tableBodyRef.appendChild(domElements);
    }
  }
  function createTableDataWithInnerHTML(data) {
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = "<td>" +
      `<img src=${data.img}>` +
      "</td >" +
      "<td>" +
      `<p>${data.name}</p>` +
      "</td>" +
      "<td>" +
      `<p>${data.price}</p>` +
      "</td>" +
      "<td>" +
      `<p>${data.decFactor}</p>` +
      "</td>" +
      "<td>" +
      "<input type='checkbox'/>" +
      "</td>";
    return tableRow;
  }
  function buyHandler(event) {
    let names = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let selectCheckBox = Array.from(document.querySelectorAll("input[type=checkbox]")).filter(a => a.checked);
    selectCheckBox.forEach(element => {
      let [imgTD, nameTD, priceTD, decorFactorTD, brandTD] = Array.from(element.parentElement.parentElement.children);
      names.push(nameTD.children[0].textContent);
      totalPrice += Number(priceTD.children[0].textContent);
      avgDecFactor += Number(decorFactorTD.children[0].textContent);
    });

    let res = `Bought furniture: ${names.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor / names.length}`;
    resultTextAreaRef.value = res;
  }
}
// 'Bought furniture: Tablet, Vase\nTotal price: 2015.00\nAverage decoration factor: 7.6', 'Output textarea is different'
// 'Bought furniture: \nTotal price: 0.00\nAverage decoration factor: NaN' to equal 'Bought furniture: Tablet, Vase\nTotal price: 2015.00\nAverage decoration factor: 7.6'