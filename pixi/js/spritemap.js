/*
0: {"naked-moving-forward" => "characters-0.png"}
1: {"naked-still-forward" => "characters-1.png"}
2: {"naked-moving-alt-forward" => "characters-2.png"}
3: {"handsome-moving-forward" => "characters-3.png"}
4: {"handsome-still-forward" => "characters-4.png"}
5: {"handsome-moving-alt-forward" => "characters-5.png"}
6: {"blonde-moving-forward" => "characters-6.png"}
7: {"blonde-still-forward" => "characters-7.png"}
8: {"blonde-moving-alt-forward" => "characters-8.png"}
9: {"skelly-moving-forward" => "characters-9.png"}
10: {"skelly-still-forward" => "characters-10.png"}
11: {"skelly-moving-alt-forward" => "characters-11.png"}
12: {"naked-moving-left" => "characters-12.png"}
13: {"naked-still-left" => "characters-13.png"}
14: {"naked-moving-alt-left" => "characters-14.png"}
15: {"handsome-moving-left" => "characters-15.png"}
16: {"handsome-still-left" => "characters-16.png"}
17: {"handsome-moving-alt-left" => "characters-17.png"}
18: {"blonde-moving-left" => "characters-18.png"}
19: {"blonde-still-left" => "characters-19.png"}
20: {"blonde-moving-alt-left" => "characters-20.png"}
21: {"skelly-moving-left" => "characters-21.png"}
22: {"skelly-still-left" => "characters-22.png"}
23: {"skelly-moving-alt-left" => "characters-23.png"}
24: {"naked-moving-right" => "characters-24.png"}
25: {"naked-still-right" => "characters-25.png"}
26: {"naked-moving-alt-right" => "characters-26.png"}
27: {"handsome-moving-right" => "characters-27.png"}
28: {"handsome-still-right" => "characters-28.png"}
29: {"handsome-moving-alt-right" => "characters-29.png"}
30: {"blonde-moving-right" => "characters-30.png"}
31: {"blonde-still-right" => "characters-31.png"}
32: {"blonde-moving-alt-right" => "characters-32.png"}
33: {"skelly-moving-right" => "characters-33.png"}
34: {"skelly-still-right" => "characters-34.png"}
35: {"skelly-moving-alt-right" => "characters-35.png"}
36: {"naked-moving-back" => "characters-36.png"}
37: {"naked-still-back" => "characters-37.png"}
38: {"naked-moving-alt-back" => "characters-38.png"}
39: {"handsome-moving-back" => "characters-39.png"}
40: {"handsome-still-back" => "characters-40.png"}
41: {"handsome-moving-alt-back" => "characters-41.png"}
42: {"blonde-moving-back" => "characters-42.png"}
43: {"blonde-still-back" => "characters-43.png"}
44: {"blonde-moving-alt-back" => "characters-44.png"}
45: {"skelly-moving-back" => "characters-45.png"}
46: {"skelly-still-back" => "characters-46.png"}
47: {"skelly-moving-alt-back" => "characters-47.png"}
48: {"slime-moving-forward" => "characters-48.png"}
49: {"slime-still-forward" => "characters-49.png"}
50: {"slime-moving-alt-forward" => "characters-50.png"}
51: {"snoodle-moving-forward" => "characters-51.png"}
52: {"snoodle-still-forward" => "characters-52.png"}
53: {"snoodle-moving-alt-forward" => "characters-53.png"}
54: {"boo-moving-forward" => "characters-54.png"}
55: {"boo-still-forward" => "characters-55.png"}
56: {"boo-moving-alt-forward" => "characters-56.png"}
57: {"bitey-moving-forward" => "characters-57.png"}
58: {"bitey-still-forward" => "characters-58.png"}
59: {"bitey-moving-alt-forward" => "characters-59.png"}
60: {"slime-moving-left" => "characters-60.png"}
61: {"slime-still-left" => "characters-61.png"}
62: {"slime-moving-alt-left" => "characters-62.png"}
63: {"snoodle-moving-left" => "characters-63.png"}
64: {"snoodle-still-left" => "characters-64.png"}
65: {"snoodle-moving-alt-left" => "characters-65.png"}
66: {"boo-moving-left" => "characters-66.png"}
67: {"boo-still-left" => "characters-67.png"}
68: {"boo-moving-alt-left" => "characters-68.png"}
69: {"bitey-moving-left" => "characters-69.png"}
70: {"bitey-still-left" => "characters-70.png"}
71: {"bitey-moving-alt-left" => "characters-71.png"}
72: {"slime-moving-right" => "characters-72.png"}
73: {"slime-still-right" => "characters-73.png"}
74: {"slime-moving-alt-right" => "characters-74.png"}
75: {"snoodle-moving-right" => "characters-75.png"}
76: {"snoodle-still-right" => "characters-76.png"}
77: {"snoodle-moving-alt-right" => "characters-77.png"}
78: {"boo-moving-right" => "characters-78.png"}
79: {"boo-still-right" => "characters-79.png"}
80: {"boo-moving-alt-right" => "characters-80.png"}
81: {"bitey-moving-right" => "characters-81.png"}
82: {"bitey-still-right" => "characters-82.png"}
83: {"bitey-moving-alt-right" => "characters-83.png"}
84: {"slime-moving-back" => "characters-84.png"}
85: {"slime-still-back" => "characters-85.png"}
86: {"slime-moving-alt-back" => "characters-86.png"}
87: {"snoodle-moving-back" => "characters-87.png"}
88: {"snoodle-still-back" => "characters-88.png"}
89: {"snoodle-moving-alt-back" => "characters-89.png"}
90: {"boo-moving-back" => "characters-90.png"}
91: {"boo-still-back" => "characters-91.png"}
92: {"boo-moving-alt-back" => "characters-92.png"}
93: {"bitey-moving-back" => "characters-93.png"}
94: {"bitey-still-back" => "characters-94.png"}
95: {"bitey-moving-alt-back" => "characters-95.png"}
*/

