import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    	try {
			let fak = await fetch("https://recoders-area.caliph.repl.co/api/fakta?apikey=https://recoders-area.caliph.repl.co")
			let ta = await fak.json()
			conn.reply(m.chat, ta.result, m)
    	} catch (e) {
    		console.log(e)
    	}
}
handler.help = ['fakta']
handler.tags = ['edukasi']
handler.command = /^(fakta|faktaunik)$/i
export default handler