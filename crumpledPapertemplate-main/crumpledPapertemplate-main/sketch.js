
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
	
	}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

ball = new ball(50,600,20)

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ball.display();

  groundObject.display();
  dustbinObj.display();

}

