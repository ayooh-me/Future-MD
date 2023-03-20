import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let [a, b] = text.split(/[xzXZ/i!#\$%\+£¢€¥\^°=¶∆×÷π√✓©®:;\?&\.\\\-]+/)
m.reply(wait)
	if (a && b) {
let anu = await(await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(a) + "_" + encodeURIComponent(b))).json()
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, name)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
} else throw `Ex: ${usedPrefix+command} ${decodeURI('%F0%9F%92%80')}+${decodeURI('%F0%9F%92%80')}`
}
handler.help = ['emojimix'].map(v => v + ' emot1|emot2>')
handler.tags = ['misc']
handler.command = /^(emojimix)$/i
export default handler