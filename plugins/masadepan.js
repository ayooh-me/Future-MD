let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)

  await conn.reply(m.chat, `Bentar...`, m)
  let caption = `*BISMILAH DULU BANG*`
  await conn.sendButton(m.chat, caption, wm, imgr + command, [
                ['Aamiin', `${usedPrefix}masadepannya ${text}`]
            ], m, { quoted: fakes })
}

handler.command = handler.help = ['masadepan']
handler.tags = ['fun']

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
