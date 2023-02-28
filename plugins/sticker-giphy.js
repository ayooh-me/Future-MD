import fetch from "node-fetch"
import { sticker } from "../lib/sticker.js"

let handler = async(m, { conn, groupMetadata, usedPrefix, args, command }) => {

if (command == "giphytrend") {
        let url = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=SdX60eTdyvdo0aAyJMQ5u87Qh7mTz7bG")
        let res = await url.json()
        let dapet = res.data
        let listSections = []
    Object.values(dapet).map((v, index) => {
    let caption = `*[ RESULT ]*

*- type:* ${v.type}
*- id:* ${v.id}
*- url:* ${v.url}
*- bitly_url:* ${v.bitly_url}
*- username:* ${v.username}
*- title:* ${v.title}
`
        listSections.push([index + " " + cmenub + " " + v.title, [
            ["Get Sticker 🎥", usedPrefix + "fetchsticker " + v.images.original.url + " wsf", caption]
        ]])
    })
    return conn.sendList(m.chat, htki + " 📺 Giphy 🔎 " + htka, `⚡ Silakan pilih Giphy di tombol di bawah...\n*Trending Giphy* \nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ Trending Giphy ☂️", listSections, m)
}

if (command == "giphy") {
let query = "input text\nEx. .epho aov|gg\n<command> <tex>"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
let url = await fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=SdX60eTdyvdo0aAyJMQ5u87Qh7mTz7bG`)
        let res = await url.json()
        let dapet = res.data
        let listSections = []
    Object.values(dapet).map((v, index) => {
    let caption = `*[ RESULT ]*

*- type:* ${v.type}
*- id:* ${v.id}
*- url:* ${v.url}
*- bitly_url:* ${v.bitly_url}
*- username:* ${v.username}
*- title:* ${v.title}
`
        listSections.push([index + " " + cmenub + " " + v.title, [
            ["Get Sticker 🎥", usedPrefix + "fetchsticker " + v.images.original.url + " wsf", caption]
        ]])
    })
    return conn.sendList(m.chat, htki + " 📺 Giphy Search 🔎 " + htka, `⚡ Silakan pilih Giphy Search di tombol di bawah...\n*Query:* ${text}\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ Search Giphy ☂️", listSections, m)
}

}
handler.command = handler.help = ["giphytrend", "giphy"]
handler.tags = ["search"]
export default handler