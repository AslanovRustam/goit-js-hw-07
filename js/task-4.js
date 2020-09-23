// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// const counterValue = document.querySelector(`#value`).textContent;

const counterValue = document.querySelector(`#value`);
const decrementEl = document.querySelector(
  `#counter button[data-action="decrement"]`
);
const incrementEl = document.querySelector(
  `#counter button[data-action="increment"]`
);
decrementEl.addEventListener(`click`, handleButtonDecrClick);
function handleButtonDecrClick() {
  let value = counterValue.textContent;
  value -= 1;
  counterValue.textContent = value;
  return counterValue;
}
incrementEl.addEventListener(`click`, handleButtonIncrClick);
function handleButtonIncrClick() {
  let value = Number(counterValue.textContent);
  value += 1;
  counterValue.textContent = value;
  return counterValue;
}
