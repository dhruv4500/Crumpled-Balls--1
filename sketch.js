
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sideBin,bottomBin,rightSide;
var ground,paper;
var edges;

function preload(){
	
}

function setup() {
  createCanvas(1100, 700);
  
  edges=createEdgeSprites();


	engine = Engine.create();
	world = engine.world;

   bottomBin=new Bin(818,629,250,30);
   sideBin=new Bin(699,576,30,140);
   rightBin=new Bin(933,576,30,140);
   ground=new Ground(width/2,height-20,width,70);
   paper=new Paper(81,570,30);


   console.log("You can only put the trash once. If you miss it in the first go then you will have to restart to retry! Good luck!👍");
  	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
	
  rectMode(CENTER);
  background("lightblue");

  bottomBin.display();
  sideBin.display();
  rightBin.display();
  ground.display();
  paper.display();

 // keyPressed();

  if(paper.myObjects.position.x>1100){
    paper.myObjects.position.x=81;
  }
 
  
 
}

function keyPressed(){
    if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.myObjects, paper.myObjects.position,  {x:155, y: -155});
	}
}