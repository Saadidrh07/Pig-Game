'use strict';
//Sekecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const Player0EL = document.querySelector('.player--0');
const Player1EL = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  diceEL.classList.add('hidden');
  Player0EL.classList.add('player--active');
  Player1EL.classList.remove('player--active');
  Player0EL.classList.remove('player--winner');
  Player1EL.classList.remove('player--winner');
};

init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Player0EL.classList.toggle('player--active'); //toglle katchouf wach had claas kayna ila kant kayna kathydha lamkantch kayna katzidha
  Player1EL.classList.toggle('player--active');
};

//Rolinng dice functionality
btnRoll.addEventListener('click', function () {
  //1 Generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2 Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //3 Check for rolled 1 : if true , switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      //Change later
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  } else {
  }
});

btnHold.addEventListener('click', function () {
  //1- Add current score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. ceck if playr's score is >=100
    if (scores[activePlayer] >= 100) {
      //finish game }
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }

  //Switch PLayer
});

btnNew.addEventListener('click', init);
