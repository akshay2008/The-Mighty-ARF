//variables
var START = 1;
var PLAY = 2;
var END = 3;
var WON = 4;
var HEART1 = 5;
var HEART2 = 6;
var HEART3 = 7;
var HEART4 = 8;
var HEART5 = 9;
gameState = START ;
var bg1,bg2,nbg;
var sC1,sC2;
var iG;
var e1,e2,e3,eGroup;
var ai,a,aGroup;
var bolt,boltImg;
var score,scoreImg;
var score = 0;
var sc_img,sc_1; 
var gbimg,gb,rbimg,rb,gbGroup,rbGroup;                     
var bb,bbGroup;
var sound,sound1,sound3,jump,won,pick,hit,S;
var s02;
var retry,retryimg;
var start,startImg;
var leave,leaveImg;
var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img,heart4Img,heart5Img;
var heart6Img,heart7Img,heart8Img,heart9Img;










function preload(){

//background images
getBackgroundImg();
bg1 = loadAnimation("road2.jpg");
nbg = loadAnimation("nbg.jpg");
//animations,bullet and enemies
sC1 = loadAnimation("survival11.png","survival22.png","survival33.png","survival44.png","survival55.png","survival66.gif");
e1 = loadImage("enemy11.png");
e2 = loadImage("enemy22.png");
e3 = loadImage("enemy33.png");
ai = loadImage("bullet01.png");
s = loadAnimation("bolt1.png","bolt2.png","bolt3.png","bolt4.png","bolt5.png","bolt6.png","bolt7.gif");
gbimg = loadImage("bull11.png");
rbimg = loadImage("bull22.png");
sc_img = loadImage("score123.png");
s02 = loadImage("notsurvived.gif");
//buttons
retryimg = loadImage("retry.png");
startImg = loadImage("woooo.jpg");
leaveImg = loadImage("leave1.jpg");
//hearts
heart1Img = loadImage("full1.png");
heart2Img = loadImage("no1.png");
heart3Img = loadImage("half1.png");
heart4Img = loadImage("full2.png");
heart5Img = loadImage("no2.png");
heart6Img = loadImage("half2.png");
heart7Img = loadImage("full3.png");
heart8Img = loadImage("no3.png");
heart9Img = loadImage("half3.png");
S = loadImage("won.gif");
//sound
sound = loadSound("mixkit-short-laser-gun-shot-1670.wav");
sound1 = loadSound("preview.mp3");
sound3 = loadSound("mixkit-laser-game-over-1946.wav");
jump = loadSound("preview (1).mp3");
won = loadSound("mixkit-game-level-completed-2059.wav");
pick = loadSound("preview (2).mp3");
hit = loadSound("preview (3).mp3");
  
}










function setup(){
  
createCanvas(windowWidth,windowHeight);
bg2 = createSprite(windowWidth/2,windowHeight/2,windowWidth+1800,windowHeight);
bg2.addAnimation("akshay",bg1);
bg2.scale = 3;
bg2.velocityX = -2;
  
  
sC2 = createSprite(70,windowHeight-30,70,70);
sC2.addAnimation("akshay",sC1);
sC2.scale = 1.7;

  
sc_1 = createSprite(windowWidth-100,50,50,50);
sc_1.addImage("akshay",sc_img);
sc_1.scale = 0.07;
  
  
heart1 = createSprite(windowWidth-605,50,50,50);
heart1.addImage("akshay",heart1Img);
heart1.scale = 0.32;

  
heart2 = createSprite(windowWidth-515,50,50,50);
heart2.addImage("akshay",heart4Img);
heart2.scale = 0.32;
  
  
heart3 = createSprite(windowWidth-425,50,50,50);
heart3.addImage("akshay",heart7Img);
heart3.scale = 0.32;  
  
  
retry = createSprite(windowWidth/2,windowHeight/2,50,50);
retry.addImage("akshay",retryimg);
retry.scale = 0.14;
  
  
start = createSprite(windowWidth/2,windowHeight/2-100,50,50);
start.addImage("akshay",startImg);
start.scale = 1.5;
  
  
leave = createSprite(windowWidth/2,windowHeight/2+100,50,50);
leave.addImage("akshay",leaveImg);
leave.scale = 0.6;  
  
  
iG = createSprite(windowWidth/2,windowHeight-1,windowWidth,20);
iG.visible = false;

  
sC2.setCollider("rectangle",0,0,35,44);
//sC2.debug = true;
  
  
eGroup = createGroup();
aGroup = createGroup();
bbGroup = createGroup();

  
}










