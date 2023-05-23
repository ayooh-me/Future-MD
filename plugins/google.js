import axios from "axios"
import fetch from "node-fetch"
import { googleIt } from "@bochilteam/scraper"

let handler = async (m, { conn, text }) => {
	if (!text) throw "Input Query"
	try {
	let data = await googleIt(text)
	let msg = data.articles.map((v, index) => `${htki + " " + ++index + " " + htka}\n*${v.title}*\n  *○ Link:* ${v.url}\n  *○ Snippet:* ${v.description}`).join("\n\n")
	if (!msg.length) throw `Query "${text}" Not Found`
	await conn.sendFile(m.chat, flaaa.getRandom() + "Google", "result", msg, m)
	} catch (e) {
	var query = text
			var API_KEY = "7d3eb92cb730ed676d5afbd6c902ac1f"
			var url = "http://api.serpstack.com/search?access_key=" + API_KEY + "&type=web&query=" + query 
			let a = await (await fetch(url)).json()
			let b = a.organic_results
			let c = b.map((v, index) => `${htki + " " + ++index + " " + htka}\n*${v.title}*\n  *○ Link:* ${v.url}\n  *○ Snippet:* ${v.snippet}`).join("\n\n")
			await conn.sendFile(m.chat, flaaa.getRandom() + "Google", "result", c, m)
	
	}
}
handler.tags = ["internet", "search"]
handler.help = ["Google"]
handler.command = /^g(oogle?|ugel)$/i

export default handler