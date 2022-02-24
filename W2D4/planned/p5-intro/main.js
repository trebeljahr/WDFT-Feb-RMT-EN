class Game {
	constructor() {
		this.player = new Player()
	}
	preload() {
		this.player.image = loadImage('gustavo.png')
	}
	draw() {
		clear()
		this.player.draw()
	}
}

class Player {
	constructor() {
		this.x = 500;
		this.y = 500;
		this.width = 100;
		this.height = 100;
		this.image
	}
	draw() {
		image(this.image, this.x, this.y, this.width, this.height)
		// if you keep 'd' (keyCode 68)  pressed the player keeps moving to the right

		if (keyIsDown(68)) {
			this.moveRight()
		}
	}
	moveRight() {
		this.x += 10
	}
	moveLeft() {
		this.x -= 10
	}
	moveUp() {
		this.y -= 10
	}
	moveDown() {
		this.y += 10
	}
}

const game = new Game()

function preload() {
	game.preload();
}
function setup() {
	createCanvas(1000, 600)
}
function draw() {
	game.draw()
}
function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		game.player.moveRight();
	}
	if (keyCode === 37) {
		// move the player to the left
		game.player.moveLeft();
	}
	if (keyCode === 38) {
		console.log(keyCode)
		// move the player up
		game.player.moveUp();
	}
	if (keyCode === 40) {
		// move the player down
		game.player.moveDown();
	}
}