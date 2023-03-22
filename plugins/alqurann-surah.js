import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
if (args[0] && !args[1]) {
    if (!isNumber(args[0])) throw `Contoh:\n${usedPrefix + command} 1\n\nMaka hasilnya adalah surah Al-Fatihah ayat beserta audionya, dan ayatnya 1 aja`
    let f = await fetch("https://quran-wudy.vercel.app/surah/" + args[0])
    let xx = await f.json()
    
    let listSections = []
	Object.values(xx.data.verses).map((v, index) => {
	listSections.push(["Model [ " + ++index + " ]", [
          [v.text.arab + "\n\n", usedPrefix + "get " + v.audio.primary, "•"]
        ]])
	})
	m.reply(wait)
	return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
	} else if (args[0] && args[1]) {
	if (!isNumber(args[0]) && !isNumber(args[1])) throw `Contoh:\n${usedPrefix + command} 1\n\nMaka hasilnya adalah surah Al-Fatihah ayat beserta audionya, dan ayatnya 1 aja`
    let f = await fetch("https://quran-wudy.vercel.app/surah/" + args[0] + "/" + args[1])
    let xx = await f.json()
    var cp = `*Arab:* ${xx.data.text.arab}`
    m.reply(wait)
m.reply(cp)
await conn.sendMessage(m.chat, { audio: { url: xx.data.audio.primary }, seconds: fsizedoc, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100,0,100,0,100,0,100] }, { quoted: m })
	}
	} catch (e) {
	throw eror
	}
}
handler.help = ['alquran'].map(v => v + ' <no surah>')
handler.tags = ['qurann']
handler.command = /^(al)?qurann$/i

export default handler
function isNumber(x) {
    return !isNaN(x)
}