''' Makes a JSON item like

"characters-0.png":
{
	"frame": {"x":0,"y":0,"w":32,"h":32},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
	"sourceSize": {"w":32,"h":32}
}
512 * 384

16 * 12
'''
def frame(x,y,name,count):
	x_coord = 32 * x
	y_coord = 32 * y
	title = '"' + name + '-' + str(count) + '.png":'
	frame = '"frame": {"x":' + str(x_coord) + ', "y":' + str(y_coord) + ',"w":32,"h":32},'
	remaining = '"rotated": false, "trimmed": false, "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32}, "sourceSize": {"w":32,"h":32}'
	return title + '{' + frame + remaining + '}'

def animations(r,name,outofbounds):
	title = '"animations":'
	animations = ''
	for i in range(r):
		if (i not in outofbounds):
			animations += '"' + name + '-' + str(i) + '.png",'
			if (i > 181):
				break;
	animations = animations[:-1]
	return title + '{"' + name + '":[' + animations + ']}'


json_string = '{"frames":{'
name = 'background'
count = 0
# list of out of bounds tiles
outofbounds = [10,11,12,13,26,27,28,29,42,43,44,45,58,59,60,61,62,63,74,75,76,77,78,79,90,91,92,93,94,95,106,107,108,109,110,111,122,123,124,125,126,127,138,139,140,141,142,143,150,151, 152, 153, 154, 155, 156, 157, 158, 159, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175]
for y in range(12):
	for x in range(16):
		if (count not in outofbounds):
			json_string += frame(x,y,name,count) + ','
		if (count > 181):
			break;
		count += 1
# remove final comma
json_string = json_string[:-1]
json_string += '},' + animations((12*16),name, outofbounds) + '}'

json_file = open(name + ".json", "w")
json_file.write(json_string)
json_file.close()