class Story{
constructor(){
this.heading1= createElement("h1")
this.greeting=createElement("h2")
this.story=createDiv("Conar is a 26 year old guy who loves nature,he likes gardening and and he has lots of pets.Now he knows that we humans are mmaking a mess on this earth and imbalancing the nature.Now you player has to decide to take a job and work as conar or kill those who bring imbalance to the nature.")
this.button=createButton('PLAY')
}
hide(){
    this.heading1.hide();
    this.greeting.hide();
    this.story.hide();
    this.button.hide();
   
}
display(){
    
    this.heading1.html("MONSTER")
    this.heading1.position(windowWidth/2-30,0)
    this.heading1.style('color',"red")
    this.heading1.style('font-size','90px')

     
    this.greeting.html("welcome")
    this.greeting.position(windowWidth/2-20,windowHeight/2-100)
    this.greeting.style('font-size','60px')

    
    this.story.position(10,windowHeight/2+30)

    this.button.position(10,windowHeight/2+60)
  //this.story.style
  this.button.mousePressed(()=>{
    gameState=1
    console.log(gameState)
  })
}
}