
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
	counterValue -= 1;
	 updateCounter();
	 
};

function onIncrementBtnClick() {
	counterValue += 1;
    updateCounter();
};

  function updateCounter() {
	 counter.innerHTML = counterValue;
 }
