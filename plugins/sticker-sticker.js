import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js'
import {
    webp2png
} from '../lib/webp2mp4.js'
import {
    mp4towebp
} from '../lib/uploader.js'
import {
    Sticker,
    StickerTypes
} from 'wa-sticker-formatter'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    var stiker
    var out
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    if (!args[0]) {
        let q = m.quoted ? m.quoted : m
        if (!m.quoted) throw `balas gambar/video/stiker dengan perintah ${usedPrefix + command}`
        let mime = (q.msg || q).mimetype || q.mediaType || ''
        if (/video/g.test(mime))
            if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
        let img = await q.download?.()
        var stek = new Sticker(img, {
            pack: name,
            author: packname,
            type: StickerTypes.FULL
        })
        if (/webp/g.test(mime)) {
            out = await webp2png(img)
        } else if (/image/g.test(mime)) {
            out = await uploadImage(img)
        } else if (/video/g.test(mime)) {
            out = await mp4towebp(img)
        } else if (/gif/g.test(mime)) {
            out = stek
        } else if (/viewOnce/g.test(mime)) {
            out = await uploadFile(img)
        }
        if (typeof out !== 'string') {
            out = await uploadImage(img)
        }
        stiker = await createSticker(false, out, packname, name, 60)
        m.reply(wait)
        if (stiker) {
            return m.reply(stiker)
        } else throw eror
    } else {
        if (isUrl(args[0])) {
            stiker = await createSticker(false, args[0], packname, author, 60)
        } else throw 'URL tidak valid!'
    }
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(ti(c?k(er(gif)?)?|c)|gif)?$/i

export default handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}

async function createSticker(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: packName,
        author: authorName,
        quality
    }
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}