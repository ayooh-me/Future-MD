import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import Genius from 'genius-lyrics'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    let key = 'h6fTn1BYNjYi5VTszhyAFTcM3WWtk2E4hqrXCcutfObE4jVFnJ3LVyewHKIYTli7'
let Client = new Genius.Client(key)
let song = await Client.songs.search(teks)
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks)).catch(_ => await song[0].lyrics())
    let caption = `
Lyrics *${result.title ? result : 'No'}*
Author ${result.author ? author : ''}

${result.lyrics ? author : ''}

Url ${result.link ? sgc : ''}
`.trim()
conn.reply(m.chat, caption, fakes, adReply)
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^l(yrics?|irik)$/i

export default handler