import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Contoh penggunaan ${usedPrefix + command} Naruto`
  
  if (command == 'anibatch') {
let res = await fetch('https://violetics.pw/api/anime/anibatch?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nRate: ' + v.rate + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'anikyojin') {
let res = await fetch('https://violetics.pw/api/anime/anikyojin?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nReleased: ' + v.released + '\nType: ' + v.type + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'animeplanet') {
let res = await fetch('https://violetics.pw/api/anime/anime-planet?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nRate: ' + v.rate + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'anisearch') {
let res = await fetch('https://violetics.pw/api/anime/anisearch?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nRate: ' + v.rate + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nThumb: ' + v.type + '\nDuration: ' + v.duration + '\nDescription: ' + v.description,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'anoboy') {
let res = await fetch('https://violetics.pw/api/anime/anoboy?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nRate: ' + v.rate + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nShowup: ' + v.showup,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'fanfox') {
let res = await fetch('https://violetics.pw/api/anime/fanfox?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nStatus: ' + v.status + '\nAuthor: ' + v.author + '\nDescription: ' + v.description + '\nChapter title: ' + v.chapter.title + '\nChapter url: ' + v.chapter.url,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'gogoanime') {
let res = await fetch('https://violetics.pw/api/anime/gogoanime?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.name,
		description: '\nReleased: ' + v.released + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'kiryu') {
let res = await fetch('https://violetics.pw/api/anime/kiryu?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nRate: ' + v.rate + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nChapter: ' + v.chapter,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'kissmanga') {
let res = await fetch('https://violetics.pw/api/anime/kissmanga?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'klikmanga') {
let res = await fetch('https://violetics.pw/api/anime/klikmanga?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nStatus: ' + v.status + '\nAuthor: ' + v.author + '\nDescription: ' + v.description + '\nGenres: ' + v.genres + '\nDate: ' + v.date,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'komiku') {
let res = await fetch('https://violetics.pw/api/anime/komiku?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nChapter: ' + v.chapter + '\nDescription: ' + v.description,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'mangadex') {
let res = await fetch('https://violetics.pw/api/anime/mangadex?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nRate: ' + v.rate + '\nFollowers: ' + v.followers + '\nViews: ' + v.views + '\nDescription: ' + v.description,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'manganato') {
let res = await fetch('https://violetics.pw/api/anime/manganato?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nRate: ' + v.rate + '\nAuthor: ' + v.author + '\nUpdated: ' + v.updated + '\nViews: ' + v.views,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'myanimelist') {
let res = await fetch('https://violetics.pw/api/anime/myanimelist?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nRate: ' + v.rate + '\nChapter: ' + v.chapter + '\nDescription: ' + v.description,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'nimegami') {
let res = await fetch('https://violetics.pw/api/anime/nimegami?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nRate: ' + v.rate + '\nStatus: ' + v.status,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'oploverz') {
let res = await fetch('https://violetics.pw/api/anime/oploverz?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nStatus: ' + v.status + '\nType: ' + v.type,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'samehadaku') {
let res = await fetch('https://violetics.pw/api/anime/samehadaku?apikey=beta&manga=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nRate: ' + v.rate + '\nType: ' + v.type + '\nStatus: ' + v.status + '\nViews: ' + v.views + '\nDescription: ' + v.description,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'amino') {
let res = await fetch('https://violetics.pw/api/search/amino?apikey=beta&query=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail + '\nMember: ' + v.member + '\nDescription: ' + v.description,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'googleit') {
let res = await fetch('https://violetics.pw/api/search/googleit?apikey=beta&query=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nSnippet: ' + v.snippet + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'groupwhatsapp') {
let res = await fetch('https://violetics.pw/api/search/group-whatsapp?apikey=beta&query=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nLink: ' + v.url,
		rowId: usedPrefix + 'inspect ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'layarkaca') {
let res = await fetch('https://violetics.pw/api/search/layarkaca?apikey=beta&query=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nAuthor: ' + v.author + '\nLink: ' + v.url + '\nThumbnail: ' + v.thumbnail + '\nStars: ' + Array.from(v.stars),
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'mangatoon') {
let res = await fetch('https://violetics.pw/api/search/mangatoon?apikey=beta&query=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nAuthor: ' + Array.from(v.type) + '\nLink: ' + v.url + '\nThumbnail: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'musicfinder') {
let res = await fetch('https://violetics.pw/api/search/music-finder?apikey=beta&audio=' + text)
let json = await res.json()
if (json.isError == true) throw eror
let dapet = json.result
m.reply(`Title: ${dapet.title}
album: ${dapet.album}
artists: ${dapet.artists}
duration: ${dapet.duration}
release: ${dapet.release}
genres: ${dapet.genres}`)
}

}
handler.help = ['anibatch', 'anikyoji', 'animeplanet', 'anisearch', 'anoboy', 'fanfox', 'gogoanime', 'kiryu', 'kissmanga', 'klikmanga', 'komiku', 'mangadex', 'manganato', 'myanimelist', 'nimegami', 'oploverz', 'samehadaku', 'amino', 'googleit', 'groupwhatsapp', 'layarkaca', 'mangatoon', 'musicfinder']
handler.command = ['anibatch', 'anikyoji', 'animeplanet', 'anisearch', 'anoboy', 'fanfox', 'gogoanime', 'kiryu', 'kissmanga', 'klikmanga', 'komiku', 'mangadex', 'manganato', 'myanimelist', 'nimegami', 'oploverz', 'samehadaku', 'amino', 'googleit', 'groupwhatsapp', 'layarkaca', 'mangatoon', 'musicfinder']
handler.tags = ['internet']

export default handler