const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredientsList = document.querySelector('ul');

const makeIngredientList = elements => {
  return elements.map(elem => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = elem;

    return li;

  })
}

const list = makeIngredientList(ingredients);
ingredientsList.append(...list);

console.log(ingredientsList);
