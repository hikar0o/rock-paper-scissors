
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "Rock";
    } else if (randomNumber < 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
    }

function getHumanChoice() {
    return prompt("Choose Rock, Paper or Scissors: ");
    }

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    const human = humanSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (computer === human) {
        return "It's a tie";
    }
    if (
        computer === "rock" && human === "paper" ||
        computer === "scissors" && human === "rock" ||
        computer === "paper" && human === "scissors"
    ) {
        humanScore++
        return `You win! ${human} beats ${computer}`
    }
    else {
        computerScore++
        return `You lose ${computer} beats ${human}`
    }
    
    }


const validChoice = ["rock", "paper", "scissors"]

function playGame() {
    let round = 1;
    while (round <= 5) {
        let humanChoice = getHumanChoice();
        if (humanChoice === null || humanChoice.toLowerCase() === "cancel") {
            console.log("Game over. You chose to cancel.");
            return;
        }

        humanChoice = humanChoice.toLowerCase();

        if (!validChoice.includes(humanChoice)) {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            continue;
        }

        let cpuChoice = getComputerChoice();
        console.log(`\nRound ${round}`);
        console.log(`Computer chose: ${cpuChoice}`);
        console.log(`You chose: ${humanChoice}`);

        let result = playRound(humanChoice, cpuChoice);
        console.log(result);

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
        round++;
    }

    let finalMessage;
    if (computerScore === humanScore) {
        finalMessage = "It's a tie!";
    } else if (computerScore > humanScore) {
        finalMessage = "You lose!";
    } else {
        finalMessage = "You win!";
    }
    
    alert(`--- Final Score ---\n\nYour final score: ${humanScore}\nComputer's final score: ${computerScore}\n\n${finalMessage}`)
}


console.log("Welcome to Rock, Paper and Scissors game. write cancel to cancel the game at any time!")
playGame();

