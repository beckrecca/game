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
			backgroundTextures[backgroundMap.get('grass-full-311')],
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('grass-muddy-TRBL')],
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('green-full-00')],
			backgroundTextures[backgroundMap.get('green-full-01')],
			backgroundTextures[backgroundMap.get('green-full-02')],
			backgroundTextures[backgroundMap.get('green-full-10')],
			backgroundTextures[backgroundMap.get('green-full-11')],
			backgroundTextures[backgroundMap.get('green-full-12')],
			backgroundTextures[backgroundMap.get('green-none')],	
			backgroundTextures[backgroundMap.get('grass-full-39')],
			backgroundTextures[backgroundMap.get('green-full-00')],
			backgroundTextures[backgroundMap.get('green-full-01')],
			backgroundTextures[backgroundMap.get('green-full-02')],
			backgroundTextures[backgroundMap.get('green-full-10')],
			backgroundTextures[backgroundMap.get('green-full-11')],
			backgroundTextures[backgroundMap.get('green-full-12')]
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

function animateFlame(animatedFlame, color = "red") {
	let n = 0;
	flameInterval = setInterval(function() {
    	n = Math.floor(Math.random() * 3);
    	if (n == 1) {
    		animatedFlame.texture = interactiveTextures[interactMap.get("flame-left-" + color)];
    	}
    	else if (n == 2) {
    		animatedFlame.texture = interactiveTextures[interactMap.get("flame-right-" + color)];
    	}
    	else if (n == 3) {
    		animatedFlame.texture = interactiveTextures[interactMap.get("flame-middle-" + color)];
    	}
    	else {
    		if (color != "yellow") {
    			animatedFlame.texture = interactiveTextures[interactMap.get("flame-middle-yellow")];
    		}
    		else {
    			animatedFlame.texture = interactiveTextures[interactMap.get("flame-middle-blue")];
    		}
    	}
    }, 150);
}

function buildHouse(kind = "castle") {
	let windowTexture;
	if (kind == "castle") {
		windowTexture = "tomb-entrance.png";
	}
	else {
		windowTexture = "mine-entrance.png";
	}
	buildHouseContainer = new Container();

	// top row
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-TL"), buildHouseContainer, 0, 0.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-none"), buildHouseContainer, 1, 0.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-none"), buildHouseContainer, 2, 0.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-none"), buildHouseContainer, 3, 0.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-TR"), buildHouseContainer, 4, 0.5);
	// roof
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-TR"), buildHouseContainer, 0);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BR"), buildHouseContainer, 1);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BR"), buildHouseContainer, 2);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BR"), buildHouseContainer, 3);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-TR"), buildHouseContainer, 4);
	// middle row
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-BL"), buildHouseContainer, 0,1.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-BR"), buildHouseContainer, 1,1.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-none"), buildHouseContainer, 2,1.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-BL"), buildHouseContainer, 3,1.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-light-BR"), buildHouseContainer, 4,1.5);
	scene.addChild(buildHouseContainer);

	// add a flipped tomb entrance to make a window
	windowTopLeft = new Sprite(decorTextures[windowTexture]);
	windowTopLeft.scale.y = -1;
	buildHouseContainer.addChild(windowTopLeft);
	setPosition(windowTopLeft, 1, 2);
	windowTopRight = new Sprite(decorTextures[windowTexture]);
	windowTopRight.scale.y = -1;
	buildHouseContainer.addChild(windowTopRight);
	setPosition(windowTopRight, 3, 2);

	// first row
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BL"), buildHouseContainer, 0, 2.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BR"), buildHouseContainer, 1, 2.25);
	// add a flipped tomb entrance to make a window
	windowLeft = new Sprite(decorTextures[windowTexture]);
	windowLeft.scale.y = -1;
	setPosition(windowLeft, 1, 3.5);
	buildHouseContainer.addChild(windowLeft);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BR"), buildHouseContainer, 2, 2.5);
	quickSpriteAdd(interactiveTextures, interactMap.get("door-middle-whole"), buildHouseContainer, 2, 2.5);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BL"), buildHouseContainer, 3, 2.25);
	// add a flipped tomb entrance to make a window
	windowRight = new Sprite(decorTextures[windowTexture]);
	windowRight.scale.y = -1;
	setPosition(windowRight, 3, 3.5);
	buildHouseContainer.addChild(windowRight);
	quickSpriteAdd(buildTextures,buildTextureMap.get(kind + "-shadow-BR"), buildHouseContainer, 4, 2.5);

	return buildHouseContainer;
}

