
let handler = async (m, { usedPrefix, command, text, args }) => {

let arr = [
"loli",
"shota",
"akira",
"akiyama",
"asuna",
"ayuzawa",
"boruto",
"chiho",
"chitoge",
"deidara",
"eba",
"elaina",
"emilia",
"erza",
"gremory",
"hestia",
"hinata",
"inori",
"isuzu",
"itachi",
"itori",
"kaga",
"kagura",
"kaori",
"keneki",
"kotori",
"kurumi",
"madara",
"megumin",
"mikasa",
"miku",
"minato",
"naruto",
"nezuko",
"onepiece",
"rize",
"sagiri",
"sakura",
"sasuke",
"shina",
"shinka",
"shinomia",
"shizuka",
"tejina",
"toukachan",
"tsunade",
"yotsuba",
"yuki",
"yumeko",
"yuri",
"nsfwloli",
"nsfw/hentai",
"nsfw/pussy",
"nsfw/panties",
"nsfw/glasses",
"oppai",
"bleach",
"fairytail",
"asupan"
]

if (!arr.includes(tex)) return conn.reply(m.chat, 'Harap Masukan Text\n\n' + arr.split(' '), m)
	 await conn.sendButton(m.chat, "RESULT", wm, "http://nsfw.rhobot.my.id/" + text, [[' Menu', '/menu']], m, fakefb)
	 
}
handler.help = ['rhobo'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = ['rhobo']

export default handler
