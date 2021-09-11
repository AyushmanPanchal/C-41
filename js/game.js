class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })

    }

    update(state){
        database.ref('/').update({
            gameState: state

        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();

            }
            form = new Form();
            form.display()

        }
        car1 = createSprite(100, 200);
        car1.addImage(c1Img)
        car2 = createSprite(300, 200);
        car2.addImage(c2Img)
        car3 = createSprite(500, 200);
        car3.addImage(c3Img)
        car4 = createSprite(700, 200);
        car4.addImage(c4Img)
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers !== undefined){
            background("green")
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)

            //var displayPosition = 30;
            var index = 0;
            var x = 130
           var y 
            for(var plr in allPlayers){
                index = index+1;
                x = x+150;
                y = displayHeight-allPlayers[plr].distance
                cars[index-1].x = x;
                cars[index-1].y = y;
            
            if(index === player.index){
                stroke(10);
                fill("red")
                ellipse(x, y, 60, 60)

                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y

            }
    

            }
           
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+= 10;
            player.update();

        }
        if(player.distance>3860){
            gameState = 2
            player.rank += 1
            Player.updateCarsAtEnd(player.rank)

        }
        drawSprites();


    }
    end(){
        console.log("Game Ended")
        console.log(player.rank)
    } 
}   

