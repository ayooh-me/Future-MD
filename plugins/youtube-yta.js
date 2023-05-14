import {
    youtubedl,
    youtubedlv2
} from "@bochilteam/scraper"
import fetch from "node-fetch"
let handler = async (m, {
    conn,
    args
}) => {
    if (!args[0]) throw "[ Masukkan Url Youtube! ]"

    try {
        await m.reply(wait)
        const yt = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0]))
        const link = await yt.audio["128kbps"].download()
        let ytl = "https://youtube.com/watch?v="
        let dls = "Downloading audio succes"
        let ytthumb = await (await conn.getFile(yt.thumbnail)).data
    let doc = {
        audio: {
            url: link
        },
        mimetype: "audio/mp4",
        fileName: yt.title,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                mediaType: 2,
                mediaUrl: ytl + yt.id,
                title: yt.title,
                body: dls,
                sourceUrl: ytl + yt.id,
                thumbnail: ytthumb
            }
        }
    }

    await conn.sendMessage(m.chat, doc, {
        quoted: m
    })
    } catch {
        try {
            await m.reply(wait)
            let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${args[0]}`)
            let lolh = await lolhuman.json()
            let n = lolh.result.title || "error"
            await conn.sendMessage(m.chat, {
                audio: {
                    url: lolh.result.link
                },
                fileName: `${n}.mp3`,
                mimetype: "audio/mp4"
            }, {
                quoted: m
            })
        } catch {
            await m.reply(eror)
        }
    }
}
handler.help = ["mp3", "a"].map(v => "yt" + v + ` <url> <without message>`)
handler.tags = ["downloader"]
handler.command = /^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i

handler.exp = 0
handler.register = false
handler.limit = true

export default handler