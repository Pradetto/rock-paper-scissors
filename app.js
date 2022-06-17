function computerPlay() { 
    const options = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    return options[Math.floor(Math.random() * options.length)];
};


function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return 1;
        // return 'Tied Game!!';
    } else if ((playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') || (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') || (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper')){
        let playerSelectionCleaned = playerSelection.toLowerCase();
        playerSelectionCleaned = playerSelectionCleaned[0].toUpperCase() + playerSelectionCleaned.slice(1);
        return 2;
        // return playerSelectionCleaned + ' Beats ' + computerSelection;
    } else {
        return 3;
        // return `Computer Won ${playerSelection} does not beat ${computerSelection}` ;
    };
};



// function game(){
//     let playerScore = 0
//     let computerScore = 0
//     let tied = 0
//     let round = 0
    
//     for (let i = 0; i < 5; i++){
//         let play = prompt('Enter Rock,Paper or Scissors: ');
//         let winner = playRound(play,computerPlay());
//         if ( winner == 1){
//             tied += 1
//         } else if (winner == 2){
//             playerScore += 1
//         } else {
//             computerScore += 1
//         }
//         round += 1
//         // let winner = playRound()
//         alert(`Round ${round} of 5 Current Score: \nYou: ${playerScore}\nComputer: ${computerScore} \nTied: ${tied}`);
//     }
//     return playerScore > computerScore ? alert('Winner') : alert('Sorry you lost refresh the page and try again')
// };

// game()



// This is the functionality part

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let winner = playRound(button.id,computerPlay());
    game(winner)
  });
});


// const results = document.querySelector('#results')
// const series = document.querySelector('#winner')

// Creating Div to add results
const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');



let playerScore = 0
let computerScore = 0
let tied = 0
let round = 0

function game(n) {

    if (n == 1){
    tied += 1
    } else if (n == 2){
        playerScore += 1
    } else {
        computerScore += 1
    };
    results.textContent = `Round ${round} of 5 Current Score: \nYou: ${playerScore}\nComputer: ${computerScore} \nTied: ${tied}`;
    container.appendChild(results);
    
    if (playerScore === 5) {
        winner.textContent = `Yay you won. Final score is Player ${playerScore} WINS beats Computer ${computerScore}`
        return reset()
    } else if (computerScore === 5){
        winner.textContent = `Sadge you lost. Final score is Computer ${computerScore} WINS beats Player: ${playerScore}`
        return reset()
    }
};

function reset(){
    playerScore = 0
    computerScore = 0
    tied = 0
    round = 0
}