import fetch from 'node-fetch'
import instagramGetUrl from 'instagram-url-direct'
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let results = (await instagramGetUrl(args[0])).url_list[0]
    if (!results) throw eror
    let short = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
    let cap = `🔗 *Url:* ${short}`.trim()
    conn.sendFile(m.chat, results, 'instagram.mp4', cap, m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler