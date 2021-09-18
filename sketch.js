var Runner, runner_2
let Power, Power_up
let Ground, Ground_up, Ground2, Ground3
let roof, roof_2, roof_3, roof_4
let line, line_2, line_3, line_4;
let position, position2;
let 

function preload(){
  //pre-load images
  Runner_2 = loadAnimation("Runner-1.png", "Runner-2.png");
  Power = loadAnimation("power.png");
  Ground_up = loadImage("path.png")
  roof_2 = loadImage("2222.png")
  roof_3 = loadImage("3333.png")
  line_2 = loadImage("Line.png");
  line_4 = loadImage("Line2.png");

}




function setup(){
  createCanvas(1750 ,850);

  //create sprites here

  Ground = createSprite(775,200)
  Ground.addImage( Ground_up)
  Ground.scale = 2
  Ground.velocityY = 4
  
  


  Runner = createSprite(775,375,200,200)
  Runner.addAnimation("running", Runner_2);
  Runner.scale = 0.15
  

  roof = createSprite(200,400,200,200);
  roof.addImage( roof_2);
 
  roof_4 = createSprite(1370,400,100,200);
  roof_4.addImage( roof_3);


  line = createSprite(0,0,200,200)
  line.addImage( line_2)
  line.visible = false

  line_3 = createSprite(1050,400,200,200)
  line_3.addImage(line_4);
  line_3.visible = false
 
  
 
}

/*
function powerUp (){
  if(frameCount % 300 == 0){
    Power_up = createSprite(200,200,200,200);
    Power_up.addAnimation("ground", Power)
    Power_up.scale = 0.3
    Power_up. x = 800
    Power_up.y = Math.round(random(50,600))
    Power_up.x = Math.round(random(525,1077))
    Power_up.velocityY = -15
  }
  
}
*/








function draw() {
  background("blue");


  Ground.velocityY = 4    



  
  Runner.x = World.mouseX
  edges = createEdgeSprites();
  Runner.collide(edges[3])
  Runner.collide(line)
  Runner.collide(line_3)
  //Edge = createEdgeSprites()
 

  if (Ground.y > 850){
    Ground.y = height/2 
   }


  //powerUp();
  drawSprites();
  
}
