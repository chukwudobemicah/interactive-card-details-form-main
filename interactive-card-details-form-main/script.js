const errorMessages = document.querySelectorAll('.error-message');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

// NODELIST
console.log(errorMessages);
// NODELIST
console.log(inputs);

// REDUCED ALL THE ERROR MESSAGES OPACITY TO 0;
errorMessages.forEach(er => er.classList.add('zero-opacity'));

// TRYING TO LOOP THROUGH THE INPUTS, FIND THE CLOSEST ERROR MESSAGE TO EACH INPUT WITH QUERYSELECTOR THEN REMOVE THE '.zero-opacity' class ON THAT CLOSEST ERR MESSAGE BUT  MY QUERYSELECTOR KEEPS RETURNING NULL EVEN THOUGH I HAVE THE ELEMENTS IN MY DOM.

// P.S : YOU CAN CHECK MY HTML TO SEE IF I'M SELECTING THE ERR MESSAGE RIGHT, BUT I'M SURE I AM.
inputs.forEach(inp => {
  // LOGS NULL
  console.log(inp.querySelector('.error-message'));
  // CANNOT USE CLASSLIST ON THIS BECAUSE QUERYSELECTOR IS NULL.
  inp.querySelector('.error-message').classList.remove('opacity');
});
