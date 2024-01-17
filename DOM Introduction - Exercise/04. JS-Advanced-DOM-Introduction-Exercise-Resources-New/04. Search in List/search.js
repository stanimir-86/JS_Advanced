function search() {
   // let listItems = document.querySelectorAll("#towns li");
   // let inputValue = document.querySelector("input").value;
   // let result = document.getElementById('result');

   // let sum = 0;
   // let inputTolower = inputValue.toLowerCase();

   // for (const li of listItems) {
   //    let liTextToLower = li.textContent.toLowerCase();
   //    if (liTextToLower.includes(inputTolower)) {
   //       li.style.fontWeight = 'bold';
   //       li.style.textDecoration = 'underline';
   //       sum++;
   //    } else {
   //       li.style.fontWeight = "";
   //       li.style.textDecoration = "";
   //    }

   // }

   // result.textContent = `${sum} matches found`;

   const townsInputElements = document.querySelectorAll('#towns li');
   const inputElement = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let sum = 0;
   let inputTolower = inputElement.toLowerCase();
   for (const elements of townsInputElements) {
      let liToLower = elements.textContent.toLocaleLowerCase();
      if (liToLower.includes(inputTolower)) {
         elements.style.fontWeight = 'bold';
         elements.style.textDecoration = 'underline';
         sum++;
      } else {
         elements.style.fontWeight = '';
         elements.style.textDecoration = '';
      }
   }
   result.textContent = `${sum} matches found`
}
