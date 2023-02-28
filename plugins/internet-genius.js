import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import Genius from 'genius-lyrics'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
let key = 'h6fTn1BYNjYi5VTszhyAFTcM3WWtk2E4hqrXCcutfObE4jVFnJ3LVyewHKIYTli7'
let Client = new Genius.Client(key)

if (!text) throw 'Exm. .genius a |hello'
let urut = text.split`|`
let comm = urut[0]
let quer = urut[1]

if (comm == 'a') {
let res = await Client.songs.search(quer)
let listSections = []
	res.map((v, index) => {
	
	let des = `
	*fullTitle:* ${v.fullTitle}
	*featuredTitle:* ${v.featuredTitle}
	*thumbnail:* ${v.thumbnail}
	*id:* ${v.id}
	*title:* ${v.title}
	*url:* ${v.url}
	`
	
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
           ['Get Lyrics', usedPrefix + command + ' get|' + index + '|' + v.title, des]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Genius Search 🔎 ' + htka, `⚡ Silakan pilih Genius Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Genius Search Disini ☂️`, listSections, m)
	}
	
	if (comm == 'b') {
	let ros = await fetch('https://api.genius.com/search?q=' + quer + '&access_token=' + key)
	let res = await ros.json()
	let listSections = []
	Object.values(res.response.hits).map((v, index) => {
	
	let des = `*annotation_count:* ${v.result.annotation_count}
*api_path:* ${v.result.api_path}
*artist_names:* ${v.result.artist_names}
*full_title:* ${v.result.full_title}
*header_image_thumbnail_url:* ${v.result.header_image_thumbnail_url}
*header_image_url:* ${v.result.header_image_url}
*id:* ${v.result.id}
*language:* ${v.result.language}
*lyrics_owner_id:* ${v.result.lyrics_owner_id}
*lyrics_state:* ${v.result.lyrics_state}
*path:* ${v.result.path}
*pyongs_count:* ${v.result.pyongs_count}
*relationships_index_url:* ${v.result.relationships_index_url}
*release_date_for_display:* ${v.result.release_date_for_display}
*release_date_with_abbreviated_month_for_display:* ${v.result.release_date_with_abbreviated_month_for_display}
*song_art_image_thumbnail_url:* ${v.result.song_art_image_thumbnail_url}
*song_art_image_url:* ${v.result.song_art_image_url}
*title:* ${v.result.title}
*title_with_featured:* ${v.result.title_with_featured}
	`
	
	listSections.push([index + ' ' + cmenub + ' ' + v.result.title, [
          ['Get Song', usedPrefix + command + ' a|' + v.result.title, des]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Genius Search 🔎 ' + htka, `⚡ Silakan pilih Genius Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Genius Search Disini ☂️`, listSections, m)
	}
	
if (comm == 'get') {
let song = await Client.songs.search(urut[2])
let lirik = await song[urut[1]].lyrics()
throw lirik
}
	
    }
handler.tags = ['info']
handler.help = ['genius']
handler.command = ['genius']

export default handler
