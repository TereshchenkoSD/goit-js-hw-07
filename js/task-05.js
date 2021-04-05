const inputRef = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length < 1
    ? (nameLabel.textContent = 'незнакомец')
    : (nameLabel.textContent = event.currentTarget.value);
}
