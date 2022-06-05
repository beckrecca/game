function nameTextures() {
	const x = 12;
	const y = 5;

	tileCount = x * y;
	const tiles = new Map();

	let name, light, borders;

	for (let t = 0; t < tileCount; t++) {
		// get the x,y position from a grid of 12 x 5
		xpos = t % x;
		ypos = Math.floor(t / x);
		name = getTextureName(xpos);
		light = getLight(ypos);
		borders = getBorders(xpos,ypos);
		let namestring = name + '-' + light + '-' + borders;
		tiles.set(namestring,"tiles-" + t.toString() + ".png");
	}
	return tiles;
}

function getTextureName(xpos) {
	switch (xpos) {
			case 0:
				name = "castle";
				break;
			case 1:
				name = "castle";
				break;
			case 2:
				name = "red-brick";
				break;
			case 3:
				name = "red-brick";
				break;
			case 4:
				name = "desert";
				break;
			case 5:
				name = "desert";
				break;
			case 6:
				name = "grass";
				break;
			case 7:
				name = "grass";
				break;
			case 8:
				name = "dirt";
				break;
			case 9:
				name = "dirt";
				break;
			case 10:
				name = "dark";
				break;
			case 11:
				name = "dark";
				break;
		}
	return name;
}

function getLight(ypos) {
	let light;
	if (ypos < 3) {
		light = "light";
	}
	else {
		light = "shadow";
	}
	return light;
}

function getBorders(xpos,ypos) {
	let borders;
	if (ypos == 0) {
		if (xpos % 2 == 0) {
			borders = "TRBL";
		}
		else {
			borders = "none";
		}
	}
	else if (ypos == 1 || ypos == 3) {
		if (xpos % 2 == 0) {
			borders = "TL";
		}
		else {
			borders = "TR";
		}
	}
	else if (ypos == 2 || ypos ==4) {
		if (xpos % 2 == 0) {
			borders = "BL";
		}
		else {
			borders = "BR";
		}
	}
	return borders;
}