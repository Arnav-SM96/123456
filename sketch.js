var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bb3,bb2,bb1;
var b2,b3,b1;
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
	
	bb1=Bodies.rectangle(380,650,250,40,{isStatic:true});
	b1=createSprite(380,650,250,40);
	b1.shapeColor=color(225,0,0);

	bb2=Bodies.rectangle(260,560,40,200,{isStatic:true});
	b2=createSprite(260,560,40,200);
	b2.shapeColor=color(225,0,0);

	bb3=Bodies.rectangle(500,560,40,200,{isStatic:true});
	b3=createSprite(500,560,40,200);
	b3.shapeColor=color(225,0,0);

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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	World.add(world, bb1);
	World.add(world, bb2);
	World.add(world, bb3);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  drawSprites();
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    
	Matter.Body.setStatic(packageBody, false);
    
  }
}



