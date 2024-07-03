let usScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
var msg = document.querySelector("#message");
const drawGame = ()=>{
    console.log("draw game");
    msg.innerText = "game was draw play again";
}
const showWinner = (userWin) =>{
    if(userWin){
        console.log("you win");
        msg.innerText = "you win";
    }else{
        console.log("you , lose");
        msg.innerText = "you lose";
    }
}
const genComputerchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const playGame = (userChoice) =>{
console.log("user choice:",userChoice);
const compChoice = genComputerchoice();
console.log("computer choice:",compChoice);
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice ==="paper"){
       userWin = compChoice === "scissor" ? false : true; 
    }else{
        compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
    

