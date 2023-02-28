import fetch from "node-fetch"
let handler = async (m, { text, command, args }) => {
  if (!args[0]) throw `Use example:\n*.${command} halo*\n\nAnd Using:\n*.${command} |halo*`
  
  let urut = text.split`|`
  let one = urut[1]
  if (one) {
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=1&msg=" + encodeURIComponent(text))
  let res = await api.json()
  let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + res.cnt)
  let resu = await reis.json()
  m.reply(resu[0][0][0])
  } else {
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=id")
  let res = await api.json()
  m.reply(res.success)
  }
  
}
handler.command = ["simi"]
handler.tags = ["fun"]
handler.help = ["simi"]

export default handler