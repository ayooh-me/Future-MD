import fetch from "node-fetch"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let ends = [
        "search",
        "sticker"
    ]
    
    let [modes, kodes, memes] = text.split("|")
    if (!ends.includes(modes)) return m.reply("*Example:*\n.memix search|car\n\n*Pilih type yg ada*\n" + ends.map((v, index) => "  ○ " + v).join('\n'))

    if (ends.includes(modes)) {
        if (modes == "search") {
        if (!(kodes)) return m.reply("Input query!")
            await m.reply(wait)
            let data = await(await fetch("https://api.memix.com/v1/templates/search?q=" + kodes)).json()
            let list = data.templates.map((item, index) => `*${++index}.* ${item.id}`).join("\n")
    await conn.reply(m.chat, `*${htki} 📺 Memix Search 🔎 ${htka}*\n\n${list}`, m)
        }
        if (modes == "sticker") {
        if (!(kodes)) return m.reply("Input ID!")
        if (!(memes)) return m.reply("Input Text!")
            await m.reply(wait)
            await conn.sendFile(m.chat, "https://cdn.memix.com/memix-" + kodes + ".webp?text=" + memes, "", "", m)
        }
    }

}
handler.help = ["memix type query"]
handler.tags = ["internet"]
handler.command = /^(memix)$/i
export default handler
