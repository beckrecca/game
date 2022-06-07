function setup() {
	// Get our mapped out images - sprites and ground textures
	groundTextureMap = nameTextures();
	spriteMap = nameSprites();

	// Only bother with this if it's the main gamespace
	if (scene == "main") {
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

		// Let's add our handsome player to the center
		handsome = addSprite(spriteMap, "handsome-still-forward", "characters", 256, 256);

		// establish key commands and logic
		keyLogic();
	}
	else if (scene == "scenebuilder") {
		const sceneTextures = resources["tiles"].textures;
		const s = new Scene(512,512,"tiles-7.png");
		s.loadScene(s.practiceScene());
		s.setScene(sceneTextures);
		/*
		sand = new Sprite(textures[groundTextureMap.get("desert-light-none")]);
		dirttexture = textures[groundTextureMap.get("dirt-light-TL")];
		grasstexture = textures[groundTextureMap.get("grass-light-BR")];
		boop = false;
		sand.interactive = "true";
		sand.on('pointertap', () => {
		    boop = !boop;
		    if (boop) {
		        sand.texture = dirttexture;
		    } else {
		        sand.texture = grasstexture;
		    }
		});
		console.log(sand.texture.textureCacheIds[0]);
		app.stage.addChild(sand);
		dirt = new Sprite(dirttexture);
		dirt.y = 32;
		app.stage.addChild(dirt);
		*/
		// Add save button
		saveButton = new Sprite(resources["characters"].textures[spriteMap.get("snoodle-moving-alt-left")]);
		saveButton.interactive = "true";
		saveButton.on('pointertap', () => {
			console.log(s.getJSON());
		});
		saveButton.y = 512;
		app.stage.addChild(saveButton);

	}

	// Set the game state
	state = play;

	// Start the game loop
	app.ticker.add((delta) => gameLoop(delta));
}

function addSprite(map,textureString, resourceString, x = 0, y = 0, vx = 0, vy = 0) {
	// Get the name of the texture for this image from our image map
	let textureName = map.get(textureString);
	// Get the texture from the image we loaded into resources
	let textures = resources[resourceString].textures;

	// Create a new sprite from this texture
	img = new Sprite(textures[textureName]);
	img.x = x;
	img.y = y;
	img.vx = vx;
	img.vy = vy;
	app.stage.addChild(img);
	return img;
}

/*
*	Listens for keyboard events and moves our handsome player in response.
*/
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
	    console.log(handsome.texture);
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

