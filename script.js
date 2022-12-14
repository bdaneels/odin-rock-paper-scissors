let choicesArray = ["rock", "paper", "scissors"]


function getComputerChoice (choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

let computerChoice = getComputerChoice(choicesArray);
let playerChoice = (prompt("What's your choice? Rock/Paper/Scissors:")).toLowerCase()


console.log(computerChoice)
console.log(playerChoice)

function determineWinner(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return `Both chose ${computerChoice}. It's a draw!`
    }
    
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock"
    }

    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors"
    }

    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beat paper"
    }

    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock"
    }
    
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beats Scissors"
    }
   
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beat paper"
    }
}

console.log(determineWinner(computerChoice, playerChoice))
