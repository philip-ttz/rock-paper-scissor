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
    let returnchoice = choice.toLowerCase();
    return returnchoice;
}

function playGame(anz){
    function playRound(humanChoice, computerChoice){
        if(humanChoice === "rock"){
            if(computerChoice === "rock"){
                console.log("Draw, you both chose rock");
            }else if(computerChoice === "paper"){
                console.log("Loss, paper beats rock");
                computerScore++;
            }else if(computerChoice === "scissors"){
                console.log("Win, rock beats scissor");
                humanScore++;
            }
        }else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                console.log("Win, paper beats rock");
                humanScore++;
            }else if(computerChoice === "paper"){
                console.log("Draw, you both chose paper");
            }else if(computerChoice === "scissors"){
                console.log("Loss, scissor beats paper");
                computerScore++;
            }
        }else if(humanChoice === "scissors"){
            if(computerChoice === "rock"){
                console.log("Loss, rock beats scissor");
                computerScore++;
            }else if(computerChoice === "paper"){
                console.log("Win, scissor beats paper");
                humanScore++;
            }else if(computerChoice === "scissors"){
                console.log("Draw, you both chose scissor");
            }
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<anz; i++){
        const humanSelection = getHumanChoice();
        const copmuterSelection = getComputerChoice();      
        playRound(humanSelection, copmuterSelection);
    }

    if(humanScore>computerScore){
        console.log("You win");
    }else if(humanScore<computerScore){
        console.log("You lose");
    }else{
        console.log("Draw");
    }
}

playGame(5);