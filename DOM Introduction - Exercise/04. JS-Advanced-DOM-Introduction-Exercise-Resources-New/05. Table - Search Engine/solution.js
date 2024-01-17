function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll("tbody tr")

   function onClick() {
      let input = document.getElementById('searchField').value.toLowerCase();

      for (let row of rows) {

         let rowTextToLower = row.textContent.toLowerCase();
         if (rowTextToLower.includes(input)) {
            row.setAttribute("class", "select");
         } else {
            row.removeAttribute("class");
         }

      }

   }

}