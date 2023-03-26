import { spotifySearch } from '../lib/scraped-downloader.js'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan judul musik!`
  try {
  let json = await spotifySearch(text)
  let { title, artist, album, thumbnail, url, preview_mp3 } = json[0]
let spotifyinfo = `✨️ *Title:* ${title}
🗣️ *Artists:* ${artist}
🎆️ *Album:* ${album}
🌐️ *URL*: ${url}
💚️ *Direct URL:* ${preview_mp3}`

  await conn.sendFile(m.chat, thumbnail, '', spotifyinfo, m)
  await conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyinfo, m)
  } catch (e) {
  throw eror
  }
}
handler.help = ['spotify <query>']
handler.tags = ['internet']
handler.command = /^(spotify|music)$/i
export default handler
