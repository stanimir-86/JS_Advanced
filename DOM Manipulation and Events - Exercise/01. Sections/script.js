function create(input) {


   let parentElement = document.getElementById("content");//вземам си елемента където ще наливам съдържанието

   let elements = input;//входа ми идва ,като цукъл и го прекарвам пре фор оф

   for (const element of elements) {
      let div = document.createElement('div');//създавам си див елемент
      let p = document.createElement('p');//създавам си параграф
      let text = document.createTextNode(element);//в тази променлива запазвам съдържанието от инпута

      p.appendChild(text);//в параграфа добавям текста от импута,който ми идва за всеки елемент
      p.style.display = "none";//придавам стил скриване на елемента в браузъра
      div.appendChild(p);//след това добавям в див параграфа със съдържанието.
      div.addEventListener("click", function (event) {
         event.target.children[0].style.display = 'block';//когато му се приложи евент клик да се покаже в броузъра
      });
      parentElement.appendChild(div);//накрая добавям дива към парент елемента.
   }

}