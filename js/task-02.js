const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  ingredientsList.append(listItem);
}