function draw(){

sC2.collide(iG);
sC2.velocityY = sC2.velocityY + 0.8;

  
if(mousePressedOver(start)){
  
gameState = PLAY;
bg2.velocityX = -4;

}

 
if(gameState === START){
  
bg2.velocityX = 0;
start.visible = true;
eGroup.velocityX = 0;
bbGroup.velocityX = 0;
score = 0;
eGroup.destroyEach();
bbGroup.destroyEach();
leave.visible = false;
retry.visible = false;
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img); 
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);

}  

  
  
  

  
  
  
  
  
if(gameState === PLAY){
  

if(bg2.x<windowWidth-windowWidth){
bg2.x = windowWidth/2-50;
}
//if(bg2.x<-250){
//bg2.x = 650;
//}


retry.visible = false;
start.visible = false;
leave.visible = false;
  
  
  
if(keyWentDown("space") && sC2.y>windowHeight-100){
  
sC2.velocityY = -23;
jump.play();

}
  

  
if (keyWentDown("s") && score>0 && score<100) {  

createArrow();
sC2.addAnimation("gun shooting",s);
sC2.changeAnimation("gun shooting",s);
sound.play();
score = score-1;

}
  
  
  
if(keyWentUp("s")){
  
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
sound1.play();
  
}
  
  

if(sC2.isTouching(bbGroup)) {
    
    score = score+1;
    pick.play();
    bbGroup.destroyEach();
    
  }
  
  
  
if(aGroup.isTouching(eGroup)) {
    
    aGroup.destroyEach();
    eGroup.destroyEach();
    //eGroup.Visiblity = this.Visiblity - 5;
    
}  
 
  
  
if(score>14 && score<20){
  
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);  
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);  
  
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);  
  
won.play();
  
gameState = WON;   
  
}
  
  
  
  
  
  
  
  
  

if(sC2.isTouching(eGroup)){
  
heart1.addAnimation("vanish",heart3Img);
heart1.changeAnimation("vanish",heart3Img); 
eGroup.velocityX = 0;
hit.play();
eGroup.destroyEach();
gameState = HEART1;
  
}
  
  
  
  
  
  
  
  
  
  
  
spawnObstacles();
createGreenAndRedBullet();
 
  
  
}
  
  

  
  
  
  
  
  
  
if(gameState === HEART1){
  

heart1.addAnimation("vanish",heart3Img);
heart1.changeAnimation("vanish",heart3Img); 

  
  
if(bg2.x<windowWidth-windowWidth){
bg2.x = windowWidth/2-50;
}
//if(bg2.x<-250){
//bg2.x = 650;
//}


retry.visible = false;
start.visible = false;
leave.visible = false;
  
  
  
if(keyWentDown("space") && sC2.y>windowHeight-100){
  
sC2.velocityY = -23;
jump.play();

}
  

  
if (keyWentDown("s") && score>0 && score<100) {  

createArrow();
sC2.addAnimation("gun shooting",s);
sC2.changeAnimation("gun shooting",s);
sound.play();
score = score-1;

}
  
  
  
if(keyWentUp("s")){
  
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
sound1.play();
  
}
  
  

if(sC2.isTouching(bbGroup)) {
    
    score = score+1;
    pick.play();
    bbGroup.destroyEach();
    
  }
  
  
  
if(aGroup.isTouching(eGroup)) {
    
    aGroup.destroyEach();
    eGroup.destroyEach();
    eGroup.Visiblity = this.Visiblity - 5;
    
}  
 
  
  
if(score>14 && score<20){
  
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);  
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);  
  
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);  
  
