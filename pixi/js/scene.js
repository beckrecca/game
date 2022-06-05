// Get our mapped out images - turns json file frames into readable names
/**
backgroundMap = nameBackgrounds(); // background resource
buildTextureMap = nameTextures(); // build resource
spriteMap = nameSprites(); // characters resource
interactMap = nameInteractiveObjects(); // interactives resource
// not necessary for environment, paths, liquids

// Initialize image resources
backgroundTextures = resources["background"].textures;
buildTextures = resources["build"].textures;
characterTextures = resources["characters"].textures;
decorTextures = resources["environment"].textures;
interactiveTextures = resources["interactives"].textures;
liquidTextures = resources["liquids"].textures;
pathTextures = resources["paths"].textures; **/

// Get an array of background textures we want to use
function quickBackground(type = "green") {
	let background;
	if (type = "green") {
		background = [
							backgroundTextures[backgroundMap.get('grass-full-210')],
							backgroundTextures[backgroundMap.get('grass-full-211')],
							backgroundTextures[backgroundMap.get('grass-full-29')],
							backgroundTextures[backgroundMap.get('grass-full-310')],
							backgroundTextures[backgroundMap.get('grass-full-311')],
							backgroundTextures[backgroundMap.get('grass-full-39')],
							backgroundTextures[backgroundMap.get('green-full-00')],
							backgroundTextures[backgroundMap.get('green-full-01')],
							backgroundTextures[backgroundMap.get('green-full-02')],
							backgroundTextures[backgroundMap.get('green-full-10')],
							backgroundTextures[backgroundMap.get('green-full-11')],
							backgroundTextures[backgroundMap.get('green-full-12')],
							backgroundTextures[backgroundMap.get('green-none')]							];
	}
	return background;
}

function sceneBackgroundHelper(texturesArray, width, height) {
	scene = new Container();
	x = width / 32;
	y = height / 32;
	// adds random tiles from an array of tiles
	for (let v = 0; v < y; v++) {
		for (let u = 0; u < x; u++) {
			r = Math.floor(Math.random() * texturesArray.length);
			img = new Sprite(texturesArray[r]);
			img.x = u * 32;
			img.y = v * 32;
			scene.addChild(img);
		}
	}
	return scene;
}

