import fs from "fs"

let handler = async (m, { conn, args }) => {
await m.reply(wait)
if(!fs.readFileSync('./images/res.pdf')) return m.reply("Convert dulu dengan perintah *.westconvert*")
await conn.sendFile(m.chat, fs.readFileSync('./images/res.pdf'), 'Westmanga nya kak!', '', m, false, { asDocument: true })
await m.reply("*Note:*\n Jika pdf tidak bisa terbuka berarti proses konversi belum selesai atau eror")
}
handler.help = ["westpdf"]
handler.tags = ["tools"]
handler.command = ["westpdf"]
export default handler
