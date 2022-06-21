/*
0: {"steve-moving-forward" => "characters-0.png"}
1: {"steve-still-forward" => "characters-1.png"}
2: {"steve-moving-alt-forward" => "characters-2.png"}
3: {"handsome-moving-forward" => "characters-3.png"}
4: {"handsome-still-forward" => "characters-4.png"}
5: {"handsome-moving-alt-forward" => "characters-5.png"}
6: {"blonde-moving-forward" => "characters-6.png"}
7: {"blonde-still-forward" => "characters-7.png"}
8: {"blonde-moving-alt-forward" => "characters-8.png"}
9: {"sam-moving-forward" => "characters-9.png"}
10: {"sam-still-forward" => "characters-10.png"}
11: {"sam-moving-alt-forward" => "characters-11.png"}
12: {"steve-moving-left" => "characters-12.png"}
13: {"steve-still-left" => "characters-13.png"}
14: {"steve-moving-alt-left" => "characters-14.png"}
15: {"handsome-moving-left" => "characters-15.png"}
16: {"handsome-still-left" => "characters-16.png"}
17: {"handsome-moving-alt-left" => "characters-17.png"}
18: {"blonde-moving-left" => "characters-18.png"}
19: {"blonde-still-left" => "characters-19.png"}
20: {"blonde-moving-alt-left" => "characters-20.png"}
21: {"sam-moving-left" => "characters-21.png"}
22: {"sam-still-left" => "characters-22.png"}
23: {"sam-moving-alt-left" => "characters-23.png"}
24: {"steve-moving-right" => "characters-24.png"}
25: {"steve-still-right" => "characters-25.png"}
26: {"steve-moving-alt-right" => "characters-26.png"}
27: {"handsome-moving-right" => "characters-27.png"}
28: {"handsome-still-right" => "characters-28.png"}
29: {"handsome-moving-alt-right" => "characters-29.png"}
30: {"blonde-moving-right" => "characters-30.png"}
31: {"blonde-still-right" => "characters-31.png"}
32: {"blonde-moving-alt-right" => "characters-32.png"}
33: {"sam-moving-right" => "characters-33.png"}
34: {"sam-still-right" => "characters-34.png"}
35: {"sam-moving-alt-right" => "characters-35.png"}
36: {"steve-moving-back" => "characters-36.png"}
37: {"steve-still-back" => "characters-37.png"}
38: {"steve-moving-alt-back" => "characters-38.png"}
39: {"handsome-moving-back" => "characters-39.png"}
40: {"handsome-still-back" => "characters-40.png"}
41: {"handsome-moving-alt-back" => "characters-41.png"}
42: {"blonde-moving-back" => "characters-42.png"}
43: {"blonde-still-back" => "characters-43.png"}
44: {"blonde-moving-alt-back" => "characters-44.png"}
45: {"sam-moving-back" => "characters-45.png"}
46: {"sam-still-back" => "characters-46.png"}
47: {"sam-moving-alt-back" => "characters-47.png"}
48: {"slime-moving-forward" => "characters-48.png"}
49: {"slime-still-forward" => "characters-49.png"}
50: {"slime-moving-alt-forward" => "characters-50.png"}
51: {"snoodle-moving-forward" => "characters-51.png"}
52: {"snoodle-still-forward" => "characters-52.png"}
53: {"snoodle-moving-alt-forward" => "characters-53.png"}
54: {"sara-moving-forward" => "characters-54.png"}
55: {"sara-still-forward" => "characters-55.png"}
56: {"sara-moving-alt-forward" => "characters-56.png"}
57: {"nectarine-moving-forward" => "characters-57.png"}
58: {"nectarine-still-forward" => "characters-58.png"}
59: {"nectarine-moving-alt-forward" => "characters-59.png"}
60: {"slime-moving-left" => "characters-60.png"}
61: {"slime-still-left" => "characters-61.png"}
62: {"slime-moving-alt-left" => "characters-62.png"}
63: {"snoodle-moving-left" => "characters-63.png"}
64: {"snoodle-still-left" => "characters-64.png"}
65: {"snoodle-moving-alt-left" => "characters-65.png"}
66: {"sara-moving-left" => "characters-66.png"}
67: {"sara-still-left" => "characters-67.png"}
68: {"sara-moving-alt-left" => "characters-68.png"}
69: {"nectarine-moving-left" => "characters-69.png"}
70: {"nectarine-still-left" => "characters-70.png"}
71: {"nectarine-moving-alt-left" => "characters-71.png"}
72: {"slime-moving-right" => "characters-72.png"}
73: {"slime-still-right" => "characters-73.png"}
74: {"slime-moving-alt-right" => "characters-74.png"}
75: {"snoodle-moving-right" => "characters-75.png"}
76: {"snoodle-still-right" => "characters-76.png"}
77: {"snoodle-moving-alt-right" => "characters-77.png"}
78: {"sara-moving-right" => "characters-78.png"}
79: {"sara-still-right" => "characters-79.png"}
80: {"sara-moving-alt-right" => "characters-80.png"}
81: {"nectarine-moving-right" => "characters-81.png"}
82: {"nectarine-still-right" => "characters-82.png"}
83: {"nectarine-moving-alt-right" => "characters-83.png"}
84: {"slime-moving-back" => "characters-84.png"}
85: {"slime-still-back" => "characters-85.png"}
86: {"slime-moving-alt-back" => "characters-86.png"}
87: {"snoodle-moving-back" => "characters-87.png"}
88: {"snoodle-still-back" => "characters-88.png"}
89: {"snoodle-moving-alt-back" => "characters-89.png"}
90: {"sara-moving-back" => "characters-90.png"}
91: {"sara-still-back" => "characters-91.png"}
92: {"sara-moving-alt-back" => "characters-92.png"}
93: {"nectarine-moving-back" => "characters-93.png"}
94: {"nectarine-still-back" => "characters-94.png"}
95: {"nectarine-moving-alt-back" => "characters-95.png"}
*/

function nameSprites() {
	const x = 12;
	const y = 8;

	tileCount = x * y;
	const tiles = new Map();

	let name, motion, facing;

	for (let t = 0; t < tileCount; t++) {
		// get the x,y position from a 12 x 8 grid
		xpos = t % x;
		ypos = Math.floor(t / x);
		name = getSpriteName(xpos,ypos);
		motion = getMotion(t);
		facing = getFacing(ypos);
		let namestring = name + '-' + motion + '-' + facing;
		tiles.set(namestring,"characters-" + t.toString() + ".png");
	}
	return tiles;
}

function getSpriteName(xpos,ypos) {
	let name;
	if (ypos < 4) {
		switch (xpos) {
			case 0:
				name = "steve";
				break;
			case 1:
				name = "steve";
				break;
			case 2:
				name = "steve";
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
				name = "sam";
				break;
			case 10:
				name = "sam";
				break;
			case 11:
				name = "sam";
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
				name = "sara";
				break;
			case 7:
				name = "sara";
				break;
			case 8:
				name = "sara";
				break;
			case 9:
				name = "nectarine";
				break;
			case 10:
				name = "nectarine";
				break;
			case 11:
				name = "nectarine";
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