won.play();
  
gameState = WON;   
  
}
  
  
  
  
  
  
  
  
  

if(sC2.isTouching(eGroup)){
   
eGroup.velocityX = 0;
hit.play();
heart1.addAnimation("vanish",heart2Img);
heart1.changeAnimation("vanish",heart2Img); 
eGroup.destroyEach();
gameState = HEART2;
   
   
   }
else{
  
heart1.addAnimation("vanish",heart3Img);
heart1.changeAnimation("vanish",heart3Img);   
  
} 
  
  
  
  
  
  
  
  
  
  
spawnObstacles();
createGreenAndRedBullet();
 
  
  
}  
  
  
  

  
  
  
  
  
  
if(gameState === HEART2){
  
heart1.addAnimation("vanish",heart2Img);
heart1.changeAnimation("vanish",heart2Img); 

  
  
if(bg2.x<windowWidth-windowWidth){
bg2.x = windowWidth/2-50;
}
//if(bg2.x<-250){
//bg2.x = 650;
//}


retry.visible = false;
start.visible = false;
leave.visible = false;
  
  
  
if(keyWentDown("space") && sC2.y>windowHeight-100){
  
sC2.velocityY = -23;
jump.play();

}
  

  
if (keyWentDown("s") && score>0 && score<100) {  

createArrow();
sC2.addAnimation("gun shooting",s);
sC2.changeAnimation("gun shooting",s);
sound.play();
score = score-1;

}
  
  
  
if(keyWentUp("s")){
  
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
sound1.play();
  
}
  
  

if(sC2.isTouching(bbGroup)) {
    
    score = score+1;
    pick.play();
    bbGroup.destroyEach();
    
  }
  
  
  
if(aGroup.isTouching(eGroup)) {
    
    aGroup.destroyEach();
    eGroup.destroyEach();
    eGroup.Visiblity = this.Visiblity - 5;
    
}  
 
  
  
if(score>14 && score<20){
  
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);  
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);  
  
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);  
  
won.play();
  
gameState = WON;   
  
}
  

  
  
  
  
  
  
  
  
if(sC2.isTouching(eGroup)){
   
eGroup.velocityX = 0;
hit.play();
heart2.addAnimation("vanish",heart6Img);
heart2.changeAnimation("vanish",heart6Img); 
eGroup.destroyEach();
gameState = HEART3;
   
   
   }
else{
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);   
  
}
  
  
  
  
  
  
  
  
  
  
spawnObstacles();
createGreenAndRedBullet();
 
  
  
}
  
  
  

  
  
  
  
  
  
if(gameState === HEART3){
  
heart2.addAnimation("vanish",heart6Img);
heart2.changeAnimation("vanish",heart6Img); 

  
  
if(bg2.x<windowWidth-windowWidth){
bg2.x = windowWidth/2-50;
}
//if(bg2.x<-250){
//bg2.x = 650;
//}


retry.visible = false;
start.visible = false;
leave.visible = false;
  
  
  
if(keyWentDown("space") && sC2.y>windowHeight-100){
  
sC2.velocityY = -23;
jump.play();

}
  

  
if (keyWentDown("s") && score>0 && score<100) {  

createArrow();
sC2.addAnimation("gun shooting",s);
sC2.changeAnimation("gun shooting",s);
sound.play();
score = score-1;

}
  
  
  
if(keyWentUp("s")){
  
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
sound1.play();
  
}
  
  

if(sC2.isTouching(bbGroup)) {
    
    score = score+1;
    pick.play();
    bbGroup.destroyEach();
    
  }
  
  
  
if(aGroup.isTouching(eGroup)) {
    
    aGroup.destroyEach();
    eGroup.destroyEach();
    eGroup.Visiblity = this.Visiblity - 5;
    
}  
 
  
  
if(score>14 && score<20){
  
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);  
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);  
  
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);  
  
won.play();
  
