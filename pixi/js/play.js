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
	return scene;
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
	listen = false;
	prologueScene.addChild(handsome);
	handsome.x = 0;
	handsome.y = prologueScene.height/2;

	/**
	* Lets player walk around
	containPlayer(handsome);

	untreadablesArray.forEach(function(u) {
		// if this is a SW untreadable
		if (u[2] == "room") {
			contained = u[0];
			name = u[1];
			let place = worldMapNavigator(handsome, contained, name);
		}
	});
	**/
}