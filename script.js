
let humanScore = 0
let computerScore = 0
let humanChoice
let computerChoice

// let getHumanChoice = prompt("Rock, paper or Scissor?");
for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(humanChoice+" "+computerChoice)
    playRound(humanChoice , computerChoice);

}


function getHumanChoice() {
  return prompt(`Current Score ${humanScore} - ${computerScore} 
                Rock, paper or Scissor?`).toLowerCase();
}

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0 : return 'rock';
        case 1 : return 'paper';
        case 2 : return 'scissor';
    }
}

function humanWin (){
    humanScore++;
    console.log("Great! You WON!");
}

function humanLoose (){
    computerScore++;
    console.log("Oh no! You LOST!");
}

function playRound(humanChoice , computerChoice){
    if (humanChoice==computerChoice){
        console.log("It's a TIE!");
    } else if (humanChoice == 'rock'){
        computerChoice == 'paper' ? humanLoose(): humanWin();
    } else if (humanChoice == 'paper'){
        computerChoice == 'scissor' ? humanLoose() : humanWin();
    } else if (humanChoice == 'scissor'){
        computerChoice == 'rock' ? humanLoose() : humanWin();
    }
}


