let userScore = 0, compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const Cscore = document.querySelector("#comp-score");
const restBtn = document.querySelector("#reset-btn");

const generateCompChoice = () => {
    // generate computer choice
    const options = ["rock", "paper", "scissors"];
    const ranNum = Math.floor(Math.random() * 3);
    return options[ranNum];
}

const drawGame = () => {
    // called when user and computer choices are same
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    // updates winner on Screen
    if (userWin) {
        msg.innerText = `You win ! Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
        msg.style.backgroundColor = "green";
        userScore += 1;
        uScore.innerText = userScore;
    } else {
        msg.innerText = `You win ! ${compChoice.toUpperCase()} beats Your ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor = "red";
        compScore += 1;
        Cscore.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    // compare with user choice determines winner
    const compChoice = generateCompChoice();
    let userWin = false;

    if (compChoice == userChoice) {
        drawGame();
        return;
    } else if (userChoice == "rock" && (compChoice == "scissors")) {
        userWin = true;
    } else if (userChoice == "scissors" && (compChoice == "paper")) {
        userWin = true;
    } else if (userChoice == "paper" && (compChoice == "rock")) {
        userWin = true;
    } else {
        userWin = false;
    }
    showWinner(userWin, userChoice, compChoice);
}

const reset=()=>{
    // code to reset game
    userScore = 0;
    compScore = 0;
    msg.innerText = `Play your move`;
    msg.style.backgroundColor = "#081b31";
    uScore.innerText = "0";
    Cscore.innerText = "0";
}

choices.forEach((choice) => {
    // adding click event to rock,paper scissor
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


restBtn.addEventListener("click", () => {
    reset();
});


