import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"
import { googleImage } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) return m.reply(`Example : ${usedPrefix + command} query`)
let url = `https://api.lolhuman.xyz/api/gimage2?apikey=${global.lolkey}&query=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
const res = await googleImage(text)

try {
if (command == 'image') {
let cari = ['https://api.lolhuman.xyz/api/gimage?apikey=' + global.lolkey + '?query=' + text,
x.getRandom(),
res.getRandom()]
let listSections = []
	Object.keys(cari).map((v, index) => {
	listSections.push([' [ IMAGE ' + ++index + ' ]', [
          ['Get: ' + cari[v].slice(8, 1), usedPrefix + 'imageget ' + cari[v], author]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 [ IMAGE ] 🔎 ' + htka, 'SEARCH', author, 'P I L I H', listSections, m)
	}
if (command == 'imageget') {
    await conn.sendButton(m.chat, `
*── 「 IMAGE 」 ──*
`.trim(), wm, text, [
      ['Next', usedPrefix + 'image ' + text]
    ], m)
}

} catch {
throw eror
}

}
handler.help = ['image']
handler.command = ['image', 'imageget']
handler.tags = ['random']

export default handler
