const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onInputBlur);

validationInputRef.addEventListener('focus', onInputFocus);

function onInputBlur(e) {
  if (
    e.currentTarget.value.length ===
    parseInt(validationInputRef.getAttribute('data-length'))
  ) {
    validationInputRef.classList.add('valid');
  } else {
    validationInputRef.classList.add('invalid');
  }
}

function onInputFocus(e) {
  if (
    e.currentTarget.classList.contains('valid') ||
    e.currentTarget.classList.contains('invalid')
  ) {
    validationInputRef.classList.remove('valid', 'invalid');
  }
}
