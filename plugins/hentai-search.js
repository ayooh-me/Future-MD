import wibusoft from 'wibusoft'

let handler = async (m, { conn, command, text }) => {
  
  if (command == "hentairandom") {
  let json = await wibusoft.anime.randomHentai()
  let img = json[Math.floor(Math.random() * json.length)]
  await conn.sendFile(m.chat, img, text, img, m)
  }
  
  if (command == "hentaisd") {
  if (!text) throw "Input Query"
  let json = await wibusoft.anime.getCharacterHentaiByNameAndGetRawURL(text)
  let img = json[Math.floor(Math.random() * json.length)]
  await conn.sendFile(m.chat, img, text, img, m)
  }
  
  if (command == "hentaihd") {
  if (!text) throw "Input Query"
  const json = await wibusoft.anime.getCharacterHentaiByName(text)
  let jangan = json[Math.floor(Math.random() * json.length)]
  let img = await wibusoft.anime.getUrl(jangan)
  await conn.sendFile(m.chat, img, text, img, m)
  }
  
  if (command == "hentaihot") {
  const json = await wibusoft.anime.getHotPic().then(console.log).catch(console.error)
  let jangan = json[Math.floor(Math.random() * json.length)]
  let img = await wibusoft.anime.getUrl(jangan)
  await conn.sendFile(m.chat, img, text, img, m)
  }


}
handler.help = ["hentaisd", "hentaihd", "hentaihot", "hentairandom"]
handler.tags = ["search"]
handler.command = /^hentai(random|h(ot|d)|sd)$/i
handler.limit = true

export default handler