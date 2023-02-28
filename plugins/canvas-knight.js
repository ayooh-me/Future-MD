import uploadImage from '../lib/uploadImage.js'

import { 
Bag,
Base,
Bonk,
Burn,
Gay,
Gfx1,
Gfx2,
Gfx3,
Gfx4,
Gfx5,
Goodbye,
Goodbye2,
Goodbye3,
Gura,
Hacker1,
Hacker2,
Hacker3,
Horny,
Inv,
Jo,
Lickanime,
Patrick,
Rank,
Ship,
Spo,
Up,
Vs,
Welcome,
Welcome2,
Welcome3,
Xnxx
 } from 'knights-canvas'

let handler = async (m, { text, args, usedPrefix, command }) => {

if (!args[0]) {
let hasil = [
'Bonk',
'Burn',
'Horny',
'Gfx1',
'Gfx2',
'Gfx3',
'Gfx5',
'Gura',
'Hacker2',
'Hacker3',
'Spo',
'Up',
'Vs',
'Xnxx'
]

	let row = Object.keys(hasil).map((v, index) => ({
		title: 'Scraper ' + hasil[v],
		description: '\nNo. ' + index,
		rowId: usedPrefix + 'kn ' + hasil[v] + ' |naruto'
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
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  
   if (args[0] == 'Bonk') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Bonk()
    .setAvatar1(out)
    .setAvatar2(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Burn') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Burn()
    .setAvatar(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Horny') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Horny()
    .setAvatar(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

  if (args[0] == 'Gfx1') {
if (!one) throw kueri
let image = await new Gfx1()
    .setName(one)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}
if (args[0] == 'Gfx2') {
if (!one) throw kueri
let image = await new Gfx2()
    .setName(one)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Gfx3') {
if (!one) throw kueri
let image = await new Gfx3()
    .setText1(one)
    .setText2(two)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Gfx5') {
if (!one) throw kueri
let image = await new Gfx5()
    .setText(one)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Gura') {
if (!one) throw kueri
let image = await new Gura()
    .setName(one)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Hacker2') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Hacker2()
    .setAvatar(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Hacker3') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Hacker3()
    .setAvatar(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Spo') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Spo()
    .setAvatar(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Up') {
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Up()
    .setAvatar(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Vs') {
if (!one) throw kueri
let image = await new Vs()
    .setEnemy(one)
    .setMe(two)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
}

if (args[0] == 'Xnxx') {
if (!one) throw kueri
if (/webp/g.test(mime)) throw "Reply image"
let img = await q.download?.()
let out = await uploadImage(img)
let image = await new Xnxx()
    .setTitle(one)
    .setImage(out)
    .toAttachment();
  var data = image.toBuffer()
  conn.sendFile(m.chat, data, '', '', m)
  }

}
handler.tags = ["tools"]
handler.help = ["kn <args> |query"]
handler.command = ["kn"]

export default handler

function clean(string) {
    return string.replace(/{/g, '').replace(/}/g, '')
                 .replace(/"/g, '')
}
