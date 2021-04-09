var tom, jerry, garden;
var tomImage, jerryImage, gardenImage, tomRunningImage, jerryCheeseImage, jerrylaughImage, jerrycaughtImage, tomcaughtImage;
function preload() {
    tomRunningImage = loadAnimation("images/tomThree.png","images/tomTwo.png");
    
    jerryCheeseImage = loadImage("images/jerryOne.png");
    jerrylaughImage = loadImage("images/jerryThree.png");
    jerrycaughtImage = loadImage("images/jerryTwo.png");
    gardenImage = loadImage("images/garden.png");
    tomImage = loadImage("images/tomOne.png");
    tomcaughtImage = loadImage("images/tomFour.png");
    jerryImage = loadImage("images/jerryFour.png");
}

function setup(){
    
    createCanvas(1000,800);
    garden = createSprite(500,400,20,20);
    garden.addImage(gardenImage);
    garden.scale = 2;
    tom = createSprite(400,400,20,20);
    tom.addImage(tomImage);
    tom.scale = 0.1;

    jerry = createSprite(900,400,20,20);
    jerry.addImage(jerryImage);
    jerry.scale = 0.1;
    tom.debug = true;
    jerry.debug = true;
    
}

function draw() {

    background(255);
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2 && jerry.x - tom.x < tom.width/2 + jerry.width/2 && tom.y - jerry.y < tom.height/2 + jerry.height/2 && jerry.y - tom.y < tom.height/2 + jerry.height/2 ){
        jerry.addImage(jerrycaughtImage);
        tom.addImage(tomcaughtImage);
    }
    else{
        jerry.addImage(jerryImage);
        tom.addImage(tomImage);
    }

    
    
    keyPressed();
    drawSprites();
    
}


function keyPressed(){
    tom.velocityX = 0;
    tom.velocityY = 0;
    jerry.velocityX = 0;
    jerry.velocityY = 0;
if(keyDown("right")){
    tom.velocityX = 5;
    jerry.addImage(jerryCheeseImage);
    tom.addAnimation("running", tomRunningImage);
}
else{
    jerry.addImage(jerryImage);
    tom.addImage(tomImage);
}
if(keyDown("left")){
    tom.velocityX = -5;
    jerry.addImage(jerryCheeseImage);
    tom.changeAnimation("running", tomRunningImage);
}
else{
    jerry.addImage(jerryImage);
    tom.addImage(tomImage);
}
if(keyDown("up")){
    tom.velocityY = -5;
    jerry.addImage(jerryCheeseImage);
    tom.changeAnimation("running", tomRunningImage);
}
else{
    jerry.addImage(jerryImage);
    tom.addImage(tomImage);
}
if(keyDown("down")){
    tom.velocityY = 5;
    jerry.addImage(jerryCheeseImage);
    tom.changeAnimation("running", tomRunningImage);
}
else{
    jerry.addImage(jerryImage);
    tom.addImage(tomImage);
}


}
