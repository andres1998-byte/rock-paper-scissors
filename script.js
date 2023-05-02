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
            result="You lose! Paper beats Rock"
        }
        else if (computerSelection=="Scissors"){
            result="You win! Rock beats Scissors"
        }
        else {
            result="It's a tie! You both chose Rock"
        }
    }

    else if (playerSelection.toLowerCase()=="paper"){
        if(computerSelection=="Scissors"){
            result="You lose! Scissors beats Paper"
        }
        else if (computerSelection=="Rock"){
            result="You win! Paper beats Rock"
        }
        else {
            result="It's a tie! You both chose Paper"
        }
    }

    else if (playerSelection.toLowerCase()=="scissors"){
        if(computerSelection=="Rock"){
            result="You lose! Rock beats Scissors"
        }
        else if (computerSelection=="Paper"){
            result="You win! Scissors beats Paper"
        }
        else {
            result="It's a tie! You both chose Scissors"
        }
    }

    else {
        result="You should enter the information again."
    }

    return result
}


function game(){
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

console.log(game());