

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

let scorePlayer = 0
let scoreComputer = 0
let round = 0

function playRound(playerSelection, computerSelection) {
    let a = playerSelection.toLowerCase();
    let b = computerSelection.toLowerCase();
    round += 1

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

function game() {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));

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


const buttons = document.querySelectorAll("button");

function logText(e) {
    return this.id;
    }


buttons.forEach(button => button.addEventListener('click', () => {

    if (round > 4 ) {
        if (scoreComputer > scorePlayer){
            const fin = document.createElement('div');
            fin.classList.add('fin');
            fin.textContent = "Player Score = " + scorePlayer + ". Computer Score = "+ scoreComputer+ ". You Lose! Refresh page."
            container.appendChild(fin);
        }
        else if (scoreComputer < scorePlayer){
            const fin = document.createElement('div');
            fin.classList.add('fin');
            fin.textContent = "Player Score = " + scorePlayer + ". Computer Score = "+ scoreComputer+ ". You Win! Refresh page."
            container.appendChild(fin);
 
        }
        else if (scoreComputer = scorePlayer){
            const fin = document.createElement('div');
            fin.classList.add('fin');
            fin.textContent = "Player Score = " + scorePlayer + ". Computer Score = "+ scoreComputer+ ". Tie! Refresh page."
            container.appendChild(fin);
        }
    }

    else {

    let compu = computerPlay();
    juego = playRound(button.id,compu);
    message1 = button.id + " v " + compu;
    message2 = "Round: " + round + " && Computer Score: " + scoreComputer + " && Player Score: " + scorePlayer;
   
    const scoreTable = document.createElement('div');
    scoreTable.classList.add('scoreTable');
    scoreTable.textContent = message1
    container.appendChild(scoreTable);

    const res = document.createElement('div');
    res.classList.add('res');
    res.textContent = juego
    container.appendChild(res);


    const scoreTable2 = document.createElement('div');
    scoreTable2.classList.add('scoreTable2');
    scoreTable2.textContent = message2;
    container.appendChild(scoreTable2);

    const lin= document.createElement('div');
    lin.classList.add('lin');
    lin.textContent = "---------------------------------------------------";
    container.appendChild(lin);
    }}))

