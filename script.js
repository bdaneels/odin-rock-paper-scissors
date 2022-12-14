let choicesArray = ["rock", "paper", "scissors"]

function getComputerChoice (choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

let computerChoice = getComputerChoice(choicesArray);
let playerChoice = (prompt("What's your choice? Rock/Paper/Scissors:")).toLowerCase()


console.log(computerChoice)
console.log(playerChoice)
