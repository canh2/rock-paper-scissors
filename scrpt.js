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
const playerSelection = prompt();
const computerSelection = getComputerChoice();
function playRound(playerSelection , computerSelection){
  var  ps= playerSelection.toLowerCase();
  var cs= computerSelection.toLowerCase();

  if(ps=="rock"){
    if(cs=="rock")
      return "tie";
       else if (cs=="paper")
          return " you lose ! paper beats rock !";
             else if (cs="scissors")
                 return " you win ! rock beats scissors !";
  }
  if(ps=="paper"){
    if(cs=="paper")
      return "tie";
       else if (cs=="rock")
          return " you win ! paper beats rock !";
             else if (cs="scissors")
                 return " you lose !  scissors beats paper";
  }
  if(ps=="scissors"){
    if(cs=="scissors")
      return "tie";
       else if (cs=="rock")
          return " you lose !  rock beats scissors !";
             else if (cs="paper")
                 return " you win ! scissors beats paper";
  }

}
console.log( playRound(playerSelection , computerSelection)) ;