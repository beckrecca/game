/*
*	Defines a Scene object where a scene is made up of 32x32 images.
*/ 
class Scene {
	constructor (height, width, cell = "tiles-0.png") {
		this.height = height;
		this.width = width;
		this.columns = height/32;
		this.rows = width/32;
		// create an array of default tiles
		this.cells = [...Array(this.rows)].map(e => Array(this.columns).fill(cell));
	}

	setScene(textures) {
		for (let y = 0; y < this.rows; y++) {
			for (let x = 0; x < this.columns; x++) {
				let cell = new Sprite(textures[this.cells[y][x]]);
				cell.x = (x*32);
				cell.y = (y*32);
				cell.interactive = "true";
				let textureNum = parseInt((this.cells[y][x].split("-")[1]).split(".")[0]);
				let nextTextNum = textureNum;
				let nextTexture;
				cell.on('pointertap', () => {
					// Increment to the next tile in our atlas unless it's the last one
					if (nextTextNum < 65) {
						nextTextNum++;
					}
					else {
						nextTextNum = 0;
					}
					nextTexture = "tiles-" + nextTextNum.toString() + ".png";
					cell.texture = textures[nextTexture];
					this.setCell(x,y,nextTexture);
				});
				app.stage.addChild(cell);
			}
		}
	}

	getTexture(x,y) {
		return this.cells[y][x];
	}

	setCell(x,y,texture) {
		this.cells[y][x] = texture;
	}

	loadScene(scene) {
		this.cells = scene;
	}

	getJSON() {
		return JSON.parse(this.cells);
	}

	practiceScene() {
		const scene = [["tiles-18.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-19.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-31.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-13.png","tiles-25.png","tiles-7.png","tiles-12.png","tiles-30.png","tiles-25.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-24.png","tiles-24.png","tiles-7.png","tiles-13.png","tiles-24.png","tiles-25.png","tiles-12.png","tiles-13.png","tiles-25.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-9.png","tiles-9.png","tiles-12.png","tiles-25.png","tiles-1.png","tiles-1.png","tiles-12.png","tiles-13.png","tiles-13.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-9.png","tiles-7.png"],["tiles-7.png","tiles-43.png","tiles-36.png","tiles-49.png","tiles-37.png","tiles-49.png","tiles-49.png","tiles-1.png","tiles-1.png","tiles-0.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-9.png","tiles-7.png"],["tiles-7.png","tiles-41.png","tiles-40.png","tiles-41.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-5.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-9.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-16.png","tiles-5.png","tiles-29.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-5.png","tiles-18.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-5.png","tiles-29.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-28.png","tiles-18.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-23.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-11.png","tiles-11.png","tiles-11.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png"],["tiles-30.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-11.png","tiles-11.png","tiles-11.png","tiles-11.png","tiles-11.png","tiles-11.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-7.png","tiles-31.png"]];
		return scene;
	}
}