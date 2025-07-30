
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

    function playRound(getHumanChoice, getComputerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (computerSelection === humanSelection) {
        return "It's a tie";
    }
    if (computerSelection === "Rock" && humanSelection === "Paper") {
        humanScore++;
        return "Paper beats rock, You won this round!";
    } else if (computerSelection === "Paper" && humanSelection === "Rock") {
        computerScore++;
        return "Paper beats rock, You lose this round!";
    } else if (
        computerSelection === "Scissors" &&
        humanSelection === "Paper"
    ) {
        computerScore++;
        return "Scissors beats Paper, You lose this round!";
    } else if (
        computerSelection === "Paper" &&
        humanSelection === "Scissors"
    ) {
        humanScore++;
        return "Scissors beats Paper, You win this round!";
    } else if (
        computerSelection === "Scissors" &&
        humanSelection === "Rock"
    ) {
        humanScore++;
        return "Rock beats Scissors, You win this round!";
    } else if (
        computerSelection === "Rock" &&
        humanSelection === "Scissors"
    ) {
        computerScore++;
        return "Rock beats Scissors, You lose this round!";
    }
    }

    function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let cpuChoice = getComputerChoice();
        console.log(`Round ${i}`);
        console.log(`Computer choose ${cpuChoice}`);
        console.log(`You choose ${humanChoice}`);
        let result = playRound(
        () => humanChoice,
        () => cpuChoice
        );
        console.log(result);
    }

    if (computerScore === humanScore) {
        console.log("It's a tie!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    }

    console.log(`You scored = ${humanScore}`);
    console.log(`Computer scored = ${computerScore}`);
    }

    playGame();
