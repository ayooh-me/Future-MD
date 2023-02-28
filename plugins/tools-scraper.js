import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import { sandroid1,
sanime,
sanoboydl,
sanoboys,
sapkmirror,
sapkmody,
sartinama,
sasupanfilm,
sasupanfilminfo,
sbacaresep,
scarigc,
scariresep,
schara,
scorona,
sdevianart,
sdewabatch,
sdrakor,
sfacebook,
sfilm,
sgempa,
sghfollower,
sghfollowing,
sghuser,
sgoredl,
shappymod,
shappymoddl,
sigdl,
sigdl2,
sigstalk,
sigstory,
sjob,
sjoox,
skiryu,
skonachan,
smanga,
smangatoon,
smediafire,
smerdekanews,
smetronews,
spalingmurah,
spin,
spinterest2,
squotes,
srandomgore,
srandomtt,
srexdl,
srexdldown,
ssearchgore,
ssfiledown,
ssfilesearch,
ssoundcloud,
sstickersearch,
stextmakervid,
stiktok,
strendtwit,
stwitter,
swallpapercave,
swallpapercraft,
swallpaperhd,
swattpad,
swebtoons,
swikisearch,
szerochan,
szippydl } from '../lib/scrape.js'

let handler = async (m, { text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (!args[0]) {
let hasil = ['android1',
'anime',
'anoboydl',
'anoboys',
'apkmirror',
'apkmody',
'artinama',
'asupanfilm',
'asupanfilminfo',
'bacaresep',
'carigc',
'cariresep',
'chara',
'corona',
'devianart',
'dewabatch',
'drakor',
'facebook',
'film',
'gempa',
'ghfollower',
'ghfollowing',
'ghuser',
'goredl',
'happymod',
'happymoddl',
'igdl',
'igdl2',
'igstalk',
'igstory',
'job',
'joox',
'kiryu',
'konachan',
'manga',
'mangatoon',
'mediafire',
'merdekanews',
'metronews',
'palingmurah',
'pin',
'pinterest2',
'quotes',
'randomgore',
'randomtt',
'rexdl',
'rexdldown',
'searchgore',
'sfiledown',
'sfilesearch',
'soundcloud',
'stickersearch',
'textmakervid',
'tiktok',
'trendtwit',
'twitter',
'wallpapercave',
'wallpapercraft',
'wallpaperhd',
'wattpad',
'webtoons',
'wikisearch',
'zerochan',
'zippydl']

	let row = Object.keys(hasil).map((v, index) => ({
		title: 'Scraper ' + hasil[v],
		description: '\nNo. ' + index,
		rowId: usedPrefix + 'scrap ' + hasil[v] + ' |naruto'
	}))
	let button = {
		buttonText: `☂️ Scraper Disini ☂️`,
		description: `⚡ Silakan pilih Scraper di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
let blum = 'Fitur Ini Belum ditambahkan'
let kueri =  'Masukkan Query\nEx. ' + usedPrefix + command + ' anime |naruto'
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
if (args[0] == 'android1') {
let gas = await sandroid1(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'anime') {
if (!one) throw kueri
let teks = await sanime(one)
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nThumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'anoboydl') {
if (!one) throw kueri
let teks = await sanoboydl(one)
return conn.sendButton(m.chat, `*RESULT: !*

*Judul:* ${teks.judul}
*Uptime:* ${teks.uptime}
*Link:* ${teks.direct_link}

*${htjava} MFORU ${htjava}*
*SD:* ${teks.mforu.SD}
*HD:* ${teks.mforu.HD}

*${htjava} ZIPPY ${htjava}*
*SD:* ${teks.zippy.SD}
*HD:* ${teks.zippy.HD}

*${htjava} MIRROR ${htjava}*
*SD:* ${teks.mirror.SD}
*HD:* ${teks.mirror.HD}
`, author, null, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + one]
            ], m)
}
if (args[0] == 'anoboys') {
if (!one) throw kueri
let teks = await sanoboys(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nThumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'apkmirror') {
if (!one) throw kueri
let teks = await sapkmirror(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nDev: ' + v.dev + '\nSize: ' + v.size + '\nLink: ' + v.link + '\nVersion: ' + v.version + '\nuploaded_on: ' + v.uploaded_on + '\ndownload_count: ' + v.download_count,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'apkmody') {
if (!one) throw kueri
let teks = await sapkmody(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\ninfomod: ' + v.infomod + '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'artinama') {
if (!one) throw kueri
let gas = await sartinama(one)
}
if (args[0] == 'asupanfilm') {
let teks = await sasupanfilm()
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\ndeskripsi: ' + v.deskripsi + '\nLink: ' + v.link + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'asupanfilminfo') {
if (!one) throw kueri
let teks = await sasupanfilminfo(one)
return conn.sendButton(m.chat, `*RESULT: !*

${teks.judul}
${teks.thumb}
${teks.alurcerita_imdb}
${teks.alurcerita_tmdb}
${teks.direksi}
${teks.pemeran}
${teks.kategori}
${teks.negara}
${teks.tahun_rilis}
${teks.durasi}
${teks.skor}
${teks.kualitas}
${teks.jenis}
`, author, null, [
                ['Next', usedPrefix + command + ' ' + args[0]]
            ], m)
}
if (args[0] == 'bacaresep') {
if (!one) throw kueri
let gas = await sbacaresep(one)
}
if (args[0] == 'carigc') {
if (!one) throw kueri
let teks = await scarigc(one)
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' *' + v.nama,
		description: '\nNama: *' + v.nama + '\nLink: ' + v.link,
		rowId: usedPrefix + 'inspect ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'cariresep') {
if (!one) throw kueri
let gas = await scariresep(one)
}
if (args[0] == 'chara') {
if (!one) throw kueri
let teks = await schara(one)
return conn.sendButton(m.chat, `*Result: !*
${teks.nama}
${teks.gender}
${teks.warna_rambut}
${teks.warna_mata}
${teks.gol_darah}
${teks.birthday}
${teks.description}
`, author, logo, [
                ['Back', usedPrefix + 'menu']
            ], m)
}
if (args[0] == 'corona') {
if (!one) throw kueri
let gas = await scorona(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'devianart') {
if (!one) throw kueri
let teks = await sdevianart(one)
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + one]
            ], m)
}
if (args[0] == 'dewabatch') {
if (!one) throw kueri
let gas = await sdewabatch(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'drakor') {
if (!one) throw kueri
let gas = await sdrakor(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'facebook') {
if (!one) throw kueri
let teks = await sfacebook(one)
let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' Result',
		description: '\nLink: ' + v.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'film') {
if (!one) throw kueri
let gas = await sfilm(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'gempa') {
if (!one) throw kueri
let gas = await sgempa(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'ghfollower') {
if (!one) throw kueri
let gas = await sghfollower(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'ghfollowing') {
if (!one) throw kueri
let gas = await sghfollowing(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'ghuser') {
if (!one) throw kueri
let teks = await sghuser(one)
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + teks.name,
		description: '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'goredl') {
if (!one) throw kueri
let teks = await sgoredl(one)
return conn.sendButton(m.chat, `*Result: !*
${teks.data.judul}
${teks.data.views}
${teks.data.comment}
${teks.data.link}
`, author, teks.data.link, [
                ['Back', usedPrefix + 'menu']
            ], m)
}
if (args[0] == 'happymod') {
if (!one) throw kueri
let teks = await shappymod(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nrating: ' + v.rating + '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'happymoddl') {
if (!one) throw kueri
let teks = await sigdl(one)
	let row = Object.values(teks.download).map((v, index) => ({
		title: index + ' Result: ' + v.title,
		description: '\nurl: ' + teks.title + '\nurl: ' + teks.info,
		rowId: usedPrefix + 'get ' + v.dl_link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'igdl') {
if (!one) throw kueri
let teks = await sigdl(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' Result',
		description: '\nurl: ' + v.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'igdl2') {
if (!one) throw kueri
let gas = await sigdl2(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'igstalk') {
if (!one) throw kueri
let gas = await sigstalk(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'igstory') {
if (!one) throw kueri
let teks = await sigstory(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' Result',
		description: '\nurl: ' + v.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'job') {
if (!one) throw kueri
let teks = await sjob(one)
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.job,
		description: '\nperusahaan: ' + v.perusahaan + '\ndaerah: ' + v.daerah + '\nupload: ' + v.upload + '\nlink_Detail: ' + v.link_Detail,
		rowId: usedPrefix + 'ss ' + v.link_Detail
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'joox') {
if (!one) throw kueri
let teks = await sjoox(one)
	let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.lagu,
		description: '\nAlbum: ' + v.album + '\nPenyanyi: ' + v.penyanyi + '\nPublish: ' + v.publish + '\nImg: ' + v.img + '\nMp3: ' + v.mp3,
		rowId: usedPrefix + 'get ' + v.mp3
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'kiryu') {
if (!one) throw kueri
let gas = await skiryu(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'konachan') {
if (!one) throw kueri
let teks = await skonachan(one)
return conn.sendButton(m.chat, `*Result: !*`, author, teks.getRandom(), [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + one]
            ], m)
}
if (args[0] == 'manga') {
if (!one) throw kueri
let teks = await smanga(one)
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nThumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'mangatoon') {
if (!one) throw kueri
let gas = await smangatoon(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'mediafire') {
if (!one) throw kueri
let teks = await smediafire(one)
return conn.sendButton(m.chat, `*RESULT!*

*judul:* ${teks.judul}
*upload_date:* ${teks.upload_date}
*size:* ${teks.size}
*mime:* ${teks.mime}
`, author, null, [
                ['GET', usedPrefix + 'get ' + teks.link]
            ], m)
}
if (args[0] == 'merdekanews') {
let teks = await smerdekanews()
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nUpload: ' + v.upload_date + '\nLink: ' + v.link + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'metronews') {
let teks = await smetronews()
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\ndeskripsi: ' + v.deskripsi + '\nLink: ' + v.link + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'palingmurah') {
if (!one) throw kueri
let gas = await sandroid1(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'pin') {
let teks = await spin()
let row = Object.values(teks).map((v, index) => ({
		title: index + ' Result',
		description: '\nUpload: ' + v.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'pinterest2') {
if (!one) throw kueri
let gas = await spinterest2(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'quotes') {
if (!one) throw kueri
let teks = await squotes(one)
let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' ' + v.author,
		description: '\nquotes: ' + v.quote + '\nbio: ' + v.bio,
		rowId: usedPrefix + 'nulis ' + v.quote
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'randomgore') {
if (!one) throw kueri
let teks = await srandomgore(one)
return conn.sendButton(m.chat, `*Result: !*
${teks.data.judul}
${teks.data.views}
${teks.data.comment}
${teks.data.thumb}
`, author, teks.data.link, [
                ['GET', usedPrefix + 'get ' + teks.data.link]
            ], m)
}
if (args[0] == 'randomtt') {
if (!one) throw kueri
let teks = await srandomtt(one)
return conn.sendButton(m.chat, `*Result: !*
${teks.username}
${teks.caption}
${teks.like_count}
${teks.comment_count}
${teks.share_count}
${teks.videourl}
`, author, teks.videourl, [
                ['GET', usedPrefix + 'get ' + teks.videourl]
            ], m)
}
if (args[0] == 'rexdl') {
if (!one) throw kueri
let teks = await srexdl(one)
	let row = Object.values(teks).map(( v, index ) => ({
		title: index + ' ' + v.judul,
		description: '\nkategori: ' + v.kategori + '\nupload_date: ' + v.upload_date + '\ndeskripsi: ' + v.deskripsi + '\nthumb: ' + v.thumb + '\nlink: ' + v.link,
		rowId: usedPrefix + 'get ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'rexdldown') {
if (!one) throw kueri
let teks = await srexdldown(one)
	let row = Object.values(teks.download).map(( v, index ) => ({
		title: index + ' ' + v.link_name,
		description: '\njudul: ' + teks.judul + '\nupdate_date: ' + teks.update_date + '\nversion: ' + v.version + '\nsize: ' + v.size,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'searchgore') {
if (!one) throw kueri
let teks = await ssearchgore(one)
let row = Object.values(teks.data).map((v, index ) => ({
		title: index + ' ' + v.judul,
		description: '\nuploader: ' + v.uploader + '\nthumb: ' + v.thumb + '\nLink: ' + v.link,
		rowId: usedPrefix + 'get ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'sfiledown') {
if (!one) throw kueri
let teks = await ssfiledown(one)
return conn.sendButton(m.chat, `*Result: !*

*judul:* ${teks.data.judul}
*size:* ${teks.data.size}
*type:* ${teks.data.type}
*mime:* ${teks.data.mime}
*desc:* ${teks.data.desc}
*uploader:* ${teks.data.uploader}
*uploaded:* ${teks.data.uploaded}
*download_count:* ${teks.data.download_count}
`, author, teks.data.link, [
                ['GET', usedPrefix + 'get ' + teks.data.link]
            ], m)
}
if (args[0] == 'sfilesearch') {
if (!one) throw kueri
let teks = await ssfilesearch(one)
	let row = Object.values(teks).map((v, index ) => ({
		title: index + ' ' + v.nama,
		description: '\nNama: ' + v.nama + '\nSize: ' + v.size + '\nLink: ' + v.link,
		rowId: usedPrefix + command + ' sfiledown ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'soundcloud') {
if (!one) throw kueri
let teks = await ssoundcloud(one)
return conn.sendButton(m.chat, `*Result: !*

*judul:* ${teks.judul}
*thumb:* ${teks.thumb}
*download_count:* ${teks.download_count}
`, author, teks.link, [
                ['GET', usedPrefix + 'get ' + teks.link]
            ], m)
}
if (args[0] == 'stickersearch') {
if (!one) throw kueri
let teks = await sstickersearch(one)
	let row = Object.values(teks).map(( index ) => ({
		title: index + ' ' + teks.title,
		description: '\nAuthor: ' + teks.author + '\nUrl: ' + teks.author_link,
		rowId: usedPrefix + 'fetchsticker ' + [teks.sticker].getRandom() + ' wsf'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'textmakervid') {
if (!one) throw kueri
let teks = await stextmakervid(one, args[2])
return conn.sendButton(m.chat, `*Result: !*
${teks.url}

List Style:
0-5
`, author, teks.url, [
                ['GET', usedPrefix + 'get ' + teks.url]
            ], m)
}
if (args[0] == 'tiktok') {
if (!one) throw kueri
let teks = await stiktok(one)
conn.send2ButtonVid(m.chat, teks.wm, 'Created By: ' + author, wm, 'No Wm', usedPrefix + 'get ' + teks.nowm, 'Audio', usedPrefix + 'get ' + teks.audio, m)
}
if (args[0] == 'trendtwit') {
if (!one) throw kueri
let gas = await strendtwit(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'twitter') {
if (!one) throw kueri
let teks = await stwitter(one)
let row = Object.values(teks.data).map((v, index) => ({
		title: index + ' Result',
		description: '\nurl: ' + v.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'wallpapercave') {
if (!one) throw kueri
let teks = await swallpapercave(one)
return conn.sendButton(m.chat, `*Result: !*`, author, teks.getRandom(), [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + one]
            ], m)
}
if (args[0] == 'wallpapercraft') {
if (!one) throw kueri
let teks = await swallpapercraft(one)
return conn.sendButton(m.chat, `*Result: !*`, author, teks.getRandom(), [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + one]
            ], m)
}
if (args[0] == 'wallpaperhd') {
if (!one) throw kueri
let teks = await swallpaperhd(one)
return conn.sendButton(m.chat, `*Result: !*`, author, teks.getRandom(), [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + one]
            ], m)
}
if (args[0] == 'wattpad') {
if (!one) throw kueri
let gas = await swattpad(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'webtoons') {
if (!one) throw kueri
let gas = await swebtoons(one)
throw await clean(JSON.stringify(gas, null, 4))
}
if (args[0] == 'wikisearch') {
if (!one) throw kueri
let teks = await swikisearch(one)
	let row = Object.values(teks).map(( v, index ) => ({
		title: index + ' ' + v.judul,
		description: '\nWiki: ' + v.wiki + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'get ' + v.thumb
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'zerochan') {
if (!one) throw kueri
let teks = await szerochan(one)
let pigg = teks.result
return conn.sendButton(m.chat, `*Result: !*
`, author, pigg.getRandom(), [
                ['GET', usedPrefix + 'get ' + pigg.getRandom()]
            ], m)
}
if (args[0] == 'zippydl') {
if (!one) throw kueri
let teks = await szippydl(one)
return conn.sendButton(m.chat, `*Result: !*
${teks.title}
${teks.extension}
${teks.filesize}
${teks.upload}
`, author, teks.data.link, [
                ['GET', usedPrefix + 'get ' + teks.link]
            ], m)
}
if (args[0] == 'zippydl2') {
if (!one) throw kueri
let gas = await szippydl2(one)
throw await clean(JSON.stringify(gas, null, 4))
}

}
handler.tags = ["tools"]
handler.help = ["scrap <args> |query"]
handler.command = ["scrap"]

export default handler

function clean(string) {
    return string.replace(/{/g, '').replace(/}/g, '')
                 .replace(/"/g, '')
}
