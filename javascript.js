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

let humanScore = 0;
let computerScore = 0;