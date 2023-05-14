import { sticker } from "../lib/sticker.js"

let handler = async (m, { conn }) => {
	
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!who) return m.reply("tag user")
  await m.reply(wait)
  let marah = global.API("https://some-random-api.ml", "/canvas/triggered", {
    avatar: await conn.profilePictureUrl(who, "image").catch(_ => "./src/avatar_contact.png"), 
  })
let stiker = await sticker(false, marah, global.packname, m.name)
  if (stiker) return await conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
  
  throw stiker.toString()
}
handler.help = ["trigger <@user>"]
handler.tags = ["sticker"]
handler.command = ["trigger", "triggered"] 

export default handler
