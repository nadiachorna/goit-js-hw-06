// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const value = document.getElementById("#value");
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

decButton.addEventListener('click', onDecButtonClick);
incButton.addEventListener('click', onIncButtonClick);
  let counterValue = 0;
function onDecButtonClick() {
    counterValue -= 1;
    console.log(counterValue);
};

function onIncButtonClick() {
    counterValue++;
    console.log(counterValue);
}
 
