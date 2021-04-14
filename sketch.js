var canvas, backgroundImg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var header;

var sImg1, sImg2, track, trackImg, groundImg; 
var scooters, scooter1, scooter2;

function preload() {
  sImg1 = loadImage("bike2.png");
  sImg2 = loadImage("bike3.png");
  trackImg = loadImage("track.jpg");
  groundImg = loadImage("ground.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
    if (playerCount === 2) {
      game.update(1);
    }
    if (gameState === 1) {
      clear();
      game.play();
    }

    if (gameState === 2) {
      game.over();
    }
}