import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json')
  let json = await res.json()
  
  conn.sendFile(m.chat, json.getRandom(), '', '', m, true, adReplyS)
}
handler.help = ['citacita']
handler.tags = ['random']
handler.command = /^(citacita)$/i

export default handler
