import {
    lyrics
} from "@bochilteam/scraper"
import Genius from "genius-lyrics"
import axios from "axios"
import cheerio from "cheerio"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Masukkan judul musik!\n*Example:* .lirik hello"

    let key = "h6fTn1BYNjYi5VTszhyAFTcM3WWtk2E4hqrXCcutfObE4jVFnJ3LVyewHKIYTli7"
    let Client = new Genius.Client(key)
    let song = await Client.songs.search(text)
    let nothing = "Tidak diketahui!"
    try {
    let bocil = await lyrics(text)
            let bocap = `*乂 Judul 乂*
${bocil.title ? bocil.title : nothing}

*乂 Lirik 乂*
${bocil.lyrics ? bocil.lyrics : nothing}

*乂 Penyanyi 乂*
${bocil.author ? bocil.author : nothing}

*乂 Url 乂*
${bocil.link ? bocil.link : nothing}

_By BochilTeam_
`
            await m.reply(bocap)
        
    } catch (e) {
        try {
            const {
            data
        } = await axios.get(
            "https://www.lyricsfreak.com/search.php?a=search&q=" + text
        );
        let $ = cheerio.load(data);
        let h1 = $(".song");
        const hh = h1.attr("href");
        const huu = await axios.get("https://www.lyricsfreak.com" + hh);
        let s = cheerio.load(huu.data);
        let h2 = s(".lyrictxt").text();
        let frank = `*乂 Lirik 乂*\n${h2}\n\n_By lyricsfreak_`
        await m.reply(frank);

        } catch (e) {
            try {

                let jenius = await song[0].lyrics()
                let albert = `*乂 Judul 乂*
${jenius.title ? jenius.title : nothing}

*乂 Lirik 乂*
${jenius.lyrics ? jenius.lyrics : nothing}

*乂 Penyanyi 乂*
${jenius.author ? jenius.author : nothing}

*乂 Url 乂*
${jenius.link ? jenius.link : nothing}

_By Genius_
`
                await m.reply(albert)

            } catch (e) {
                throw eror
            }
        }
    }

}
handler.help = ["lirik"].map(v => v + " <judul>")
handler.tags = ["internet"]
handler.command = /^l(irik(musik)?|yrics?)$/i

export default handler