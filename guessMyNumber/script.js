'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👍 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;

//showing the secret number for now.....
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //no input
    if (!guess){
        document.querySelector('.message').textContent = '🛑 No Number';
        //when player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '👍 Correct Number';

        //guess is too high
    } else if (guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = '🪂 Too High';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
        document.querySelector('.message').textContent = 'YOU LOSE......'
        document.querySelector('.score').textContent = 0;
        } 
        //guess is too loq
    } else if (guess < secretNumber){
        if(score > 1){
            //Message
        document.querySelector('.message').textContent = '🌊 Too Low';
            //subtract score by 1
        score--;
            //update score
        document.querySelector('.score').textContent = score;
        } else {
        document.querySelector('.message').textContent = 'YOU LOSE......'
        document.querySelector('.score').textContent = 0;
        }
        
    }
    

});