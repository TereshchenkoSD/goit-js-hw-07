const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const listOfProducts = [...ingredients].map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  ingredientsList.append(listItem);
});
