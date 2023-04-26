import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";
let handler = async (m, { conn, usedPrefix, command }) => {
conn.unblur_high = conn.unblur_high ? conn.unblur_high : {}
if (m.sender in conn.unblur_high) throw "Masih ada tugas remini!"
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!mime) throw `Reply media ${usedPrefix + command}`
if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime (${mime}) tidak support`
else conn.unblur_high[m.sender] = true
await m.reply(wait)
let img = await q.download?.()
let upld = await uploadImage(img)
let img2
try {
img2 = await fetch(`https://api.itsrose.site/image/unblur?url=${upld}&apikey=Rs-Zeltoria`)
let image = await img2.arrayBuffer()
await conn.sendFile(m.chat, image, null, '', m)
} catch (e) {
await m.reply(eror);
} finally {
delete conn.unblur_high[m.sender]
}}
handler.help = ["remini"]
handler.tags = ["tools"]
handler.command = ["remini"]
export default handler
