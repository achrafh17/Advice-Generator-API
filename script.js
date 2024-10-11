

const apiAdvice = "https://api.adviceslip.com/advice";
const AdviceText = document.querySelector("#advice-span");
const button = document.querySelector(".image-container");
const span = document.querySelector("#number-advice");

function getAdvice() {
  fetch(apiAdvice)
    .then((response) => response.json())
    .then((data) => {
      span.textContent = data.slip.slip_id;
      AdviceText.textContent = data.slip.advice;
      
    });
}
button.addEventListener("click", getAdvice);

  