'use strict';

// Grabbing html element

console.log(document.querySelector('.message').textContent);

// Changing the text Content of Html element

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Event Handling Click Event

const secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
console.log((document.querySelector('.number').textContent = secretnumber));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = '💀 No Number Entered!';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎇🎇🎇 Correct Number!';
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! ⛹️';
      // score=score-1; see below
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 😛';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! ⛹️';
      // score=score-1; see below
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game 😛';
      document.querySelector('.score').textContent = 0;
    }
  }
});
