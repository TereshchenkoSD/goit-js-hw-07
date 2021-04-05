const inputRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');
inputRef.addEventListener('input', onInputChange);
function onInputChange(evt) {
  textRef.style.fontSize = `${evt.currentTarget.value}px`;
}
