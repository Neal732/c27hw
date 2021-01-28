const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var roof;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,100,400,25)

	b1= new BlockClass(220,500,40)
	b2= new BlockClass(300,500,40)
	b3= new BlockClass(380,500,40)
	b4= new BlockClass(460,500,40)
	b5= new BlockClass(540,500,40)

	r1= new Rope(b1.body,roof.body,-180,0)
	r2= new Rope(b2.body,roof.body,-100,0)
	r3= new Rope(b3.body,roof.body,-20,0)
	r4= new Rope(b4.body,roof.body,60,0)
	r5= new Rope(b5.body,roof.body,140,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}