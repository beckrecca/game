function nameInteractiveObjects() {
	const x = 12;
	const y = 8;

	tileCount = x * y;
	const tiles = new Map();

	let name, variant, phase;

	for (let t = 0; t < tileCount; t++) {
		// get the x,y position from a 12 x 8 grid
		xpos = t % x;
		ypos = Math.floor(t / x);
		name = getObjectName(xpos,ypos);
		variant = getInteractiveVariant(t,xpos,ypos);
		phase = getPhase(t,xpos,ypos);
		let namestring = name + '-' + variant + '-' + phase;
		tiles.set(namestring,"interactives-" + t.toString() + ".png");
	}
	return tiles;
}

function getObjectName(xpos,ypos) {
	let name;
	if (ypos < 4) {
		switch (xpos) {
			case 0:
				name = "door";
				break;
			case 1:
				name = "door";
				break;
			case 2:
				name = "door";
				break;
			case 3:
				name = "cell";
				break;
			case 4:
				name = "cell";
				break;
			case 5:
				name = "cell";
				break;
			case 6:
				name = "chest";
				break;
			case 7:
				name = "chest";
				break;
			case 8:
				name = "chest";
				break;
			case 9:
				name = "pot";
				break;
			case 10:
				name = "pot";
				break;
			case 11:
				name = "pot";
				break;
		}
	}
	else {
		switch (xpos) {
			case 0:
				name = "flame";
				break;
			case 1:
				name = "flame";
				break;
			case 2:
				name = "flame";
				break;
			case 3:
				name = "lever";
				break;
			case 4:
				name = "lever";
				break;
			case 5:
				name = "lever";
				break;
			case 6:
				name = "spikes";
				break;
			case 7:
				name = "spikes";
				break;
			case 8:
				name = "spikes";
				break;
			case 9:
				name = "fireplace";
				break;
			case 10:
				name = "fireplace";
				break;
			case 11:
				name = "fireplace";
				break;
		}
	}
	return name;
}

function getInteractiveVariant(t,xpos,ypos) {
	let variant;
	if (ypos > 3 && xpos > 5 && xpos < 9) {
		if (t % 3 == 0) {
		variant = "hidden";
		}
		else if (t % 3 == 1) {
			variant = "neutral";
		}
		else if (t % 3 == 2) {
			variant = "active";
		}
	}
	else {
		if (t % 3 == 0) {
		variant = "left";
		}
		else if (t % 3 == 1) {
			variant = "middle";
		}
		else if (t % 3 == 2) {
			variant = "right";
		}
	}
	
	return variant;
}

function getPhase(t,xpos,ypos) {
	let phase;
	if (ypos > 3 && xpos > 5 && xpos < 9) {
		switch (ypos) {
			case 4:
				phase = "silver-square";
				break;
			case 5:
				phase = "gold-square";
				break;
			case 6:
				phase = "silver-diamond";
				break;
			case 7:
				phase = "gold-square";
				break;
		}
	}
	else if (ypos > 3 && xpos < 6) {
		switch (ypos) {
			case 4:
				phase = "yellow";
				break;
			case 5:
				phase = "blue";
				break;
			case 6:
				phase = "red";
				break;
			case 7:
				phase = "green";
				break;
		}
	}
	else {
		switch (ypos) {
			case 0:
				phase = "whole";
				break;
			case 1:
				phase = "three-quart";
				break;
			case 2:
				phase = "half";
				break;
			case 3:
				phase = "through";
				break;
			case 4:
				phase = "whole";
				break;
			case 5:
				phase = "three-quart";
				break;
			case 6:
				phase = "half";
				break;
			case 7:
				phase = "through";
				break;
		}
	}
	return phase;
}