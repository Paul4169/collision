var fr,mr;




function setup() {

  createCanvas(800,400);
  fr=createSprite(200, 200, 50, 50);
  fr.shapeColor="green"
  fr.debug=true;
  fr.velocityY=-2;
  mr=createSprite(150, 110, 50, 30);
  mr.debug=true;
  mr.shapeColor="green"
  mr.velocityY=+2;
}

function draw() {
  
  background(255,255,255);
  mr.y=World.mouseY;
  mr.x=World.mouseX;
 if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 ){
   
mr.velocityX=mr.velocityX*(-1);
fr.velocityX=fr.velocityX*(-1);
 }
if(mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){

  
mr.velocityY=mr.velocityY*(-1);
fr.velocityY=fr.velocityY*(-1);
}



  drawSprites();
 
}