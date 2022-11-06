let inputUser = [document.querySelector('.input-user')];
let inputTel = [document.querySelector('.input-tel')];
let inputMail = [document.querySelector('.input-mail')];

inputUser.forEach(elem => {
  elem.addEventListener('input', inputHandler => {
    if (!elem.value) {
      elem.style.borderColor = '#1212121f';
    }
    if (elem.value) {
      elem.style.borderColor = '#FF705D';
    }
    if (/[A-Za-z]{3,25}$/.test(elem.value)) {
      elem.style.borderColor = '#7EB101';
    }
  });
});

inputTel.forEach(elem => {
  elem.addEventListener('input', inputHandler => {
    if (!elem.value) {
      elem.style.borderColor = '#1212121f';
    }
    if (elem.value) {
      elem.style.borderColor = '#FF705D';
    }
    if (/^\+\d{2} \(\d{3}\) \d{3} \d{2} \d{2}$/.test(elem.value)) {
      elem.style.borderColor = '#7EB101';
    }
  });
});

inputMail.forEach(elem => {
  elem.addEventListener('input', inputHandler => {
    if (!elem.value) {
      elem.style.borderColor = '#1212121f';
    }
    if (elem.value) {
      elem.style.borderColor = '#FF705D';
    }
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(elem.value)) {
      elem.style.borderColor = '#7EB101';
    }
  });
});
