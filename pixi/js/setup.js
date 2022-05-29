function setup() {
	// try to add a tile floor
	tiles = resources["assets/tiles.json"].textures;
	floor = new tilingSprite(tiles["tiles-11.png"], 512, 512);
	floor.position.x = 0;
	floor.position.y = 0;
	floor.tilePosition.x = 0;
	floor.tilePosition.y = 0;
	app.stage.addChild(floor);

	// add our sprite
	id = resources["assets/characters.json"].textures;
	handsome = new Sprite(id["characters-4.png"]);
	handsome.y = 256;
	handsome.vx = 0;
	handsome.vy = 0;
	app.stage.addChild(handsome);

	// Create keyboard objects and logic
	const left = keyboard("ArrowLeft"),
	up = keyboard("ArrowUp"),
	right = keyboard("ArrowRight"),
	down = keyboard("ArrowDown");

  	//Left arrow key `press` method
  	left.press = () => {
	    //Change the handsome's velocity when the key is pressed
	    handsome.vx = -5;
	    handsome.vy = 0;
	};

  	//Left arrow key `release` method
    left.release = () => {
	    //If the left arrow has been released, and the right arrow isn't down,
	    //and the handsome isn't moving vertically:
	    //Stop the handsome
	    if (!right.isDown && handsome.vy === 0) {
	    	handsome.vx = 0;
	    }
	};

	//Up
	up.press = () => {
			handsome.vy = -5;
			handsome.vx = 0;
		};
	up.release = () => {
		if (!down.isDown && handsome.vx === 0) {
			handsome.vy = 0;
		}
	};

	//Right
	right.press = () => {
			handsome.vx = 5;
			handsome.vy = 0;
		};
	right.release = () => {
		if (!left.isDown && handsome.vy === 0) {
			handsome.vx = 0;
		}
	};

	//Down
	down.press = () => {
		handsome.vy = 5;
		handsome.vx = 0;
	};
	down.release = () => {
		if (!up.isDown && handsome.vx === 0) {
			handsome.vy = 0;
		}
	};

	// Set the game state
	state = play;

	// Start the game loop
	app.ticker.add((delta) => gameLoop(delta));
}