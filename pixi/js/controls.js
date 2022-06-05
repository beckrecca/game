/*
* 	Given a key value, listens for that key being pressed down and released
*/
function keyboard(value) {
	const key = {};
	key.value = value;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	//The `downHandler`
	key.downHandler = (event) => {
		if (event.key === key.value) {
			if (key.isUp && key.press) {
				key.press();
			}
			key.isDown = true;
			key.isUp = false;
			event.preventDefault();
		}
	};

	//The `upHandler`
	key.upHandler = (event) => {
		if (event.key === key.value) {
			if (key.isDown && key.release) {
				key.release();
			}
			key.isDown = false;
			key.isUp = true;
			event.preventDefault();
		}
	};

	//Attach event listeners
	const downListener = key.downHandler.bind(key);
	const upListener = key.upHandler.bind(key);

	window.addEventListener("keydown", downListener, false);
	window.addEventListener("keyup", upListener, false);

	// Detach event listeners
	key.unsubscribe = () => {
		window.removeEventListener("keydown", downListener);
		window.removeEventListener("keyup", upListener);
	};

	return key;
}

function containPlayer(player) {
	// check where our player is
	playerXpos = player.getGlobalPosition().x;
	playerYpos = player.getGlobalPosition().y;

	// check how big the player's parent is
	xbound = player.parent.width;
	ybound = player.parent.height;

	xmin = 0 + player.width;
	xmax = xbound;
	ymin = 0 + player.width;
	ymax = ybound;
	console.log("xmin: " + xmin.toString() + " xmax: " + xmax.toString() + " ymin: " + ymin.toString() + " ymax: " + ymax.toString());

	// if player is about to leave the scene, stop him
	if (playerXpos > xmin && playerXpos < xmax) {
		player.x += player.vx;
	}
	else if (playerXpos <= xmin && player.vx > 0) {
		player.x += player.vx;
	}
	else if (playerXpos >= xmax && player.vx <= 0) {
		player.x += player.vx;
	}
	if (playerYpos > ymin && playerYpos < ymax) {
		player.y += player.vy;
	}
	else if (playerYpos <= ymin && player.vy > 0) {
		player.y += player.vy;
	}
	else if (playerYpos >= ymax && player.vy <= 0) {
		player.y += player.vy;
	}
}