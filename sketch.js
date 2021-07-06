var player1;
var maze;
var ghost1;
var ghost2;

function preload(){
  maze = loadImage("maze.png");
  ghost1 = loadImage("download.png");
}
function setup() {
  createCanvas(800,400);
  player1 = createSprite(740,380,40,40);
  ghost1 = createSprite(510,120,40,40);
  ghost2 = createSprite(300,120,40,40);
}

function draw() {
  background(maze); 
   fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
  player();
  


}
function player(){
  
  if(keyWentDown("up")){
    player1.velocityY = -3}

  if(keyWentDown("down")){
    player1.velocityY = 3
  }
  if(keyWentUp("down") || (keyWentUp("up"))){
    player1.velocityY = 0 
  }
  if(keyWentDown("right")){
    player1.velocityX= 4
  }
  if (keyWentDown("left")){
    player1.velocityX = -4
  }
  if(keyWentUp("right")|| (keyWentUp("left"))){
    player1.velocityX = 0
  }
  
  
}