function solve() {
  let textArea = document.getElementById('input');
  let textAreaValue = textArea.value;
  let resultDiv = document.getElementById('output')
  let sentancesArr = textAreaValue
    .split(".")
    .filter((s) => s !== "")
    .map((s) => s + ".");
  let paragraphRoof = Math.ceil(sentancesArr.length / 3);

  for (let i = 0; i < paragraphRoof; i++) {
    let joinedSentances = sentancesArr.splice(0, 3).join("");
    resultDiv.innerHTML += `<p>${joinedSentances}</p>`;

  }
}