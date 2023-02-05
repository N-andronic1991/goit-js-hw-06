function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;

  spanEl.textContent = document.body.style.backgroundColor;
  
}