import axios from 'axios'
import { sticker } from '../lib/sticker.js'
import wibusoft from 'wibusoft'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    
   if (text.length > 30) return m.reply('Lebih dari 30 karakter!')
   
   let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => logo)
   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   
   try {
   let out = await wibusoft.tools.makeSticker(buffer, {
    author: packname,
    pack: name,
    keepScale: true
})
   await m.reply(out)
   } catch (e) {
   let stick = await sticker(buffer, false, name, packname)
   await conn.sendFile(m.chat, stick, 'Quotly.webp', '', m)
   }
}

handler.help = ['quotly']
handler.tags = ['sticker']
handler.command = ['quotly']

export default handler