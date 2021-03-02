// the global variable declaration
var bullet, wall;
var bulletRightEdge, wallLeftEdge;
var thickness;
var speed, weight;

//the setup function
function setup() {
  // creatign the canvas
  createCanvas(1600,400);

  //initializing the thickness 
  thickness = random(22, 83);

  // initializing the speed
  speed = random(223, 312);

  // initializing the weight
  weight = random(30, 52);

  // creating the bullet sprite
  bullet = createSprite(50, 200, 50, 10);
  // setting the bullet speed same as the value of the speed variable
  bullet.velocityX = speed;

  // creating the wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";
}

//the draw function
function draw() {
  //setting the background colour
  background(0,0,0);  

  // detectiing the colision
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage<=10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  //displaying the sprites
  drawSprites();
}

//thte has collided function
function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  //detecting the collision
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}