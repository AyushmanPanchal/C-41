var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers, distance = 0;
var car1, car2, car3, car4, cars;
var track, trackImg, c1Img, c2Img, c3Img, c4Img
var canvas


function preload(){
    track = loadImage("Images/track.png")
    c1Img = loadImage("Images/car1.png")
    c2Img = loadImage("Images/car2.png")
    c3Img = loadImage("Images/car3.png")
    c4Img = loadImage("Images/car4.png")


}

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);

    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
    
}

function draw(){
    if(playerCount === 4){
        game.update(1)

    }
   if(gameState === 1){
       clear()
       game.play()
   }
   if(gameState === 2){
       game.end()

   }

    }
   
    



