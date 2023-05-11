import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let spas = "                "
let lister = [
        "api",
        "module"
        ]
        let [feature] = text.split(/[^\w\s]/g)
    if (!lister.includes(feature)) return m.reply("*Example:*\n.darkjoke api\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v).join('\n'))
    if (lister.includes(feature)) {
        if (feature == "api") {
        await conn.sendFile(m.chat, global.API('xcdr', '/api/random/darkjoke', {}, 'apikey'), '', `${spas}*[ DARKJOKE ]*\nRequest by:\n${m.name}`, m)
        }
        if (feature == "module") {
        await conn.sendFile(m.chat, await bo.Darkjokes(), '', `${spas}*[ DARKJOKE ]*\nRequest by:\n${m.name}`, m)
        }
        }
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i

export default handler
