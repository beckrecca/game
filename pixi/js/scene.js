/*
*	SCENE HELPER FUNCTIONS
*/
function quickBackground(type = "green") {
	let background;
	if (type == "green") {
		background = [
			backgroundTextures[backgroundMap.get('grass-full-210')],
			backgroundTextures[backgroundMap.get('grass-full-211')],
			backgroundTextures[backgroundMap.get('grass-full-29')],
			backgroundTextures[backgroundMap.get('grass-full-310')],
			backgroundTextures[backgroundMap.get('grass-full-311')],
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('green-full-00')],
			backgroundTextures[backgroundMap.get('green-full-01')],
			backgroundTextures[backgroundMap.get('green-full-02')],
			backgroundTextures[backgroundMap.get('green-full-10')],
			backgroundTextures[backgroundMap.get('green-full-11')],
			backgroundTextures[backgroundMap.get('green-full-12')],
			backgroundTextures[backgroundMap.get('green-none')]	
			];
	}
	else if (type == "desert" ) {
		background = [
			backgroundTextures[backgroundMap.get('desert-full-03')],
			backgroundTextures[backgroundMap.get('desert-full-04')],
			backgroundTextures[backgroundMap.get('desert-full-05')],
			backgroundTextures[backgroundMap.get('desert-full-13')],
			backgroundTextures[backgroundMap.get('desert-full-14')],
			backgroundTextures[backgroundMap.get('desert-full-15')],
			backgroundTextures[backgroundMap.get('desert-none')],
			backgroundTextures[backgroundMap.get('desert-full-03')],
			backgroundTextures[backgroundMap.get('desert-full-04')],
			backgroundTextures[backgroundMap.get('desert-full-05')],
			backgroundTextures[backgroundMap.get('desert-full-13')],
			backgroundTextures[backgroundMap.get('desert-full-14')],
			backgroundTextures[backgroundMap.get('desert-full-15')],
			backgroundTextures[backgroundMap.get('desert-none')],
			buildTextures[buildTextureMap.get("desert-light-none")],
			backgroundTextures[backgroundMap.get('desert-full-03')],
			backgroundTextures[backgroundMap.get('desert-full-04')],
			backgroundTextures[backgroundMap.get('desert-full-05')],
			backgroundTextures[backgroundMap.get('desert-full-13')],
			backgroundTextures[backgroundMap.get('desert-full-14')],
			backgroundTextures[backgroundMap.get('desert-full-15')],
			backgroundTextures[backgroundMap.get('desert-none')]
		];
	}
	else if (type == "muddy") {
		background = [
			backgroundTextures[backgroundMap.get('grass-full-210')],
			backgroundTextures[backgroundMap.get('grass-full-211')],
			backgroundTextures[backgroundMap.get('grass-full-29')],
			backgroundTextures[backgroundMap.get('grass-full-310')],
			backgroundTextures[backgroundMap.get('grass-full-311')],
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('grass-muddy-BL')],
			backgroundTextures[backgroundMap.get('grass-muddy-BR')],
			backgroundTextures[backgroundMap.get('grass-full-311')],
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('grass-muddy-TL')],
			backgroundTextures[backgroundMap.get('grass-muddy-TR')],
			backgroundTextures[backgroundMap.get('grass-muddy-TRBL')],
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('green-full-00')],
			backgroundTextures[backgroundMap.get('green-full-01')],
			backgroundTextures[backgroundMap.get('green-full-02')],
			backgroundTextures[backgroundMap.get('green-full-10')],
			backgroundTextures[backgroundMap.get('green-full-11')],
			backgroundTextures[backgroundMap.get('green-full-12')],
			backgroundTextures[backgroundMap.get('green-none')],	
			buildTextures[buildTextureMap.get("grass-light-TRBL")]
		];

	}
	return background;
}

function quickBackgroundHelper(texturesArray, width, height) {
	scene = new Container();
	x = width / 32;
	y = height / 32;
	// adds random tiles from an array of tiles
	for (let v = 0; v < y; v++) {
		for (let u = 0; u < x; u++) {
			r = Math.floor(Math.random() * texturesArray.length);
			img = new Sprite(texturesArray[r]);
			img.x = u * 32;
			img.y = v * 32;
			scene.addChild(img);
		}
	}
	return scene;
}

function quickSpriteRepeater(texture, n, y = 0, x = 0) {
	imgContainer = new Container();
	for (let i = 0; i < n; i++) {
		img = new Sprite(texture);
		img.x = (i + x) * 32;
		img.y = y * 32;
		imgContainer.addChild(img);
	}
	return imgContainer;
}

