// ESM
import { Emojis } from 'dhn-api'
import fetch from 'node-fetch'
import got from "got"
import cheerio from "cheerio"
let handler = async (m, { conn, args, text, usedPrefix, command, isPrems }) => {
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
          if (!args[0] || args[0].length > 2) throw 'Masukkan emoji tapi 1 aja ya :v'
          try {
          let cari = await Emojis(args[0])
    let listSections = []
	Object.values(cari.vendor_pack).map((v, index) => {
	let url = v.vendor_url
	let pairs = url.substring(url.indexOf('/') + 1).split('/');
    let vendor = pairs[2].toUpperCase()
	listSections.push([index + ' ' + cmenub + ' ' + cari.unicode_desc, [
          ["[ " + vendor + " ]" + " " + v.vendor_version, usedPrefix + 'fetchsticker ' + v.vendor_thumb.slice(86).replace('/60/', '/240/') + ' wsf', 'Url: ' + v.vendor_url]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Emojis 🔎 ' + htka, `${cari.unicode_desc}`, author, '☂️ Emojis Disini ☂️', listSections, m)
	} catch (e) {
	let cari = await semoji(args[0])
    let listSections = []
	Object.values(cari).map((v, index) => {
	listSections.push([index + ' ' + cmenub, [
          [v.nama, usedPrefix + 'fetchsticker ' + v.url + ' wsf', 'Url: ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Emojis 🔎 ' + htka, `${cari.unicode_desc}`, author, '☂️ Emojis Disini ☂️', listSections, m)
	}
}
handler.help = ['emoji']
handler.tags = ['sticker'] 
handler.command = /^(emo(jis|(ji)?)|se?moji)$/i
export default handler

async function semoji(hem) {
    const result = []
    const data = await got(encodeURI('https://emojipedia.org/' + hem), {
        method: "GET",
        headers: {
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
        }
    })
    const $ = cheerio.load(data.body)
    $("body > div.container > div.content > article > section.vendor-list > ul").each(function(asu, chuwi) {
        $(chuwi).find("li").each(function(sa, na) {
            const res = {
                nama: $(na).find("div > div.vendor-info > h2 > a").text().trim().toLowerCase(),
                url: $(na).find("div > div.vendor-image > img").attr("src")
            }
            result.push(res)
        })
    })
    const data2 = []
    result.map(Data => {
        if (Data.nama == undefined) return;
        if (Data.url == undefined) return;
        data2.push(Data)
    })
    return data2
}