const images = Array.from(document.querySelectorAll('.Images'));
const message = document.querySelector(".message");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const mforplayer = document.querySelector(".pdecision")
const mforcomputer = document.querySelector(".cdecision")
const image1 = document.querySelector(".img1");

var computerCount = 0;
var playerCount = 0;


images.forEach((img) =>
    img.addEventListener('click',() => {
        if(playerCount >=5 || computerCount >=5){
            playerCount = 0;
            computerCount = 0;
            playerScore.textContent = "0";
            computerScore.textContent = "0";
            return;
        }
        else{
            game(img.dataset.set)
        }
    }));


function computerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num===0){
        return "rock"
    }
    if(num===1){
        return "paper"
    }
    if(num===2){
        return "scissor"
    }
}

function checkingWhoWins(computerChoice, playerChoice){
    let lPlayerChoice =  playerChoice.toLowerCase();
    if(lPlayerChoice === computerChoice){
        return "It's a tie";
    }
    else if(lPlayerChoice === "rock"){
        if(computerChoice === "paper"){
            return "Computer Wins Round!!!"
        }
        else{
            return "Player Wins Round!!!"
        }
    }
    else if(lPlayerChoice === "paper"){
        if(computerChoice === "scissor"){
            return "Computer Wins Round!!!"
        }
        else{
            return "Player Wins Round!!!"
        }
    }
    else if(lPlayerChoice === "scissor"){
        if(computerChoice === "rock"){
            return "Computer Wins Round!!!"
        }
        else{
            return "Player Wins Round!!!"
        }
    }
}

function game(playerchoice){
    let pchoice = playerchoice.toLowerCase();
    let cchoice = computerChoice();

    let result = checkingWhoWins(cchoice,pchoice);

    if(result === "Player Wins Round!!!"){
        playerCount++;
    }
    else if(result === "Computer Wins Round!!!"){
        computerCount++;
    }

    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
    mforcomputer.textContent = `Player choose ${pchoice}`;
    mforplayer.textContent = `Computer choose ${cchoice}`;
    message.textContent = result;

    if(playerCount === 5){
        message.textContent = "Player Wins";
    }
    else if(computerCount === 5 ){
        message.textContent = "Computer Wins";
    }
    }

