
function preload(){
  
  bgImg = loadImage("spacebg.jpg")
  issImage = loadImage("iss.png");

  spaceCraftImage = loadAnimation("spacecraft1.png");

  spaceCraftImageL = loadAnimation("spacecraft3.png")

  spaceCraftImageR = loadAnimation("spacecraft4.png")

  spaceCraftImageU = loadAnimation("spacecraft2.png")


}


function setup() {
  createCanvas(1000,600);
 iss =  createSprite(430,230);
 iss.addImage(issImage);

 spaceCraft = createSprite(285,470);
 spaceCraft.addAnimation("space",spaceCraftImage);
 spaceCraft.scale = 0.36;
 

 iss.setCollider("circle",-60,0,30);
 spaceCraft.setCollider("circle",0,-320,50);

}

function draw() {
  background(bgImg);  

  if(keyDown("LEFT_ARROW")){
    spaceCraft.x = spaceCraft.x-4;
    spaceCraft.addAnimation("space",spaceCraftImageL);
  }

  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x = spaceCraft.x+4;
    spaceCraft.addAnimation("space",spaceCraftImageR);
  }

  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y-4;
    spaceCraft.addAnimation("space",spaceCraftImageU);
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.y = spaceCraft.y+4;
    spaceCraft.addAnimation("space",spaceCraftImage);
  }

  if(spaceCraft.isTouching(iss)){
    fill("red");
    textSize(35);
    text("Docking Successful!!",550,400);
  }
  
  drawSprites();
}