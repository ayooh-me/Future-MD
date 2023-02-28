import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

  if (command == 'xnxx') {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
  let links = `https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${text}`
let f = await fetch(links)
let xx = await f.json()
let str = xx.result
            let listSections = []
    Object.values(str).map((v, index) => {
        listSections.push(["Num. " + ++index, [
            [v.title, usedPrefix + "xnxxdl " + v.link, ""]
        ]])
    })
    return conn.sendList(m.chat, htki + " 🗒️ List Xnxx " + htka, "⚡ Silakan pilih Resukt yang anda mau.", author, "[ Xnxx ]", listSections, m)
    }
    
    if (command = 'xnxxdl') {
    if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://www.xnxx.com/video-18ctcz24/masi_pakai_seragam_biru_mainnya_di_hotel`
	let res = await fetch(API('https://api.zahwazein.xyz', '/downloader/xvideos', { apikey: 'LuOlangNgentot', url: text }))
	let json = await res.json()
	if (json.result?.message) throw json.result.message
	let teks = '⭔ Title : '+json.result.title+'\n⭔ Duration : '+json.result.duration+'s' 
	await m.reply('*LOADING....*')
	conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
    }
    
    if (command == 'dlxnxx') {
    if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
    try {
  let json = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=${global.lolkey}&url=${text}`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  *duration:* ${x.result.duration}
  *view:* ${x.result.view}
  *rating:* ${x.result.rating}
  *like:* ${x.result.like}
  *dislike:* ${x.result.dislike}
  *comment:* ${x.result.comment}
  *tag:* ${Array.from(x.result.tag)}
  *description:* ${x.result.description}
  `
conn.sendFile(m.chat, x.result.link[1].link, 'asupan.mp4', caption, m)
} catch (e) {
throw eror
}
}

}

handler.help = ['xnxx', 'dlxnxx', 'xnxxdl'].map(v => v + ' <query>')
handler.command = ['xnxx', 'dlxnxx', 'xnxxdl']
handler.tags = ['nsfw']

export default handler
