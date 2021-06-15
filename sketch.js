var database;
var game,player,form;
var gameState = 0;
var playerCount;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  game = new Game();
  game.getState()
  game.start()
}

function draw(){
 
   if(playerCount===2){
   game.update(1)
   }

   if(gameState === 1){
    clear();
    game.play();
   }
  
}

