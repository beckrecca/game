function nameBackgrounds() {
	const x = 16;
	const y = 12;

	tileCount = x * y;
	const tiles = new Map();

	const outofbounds = [10,11,12,13,26,27,28,29,42,43,44,45,58,59,60,61,62,63,74,75,76,77,78,79,90,91,92,93,94,95,106,107,108,109,110,111,122,123,124,125,126,127,138,139,140,141,142,143,150,151, 152, 153, 154, 155, 156, 157, 158, 159, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175];

	let name, variant;

	for (let t = 0; t < tileCount; t++) {
		if (outofbounds.includes(t)) {
			continue;
		}
		if (t > 181) {
			break;
		}
		xpos = t % x;
		ypos = Math.floor(t / x);
		name = getBackgroundName(xpos, ypos);
		variant = getVariant(xpos,ypos);
		let namestring = name + variant;
		tiles.set(namestring,"background-" + t.toString() + ".png");
	}
	return tiles;
}

function getBackgroundName(xpos,ypos) {
	let name;
	// green
	if ((xpos < 2 && ypos < 3) || (xpos > 1 && xpos < 4 && ypos > 2 && ypos < 6) || (xpos > 5 && xpos < 10 && ypos < 3)) {
		name = 'green-';
	}
	else if ((xpos < 2 && ypos > 2 && ypos < 6) || (xpos > 1 && xpos < 4 && ypos < 3) || (xpos > 5 && xpos < 10 && ypos > 2 && ypos < 6)) {
		name = "desert-";
	}
	else if (xpos > 13 && ypos < 3) {
		name = "fairy-lights-";
	}
	else if (xpos < 2 && ypos > 5 && ypos < 9) {
		name = "wood-floor-";
	}
	else if (xpos > 1 && xpos < 4 && ypos > 5 && ypos < 9) {
		name = "stone-floor-"
	}
	else if (xpos > 3 && xpos < 6 && ypos > 5 && ypos < 9) {
		name = "carpet-floor-";
	}
	else if (xpos < 6 && ypos > 8) {
		name = "grass-";
	}
	else if ((xpos > 3 && xpos < 6 && ypos < 6) || (xpos > 5 && xpos < 10 && ypos > 5 && ypos < 9)) {
		name = "stone-";
	}
	return name;
}

function getVariant(xpos,ypos) {
	let variant = "";
	// all the full no border tile blocks
	if ((xpos < 2 && ypos < 9) || (xpos > 1 && xpos < 4 && ypos > 5 && ypos < 12)) {
		variant = "full-" + xpos.toString() + ypos.toString();
	}
	// all the other blocks with tiles
	else {
		// check if we have a weird variation
		if (xpos > 3 && xpos < 6 && ypos < 3) {
			variant += "grassy-";
		}
		else if ((xpos > 3 && xpos < 6 && ypos > 2 && ypos < 6) || (xpos < 2 && ypos > 8)) {
			variant += "sandy-";
		}
		else if (xpos > 5 && xpos < 8 && ypos < 9) {
			variant += "cave-";
		}
		else if (xpos > 7 && xpos < 10 && ypos < 9) {
			variant += "stalag-cave-";
		}
		else if (xpos > 3 && xpos < 6 && ypos > 8) {
			variant += "muddy-";
		}

		// now get all the border info
		if ((ypos == 0 || ypos == 3 || ypos == 6 || ypos == 9) && (xpos % 2 == 0)) {
			variant += "TRBL";
		}
		else if ((ypos == 0 || ypos == 3 || ypos == 6 || ypos == 9) && (xpos % 2 == 1)) {
			variant += "none";
		}
		else if (ypos == 1 || ypos == 4 || ypos == 7 || ypos == 10) {
			if (xpos % 2 == 0) {
				variant += "TL";
			}
			else {
				variant += "TR";
			}

		}
		else if (ypos == 2 || ypos == 5 || ypos == 8 || ypos == 11) {
			if (xpos % 2 == 0) {
				variant += "BL";
			}
			else {
				variant += "BR";
			}
		}
	}
	return variant;
}