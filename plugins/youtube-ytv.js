let limit = 80
import fetch from 'node-fetch'
import axios from 'axios'
import {
    youtubeSearch,
    youtubedl,
    youtubedlv2,
    youtubedlv3
} from '@bochilteam/scraper';
let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    args,
    command,
    isPrems,
    isOwner
}) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: '⏳',
            key: m.key,
        }
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who)
    .catch(_ => hwaifu.getRandom())
    let name = await conn.getName(who)
    if (!args || !args[0]) throw '[ Masukkan Url Youtube! ]'
    try {
        let chat = global.db.data.chats[m.chat]
        const isY = /y(es)/gi.test(args[1])
        const {
            thumbnail,
            video: _video,
            title
        } = await youtubedl(args[0])
        .catch(async _ => await youtubedlv2(args[0]))
        .catch(async _ => await youtubedlv3(args[0]))
        const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
        let video, source, res, link, lastError, isLimit
        for (let i in _video) {
            try {
                video = _video[i]
                isLimit = limitedSize < video.fileSize
                if (isLimit) continue
                link = await video.download()
                if (link) res = await fetch(link)
                isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
                if (isLimit) continue
                if (res) source = await res.arrayBuffer()
                if (source instanceof ArrayBuffer) break
            } catch (e) {
                video = source = link = null
                lastError = e
            }
        }
        if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
        if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*[ YOUTUBE VIDEO ]*

🔖 *Title:* ${title}
📤 *Filesize:* ${video.fileSizeH}

*L O A D I N G. . .*
`.trim(), m)
        if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp4', `
*[ YOUTUBE VIDEO ]*

🔖 *Title:* ${title}
📤 *Filesize:* ${video.fileSizeH}
`.trim(), m)
  
    } catch (e) {
        let res = await axios('https://violetics.pw/api/downloader/youtube?apikey=beta&url=' + text)
        let json = res.data
        let dapet = json.result.url
        let row = Object.values(dapet).map((v, index) => ({
            title: htjava + '📌 Quality: ' + v.subname,
            description: '\n⌚ Host: ' + json.result.hosting + '\n⏲️ Title: ' + json.result.meta.title + '\n📎 URL: ' + v.url + '\n📌 Source: ' + json.result.meta.source + '\n📌 Duration: ' + json.result.meta.duration,
            rowId: usedPrefix + 'get ' + v.url
        }))
        let button = {
            buttonText: `☂️ ${command} Search Disini ☂️`,
            description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
            footerText: wm
        }
        return conn.sendListM(m.chat, button, row, m)
    }
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler