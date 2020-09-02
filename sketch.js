
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var food, obstacles;
var score;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  
  monkey = createSprite(100,300,20,20);
  monkey.addAnimation("running", monkey_running); 
  monkey.scale = 0.15;
  
  ground = createSprite(200,335,800,10);
  ground.velocityX= -4;
  ground.x=ground.width/2;
  
  bananaGroup = createGroup();
  
}


function draw() {
 background("white");
 stroke("black");
 textSize(20);
 fill("black");
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")&& monkey.y> 283) {
        monkey.velocityY = -13;
    }
    
    //gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  food();
  stone();
  monkey.collide(ground);
  drawSprites();
}

function food(){
 
  if(frameCount% 80===0){
    banana = createSprite(390,200,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4;
    banana.lifetime = 150;
    
    bananaGroup.add(banana);
  }
}

function stone(){
  if(frameCount% 100===0){
    obstacles = createSprite(390,300,20,20);
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    obstacles.velocityX=-4
    obstacles.lifetime = 250;
     }

}



