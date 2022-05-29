// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');

form.addEventListener("submit", onFormSubmit);

let user = {
    email: '',
    password: '',
}

function onFormSubmit (event) {
    event.preventDefault();
 
  if (emailEl.value === "" || passwordEl.value === "") {
    return console.log("Please fill in all the fields!");
  }
  else {
      user.email = emailEl.value;
      user.password = passwordEl.value;
    }
      
    event.currentTarget.reset();

    console.log(user);
}