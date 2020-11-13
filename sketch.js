var movingRectangle,fixedRectangle

function setup() {
  createCanvas(1300,800);
 fixedRectangle= createSprite(400, 200, 50, 50);
 movingRectangle=createSprite(500,200,50,30);
 fixedRectangle.shapeColor="green" ;
 movingRectangle.shapeColor="green" ;

}

function draw() {
  background(0);
  movingRectangle.x=World.mouseX
  movingRectangle.y=World.mouseY
  if (movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&movingRectangle.y-fixedRectangle.y<movingRectangle.width/2+fixedRectangle.width/2&&fixedRectangle.y-movingRectangle.y<movingRectangle.width/2+fixedRectangle.width/2){
    fixedRectangle.shapeColor="red" ;
    movingRectangle.shapeColor="red" ; 
  }
  else{
    fixedRectangle.shapeColor="green" ;
 movingRectangle.shapeColor="green" ;
  }
  
  drawSprites();

}
 
