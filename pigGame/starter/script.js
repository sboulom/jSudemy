'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');  

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //will add or remove the class
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    //1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) +1;
    
    //2. Display dice to corresponding picture
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
 
    //3. Check for rolled 1, if true, 
    if(dice !== 1){
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //switch player to active player
        switchPlayer();   
    }
});

btnHold.addEventListener('click', function(){
    //1. Add current score to active Player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. check score >= 100 
    if(scores[activePlayer] >= 20){
        //finish the game
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');   
    } else {
        switchPlayer();
    }
    //3. switch to next player

})