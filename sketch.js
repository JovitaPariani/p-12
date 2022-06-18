var path,boy,lb,rb;
var pathImg,boyImg;

function preload(){
 pathImg= loadImage("path.png") 
 boyImg= loadAnimation("Runner-1.png","Runner-2.png") 
  //pre-load images
}

function setup(){
  createCanvas(400,400);
 path=createSprite(200,200)
 path.addImage(pathImg)
 path.velocityY=4
 path.scale=1.2
  //create sprites here
  boy=createSprite(180,340,30,30)
  boy.scale=0.08
  boy.addAnimation("jakerunning",boyImg)
}


function draw() {
  background(0);
  boy.X=World.mouseX
  createEdgeSprites()
  boy.collide(edge[3])
  if(path.y>400){
    path.y=height/2
  }
drawSprites()
}
