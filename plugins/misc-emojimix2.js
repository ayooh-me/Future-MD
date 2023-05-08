import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
	let [a, b] = text.split(/[xzXZ/i!#\$%\+£¢€¥\^°=¶∆×÷π√✓|©®:;\?&\.\\\-]+/)
	m.reply(wait)
	if (a && b) {
		let url = global.API('violetics', '/api/media/emojimix', { a, b }, 'apikey')
		let res = await fetch(url)
		if (res.status !== 200) throw res.statusText
		let stiker = await sticker(false, url, global.packname, name)
		conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
	} else throw `Ex: ${usedPrefix+command} ${decodeURI('%F0%9F%92%80')}+${decodeURI('%F0%9F%92%80')}`
}
handler.help = ['emojimix2']
handler.tags = ['misc']
handler.command = /^(emojimix2)$/i

export default handler
