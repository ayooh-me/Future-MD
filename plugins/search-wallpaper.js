import wibusoft from 'wibusoft'
let handler = async (m, { conn, text }) => {

  if (!text) throw "Input Query"
  let json = await wibusoft.anime.animeWallpaper(text)
  let img = json[Math.floor(Math.random() * json.length)]
  await conn.sendFile(m.chat, img, text, img, m)

}
handler.help = ["wallpaper"]
handler.tags = ["tools"]
handler.command = /^wall(paper)?q?$/i
handler.limit = true

export default handler