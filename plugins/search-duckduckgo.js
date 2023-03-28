
import axios from "axios"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .ddg hello world\n<command> <tex>"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	
	try {
	m.reply(wait)
	 var xmg = await DuckGo(text)
	 
	 conn.sendFile(m.chat, "https://duckduckgo.com" + xmg.RelatedTopics[0].Icon.URL, "result", xmg.RelatedTopics[0].Text, m)
   } catch (e) {
   throw eror
 }
}
handler.help = ["ddg"]
handler.tags = ["search"]
handler.command = /^(ddg)$/i
export default handler

async function DuckGo(term) {
var url = "https://api.duckduckgo.com/?q=" + term + "&format=json"
  const response = await axios.get(url)
  return response.data
};
