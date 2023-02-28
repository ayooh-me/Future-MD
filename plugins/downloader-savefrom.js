import { aiovideodl, savefrom } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.facebook.com/groups/972938613264044/permalink/1103753026849268/?app=fbl`
const { meta, hd, sd} = await savefrom(args[0]).catch(async _ => await aiovideodl(args[0]))
const done = hd.url || sd.url
  conn.sendButtonVid(m.chat, done, ` *🏷️Title:* ${meta.title}
*⌛ durasi:* ${meta.duration}
🔗 *Url:* ${done}`, author, 'To mp3', '.tomp3', fakes, adReply)
}
handler.help = ['savefrom'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(save(from)?)$/i

export default handler
