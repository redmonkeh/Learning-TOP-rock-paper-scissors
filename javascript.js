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
    const roundResult = document.createElement("p");
    if (humanChoice === computerChoice){
        roundResult.textContent = "It's a tie! " + humanChoice + " ties with " + computerChoice;
        results.appendChild(roundResult);
    } else if (humanChoice === "Rock"){
        if (computerChoice === "Paper"){
            roundResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            results.appendChild(roundResult);
            computerScore = ++computerScore;
        } else {
            roundResult.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
            results.appendChild(roundResult);
            humanScore = ++humanScore;
        }
    } else if (humanChoice === "Scissors"){
        if (computerChoice === "Rock"){
            roundResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            results.appendChild(roundResult);
            computerScore = ++computerScore;
        } else {
            roundResult.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
            results.appendChild(roundResult);
            humanScore = ++humanScore;
        }
    } else if (humanChoice === "Paper"){
        if (computerChoice === "Scissors"){
            roundResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            results.appendChild(roundResult);
            computerScore = ++computerScore;
        } else {
            roundResult.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
            results.appendChild(roundResult);
            humanScore = ++humanScore;
        }
    }

}

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");




let humanScore = 0;
let computerScore = 0;

function playGame(){

    //let gameCount = 0;

    /*
    while (gameCount < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameCount = ++gameCount;
        console.log("Humans Score: " + humanScore + " Computers Score: " + computerScore + " For game: " + gameCount);
    }
    */
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanSelection = getHumanChoice(button.id);
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            score.textContent = "Humans Score: " + humanScore + " Computers Score: " + computerScore;

            if(computerScore == 5 || humanScore == 5){     
                buttons.forEach((button) => {
                    button.disabled = true;
                });         
                if (computerScore === humanScore){
                    endGame.textContent = "This game ended in a tie!";
                } else if (humanScore > computerScore){
                    endGame.textContent = "Congrats! You won this game!";
                } else {
                    endGame.textContent = "Oh no! You lost this game!";
                }
            } 

        });
    }); 
    
    const score = document.createElement("p");
    results.appendChild(score);  
    const endGame = document.createElement("p");
    results.appendChild(endGame);

    

}

playGame();