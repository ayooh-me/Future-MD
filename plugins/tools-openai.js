/* Recode By Wudysoft */
import {
    Configuration,
    OpenAIApi
} from "openai"
import cp, {
    exec as _exec
} from "child_process"
import {
    promisify
} from "util"
let exec = promisify(_exec).bind(cp)
import fs from "fs"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let query = "input text\nEx. .openai naruto\n<command> <tex>\n"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    const configuration = new Configuration({
        apiKey: openaikey,
    });
    const openai = new OpenAIApi(configuration);

    if (command == "openai") {
        let listSections = []
        listSections.push(["Type [ OpenAi ]", [
            ["💬 T E X T", usedPrefix + command + "text " + text],
            ["📷 I M A G E", usedPrefix + command + "img " + text]
        ]])
        return conn.sendList(m.chat, htki + " 📺 OpenAi 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ T Y P E ☂️", listSections, m)
    }

    if (command == "openaiimg") {
        try {
            const resa = await openai.createImage({
                prompt: text,
                n: 1,
                size: "1024x1024",
            });
            await conn.sendButton(m.chat, "*[ Open AI Dall E ]*\n" + "*ID:*\n" + resa.data.created, "[ Input ]\n" + text, resa.data.data[0].url, [
                [emojis + " M E N U", ".menulist"]
            ], m)
        } catch (e) {
            try {
                let res = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${encodeURIComponent(text)}`)
                let anu = Buffer.from(await res.arrayBuffer())
                if (Buffer.byteLength(anu) < 22000) throw Error(`[!] Error : Buffer not found.`)
                await conn.sendMessage(m.chat, {
                    image: anu,
                    caption: "*[ Lolhuman AI Dall E ]*\nText:" + text
                }, {
                    quoted: m
                })
            } catch (e) {
                let url = "https://dalle-mini.amasad.repl.co/gen/" + text
                await conn.sendButton(m.chat, author, "*[ Dall E Mini ]*\nText:" + text, url, [
                    [emojis + " M E N U", ".menulist"]
                ], m)
            }
        }
    }
    if (command == "openaitext") {
        try {
            const resp = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: text,
                temperature: 0.3,
                max_tokens: 3000,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            });
            m.reply('*Result:*' + resp.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
        } catch (e) {
            try {
                let ainya = await (await fetch('https://api.zahwazein.xyz/entertainment/openai?query=' + text + '&apikey=85345ee3d9de')).json()
                if (!ainya) throw eror
                m.reply('*Result:*\n' + ainya.result.message + '\n\n' + '*Made by:* api.zahwazein.xyz')
            } catch (e) {
                try {
                    let res = await (await fetch('https://mfarels.my.id/api/openai?text=' + text)).json()
                    if (!res) throw eror
                    m.reply('*Result:*\n' + res.result + '\n\n' + '*Made by:* mfarels.my.id')
                } catch (e) {
                    let ai = await (await fetch(global.API('lolhuman', '/api/openai', {
                        text: text
                    }, 'apikey'))).json()
                    if (!ai) throw eror
                    m.reply('*Result:*\n' + ai.result + '\n\n' + '*Made by:* ' + global.API('lolhuman'))
                }
            }
        }
    }
}
handler.command = ["openai", "openaitext", "openaiimg"]
handler.tags = ["tools"]

export default handler