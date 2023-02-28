import axios from 'axios'
import { googleIt } from '@bochilteam/scraper'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Query' 
	let data = await googleIt(text)
	let msg = data.articles.map((v, index) => `*${htki} ${index} ${htka}*\n*${v.title}*\n*${v.url}*\n${v.description}`).join("\n\n")
	if (!msg.length) throw `Query "${text}" Not Found`
	await conn.sendMessage(m.chat, { video : { url: giflogo }, caption: msg, quoted: m, gifPlayback: true, gifAttribution: 'GIPHY' })
}
handler.tags = ['internet', 'search']
handler.help = ['Google']
handler.command = /^g(oogle?|ugel)$/i

export default handler