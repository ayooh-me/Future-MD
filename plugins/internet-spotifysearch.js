import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Mau Cari Apa?`
	try {
    let res = await fetch(global.API('lolhuman', '/api/spotifysearch', { query: encodeURIComponent(text) }, 'apikey'))
    if (!res.ok) throw await `Terjadi kesalahan.`
    let json = await res.json()
    if (json.status != '200') throw `Terjadi Kesalahan, Coba Lagi Nanti.`
	let get_result = json.result
	let ini_txt = "*[ Spotify Search ]*"
	for (var x of get_result) {
		ini_txt += `\n\n✨️ *Title:* ${x.title}\n`
		ini_txt += `🗣️ *Artists:* ${x.artists}\n`
		ini_txt += `⌛ *Duration:* ${x.duration}\n`
		ini_txt += `🌐️ *URL*: ${x.link}\n`
		ini_txt += `${x.preview_url ? `💚️ *Direct URL:* ${x.preview_url}\n` : ''}`
		ini_txt += `───────────────────`
	}
	m.reply(ini_txt)
	} catch (e) {
	throw eror
	}
}

handler.help = ['spotifysearch']
handler.tags = ['downloader']
handler.command = /^spotifysearch$/i

handler.limit = true

export default handler