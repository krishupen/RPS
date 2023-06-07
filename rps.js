// outcome rules
// rock beats scissors
// paper beats rock
// scissors beats paper

function getComputerChoice() {
    const cpu = Math.floor(Math.random()*3);
    return cpu;
}

let computerSlection = getComputerChoice();

let playerSlection = prompt("Enter your choice: Rock, Paper, Scissors: ").toLowerCase();

const rock=0;
const paper=1;
const scissors=2;
console.log(playerSlection);



function sround() {
    if (computerSlection === 1 && playerSlection ==="paper") {
        return " oops! It is a Draw";
    } else if (computerSlection === 2 && playerSlection ==="scissors") {
        return "ummm! It is a  draw";
    } else if (computerSlection === 0 && playerSlection ==="rock") {
        return "Ooh! It is a draw";
    } else if (computerSlection === 0 && playerSlection ==="paper") {
        return "You won! Paper beats Rock";
    } else if (computerSlection === 1 && playerSlection ==="rock") {
        return " You loose! Paper beats Rock";
    } else if(computerSlection === 1 && playerSlection ==="scissors") {
        return "You won! Scissors beats Paper";
    }   else if(computerSlection === 0 && playerSlection ==="scissors") {
        return " You loose! Scissors beats Rock";
    } else if(computerSlection === 1 && playerSlection === "scissors"){
        return "You won! Scissors beats Paper";
    } else if(computerSlection === 2 && playerSlection==="rock") {
        return "You won! Rock beats Scissors";
    } else if(computerSlection === 2 && playerSlection==="paper") {
        return "You loose! Paper beats Scissors";
    } else {
        return "Play again";
    }
    
} 
console.log(sround());


function convert(computerSlection) {
    
    if (computerSlection == 0){
        return "rock";
    } else if (computerSlection==1) {
        return "paper";
    }  else if (computerSlection==2) {
        return "scissors";
    } else {
        return " incorrect choice";
    }
}
console.log(convert(computerSlection));