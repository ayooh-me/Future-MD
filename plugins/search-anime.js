import fetch from "node-fetch"
import axios from "axios"
import cheerio from "cheerio"
import got from "got"

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Contoh penggunaan ${usedPrefix + command} Naruto`
  await m.reply(wait)
  
  if (command == 'anibatch') {
// Contoh penggunaan
let url = 'https://www.animebatch.id/?s=';
  let animeList = await searchAnimebatch(url + text);
  // Menambahkan link URL pada output dan deskripsi
  let formattedAnimeList = animeList.map(anime => ({
    title: anime.title,
    type: anime.type,
    score: anime.score,
    thumbnail: anime.thumbnail,
    link: anime.link,
  }));
let teks = formattedAnimeList.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.title}
*Type* : ${v.type}
*Score* : ${v.score}
*Link* : ${v.link}
*Thumb* : ${v.thumbnail}

   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
}

if (command == 'animeindo') {
// Contoh penggunaan
  let formattedAnimeList = await searchAnimeindo(text);
let teks = formattedAnimeList.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.title}
*Label* : ${v.labels}
*Desc* : ${v.description}
*Link* : ${v.link}
*Image* : ${v.image}

   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
}

if (command == 'drivenime') {
// Contoh penggunaan
  let formattedAnimeList = await searchDrivenime(text);
let teks = formattedAnimeList.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.title}
*Label* : ${v.genre}
*Desc* : ${v.content}
*Link* : ${v.url}
*Image* : ${v.image}
*Date* : ${v.date}

   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
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
// Contoh penggunaan
  let formattedAnimeList = await searchAnimeplanet(text);
let teks = formattedAnimeList.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.cardName}
*Link* : ${v.href}
*Desc* : ${v.title}
*Image* : ${v.imageSrc}

   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
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
let res = await searchAnoboy(text)
let teks = res.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.title}
*Link* : ${v.url}
*Thumb* : ${v.thumbnail}
${v.postedBy}
${v.episode}
${v.status}
   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
}

if (command == 'fanfox') {
let res = await searchFanfox(text)
let teks = res.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.title}
*Genre* : ${v.genre}
*Status* : ${v.status}
*Rank* : ${v.rank}
*Image* : ${v.image}
*Url* : ${v.url}
   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
}

if (command == 'gogoanime') {
let res = await searchGogoanime(text)
let teks = res.map((v, index) => {
                return `*[ ${index + 1} ]*
*Title* : ${v.title}
*Released* : ${v.released}
*Image* : ${v.imgSrc}
*Url* : ${v.href}
   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
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
handler.help = ['anibatch', 'animeindo', 'drivenime', 'anikyoji', 'animeplanet', 'anisearch', 'anoboy', 'fanfox', 'gogoanime', 'kiryu', 'kissmanga', 'klikmanga', 'komiku', 'mangadex', 'manganato', 'myanimelist', 'nimegami', 'oploverz', 'samehadaku', 'amino', 'googleit', 'groupwhatsapp', 'layarkaca', 'mangatoon', 'musicfinder']
handler.command = ['anibatch', 'animeindo', 'drivenime', 'anikyojin', 'animeplanet', 'anisearch', 'anoboy', 'fanfox', 'gogoanime', 'kiryu', 'kissmanga', 'klikmanga', 'komiku', 'mangadex', 'manganato', 'myanimelist', 'nimegami', 'oploverz', 'samehadaku', 'amino', 'googleit', 'groupwhatsapp', 'layarkaca', 'mangatoon', 'musicfinder']
handler.tags = ['internet']

export default handler

async function searchAnoboy(query) {
return await fetch('http://anoboy.web.id/search/' + encodeURIComponent(query))
  .then(response => response.text())
  .then(body => {
    const $ = cheerio.load(body);
    const results = [];

    $('div.bsx').each((index, element) => {
      const $element = $(element);
      const title = $element.find('h2[itemprop="headline"] a').text();
      const url = $element.find('h2[itemprop="headline"] a').attr('href');
      const thumbnail = $element.find('img[itemprop="image"]').attr('src');
      const postedBy = $element.find('.inf span:nth-child(2)').text().trim();
      const episode = $element.find('.inf span:nth-child(3)').text().trim();
      const status = $element.find('.inf span:nth-child(4)').text().trim();

      results.push({
        title,
        url,
        thumbnail,
        postedBy,
        episode,
        status
      });
    });

    return results;
  })
  }
  
