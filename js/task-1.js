const items = document.querySelectorAll("#categories .item");

const numer = items.length;
console.log(`Number of categories: ${numer}`);

items.forEach((item) => {
  const category = item.querySelector("h2");
  console.log(`Category: ${category.textContent}`);

  const el = item.querySelectorAll("li");
  console.log(`Elements: ${el.length}`);
});
