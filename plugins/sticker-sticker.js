import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js'
import {
    Sticker,
    StickerTypes
} from 'wa-sticker-formatter'
import {
    sticker
} from '../lib/sticker.js'
import wibusoft from 'wibusoft'

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
        let mime = (q.msg || q).mimetype || q.mediaType || ''
        if (/video/g.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
        }
        if (!/webp|image|video|gif|viewOnce/g.test(mime)) return m.reply('Reply media!')
        let img = await q.download?.()

        if (/webp/g.test(mime)) {
            out = await wibusoft.tools.makeSticker(img, {
                author: packname,
                pack: name,
                keepScale: true
            })
        } else if (/image/g.test(mime)) {
            out = await wibusoft.tools.makeSticker(img, {
                author: packname,
                pack: name,
                keepScale: true
            })
        } else if (/video/g.test(mime)) {
            out = await sticker(img, false, packname, name)
        } else if (/gif/g.test(mime)) {
            out = await wibusoft.tools.makeSticker(img, {
                author: packname,
                pack: name,
                keepScale: true
            })
        } else if (/viewOnce/g.test(mime)) {
            out = await wibusoft.tools.makeSticker(img, {
                author: packname,
                pack: name,
                keepScale: true
            })
        }

        stiker = out

        m.reply(wait)
        if (stiker) {
            m.reply(stiker)
        } else {
            throw eror
        }
    } else {
        if (isUrl(args[0])) {
            stiker = await createSticker(false, args[0], packname, name, 60)
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
        type: StickerTypes.FULL,
        pack: packName,
        author: authorName,
        quality
    }
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}

async function createStickerV(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: StickerTypes.CROPPED,
        pack: packName,
        author: authorName,
        quality
    }
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}