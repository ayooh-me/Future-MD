import axios from "axios"
import { mediafiredl } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    let spas = "                "
    let type = (args[0] || '').toLowerCase()
    let urut = text.split`|`
    let one = urut[1]
    if (!text) throw 'Masukkan link Mediafire\nApa yang kamu cari?'

    let data = [
        "bochilteam",
        "lolhuman"
    ]
    let listSections = []
    Object.keys(data).map((v, index) => {
        listSections.push(["Num. " + ++index, [
            ["Method " + data[v].toUpperCase(), usedPrefix + command + " " + data[v] + " |" + text, ""]
        ]])
    })
    switch (type) {
        case 'bochilteam':
            try {
                let bocil = await mediafiredl(one)
    let capboc = `
*💌 Name:* ${bocil.filename}
*📊 Size:* ${bocil.filesizeH}
*🗂️ Extension:* ${bocil.ext}
*📨 Uploaded:* ${bocil.aploud}
`.trim()
    m.reply(capboc)
    await conn.sendFile(m.chat, bocil.url, filename, '', m, null, { mimetype: ext, asDocument: true })
            } catch (e) {
                throw eror
            }
            break

        case 'lolhuman':
            try {
                let lol = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${global.lolkey}&url=${one}`)
    let human = await lol.json()
    if (!human.result.filename) throw 'Error Gan'
    let caplol = `*${htki} mediafire ${htka}*
*💌 Name:* ${human.result.filename}
*🗂️ Extension:* ${human.result.filetype}
*📊 Size:* ${human.result.filesize}
*📨 Uploaded:* ${human.result.uploaded}
    `
    if (human.result.filename) return conn.sendButtonImg(m.chat, logo, caplol, author, 'G E T', '.get ' + human.result.link, fakes, adReply)
            } catch (e) {
                throw eror
            }
            break

        default:
            return conn.sendList(m.chat, htki + " MEDIAFIRE DOWN " + htka, "⚡ Silakan pilih metode yang anda mau.", author, "[ Download ]", listSections, m)
    }
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^m(ediafire(d(own(load(er)?)?|l))?|f(d(own(load(er)?)?|l))?)$/i
handler.limit = true
export default handler
