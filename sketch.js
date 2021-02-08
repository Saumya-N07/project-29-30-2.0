const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var platform;
var ball;
var slingShot;
var polygon;
var gamestate = "onsling";

function preload(){
  polygon=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  platform = new Stand(390,300,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightgrey");
  text("Launch hexagon at tower by dragging, press space key to launch again!",100,30);

  ground.display();
  platform.display();
  strokeWeight(2);
  stroke(15);
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("green");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("orange");
  block13.display();
  block14.display();
  block15.display();
  fill("red");
  block16.display();
  imageMode(CENTER)
  image(polygon ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  if(gamestate !== "launched") {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  slingShot.fly();
  gamestate="launched";
}

function keyPressed(){
  if(keyCode === 32){
    gamestate = "onsling";
      slingShot.attach(this.ball);
      console.log("ttt");
  }
}