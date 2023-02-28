import AI2D from "@arugaz/ai2d";
import fetch from "node-fetch";

let handler = async(m, { conn, usedPrefix, text, command }) => {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!`
    m.reply(wait)
    let image = await q.download()
    let socks = await(await fetch("https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks5&timeout=10000&country=all")).text()
    let Res = socks.split('\n').getRandom()
    let buff = await AI2D(image, {
  proxy: {
    url: "socks5://" + Res,
    chinese: true,
    image: false,
  },// support http & socks
crop: "SINGLE",
})
await conn.sendFile(m.chat, buff, '', author, m)
}
handler.help = ['ai2d'].map(v => v + ' (Balas foto)')
handler.tags = ['tools']
handler.command = /^ai2d|arugaz$/i
handler.limit = true
export default handler
