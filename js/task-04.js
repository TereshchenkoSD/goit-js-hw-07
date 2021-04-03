const counter = {
  value: 0,
  increment() {
    console.log('increment -> this', this);
    this.value += 1;
  },
  decrement() {
    console.log('decrement -> this', this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  console.log('Кликнули на декремент');

  counter.decrement();
  // console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  console.log('Кликнули на инкремент');

  counter.increment();
  // console.log(counter);
  valueEl.textContent = counter.value;
});

console.log(window);

// const counterValueRef = document.querySelector('#value');
// const decreaseCounterBtn = document.querySelector('[data-action="decrement"]');
// const increaseCounterBtn = document.querySelector('[data-action="increment"]');

// decreaseCounterBtn.addEventListener('click', decrease);
// function decrease() {
//   counterValueRef.textContent = counterValueRef.textContent * 1 - 1;
//   console.log(
//     `При клике уменьшаем значение, новое значение: ${counterValueRef.textContent}`,
//   );
// }
// increaseCounterBtn.addEventListener('click', increase);
// function increase() {
//   counterValueRef.textContent = counterValueRef.textContent * 1 + 1;
//   console.log(
//     `При клике увеличиваем значение, новое значение: ${counterValueRef.textContent}`,
//   );
// }
