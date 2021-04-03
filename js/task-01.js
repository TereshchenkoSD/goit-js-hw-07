const listRef = document.querySelector('#categories');
console.dir(listRef);

const calculateItems = () => {
  const itemsRef = listRef.querySelectorAll('li.item');
  console.log(`В списке ${itemsRef.length} категории`);

  for (let i = 0; i < itemsRef.length; i += 1) {
    const element = itemsRef[i].querySelector('h2');
    const categoryItems = itemsRef[i].querySelectorAll('ul>li');
    console.log(`Категория: ${element.textContent}`);
    console.log(`Количество элементов: ${categoryItems.length}`);
  }
};

calculateItems();