/*
*	TEXTURE MAP KEY

***** BACKGROUNDS ******
carpet-floor-BL
carpet-floor-BR
carpet-floor-none
carpet-floor-TL
carpet-floor-TR
carpet-floor-TRBL
desert-BL
desert-BR
desert-cave-BL
desert-cave-BR
desert-cave-none
desert-cave-TL
desert-cave-TR
desert-cave-TRBL
desert-full-03
desert-full-04
desert-full-05
desert-full-13
desert-full-14
desert-full-15
desert-none
desert-stalag-cave-BL
desert-stalag-cave-BR
desert-stalag-cave-none
desert-stalag-cave-TL
desert-stalag-cave-TR
desert-stalag-cave-TRBL
desert-TL
desert-TR
desert-TRBL
fairy-lights-BL
fairy-lights-BR
fairy-lights-none
fairy-lights-TL
fairy-lights-TR
fairy-lights-TRBL
grass-full-210
grass-full-211
grass-full-29
grass-full-310
grass-full-311
grass-full-39
grass-muddy-BL
grass-muddy-BR
grass-muddy-none
grass-muddy-TL
grass-muddy-TR
grass-muddy-TRBL
grass-sandy-BL
grass-sandy-BR
grass-sandy-none
grass-sandy-TL
grass-sandy-TR
grass-sandy-TRBL
green-BL
green-BR
green-cave-BL
green-cave-BR
green-cave-none
green-cave-TL
green-cave-TR
green-cave-TRBL
green-full-00
green-full-01
green-full-02
green-full-10
green-full-11
green-full-12
green-none
green-stalag-cave-BL
green-stalag-cave-BR
green-stalag-cave-none
green-stalag-cave-TL
green-stalag-cave-TR
green-stalag-cave-TRBL
green-TL
green-TR
green-TRBL
stone-cave-BL
stone-cave-BR
stone-cave-none
stone-cave-TL
stone-cave-TR
stone-cave-TRBL
stone-floor-full-26
stone-floor-full-27
stone-floor-full-28
stone-floor-full-36
stone-floor-full-37
stone-floor-full-38
stone-grassy-BL
stone-grassy-BR
stone-grassy-none
stone-grassy-TL
stone-grassy-TR
stone-grassy-TRBL
stone-sandy-BL
stone-sandy-BR
stone-sandy-none
stone-sandy-TL
stone-sandy-TR
stone-sandy-TRBL
stone-stalag-cave-BL
stone-stalag-cave-BR
stone-stalag-cave-none
stone-stalag-cave-TL
stone-stalag-cave-TR
stone-stalag-cave-TRBL
wood-floor-full-06
wood-floor-full-07
wood-floor-full-08
wood-floor-full-16
wood-floor-full-17
wood-floor-full-18

***** BUILD ********
castle-light-BL
castle-light-BR
castle-light-none
castle-light-TL
castle-light-TR
castle-light-TRBL
castle-shadow-BL
castle-shadow-BR
castle-shadow-TL
castle-shadow-TR
dark-light-BL
dark-light-BR
dark-light-none
dark-light-TL
dark-light-TR
dark-light-TRBL
dark-shadow-BL
dark-shadow-BR
dark-shadow-TL
dark-shadow-TR
desert-light-BL
desert-light-BR
desert-light-none
desert-light-TL
desert-light-TR
desert-light-TRBL
desert-shadow-BL
desert-shadow-BR
desert-shadow-TL
desert-shadow-TR
dirt-light-BL
dirt-light-BR
dirt-light-none
dirt-light-TL
dirt-light-TR
dirt-light-TRBL
dirt-shadow-BL
dirt-shadow-BR
dirt-shadow-TL
dirt-shadow-TR
grass-light-BL
grass-light-BR
grass-light-none
grass-light-TL
grass-light-TR
grass-light-TRBL
grass-shadow-BL
grass-shadow-BR
grass-shadow-TL
grass-shadow-TR
red-brick-light-BL
red-brick-light-BR
red-brick-light-none
red-brick-light-TL
red-brick-light-TR
red-brick-light-TRBL
red-brick-shadow-BL
red-brick-shadow-BR
red-brick-shadow-TL
red-brick-shadow-TR

***** INTERACTIVES ******
cell-left-half
cell-left-three-quart
cell-left-through
cell-left-whole
cell-middle-half
cell-middle-three-quart
cell-middle-through
cell-middle-whole
cell-right-half
cell-right-three-quart
cell-right-through
cell-right-whole
chest-left-half
chest-left-three-quart
chest-left-through
chest-left-whole
chest-middle-half
chest-middle-three-quart
chest-middle-through
chest-middle-whole
chest-right-half
chest-right-three-quart
chest-right-through
chest-right-whole
door-left-half
door-left-three-quart
door-left-through
door-left-whole
door-middle-half
door-middle-three-quart
door-middle-through
door-middle-whole
door-right-half
door-right-three-quart
door-right-through
door-right-whole
fireplace-right-half
fireplace-right-three-quart
fireplace-right-through
fireplace-right-whole
fireplace-left-half
fireplace-left-three-quart
fireplace-left-through
fireplace-left-whole
fireplace-middle-half
fireplace-middle-three-quart
fireplace-middle-through
fireplace-middle-whole
flame-left-blue
flame-left-green
flame-left-red
flame-left-yellow
flame-middle-blue
flame-middle-green
flame-middle-red
flame-middle-yellow
flame-right-blue
flame-right-green
flame-right-red
flame-right-yellow
lever-left-blue
lever-left-green
lever-left-red
lever-left-yellow
lever-middle-blue
lever-middle-green
lever-middle-red
lever-middle-yellow
lever-right-blue
lever-right-green
lever-right-red
lever-right-yellow
pot-left-half
pot-left-three-quart
pot-left-through
pot-left-whole
pot-middle-half
pot-middle-three-quart
pot-middle-through
pot-middle-whole
pot-right-half
pot-right-three-quart
pot-right-through
pot-right-whole
spikes-active-gold-square
spikes-active-silver-diamond
spikes-active-silver-square
spikes-hidden-gold-square
spikes-hidden-silver-diamond
spikes-hidden-silver-square
spikes-neutral-gold-square
spikes-neutral-silver-diamond
spikes-neutral-silver-square

*/
