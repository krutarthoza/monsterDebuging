class Conar{
    constructor(x,y){
        this.body=createSprite(x,y,50,50)
        this.body.shapeColor='black';
        this.body.visible=0;
    }
    
     direction(x,y){
        this.body.x=this.body.x+x
        this.body.y=this.body.y+y
    }
}

