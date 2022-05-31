function newtilemap() {
	const tilemap = new tileMap.CompositeRectTileLayer();
	stage.add(tilemap);

	// now build the tilemap
	let frame = 0;
	buildTilemap(frame++);

	// create a sprite for a single tile
	textures = resources["maps"].textures;
	pic = new Sprite(textures["tiles-19.png"]);
	pic.position.set(200,100);
	stage.addChild(pic);
}

function buildTilemap(frame) {
    //Clear everything, like a PIXI.Graphics
    tilemap.clear();
    let textures = resources["maps"].textures;

    // grab some random tiles
    frame1 = textures["tiles-2.png"];
    frame2 = textures["tiles-18.png"];
    frame3 = textures["tiles-13.png"];
    frame4 = textures["tiles-25.png"];

    var size = 32;
    // if you are too lazy, just specify filename and pixi will find it in cache
    for (var i = 0; i < 7; i++)
        for (var j = 0; j < 5; j++) {
            tilemap.addFrame(frame1, i * size, j * size);
            if (i % 2 == 1 && j % 2 == 1)
                tilemap.addFrame(frame2, i * size, j * size);
        }

    // if you are lawful citizen, please use textures from
    tilemap.addFrame(textures[frame3], 2 * size, 2 * size);
    tilemap.addFrame(textures[frame4], 2 * size, 3 * size);

    //chest will be animated!
    //old way: animate on rebuild
    // tilemap.addFrame(textures[frame % 2 == 0 ? "chest.png" : "red_chest.png"], 4 * size, 4 * size);

    // new way: animate on shader: 2 frames , X offset is 32 , "red_chest" is exactly 34 pixels right in the atlas
    tilemap.addFrame(textures["tiles-30.png"], 4 * size, 4 * size).tileAnimX(34, 2);

    // if you want rotations:
    // https://pixijs.io/examples-v4/#/textures/texture-rotate.js
    // textures should have frame, orig and trim to do that
    // canvas in pixi-tilemap does not work with rotate!!!!
    let origTex = textures["tiles-1.png"];
    for (let i = 0; i < 8; i++) {
        const frame = origTex.frame.clone();
        const orig = origTex.orig.clone();
        const trim = origTex.orig.clone();
        const rotate = i * 2;
        if (rotate % 4 == 2) {
            orig.width = frame.height;
            orig.height = frame.width;
        }
        const tmpTex = new PIXI.Texture(origTex.baseTexture, frame, orig, trim, rotate);
        // Swap W and H in orig if you rotate%4 is not 0
        tilemap.addFrame(tmpTex, i % 4 * size, (i >> 2) * size + 5 * size);
        // rotate is also last parameter in addFrame
    }
}