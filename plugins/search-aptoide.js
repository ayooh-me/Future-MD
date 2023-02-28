import axios from "axios"

let handler = async (m, { conn, text, command, usedPrefix }) => {
	if (!text) throw "Input Query"
	const aptoide = await axios.get("http://ws75.aptoide.com/api/7/apps/search?query=" + encodeURIComponent(text) + "&trusted=true")
    if (aptoide.data.datalist.total == 0) throw `Query "${text}" not found :/`
    let dapet = aptoide.data.datalist.list
    let listSections = []
    Object.values(dapet).map((v, index) => {
    let cap = `ID ${v.id}
package ${v.package}
vername ${v.file.vername}
`
        listSections.push([index + " " + cmenub + " " + v.name, [
            ["Get This App", usedPrefix + "get " + v.file.path, cap]
        ]])
    })
    return conn.sendList(m.chat, htki + " 📺 Aptoide Search 🔎 " + htka, `⚡ Silakan pilih Aptoide Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, aptoide.data.info.time.human, "☂️ RESULT ☂️", listSections, m)
}
handler.help = ["aptoide"]
handler.tags = ["tools"]
handler.command = /^app?toide$/i

export default handler
