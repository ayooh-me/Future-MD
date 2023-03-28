
import axios from "axios"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = "input text\nEx. .schecodes hello world\n<command> <tex>"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	
	try {
	m.reply(wait)
	 var xmg = await Weather(text)
	 
	 conn.sendFile(m.chat, xmg.condition.icon_url, xmg.condition.icon, xmg.condition.description, m)
   } catch (e) {
   throw eror
 }
}
handler.help = ["schecodes"]
handler.tags = ["misc"]
handler.command = /^(schecodes)$/i
export default handler

async function Weather(term) {
  const response = await axios.get("https://api.shecodes.io/weather/v1/current?query=" + term + "&key=96f59ob69a32facbb34b2tdb5d2e7405");
  return response.data
};
