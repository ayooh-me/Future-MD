import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

   let ohh = `Contoh penggunaan ${usedPrefix}${command} Naruto`
  
  if (command == 'brailletotext') {
  if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/converter/braille-to-text', { braille: text }, 'apikey'))
let json = res.data
let dapet = json.result
	m.reply(dapet)
}


if (command == 'texttobraille') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/converter/text-to-braille', { text: text }, 'apikey'))
let json = res.data
let dapet = json.result
	m.reply(dapet)
}

if (command == 'tocartoon') {
if (m.quoted) throw 'Reply image'
let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
let res = global.API('violetics', '/api/converter/photo-to-cartoon', { img: link }, 'apikey')
let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${link}`
  await conn.sendButton(m.chat, caption, wm, res, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { quoted: fakes })
}

if (command == 'befonts') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/befonts', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nDate: ' + v.font_date + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'dafont') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/dafont', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image + '\nDownload: ' + v.total_downloader + '\nLink Dl.: ' + v.font_linkdl,
		rowId: usedPrefix + 'get ' + v.font_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'dfonts') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/dfonts', { font: text }, 'apikey'))
let json = res.data
	let row = Object.values(json).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nDate: ' + v.font_date + '\nLink: ' + v.font_url,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'ffonts') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/ffonts', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nDate: ' + v.font_date + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontfabric') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/fontfabric', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nTotal: ' + v.font_styleTotal + '\nLink: ' + v.font_url + '\nCSS: ' + v.font_stylesheet + '\nFamilies: ' + Array.from(v.font_families),
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fonts') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/fonts', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'get ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontspace') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/fontspace', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image + '\nDownload: ' + v.total_downloader + '\nLink Dl.: ' + v.font_linkdl,
		rowId: usedPrefix + 'get ' + v.font_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontsquirrel') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/fontsquirrel', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image + '\nStyle: ' + v.font_totalStyle,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fontzone') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/fontzone', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'urbanfonts') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/urbanfonts', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nAuthor: ' + v.font_author + '\nLink: ' + v.font_url + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'ss ' + v.font_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'wfonts') {
if (!text) throw ohh
let res = await axios(global.API('violetics', '/api/fonts/wfonts', { font: text }, 'apikey'))
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.font_name,
		description: '\nCategory: ' + v.font_category + '\nLink: ' + v.font_url + '\nLink Dl: ' + v.font_linkdl + '\nThumbnail: ' + v.font_image,
		rowId: usedPrefix + 'get ' + v.font_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['brailletotext', 'tocartoon', 'texttobraille', 'befonts', 'dafont', 'dfonts', 'ffonts', 'fontfabric', 'fonts', 'fontspace', 'fontsquirrel', 'fontzone', 'urbanfonts', 'wfonts'].map(v => v + ' <app>')
handler.command = ['brailletotext', 'tocartoon', 'texttobraille', 'befonts', 'dafont', 'dfonts', 'ffonts', 'fontfabric', 'fonts', 'fontspace', 'fontsquirrel', 'fontzone', 'urbanfonts', 'wfonts']
handler.tags = ['edukasi']

export default handler