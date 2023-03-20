import { getAccessToken } from '../lib/spotify-down.js'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
    const { access_token } = await getAccessToken()
    var sp = await Spotify(access_token, text)
    var cap = "Result\n"
    m.reply(cap + sp)
}
handler.help = ['spotif'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(spotif)$/i
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler

async function Spotify(token, teks) {
const response = await fetch(
      "https://api.spotify.com/v1/search?q=" + teks + "&type=track&limit=1",
      {
        headers: {
          Authorization: "Bearer " + token
        },
      },
    )
    const data = await response.json()

    if (data.error) {
      throw eror
    }

    const item = data.tracks.items[0]

    return {
      id: item.id,
      title: item.name,
      image: item.album.images[0].url,
      preview: item.preview_url,
      artists: item.artists.map((v) => v.name),
    }
 }