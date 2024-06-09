function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  widget.style.backgroundColor = newColor;
  span.textContent = newColor;
});
