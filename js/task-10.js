function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector("input");
console.log(inputEl)
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = Number(inputEl.value);
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= amount; i += 1) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: 
    ${getRandomHexColor()}`;

    fragment.appendChild(div);
  }
  return boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.textContent = "";
  inputEl.value = "";
}
