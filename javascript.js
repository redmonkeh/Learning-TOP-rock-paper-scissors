console.log("Hello World");

let humanScore = 0;
let computerScore =0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let choiceName;
    if (choice === 0){
        choiceName = "Rock";
        } else if (choice === 1){
        choiceName = "Paper";
        }
        else if (choice === 2){
        choiceName = "Scissors";
        }
        else{
        choiceName = "Something went wrong...";
        }

    return choiceName;
}

console.log("Computer choose " + getComputerChoice());

let promptMessage = "Rock, Paper, or Scissors?";

function capitalize(string){
    string = string.toLowerCase();
    firstLetter = string.charAt(0);
    firstLetterCap = string.charAt(0).toUpperCase();
    return string.replace(firstLetter, firstLetterCap);
}

function getHumanChoice(){
    let choiceValidCheck = 0; 
    let choice = prompt("Rock, Paper, or Scissors?");
   
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissor" || choice.toLowerCase() === "scissors"){
        if (choice.toLowerCase() === "scissor"){
            choice = "scissors";
        }
            choiceValidCheck = 1;
    } else {
        do {
            choice = prompt("That's not a valid choice, try again. Rock, Paper, or Scissors?");
            if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissor" || choice.toLowerCase() === "scissors"){
                if (choice.toLowerCase() === "scissor"){
                    choice = "scissors";
                }
                choiceValidCheck = 1;
            } 
        } while (choiceValidCheck !== 1);
    }   
    console.log("You choose " + capitalize(choice));
    return capitalize(choice);
        
}

function playRound(humanChoice, computerChoice){
    console.log("Play!!");

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);