/*
*	SET (as in MOVIE SET) HELPERS
*/

function roomBackground(width, height, wallTexture = Texture.WHITE, name = "wall") {
	scene = new Container();
	// a wall
	wallContainer = new Container();
	let wallSprite = new Sprite(wallTexture);
	setPosition(wallContainer, 0, 0);
	wallSprite.width = width;
	wallSprite.height = height/4 + 10;
	wallContainer.addChild(wallSprite);
	scene.addChild(wallContainer);

	// the ground
	groundContainer = new Container();
	lowerWallSprite = new Sprite(wallTexture);
	lowerWallSprite.x = 0;
	lowerWallSprite.y = wallSprite.height;
	lowerWallSprite.width = width;
	lowerWallSprite.height = 22;
	groundContainer.addChild(lowerWallSprite);
	groundSprite = new Sprite(wallTexture);
	groundSprite.tint = 0x50C878;
	groundSprite.x = 0;
	groundSprite.y = wallSprite.height + lowerWallSprite.height;
	groundSprite.width = width;
	groundSprite.height = height - (wallSprite.height + lowerWallSprite.height);
	groundContainer.addChild(groundSprite);
	scene.addChild(groundContainer);

	// you can't climb up the wall
	if (!untreadablesArray.includes([wallContainer, name, "room"])) {
		untreadablesArray.push([wallContainer, name, "room"]);
	}

	return scene;
}

function prologueBackground() {
	// create the prologue scene
	scene = roomBackground(448, 320);
	app.stage.addChild(scene);
	scene.x = 32;
	scene.y = 32;

	// add a floor
	for (let f = 0; f < 7; f++) {
		floorTiles = quickSpriteRepeater(backgroundTextures[backgroundMap.get("wood-floor-full-06")], scene.width/32, 3.5 + f)
		scene.addChild(floorTiles);
	}

	// add a wall
	bedroomWall = new Sprite(Texture.WHITE);
	bedroomWall.tint = 0xD3AC9A;
	bedroomWall.width = scene.width;
	bedroomWall.height = 3.5*32;
	scene.addChild(bedroomWall);

	// add details
	quickSpriteAdd(itemTextures, "bookshelf.png", scene, 1.75, 3);
	quickSpriteAdd(itemTextures, "side-table.png", scene, 2.75, 3);
	quickSpriteAdd(itemTextures, "book.png", scene, 2.75, 2.75);
	// remember BED
	bed = new Sprite(decorTextures["bed.png"]);
	setPosition(bed, 4, 3);
	scene.addChild(bed);
	// everything on other side of bed
	quickSpriteAdd(itemTextures, "side-table.png", scene, 5.25, 3);
	quickSpriteAdd(itemTextures, "glass.png", scene, 5.25, 2.5);
	quickSpriteAdd(decorTextures, "dresser.png", scene, 8, 3);
	quickSpriteAdd(itemTextures, "bookshelf.png", scene, 9, 3);
	quickSpriteAdd(itemTextures, "stool.png", scene, 3, 9);
	quickSpriteAdd(itemTextures, "keyboard.png", scene, 4, 9);
	quickSpriteAdd(itemTextures, "couch.png", scene, 11, 6);

	// tv animation
	television = new Sprite(itemTextures["tv-noise-alt.png"]);
	setPosition(television, 8, 6);
	scene.addChild(television);

	tvInterval = setInterval(function () {
		n = Math.floor(Math.random() * 2);
		if (n % 2 == 0) {
			television.texture = itemTextures["tv-noise-alt.png"];
		}
		else {
			television.texture = itemTextures["tv-noise.png"];
		}
	}, 60);

	// remember special collision evens
	collidersArray.push([bed, "Handsome's Bed"]);

	return scene;
}

