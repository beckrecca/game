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
	playerXpos = player.x;
	playerYpos = player.y;

	// check how big the player's parent is
	xbound = player.parent.width;
	ybound = player.parent.height;

	xmin = 0;
	xmax = xbound - player.width;
	ymin = 0;
	ymax = ybound- player.width;;

	// if player is about to leave the scene, stop him
	if (playerXpos > xmin && playerXpos < xmax) {
		player.x += player.vx;/**
		console.log("playerx: " + playerXpos);
		console.log("playery: " + playerYpos);
		console.log("xmin: " + xmin);
		console.log("xmax: " + xmax);
		console.log("ymin: " + ymin);
		console.log("ymax: " + ymax); **/
	}
	else if (playerXpos <= xmin && player.vx > 0) {
		player.x += player.vx;/**
		console.log("playerx: " + playerXpos);
		console.log("playery: " + playerYpos);
		console.log("xmin: " + xmin);
		console.log("xmax: " + xmax);
		console.log("ymin: " + ymin);
		console.log("ymax: " + ymax); **/
	}
	else if (playerXpos >= xmax && player.vx <= 0) {
		player.x += player.vx;/**
		console.log("playerx: " + playerXpos);
		console.log("playery: " + playerYpos);
		console.log("xmin: " + xmin);
		console.log("xmax: " + xmax);
		console.log("ymin: " + ymin);
		console.log("ymax: " + ymax); **/
	}
	if (playerYpos > ymin && playerYpos < ymax) {
		player.y += player.vy;/**
		console.log("playerx: " + playerXpos);
		console.log("playery: " + playerYpos);
		console.log("xmin: " + xmin);
		console.log("xmax: " + xmax);
		console.log("ymin: " + ymin);
		console.log("ymax: " + ymax); **/
	}
	else if (playerYpos <= ymin && player.vy > 0) {
		player.y += player.vy;/**
		console.log("playerx: " + playerXpos);
		console.log("playery: " + playerYpos);
		console.log("xmin: " + xmin);
		console.log("xmax: " + xmax);
		console.log("ymin: " + ymin);
		console.log("ymax: " + ymax); **/
	}
	else if (playerYpos >= ymax && player.vy <= 0) {
		player.y += player.vy; /**
		console.log("playerx: " + playerXpos);
		console.log("playery: " + playerYpos);
		console.log("xmin: " + xmin);
		console.log("xmax: " + xmax);
		console.log("ymin: " + ymin);
		console.log("ymax: " + ymax); **/
	}
}

function hitTestRectangle(r1, r2) {

	//Define the variables we'll need to calculate
	let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

	//hit will determine whether there's a collision
	hit = false;

	//Find the center points of each sprite
	r1.centerX = r1.x + r1.width / 2;
	r1.centerY = r1.y + r1.height / 2;
	r2.centerX = r2.x + r2.width / 2;
	r2.centerY = r2.y + r2.height / 2;

	//Find the half-widths and half-heights of each sprite
	r1.halfWidth = r1.width / 2;
	r1.halfHeight = r1.height / 2;
	r2.halfWidth = r2.width / 2;
	r2.halfHeight = r2.height / 2;

	//Calculate the distance vector between the sprites
	vx = r1.centerX - r2.centerX;
	vy = r1.centerY - r2.centerY;

	//Figure out the combined half-widths and half-heights
	combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	combinedHalfHeights = r1.halfHeight + r2.halfHeight;

	//Check for a collision on the x axis
	if (Math.abs(vx) < combinedHalfWidths) {

	//A collision might be occurring. Check for a collision on the y axis
	if (Math.abs(vy) < combinedHalfHeights) {

	//There's definitely a collision happening
		hit = true;
	} else {

	//There's no collision on the y axis
		hit = false;
	}
	} else {

	//There's no collision on the x axis
		hit = false;
	}

	//`hit` will be either `true` or `false`
	return hit;
};

function worldMapNavigator(player, container, name) {
	let place = undefined;

	if (hitTestRectangle(player,container)) {
		console.log("collision happening with " + name);
		// check which direction they're moving in
		place = name;
		if (player.vx < 0) {
			player.x = container.x + container.width;
			collision = "right";
		}
		if (player.vx > 0) {
			player.x = container.x - player.width;
			collision = "left";
		}
		if (player.vy < 0) {
			player.y = container.y + container.height;
			collision = "bottom";
		}
		if (player.vy > 0) {
			player.y = container.y - player.height;
			collision = "top";
		}
	}
	return place;
}

function collisionDetector(player, container, name) {
	let collider = undefined;

	if (hitTestRectangle(player,container) && container.parent.visible == true) {
		console.log("collision happening with " + name);
		collider = name;
	}

	return collider;
}