import gplay from 'google-play-scraper'

let handler = async (m, { conn, text, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
	if (!text) throw 'Input Query'
	let res = await gplay.search({ term: text })
	if (!res.length) throw `Query "${text}" not found :/`
	let row = Object.values(res).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\n*title:* ' + v.title + '\n*developer:* ' + v.developer + '\n*score:* ' + v.score + '\n*scoreText:* ' + v.scoreText + '\n*priceText:* ' + v.priceText + '\n*appId:* ' + v.appId + '\n*summary:* ' + v.summary + '\n*url:* ' + v.url + '\n*icon:* ' + v.icon + '\n*free:* ' + v.free,
		rowId: usedPrefix + 'apkdl ' + v.url
	}))
	let button = {
		buttonText: '☂️ Result Disini ☂️',
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['apksearch']
handler.tags = ['tools']
handler.command = /^(ap([kp]search|(ps|k))|searchapk)$/i

export default handler
