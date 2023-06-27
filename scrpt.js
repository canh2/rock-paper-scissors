console.log("first try");
function getComputerChoice(){
  var ch = Math.floor(Math.random()*3)+1;
    var choice="";
    switch (ch){
        case 1:
            choice="Rock";
            break;
         case 2:
               choice="Paper";
               break;
           case 3:
               choice="Scissors";
               break;

    }
 
    return choice;
    
}

const computerSelection = getComputerChoice();
function playRound(playerSelection , computerSelection){
  var  ps= playerSelection.toLowerCase();
  var cs= computerSelection.toLowerCase();

  if(ps=="rock"){
    if(cs=="rock")
    return 0;
      //return "tie";
       else if (cs=="paper")
       return -1;
        //  return " you lose ! paper beats rock !";
             else if (cs="scissors")
             return 1;
               //  return " you win ! rock beats scissors !";
  }
  if(ps=="paper"){
    if(cs=="paper")
     // return "tie";
     return 0;
       else if (cs=="rock")
       return 1;

         // return " you win ! paper beats rock !";
             else if (cs="scissors")
             return -1;

               //  return " you lose !  scissors beats paper";
  }
  if(ps=="scissors"){
    if(cs=="scissors")
      //return "tie";
      return 0;
       else if (cs=="rock")
       return -1;
         // return " you lose !  rock beats scissors !";
             else if (cs="paper")
             return 1;
               //  return " you win ! scissors beats paper";
  }

}

function game(){
    var score=0;
    
  for (let i =0 ; i<=4 ; i++) {
    const playerSelection = prompt();
    score = score +playRound(playerSelection , computerSelection) ;
    
  }
  if ( score> 0 )
    console.log(" WINNER");
    else
    console.log(" LOOSER");
}
game();