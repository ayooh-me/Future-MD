
import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async (m, { conn, args, text}) => {
await m.reply(wait)
		if (!text.includes("https://westmanga.info/manga/")) return m.reply("input link dari https://westmanga.info/manga?")
	let res = await SearchWest(text)
	let list = res.map((item, index) => `*${htki} 📺 West Search 🔎 ${htka}*

*Title:* ${item.titles}
*Url:* ${item.value}
`).join("\n")
    await m.reply(list)
}
handler.help = ["westsearch2 <query>"]
handler.tags = ["nsfw"]
handler.command = /^(westsearch2)$/i
export default handler

async function SearchWest(url) {
// Array JSON untuk menyimpan hasil ekstraksi
const result = []

// Fetch halaman web
 return await fetch(url)
  .then(response => response.text())
  .then(data => {
    // Load HTML dengan Cheerio
    const $ = cheerio.load(data)

    // Cari semua elemen span dengan class "dlx r"
    $("div.eph-num").each((index, element) => {
      // Ambil link dari a href pada elemen span saat ini
      const cap = $(element).find("span").text()
      const link = $(element).find("a").attr("href")
	
      // Tambahkan data ke dalam array JSON
      result.push({
        titles: cap,
        value: link
      })
    })

    // Tampilkan hasil
    return result
  })
  }