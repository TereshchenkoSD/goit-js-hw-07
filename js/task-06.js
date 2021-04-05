// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    parseInt(validationInputRef.getAttribute('data-length'))
  ) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  } else {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
  }
}
