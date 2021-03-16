class Game {
    constructor(){

    }
    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value", function(data){
            gameState=data.val();

        })
    }
    update(state){
        database.ref('/').update({
         gameState:state   
        })
    }
    async start(){

        if(gameState==0){
            player=new Player();
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){ 
                playerCount=playerCountref.val();
                player.getCount();
             }
            
            form=new Form();
            form.display();
            
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Started",220,100);
        Player.getPlayinfo();
        console.log(allPlayers);
        if(allPlayers!==undefined){
            var dp = 130;
            for( var p in allPlayers){
                if(p=="player"+ player.index){
                    fill("blue");
                } else{
                    fill("pink");
                }
                dp+= 20;
                textSize(15);
                text(allPlayers[p].name +" : "+ allPlayers[p].distance,120,dp)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance+= 50;
            player.update();

        }
    }
}