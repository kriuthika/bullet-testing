var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400)


  wall =  createSprite(1300,200,thickness,height/2)
speed = random(55,90)
weight=random(400,1500)
thickness=random(22,83)

bullet=createSprite(50,220,60,9);
bullet.velocityX=speed;
}
function draw() {
  background("black"); 
if(wall.x-bullet.x<(bullet.width+wall.width/2)){
bullet.velocityX=0;
var deformation = 0.5*weight*speed*speed/22500;
if(deformation>10){
  wall.shapeColor=color("green");
}
if(deformation<10){
  wall.shapeColor=color("red");
}
}
  drawSprites();
}
