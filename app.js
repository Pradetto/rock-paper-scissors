function computerPlay() { 
    const options = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    return options[Math.floor(Math.random() * options.length)];
};

// console.log(computerPlay())

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

// const playerSelection = 'scissors';
// const computerSelection = computerPlay();
// console.log(playerSelection)
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));


function game(){
    let playerScore = 0
    let computerScore = 0
    let tied = 0
    let round = 0
    
    for (let i = 0; i < 5; i++){
        let play = prompt('Enter Rock,Paper or Scissors: ');
        let winner = playRound(play,computerPlay());
        if ( winner == 1){
            tied += 1
        } else if (winner == 2){
            playerScore += 1
        } else {
            computerScore += 1
        }
        round += 1
        // let winner = playRound()
        alert(`Round ${round} of 5 Current Score: \nYou: ${playerScore}\nComputer: ${computerScore} \nTied: ${tied}`);
    }
    return playerScore > computerScore ? alert('Winner') : alert('Sorry you lost refresh the page and try again')
};

game()