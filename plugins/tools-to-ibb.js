import fetch from "node-fetch"
import { UploadToIBB } from "../lib/upload-to-ibb.js"
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, args }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		await m.reply(wait)
		let media = await q.download()
		let lin = ["https://"]
		let noti = args[0] ? args[0] : 600
		let nita = lin.includes(args[0]) ? args[0] : await UploadToIBB(await uploadImage(media))
		let sauce = await UploadToIBB(nita, noti, "3c1615980dcf693b282c4b0fb608b28a")
		let output = Object.entries(sauce.data).map(([key, value]) => `  ○ *${key.toUpperCase()}:* ${value}`).join('\n');
		await conn.reply(m.chat, output, m)
	} else throw 'Reply imagenya'
}
handler.help = ["toibb"]
handler.tags = ["tools"]
handler.command = ["toibb"]
export default handler
