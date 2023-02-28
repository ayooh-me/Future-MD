import axios from 'axios'
import cheerio from 'cheerio'
import { extension } from 'mime-types'

let handler = async (m, { conn, text, args, usedPrefix: _p, command: cmd }) => {
	if (/search/i.test(args[0])) {
		let q = args.slice(1).join` `
		if (!q) throw 'Input Query' 
		let res = await techbigs.search(q)
		if (!res.length) throw `Query "${q}" Not Found :/`
		res = res.map((v) => `*Title:* ${v.title}\n*Date:* ${v.date}\n*Link:* ${v.url}`).join`\n\n`
		m.reply(res)
	} else if (/download/i.test(args[0]) && args[1] && /^(?:-|--)apk$/i.test(args[2])) {
		await m.reply(wait)
		let res = await techbigs.download(args[1]),
			mimetype = (await axios.get(res.link)).headers['content-type'],
			ext = await extension(mimetype)
		await conn.sendMessage(m.chat, { document: { url: res.link }, fileName: `${res.name}.${ext}`, mimetype }, { quoted: m })
	} else if (/download/i.test(args[0]) && args[1] && /^(?:-|--)obb$/i.test(args[2])) {
		await m.reply(wait)
		let res = await techbigs.download(args[1]),
			mimetype = (await axios.get(res.obb)).headers['content-type'],
			ext = await extension(mimetype)
		await conn.sendMessage(m.chat, { document: { url: res.obb }, fileName: `Obb ${res.name}.${ext}`, mimetype }, { quoted: m })
	} else if (/download/i.test(args[0])) {
		let url = args[1]
		if (!args[1]) throw 'Input URL' 
		if (!url.includes('//techbigs.com/')) throw `Ex: ${_p}${cmd} download https://techbigs.com/whatsapp-messenger-1.html`
		let res = await techbigs.download(url), buttons = [['Apk', `${_p}${cmd} download ${url} --apk`]]
		if (res.obb) buttons.push(['Obb', `${_p}${cmd} download ${url} --obb`])
		delete res.link, delete res.obb
		let txt = Object.keys(res).map((v) => `*${v.capitalize()}:* ${res[v]}`).join`\n`
		await conn.sendButton(m.chat, txt, null, null, buttons, m)
	} else {
		if (!text) throw `Ex:\n${_p}${cmd} search "query"\nOr\n${_p}${cmd} download "url"`
		let res = await techbigs.search(text)
		if (!res.length) throw `Query "${text}" Not Found :/`
		res = res.map((v) => `*Title:* ${v.title}\n*Date:* ${v.date}\n*Link:* ${v.url}`).join`\n\n`
		m.reply(res)
	}
}
// handler.help = ['techbigs']
// handler.tags = ['downloader']
handler.command = /^(techbigs)$/i

export default handler

const techbigs = {
	search: async (query) => {
		let res = await axios.get(`https://techbigs.com/?s=${query}`) 
		let $ = cheerio.load(res.data), arr = []
		$('ul.blogs.w3 > li').each((idx, el) => {
			arr.push({
				title: $(el).find('a').attr('title'),
				date: $(el).find('time').text(),
				url: $(el).find('a').attr('href')
			})
		})
		return arr
	},
	download: async (url) => {
		let res = await axios.get(url)
		let $ = cheerio.load(res.data)
		let table = $('table[class="nor-item table apk-info box-space"] > tbody > tr')
		let pid = $('#adminBar').attr('data-pid'), appid = table.eq(9).find('td').text(), name = table.eq(0).find('td').text()
		let data = (await axios.post('https://techbigs.com/getapk', { pid, appid })).data
		return { name, ...data.data }
	}
}
