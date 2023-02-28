import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
let handler = async (m, { conn, text }) => {
let caption = await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)
let msg = (Object.entries(caption).map(([nama, isi]) => { return { nama, isi } }))
let listSections = []
	Object.values(msg).map((v, index) => {
	listSections.push([' [ ' + ++index + ' ] ' + v.nama, [
          [v.isi, '', '']
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 STYLE 🔎 ' + htka, '⚡ Berikut daftar List Style...\nAkses langsung dengan copy namanya', author, '☂️ Klik Disini ☂️', listSections, m)
}
handler.help = ['style'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(style(text)?)$/i

handler.exp = 0

export default handler

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
        let name = tr.querySelector('.aname').innerHTML
        let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
        obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}