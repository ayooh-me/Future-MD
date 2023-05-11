import axios from "axios"
import cheerio from "cheerio"
import { mediafiredl } from "@bochilteam/scraper"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    let spas = "                "
    let type = (args[0] || "").toLowerCase()
    let urut = text.split`|`
    let one = urut[1]
    if (!text) throw "Masukkan link Mediafire\nApa yang kamu cari?"

    let data = [
        "bochilteam",
        "lolhuman",
        "scraper"
    ]
    let listSections = []
    Object.keys(data).map((v, index) => {
        listSections.push(
            ["Method " + data[v].toUpperCase(), usedPrefix + command + " " + data[v] + " |" + text]
        )
    })
    switch (type) {
        case "bochilteam":
            try {
                let bocil = await mediafiredl(one)
    let capboc = `*${htki} MEDIAFIRE ${htka}*
*💌 Name:* ${bocil.filename}
*📊 Size:* ${bocil.filesizeH}
*🗂️ Extension:* ${bocil.ext}
*📨 Uploaded:* ${bocil.aploud}

${wait}
`
    await m.reply(capboc)
    if (bocil.url) {
    await conn.sendFile(m.chat, bocil.url, bocil.filename, "", m, null, { mimetype: bocil.ext, asDocument: true })
    } else throw eror
            } catch (e) {
                throw eror
            }
            break

        case "lolhuman":
            try {
                let lol = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${global.lolkey}&url=${one}`)
    let human = await lol.json()
    if (!human.result.filename) throw "Error Gan"
    let caplol = `*${htki} MEDIAFIRE ${htka}*
*💌 Name:* ${human.result.filename}
*🗂️ Extension:* ${human.result.filetype}
*📊 Size:* ${human.result.filesize}
*📨 Uploaded:* ${human.result.uploaded}

${wait}
`
    await m.reply(caplol)
    if (human.result.link) {
    await conn.sendFile(m.chat, human.result.link, human.result.filename, "", m, null, { mimetype: human.result.filetype, asDocument: true })
    } else throw eror
            } catch (e) {
                throw eror
            }
            break
            
            case "scraper":
            try {
                let scrap = await mediafireDl(one)
    let capscrap = `*${htki} MEDIAFIRE ${htka}*
*💌 Name:* ${scrap[0].nama}
*📊 Size:* ${scrap[0].size}
*🗂️ Extension:* ${scrap[0].mime}

${wait}
`
await m.reply(capscrap)
if (scrap[0].link) {
    await conn.sendFile(m.chat, scrap[0].link, scrap[0].nama, "", m, null, { mimetype: scrap[0].mime, asDocument: true })
    } else throw eror
            } catch (e) {
                throw eror
            }
            break

        default:
            return conn.sendButton(m.chat, htki + " MEDIAFIRE DOWN " + htka + "\n⚡ Silakan pilih metode yang anda mau.", author, logo, listSections, m)
    }
}
handler.help = ["mediafire"]
handler.tags = ["downloader"]
handler.command = /^m(ediafire(d(own(load(er)?)?|l))?|f(d(own(load(er)?)?|l))?)$/i
handler.limit = true
export default handler

async function mediafireDl(url) {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const results = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
results.push({ nama, mime, size, link })
return results
}