function barnBackground() {
	// create the barn scene
	scene = roomBackground(448, 320);
	app.stage.addChild(scene);
	scene.x = 32;
	scene.y = 32;

	// add a floor
	for (let f = 0; f < 7; f++) {
		floorTiles = quickSpriteRepeater(buildTextures[buildTextureMap.get("dirt-light-none")], scene.width/32, 3.5 + f)
		scene.addChild(floorTiles);
	}
	console.log(floorTiles.width);

	// add a wall
	barnWall = new Sprite(Texture.WHITE);
	barnWall.tint = 0x894B1D;
	barnWall.width = scene.width;
	barnWall.height = 3.5*32;
	scene.addChild(barnWall);

	// remember BED
	quickSpriteAdd(decorTextures, "sleeping-mat.png", scene, 4, 4);
	quickSpriteAdd(itemTextures, "hay-bale.png", scene, 9, 3);
	quickSpriteAdd(itemTextures, "hay-bale.png", scene, 3, 9);
	quickSpriteAdd(itemTextures, "hay-bale.png", scene, 10, 3);

	// add sheeps
	sheepTexture = ["sheep-still-forward.png", "sheep-still-back.png", "sheep-moving-alt-back.png", "sheep-moving-left.png", "sheep-still-left.png", "sheep-moving-alt-left.png", "sheep-moving-right.png", "sheep-still-right.png", "sheep-moving-alt-right.png"];
	let numberOfSheeps = 25,
		spacing = 32,
		speed = 1,
		direction = 1;

	for (let m = 0; m < numberOfSheeps; m++) {
		r = Math.floor(Math.random() * sheepTexture.length);
		// Make a sheep
		let sheep = new Sprite(specialTextures[sheepTexture[r]]);
		let x = spacing * m;
		if (x > scene.width - 32) {
			x += 32;
		}
		let y = Math.floor(Math.random() * (scene.height - scene.height/2 + 1) + scene.height/2) - sheep.height;
		// Set position
		sheep.x = x;
		sheep.y = y;

		sheep.vy = speed * direction;
		direction *= -1;
		sheeps.push(sheep);
		scene.addChild(sheep);
	}

	// add a barn door
	barnDoorContainer = new Container;
	quickSpriteAdd(interactiveTextures, interactMap.get("door-middle-whole"), barnDoorContainer);
	setPosition(barnDoorContainer, 1, 2.75);
	scene.addChild(barnDoorContainer);
	// notice if handsome walks into it
	collidersArray.push([barnDoorContainer, "Barn Door Interior"]);

	return scene;
}

function dreamBackground() {
	// create the dream scene
	skyContainer = new Container;
	sky = new Sprite(Texture.WHITE);
	sky.tint = 0x2B2F6F;
	sky.width = 448;
	sky.height = 320;
	skyContainer.x = 32;
	skyContainer.y = 32;
	skyContainer.addChild(sky);
	app.stage.addChild(skyContainer);
	return skyContainer;
}

function prologue() {
	// exit any other scene
	northWestRegionScene.visible = false;
	northEastRegionScene.visible = false;
	centralRegionScene.visible = false;
	southWestRegionScene.visible = false;
	worldScene.visible = false;

	// show this scene
	prologueScene.visible = true;

	// add our player
	tempPlayer = new Sprite(specialTextures["handsome-neutral.png"]);
	setPosition(tempPlayer, 8, 5);
	prologueScene.addChild(tempPlayer);

	// update our text position
	message.text = "......";
	message.x = (prologueScene.width/2) - (message.width/2) + 32;
	message.y = prologueScene.height + 32;

	// as a workaround for animations being bunk, increase t every frame
	t++;
	if (t > 50 && t < 100) {
		tempPlayer.texture = specialTextures["handsome-sleepy.png"];
	}
	if (t >= 100 && t < 200) {
		tempPlayer.texture = specialTextures["handsome-neutral.png"];
		message.text = "I'm so sleepy...";
		message.x = (prologueScene.width/2) - (message.width/2) + 32;
	}
	if (t >= 200 && t < 275) {
		tempPlayer.texture = specialTextures["handsome-blink.png"];
		message.text = "I played too many video games...";
		message.x = (prologueScene.width/2) - (message.width/2) + 32;
	}
	if (t >= 275 && t < 375) {
		tempPlayer.texture = specialTextures["handsome-neutral.png"];
		message.text = "I played too many video games...";
		message.x = (prologueScene.width/2) - (message.width/2) + 32;
	}
	if (t >= 375 && t < 475) {
		tempPlayer.texture = specialTextures["handsome-yawn.png"];
	}
	if (t >= 475 & t < 575) {
		tempPlayer.texture = specialTextures["handsome-neutral.png"];
		message.text = "Time to go to bed.";
		message.x = (prologueScene.width/2) - (message.width/2) + 32;
		quickSpriteAdd(itemTextures, "tv-off.png", prologueScene, 8, 6);
	}
	if (t >= 575) {
		message.text = "";
		setPosition(handsome, 8, 5);
		state = goToBed;
	}
}

