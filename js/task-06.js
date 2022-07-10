// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

console.log(dataLength)

input.addEventListener('blur', (event) => {
    let inputValue = event.currentTarget.value.length;
    console.log(inputValue)
    
    if (inputValue > dataLength || inputValue < dataLength) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    else {
     input.classList.remove('invalid');
        input.classList.add('valid');
    }  
 
});

