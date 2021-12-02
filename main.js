

function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }


  function computerPlay() {
    let numj = random(1, 3)
        if (numj == 1) {
            return "Rock";
        }
        else if (numj == 2) {
            return "Paper";
        }
        else if (numj == 3) {
            return "Scissors";
        }

}


function playRound(playerSelection, computerSelection) {
    let a = playerSelection.toLowerCase();
    let b = computerSelection.toLowerCase();
    let score = 0

    if (a == b) {
        return "Tie!"
    }
    else if (a == "rock" && b == "paper") {
        scoreComputer += 1
        return "You Lose! Paper beats Rock";
    }
    else if (a == "rock" && b == "scissors") {
        scorePlayer += 1
        return "You Win! Rock beats Scissors";
    }
    else if (a == "paper" && b == "rock") {
        scorePlayer += 1
        return "You Win! Paper beats Rock";
    }
    else if (a == "paper" && b == "scissors") {
        scoreComputer += 1
        return "You Lose! Scissors beats Paper";
    }
    else if (a == "scissors" && b == "rock") {
        scoreComputer +=  1
        return "You Lose! Rock beats Scissors";
    }
    else if (a == "scissors" && b == "paper") {
        scorePlayer += 1
        return "You Win! Scissors beats Paper";
    }
  }
  
scorePlayer = 0
scoreComputer = 0

function game() {
    for(let i = 1; i < 6; i++) {
    console.log(i);
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}

if (scoreComputer > scorePlayer){
    console.log ("Player Score = " + scorePlayer + ". Computer Score = "+ scoreComputer+ ". You Lose!");
}
else if (scoreComputer < scorePlayer){
    console.log ("Player Score = " + scorePlayer + ". Computer Score = "+ scoreComputer+ ". You Win!");
}
else if (scoreComputer = scorePlayer){
    console.log ("Player Score = " + scorePlayer + ". Computer Score = "+ scoreComputer+ ". Tie!");
}
}

game()
