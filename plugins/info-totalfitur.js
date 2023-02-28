
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let tqto = `${wm}

${cmenut}
${cmenub} *🔖 FITUR :* ${totalf}
${cmenuf}

_Jangan di spam ntar erorr_
(. ❛ ᴗ ❛.)
${cmenua}`
return conn.send2ButtonLoc(m.chat, knimg, tqto, wm + '\n\n' + botdate, ' All Menu', usedPrefix + 'allmenu', ' List Menu', usedPrefix + 'menulist', m)
}
handler.help = ['totalfitur']
handler.tags = ['main','info']
handler.command = /^(feature|totalfitur)$/i
export default handler
