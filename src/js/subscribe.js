let input = document.querySelector('.subscribe__mail-input');

input.addEventListener('input', event => {
  if (!input.value) {
    input.style.borderColor = '#FFE550';
  }
  if (input.value) {
    input.style.borderColor = '#FF705D';
  }
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.value)) {
    input.style.borderColor = '#7EB101';
  }
});
