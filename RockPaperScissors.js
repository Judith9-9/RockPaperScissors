
// I have removed this function, because I'm changing to input through html
/*function playerChoice() {
    let playerSelection = prompt("Rock, paper or scissors?");
    return playerSelection.toLowerCase();
}
*/
let playerChoice;
//if () {};

document.getElementById("rockChoice").addEventListener("click", function(){
    document.getElementById("test").innerHTML = "Rock";
})
    
function computerPlay() {
    const RPS = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = RPS[Math.floor(Math.random()*RPS.length)];   
    return computerSelection;
}   

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = computerPlay();
    if ((computerSelection === "Paper") && (playerSelection === "rock")) {console.log("The computer chose paper, you lost"); return -1;}
    else if((computerSelection === "Paper") && (playerSelection === "paper")) {console.log("The computer chose paper, it's tie"); return 0;}
    else if((computerSelection === "Paper") && (playerSelection === "scissors")) {console.log("The computer chose paper, you've won"); return 1;}
    else if((computerSelection === "Rock") && (playerSelection === "rock")) {console.log("The computer chose rock, it's a tie"); return 0;}
    else if((computerSelection === "Rock") && (playerSelection === "paper")) {console.log("The computer chose rock, you've won"); return 1;}
    else if((computerSelection === "Rock") && (playerSelection === "scissors")) {console.log("The computer chose rock, you've lost"); return -1;}
    else if((computerSelection === "Scissors") && (playerSelection === "rock")) {console.log("The computer chose scissors, you've won"); return 1;}
    else if((computerSelection === "Scissors") && (playerSelection === "paper")) {console.log("The computer chose scissors, you've lost"); return -1;}
    else if((computerSelection === "Scissors") && (playerSelection === "scissors")) {console.log("The computer chose scissors, it's a tie"); return 0;}
    else {console.log("Enter a valid choice"); return 0;};

}
// I have remoded the 5 round mechanisme as instructed by TOP
/*function game() {
    let result1 = singleRound();
    let result2 = singleRound();
    let result3 = singleRound();
    let result4 = singleRound();
    let result5 = singleRound();
    let totalResult = Number(result1) + Number(result2) + Number(result3) + Number(result4) + Number(result5);
    if (totalResult  > 0) {console.log("You have played 5 rounds and won!");}
    else if (totalResult == 0) {console.log("You have played 5 rounds and tied");}
    else if (totalResult < 0) {console.log("You have played 5 rounds and lost");}
    else {console.log("Huh, something went really wrong, please try again");}       
}

game();
*/