gameState = WON;   
  
}
  
  
  
  
  
  
  
  
  
  
if(sC2.isTouching(eGroup)){
   
eGroup.velocityX = 0;
hit.play();
heart2.addAnimation("vanish",heart5Img);
heart2.changeAnimation("vanish",heart5Img); 
eGroup.destroyEach();
gameState = HEART4;
   
   
   }
else{
  
heart2.addAnimation("vanish",heart6Img);
heart2.changeAnimation("vanish",heart6Img); 
  
}
  
  
  
  
  
  
  
  
  
  
spawnObstacles();
createGreenAndRedBullet();
 
  
  
} 
  
  
  
  
  
 
  
  
  
  
if(gameState === HEART4){
  
heart2.addAnimation("vanish",heart5Img);
heart2.changeAnimation("vanish",heart5Img); 

  
  
if(bg2.x<windowWidth-windowWidth){
bg2.x = windowWidth/2-50;
}
//if(bg2.x<-250){
//bg2.x = 650;
//}


retry.visible = false;
start.visible = false;
leave.visible = false;
  
  
  
if(keyWentDown("space") && sC2.y>windowHeight-100){
  
sC2.velocityY = -23;
jump.play();

}
  

  
if (keyWentDown("s") && score>0 && score<100) {  

createArrow();
sC2.addAnimation("gun shooting",s);
sC2.changeAnimation("gun shooting",s);
sound.play();
score = score-1;

}
  
  
  
if(keyWentUp("s")){
  
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
sound1.play();
  
}
  
  

if(sC2.isTouching(bbGroup)) {
    
    score = score+1;
    pick.play();
    bbGroup.destroyEach();
    
  }
  
  
  
if(aGroup.isTouching(eGroup)) {
    
    aGroup.destroyEach();
    eGroup.destroyEach();
    eGroup.Visiblity = this.Visiblity - 5;
    
}  
 
  
  
if(score>14 && score<20){
  
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);  
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);  
  
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);  
  
won.play();
  
gameState = WON;   
  
}
  
  
  
  
  
  
  
  
  
  
if(sC2.isTouching(eGroup)){
   
eGroup.velocityX = 0;
hit.play();
heart3.addAnimation("vanish",heart9Img);
heart3.changeAnimation("vanish",heart9Img); 
eGroup.destroyEach();
gameState = HEART5
   
   
   }
else{
  
heart2.addAnimation("vanish",heart5Img);
heart2.changeAnimation("vanish",heart5Img); 
  
}
  
  
  
  
  
  
  
  
  
  
spawnObstacles();
createGreenAndRedBullet();
 
  
  
}  
  
  
 
  
  
  
  
  
  
  
if(gameState === HEART5){
  
heart3.addAnimation("vanish",heart9Img);
heart3.changeAnimation("vanish",heart9Img); 

  
  
if(bg2.x<windowWidth-windowWidth){
bg2.x = windowWidth/2-50;
}
//if(bg2.x<-250){
//bg2.x = 650;
//}


retry.visible = false;
start.visible = false;
leave.visible = false;
  
  
  
if(keyWentDown("space") && sC2.y>windowHeight-100){
  
sC2.velocityY = -23;
jump.play();

}
  

  
if (keyWentDown("s") && score>0 && score<100) {  

createArrow();
sC2.addAnimation("gun shooting",s);
sC2.changeAnimation("gun shooting",s);
sound.play();
score = score-1;

}
  
  
  
if(keyWentUp("s")){
  
sC2.addAnimation("akshay",sC1);
sC2.changeAnimation("akshay",sC1);
sound1.play();
  
}
  
  

if(sC2.isTouching(bbGroup)) {
    
    score = score+1;
    pick.play();
    bbGroup.destroyEach();
    
  }
  
  
  
if(aGroup.isTouching(eGroup)) {
    
    aGroup.destroyEach();
    eGroup.destroyEach();
    eGroup.Visiblity = this.Visiblity - 5;
    
}  
 
  
  
if(score>14 && score<20){
  
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);  
  
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img);  
  
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);  
  
won.play();
  
