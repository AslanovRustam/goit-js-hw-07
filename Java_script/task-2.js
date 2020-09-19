// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = ingredients.map((ing) => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ing;
  return itemEl;
});
const listBody = document.querySelector("#ingredients");
listBody.append(...listEl);

// const ingredEl = document.createElement(`li`);
// console.log(ingredEl);
// const ingredEl = ingredients.map(
//   (ingred) => (ingred = document.createElement(`li`))
// );
// const ingredEl = document.createElement(`li`);
// ingredEl.textContent = ingredients;
// const listEl = ingredients.map((ing) => ing);

// const listEl = ingredients.map((ing) => {
//   ingredEl.textContent = ing;
// });
// console.log(...listEl);
// const grapeEl = listEl;
// const listBody = document.querySelector("#ingredients");
// listBody.append(ingredEl);

// ingredEl.textContent = ingredients;
// console.log(ingredEl);
// document.body.appendChild(ingredEl);
// const listEl = document.querySelector("#ingredients");
// const ingAll = ingredients.map((ing) => (ing = document.createElement(`li`)));
// document.body.appendChild(ingAll);
