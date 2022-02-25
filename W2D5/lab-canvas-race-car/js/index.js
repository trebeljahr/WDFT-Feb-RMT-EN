let bg;
let car;
let obstacles;

function preload() {
  bg = loadImage("images/road.png");
  img = loadImage("images/car.png");
}

function setup() {
  const canvas = createCanvas(500, window.innerHeight);
  canvas.parent("game-board");
  noLoop();

  car = new Car(img);
  obstacles = new Obstacles();
}

function draw() {
  background(bg);
  car.move();
  car.draw();
  obstacles.update();
  if (car.collidesWith(obstacles)) {
    toggleGameOver();
  }
}

function toggleGameOver() {
  noLoop();

  const gameOverElement = document.querySelector(".game-over");
  gameOverElement.style.display = "flex";
  const gameBoardElement = document.getElementById("game-board");
  gameBoardElement.style.display = "none";
  const scoreElement = document.querySelector(".game-over span");
  scoreElement.innerText = obstacles.score;

  // reset the game state to start from fresh
  car = new Car(img);
  obstacles = new Obstacles();
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  document.getElementById("restart-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const gameIntroElement = document.querySelector(".game-intro");
    gameIntroElement.style.display = "none";
    const gameOverElement = document.querySelector(".game-over");
    gameOverElement.style.display = "none";
    const gameBoardElement = document.getElementById("game-board");
    gameBoardElement.style.display = "flex";
    loop();
  }
};
