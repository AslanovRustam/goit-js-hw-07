// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

// const formInputEl = document.querySelector(`#validation-input`);
// console.log(formInputEl);
// const validLength = Number(formInputEl.dataset.length);
// console.log(validLength);
// formInputEl.addEventListener(`blur`, onInputBlur);
// function onInputBlur(event) {
//   const currentLength = Number(event.currentTarget.value.length);
//   console.log(currentLength);
//   if (currentLength === validLength) {
//     formInputEl.classList.remove(`invalid`);
//     formInputEl.classList.add(`valid`);
//   } else if (currentLength > validLength) {
//     formInputEl.classList.replace(`valid`, `invalid`);
//   } else if (currentLength < validLength) {
//     formInputEl.classList.replace(`valid`, `invalid`);
//   } else {
//     formInputEl.classList.remove(`valid`);
//     formInputEl.classList.remove(`invalid`);
//   }
// }

const formInputEl = document.querySelector(`#validation-input`);
console.log(formInputEl);
const validLength = Number(formInputEl.dataset.length);
console.log(validLength);
formInputEl.addEventListener(`blur`, onInputBlur);
function onInputBlur() {
  formInputEl.classList.add(`invalid`);
  if (formInputEl.value.length === validLength) {
    formInputEl.classList.remove(`invalid`);
    formInputEl.classList.add(`valid`);
  } else if (formInputEl.value.length > validLength) {
    formInputEl.classList.replace(`valid`, `invalid`);
  } else if (formInputEl.value.length < validLength) {
    formInputEl.classList.replace(`valid`, `invalid`);
  } else {
    formInputEl.classList.remove(`valid`);
    formInputEl.classList.remove(`invalid`);
  }
}

// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", validation);

// const validLength = Number(inputEl.dataset.length);

// function validation() {
//   if (inputEl.value.length === validLength) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else if (inputEl.value.length === 0) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.remove("valid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// }
