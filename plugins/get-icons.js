import fetch from "node-fetch"

let handler = async(m, { conn, usedPrefix, args, command }) => {
let query = "input text\nEx. ." + command + " patrick\n<command> <tex>"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    
if (command == "tenor") {
    let gas = await fetch("https://g.tenor.com/v1/search?q=" + text + "&key=LIVDSRZULELA")
    let json = await gas.json()
    let dapet = json.results
        let listSections = []
    Object.values(dapet).map((v, index) => {
    let caption = `*[ RESULT ]*

*- desc:* ${v.content_description}
*- id:* ${v.id}
*- url:* ${v.url}
*- item:* ${v.itemurl}
*- title:* ${v.title}
`
        listSections.push([index + " " + cmenub + " " + v.title, [
            ["Get Sticker 🎥", usedPrefix + "fetchsticker " + v.media[0].gif.url + " wsf", caption]
        ]])
    })
    return conn.sendList(m.chat, htki + " 📺 Tenor 🔎 " + htka, `⚡ Silakan pilih Tenor di tombol di bawah...\n*Text:* ${text}\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ Search Tenor ☂️", listSections, m)
    }
    
  if (command == "urltopdf") {
    let gas = "https://api.html2pdf.app/v1/generate?url=" + text + "&apiKey=DzhGk9fhdPope6j8PmVmbxoNDDiWbsFpdeKZfMMrrxtsl3pXCRbfYOd7N4HovaJ1"
    return conn.sendFile(m.chat, gas, "hasil.pdf", "Hasil", m)
  }
  
}
handler.tags = ["search"]
handler.command = handler.help = ["tenor", "urltopdf"]

export default handler
