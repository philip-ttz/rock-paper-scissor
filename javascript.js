const rockBtn=document.querySelector('.rock');
const paperBtn=document.querySelector('.paper');
const scissorBtn=document.querySelector('.scissor');
const gameModal=document.querySelector('.game-modal');
const playAgain=document.querySelector(".play-again");
let computerScore=0;
let humanScore=0;
let winningScore=5;


rockBtn.addEventListener('click', () =>{
    playRound('rock', getComputerChoice());
})
paperBtn.addEventListener('click', () =>{
    playRound('paper', getComputerChoice());
})
scissorBtn.addEventListener('click', () =>{
    playRound('scissor', getComputerChoice());
})
playAgain.addEventListener('click', resetGame)

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice==0){
        return "rock";
    } else if(choice==1){
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(humanChoice, computerChoice){
    console.log(humanChoice,computerChoice);
    
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("Draw, you both chose rock");
        }else if(computerChoice === "paper"){
            console.log("Loss, paper beats rock");
            computerScore++;
        }else if(computerChoice === "scissor"){
            console.log("Win, rock beats scissor");
            humanScore++;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("Win, paper beats rock");
            humanScore++;
        }else if(computerChoice === "paper"){
            console.log("Draw, you both chose paper");
        }else if(computerChoice === "scissor"){
            console.log("Loss, scissor beats paper");
            computerScore++;
        }
    }else if(humanChoice === "scissor"){
        if(computerChoice === "rock"){
            console.log("Loss, rock beats scissor");
            computerScore++;
        }else if(computerChoice === "paper"){
            console.log("Win, scissor beats paper");
            humanScore++;
        }else if(computerChoice === "scissor"){
            console.log("Draw, you both chose scissor");
        }
    }
    console.log(humanScore,computerScore);
    if(humanScore===winningScore || computerScore===winningScore){
        if(humanScore>computerScore){
            gameOver(true);
        }else{
            gameOver(false);
        }
    }
}



function gameOver(isWon){
    const modalText = isWon ? `You won by` : `The computer won by`;
    gameModal.querySelector("h4").innerText=`${isWon ? 'Congratulations!' : 'Game Over!'}`;
    gameModal.querySelector('p').innerHTML=`${modalText} <b>${humanScore} / ${computerScore}`;
    gameModal.classList.add("show");
}

function resetGame(){
    humanScore=0;
    computerScore=0;
    console.log(humanScore, computerScore);
    gameModal.classList.remove('show');
}