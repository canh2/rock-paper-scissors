

const red = document.querySelector('#red');

const conten = document.createElement('p');
conten.style.color='white';
conten.classList.add('conten');

const rd = document.querySelector('#red');

const cont = document.createElement('p');
cont.style.color='white';
cont.classList.add('cont');

const playerScore = document.querySelector('#player-score');

const pls = document.createElement('div');
pls.style.color='white';
pls.classList.add('pls');

pls.textContent = '0';

playerScore.appendChild(pls);

const computerScore = document.querySelector('#computer-score');

const cos = document.createElement('div');
cos.style.color='white';
cos.classList.add('cos');

cos.textContent = '0';

computerScore.appendChild(cos);

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

function playRound(playerSelection  ,computerSelection){

  var  ps= playerSelection.toLowerCase();
  var cs= computerSelection.toLowerCase();
  cont.textContent = 'Computer chose ' + computerSelection;
        rd.appendChild(cont);
  if(ps=="rock"){
    if(cs=="rock")
    {
        conten.textContent = 'TIE!';
        red.appendChild(conten);
    return 0;
     
    }
      //return "tie";
       else if (cs=="paper")
       {

        conten.textContent = 'you lose ! paper beats rock !';
        red.appendChild(conten);
       
       return -1;
    }
        //  return " you lose ! paper beats rock !";
             else if (cs="scissors")
             {
            
                conten.textContent = " you win ! rock beats scissors !";
                red.appendChild(conten);
                return 1;
             }
 
               //  return " you win ! rock beats scissors !";
  }
  if(ps=="paper"){
    if(cs=="paper")
    {

        conten.textContent = 'TIE!';
        red.appendChild(conten);
    return 0;
     
    }
       else if (cs=="rock")
            {
            
       conten.textContent = " you win ! paper beats rock!";
       red.appendChild(conten);
       return 1;
    }

         // return " you win ! paper beats rock !";
             else if (cs="scissors")
             {
                
                conten.textContent = 'you lose ! scissors beats paper !';
                red.appendChild(conten);
               
               return -1;
            }
               //  return " you lose !  scissors beats paper";
  }
  if(ps=="scissors"){
    if(cs=="scissors")
   {
        conten.textContent = 'TIE!';
        red.appendChild(conten);
    return 0;
     
    }
       else if (cs=="rock")
       {
        conten.textContent = 'you lose !rock beats scissors !';
        red.appendChild(conten);
       
       return -1;
    }
         // return " you lose !  rock beats scissors !";
             else if (cs="paper")
             {
                
                conten.textContent = " you win ! scissors beats paper!";
                red.appendChild(conten);
                return 1;
             }
               //  return " you win ! scissors beats paper";
  }

}


// const rock=document.querySelector('#ro');

// rock.addEventListener('click', playRound);



// function game(){
//     var score=0;
    
//   for (let i =0 ; i<=4 ; i++) {
//     const playerSelection = prompt();
//     score = score +playRound(playerSelection , computerSelection) ;
    
//   }
//   if ( score> 0 )
//     console.log(" WINNER");
//     else
//     console.log(" LOOSER");
// }
// game();
let score=0;
let thisScore=0;
let cs=0;
let ps=0;

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
  if(score<5 && score > -5)
  {

    const computerSelection = getComputerChoice();
    thisScore =playRound(playerSelection, computerSelection);
     score += thisScore;
      switch(thisScore){
          case 1:
            ps+=1;
            pls.textContent = ps;
            break;
            case -1:
                cs+=1;
                cos.textContent = cs;
                break;

      }
       console.log(score);
    if (score > 0 )
             console.log("WINNER");
        else if( score < 0 )
        console.log("LOOSER");
          else
             console.log("TIE");
  }
    });
  });

