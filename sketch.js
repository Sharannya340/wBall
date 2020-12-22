const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
ground=new Ground(600,550,1200,20)
box1=new Box(400,200,100,100)
box2=new Box(400,520,100,100)
box3=new Box(400,420,100,100)
box4=new Box(400,320,100,100)
box5=new Box(400,50,100,100)
ball=new Ball(250,350,100,100)
rope=new Rope(ball.body,{x:250,y:100})
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  box1.display()
  ground.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  ball.display()
  rope.display()
}


 
























































