var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

   speed=random(55,90);
   weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX=19;
  wall = createSprite(790, 200, 30, 200);

}

function draw() {
  background("black");  
  
  if(wall.x-car.x <(car.width+wall.width/2))
  {
   car.velocityX = 0;
   var deformation = 0.5*2260*60/22500
  }
  
if(deformation>180)
{
car.shapecolor=color("red");
}

if(deformation<180 && deformation>100)
{
car.shapecolor=color("yellow");
}

if(deformation<100)
{
car.shapecolor=color("green");
}


  drawSprites();

}