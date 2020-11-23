var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(200,200,40,50);
  car.shapeColor= "yellow";
  wall= createSprite(500,200,20,100);
  wall.shapeColor= "brown";
  car.velocityX= 4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  

  if(IS_Touching(car,wall)){
car.shapeColor= "blue";
textSize(18);
text("Touched!!",300,300);
  }
BOUNCEOFF(car, wall);
  drawSprites();
}
function IS_Touching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true; 
}
else {
  return false;
}
}

function BOUNCEOFF(object1, object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    {
      object1.velocityX= (-1)*object1.velocityX;
    }
    else if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object2.velocityX= (-1)*object2.velocityX;
      }
}