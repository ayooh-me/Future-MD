/* Recode By Wudysoft */
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let query = usedPrefix + command + " Wibu"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    let urut = text.split`|`

    try {
        let res = await (await fetch('https://mfarels.my.id/api/openai?text=' + text)).json()
        if (!res) throw eror
        m.reply('*Result:*\n' + res.result + '\n\n' + '*Made by:* mfarels.my.id')
    } catch (e) {
        try {
            let ainya = await (await fetch('https://api.zahwazein.xyz/entertainment/openai?query=' + text + '&apikey=LuOlangNgentot')).json()
            if (!ainya) throw eror
            m.reply('*Result:*\n' + ainya.result.message + '\n\n' + '*Made by:* api.zahwazein.xyz')

        } catch (e) {
            let ai = await (await fetch(global.API('lolhuman', '/api/openai', {
                text: text
            }, 'apikey'))).json()
            if (!ai) throw eror
            m.reply('*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + global.API('lolhuman'))
        }
    }

}
handler.help = ["tai"]
handler.tags = ["info"]
handler.command = ["tai"]
export default handler