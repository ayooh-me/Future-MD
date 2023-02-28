import fetch from 'node-fetch'
import { Couples } from 'dhn-api'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let x = await Couples()
conn.sendButton(m.chat, 'Cewe', wm, x.female, [['🔄 Next 🔄', `/${command}`]], fakes, adReply)
conn.sendButton(m.chat, 'Cowo', wm, x.male, [['🔄 Next 🔄', `/${command}`]], fakes, adReply)
}

handler.tags = ['fun']
handler.command = ['ppcp']

export default handler