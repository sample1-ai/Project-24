
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1, paper1,ground1;	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(1000,550);
	paper1 = new Paper(200,450,40);
	ground1 = new Ground(width/2,570,width,20);

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  paper1.display();
  ground1.display();

  Engine.run(engine);
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
  	}
}





