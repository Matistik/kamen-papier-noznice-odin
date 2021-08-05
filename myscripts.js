


function computerPlay(){
    const cars = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3); 
    return cars[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'draw';
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' ){
        return 'you won';
    }
    else {
        return 'you lost';
    }
  }

  function game(){
    
    let playerCounter = 0;
    let cpuCounter = 0;
    let player;

    for(let i = 0;i < 5 ; i++){
        let cpu = computerPlay();
        let validPromt = true;
        
        while(validPromt){
            player = prompt('vyber moznost rock/paper/scissors');
            
            if (player.toLowerCase() === 'rock' || player.toLowerCase() === 'paper' || player.toLowerCase() === 'scissors'){
                validPromt = false;
            }
            else {
                player = prompt('vyber moznost rock/paper/scissors');
            }
            
        }

        
            
        console.log("player pick " + player + " cpu pick " + cpu);

        let checkWinner = playRound(player,cpu);
        
        if (checkWinner === 'you won'){
            console.log('player won the round')
            playerCounter++;
        }
        else if (checkWinner === 'you lost'){
            console.log('cpu won the round')
            cpuCounter++;
        }
        else {
            console.log('draw')
        }
    }

    if (playerCounter > cpuCounter){
        return "player won";
    }
    else {
        return "cpu won";
    }

    }


//let player = prompt('vyber moznost rock/paper/scissors');
//player = player.toLocaleLowerCase();




console.log(game());