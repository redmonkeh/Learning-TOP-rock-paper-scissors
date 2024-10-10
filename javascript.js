console.log("Lets play a game of Rock, Paper, Scissors!");

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



let promptMessage = "Rock, Paper, or Scissors?";

function capitalize(string){
    string = string.toLowerCase();
    firstLetter = string.charAt(0);
    firstLetterCap = string.charAt(0).toUpperCase();
    return string.replace(firstLetter, firstLetterCap);
}

function getHumanChoice(choice){
    let choiceValidCheck = 0; 
    //let choice = prompt("Rock, Paper, or Scissors?");
   
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
    return capitalize(choice);
        
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie! " + humanChoice + " ties with " + computerChoice);
    } else if (humanChoice === "Rock"){
        if (computerChoice === "Paper"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore = ++computerScore;
        } else {
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
            humanScore = ++humanScore;
        }
    } else if (humanChoice === "Scissors"){
        if (computerChoice === "Rock"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore = ++computerScore;
        } else {
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
            humanScore = ++humanScore;
        }
    } else if (humanChoice === "Paper"){
        if (computerChoice === "Scissors"){
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore = ++computerScore;
        } else {
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
            humanScore = ++humanScore;
        }
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = getHumanChoice(button.id);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Humans Score: " + humanScore + " Computers Score: " + computerScore);
    });
}); 


let humanScore = 0;
let computerScore = 0;

function playGame(){

    humanScore = 0;
    computerScore = 0;
    let gameCount = 0;

    /*
    while (gameCount < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameCount = ++gameCount;
        console.log("Humans Score: " + humanScore + " Computers Score: " + computerScore + " For game: " + gameCount);
    }
    */

    if (computerScore === humanScore){
        console.log("This game ended in a tie!");
    } else if (humanScore > computerScore){
        console.log("Congrats! You won this game!");
    } else {
        console.log("Oh no! You lost this game!");
    }
}

playGame();