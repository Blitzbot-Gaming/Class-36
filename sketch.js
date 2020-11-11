var gameState = 0;
var playerCount;
var database;
var form, player, game, canvas;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
   drawSprites();
}