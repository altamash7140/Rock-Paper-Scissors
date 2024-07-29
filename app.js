let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
// Selecting the Messages
const msg = document.querySelector("#msg");
// Selecting user-score paragraph
const userScorePara = document.querySelector("#user-score");
// selecting com-score paragraph
const compScorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const genCompChoice = () => {
      const option = ["Rock", "Paper", "Scissors"];
      const randIdx = Math.floor(Math.random()*3);
      return option[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    // For user's Choices
    console.log("User's Choice = ", userChoice);
    // Generating Computers Choice
    const compChoice = genCompChoice();
    console.log("Comp's Choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "Rock"){
            // Scissors, Paper
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            // Rock, Scissors
            userWin = compChoice === "Scissors" ? false : true;
        }  else {
            // Rock, Paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

}

choices.forEach((choice) => { 
    
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id")
        playGame(userChoice);

    })
});


