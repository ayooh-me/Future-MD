import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let query = "input text\nEx. .ttp naruto"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
let urls = ['https://violetics.pw/api/canvas/quotes?apikey=beta&text=' + text + '&author=' + name,
'https://api.lolhuman.xyz/api/attp2?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/attp?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/hartacustom?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/ttp2?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/ttp3?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/ttp4?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/ttp5?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/ttp6?apikey=' + global.lolkey + '&text=' + text,
'https://api.lolhuman.xyz/api/ttp?apikey=' + global.lolkey + '&text=' + text,
'https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=' + text,
'https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=' + text,
'https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=' + text]
            let lisn = ["Quotes: " + urls[0].substring(8, urls[0].indexOf('/api')),
            "Attp 2: " + urls[1].slice(8, 20),
            "Attp: " + urls[2].slice(8, 20),
            "Harta Tahta: " + urls[3].slice(8, 20),
            "TTP 2: " + urls[4].slice(8, 20),
            "TTP 3: " + urls[5].slice(8, 20),
            "TTP 4: " + urls[6].slice(8, 20),
            "TTP 5: " + urls[7].slice(8, 20),
            "TTP 6: " + urls[8].slice(8, 20),
            "TTP: " + urls[9].slice(8, 20),
            "Attp Gradient 2: " + urls[10].substring(8, urls[10].indexOf('/api')),
            "Attp Gradient: " + urls[11].substring(8, urls[11].indexOf('/api')),
            "TTP Gradient: " + urls[12].substring(8, urls[12].indexOf('/api'))
            ]
            
            let row = Object.keys(urls, lisn).map((v, index) => ({
		title: htjava + ' ' + lisn[v] + ' Sticker',
		description: 'By: ' + wm + '\n Link: ' + urls[v].substring(8, urls[v].indexOf('/api')),
		rowId: usedPrefix + 'get ' + urls[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.command = handler.help = ['ttpg', 'attpg']
handler.tags = ['sticker']
export default handler