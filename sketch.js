
var bullet,wall;
var speed,weight,thickness;





function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = "white";



  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "blue";

   speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);

  
  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10){
      bullet.shapeColor = "red";

    }

 
   if(damage<10){
     bullet.shapeColor = "green";
   }

  }












  drawSprites();
}

function hasCollided(wall,bullet){
 var bulletRightEdge = bullet.x + bullet.width;
   var wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
  return false;
  }

}