function quickSpriteRepeaterVertical(texture, n, x = 0, y = 0) {
	imgContainer = new Container();
	for (let i = 0; i < n; i++) {
		img = new Sprite(texture);
		img.x = x * 32;
		img.y = (i + y) * 32;
		imgContainer.addChild(img);
	}
	return imgContainer;
}

function quickSpriteAdd(textures, textureName, container, x = 0, y = 0, vx = 0, vy = 0) {
	img = createSprite(textures, textureName, x, y, vx, vy);
	container.addChild(img);
}

function regionMouseover(container, name) {
	container.interactive = "true";
	container.on('mouseover', () => {
	    updateText(name);
	});
	container.on('mouseout', () => {
	    updateText("World Map");
	});
}

/*
*	CUSTOM GAME SCENES
*/

function worldMapScene() {
	let worldBackground = quickBackground();
	scene = quickBackgroundHelper(worldBackground, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	// Adding Warbling Forest
	northWestContainer = new Container();
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-muddy-TRBL"), northWestContainer, Math.floor(Math.random() * 3), 0);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-muddy-TR"), northWestContainer, 2, Math.floor(Math.random() * 3));
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-muddy-BR"), northWestContainer, 1, 1);
	numTrees = (Math.floor(scene.width/3)/32);
	for (let i = 0; i < 3; i ++) {
		treeContainer = new quickSpriteRepeater(decorTextures['tree.png'], numTrees, i);
		northWestContainer.addChild(treeContainer);
		numTrees--;
	}
	// Adding Warbling Forest details
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-muddy-TRBL"), northWestContainer, 4, 2);
	quickSpriteAdd(decorTextures, "town.png", northWestContainer, 4, 2);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-muddy-TRBL"), northWestContainer, 3, 2);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-TRBL"), northWestContainer, 3, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("grass-light-TRBL"), northWestContainer, 4, 1);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-TRBL"), northWestContainer, 4, 1);
	regionMouseover(northWestContainer, "Warbling Forest");

	// add some random flowers
	for (let f = 0; f < 6; f++) {
		yPos = 3 + f;
		quickSpriteAdd(decorTextures, "flowers.png", scene, Math.floor(Math.random() * 6), yPos);
	}

	// Adding mountain range
	centralContainer = new Container();
	centralContainer.x = 6 * 32;
	centralContainer.y = 7 * 32;
	mountainTexture = decorTextures['mountain.png'];
	mountainRangeWest = new quickSpriteRepeaterVertical(mountainTexture, 5);
	centralContainer.addChild(mountainRangeWest);
	mountainRangeCentral = new quickSpriteRepeaterVertical(mountainTexture, 3, 1, 2);
	centralContainer.addChild(mountainRangeCentral);
	// Add mountain details
	quickSpriteAdd(decorTextures, 'mountain.png', centralContainer, 1, 1);
	quickSpriteAdd(decorTextures, 'firs.png', centralContainer, 1, 1);
	quickSpriteAdd(decorTextures, 'hill.png', centralContainer, 2, 2);
	mountainWoods = new quickSpriteRepeaterVertical(decorTextures["firs.png"], 3, 2);
	centralContainer.addChild(mountainWoods);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("stone-stalag-cave-TRBL"), centralContainer, 2, 3);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("stone-grassy-TRBL"), centralContainer, 2, 4);
	quickSpriteAdd(decorTextures, "town.png", centralContainer, 2, 4);
	quickSpriteAdd(decorTextures, 'hill.png', centralContainer, 1);
	regionMouseover(centralContainer, "Central Mountains");

	// add some random rocks
	for (let k = 0; k < 6; k++) {
		xMin = 4;
		xMax = 5;
		yMax = 11;
		yMin = 5;
		quickSpriteAdd(decorTextures, "rocks.png", scene, Math.floor(Math.random() * (xMax - xMin + 1) + xMin), Math.floor(Math.random() * (yMax - yMin + 1) + yMin));
	}

	// Add some water
	northEastContainer = new Container();
	northEastContainer.x = 9 * 32;
	quickSpriteAdd(decorTextures, "rocks.png", northEastContainer);
	quickSpriteAdd(liquidTextures, "water-grass-TL2.png", northEastContainer, 1, 0);
	quickSpriteAdd(liquidTextures, "water-top.png", northEastContainer, 2, 0);
	quickSpriteAdd(liquidTextures, "water-top.png", northEastContainer, 3, 0);
	fullSeaTexture = liquidTextures["water-full.png"];
	fullSeaContainer = new quickSpriteRepeaterVertical(fullSeaTexture, 2, 4);
	northEastContainer.addChild(fullSeaContainer);
	quickSpriteAdd(liquidTextures, "water-grass-TL2.png", northEastContainer, 0, 1);
	quickSpriteAdd(liquidTextures, "water-grass-rounded.png", northEastContainer, 1, 1);
	quickSpriteAdd(liquidTextures, "water-full.png", northEastContainer, 2, 1);
	quickSpriteAdd(liquidTextures, "water-bottom.png", northEastContainer, 3, 1);
	quickSpriteAdd(liquidTextures, "water-left.png", northEastContainer, 0, 2);
	quickSpriteAdd(liquidTextures, "water-full.png", northEastContainer, 1, 2);
	quickSpriteAdd(liquidTextures, "water-grass-BR.png", northEastContainer, 2, 2);
	quickSpriteAdd(decorTextures, "flowers.png", northEastContainer, 3, 2);
	quickSpriteAdd(liquidTextures, "water-left.png", northEastContainer, 4, 2);
	quickSpriteAdd(liquidTextures, "water-grass-BL.png", northEastContainer, 0, 3);
	quickSpriteAdd(liquidTextures, "water-right.png", northEastContainer, 1, 3);
	quickSpriteAdd(decorTextures, "mountain.png", northEastContainer, 2, 3);
	quickSpriteAdd(decorTextures, "castle.png", northEastContainer, 3, 3);
	quickSpriteAdd(liquidTextures, "water-grass-BL.png", northEastContainer, 4, 3);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TRBL"), northEastContainer, 0, 4);
	quickSpriteAdd(decorTextures, "town.png", northEastContainer, 0, 4);
	quickSpriteAdd(liquidTextures, "water-left.png", northEastContainer, 1, 4);
	quickSpriteAdd(liquidTextures, "water-grass-rounded-3.png", northEastContainer, 2, 4);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("stone-sandy-TRBL"), northEastContainer, 3, 4);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-sandy-BR"), northEastContainer, 4, 4);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-sandy-TR"), northEastContainer, 0, 5);
	quickSpriteAdd(decorTextures, "rocks.png", northEastContainer, 0, 5);
	quickSpriteAdd(liquidTextures, "water-grass-BL.png", northEastContainer, 1, 5);
	southShore = new quickSpriteRepeater(liquidTextures["water-bottom.png"], 3, 5, 2);
	northEastContainer.addChild(southShore);
	regionMouseover(northEastContainer, "Northeast Sea Name TBD");

	// Add some random plant life
	for (let t = 0; t < 8; t++) {
		xMin = 9;
		xMax = 13;
		yMax = 12;
		yMin = 7;
		if (t % 2 == 0) {
			quickSpriteAdd(decorTextures, "pine.png", scene, Math.floor(Math.random() * (xMax - xMin + 1) + xMin), Math.floor(Math.random() * (yMax - yMin + 1) + yMin));
		}
		else {
			quickSpriteAdd(decorTextures, "plant.png", scene, Math.floor(Math.random() * (xMax - xMin + 1) + xMin), Math.floor(Math.random() * (yMax - yMin + 1) + yMin));
		}
	}

	// Add a desert
	southWestContainer = new Container();
	southWestContainer.y = 10 * 32;
	for (let j = 0; j < 3; j++) {
		desertContainer = new quickSpriteRepeater(backgroundTextures[backgroundMap.get('desert-none')], 3, j+1);
		southWestContainer.addChild(desertContainer);
	}
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TL"), southWestContainer);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TR"), southWestContainer, 1, 0);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TL"), southWestContainer, 2, 0);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TR"), southWestContainer, 3, 0);
	quickSpriteAdd(liquidTextures, "water-sand-TRBL-3.png", southWestContainer, 3, 1);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-none"), southWestContainer, 3, 2);
	quickSpriteAdd(decorTextures, "plant.png", southWestContainer, 3, 2);
	quickSpriteAdd(liquidTextures, "lava-corner-TR.png", southWestContainer, 0, 3);
	quickSpriteAdd(decorTextures, "hill.png", southWestContainer, 0, 3);
	quickSpriteAdd(liquidTextures, "lava-corner-TR.png", southWestContainer, 1, 3);
	quickSpriteAdd(decorTextures, "rocks.png", southWestContainer, 1, 3);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-BR"), southWestContainer, 3, 3);
	regionMouseover(southWestContainer, "Southwest Desert Name TBD");

	// remember our regions and their names
	regionsArray.push([northWestContainer, "North West"]);
	regionsArray.push([centralContainer, "Central"]);
	regionsArray.push([northEastContainer, "North East"]);
	regionsArray.push([southWestContainer, "South West"]);

	// Let's add our handsome player
	handsome = createSprite(characterTextures, spriteMap.get("handsome-still-forward"), 0, (scene.height/2)/32);
	regionMouseover(handsome, "Handsome");

	scene.addChild(northWestContainer);
	scene.addChild(centralContainer);
	scene.addChild(northEastContainer);
	scene.addChild(southWestContainer);

	return scene;
}

