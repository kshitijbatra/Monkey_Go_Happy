var PLAY=1;
var END=0;

var gameState=PLAY;


var SurvivalTime=0;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas=(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background("white");
  
  if(gameState===PLAY){
    
      ground.velocityX=-4;
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  
  
  spawnBanana();
  spawnObstacle();
    
    if(obstacleGroup.isTouching(monkey)){
      gameState=END;
      
    }
    
  }
  else if(gameState===END){
    
    ground.velocityX=0;
    
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    monkey.velocityY=0;
    
  }
  
  monkey.collide(ground);
  
  drawSprites();
  
  
}

function spawnBanana(){
  if(World.frameCount%80===0){
    banana=createSprite(600,100,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.lifetime=150;
    banana.scale=0.1;
    banana.velocityX=-6;
    FoodGroup.add(banana);
  }
  
  
}

function spawnObstacle(){
  if(World.frameCount%300===0){
    obstacle=createSprite(600,325,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.1;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}




