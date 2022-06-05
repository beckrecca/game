function setup() {
	// Get our mapped out images - turns json file frames into readable names
	backgroundMap = nameBackgrounds(); // background resource
	buildTextureMap = nameTextures(); // build resource
	spriteMap = nameSprites(); // characters resource
	interactMap = nameInteractiveObjects(); // interactives resource
	// not necessary for environment, paths, liquids

	// Initialize sprite resources
	backgroundTextures = resources["background"].textures;
	buildTextures = resources["build"].textures;
	characterTextures = resources["characters"].textures;
	decorTextures = resources["environment"].textures;
	interactiveTextures = resources["interactives"].textures;
	liquidTextures = resources["liquids"].textures;
	pathTextures = resources["paths"].textures;

	// Create a background for our map world
	let background = quickBackground();
	scene = quickBackgroundHelper(background, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	// Let's add our handsome player to the center
	handsome = createSprite(characterTextures, spriteMap.get("handsome-still-forward"), 7, 7);
	scene.addChild(handsome);

	// Let's add some details to this world
	decorContainer = new Container();
	treeTexture = decorTextures['tree.png'];
	numTrees = 5;
	for (let i = 0; i < 3; i ++) {
		treeContainer = new quickSpriteRepeater(treeTexture, numTrees, i);
		decorContainer.addChild(treeContainer);
		numTrees--;
	}
	scene.addChild(decorContainer);

	// establish key commands and logic
	keyLogic(characterTextures);
	
	// Set the game state
	state = play;

	// Start the game loop
	app.ticker.add((delta) => gameLoop(delta));
}

function createSprite(textures, textureName, x = 0, y = 0, vx = 0, vy = 0) {
	img = new Sprite(textures[textureName]);
	img.x = x * 32;
	img.y = y * 32;
	img.vx = vx;
	img.vy = vy;
	return img;
}

function quickCoord(n) {
	return n*32;
}

/*
*	Listens for keyboard events and moves/animates our handsome player in response.
*/
function keyLogic(textures) {
	// Create keyboard objects and logic
	const left = keyboard("ArrowLeft"),
	up = keyboard("ArrowUp"),
	right = keyboard("ArrowRight"),
	down = keyboard("ArrowDown");

	// handsome's textures
	const moveRight = spriteMap.get("handsome-moving-right");
	const moveRightAlt = spriteMap.get("handsome-moving-alt-right");
	const moveLeft = spriteMap.get("handsome-moving-left");
	const moveLeftAlt = spriteMap.get("handsome-moving-alt-left");
	const moveUp = spriteMap.get("handsome-moving-back");
	const moveUpAlt = spriteMap.get("handsome-moving-alt-back");
	const moveDown = spriteMap.get("handsome-moving-forward");
	const moveDownAlt = spriteMap.get("handsome-moving-alt-forward");
	const still = spriteMap.get("handsome-still-forward");
	movingTextures = textures;

	let leftInterval, rightInterval, upInterval, downInterval;


  	//Left arrow key `press` method
  	left.press = () => {
	    //Change the handsome's velocity when the key is pressed
	    handsome.vx = -3;
	    handsome.vy = 0;
	    handsome.texture = movingTextures[moveLeft];
	    alt = false;
	    leftInterval = setInterval(function() {
	    	alt = !alt;
	    	if (alt) {
	    		handsome.texture = movingTextures[moveLeftAlt];
	    	}
	    	else {
	    		handsome.texture = movingTextures[moveLeft];
	    	}
	    }, 250);
	    clearInterval(rightInterval);
	    clearInterval(downInterval);
	    clearInterval(upInterval);
	};

  	//Left arrow key `release` method
    left.release = () => {
	    //If the left arrow has been released, and the right arrow isn't down,
	    //and the handsome isn't moving vertically:
	    //Stop the handsome
	    if (!right.isDown && handsome.vy === 0) {
	    	handsome.vx = 0;
	    	handsome.texture = movingTextures[still];
	    	clearInterval(leftInterval);
	    }
	};

	//Up
	up.press = () => {
			handsome.vy = -3;
			handsome.vx = 0;
			handsome.texture = movingTextures[moveUp];
			alt = false;
		    upInterval = setInterval(function() {
		    	alt = !alt;
		    	if (alt) {
		    		handsome.texture = movingTextures[moveUpAlt];
		    	}
		    	else {
		    		handsome.texture = movingTextures[moveUp];
		    	}
			}, 250);
			clearInterval(rightInterval);
	    	clearInterval(downInterval);
	    	clearInterval(leftInterval);
		};
	up.release = () => {
		if (!down.isDown && handsome.vx === 0) {
			handsome.vy = 0;
			handsome.texture = movingTextures[still];
			clearInterval(upInterval);
		}
	};

	//Right
	right.press = () => {
			handsome.vx = 3;
			handsome.vy = 0;
			handsome.texture = movingTextures[moveRight];
			alt = false;
		    rightInterval = setInterval(function() {
		    	alt = !alt;
		    	if (alt) {
		    		handsome.texture = movingTextures[moveRightAlt];
		    	}
		    	else {
		    		handsome.texture = movingTextures[moveRight];
		    	}
			}, 250);
			clearInterval(leftInterval);
	    	clearInterval(downInterval);
	    	clearInterval(upInterval);
		};
	right.release = () => {
		if (!left.isDown && handsome.vy === 0) {
			handsome.vx = 0;
			handsome.texture = movingTextures[still];
			clearInterval(rightInterval);
		}
	};

	//Down
	down.press = () => {
		handsome.vy = 3;
		handsome.vx = 0;
		handsome.texture = movingTextures[moveDown];
		alt = false;
	    downInterval = setInterval(function() {
	    	alt = !alt;
	    	if (alt) {
	    		handsome.texture = movingTextures[moveDownAlt];
	    	}
	    	else {
	    		handsome.texture = movingTextures[moveDown];
	    	}
		}, 250);
		clearInterval(rightInterval);
	    clearInterval(leftInterval);
	    clearInterval(upInterval);
	};
	down.release = () => {
		if (!up.isDown && handsome.vx === 0) {
			handsome.vy = 0;
			handsome.texture = movingTextures[still];
			clearInterval(downInterval);
		}
	};
}