function buildFence() {
	fenceContainer = new Container();
	// fenced in area
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 3, 9.5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 6, 9.5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 3, 9);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-TL"), fenceContainer, 3, 9);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 4, 8.15);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 4, 9.15);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 4, 7.85);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 5, 8.15);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 5, 9.15);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("green-full-12"), fenceContainer, 5, 7.85);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("green-full-10"), fenceContainer, 6, 9);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-TR"), fenceContainer, 6, 9);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 3, 10);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 3, 10.5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 6, 10.5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 6, 10);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("green-full-02"), fenceContainer, 3, 11);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-BL"), fenceContainer, 3, 11);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-29"), fenceContainer, 6, 11);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-BR"), fenceContainer, 6, 11);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 4, 10.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 4, 11.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 5, 10.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("fairy-lights-none"), fenceContainer, 5, 11.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 3.6, 9.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 4.6, 9.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 5.6, 9.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-311"), fenceContainer, 3.6, 10.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 4.6, 10.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 5.6, 10.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-311"), fenceContainer, 3.6, 12.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 4.6, 12.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-full-310"), fenceContainer, 5.6, 12.25);
	return fenceContainer;
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
	centralContainer.y = 8 * 32;
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
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TRBL"), southWestContainer, 1, 0);
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
	handsome = createSprite(characterTextures, spriteMap.get("handsome-still-forward"), (scene.width/2)/32, (scene.height/2)/32);
	regionMouseover(handsome, "Handsome");

	// Add each region to the scene
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

	// protect the trees
	treeBlockingContainer = new Container();
	plantBlocking = quickSpriteRepeater(decorTextures["plant.png"], 13);
	moreTrees = quickSpriteRepeater(decorTextures["tree.png"], 12, 0, 0.25);
	treeBlocking = quickSpriteRepeater(decorTextures["tree.png"], 12, 0, 0.5);
	treeBlockingContainer.addChild(plantBlocking);
	treeBlockingContainer.addChild(treeBlocking);
	treeBlockingContainer.addChild(moreTrees);
	scene.addChild(treeBlockingContainer);

	// add some Giant Trees, Horizontal
	for (let i = 0; i < 6; i++) {
		img = new Sprite(decorTextures["tree.png"]);
		img.scale.set(2, 2);
		img.x = i * 64;
		scene.addChild(img);
	}

	// add some regular plants, vertical
	plantsVertical = quickSpriteRepeaterVertical(decorTextures["plant.png"], 11, 0, 1.9);
	scene.addChild(plantsVertical);

	// add some tree, vertical
	treesVertical = quickSpriteRepeaterVertical(decorTextures["tree.png"], 10, 0, 1.4);
	scene.addChild(treesVertical);


	treeRowsArray = [];
	// add some blockers for the vertical trees
	for (let p = 0; p < 8; p += 2) {
		hiddenTreeContainer = new Container();
		img = new Sprite(decorTextures["tree.png"]);
		img.scale.set(0.5,0.5);
		hiddenTreeContainer.addChild(img);
		treeRowsArray.push(hiddenTreeContainer);
		scene.addChild(hiddenTreeContainer);
	}

	// add some more Giant Trees, vertical
	for (let j = 1; j < 6; j++) {
		img = new Sprite(decorTextures["tree.png"]);
		img.scale.set(2, 2);
		img.y = j * 64;
		scene.addChild(img);
	}

	// remember containers that can't be tread on
	untreadablesArray.push([treeBlockingContainer, "tree Block", "NW"]);
	let count = 1;
	treeRowsArray.forEach(function (tree) {
		tree.x = 32;
		tree.y = count * 64;
		untreadablesArray.push([tree, "tree" + count.toString(), "NW"]);
		count++;
	});

	// add a house
	houseContainer = new Container();
	setPosition(houseContainer, 2, 2);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-TR"), houseContainer, 0);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BR"), houseContainer, 1);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BR"), houseContainer, 2);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BR"), houseContainer, 3);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-TR"), houseContainer, 4);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-light-BL"), houseContainer, 0,1);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-light-none"), houseContainer, 1,1);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-light-none"), houseContainer, 2,1);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-light-none"), houseContainer, 3,1);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-light-BR"), houseContainer, 4,1);
	scene.addChild(houseContainer);

	// add some treadable house
	houseDetails = new Container();
	setPosition(houseDetails, 2, 2);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BL"), houseDetails, 0, 2);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BR"), houseDetails, 1, 1.75);
	// add a flipped tomb entrance to make a window
	windowLeft = new Sprite(decorTextures["tomb-entrance.png"]);
	windowLeft.scale.y = -1;
	setPosition(windowLeft, 1, 3);
	houseDetails.addChild(windowLeft);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BR"), houseDetails, 2, 2);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BL"), houseDetails, 3, 1.75);
	// add a flipped tomb entrance to make a window
	windowRight = new Sprite(decorTextures["tomb-entrance.png"]);
	windowRight.scale.y = -1;
	setPosition(windowRight, 3, 3);
	houseDetails.addChild(windowRight);
	quickSpriteAdd(buildTextures,buildTextureMap.get("castle-shadow-BR"), houseDetails, 4, 2);
	scene.addChild(houseDetails);

	// add a special door
	homeDoorContainer = new Container();
	setPosition(homeDoorContainer, 4, 4);
	quickSpriteAdd(interactiveTextures, interactMap.get("door-middle-whole"), homeDoorContainer);
	scene.addChild(homeDoorContainer);

	// add a path
	sandPathHorizontal = quickSpriteRepeater(backgroundTextures[backgroundMap.get("desert-full-15")], 4, 5, 4);
	scene.addChild(sandPathHorizontal);
	sandPathVertical = quickSpriteRepeaterVertical(backgroundTextures[backgroundMap.get("desert-full-15")], 8, 8, 5);
	scene.addChild(sandPathVertical);
	sandPathEntrance = quickSpriteRepeater(backgroundTextures[backgroundMap.get("desert-full-15")], 5, 12, 9);
	scene.addChild(sandPathEntrance);

	// some homes that cannot be entered
	townEastContainer = new Container();
	setPosition(townEastContainer, 9, 2);
	townHouseEast = buildHouse("red-brick");
	townEastContainer.addChild(townHouseEast);
	scene.addChild(townEastContainer);
	townSouthEastContainer = new Container();
	setPosition(townSouthEastContainer, 9, 7.5);
	townHouseSouthEast = buildHouse();
	townSouthEastContainer.addChild(townHouseSouthEast);
	scene.addChild(townSouthEastContainer);

	// add a fenced in area
	fenceContainer = new Container();
	fence = buildFence();
	fenceContainer.addChild(fence);
	scene.addChild(fenceContainer);

	// add some details
	quickSpriteAdd(decorTextures, "flowers.png", scene, 13, 5.5);
	quickSpriteAdd(decorTextures, "plant.png", scene, 13, 5);
	quickSpriteAdd(decorTextures, "tree.png", scene, 2, 4.5);
	quickSpriteAdd(decorTextures, "tree.png", scene, 6, 4.5);
	quickSpriteAdd(decorTextures, "flowers.png", scene, 9, 11);
	quickSpriteAdd(decorTextures, "firs.png", scene, 13, 10.5);
	quickSpriteAdd(decorTextures, "flowers.png", scene, 1, 13);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TRBL"), scene, 11, 11);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TRBL"), scene, 11, 5.5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TRBL"), scene, 10, 5.75);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TRBL"), scene, 9, 6);
	quickSpriteAdd(decorTextures, "plant.png", scene, 9, 5);

	// add a well
	wellContainer = new Container();
	setPosition(wellContainer, 4, 7);
	quickSpriteAdd(decorTextures, "well.png", wellContainer);
	quickSpriteAdd(decorTextures, "pot.png", wellContainer, 1);
	scene.addChild(wellContainer);
	
	// remember what can't be stomped on
	untreadablesArray.push([houseContainer, "House", "NW"]);
	untreadablesArray.push([townEastContainer, "TownEast", "NW"]);
	untreadablesArray.push([townSouthEastContainer, "townSouthEast", "NW"]);

	// remember special collision evens
	collidersArray.push([homeDoorContainer, "NW House Door"]);
	collidersArray.push([wellContainer, "NW Well"]);

	return scene;
}

