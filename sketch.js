var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,400);
  
  speed = random(223, 321);
  weight = random(30, 50);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(700, 200, thickness, height/2);
}

function draw() {
  background(0);  
   if(hasCollided(bullet, wall)) {
     bullet.velocityX = 0;
     var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness); 
     if(damage>10) {
       wall.shapeColor = "red";
     }
     if(damage<10) {
       wall.shapeColor = "green";
     }
   }
  drawSprites();
}

function hasCollided(ibullet, iwall) {
  bulletRightEdge=ibullet.x +ibullet.width;
  wallLeftEdge=iwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
   return true;
  }
  return false;
}