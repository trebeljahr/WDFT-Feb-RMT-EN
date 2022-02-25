let bg;
let car;
let obstacles;

function preload() {
  // preload the images so that we can use them later on
  bg = loadImage("images/road.png");
  img = loadImage("images/car.png");
}

function setup() {
  // create canvas and attach to the game-board div
  const canvas = createCanvas(500, window.innerHeight);
  canvas.parent("game-board");
  // stop the loop so that the game doesn't start playing in the background
  noLoop();

  // init our car and obstacles
  car = new Car(img);
  obstacles = new Obstacles();
}

function draw() {
  background(bg);
  // draw our car and update it's position based on it's speed and player input
  car.move();
  car.draw();
  // do the same for obstacles, we do the draws inside the update to not loop over
  // obstacles.array multiple times
  obstacles.update();
  // after updates are done, check for collisions between car and obstacle,
  // if any occured, toggleGameOver
  if (car.collidesWith(obstacles)) {
    toggleGameOver();
  }
}

function toggleGameOver() {
  // stop the draw loop
  noLoop();

  // change the CSS so that the game over screen shows and the board hides
  const gameOverElement = document.querySelector(".game-over");
  gameOverElement.style.display = "flex";
  const gameBoardElement = document.getElementById("game-board");
  gameBoardElement.style.display = "none";
  // also update the game score element on the game over screen with the final score
  const scoreElement = document.querySelector(".game-over span");
  scoreElement.innerText = obstacles.score;

  // reset the game state to start from fresh again
  car = new Car(img);
  obstacles = new Obstacles();
}

window.onload = () => {
  // wire up the start/restart buttons to use the startGame function
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  document.getElementById("restart-button").onclick = () => {
    startGame();
  };

  function startGame() {
    // change the css, hide both game-intro and game-over screen, so that
    // we can use this function both to start/restart
    const gameIntroElement = document.querySelector(".game-intro");
    gameIntroElement.style.display = "none";
    const gameOverElement = document.querySelector(".game-over");
    gameOverElement.style.display = "none";
    // show the board
    const gameBoardElement = document.getElementById("game-board");
    gameBoardElement.style.display = "flex";
    // and start the draw() loop from p5
    loop();
  }
};
