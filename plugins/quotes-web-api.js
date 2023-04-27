import fetch from "node-fetch"

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let ends = [
        "random",
        "image",
        "custom"
    ]
    let [modes, kodes] = text.split(/[^\w\s]/g)
    if (!ends.includes(modes)) return m.reply("*Example:*\n.quotesweb random\n\n*Pilih type yg ada*\n" + ends.map((v, index) => "  ○ " + v).join('\n'))
    await m.reply(wait)
    if (modes.includes("random")) {
        let res = await Quote("random", null)
        let output = Object.entries(res[0]).map(([key, value]) => `  ○ *${key.toUpperCase()}:* ${value}`).join('\n')
        await m.reply(output)
    }
    if (modes.includes("image")) {
        if (!kodes) return m.reply("input url")
        let res = await Quote("image", kodes)
        await conn.sendFile(m.chat, res, '', '', m)
    }
    if (modes.includes("custom")) {
        if (!kodes) return m.reply("input teks")
        let res = await Quote("custom", kodes)
        await conn.sendFile(m.chat, res, '', '', m)
    }

}
handler.help = ["quotesweb type query"]
handler.tags = ["internet"]
handler.command = /^(quotesweb)$/i

export default handler
async function Quote(modes, kodes) {
    if (modes == "random") {
        let res = await fetch("https://web-series-quotes-api.deta.dev/quote/")
        return await res.json()
    }
    if (modes == "image") {
        return "https://web-series-quotes-api.deta.dev/pic/image?background_img_url=" + encodeURIComponent(kodes) + "&text_color=white&text_size=80"
    }
    if (modes == "custom") {
        return "https://web-series-quotes-api.deta.dev/pic/custom?text=" + encodeURIComponent(kodes) + "&background_color=white&text_color=black&text_size=120&x=3600&y=2400"
    }
}