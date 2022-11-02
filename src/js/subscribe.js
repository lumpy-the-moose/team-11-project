let input = [
  document.querySelector('.subscribe__mail-input'),
  document.querySelector('.footer-form__input'),
];

input.forEach(elem => {
  elem.addEventListener('input', inputHandler => {
    if (!elem.value) {
      elem.style.borderColor = '#FFE550';
    }
    if (elem.value) {
      elem.style.borderColor = '#FF705D';
    }
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(elem.value)) {
      elem.style.borderColor = '#7EB101';
    }
  });
});
