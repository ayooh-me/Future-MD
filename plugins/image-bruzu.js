
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    text
}) => {
let [watermark, quotes] = text.split(/[^\w\s]/g)
if (!(watermark && quotes)) return await m.reply("*Example:*\n" + usedPrefix + command + " wm.quotes")
    try {
        await m.reply(wait)
        let bruzu = "https://img.bruzu.com/?backgroundImage=" + logo + "&a.text=" + quotes + "&a.color=white&a.fontFamily=Poppins&a.fontWeight=800&a.width=450&b.text=" + watermark + "&b.width=450&b.top=480&b.originY=bottom&b.color=white&b.fontFamily=Playfair Display&b.fontSize=30"
        await conn.sendFile(m.chat, bruzu, "", "*[ Quotes Maker ]*", m)
    } catch (e) {
        throw eror
    }
}
handler.help = ["bruzu"]
handler.tags = ["search"]
handler.command = /^(bruzu)$/i
export default handler
