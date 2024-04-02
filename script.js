function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(player1, player2) { // player1 is the user's choice, player2 is the computer's choice
    player1 = player1.toLowerCase();

    if (player1 === player2) {
        return 0;
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")) {
            return 1;
        }
    else {
        return 2;
    }
}

function playGame() {
    let point1 = 0, point2 = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please enter your choice of rock, paper, or scissors");
        console.log(computerSelection);
        let round = playRound(playerSelection, computerSelection);

        if (round === 1) {
            ++point1;
        } else if (round === 2) {
            ++point2;
        } else {
            continue;
        }
    }
    
    if (point1 > point2) {
        alert("You win!");
    } else if (point1 < point2) {
        alert("You lose!");
    } else {
        alert("It's a tie!");
    }
}

playGame();