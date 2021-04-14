class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });

    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        scooter1 = createSprite(100,200);
        scooter1.addImage(sImg1);
        scooter1.scale = 0.3;

        scooter2 = createSprite(100,200);
        scooter2.addImage(sImg2);
        scooter2.scale = 0.3;

        scooters = [scooter1,scooter2];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if (allPlayers !== undefined) {
            background(rgb(29,159,249));
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            
            var index = 0;

            var x = 220;
            var y;

            for (var plr in allPlayers) {
                index = index + 1;

                x = x + 220;

                y = displayHeight - allPlayers[plr].distance;
                scooters[index - 1].x = x;
                scooters[index - 1].y = y;

                if (index === player.index) {
                    scooters[index - 1].shapeColor = "blue";
                    camera.position.x = displayWidth/2;
                    camera.position.y = scooters[index - 1].y;
                }
            }

            if (keyIsDown(UP_ARROW) && player.index !== null) {
                player.distance += 10;
                player.update();
            }

            if (player.distance > 4080) {
                gameState = 2;
            }

            drawSprites();
        }
    }

    over(){

        // creating an empty div
        //box = createDiv("");
        //box.style("background-color","lightblue");
        //box.position(displayWidth/2,50);
        
        // creating header
        header = createElement('h2');
        header.html('SEE LOCAL STORAGE');
        header.style("color","red");
        header.position(displayWidth/1.5,50);
        

        localStorage["ABOUT GAME"] = "SCOOTER RACE HAS ENDED";
    }
}