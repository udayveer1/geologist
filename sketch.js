
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(200,100)
rubber= new Rubber(300,50)
stone= new Stone(500,80)
	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine)
  hammer.display()
  rubber.display()
  stone.display()
  drawSprites();
 
}



