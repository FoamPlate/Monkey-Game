
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var monkey
var ground
var bananaGroup
var obstacleGroup
var survivalTime=0

function preload(){
  
 // monkey = loadImage("sprite_0.png");
  //groundImage = loadImage("
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  
  monkey=createSprite(40,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  
  ground=createSprite(40,350,1200,20);
 ground.velocityX=-2
 
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background(180)
  if(keyDown("space") && monkey.y >= 220) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
stroke("wight")
textSize(20);
fill("wight");
text("score: "+ score, 500,500);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50)

  
  
  monkey.collide(ground);
  spawnObstacles();
  spawnFood();
drawSprites();
  
}

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    bananaGroup.add(banana);
    
    
   

  }
}

function spawnObstacles() {
  
if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,height-65,20,30);
    //obstacle.debug = true;
    obstacle.velocityX =-6 
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
       obstacle.addImage(obstaceImage);
          
  
      
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}



