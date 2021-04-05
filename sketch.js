var canvas,background;
var together;
var tom, tomIMG1,tomIMG2,tomIMG3;
var jerry,jerryIMG1,jerryIMG2,jerryIMG3;

function preload() {
    //load the images here
    background = loadImage("images/garden.png");
    tomIMG1 = loadAnimation("images/cat1.png");
    tomIMG2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomIMG3 = loadAnimation("images/cat4.png");
    jerryIMG1 = loadAnimation("images/mouse1.png");
    jerryIMG2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryIMG3 = loadAnimation("images/mouse4.png");  
} 

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870,600);
    tom.addAnimation("tomSitting",tomIMG1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry = addAnimation("jerryStanding",jerryIMG1);
    jarry.scale = 0.15;
}

function draw() {

    background(background);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
tom.velocityX = 0;
tom.addAnimation("tomLastImage",tomIMG3);
tom.x = 300;
tom.scale = 0.2;
tom.changeAnimation("tomLastImage");
jerry.addAnimation("jerryLastImage",jerryIMG3);
jerry.scale = 0.15;
jerry.changeAnimation("jerryLastImage");
    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
     tom.velocityX = -5;
     tom.addAnimation("tomWalking",tomIMG2);
     tom.changeAnimation("tomWalking");   

     jerry.addAnimation("jerryTeasing",jerryIMG2);
     jerry.framedelay = 25;
     jerry.changeAnimation("jerryTeasing");
}
}