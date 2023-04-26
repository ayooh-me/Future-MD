import fetch from "node-fetch"
import uploadImage from "../lib/uploadImage.js"
import { ArtEnhance } from "../lib/art-enhance.js"
import fs from "fs"

let handler = async (m, { conn }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/image/.test(mime)) {
		await m.reply(wait)
		let media = await q.download()
		let sauce = await ArtEnhance(await uploadImage(media), "3c1615980dcf693b282c4b0fb608b28a")
		await conn.sendFile(m.chat, sauce, null, '', m)
	} else throw 'Reply imagenya'
}
handler.help = ["remini"]
handler.tags = ["tools"]
handler.command = ["remini"]
export default handler
