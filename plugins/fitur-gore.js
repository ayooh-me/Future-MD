import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let json = await fetch(global.API('xcdr', '/api/random/gore', {}, 'apikey'))
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 gore 」━┉⎔*
🤠 *Query* : ${x.title}
 ${x.authorname}
 ${x.published}
 ${x.author_url}
 ${x.quality}
 ${x.duration}
 ${x.url}
`
        await conn.sendButton(m.chat, caption, wm, x.thumbnail, [['gore', '/gore']], m)
}
handler.help = ['gore']
handler.tags = ['fun']
handler.command = /^(gore)$/i

export default handler