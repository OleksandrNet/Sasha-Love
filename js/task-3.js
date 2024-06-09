const inputText = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

inputText.addEventListener("input", (ev) => {
  span.textContent = ev.currentTarget.value.trim();
});
