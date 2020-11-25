'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //   When there is no Input

  if (!guess) {
    // document.querySelector('.message').textContent = '💀 No Number Entered!';
    displayMessage('💀 No Number Entered!');
  }

  //  When a Player Wins
  else if (guess === secretnumber) {
    // document.querySelector('.message').textContent = '🎇🎇🎇 Correct Number!';
    displayMessage('🎇🎇🎇 Correct Number!');
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //   Guess is not equal to secret
  else if (guess !== secretnumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretnumber ? 'Too High! ⛹️' : 'Too Low! ⛹️';

      displayMessage(guess > secretnumber ? 'Too High! ⛹️' : 'Too Low! ⛹️');

      // score=score-1; see below
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost the Game 😛';
      displayMessage('You Lost the Game 😛');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   When the number is HIgh
  //   else if (guess > secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High! ⛹️';
  //       // score=score-1; see below
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game 😛';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   When the number is Low
  //   else if (guess < secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low! ⛹️';
  //       // score=score-1; see below
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game 😛';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  //   document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');

  //   How to hide again the value of secret number
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //   How to restore the score value

  score = 20;
  document.querySelector('.score').textContent = score;

  //How to return the value of input feild to blank

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
