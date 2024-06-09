const form = document.querySelector(".login-form");
form.addEventListener("submit", addSubmit);

function addSubmit(ev) {
  ev.preventDefault();
  const forms = ev.target;
  const email = forms.elements.email.value.trim();
  const password = forms.elements.password.value.trim();
  if (email === "" || password === "") {
    alert(`All form fields must be filled in`);
  }
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  form.reset();
}
