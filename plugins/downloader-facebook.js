import fetch from "node-fetch"
import wibusoft from "wibusoft"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    if (!args[0]) throw "Input URL"
    let results = await wibusoft.downloader.facebookDownload(args[0])
    if (!results.result.sd == "undefined") {
        let dapet = ["hd", "sd", "audio"]
        let listSections = []
        Object.keys(dapet).map((v, index) => {
            listSections.push([index + " " + cmenub + " FACEBOOK ", [
                [dapet[v].toUpperCase() + " Video 🎥", usedPrefix + command + " " + args[0] + " " + dapet[v], ""]
            ]])
        })
        if (!args[1]) return conn.sendList(m.chat, htki + " 📺 FB DOWN 🔎 " + htka, `⚡ Silakan pilih menu di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ FB Disini ☂️", listSections, m)
        if (!dapet.includes(args[1])) throw "sd, hd or audio"

        let caption = `*[ F A C E B O O K ]*

*Title:* ${results.result.title}
*Time:* ${results.result.time}
	`

        let out
        if (args[1] == "hd") {
            out = results.result.hd
        }
        if (args[1] == "sd") {
            out = results.result.sd
        }
        if (args[1] == "audio") {
            out = results.result.audio
        }

        m.reply(wait)
        if (args[1] == "audio") {
        await conn.sendFile(m.chat, out, 'audio.mp3', '', m, null, adReplyS)
        } else {
        await conn.sendFile(m.chat, out, "", caption, m)
        }
        
       } else {
        try {
        let dapet = ["hd", "sd"]
        let listSections = []
        Object.keys(dapet).map((v, index) => {
            listSections.push([index + " " + cmenub + " FACEBOOK ", [
                [dapet[v].toUpperCase() + " Video 🎥", usedPrefix + command + " " + args[0] + " " + dapet[v], ""]
            ]])
        })
        if (!args[1]) return conn.sendList(m.chat, htki + " 📺 FB DOWN V2 🔎 " + htka, `⚡ Silakan pilih menu di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ FB Disini ☂️", listSections, m)
        if (!dapet.includes(args[1])) throw "sd or hd"

        let res = await (await fetch(global.API("xcdr", "/api/download/fb2", {
            url: args[0],
            apikey: "Lann"
        }, ""))).json()
        if (!res) throw "Cant download the post"

        let caption = `*[ F A C E B O O K ]*

*Title:* ${res.result.title}
*Duration:* ${res.result.duration}
	
*Process:* _${res.processed}_`

        let out
        if (args[1] == "hd") {
            out = res.result.links.hd
        }
        if (args[1] == "sd") {
            out = res.result.links.sd
        }

        m.reply(wait)
        await conn.sendFile(m.chat, out, "", caption, m)

    } catch (e) {
    throw eror
    }
  }
}
handler.help = ["facebook"]
handler.tags = ["downloader"]
handler.alias = ["fb", "fbdl", "facebook", "facebookdl"]
handler.command = /^((facebook|fb)(dl)?)$/i
export default handler