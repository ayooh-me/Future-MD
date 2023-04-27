
import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async (m, { conn, args, text}) => {
await m.reply(wait)
		if (!text) return m.reply("input link dari westmanga?")
	let res = await SearchWest(text)
	let list = res.map((item, index) => `*${htki} 📺 West Search 🔎 ${htka}*

*Title:* ${item.titles}
*Url:* ${item.value}
`).join("\n")
    await m.reply(list)
}
handler.help = ["westsearch <query>"]
handler.tags = ["nsfw"]
handler.command = /^(westsearch)$/i
export default handler

async function SearchWest(url) {
// Array JSON untuk menyimpan hasil ekstraksi
const result = []

// Fetch halaman web
 return await fetch("https://westmanga.info/?s=" + url)
  .then(response => response.text())
  .then(data => {
    // Load HTML dengan Cheerio
    const $ = cheerio.load(data)

    // Cari semua elemen span dengan class "dlx r"
    $("div.bsx").each((index, element) => {
      // Ambil link dari a href pada elemen span saat ini
      const link = $(element).find("a").attr("href")
      const titles = $(element).find("a").attr("title")
	
      // Tambahkan data ke dalam array JSON
      result.push({
        titles: titles,
        value: link
      })
    })

    // Tampilkan hasil
    return result
  })
  }