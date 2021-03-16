class Form{
    constructor(){
        this.title=createElement('h2')
        this.input= createInput("name")
        this.button =createButton('play');
        this.greeting=createElement('h3');
    }
    display(){
        
       this. title.html ("Car Racing Game ");
       this.title.position(130,0);
       this.input.position(130,160);
       this.button.position(250,200);
       this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
            playerCount+=1
            player.name=this.input.value();
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello!"+name);
            this.greeting.position(130,160);
            
        })
    } 
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        
    }
}