async function searchAnimebatch(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);
    const result = [];

    $('.animposx').each((index, element) => {
      const anime = {};

      anime.title = $(element).find('.title h2').text() || 'tidak diketahui';
      anime.type = $(element).find('.type').text() || 'tidak diketahui';
      anime.score = $(element).find('.score').text().trim().replace(/\s\s+/g, ' ') || 'tidak diketahui';

      const thumbnail = $(element).find('.content-thumb img').attr('src');
      anime.thumbnail = thumbnail ? thumbnail.split('?')[0] : 'tidak diketahui';

      const animeLink = $(element).find('a').attr('href');
      anime.link = animeLink ? animeLink : 'tidak diketahui';

      result.push(anime);
    });

    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function searchAnimeindo(query) {
return await got('https://185.224.82.193/search/' + encodeURIComponent(query) + '/')
  .then((response) => response.body)
  .then((html) => {
    const $ = cheerio.load(html);
    const result = [];

    $('.menu .otable').each((index, element) => {
      const title = $(element).find('.videsc a').text().trim();
      const link = $(element).find('.videsc a').attr('href');
      const image = $(element).find('.vithumb img').attr('src');
      const labels = $(element).find('.videsc .label').toArray().map(label => $(label).text().trim());
      const description = $(element).find('.videsc .des').text().trim();

      result.push({
        title,
        link,
        image,
        labels,
        description,
      });
    });

    return result;
  })
  }
  
  async function searchDrivenime(query) {
  const url = 'https://drivenime.com/?s=' + encodeURIComponent(query) ; // Ubah URL sesuai kebutuhan
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const posts = [];

  $('.post.excerpt, .post.excerpt.last').each((index, element) => {
    const post = {};
    post.title = $(element).find('.title a').text().trim() || 'Tidak diketahui';
    post.url = $(element).find('.title a').attr('href') || 'Tidak diketahui';
    post.image = $(element).find('.featured-thumbnail img').attr('src') || 'Tidak diketahui';
    post.content = $(element).find('.post-content').text().trim() || 'Tidak diketahui';
    post.genre = $(element).find('.theauthor a').map((i, el) => $(el).text()).get() || ['Tidak diketahui'];
    post.date = $(element).find('.thetime').text().trim() || 'Tidak diketahui';

    posts.push(post);
  });

  return posts;
}

// Menggunakan Fetch API untuk melakukan HTTP GET request ke URL
async function searchAnimeplanet(query) {
	// URL yang akan di-scrape
const url = 'https://www.anime-planet.com/anime/all?name=' + encodeURIComponent(query); // Ganti dengan URL yang sesuai
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    // Array untuk menyimpan hasil scraping
    const results = [];

    // Mencari elemen <a> dengan class 'tooltip'
    $('a.tooltip').each((index, element) => {
      // Objek untuk menyimpan detail data
      const data = {};

      // Mendapatkan judul
      const title = $(element).attr('title');
      data.title = extractSectionsFromHTML(title) || 'tidak diketahui';

      // Mendapatkan atribut 'href'
      const href = $(element).attr('href');
      if (href && href.includes('/anime/') && !href.includes('/anime/all/')) {
        data.href = "https://www.anime-planet.com" + href;
      } else {
        data.href = 'tidak diketahui';
      }

      // Mendapatkan atribut 'data-src' dari elemen <img>
      const imageSrc = $(element).find('img').attr('data-src');
      data.imageSrc = imageSrc || 'tidak diketahui';

      // Mendapatkan teks dari elemen dengan class 'cardName'
      const cardName = $(element).find('.cardName').text();
      data.cardName = cardName || 'tidak diketahui';

      // Menambahkan objek data ke dalam array results
      results.push(data);
    });

    // Menampilkan hasil
    const filteredArray = results.filter((obj, index) => index >= 2);
    return filteredArray;
  } catch (error) {
    console.log('Terjadi kesalahan:', error);
  }
}

function extractSectionsFromHTML(html) {
  const $ = cheerio.load(html);
  const resultArray = [];

  $('*').each((index, element) => {
    const value = $(element).text().trim();
    resultArray.push(value);
  });

  return resultArray;
}


async function searchFanfox(query) {
  try {
    const url = `https://m.fanfox.net/search?k=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);
    const mangaList = [];

    $('li div.post-one').each((index, element) => {
      const manga = {};
      manga.title = $(element).find('.title').text() || 'tidak diketahui';
      manga.genre = $(element).find('.cover-info p:nth-child(2)').text() || 'tidak diketahui';
      manga.status = $(element).find('.cover-info p:nth-child(3)').text() || 'tidak diketahui';
      manga.rank = $(element).find('.cover-info p:nth-child(4)').text() || 'tidak diketahui';

      // Extracting the image URL
      const imgSrc = $(element).find('.cover img').attr('src');
      manga.image = imgSrc && (imgSrc.startsWith('//')
        ? `https:${imgSrc}`
        : imgSrc) || 'tidak diketahui';

      // Extracting the manga URL
      const mangaUrl = $(element).find('a').attr('href');
      manga.url = mangaUrl || 'tidak diketahui';

      mangaList.push(manga);
    });

    return mangaList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function searchGogoanime(query) {
  const url = 'https://www3.gogoanimes.fi/search.html?keyword=' + encodeURIComponent(query);

  try {
    const response = await fetch(url);
    const data = await response.text();
    const $ = cheerio.load(data);
    const results = [];

    $('.items li').each((index, element) => {
      const $li = $(element);
      const imgSrc = $li.find('.img img').attr('src');
      const title = $li.find('.name a').text().trim();
      const href = $li.find('.name a').attr('href');
      const released = $li.find('.released').text().trim().replace('Released:', '');

      const result = {
        imgSrc: imgSrc || 'Tidak diketahui',
        title: title || 'Tidak diketahui',
        href: 'https://www3.gogoanimes.fi' + href || 'Tidak diketahui',
        released: released || 'Tidak diketahui'
      };

      results.push(result);
    });

    return results;
  } catch (error) {
    console.log('Terjadi kesalahan:', error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
}