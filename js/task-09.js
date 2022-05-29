// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onClickChangeColorBtn);

function onClickChangeColorBtn() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
  console.log(textEl.textContent)
}
 