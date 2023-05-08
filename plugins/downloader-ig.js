import fetch from "node-fetch"
import {
    instagram
} from "@xct007/frieren-scraper"

// others version will added soon.
let handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    let imgr = flaaa.getRandom()

    let ends = [
        "V1",
        "V2"
    ]

    let [links, version] = text.split(" ")
    if (!links) throw "Input URL"
    let dapet = ["V1", "V2"]
    let buttons = []
    Object.keys(dapet).map((v, index) => {
        buttons.push(
            [dapet[v].toUpperCase() + " Video 🎥", usedPrefix + command + " " + links + " " + dapet[v]]
        )
    })
    if (!(version)) return conn.sendButton(m.chat, htki + " 📺 FB DOWN 🔎 " + htka + `\n⚡ Silakan pilih menu di tombol di bawah...\n*Teks yang anda kirim:* ${links}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, imgr + command, buttons, m)


    if (ends.includes(version)) {
        if (version == "V1") {
            try {
                let results = await instagram.v1(links)

                let caption = `*[ I N S T A G R A M ]*`
                let out = results[0].url
                await m.reply(wait)
                await conn.sendFile(m.chat, out, "", caption, m)
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (version == "V2") {
            try {
                let results = await (await fetch("https://fantox001-scrappy-api.vercel.app/instadl?url=" + links)).json()

                let caption = `*[ I N S T A G R A M ]*`
                let out = results.videoUrl

                await m.reply(wait)
                await conn.sendFile(m.chat, out, "", caption, m)
            } catch (e) {
                await m.reply(eror)
            }
        }
    }

}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler