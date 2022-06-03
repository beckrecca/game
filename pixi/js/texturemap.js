/*
0: {"castle-light-TRBL" => "tiles-0.png"}
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

*/

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