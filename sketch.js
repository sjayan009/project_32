const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, polygon_IMG;

var score = 0;;

function preload(){
  polygon_IMG = loadImage("hi.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,220,10);
 
  //level one
  block1 = new rectangle(300,275,30,40);
  block2 = new rectangle(330,275,30,40);
  block3 = new rectangle(360,275,30,40);
  block4 = new rectangle(390,275,30,40);
  block5 = new rectangle(420,275,30,40);
  block6 = new rectangle(450,275,30,40);
  block7 = new rectangle(480,275,30,40);
  //level two
  block8 = new rectangle(330,235,30,40);
  block9 = new rectangle(360,235,30,40);
  block10 = new rectangle(390,235,30,40);
  block11 = new rectangle(420,235,30,40);
  block12 = new rectangle(450,235,30,40);
  //level three
  block13 = new rectangle(360,195,30,40);
  block14 = new rectangle(390,195,30,40);
  block15 = new rectangle(420,195,30,40);
  //top
  block16 = new rectangle(390,155,30,40);

  //level one
  blocks1 = new rectangle(640,175,30,40);
  blocks2 = new rectangle(670,175,30,40);
  blocks3 = new rectangle(700,175,30,40);
  blocks4 = new rectangle(730,175,30,40);
  blocks5 = new rectangle(760,175,30,40);
  //level two
  blocks6 = new rectangle(670,135,30,40);
  blocks7 = new rectangle(700,135,30,40);
  blocks8 = new rectangle(730,135,30,40);
  //top
  blocks9 = new rectangle(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SLINGSHOT(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
  
  textSize(32);
  text("SCORE:  " + score, 600, 250);
 
  Engine.update(engine);
//FOR DISPLAYING
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
//FOR THE SCORE
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  imageMode(CENTER)
  image(polygon_IMG,ball.position.x,ball.position.y,40,40);

  slingShot.display();

  textSize(25);
  fill("white");
  strokeWeight(0.01);
  text("Drag and launch the hexagon toward the blocks to destroy them!", 100, 50);


}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    slingShot.attach(this.ball);
  }
}