function northWestScene() {
	let northWestBackground = quickBackground("muddy");
	scene = quickBackgroundHelper(northWestBackground, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	return scene;
}

function centralScene() {
	let centralBackground = quickBackground();
	scene = quickBackgroundHelper(centralBackground, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	return scene;
}

function northEastScene() {
	let northEastBackground = quickBackground();
	scene = quickBackgroundHelper(northEastBackground, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	return scene;
}

function southWestScene() {
	let southWestBackground = quickBackground("desert");
	scene = quickBackgroundHelper(southWestBackground, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	return scene;
}

/*
*	TEXTURE MAP KEY

***** BACKGROUNDS ******
carpet-floor-BL
carpet-floor-BR
carpet-floor-none
carpet-floor-TL
carpet-floor-TR
carpet-floor-TRBL
desert-BL
desert-BR
desert-cave-BL
desert-cave-BR
desert-cave-none
desert-cave-TL
desert-cave-TR
desert-cave-TRBL
desert-full-03
desert-full-04
desert-full-05
desert-full-13
desert-full-14
desert-full-15
desert-none
desert-stalag-cave-BL
desert-stalag-cave-BR
desert-stalag-cave-none
desert-stalag-cave-TL
desert-stalag-cave-TR
desert-stalag-cave-TRBL
desert-TL
desert-TR
desert-TRBL
fairy-lights-BL
fairy-lights-BR
fairy-lights-none
fairy-lights-TL
fairy-lights-TR
fairy-lights-TRBL
grass-full-210
grass-full-211
grass-full-29
grass-full-310
grass-full-311
grass-full-39
grass-muddy-BL
grass-muddy-BR
grass-muddy-none
grass-muddy-TL
grass-muddy-TR
grass-muddy-TRBL
grass-sandy-BL
grass-sandy-BR
grass-sandy-none
grass-sandy-TL
grass-sandy-TR
grass-sandy-TRBL
green-BL
green-BR
green-cave-BL
green-cave-BR
green-cave-none
green-cave-TL
green-cave-TR
green-cave-TRBL
green-full-00
green-full-01
green-full-02
green-full-10
green-full-11
green-full-12
green-none
green-stalag-cave-BL
green-stalag-cave-BR
green-stalag-cave-none
green-stalag-cave-TL
green-stalag-cave-TR
green-stalag-cave-TRBL
green-TL
green-TR
green-TRBL
stone-cave-BL
stone-cave-BR
stone-cave-none
stone-cave-TL
stone-cave-TR
stone-cave-TRBL
stone-floor-full-26
stone-floor-full-27
stone-floor-full-28
stone-floor-full-36
stone-floor-full-37
stone-floor-full-38
stone-grassy-BL
stone-grassy-BR
stone-grassy-none
stone-grassy-TL
stone-grassy-TR
stone-grassy-TRBL
stone-sandy-BL
stone-sandy-BR
stone-sandy-none
stone-sandy-TL
stone-sandy-TR
stone-sandy-TRBL
stone-stalag-cave-BL
stone-stalag-cave-BR
stone-stalag-cave-none
stone-stalag-cave-TL
stone-stalag-cave-TR
stone-stalag-cave-TRBL
wood-floor-full-06
wood-floor-full-07
wood-floor-full-08
wood-floor-full-16
wood-floor-full-17
wood-floor-full-18

***** BUILD ********
castle-light-BL
castle-light-BR
castle-light-none
castle-light-TL
castle-light-TR
castle-light-TRBL
castle-shadow-BL
castle-shadow-BR
castle-shadow-TL
castle-shadow-TR
dark-light-BL
dark-light-BR
dark-light-none
dark-light-TL
dark-light-TR
dark-light-TRBL
dark-shadow-BL
dark-shadow-BR
dark-shadow-TL
dark-shadow-TR
desert-light-BL
desert-light-BR
desert-light-none
desert-light-TL
desert-light-TR
desert-light-TRBL
desert-shadow-BL
desert-shadow-BR
desert-shadow-TL
desert-shadow-TR
dirt-light-BL
dirt-light-BR
dirt-light-none
dirt-light-TL
dirt-light-TR
dirt-light-TRBL
dirt-shadow-BL
dirt-shadow-BR
dirt-shadow-TL
dirt-shadow-TR
grass-light-BL
grass-light-BR
grass-light-none
grass-light-TL
grass-light-TR
grass-light-TRBL
grass-shadow-BL
grass-shadow-BR
grass-shadow-TL
grass-shadow-TR
red-brick-light-BL
red-brick-light-BR
red-brick-light-none
red-brick-light-TL
red-brick-light-TR
red-brick-light-TRBL
red-brick-shadow-BL
red-brick-shadow-BR
red-brick-shadow-TL
red-brick-shadow-TR

***** INTERACTIVES ******
cell-left-half
cell-left-three-quart
cell-left-through
cell-left-whole
cell-middle-half
cell-middle-three-quart
cell-middle-through
cell-middle-whole
cell-right-half
cell-right-three-quart
cell-right-through
cell-right-whole
chest-left-half
chest-left-three-quart
chest-left-through
chest-left-whole
chest-middle-half
chest-middle-three-quart
chest-middle-through
chest-middle-whole
chest-right-half
chest-right-three-quart
chest-right-through
chest-right-whole
door-left-half
door-left-three-quart
door-left-through
door-left-whole
door-middle-half
door-middle-three-quart
door-middle-through
door-middle-whole
door-right-half
door-right-three-quart
door-right-through
door-right-whole
fireplace-right-half
fireplace-right-three-quart
fireplace-right-through
fireplace-right-whole
fireplace-left-half
fireplace-left-three-quart
fireplace-left-through
fireplace-left-whole
fireplace-middle-half
fireplace-middle-three-quart
fireplace-middle-through
fireplace-middle-whole
flame-left-blue
flame-left-green
flame-left-red
flame-left-yellow
flame-middle-blue
flame-middle-green
flame-middle-red
flame-middle-yellow
flame-right-blue
flame-right-green
flame-right-red
flame-right-yellow
lever-left-blue
lever-left-green
lever-left-red
lever-left-yellow
lever-middle-blue
lever-middle-green
lever-middle-red
lever-middle-yellow
lever-right-blue
lever-right-green
lever-right-red
lever-right-yellow
pot-left-half
pot-left-three-quart
pot-left-through
pot-left-whole
pot-middle-half
pot-middle-three-quart
pot-middle-through
pot-middle-whole
pot-right-half
pot-right-three-quart
pot-right-through
pot-right-whole
spikes-active-gold-square
spikes-active-silver-diamond
spikes-active-silver-square
spikes-hidden-gold-square
spikes-hidden-silver-diamond
spikes-hidden-silver-square
spikes-neutral-gold-square
spikes-neutral-silver-diamond
spikes-neutral-silver-square


***** LIQUIDS ******* (no map just resources)

lava-37.png
lava-38.png
lava-39.png
lava-40.png
lava-43.png
lava-44.png
lava-45.png
lava-46.png
lava-49.png
lava-50.png
lava-51.png
lava-52.png
lava-corner-BL.png
lava-corner-BR.png
lava-corner-TL.png
lava-corner-TR.png
lava-left.png
lava-right.png
water-grass-B2.png
water-grass-BL
water-grass-BL3.png
water-grass-BR.png
water-grass-BR2.png
water-grass-BR3.png
water-grass-rounded-2.png
water-grass-rounded-3.png
water-grass-rounded.png
water-grass-TL.png
water-grass-TL2.png
water-grass-TL3.png
water-grass-TR.png
water-grass-TR2.png
water-grass-TR2.png
water-grass-TRBL-2
water-grass-TRBL-3.png
water-grass-TRBL.png
water-sand-B2.png
water-sand-BL
water-sand-BL3.png
water-sand-BR.png
water-sand-BR2.png
water-sand-BR3.png
water-sand-rounded-2.png
water-sand-rounded-3.png
water-sand-rounded.png
water-sand-TL.png
water-sand-TL2.png
water-sand-TL3.png
water-sand-TR.png
water-sand-TR2.png
water-sand-TR3.png
water-sand-TRBL-2
water-sand-TRBL-3.png
water-sand-TRBL.png


ENVIRONMENT

"bed.png",
"throne.png",
"statue.png",
"well.png",
"stairs-up.png",
"stairs-down.png",
"castle.png",
"sleeping-mat.png",
"table.png",
"dresser.png",
"pillar.png",
"hill.png",
"mountain.png",
"town.png",
"flowers.png",
"rocks.png",
"pine.png",
"mine-entrance.png",
"tomb-entrance.png",
"treasure.png",
"gear-icon.png",
"crescent-icon.png",
"plant.png",
"sign.png",
"tree.png",
"pot.png",
"firs.png",
"gold.png",
"weapon-icon.png",
"potions-icon.png"
*/
