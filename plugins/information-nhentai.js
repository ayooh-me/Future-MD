import axios from 'axios'
let handler = async (m, { usedPrefix, command, text, args }) => {

if (command == 'nhentaihome') {
	 let res = await nhentaihome()
    await conn.sendButton(m.chat, res, wm, logo, [[' Menu', '/menu']], m, fakefb)
    }
    if (command == 'nhentaisearch') {
    if (!text) return conn.reply(m.chat, 'Harap Masukan Text', m)
	 let res = await nhentaisearch(text)
	 await conn.sendButton(m.chat, res, wm, logo, [[' Menu', '/menu']], m, fakefb)
    }
    if (command == 'nhentaigetdoujin') {
    if (!text) return conn.reply(m.chat, 'Harap Masukan ID', m)
	 let res = await nhentaigetDoujin(text)
	 await conn.sendButton(m.chat, res, wm, logo, [[' Menu', '/menu']], m, fakefb)
    }
    if (command == 'nhentaigetrelated') {
    if (!text) return conn.reply(m.chat, 'Harap Masukan ID', m)
	 let res = await nhentaigetRelated(text)
	 await conn.sendButton(m.chat, res, wm, logo, [[' Menu', '/menu']], m, fakefb)
    }
}
handler.help = ['nhentaihome', 'nhentaisearch', 'nhentaigetdoujin', 'nhentaigetrelated'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = ['nhentaihome', 'nhentaisearch', 'nhentaigetdoujin', 'nhentaigetrelated']

export default handler

function parseResult(data) {
	let arr = []
	for (let x of data) arr.push({
		id: x.id, title: x.title,
		language: x.lang, pages: x.num_pages,
		cover: x.cover?.t?.replace(/a.kontol|b.kontol/, 'c.kontol') || x.cover?.replace(/a.kontol|b.kontol/, 'c.kontol')
	})
	return arr
}

	async function nhentaihome(type = 'latest'){
	  new Promise((resolve, reject) => {
		type = { latest: 'all', popular: 'popular' }[type]
		axios.get('https://same.yui.pw/api/v4/home').then((res) => resolve(parseResult(res.data[type]))).catch(reject)
	})
	}
	async function nhentaisearch(query, sort, page){
	new Promise((resolve, reject) => {
		axios.get(`https://same.yui.pw/api/v4/search/${query}/${sort}/${page}/`).then((res) => resolve(parseResult(res.data.result))).catch(reject)
	})
	}
	async function nhentaigetDoujin(id){
	new Promise((resolve, reject) => {
		axios.get(`https://same.yui.pw/api/v4/book/${+id}`). then((res) => resolve(res.data)).catch(reject)
	})
	}
	async function nhentaigetRelated(id){
	new Promise((resolve, reject) => {
		axios.get(`https://same.yui.pw/api/v4/book/${+id}/related/`).then((res) => resolve(parseResult(res.data.books))).catch(reject)
	}).catch(reject)
	}