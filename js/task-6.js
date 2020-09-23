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

const formInputEl = document.querySelector(`#validation-input`);
console.log(formInputEl);
const validLength = Number(formInputEl.dataset.length);
console.log(validLength);
formInputEl.addEventListener(`blur`, onInputBlur);
function onInputBlur() {
  if (formInputEl.value.length === validLength) {
    formInputEl.classList.remove(`invalid`);
    formInputEl.classList.add(`valid`);
  } else {
    formInputEl.classList.add(`invalid`);
    formInputEl.classList.remove(`valid`);
  }
}
