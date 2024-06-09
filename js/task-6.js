function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const number = document.querySelector("input");
console.dir(number.value);

function createBoxes(amount) {
  const newBox = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBox.push(box);
  }
  boxes.append(...newBox);
}

function destroyBoxes() {
  boxes.textContent = "";
}

create.addEventListener("click", () => {
  const amount = Number(number.value);
  createBoxes(amount);
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});

createBoxes(number.textContent);
