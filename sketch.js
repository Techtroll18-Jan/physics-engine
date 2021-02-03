const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,17,options);
  World.add(world,ground)
  var ball_options={
    restitution:1.0
  }
   ball=Bodies.circle(200,200,15,ball_options);
   World.add(world,ball)

}

function draw() {
  background(255,255,255);  
   Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,17);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15);
  
}