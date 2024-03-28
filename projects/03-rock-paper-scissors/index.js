// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById('player1-choice-display'); 
const player1ScoreDisplay = document.getElementById('player1-score');    
const player2ChoiceDisplay = document.getElementById('player2-choice-display');   
const player2ScoreDisplay = document.getElementById('player2-score');   

const gameStatusDisplay = document.getElementById('game-status');  
const resetGameButton = document.getElementById('reset-game-btn');    

const rockBtn = document.getElementById('rock-btn');    
const paperBtn = document.getElementById('paper-btn');   
const scissorsBtn = document.getElementById('scissors-btn'); 

const player1Score = document.createElement("p");
player1ScoreDisplay.appendChild(player1Score);

const player2Score = document.createElement("p");
player2ScoreDisplay.appendChild(player2Score);

const imgPlayer1 = document.createElement("img");
player1ChoiceDisplay.appendChild(imgPlayer1);

const imgPlayer2 = document.createElement("img");
player2ChoiceDisplay.appendChild(imgPlayer2);

//generate player2 choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomNumber];
    return compChoice;
}
let temp1=0, temp2=0, p1Score=0, p2Score=0;

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    const player2Choice = generateComputerChoice();     //call play2 choice
    if (player2Choice == choices[0]){
        temp1 = 0;      // 0 = lose or tie,  1 = win
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 0;      
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-rock-solid.svg';
        imgPlayer2.src = 'assets/hand-rock-solid.svg';

    } else if(player2Choice == choices[1]){
        temp1 = 0;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 1;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-rock-solid.svg';
        imgPlayer2.src = 'assets/hand-paper-solid.svg';

    } else{
        temp1 = 1;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 0;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-rock-solid.svg';
        imgPlayer2.src = 'assets/hand-scissors-solid.svg';
    }
});

paperBtn.addEventListener("click", function () {
    const player2Choice = generateComputerChoice();
    if (player2Choice == choices[0]){
        temp1 = 1;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 0;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-paper-solid.svg';
        imgPlayer2.src = 'assets/hand-rock-solid.svg';

    } else if(player2Choice == choices[1]){
        temp1 = 0;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 0;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-paper-solid.svg';
        imgPlayer2.src = 'assets/hand-paper-solid.svg';

    } else{
        temp1 = 0;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 1;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-paper-solid.svg';
        imgPlayer2.src = 'assets/hand-scissors-solid.svg';
    }
});

scissorsBtn.addEventListener("click", function () {
    const player2Choice = generateComputerChoice();
    if (player2Choice == choices[0]){
        temp1 = 0;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 1;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-scissors-solid.svg';
        imgPlayer2.src = 'assets/hand-rock-solid.svg';

    } else if(player2Choice == choices[1]){
        temp1 = 1;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 0;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-scissors-solid.svg';
        imgPlayer2.src = 'assets/hand-paper-solid.svg';

    } else{
        temp1 = 0;
        p1Score += temp1;
        player1Score.textContent = p1Score;

        temp2 = 0;
        p2Score += temp2;
        player2Score.textContent = p2Score;

        imgPlayer1.src = 'assets/hand-scissors-solid.svg';
        imgPlayer2.src = 'assets/hand-scissors-solid.svg';
    }
});

resetGameButton.addEventListener("click", function () { 
    p1Score=0;
    player1Score.textContent = p1Score;
    p2Score=0;
    player2Score.textContent = p2Score;

    imgPlayer1.src = '';
    imgPlayer2.src = '';
});