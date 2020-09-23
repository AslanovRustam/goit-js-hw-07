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
