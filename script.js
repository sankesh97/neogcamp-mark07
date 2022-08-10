let inputText = document.querySelector("#input");
let outputText = document.querySelector("#output");

let translateBinion = () => {
  fetch(
    "	https://api.funtranslations.com/translate/dothraki.json?text=" +
      inputText.value
  )
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated))
    .catch((error) => {
      console.log(error);
      alert("Something went wrong! Please try after an hour");
    });
};
