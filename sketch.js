var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var engine, world;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	box1 = createSprite(345,625,10,50);
	box1.shapeColor = "red";
	box2 = createSprite(425,625,10,50);
	box2.shapeColor = "red";
	box3 = createSprite(385,650,75,10);
	box3.shapeColor = "red";

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	box1Body = Bodies.rectangle(345,625,10,50 ,{isStatic:true});
	 World.add(world,box1Body);
	 
	 box2Body = Bodies.rectangle(425,625,10,50 ,{isStatic:true});
	 World.add(world,box2Body);
	 
	 box3Body = Bodies.rectangle(385,650,75,10 ,{isStatic:true});
 	World.add(world,box3Body);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false)
  }
}



