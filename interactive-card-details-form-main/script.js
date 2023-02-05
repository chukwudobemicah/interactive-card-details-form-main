const errorMessages = document.querySelectorAll('.error-message');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

const cardholderName = form.querySelector('#cardholder-name');
const cardNumber = form.querySelector('#card-number');
const month = form.querySelector('#month');
const year = form.querySelector('#year');
const cvv = form.querySelector('#cvv');


const cardholderNameError = cardholderName.nextElementSibling;
const cardNumberError = cardNumber.nextElementSibling;
const monthError = month.nextElementSibling;
const yearError = year.nextElementSibling;
const cvvError = cvv.nextElementSibling;




errorMessages.forEach((error) => {
  error.style.display = 'none';
});


// add event listener to form

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // cardholder name validation

  if (cardholderName.value === '') {
    cardholderNameError.style.display = 'block';
  } else {
    cardholderNameError.style.display = 'none';
  }

  // card number validation

  if (cardNumber.value === '') {
    cardNumberError.style.display = 'block';
  } else {
    cardNumberError.style.display = 'none';
  }

  // month validation

  if (month.value === '') {
    monthError.style.display = 'block';
  } else {
    monthError.style.display = 'none';
  }

  // year validation

  if (year.value === '') {
    yearError.style.display = 'block';
  } else {
    yearError.style.display = 'none';
  }

  // cvv validation

  if (cvv.value === '') {
    cvvError.style.display = 'block';
  } else {
    cvvError.style.display = 'none';
  }
});
