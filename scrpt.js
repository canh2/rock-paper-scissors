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
console.log(getComputerChoice());