import fetch from 'node-fetch'
import { Cerpen } from 'dhn-api'

let handler = async (m, { text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
        let name = await conn.getName(who)
        let cerpen = await Cerpen()
        let hasil = `${htki} Cerpen *${text}* ${htka}

${cerpen}

*${htjava} By:* ${author}
`.trim()
return conn.sendButton(m.chat, hasil, wm, logo, [['➡️Next Cerpen➡️', `${usedPrefix}${command} ${text}`]], m, fakefb)
}
handler.help = ['cerpen'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(cerpen|cerita)$/i

export default handler