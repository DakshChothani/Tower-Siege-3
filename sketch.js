
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var boy, boyImg;

function preload()
{
 boyImg = loadImage("boy.png");
}

function setup()
 {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;
  
  boy = createSprite(200,500,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.15;
	
	ground = new Ground(500,590,1000,20);
  ground1 = new Ground(600,400,220,15);
  ground2 = new Ground(850,280,220,15);

  sideGround = new Ground(990,300,20,10000);
  sideGround1 = new Ground(10,300,20,10000);
  ball = new Ball(125,450,30);
  string = new Slingshot(ball.body,{x:125, y:425});
  box1 = new BoxViolet(515,375,20,30);
  box2 = new BoxViolet(545,375,20,30);
  box3 = new BoxViolet(575,375,20,30);
  box4 = new BoxViolet(600,375,20,30);
  box5 = new BoxViolet(625,375,20,30);
  box6 = new BoxViolet(655,375,20,30);
  box7 = new BoxViolet(685,375,20,30);
  box8 = new Boxindigo(525,345,20,30);
  box9 = new Boxindigo(555,345,20,30);
  box10 = new Boxindigo(585,345,20,30);
  box11 = new Boxindigo(615,345,20,30);
  box12 = new Boxindigo(645,345,20,30);
  box13 = new Boxindigo(675,345,20,30);
  box14 = new Boxblue(540,315,20,30);
  box15 = new Boxblue(570,315,20,30);
  box16 = new Boxblue(600,315,20,30);
  box17 = new Boxblue(630,315,20,30);
  box18 = new Boxblue(660,315,20,30);
  box19 = new Boxgreen(555,285,20,30);
  box20 = new Boxgreen(585,285,20,30);
  box21 = new Boxgreen(615,285,20,30);
  box22 = new Boxgreen(645,285,20,30);
  box23 = new Boxyellow(570,255,20,30);
  box24 = new Boxyellow(600,255,20,30);
  box25 = new Boxyellow(630,255,20,30);
  box26 = new Boxorange(585,225,20,30);
  box27 = new Boxorange(615,225,20,30);
  box28 = new Boxred(600,195,20,30);
 
  qbox1 = new BoxViolet(805,260,20,30);
  qbox2 = new BoxViolet(820,260,20,30);
  qbox3 = new BoxViolet(835,260,20,30);
  qbox4 = new BoxViolet(850,260,20,30);
  qbox5 = new BoxViolet(865,260,20,30);
  qbox6 = new BoxViolet(880,260,20,30);
  qbox7 = new BoxViolet(895,260,20,30);
  qbox8 = new Boxindigo(812.5,245,20,30);
  qbox9 = new Boxindigo(827.5,245,20,30);
  qbox10 = new Boxindigo(842.5,245,20,30);
  qbox11 = new Boxindigo(857.5,245,20,30);
  qbox12 = new Boxindigo(872.5,245,20,30);
  qbox13 = new Boxindigo(887.5,245,20,30);
  qbox14 = new Boxblue(820,230,20,30);
  qbox15 = new Boxblue(835,230,20,30);
  qbox16 = new Boxblue(850,230,20,30);
  qbox17 = new Boxblue(865,230,20,30);
  qbox18 = new Boxblue(880,230,20,30);
  qbox19 = new Boxgreen(827.5,215,20,30);
  qbox20 = new Boxgreen(842.5,215,20,30);
  qbox21 = new Boxgreen(857.5,215,20,30);
  qbox22 = new Boxgreen(872.5,215,20,30);
  qbox23 = new Boxyellow(835,200,20,30);
  qbox24 = new Boxyellow(850,200,20,30);
  qbox25 = new Boxyellow(865,200,20,30);
  qbox26 = new Boxorange(842.5,175,20,30);
  qbox27 = new Boxorange(857.5,175,20,30);
  qbox28 = new Boxred(850,150,20,30);
	
	Engine.run(engine); 
}

function draw() 
{
  rectMode(CENTER);
  background("grey");
  fill("yellow")
  textSize(20);
  text("*To destroy block dragg ball to shoot & Press space for another chance*",100,100);
  drawSprites();
 
  string.display();
  ground.display();
  ground1.display();
  ground2.display();
  ball.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  qbox1.display();
  qbox2.display();
  qbox3.display();
  qbox4.display();
  qbox5.display();
  qbox6.display();
  qbox7.display();
  qbox8.display();
  qbox9.display();
  qbox10.display();
  qbox11.display();
  qbox12.display();
  qbox13.display();
  qbox14.display();
  qbox15.display();
  qbox16.display();
  qbox17.display();
  qbox18.display();
  qbox19.display();
  qbox20.display();
  qbox21.display();
  qbox22.display();
  qbox23.display();
  qbox24.display();
  qbox25.display();
  qbox26.display();
  qbox27.display();
  qbox28.display();
  sideGround.display();
  sideGround1.display(); 
}

function mouseDragged()
{
 Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(ball.body,{x:235, y:420})
		string.attach(ball.body);
	}
}