console.log("Hello World");

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

console.log(getComputerChoice());
let promptMessage = "Rock, Paper, or Scissors?";



function getHumanChoice(){
    let choiceValidCheck = 0; 
    let choice = prompt("Rock, Paper, or Scissors?");
   
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissor" || choice.toLowerCase() === "scissors"){
            choiceValidCheck = 1;
    } else {
        do {
            choice = prompt("That's not a valid choice, try again. Rock, Paper, or Scissors?");
            if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissor" || choice.toLowerCase() === "scissors"){
                choiceValidCheck = 1;
            } 
        } while (choiceValidCheck !== 1);
    }   

    return choice;
        
}

console.log(getHumanChoice());

