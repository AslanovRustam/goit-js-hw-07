// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее
// значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
const inputEl = document.querySelector(`#name-input`);
console.log(inputEl);
const outputEl = document.querySelector(`#name-output`);
console.log(outputEl);
// вариант решения задачи обычной функции
inputEl.addEventListener(`input`, inputChange);
function inputChange(event) {
  if (event.currentTarget.value === ``) {
    outputEl.textContent = `незнакомец`;
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
}

//вариант решения задачи тернарником

// inputEl.addEventListener(`input`, inputChange);
// function inputChange(event) {
//   event.currentTarget.value === ``
//     ? (outputEl.textContent = `незнакомец`)
//     : (outputEl.textContent = event.currentTarget.value);
// }
