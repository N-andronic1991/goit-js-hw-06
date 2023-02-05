const inputName = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
	if ( inputName.value.trim() === "") {
		output.textContent = "Anonymous";
	} else {
		output.textContent = event.currentTarget.value;
	}
});

