// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${listCategories.length}`);

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

listCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    const categoryEl = category.querySelectorAll('li');       
    console.log(`Elements: ${categoryEl.length}`)
})



