''' Makes a JSON item like

"characters-0.png":
{
	"frame": {"x":0,"y":0,"w":32,"h":32},
	"rotated": false,
	"trimmed": false,
	"spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
	"sourceSize": {"w":32,"h":32}
}
'''
def frame(x,y,name,count):
	x_coord = 32 * x
	y_coord = 32 * y
	title = '"' + name + '-' + str(count) + '.png":'
	frame = '"frame": {"x":' + str(x_coord) + ', "y":' + str(y_coord) + ',"w":32,"h":32},'
	remaining = '"rotated": false, "trimmed": false, "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32}, "sourceSize": {"w":32,"h":32}'
	return title + '{' + frame + remaining + '}'

def animations(r,name):
	title = '"animations":'
	animations = ''
	for i in range(r):
		animations += '"' + name + '-' + str(i) + '.png",'
	animations = animations[:-1]
	return title + '{"' + name + '":[' + animations + ']}'


json_string = '{"frames":{'
name = 'liquids'
count = 0
for y in range(9):
	for x in range(6):
		json_string += frame(x,y,name,count) + ','
		count += 1
# remove final comma
json_string = json_string[:-1]
json_string += '},' + animations(60,name) + '}'

json_file = open(name + ".json", "w")
json_file.write(json_string)
json_file.close()