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
            return "Computer Wins!!!"
        }
        else{
            return "Player Wins!!!"
        }
    }
    else if(lPlayerChoice === "paper"){
        if(computerChoice === "scissor"){
            return "Computer Wins!!!"
        }
        else{
            return "Player Wins!!!"
        }
    }
    else if(lPlayerChoice === "scissor"){
        if(computerChoice === "rock"){
            return "Computer Wins!!!"
        }
        else{
            return "Player Wins!!!"
        }
    }
}

function game(){
    var computerCount = 0;
    var playerCount = 0;
    let playerC;
    let computerC;
    let t = true;
    const options = ["Rock","Paper","Scissor"];

    while(t){
        playerC = prompt("Rock, Paper, or Scissors?");
        while(!(options.includes(playerC))){
         console.log("Please Enter: Rock or Paper or Scissor!")
         playerC = prompt("Rock, Paper, or Scissors?");
        }
        computerC = computerChoice();
        let answer = checkingWhoWins(computerC,playerC);
        if(answer === "Computer Wins!!!"){
            computerCount++;
        }else if(answer === "Player Wins!!!"){
            playerCount++;
        }
        console.log(`ComputerScore = ${computerCount}`);
        console.log(`PlayerScore = ${playerCount}`);
        if(computerCount == 5 || playerCount === 5){
        t=false;
            if(computerCount == 5){
                console.log("Computer Wins!!!");
            }
            else{}
                console.log("Player Wins!!!");
        }
        }
}
game();