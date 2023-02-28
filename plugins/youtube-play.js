import {
    youtubeSearch
} from '@bochilteam/scraper'
let handler = async (m, {
    conn,
    command,
    text,
    usedPrefix
}) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: '⏳',
            key: m.key,
        }
    })
    if (!text) throw `Use example ${usedPrefix}${command} Dj Gama Naufal`
    let vid = (await youtubeSearch(text)).video[0]
    if (!vid) throw 'Video/Audio Tidak ditemukan'
    let {
        title,
        description,
        thumbnail,
        videoId,
        durationH,
        viewH,
        publishedTime
    } = vid
    const url = 'https://www.youtube.com/watch?v=' + videoId
    let caption = `
*${htki} PLAY ${htka}*

🔖 *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim()
    let listSections = []
    listSections.push(['[ PILIH OPSI YANG KAMU MAU ]', [
        ['🎶 Audio', usedPrefix + 'yta ' + url + ' yes'],
        ['🎥 Video', usedPrefix + 'ytv ' + url + ' yes'],
        ['🔎 Youtube Search', usedPrefix + 'yts ' + url]
    ]])

    return conn.sendList(m.chat, '', caption, author, '📣 GO TO YOUTUBE', listSections, m)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play((mp3|yt))?|ytplay)$/i
handler.limit = true

export default handler