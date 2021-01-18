
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananaGroup = new Group;
  obstacleGroup = new Group;
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80, 215, 20 ,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.15
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4
  
}


function draw() {
background("white");
  
  if(keyDown("space")) {
    monkey.velocityY = -9
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  ground.x = ground.width/2
  
  stroke("white");
  textSize(20)
  fill("white")
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  food();
  spawnObstacles();
  drawSprites();
  
}

function food() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(500, random(120,200), 20, 20);
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -3
    banana.lifetime = 158
    bananaGroup.add(banana)
  }
}

function spawnObstacles() {
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,325,20,20);
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.1
   obstacle.velocityX = -3;
   obstacle.lifetime = 120
   obstacleGroup.add(obstacle);
  }
}
