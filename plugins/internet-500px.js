import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
if (!text) throw 'Input Username 500px'
	let res = await fetchData(text)
	let listSections = []
	Object.values(res).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Get Image', usedPrefix + 'get ' + v.img, '\n⌚ *By:* ' + v.pubDate + '\n *Link:* ' + v.link + '\n⌚ *Epoch:* ' + v.epoch]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 500px Search 🔎 ' + htka, `⚡ Silakan pilih 500px Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ 500px Search Disini ☂️`, listSections, m)
    }
handler.help = ['500px']
handler.tags = ['internet']
handler.command = /^500px$/i

export default handler

/* New Line */
async function fetchData(username = '') {
    if (!username) return []
    const response = await fetch('https://500px.com/' + username + '/rss');
    let datas = await response.text();
    let data = datas.replace(/\t/g, '');
    const items = data.split('<item>');
    let json = [];
    items.forEach(item => {
        const title = item.match(/<title>(.*?)<\/title>/g)?.map((val) => val?.replace(/<\/?title>/g, ''))?.[0]
        const link = item.match(/<link>(.*?)<\/link>/g)?.map((val) => val?.replace(/<\/?link>/g, ''))?.[0]
        const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/g)?.map((val) => val?.replace(/<\/?pubDate>/g, ''))?.[0]
        const img = item.match(/<img src="(.*?)">/g)?.map((val) => val.replace(/<img src="/g, '')?.replace(/">/g, ''))?.[0]
        if (pubDate) json.push({ title, link, pubDate, img, epoch: parseInt(new Date(pubDate).getTime() / 1000) })
    })
    return json;
}
