const listRef = document.querySelector('#categories');

const itemsRef = listRef.querySelectorAll('li.item');
console.log(`В списке ${itemsRef.length} категории`);
const calculatedItems = [...itemsRef].forEach(item => {
  const element = item.querySelector('h2');
  const categoryItems = item.querySelectorAll('ul>li');
  console.log(`Категория: ${element.textContent}`);
  console.log(`Количество элементов: ${categoryItems.length}`);
});
