function userip(){
    let selection = prompt("What is your option R,P,S?");
    return selection;
}
function playRound(playerSelection, computerSelection) {
    let playerwins;
    let computerwins;
    console.log("computer chose="+computerSelection);
	if(playerSelection == computerSelection){
        console.log("Its a draw");
        return "draw"
    }
    else{
        if((playerSelection=="rock" && computerSelection=="scissors") || (playerSelection=="scissors" && computerSelection=="paper") || (playerSelection=="paper" && computerSelection=="rock")){
            playerwins=1;
        }
        else if((playerSelection=="scissors" && computerSelection=="rock") || (playerSelection=="paper" && computerSelection=="scissors") || (playerSelection=="rock" && computerSelection=="paper")){
            computerwins=1;
        }
        else{
            console.log("Invalid")
        }
        if(playerwins==1){
        console.log("YOu won")
        return "plywin";    
    }
        else{
        console.log("You lose")
        return "cmpwin";    
    }
    }
}

function computerPlay(){
    var x = Math.floor((Math.random() * 10) + 1);
    var selct="";
    if (x == 1){
        selct= 'rock';
    } 
    else if(x == 2){
        selct= 'paper';
    }
    else{
        selct="scissors";
    }
    return selct;
}
function game(){
    let finalscore;
    let playerwin=0;
    let compwin=0;
    for(var i=0;i<5;i++){
const playerSelection = userip()
const computerSelection = computerPlay()
var result = playRound(playerSelection, computerSelection)
if(result=="plywin")
playerwin++;
else if(result=="cmpwin")
compwin++;
    }
    console.log("Player wins="+playerwin+" comp wn="+compwin);
}
game()