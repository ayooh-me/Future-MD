import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import {
    Sticker,
    StickerTypes
} from 'wa-sticker-formatter'
import { sticker } from '../lib/sticker.js'

let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    var stiker
    var out
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let [atas, bawah] = text.split(/[^\w\s]/g)

        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || q.mediaType || ''
        if (/video/g.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
            }
        if (!/webp|image|video|gif|viewOnce/g.test(mime)) return m.reply(`Reply Media dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`)
        let img = await q.download?.()
        
        if (/webp/g.test(mime)) {
            out = await createSticker(await webp2png(img), false, packname, name, 60)
        } else if (/image/g.test(mime)) {
            out = await createSticker(await uploadImage(img), false, packname, name, 60)
        } else if (/video/g.test(mime)) {
            out = await sticker(await uploadFile(img), false, packname, name)
        } else if (/gif/g.test(mime)) {
            out = await createSticker(img, false, packname, name, 60)
        } else if (/viewOnce/g.test(mime)) {
            out = await createSticker(out = await uploadFile(img), false, packname, name, 60)
        }
        
        stiker = out
        
        m.reply(wait)
        if (stiker) {
        m.reply(stiker)
        } else {
        throw eror
        }

}
handler.help = ['smeme (caption|reply media)', 'smm <url>', 'sm(caption|reply media)']
handler.tags = ['sticker']
handler.command = /^s(ti(ck(er)?|ker)meme|m(eme|i?m))$/i

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