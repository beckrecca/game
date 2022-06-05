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

function outOfBounds(player, container) {
	let collision = undefined;

	const North = [[container.x, container.y], [container.x + container.width, container.y]];
	const South = [[container.x, container.y + container.height], [container.x + container.width, container.y + container.height]];
	const East = [[container.x + container.width, container.y], [container.x + container.width, container.y + container.height]];
	const West = [[container.x, container.y], [container.x, container.y + container.height]];

	if (hitTestRectangle(player,container)) {
		// check which direction they're moving in
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
	return collision;
}

/***


*** SPRITES THAT ARE OUT OF BOUNDS ***

06: {"green-cave-TRBL" => "background-6.png"}
07: {"green-cave-none" => "background-7.png"}
08: {"green-stalag-cave-TRBL" => "background-8.png"}
09: {"green-stalag-cave-none" => "background-9.png"}
18: {"green-cave-TL" => "background-22.png"}
19: {"green-cave-TR" => "background-23.png"}
30: {"green-cave-BL" => "background-38.png"}
31: {"green-cave-BR" => "background-39.png"}
32: {"green-stalag-cave-BL" => "background-40.png"}
33: {"green-stalag-cave-BR" => "background-41.png"}
42: {"desert-cave-TRBL" => "background-54.png"}
43: {"desert-cave-none" => "background-55.png"}
44: {"desert-stalag-cave-TRBL" => "background-56.png"}
45: {"desert-stalag-cave-none" => "background-57.png"}
52: {"desert-cave-TL" => "background-70.png"}
53: {"desert-cave-TR" => "background-71.png"}
54: {"desert-stalag-cave-TL" => "background-72.png"}
55: {"desert-stalag-cave-TR" => "background-73.png"}
62: {"desert-cave-BL" => "background-86.png"}
63: {"desert-cave-BR" => "background-87.png"}
64: {"desert-stalag-cave-BL" => "background-88.png"}
65: {"desert-stalag-cave-BR" => "background-89.png"}
72: {"stone-cave-TRBL" => "background-102.png"}
73: {"stone-cave-none" => "background-103.png"}
74: {"stone-stalag-cave-TRBL" => "background-104.png"}
75: {"stone-stalag-cave-none" => "background-105.png"}
82: {"stone-cave-TL" => "background-118.png"}
83: {"stone-cave-TR" => "background-119.png"}
84: {"stone-stalag-cave-TL" => "background-120.png"}
85: {"stone-stalag-cave-TR" => "background-121.png"}
92: {"stone-cave-BL" => "background-134.png"}
93: {"stone-cave-BR" => "background-135.png"}
94: {"stone-stalag-cave-BL" => "background-136.png"}
95: {"stone-stalag-cave-BR" => "background-137.png"}
{"castle-light-TRBL" => "tiles-0.png"}
1: {"castle-light-none" => "tiles-1.png"}
2: {"red-brick-light-TRBL" => "tiles-2.png"}
3: {"red-brick-light-none" => "tiles-3.png"}
4: {"desert-light-TRBL" => "tiles-4.png"}
5: {"desert-light-none" => "tiles-5.png"}
6: {"grass-light-TRBL" => "tiles-6.png"}
7: {"grass-light-none" => "tiles-7.png"}
8: {"dirt-light-TRBL" => "tiles-8.png"}
9: {"dirt-light-none" => "tiles-9.png"}
10: {"dark-light-TRBL" => "tiles-10.png"}
11: {"dark-light-none" => "tiles-11.png"}
12: {"castle-light-TL" => "tiles-12.png"}
13: {"castle-light-TR" => "tiles-13.png"}
14: {"red-brick-light-TL" => "tiles-14.png"}
15: {"red-brick-light-TR" => "tiles-15.png"}
16: {"desert-light-TL" => "tiles-16.png"}
17: {"desert-light-TR" => "tiles-17.png"}
18: {"grass-light-TL" => "tiles-18.png"}
19: {"grass-light-TR" => "tiles-19.png"}
20: {"dirt-light-TL" => "tiles-20.png"}
21: {"dirt-light-TR" => "tiles-21.png"}
22: {"dark-light-TL" => "tiles-22.png"}
23: {"dark-light-TR" => "tiles-23.png"}
24: {"castle-light-BL" => "tiles-24.png"}
25: {"castle-light-BR" => "tiles-25.png"}
26: {"red-brick-light-BL" => "tiles-26.png"}
27: {"red-brick-light-BR" => "tiles-27.png"}
28: {"desert-light-BL" => "tiles-28.png"}
29: {"desert-light-BR" => "tiles-29.png"}
30: {"grass-light-BL" => "tiles-30.png"}
31: {"grass-light-BR" => "tiles-31.png"}
32: {"dirt-light-BL" => "tiles-32.png"}
33: {"dirt-light-BR" => "tiles-33.png"}
34: {"dark-light-BL" => "tiles-34.png"}
35: {"dark-light-BR" => "tiles-35.png"}
36: {"castle-shadow-TL" => "tiles-36.png"}
37: {"castle-shadow-TR" => "tiles-37.png"}
38: {"red-brick-shadow-TL" => "tiles-38.png"}
39: {"red-brick-shadow-TR" => "tiles-39.png"}
40: {"desert-shadow-TL" => "tiles-40.png"}
41: {"desert-shadow-TR" => "tiles-41.png"}
42: {"grass-shadow-TL" => "tiles-42.png"}
43: {"grass-shadow-TR" => "tiles-43.png"}
44: {"dirt-shadow-TL" => "tiles-44.png"}
45: {"dirt-shadow-TR" => "tiles-45.png"}
46: {"dark-shadow-TL" => "tiles-46.png"}
47: {"dark-shadow-TR" => "tiles-47.png"}
48: {"castle-shadow-BL" => "tiles-48.png"}
49: {"castle-shadow-BR" => "tiles-49.png"}
50: {"red-brick-shadow-BL" => "tiles-50.png"}
51: {"red-brick-shadow-BR" => "tiles-51.png"}
52: {"desert-shadow-BL" => "tiles-52.png"}
53: {"desert-shadow-BR" => "tiles-53.png"}
54: {"grass-shadow-BL" => "tiles-54.png"}
55: {"grass-shadow-BR" => "tiles-55.png"}
56: {"dirt-shadow-BL" => "tiles-56.png"}
57: {"dirt-shadow-BR" => "tiles-57.png"}
58: {"dark-shadow-BL" => "tiles-58.png"}
59: {"dark-shadow-BR" => "tiles-59.png"}


INTERACTIVES 
0: {"door-left-whole" => "interactives-0.png"}
1: {"door-middle-whole" => "interactives-1.png"}
2: {"door-right-whole" => "interactives-2.png"}
3: {"cell-left-whole" => "interactives-3.png"}
4: {"cell-middle-whole" => "interactives-4.png"}
5: {"cell-right-whole" => "interactives-5.png"}
6: {"chest-left-whole" => "interactives-6.png"}
7: {"chest-middle-whole" => "interactives-7.png"}
8: {"chest-right-whole" => "interactives-8.png"}
9: {"pot-left-whole" => "interactives-9.png"}
10: {"pot-middle-whole" => "interactives-10.png"}
11: {"pot-right-whole" => "interactives-11.png"}
12: {"door-left-three-quart" => "interactives-12.png"}
13: {"door-middle-three-quart" => "interactives-13.png"}
14: {"door-right-three-quart" => "interactives-14.png"}
15: {"cell-left-three-quart" => "interactives-15.png"}
16: {"cell-middle-three-quart" => "interactives-16.png"}
17: {"cell-right-three-quart" => "interactives-17.png"}
18: {"chest-left-three-quart" => "interactives-18.png"}
19: {"chest-middle-three-quart" => "interactives-19.png"}
20: {"chest-right-three-quart" => "interactives-20.png"}
21: {"pot-left-three-quart" => "interactives-21.png"}
22: {"pot-middle-three-quart" => "interactives-22.png"}
23: {"pot-right-three-quart" => "interactives-23.png"}
24: {"door-left-half" => "interactives-24.png"}
25: {"door-middle-half" => "interactives-25.png"}
26: {"door-right-half" => "interactives-26.png"}
27: {"cell-left-half" => "interactives-27.png"}
28: {"cell-middle-half" => "interactives-28.png"}
29: {"cell-right-half" => "interactives-29.png"}
30: {"chest-left-half" => "interactives-30.png"}
31: {"chest-middle-half" => "interactives-31.png"}
32: {"chest-right-half" => "interactives-32.png"}
33: {"pot-left-half" => "interactives-33.png"}
34: {"pot-middle-half" => "interactives-34.png"}
35: {"pot-right-half" => "interactives-35.png"}
36: {"door-left-through" => "interactives-36.png"}
37: {"door-middle-through" => "interactives-37.png"}
38: {"door-right-through" => "interactives-38.png"}
39: {"cell-left-through" => "interactives-39.png"}
40: {"cell-middle-through" => "interactives-40.png"}
41: {"cell-right-through" => "interactives-41.png"}
42: {"chest-left-through" => "interactives-42.png"}
43: {"chest-middle-through" => "interactives-43.png"}
44: {"chest-right-through" => "interactives-44.png"}
45: {"pot-left-through" => "interactives-45.png"}
46: {"pot-middle-through" => "interactives-46.png"}
47: {"pot-right-through" => "interactives-47.png"}
48: {"flame-left-yellow" => "interactives-48.png"}
49: {"flame-middle-yellow" => "interactives-49.png"}
50: {"flame-right-yellow" => "interactives-50.png"}
51: {"lever-left-yellow" => "interactives-51.png"}
52: {"lever-middle-yellow" => "interactives-52.png"}
53: {"lever-right-yellow" => "interactives-53.png"}
54: {"spikes-hidden-silver-square" => "interactives-54.png"}
55: {"spikes-neutral-silver-square" => "interactives-55.png"}
56: {"spikes-active-silver-square" => "interactives-56.png"}
57: {"fireplace-left-whole" => "interactives-57.png"}
58: {"fireplace-middle-whole" => "interactives-58.png"}
59: {"fireplace-right-whole" => "interactives-59.png"}
60: {"flame-left-blue" => "interactives-60.png"}
61: {"flame-middle-blue" => "interactives-61.png"}
62: {"flame-right-blue" => "interactives-62.png"}
63: {"lever-left-blue" => "interactives-63.png"}
64: {"lever-middle-blue" => "interactives-64.png"}
65: {"lever-right-blue" => "interactives-65.png"}
66: {"spikes-hidden-gold-square" => "interactives-90.png"}
67: {"spikes-neutral-gold-square" => "interactives-91.png"}
68: {"spikes-active-gold-square" => "interactives-92.png"}
69: {"fireplace-left-three-quart" => "interactives-69.png"}
70: {"fireplace-middle-three-quart" => "interactives-70.png"}
71: {"fireplace-right-three-quart" => "interactives-71.png"}
72: {"flame-left-red" => "interactives-72.png"}
73: {"flame-middle-red" => "interactives-73.png"}
74: {"flame-right-red" => "interactives-74.png"}
75: {"lever-left-red" => "interactives-75.png"}
76: {"lever-middle-red" => "interactives-76.png"}
77: {"lever-right-red" => "interactives-77.png"}
78: {"spikes-hidden-silver-diamond" => "interactives-78.png"}
79: {"spikes-neutral-silver-diamond" => "interactives-79.png"}
80: {"spikes-active-silver-diamond" => "interactives-80.png"}
81: {"fireplace-left-half" => "interactives-81.png"}
82: {"fireplace-middle-half" => "interactives-82.png"}
83: {"fireplace-right-half" => "interactives-83.png"}
84: {"flame-left-green" => "interactives-84.png"}
85: {"flame-middle-green" => "interactives-85.png"}
86: {"flame-right-green" => "interactives-86.png"}
87: {"lever-left-green" => "interactives-87.png"}
88: {"lever-middle-green" => "interactives-88.png"}
89: {"lever-right-green" => "interactives-89.png"}
90: {"fireplace-left-through" => "interactives-93.png"}
91: {"fireplace-middle-through" => "interactives-94.png"}
92: {"fireplace-right-through" => "interactives-95.png"}


CHARACTERS


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

***/