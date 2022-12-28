
let choicesArray = ["rock", "paper", "scissors"]
let playerChoice = ""
let playerScore = 0
let computerScore = 0
let roundNumber = 1


function getComputerChoice (choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}


let computerChoice = getComputerChoice(choicesArray)


function playRound(playerSelection) {
    let computerChoice = getComputerChoice(choicesArray)
    
    console.log(computerChoice)
    console.log(playerChoice)

    if (computerChoice === playerSelection) {
        return `Both chose ${computerChoice}. It's a draw!`
    }
    
    else if (computerChoice === "rock" && playerSelection === "paper") {
        playerScore ++
        return "You Win! Paper beats Rock"
        
    }

    else if (computerChoice === "rock" && playerSelection === "scissors") {
        computerScore ++
        return "You Lose! Rock beats Scissors"
    }

    else if (computerChoice === "paper" && playerSelection === "scissors") {
        playerScore ++
        return "You Win! Scissors beat paper"
    }

    else if (computerChoice === "paper" && playerSelection === "rock") {
        computerScore ++
        return "You Lose! Paper beats Rock"
    }
    
    else if (computerChoice === "scissors" && playerSelection === "rock") {
        playerScore ++
        return "You Win! Rock beats Scissors"
    }
   
    else if (computerChoice === "scissors" && playerSelection === "paper") {
        computerScore ++
        return "You Lose! Scissors beat paper"
    }
}


const buttons = document.querySelectorAll(".bluesquare");
const paragraph = document.querySelector('#console');
const playerScoreParagraph= document.querySelector('#playerscore');
const computerScoreParagraph= document.querySelector('#computerscore');
const roundBoard = document.querySelector('#round')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = choicesArray[button.id - 1];
        if (roundNumber <= 5) {
            let outcome = playRound(playerChoice)
            const paragraph = document.querySelector('#console')
            paragraph.textContent = `${outcome}\n -  Please pick again!` ;
            roundBoard.textContent = `Round: ${roundNumber}`
            computerScoreParagraph.textContent =`Computer score: ${computerScore}`
            playerScoreParagraph.textContent = `Player score: ${playerScore}`
            roundNumber++
            ;
        } else {
            if(computerScore > playerScore) {
                paragraph.textContent = ` Computer scored ${computerScore}\n. You scored
                ${playerScore}. Computer Wins!`
            }
            else if(playerScore> computerScore) {
                paragraph.textContent = ` Computer scored ${computerScore}\n. You scored
                ${playerScore} You win!` 
            } else {
                paragraph.textContent = ` Computer scored ${computerScore}\n. You scored
                ${playerScore} It's a draw!`
            }

        }
    });
});

