var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed=random(223,321)
  thickness=random(22,83);
  weight=random(30,52)
  bullet=createSprite(50, 200, 30, 5)
  wall=createSprite(700,200,thickness,height/2)
  bullet.velocityX=speed;
  
}

function draw() {
  background("black");  
 
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
    console.log(damage);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
   

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true
  }
  else{
    return false;
  }
  
}

