var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxPosition = width/2-100
	 boxY = 627;

	 boxleft = createSprite(boxPosition, boxY, 20, 100);
	 boxleft.shapeColor = color(255, 0, 0);

	 boxleft = Bodies.rectangle(boxPosition+20, boxY, 20, 100, {isStatic:true} );
	 World.add(world, boxleft);

	 boxbase = createSprite(boxPosition+100, 668, 200, 17);
	 boxbase.shapeColor = color(255, 0, 0);

	 boxbottombody = Bodies.rectangle(boxPosition+200, boxY, 20, 100);
	 World.add(world, boxbottombody);

	 boxleft = createSprite(boxPosition+200, boxY, 20, 100);
	 boxleft.shapeColor = color(255, 0, 0);

	 boxright = Bodies.rectangle(boxPosition+200-20, boxY, 20, 95, {isStatic:true} );
	 World.add(world, boxright);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody, false);
    
  }

if(keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x-6;

}

if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+6;

}

}




