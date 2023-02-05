const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;
	const formData = { email, password };
	
	if (email.trim() === "" || password.trim() === "") {
    return alert("Please fill in all the fields!");
	}
	
	console.log(formData);
  event.currentTarget.reset();
}
	