function centralScene() {
	let centralBackground = quickBackground();
	scene = quickBackgroundHelper(centralBackground, 448, 448);
	scene.x = 32;
	scene.y = 32;
	app.stage.addChild(scene);

	// mountain range
	mountainContainer = new Container();
	setPosition(mountainContainer,0,0);
	hillLine = quickSpriteRepeaterVertical(decorTextures["hill.png"], 3, 1);
	mountainContainer.addChild(hillLine);
	// create 3 rows of mountains
	for (let m = 0; m < 3; m++) {
		mountainBG = quickSpriteRepeaterVertical(backgroundTextures[backgroundMap.get("stone-stalag-cave-TRBL")], 7 - m*2, m, m*2);
		mountainContainer.addChild(mountainBG);
		mountainLine = quickSpriteRepeaterVertical(decorTextures["mountain.png"], 7 - m*2, m, m*2);
		mountainContainer.addChild(mountainLine);
	}
	mountainContainer.scale.set(2,2);
	scene.addChild(mountainContainer);

	// fir forest
	firForest = new Container();
	setPosition(firForest, 2, 0);
	for (let t = 0; t < 3; t++) {
		treesOnHills = quickSpriteRepeaterVertical(decorTextures["firs.png"], Math.floor(2 + t/4), t, 2);
		firForest.addChild(treesOnHills);
	}
	for (let f = 0; f < 5; f++) {
		fullForest = quickSpriteRepeater(decorTextures["firs.png"], 10 - f/2, f, 2);
		firForest.addChild(fullForest);
	}
	scene.addChild(firForest);

	// add a lil town
	mountainHouseContainer = new Container();
	setPosition(mountainHouseContainer, 8, 9.5);
	mountainHouse = buildHouse();
	mountainHouseContainer.addChild(mountainHouse);
	redBrickHouse = buildHouse("red-brick");
	setPosition(redBrickHouse, 7, 0);
	mountainHouseContainer.addChild(redBrickHouse);
	secondHouse = buildHouse();
	setPosition(secondHouse, 3, 5);
	mountainHouseContainer.addChild(secondHouse);
	stoneMountainPath = quickSpriteRepeater(backgroundTextures[backgroundMap.get("stone-grassy-TRBL")], 9, 3.5, 1);
	mountainHouseContainer.addChild(stoneMountainPath);
	mountainHouseContainer.scale.set(0.5,0.5);
	scene.addChild(mountainHouseContainer);

	// add the caves
	caveContainer = new Container();
	setPosition(caveContainer, 10, 5);
	quickSpriteAdd(buildTextures, buildTextureMap.get("dark-shadow-TL"), caveContainer, 0, 0);
	quickSpriteAdd(pathTextures, "cave-horizontal.png", caveContainer, 1, 0);
	quickSpriteAdd(pathTextures, "cave-horizontal.png", caveContainer, 2, 0);
	quickSpriteAdd(buildTextures, buildTextureMap.get("dark-shadow-TR"), caveContainer, 3, 0);
	quickSpriteAdd(buildTextures, buildTextureMap.get("dark-shadow-BL"), caveContainer, 0, 1);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("stone-stalag-cave-TL"), caveContainer, 1, 1);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("stone-stalag-cave-TR"), caveContainer, 2, 1);
	quickSpriteAdd(buildTextures, buildTextureMap.get("dark-shadow-TR"), caveContainer, 3, 1);
	scene.addChild(caveContainer);

	// add cave entrance
	caveEntrance = new Container();
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TRBL"), caveEntrance, 10, 7);
	quickSpriteAdd(decorTextures, "rocks.png", caveEntrance, 10, 7);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TRBL"), caveEntrance, 13, 7);
	quickSpriteAdd(decorTextures, "rocks.png", caveEntrance, 13, 7);
	quickSpriteAdd(buildTextures, buildTextureMap.get("dark-light-BL"), caveEntrance, 11, 7);
	quickSpriteAdd(buildTextures, buildTextureMap.get("dark-light-BR"), caveEntrance, 12, 7);
	quickSpriteAdd(decorTextures, "rocks.png", caveEntrance, 11, 7.5);
	quickSpriteAdd(decorTextures, "rocks.png", caveEntrance, 12, 7.5);
	scene.addChild(caveEntrance);

	// remember what can't be stomped on
	untreadablesArray.push([mountainContainer, "Central Mountains", "C"]);
	untreadablesArray.push([mountainHouseContainer, "Valley Town", "C"]);
	untreadablesArray.push([caveContainer, "Valley Cave", "C"]);
	untreadablesArray.push([firForest, "Fir Forest", "C"]);

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

	// create an oasis
	oasisContainer = new Container();
	setPosition(oasisContainer, 10, 1.5);
	quickSpriteAdd(liquidTextures, "water-sand-TL.png", oasisContainer);
	waterTopContainer = quickSpriteRepeater(liquidTextures['water-sand-top.png'], 2, 0, 1);
	oasisContainer.addChild(waterTopContainer);
	quickSpriteAdd(liquidTextures, "water-sand-TR.png", oasisContainer, 3, 0);
	waterRightContainer = quickSpriteRepeaterVertical(liquidTextures["water-sand-right.png"], 2, 3, 1);
	oasisContainer.addChild(waterRightContainer);
	for (let w = 0; w < 2; w++) {
		fullWater = quickSpriteRepeater(liquidTextures["water-full.png"], 2, w+1, 1);
		oasisContainer.addChild(fullWater);
	}
	waterLeftContainer = quickSpriteRepeaterVertical(liquidTextures["water-sand-left.png"], 2, 0, 1);
	oasisContainer.addChild(waterLeftContainer);
	quickSpriteAdd(liquidTextures, "water-sand-BL.png", oasisContainer, 0, 3);
	waterBottomContainer = quickSpriteRepeater(liquidTextures['water-sand-bottom.png'], 2, 3, 1);
	oasisContainer.addChild(waterBottomContainer);

	quickSpriteAdd(liquidTextures, "water-sand-BR.png", oasisContainer, 3, 3);
	scene.addChild(oasisContainer);

	// add oasis details
	palmContainer = quickSpriteRepeater(decorTextures["plant.png"], 4, 5, 10);
	scene.addChild(palmContainer);

	// add sandy hill
	sandHill = new Container();
	setPosition(sandHill, 0, 0);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TL"), sandHill);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TR"), sandHill, 1);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TL"), sandHill, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TL"), sandHill, 3);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-cave-BR"), sandHill, 4);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-cave-BL"), sandHill, 5);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TL"), sandHill, 6);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TR"), sandHill, 7);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-BR"), sandHill, 7, 1);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), sandHill, 3, 1);
	scene.addChild(sandHill);

	// walkable bit
	sandHillWalkable = new Container();
	setPosition(sandHillWalkable, 0, 0);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-BL"), sandHillWalkable, 0, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-BL"), sandHillWalkable, 2, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-BR"), sandHillWalkable, 3, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TR"), sandHillWalkable, 7, 2);
	scene.addChild(sandHillWalkable);

	// a special mine door
	mineDoorContainer = new Container();
	setPosition(mineDoorContainer, 5, 2);
	quickSpriteAdd(decorTextures, "mine-entrance.png", mineDoorContainer);
	scene.addChild(mineDoorContainer);

	// a special sand hill door
	sandHillDoorContainer = new Container();
	setPosition(sandHillDoorContainer, 1, 2);
	quickSpriteAdd(interactiveTextures, interactMap.get("door-left-whole"), sandHillDoorContainer);
	scene.addChild(sandHillDoorContainer);

	// sandy hill details
	quickSpriteAdd(decorTextures, "plant.png", scene, 0, 2.5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("desert-TL"), scene, 8);
	quickSpriteAdd(decorTextures, "plant.png", scene, 8.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-sandy-TRBL"), scene, 8, 1.25);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-sandy-TRBL"), scene, 8, 2.5);
	stoneyPathV = quickSpriteRepeaterVertical(backgroundTextures[backgroundMap.get("stone-sandy-TRBL")], 4, 10, 7);
	scene.addChild(stoneyPathV);
	stoneyPathH = quickSpriteRepeater(backgroundTextures[backgroundMap.get("stone-sandy-TRBL")], 10, 7);
	scene.addChild(stoneyPathH);
	quickSpriteAdd(interactiveTextures, interactMap.get("pot-middle-through"), scene, 5, 5);
	quickSpriteAdd(interactiveTextures, interactMap.get("pot-middle-three-quart"), scene, 6, 5);
	quickSpriteAdd(backgroundTextures, backgroundMap.get("grass-sandy-TRBL"), scene, 1, 3);
	greenPathContainer = quickSpriteRepeater(backgroundTextures[backgroundMap.get("grass-sandy-TRBL")], 8, 4, 1);
	scene.addChild(greenPathContainer);

	// a friggen volcano
	volcanoContainer = new Container();
	setPosition(volcanoContainer, 0, 8);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TL"), volcanoContainer, 3, 1);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), volcanoContainer, 4, 1);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), volcanoContainer, 2, 2);
	quickSpriteAdd(liquidTextures, "lava-corner-TL.png", volcanoContainer, 3, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TL"), volcanoContainer, 4, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), volcanoContainer, 5, 2);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TL"), volcanoContainer, 1, 3);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TRBL"), volcanoContainer, 2, 3);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-BL"), volcanoContainer, 3, 3);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TRBL"), volcanoContainer, 4, 3);
	quickSpriteAdd(liquidTextures, "lava-corner-TR.png", volcanoContainer, 5, 3);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), volcanoContainer, 6, 3);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TL"), volcanoContainer, 0, 4);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), volcanoContainer, 1, 4);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-BR"), volcanoContainer, 2, 4);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-light-TRBL"), volcanoContainer, 3, 4);
	quickSpriteAdd(liquidTextures, "lava-46.png", volcanoContainer, 4, 4);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-TR"), volcanoContainer, 5, 4);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-BL"), volcanoContainer, 6, 4);
	// Animated Flames!
	flameContainer = quickSpriteRepeater(interactiveTextures[interactMap.get("flame-middle-red")], 7, 4.5);
	volcanoContainer.addChild(flameContainer);
	flamesArray = flameContainer.children;
	flamesArray.forEach(function(flame){
		animateFlame(flame);
	});
	lavaFlowContainer = quickSpriteRepeater(liquidTextures['lava-39.png'], 8, 5);
	volcanoContainer.addChild(lavaFlowContainer);
	scene.addChild(volcanoContainer);

	// untreadable Volcano Path
	fireyPathContainer = quickSpriteRepeater(pathTextures["cave-fire-horizontal.png"], 4);
	setPosition(fireyPathContainer, 8, 13);
	scene.addChild(fireyPathContainer);

	// treadable Volcano Path
	volcanoPathContainer = new Container();
	setPosition(volcanoPathContainer, 0, 9);
	quickSpriteAdd(buildTextures, buildTextureMap.get("desert-shadow-BL"), volcanoPathContainer, 7, 3);
	quickSpriteAdd(decorTextures, "rocks.png", volcanoPathContainer, 8, 4);
	quickSpriteAdd(decorTextures, "treasure.png", volcanoPathContainer, 3, 4);
	quickSpriteAdd(decorTextures, "rocks.png", volcanoPathContainer, 3, 4);
	quickSpriteAdd(decorTextures, "rocks.png", volcanoPathContainer, 7, 4);
	greatRock = new Sprite(decorTextures["rocks.png"]);
	volcanoPathContainer.addChild(greatRock);
	setPosition(greatRock, 9, 2);
	greatRock.scale.set(2,2);
	scene.addChild(volcanoPathContainer);

	// remember containers that can't be tread on
	untreadablesArray.push([oasisContainer, "Oasis", "SW"]);
	untreadablesArray.push([sandHill, "Sand Hill", "SW"]);
	untreadablesArray.push([fireyPathContainer, "Firey Path", "SW"]);
	untreadablesArray.push([volcanoContainer, "Volcano", "SW"]);

	// remember touchable containers that have a significance
	collidersArray.push([mineDoorContainer, "Mines"]);
	collidersArray.push([sandHillDoorContainer, "Sand Hill"]);

	// for visitable containers, include names

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
