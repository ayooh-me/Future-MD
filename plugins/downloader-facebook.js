import fetch from "node-fetch"
import {
    facebook
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

    let [links, version, quality] = text.split(" ")
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
                let results = await facebook.v1(links)
                let dapet = ["hd", "sd"]
                let buttons = []
                Object.keys(dapet).map((v, index) => {
                    buttons.push(
                        [dapet[v].toUpperCase() + " Video 🎥", usedPrefix + command + " " + links + " " + version + " " + dapet[v]]
                    )
                })
                if (!(quality)) return conn.sendButton(m.chat, htki + " 📺 FB DOWN 🔎 " + htka + `\n⚡ Silakan pilih menu di tombol di bawah...\n*Teks yang anda kirim:* ${links}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, imgr + command, buttons, m)

                let caption = `*[ F A C E B O O K ]*

*Title:* ${results.title}
*HD:* ${results.isHdAvailable}
	`

                let out
                if (quality == "hd") {
                    out = results.urls[0].hd ? results.urls[0].hd : (results.urls[1].sd ? results.urls[1].sd : giflogo)
                }
                if (quality == "sd") {
                    out = results.urls[1].sd ? results.urls[1].sd : (results.urls[0].hd ? results.urls[0].hd : giflogo)
                }

                await m.reply(wait)
                await conn.sendFile(m.chat, out, "", caption, m)
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (version == "V2") {
            try {
                let results = await (await fetch(global.API("xcdr", "/api/download/fb2", {
                    url: links,
                    apikey: "Lann"
                }, ""))).json()
                let dapet = ["hd", "sd"]
                let buttons = []
                Object.keys(dapet).map((v, index) => {
                    buttons.push(
                        [dapet[v].toUpperCase() + " Video 🎥", usedPrefix + command + " " + links + " " + version + " " + dapet[v]]
                    )
                })
                if (!(quality)) return conn.sendButton(m.chat, htki + " 📺 FB DOWN 🔎 " + htka + `\n⚡ Silakan pilih menu di tombol di bawah...\n*Teks yang anda kirim:* ${links}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, imgr + command, buttons, m)

                let caption = `*[ F A C E B O O K ]*

*Title:* ${results.result.title}
*Duration:* ${results.result.duration}
	
*Process:* ${results.processed}`

                let out
                if (quality == "hd") {
                    out = results.result.links.hd ? results.result.links.hd : (results.result.links.sd ? results.result.links.sd : giflogo)
                }
                if (quality == "sd") {
                    out = results.result.links.sd ? results.result.links.sd : (results.result.links.hd ? results.result.links.hd : giflogo)
                }

                await m.reply(wait)
                await conn.sendFile(m.chat, out, "", caption, m)
            } catch (e) {
                await m.reply(eror)
            }
        }
    }

}
handler.help = ["facebook"]
handler.tags = ["downloader"]
handler.alias = ["fb", "fbdl", "facebook", "facebookdl"]
handler.command = /^((facebook|fb)(dl)?)$/i
export default handler