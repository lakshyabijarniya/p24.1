
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,bottomSide,rightSide,leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,580,1200,20,{isStatic:true});
	paper= new Paper(100,500,10);
bottomSide=new Dustbin(1000,560,170,20); 
leftSide=new Dustbin(905,520,20,100);
rightSide=new Dustbin(1095,520,20,100);



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();
 leftSide.display();
 rightSide.display();
 bottomSide.display();
drawSprites();


}
function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 20,
		y: -20
	  });
	}
  }



