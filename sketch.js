var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY=4
path.scale=1.2




//Criando menino que corre 

boy=createSprite(180,340,20,20)
boy.addAnimation("menino",boyImg)
boy.scale=0.1


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rigthBoundary=createSprite(400,0,100,800);
rigthBoundary.visible = false;



}


function draw() {
background(0);
path.velocityY = 4;
boy.x=World.mouseX
// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(rigthBoundary);
boy.collide(leftBoundary);

 //Reiniciar o fundo
 if(path.y > 400 ){
  path.y = height/2; }



 drawSprites();

 }




