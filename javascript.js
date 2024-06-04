function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice==0){
        return "rock";
    } else if(choice==1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("What is your choice");
    return choice;
}

function playGame(anz){
    function playRound(humanChoice, computerChoice){
        let humanChoice = humanChoice.toLowerCase();
        if(humanChoice === "rock"){
            if(computerChoice === "rock"){
                console.log("Draw, you both chose rock");
            }else if(computerChoice === "paper"){
                console.log("Loss, paper beats rock");
                computerChoice++;
            }else if(computerChoice === "scissor"){
                console.log("Win, rock beats scissor");
                humanChoice++;
            }
        }else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                console.log("Win, paper beats rock");
                humanChoice++;
            }else if(computerChoice === "paper"){
                console.log("Draw, you both chose paper");
            }else if(computerChoice === "scissor"){
                console.log("Loss, scissor beats paper");
                computerChoice++;
            }
        }else if(humanChoice === "scissor"){
            if(computerChoice === "rock"){
                console.log("Loss, rock beats scissor");
                computerChoice++;
            }else if(computerChoice === "paper"){
                console.log("Win, scissor beats paper");
                humanChoice++;
            }else if(computerChoice === "scissor"){
                console.log("Draw, you both chose scissor");
            }
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    for(i=0,i++,i<anz){
        playGame();
    }
    if(humanScore>computerScore){
        console.log("You win");
    }else if(humanScore<computerScore){
        console.log("You lose");
    }else{
        console.log("Draw");
    }
}

const humanSelection = getHumanChoice();
const copmuterSelection = getComputerChoice();

