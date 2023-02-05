const errorMessages = document.querySelectorAll('.error-message');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

console.log(errorMessages);

errorMessages.forEach(er => er.classList.add('opacity'));
console.log(inputs);
// const checkInputs = function () {
//   inputs.forEach(inp => {
//     console.log(inp);

//     if (inp.textContent === '') {
//       //   console.log(inp.querySelector('.error-message'));
//       if (inp.nextElementSibling.classList.contains('error-message')) {
//         console.log(inp.nextElementSibling);
//         inp.nextElementSibling.classList.remove('opacity');
//       }
//     }
//   });
// };

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   checkInputs();
// });

// PROBLEM :
inputs.forEach(inp => {
  console.log(inp.querySelector('.error-message'));
  inp.querySelector('.error-message').classList.remove('opacity');
});

// CHATGPT AND STACKOVERFLOW SOLUTION (WHICH ARE NOT WORKING):

window.addEventListener('load', function () {
  inputs.forEach(inp => {
    console.log(inp.querySelector('.error-message'));
    window.frames[0].inp
      .querySelector('.error-message')
      .classList.remove('opacity');
  });
});
// window.onload()

document.addEventListener('DOMContentLoaded', function () {
  inputs.forEach(inp => {
    console.log(inp.querySelector('.error-message'));
    inp.querySelector('.error-message').classList.remove('opacity');
  });
});
