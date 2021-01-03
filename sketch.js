var story;
var conar;
var gameState=0;




function setup() {
  createCanvas(windowWidth,windowHeight);
  story=new Story()
  conar=new Conar(windowWidth/2,windowHeight-30)
  
  
}

function draw() {
  background(255,255,255); 
  if(gameState===0){
    story.display();
  }
  if(gameState===1){
    conar.body.visible=1;
    story.hide();
    if(keyDown(LEFT_ARROW)){
      conar. direction(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      conar. direction(1,0);
  }
  else if(keyDown(UP_ARROW)){
    conar. direction(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    conar. direction(0,+1);
  }
    var tree=[];
    var enemy=[];
    for(var i=0;i<8;i++){
      tree[i]=new Tree(30+x,500)
      var x=225;
     
    }
    for(var j=0;j<11;j++){
      enemy[i]=new Enemeies(30+x,600)
      var x=225;
      
    }
    for(var j=0;j<11;j++){
      if(conar.overLap(enemy[j])){
        var x
        var y
        x=enemy[j].body.x;
        y=enemy[j].body.y;
        enemy[j].body=tree[j].body;
       enemy[j].body.x=x;
       enemy[j].body.y=y;
      }
    }
    drawSprites() 
  }
 
}

function touchStarted() {
  if (gameState === 0) {
    gameState = 1;
  } else {
    gameState = 0;
  }
}

