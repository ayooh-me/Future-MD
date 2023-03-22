import fetch from "node-fetch"
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
m.reply(wait)
try {
    if (isNumber(args[0]) && isNumber(args[1])) {
    let res = "https://lahelu.com/api/post/get-category-posts?category=" + args[0] + "&page=" + args[1]
    let json = await(await fetch(res)).json()
    m.reply(wait)
    
  let listSections = []
	Object.values(json.postInfos).map((v, index) => {
	listSections.push(["Model [ " + ++index + " ]", [
          [v.title, usedPrefix + command + " https://cache.lahelu.com/" + v.media, "➥"]
        ]])
	})
	return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
			} else if (!args[0] && !args[1]) {
			m.reply("Input Query\nEx. .lahelu 2 3\n(command id page)")
			} else if (!isNumber(args[0])) {
			await conn.sendButton(m.chat, "- L A H E L U -", author, args[0], [
				[emojis + " To Sticker", usedPrefix + "fetchsticker " + args[0] + " wib"]
			], m)
			}
			} catch (e) {
			throw eror
			}
}
handler.help = ["lahelu"]
handler.tags = ["internet"]
handler.command = /^(lahelu)$/i
export default handler

function isNumber(x) {
    return !isNaN(x)
}