import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async (m, { text, usedPrefix, command }) => {
  let sn = createHash('md5').update(m.sender).digest('hex')
if (m.isGroup) {
m.reply(`*📮 SN:* ${sn}`)
conn.reply(m.sender, `*📮 SN:* ${sn}`, m)
}
if (!m.isGroup) {
m.reply(`*📮 SN:* ${sn}`)
}

}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler