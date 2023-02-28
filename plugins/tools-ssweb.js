import axios from "axios"
import fetch from "node-fetch"
import uploadImage from "../lib/uploadImage.js"

let handler = async (m, {
    conn,
    usedPrefix,
    args,
    command
}) => {
    let query = "input text\nEx. .ss s.id\n<command> <tex>"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]
    let LinkReg = /https?:\/\//.test(two) ? two : "https://" + two

    if (["ss", "ssf", "ssweb"].includes(command)) {
        m.reply(wait)
        let lis = [
            "shot.screenshotapi.net",
            "api.popcat.xyz",
            "api.apiflash.com",
            "image.thum.io",
            "www.screenshotmachine.com",
            "www.urlbox.io"
        ]
        let row = Object.keys(lis).map((v, index) => ({
            title: "By " + lis[v],
            description: "Bot " + author,
            rowId: usedPrefix + "ssget " + lis[v] + "|" + text
        }))
        let button = {
            buttonText: `☂️ Tema Disini ☂️`,
            description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
            footerText: wm
        }
        return conn.sendListM(m.chat, button, row, m)
    }
    if (command == "ssget") {
        try {
            if (one == "www.screenshotmachine.com") {
                let st = await ssweb(LinkReg, "full", "desktop")
                let res = await uploadImage(st)
                await conn.sendFile(m.chat, res, "", author, m)
            }
            if (one == "www.urlbox.io") {
                let res = await ssweb2(LinkReg)
                await conn.sendFile(m.chat, res, "", author, m)
            }
            if (one == "shot.screenshotapi.net") {
                let res = "https://shot.screenshotapi.net/screenshot?token=WCCYKR0-X5CMMV0-JB4G5Z5-P6SPC8R&url=" + LinkReg + "&full_page=true&fresh=true&output=image&file_type=jpg"
                await conn.sendFile(m.chat, res, "", author, m)
            }
            if (one == "api.popcat.xyz") {
                let res = "https://api.popcat.xyz/screenshot?url=" + LinkReg
                await conn.sendFile(m.chat, res, "", author, m)
            }
            if (one == "api.apiflash.com") {
                let res = "https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=" + LinkReg
                await conn.sendFile(m.chat, res, "", author, m)
            }
            if (one == "image.thum.io") {
                let res = "https://image.thum.io/get/fullpage/" + LinkReg
                await conn.sendFile(m.chat, res, "", author, m)
            }
        } catch (e) {
            throw eror
        }
    }

}
handler.help = ["ss", "ssf", "ssweb"]
handler.tags = ["tools"]
handler.command = /^ss(get|web|f)?$/i

export default handler

export async function ssweb(url = "", full = false, type = "desktop") {
    type = type.toLowerCase()
    if (!["desktop", "tablet", "phone"].includes(type)) type = "desktop"
    let form = new URLSearchParams()
    form.append("url", url)
    form.append("device", type)
    if (!!full) form.append("full", "on")
    form.append("cacheLimit", 0)
    let res = await axios({
        url: "https://www.screenshotmachine.com/capture.php",
        method: "post",
        data: form
    })
    let cookies = res.headers["set-cookie"]
    let buffer = await axios({
        url: "https://www.screenshotmachine.com/" + res.data.link,
        headers: {
            "cookie": cookies.join("")
        },
        responseType: "arraybuffer"
    })
    return Buffer.from(buffer.data)
}

export async function ssweb2(url) {
    let data = await axios.post("https://www.urlbox.io/api/render", {
        url
    })
    return data.data.screenshotUrl
}