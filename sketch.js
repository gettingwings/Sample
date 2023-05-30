
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ball, ground, rope, peg;
var ballImg;

var left, right, top, bottom;

function preload(){
  ballImg = loadImage("./assets/cannonball.png");
}

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  //myEngine.world
  world = engine.world;

  var ballOptions = {
    restitution: 0.2,
    weight: 100
  }

  var groundOptions = {
    isStatic: true
  }

  ball = Bodies.circle(150,10,20, ballOptions); //x,y,r
  World.add(world, ball);

  ground = Bodies.rectangle(300,390,400,40, groundOptions); //x,y,w,h
  World.add(world, ground);

  peg = Bodies.circle(170, 100,10, {isStatic:true});
  World.add(world, peg);

  var ropeOptions ={
    pointA: {x:100,y:20},
    bodyB: ball,   //null
    length: 40,
    stiffness: 0.02
  };

  rope = Matter.Constraint.create(ropeOptions);
  World.add(world, rope);

  ellipseMode(RADIUS);
  rectMode(CENTER);
  imageMode(CENTER);
}


function draw(){
  background("yellow");

  Engine.update(engine);
 

  //console.log(ground.position.x,ground.position.y);
  //circle(100,100,50);
  fill("red");
  circle(peg.position.x, peg.position.y, 10); //x,y,r

  image(ballImg, ball.position.x, ball.position.y, 43,43 );

  fill("green");
  rect(ground.position.x, ground.position.y, 400, 40);

  if(rope.bodyB){
  push();
  stroke("white"); //pen color
  strokeWeight(5); //pen thickness
  //line(peg.position.x,peg.position.y, ball.position.x, ball.position.y);
  line(100,20, rope.bodyB.position.x, rope.bodyB.position.y);
  pop();
  }


}


function mouseDragged(){
  Body.setPosition(ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  rope.bodyB = null;
}
