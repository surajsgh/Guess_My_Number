'use strict';

// This line of code is gonna give you the whole html content stored inside the html element with the 'message' class name.
console.log(document.querySelector('.message'));

// This line of code is just gonna give you the text content.
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 20;

document.querySelector('.score').textContent = 10;

// For input values we rather use value attribute(No usage of textContent attribute.)
document.querySelector('.guess').value = 15;
