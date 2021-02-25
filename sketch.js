var tom, tomImage, tomRunning, tomLost;
var jerry, jerryImage, jerryTeasing, jerryWinking;
var background, backgroundImage;

function preload() {
    //load the images here
    tomImage=loadImage("images/cat1.png");
    jerryImage=loadImage("images/mouse2.png");
    backgroundImage=loadImage("images/garden.png");
    tomRunning=loadAnimation("images/cat2.png", "images/cat3.png");
    jerryTeasing=loadImage("images/mouse3.png");
    jerryWinking=loadImage("images/mouse4.png");
    tomLost=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    background=createSprite(200, 200);
    background.addImage(backgroundImage);

    tom=createSprite(550, 450, 200, 100);
    tom.addImage(tomImage);
    tom.scale = 0.15;

    jerry=createSprite(120, 450, 20, 10);
    jerry.addImage(jerryImage);
    jerry.scale = 0.1;
}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<(tom.width + jerry.width)/2) {
        tom.velocityX=0;
        tom.addImage("tomLost", tomLost);
        tom.changeImage("tomLost");

        jerry.addImage("jerryWinking", jerryWinking);
        jerry.changeImage("jerryWinking");
    }else
    {
        jerry.changeImage("jerryImage");
        tom.changeImage("tomImage");
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      tom.velocityX=-3;
      tom.addAnimation("tomRunning", tomRunning);
      tom.changeAnimation("tomRunning");

      jerry.addImage("jerryTeasing", jerryTeasing);
      jerry.changeImage("jerryTeasing");
  }

}
