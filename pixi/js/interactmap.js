/*
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
59: {"fireplace -right-whole" => "interactives-59.png"}
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
71: {"fireplace -right-three-quart" => "interactives-71.png"}
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
83: {"fireplace -right-half" => "interactives-83.png"}
84: {"flame-left-green" => "interactives-84.png"}
85: {"flame-middle-green" => "interactives-85.png"}
86: {"flame-right-green" => "interactives-86.png"}
87: {"lever-left-green" => "interactives-87.png"}
88: {"lever-middle-green" => "interactives-88.png"}
89: {"lever-right-green" => "interactives-89.png"}
90: {"fireplace-left-through" => "interactives-93.png"}
91: {"fireplace-middle-through" => "interactives-94.png"}
92: {"fireplace -right-through" => "interactives-95.png"}
*/

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
				name = "fireplace ";
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