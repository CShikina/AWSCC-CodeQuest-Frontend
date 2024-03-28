const submitBtn = document.getElementById('guess-btn');
const title = document.getElementById('title');
const result = document.getElementById('result');
const hint = document.getElementById('hint');

const number = Math.floor(Math.random() * 50 + 1);

submitBtn.addEventListener('click', function() {
    let guessInput = document.getElementById('player-guess').value;
    console.log(guessInput);
    if (guessInput > number){
        hint.textContent = 'Too high. Try again.';
        hint.style.color = '#cd5c5c';
    }else if (guessInput == number){
        hint.textContent = 'You got the number!';
        hint.style.backgroundColor = 'lightgreen';
        hint.style.color = 'black';
        title.textContent = 'You got the Number!'
    }else if (guessInput < number){
        hint.textContent = 'Too low. Try again.';
        hint.style.color = '#cd5c5c';
    }
})
