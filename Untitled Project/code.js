//declaring variables
var points = 0;
var clock = 0;
var punishments = 0;
//button to start the game 
onEvent("contButton", "click", function( ) {
  setScreen("playScreen");
});
//move cat and bird to random spots
setPosition("catIcon", randomNumber(1, 250), randomNumber(1, 300), 50, 50);
setPosition("birdieIcon", randomNumber(1, 250), randomNumber(1, 300), 200, 200);
//get point when user clicks birdie, runs scorekeeper function and changes text
onEvent("birdieIcon", "click", function( ) {
  points = points+1;
  scoreKeeper(points);
  setText("points", points*5);
  setText("endGameText", "Score: "+(points*5-punishments*10));
});
//add punishments and run functions when cat is clicked
onEvent("catIcon", "click", function( ) {
  punishments = punishments+1;
  penaltyTimer(punishments);
  scoreKeeper(points);
});
//add punishments and run functions when hunter is clicked
onEvent("hunterIcon", "click", function( ) {
  punishments = punishments+1;
  penaltyTimer(punishments);
  scoreKeeper(points);
});
//scoreKeeper changes spot and size of images based on how many times the 
//user has hit the birdie
function scoreKeeper(clickNumber) {
  if (clickNumber > 15) {
    setScreen("winScreen");
  } else if ((clickNumber>10)) {
    setPosition("catIcon", randomNumber(1, 250), randomNumber(1, 300), 200, 200);
    setPosition("birdieIcon", randomNumber(1, 250), randomNumber(1, 300), 100, 100);
    showElement("hunterIcon");
    setPosition("hunterIcon", randomNumber(1, 250), randomNumber(1, 300), 150, 150);
  } else if ((clickNumber>5)) {
    setPosition("catIcon", randomNumber(1, 250), randomNumber(1, 300), 150, 150);
    setPosition("birdieIcon", randomNumber(1, 250), randomNumber(1, 300), 150, 150);
  } else {
    setPosition("catIcon", randomNumber(1, 250), randomNumber(1, 300), 100, 100);
    setPosition("birdieIcon", randomNumber(1, 250), randomNumber(1, 300), 200, 200);
  }
}
//penaltyTimer adds 10 to the penalty box 
//when this function is called nothing else can run until the while loop finishes
function penaltyTimer(penaltyCount) {
  while ((clock<10*penaltyCount)) {
    clock = clock+0.01;
    setText("clock", Math.round(clock));
  }
}
