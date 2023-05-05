let playerScore=0;
let computerScore=0;

function getComputerChoice(){
    c=Math.floor(Math.random()*3)+1

    if (c==1) {
        result="Rock"
    }
    else if (c==2) {
        result="Paper"
    }
    else {
        result="Scissors"
    }

    return result
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase()=="rock"){
        if(computerSelection=="Paper"){
            computerScore++;
            const p=document.createElement('p');
            p.textContent="You lose! Paper beats Rock";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection=="Scissors"){
            playerScore++;
            const p=document.createElement('p');
            p.textContent="You win! Rock beats Scissors";
            outcomeDiv.appendChild(p);
        }
        else {
            const p=document.createElement('p');
            p.textContent="It's a tie! You both chose Rock";
            outcomeDiv.appendChild(p);
        }
    }

    else if (playerSelection.toLowerCase()=="paper"){
        if(computerSelection=="Scissors"){
            computerScore++;
            const p=document.createElement('p');
            p.textContent="You lose! Scissors beats Paper";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection=="Rock"){
            playerScore++;
            const p=document.createElement('p');
            p.textContent="You win! Paper beats Rock";
            outcomeDiv.appendChild(p);
        }
        else {
            const p=document.createElement('p');
            p.textContent="It's a tie! You both chose Paper";
            outcomeDiv.appendChild(p);
        }
    }

    else if (playerSelection.toLowerCase()=="scissors"){
        if(computerSelection=="Rock"){
            computerScore++;
            const p=document.createElement('p');
            p.textContent="You lose! Rock beats Scissors";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection=="Paper"){
            playerScore++;
            const p=document.createElement('p');
            p.textContent="You win! Scissors beats Paper";
            outcomeDiv.appendChild(p);
        }
        else {
            const p=document.createElement('p');
            p.textContent="It's a tie! You both chose Scissors";
            outcomeDiv.appendChild(p);
        }
    }

    else {
        result="You should enter the information again."
    }

    return result
}


const btnRock=document.querySelector('#rock');
const btnPaper=document.querySelector('#paper');
const btnScissors=document.querySelector('#scissors');
const outcomeDiv=document.querySelector('.outcome');
const playerScoreSpan=document.querySelector('.playerscore');
const computerScoreSpan=document.querySelector('.computerscore');

const checkForWinner= (playerScore,computerScore) => {
    if (playerScore===5) {
        const h2=document.createElement('h2');
        h2.classList.add('player-won');
        h2.textContent=`You won ${playerScore} to ${computerScore}. Great job!`;
        outcomeDiv.appendChild(h2);
    }

    if (computerScore===5) {
        const h2=document.createElement('h2');
        h2.classList.add('player-won');
        h2.textContent=`You lost ${computerScore} to ${playerScore}. Better luck next time!`;
        outcomeDiv.appendChild(h2);   
    }

}

const updateScores= (playerScore,computerScore) => {
    playerScoreSpan.textContent=`Player score: ${playerScore}`;
    computerScoreSpan.textContent=`Computer score: ${computerScore}`;
}

btnRock.addEventListener('click', () => {
    const computerSelection=getComputerChoice();
    const playerSelection="rock";
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore,computerScore);
    updateScores(playerScore,computerScore);
})

btnPaper.addEventListener('click', () => {
    const computerSelection=getComputerChoice();
    const playerSelection="paper";
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore,computerScore);
    updateScores(playerScore,computerScore);
})

btnScissors.addEventListener('click', () => {
    const computerSelection=getComputerChoice();
    const playerSelection="scissors";
    playRound(playerSelection,computerSelection);
    checkForWinner(playerScore,computerScore);
    updateScores(playerScore,computerScore);
})


/*function game(){
    numberOfWins=0
    numberOfLosses=0
    numberOfTies=0

    for (let i=1; i<=5; i++) {
        let playerSelection=prompt("Rock, paper or scissors?");
        let computerSelection=getComputerChoice();
        desc=playRound(playerSelection, computerSelection);
        if (desc.includes("win")){
            numberOfWins=numberOfWins+1
        }
        else if (desc.includes("lose")) {
            numberOfLosses=numberOfLosses+1
        }
        else if (desc.includes("tie")) {
            numberOfTies=numberOfTies+1
        }

        console.log(desc)
        console.log("Your win-loss-tie record is: " + numberOfWins + " - " + numberOfLosses + " - " + numberOfTies)
    }
}

console.log(game());*/