gameState = WON;   
  
}
  
  
  
if(sC2.isTouching(eGroup)){
   
eGroup.velocityX = 0;
hit.play();
sound3.play();
heart3.addAnimation("vanish",heart8Img);
heart3.changeAnimation("vanish",heart8Img);
eGroup.destroyEach();
gameState = END;
   
   
   }
else{
  
heart3.addAnimation("vanish",heart9Img);
heart3.changeAnimation("vanish",heart9Img); 
  
}
  
  
  
  
  
  
  
  
  
  
spawnObstacles();
createGreenAndRedBullet();
 
  
}
  
  
  
  
  
  
  
  
  
  
if(gameState === END){ 
bg2.velocityX = 0;
retry.visible = true;
leave.visible = true;
start.visible = false;
eGroup.velocityX = 0;
bbGroup.velocityX = 0;
score = 0;
eGroup.destroyEach();
bbGroup.destroyEach();
sC2.addImage("please god please work",s02);
sC2.changeAnimation("please god please work",s02);  
if(mousePressedOver(retry)){
  
gameState = PLAY;
sC2.addAnimation("akshay",sC1); 
sC2.changeAnimation("akshay",sC1);
heart1.addAnimation("vanish",heart1Img);
heart1.changeAnimation("vanish",heart1Img);
heart2.addAnimation("vanish",heart4Img);
heart2.changeAnimation("vanish",heart4Img); 
heart3.addAnimation("vanish",heart7Img);
heart3.changeAnimation("vanish",heart7Img);
bg2.velocityX = -3;
  
}
 
  
  
if(mousePressedOver(leave)){
  
  gameState = START;
  
}  
  
  
  
}
  
  
  
  
  
  
  
  
  
  
drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);
textSize(40);
text(":"+score,windowWidth-55,60);
  
  
  
  
  
  
  
  
  
  
if(gameState === WON){
  
bg2.velocityX = 0;
retry.visible = false;
leave.visible = true;
start.visible = false;
eGroup.velocityX = 0;
bbGroup.velocityX = 0;
score = 0;
sC2.addAnimation("akshay",S);
sC2.changeAnimation("akshay",S);
eGroup.destroyEach();
bbGroup.destroyEach();
fill("darkBlue");
textSize(120);
text("YOU WON",windowWidth/2-280,windowHeight/2);  
  
if(mousePressedOver(leave)){
  
  gameState = START;
  
}
  
  
  
}

  

}










function spawnObstacles(){
 if (frameCount % 70 === 0){
var obstacle=createSprite(windowWidth+50,windowHeight-50,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.velocityX = -6;
    obstacle.velocityX = -6 ;
  // obstacle.debug = true;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(e1);
              break;
      case 2: obstacle.addImage(e2);
              break;
      case 3: obstacle.addImage(e3);
              break;
      default: break;
    }
   
        
    obstacle.scale = 0.45;
    obstacle.lifetime = 290;
   
   
    eGroup.add(obstacle);

 }
}










 function createArrow() {
  var a= createSprite( 70,windowHeight-60, 60, 10); 
  a.addImage(ai);
  a.x = 100;
  a.y=sC2.y;
  a.velocityX = 4;
  a.lifetime = 290;
  a.scale = 0.3;
  aGroup.add(a);
  return a;
   
}










function createGreenAndRedBullet(){
 if (frameCount % 120 === 0){
   var bb = createSprite(750,Math.round(random(windowWidth+150,windowHeight/2-100)),100,100);
   bb.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: bb.addImage(gbimg);
              break;
      case 2: bb.addImage(rbimg);
              break;
      default: break;
    }
   
              
    bb.scale = 0.9;
    bb.lifetime = 290;
   
  
    bbGroup.add(bb);
 }
}










async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=06 && hour<=14){

    bg2.addAnimation("akshay",bg1);
    bg2.changeAnimation("akshay",bg1);

    }
    else{

    bg2.addAnimation("akshay",nbg);
    bg2.changeAnimation("akshay",nbg);


    }

    

}


