function setup() {
	// Get ground texture by its descriptive name 
	groundTextureMap = nameTextures();
	groundTextureName = groundTextureMap.get("grass-light-none");

	groundTiles = resources["tiles"].textures;
	/* a tilingSprite.
	   It's good for just repeating a tile indefinitely,
	   but we want to paint a background scene. */
	ground = new tilingSprite(groundTiles[groundTextureName], 512, 512);
	ground.position.x = 0;
	ground.position.y = 0;
	ground.tilePosition.x = 0;
	ground.tilePosition.y = 0;
	app.stage.addChild(ground);

	// Get character by its descriptive name
	spriteMap = nameSprites();
	spriteName = spriteMap.get("handsome-still-forward");

	// add our player
	characters = resources["characters"].textures;
	handsome = new Sprite(characters[spriteName]);
	handsome.y = 256;
	handsome.vx = 0;
	handsome.vy = 0;
	app.stage.addChild(handsome);

	// establish key commands and logic
	keyLogic();

	// Set the game state
	state = play;

	// Start the game loop
	app.ticker.add((delta) => gameLoop(delta));
}

function addSprite(map,textureString, resourceString, x = 0, y = 0, vx = 0, vy = 0) {
	let textureName = map.get(textureString);
	let textures = resources[resourceString].textures;

	img = new Sprite(textures[textureName]);
	img.x = x;
	img.y = y;
	img.vx = vx;
	img.vy = vy;
	app.stage.addChild(img);

}

function keyLogic() {
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
}