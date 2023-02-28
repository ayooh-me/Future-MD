import { tiktokfyp } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)
  let cari = await tiktokfyp()
    let listSections = []
	Object.values(cari).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.author.signature, [
          ['🎥 Video ' + v.author.nickname, usedPrefix + 'get ' + v.video.downloadAddr, 'Desc: ' + v.desc ? v.desc : 'Tidak diketahui' + '\nQuality: ' + v.video.definition],
          ['🎧 Music ' + v.music.authorName, usedPrefix + 'get ' + v.music.playUrl, 'Desc: ' + v.title ? v.title : 'Tidak diketahui' + '\nSecond: ' + v.music.duration]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 FYP 🔎 ' + htka, `⚡ Silakan pilih FYP di tombol di bawah...\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, '☂️ FYP Disini ☂️', listSections, m)
}
handler.help = ['fyp']
handler.tags = ['tools']
handler.command = /^(fyp(t(iktok|t)|(tik)?)|t(ik(tok)?fyp|tfyp))$/i

export default handler