function nameSprites() {
	const x = 12;
	const y = 8;

	tileCount = x * y;
	const tiles = new Map();

	let name, motion, facing;

	for (let t = 0; t < tileCount; t++) {
		//console.log("\nTile Number: " + t.toString());

		xpos = t % x;
		//console.log("xpos: " + xpos);

		ypos = Math.floor(t / x);
		//console.log("ypos: " + ypos);

		name = getSpriteName(xpos,ypos);

		//console.log("Name: " + name);

		motion = getMotion(t);

		//console.log("Motion: " + motion);

		facing = getFacing(ypos);

		//console.log("Facing: " + facing);

		let namestring = name + '-' + motion + '-' + facing;

		//console.log("New name of tile: " + namestring);

		//console.log("Real name of tile: " + "tiles-" + t.toString() + ".png");

		tiles.set(namestring,"characters-" + t.toString() + ".png");
	}
	return tiles;
}

function getSpriteName(xpos,ypos) {
	let name;
	if (ypos < 4) {
		switch (xpos) {
			case 0:
				name = "naked";
				break;
			case 1:
				name = "naked";
				break;
			case 2:
				name = "naked";
				break;
			case 3:
				name = "handsome";
				break;
			case 4:
				name = "handsome";
				break;
			case 5:
				name = "handsome";
				break;
			case 6:
				name = "blonde";
				break;
			case 7:
				name = "blonde";
				break;
			case 8:
				name = "blonde";
				break;
			case 9:
				name = "skelly";
				break;
			case 10:
				name = "skelly";
				break;
			case 11:
				name = "skelly";
				break;
		}
	}
	else {
		switch (xpos) {
			case 0:
				name = "slime";
				break;
			case 1:
				name = "slime";
				break;
			case 2:
				name = "slime";
				break;
			case 3:
				name = "snoodle";
				break;
			case 4:
				name = "snoodle";
				break;
			case 5:
				name = "snoodle";
				break;
			case 6:
				name = "boo";
				break;
			case 7:
				name = "boo";
				break;
			case 8:
				name = "boo";
				break;
			case 9:
				name = "bitey";
				break;
			case 10:
				name = "bitey";
				break;
			case 11:
				name = "bitey";
				break;
		}
	}
	return name;
}

function getMotion(t) {
	let motion;
	if (t % 3 == 0) {
		motion = "moving";
	}
	else if (t % 3 == 1) {
		motion = "still";
	}
	else if (t % 3 == 2) {
		motion = "moving-alt";
	}
	return motion;
}

function getFacing(ypos) {
	let facing;
	switch (ypos) {
		case 0:
			facing = "forward";
			break;
		case 1:
			facing = "left";
			break;
		case 2:
			facing = "right";
			break;
		case 3:
			facing = "back";
			break;
		case 4:
			facing = "forward";
			break;
		case 5:
			facing = "left";
			break;
		case 6:
			facing = "right";
			break;
		case 7:
			facing = "back";
			break;
	}
	return facing;
}