function goToBed() {
	// exit any other scene
	northWestRegionScene.visible = false;
	northEastRegionScene.visible = false;
	centralRegionScene.visible = false;
	southWestRegionScene.visible = false;
	worldScene.visible = false;

	// Cover up our unstoppable tempPlayer
	quickSpriteAdd(itemTextures, "tv-dark.png", prologueScene, 8, 6);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("wood-floor-full-06"), prologueScene, 8, 5);
	prologueScene.addChild(handsome);
	containPlayer(handsome);

	// listen to the player interacting with treadable colliders
	collidersArray.forEach(function(c) {
		container = c[0];
		name = c[1];
		let happening = collisionDetector(handsome, container, name);
		if (happening == "Handsome's Bed") {
			setPosition(handsome, 4, 3.5);
			handsome.texture = specialTextures["handsome-blink.png"];
			blanket = new Sprite(Texture.WHITE);
			blanket.tint = 0x567CD2;
			blanket.width = 16;
			blanket.height = 16;
			setPosition(blanket, 4.25, 4.10);
			prologueScene.addChild(blanket);
			message.text = "< Enter >"
			message.x = (prologueScene.width/2) - (message.width/2) + 32;
			// Fade out on Enter
			keyboard("Enter").press = () => {
				prologueScene.alpha -= .005;
				if (prologueScene.alpha < 0) {
					handsome.texture = characterTextures[spriteMap.get("handsome-still-forward")];
					state = sleeplayer;
				}
			}
		}
	});

	// don't climb up the wall
	untreadablesArray.forEach(function(u) {
		if (u[2] == "room") {
			contained = u[0];
			name = u[1];
			let place = worldMapNavigator(handsome, contained, name);
		}
	});
}

function barn() {
	// exit any other scene
	northWestRegionScene.visible = false;
	northEastRegionScene.visible = false;
	centralRegionScene.visible = false;
	southWestRegionScene.visible = false;
	worldScene.visible = false;
	prologueScene.visible = false;

	// get the sheeps ready
	barnScene.visible = true;

	// add handsome
	barnScene.addChild(handsome);
	containPlayer(handsome);

	sheeps.forEach(function(sheep) {
		sheepTexture = ["sheep-still-forward.png", "sheep-still-back.png", "sheep-moving-alt-back.png", "sheep-moving-left.png", "sheep-still-left.png", "sheep-moving-alt-left.png", "sheep-moving-right.png", "sheep-still-right.png", "sheep-moving-alt-right.png"];
		// move the sheep
		sheep.y += sheep.vy;
		// don't let the sheep move outside the play area
		if (sheep.y > 300 || sheep.y < 132) {
			sheep.vy *= -1;
			// change the texture randomly
			r = Math.floor(Math.random() * sheepTexture.length);
			sheep.texture = specialTextures[sheepTexture[r]];
		}
		let interaction = collisionDetector(handsome, sheep, "sheep");
		/**
		if (interaction == "sheep") {
			n = Math.floor(Math.random() * sheepTexture.length);
			sheep.texture = specialTextures[sheepTexture[n]];
		}**/
	});

	// don't climb up the wall
	untreadablesArray.forEach(function(u) {
		if (u[2] == "room") {
			contained = u[0];
			name = u[1];
			let place = worldMapNavigator(handsome, contained, name);
		}
	});
	collidersArray.forEach(function(c) {
		container = c[0];
		name = c[1];
		let happening = collisionDetector(handsome, container, name);
		if (happening == "Barn Door Interior") {
			message.text = "Go outside";
			message.x = (448+32)/2 - message.width/2;
			message.y = 336 + message.height;
			// no thanks
			keyboard("Escape").press = () => {
				message.text = "";
			};
			keyboard("Enter").press = () => {
				// Exit to Poof Mountains for now
				setPosition(handsome, 13, 8);
				state = central;
			};
		}
	});
}

function sleeplayer() {
	prologueScene.visible = false;
	dreamScene = dreamBackground();
	dreamScene.visible = true;

	keyboard("Enter").press = () => {
		state = dreamlayer;
	}
}

function dreamlayer() {
	dreamScene.visible = true;

	for (let g = 0; g < 25; g++) {
		cloudTexture = ["cloudblue-0.png", "cloudpink-86.png"];
		r = Math.floor(Math.random() * 2);
		maxX = (dreamScene.width/32);
		maxY = (dreamScene.height/32);
		quickSpriteAdd(specialTextures, cloudTexture[r], dreamScene, Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY));
	}

	keyboard("Enter").press = () => {
		state = sheeplayer;
	}

}

function sheeplayer() {
	dreamScene.visible = false;
	sheepScene = dreamBackground();
	sheepScene.visible = true;

	for (let baa = 0; baa < 25; baa++) {
		sheepTexture = ["sheep-moving-forward.png", "sheep-still-left.png", "sheep-still-back.png", "sheep-still-left", "sheep-moving-alt-left", "sheep-moving-right", "sheep-still-forward", "sheep-moving-back"];
		r = Math.floor(Math.random() * sheepTexture.length);
		maxX = (sheepScene.width/32);
		maxY = (sheepScene.height/32);
		quickSpriteAdd(specialTextures, sheepTexture[r], sheepScene, Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY));
	}

	keyboard("Enter").press = () => {
		state = barn;
		message.text = "";
	}
}