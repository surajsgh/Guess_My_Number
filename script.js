'use strict';

/*
// This line of code is gonna give you the whole html content stored inside the html element with the 'message' class name.
console.log(document.querySelector('.message'));

// This line of code is just gonna give you the text content.
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 20;

document.querySelector('.score').textContent = 10;

// For input values we rather use value attribute(No usage of textContent attribute.)
document.querySelector('.guess').value = 15;
*/

// Random number generation
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
