/* Recode By Wudysoft */
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import {
    webp2png
} from '../lib/webp2mp4.js'
import {
    Sticker,
    StickerTypes
} from 'wa-sticker-formatter'
import {
    Configuration,
    OpenAIApi
} from "openai"
import fetch from 'node-fetch';
import request from "request"
import fs from "fs"

/* Key list
e47e4a2d-b384-4420-ad3b-08e599e5607f
cd3363ea-da8c-452a-b6f1-8ad1c40c302d
b3f1d05a-c175-4ad1-ac71-d0be778bb9a7
quickstart-QUdJIGlzIGNvbWluZy4uLi4K (not paid user)
*/

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let query = "input text\nEx. .deepai naruto\n<command> <tex>"
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]

    let effecttxt = [
        "3d-character-generator",
        "3d-objects-generator",
        "abstract-painting-generator",
        "ai-word-definition",
        "anime-portrait-generator",
        "anime-world-generator",
        "contemporary-architecture-generator",
        "cute-creature-generator",
        "cyberpunk-generator",
        "fantasy-character-generator",
        "fantasy-world-generator",
        "future-architecture-generator",
        "hologram-3d-generator",
        "impressionism-painting-generator",
        "logo-generator",
        "old-style-generator",
        "origami-3d-generator",
        "pixel-art-generator",
        "pop-art-generator",
        "renaissance-painting-generator",
        "sentiment-analysis",
        "stable-diffusion",
        "steampunk-generator",
        "street-art-generator",
        "summarization",
        "surreal-graphics-generator",
        "surreal-portrait-generator",
        "text-generator",
        "text-tagging",
        "text2img",
        "watercolor-architecture-generator",
        "watercolor-painting-generator"
    ]

    let effectimg = [
        "CNNMRF",
        "colorizer",
        "content-moderation",
        "deepdream",
        "fast-style-transfer",
        "image-similarity",
        "neural-style",
        "nsfw-detector",
        "toonify",
        "torch-srgan",
        "waifu2x"
    ]

    const configuration = new Configuration({
        apiKey: openaikey,
    });
    const openai = new OpenAIApi(configuration);

    if (command == "deepai") {
        m.reply(wait)
        let listSections = []
        Object.keys(effecttxt).map((v, index) => {
            listSections.push(["Num. " + ++index, [
                [effecttxt[v].toUpperCase(), usedPrefix + "deepaigettext " + effecttxt[v] + "|" + encodeURIComponent(text), ""]
            ]])
        })
        return conn.sendList(m.chat, htki + " 🗒️ List Effect " + htka, "⚡ Silakan pilih efek yang anda mau.", author, "[ Effect ]", listSections, m)
    }
    if (command == "deepai2") {
        m.reply(wait)
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) throw "balas gambar"
        let img = await q.download()
        let stek = new Sticker(img, {
            pack: packname,
            author: author,
            type: StickerTypes.FULL
        })
        let buffer = await stek.toBuffer()
        let out
        try {
            if (/webp/g.test(mime)) out = await webp2png(img)
            else if (/image/g.test(mime)) out = await uploadImage(img)
            else if (/video/g.test(mime)) out = await uploadFile(img)
            else if (/viewOnce/g.test(mime)) out = await uploadFile(img)
            if (typeof out !== 'string') out = await uploadImage(img)
            else if (/gif/g.test(mime)) out = stek
        } catch (e) {
            console.error(e)
        }
        let listSections = []
        Object.keys(effectimg).map((v, index) => {
            listSections.push(["Num. " + ++index, [
                [effectimg[v].toUpperCase(), usedPrefix + "deepaigetimg " + effectimg[v] + "|" + out, ""]
            ]])
        })
        return conn.sendList(m.chat, htki + " 🗒️ List Effect " + htka, "⚡ Silakan pilih efek yang anda mau.", author, "[ Effect ]", listSections, m)
    }
    if (command == "deepaigetimg") {
        m.reply(wait)
        let res = await DeepImg(one, two)
        await conn.sendFile(m.chat, res.output_url, 'Result.jpg', "*[ DEEPAI ]*\n*Result:* " + await clean(JSON.stringify(res)), m)
    }

    if (command == "deepaigettext") {
        m.reply(wait)
        let res = await DeepText(one, two)
        await conn.sendFile(m.chat, res.output_url, 'Result.jpg', "*[ DEEPAI ]*\n*Result:* " + await clean(JSON.stringify(res)), m)
    }

    if (command == "aidalle") {
        m.reply(wait)
        try {
            let res = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${encodeURIComponent(text)}`)
            let anu = Buffer.from(await res.arrayBuffer())
            if (Buffer.byteLength(anu) < 22000) throw Error(`[!] Error : Buffer not found.`)
            await conn.sendMessage(m.chat, {
                image: anu,
                caption: "*[ Lolhuman AI Dall E ]*\n*Text:*" + text
            }, {
                quoted: m
            })
        } catch (e) {
            let url = "https://dalle-mini.amasad.repl.co/gen/" + encodeURIComponent(text)
            await conn.sendButton(m.chat, author, "*[ Dall E Mini ]*\n*Text:*" + text, url, [
                [emojis + " M E N U", ".menulist"]
            ], m)
        }
    }

    if (command == "ai") {
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: text,
                temperature: 0.3,
                max_tokens: 3000,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            });
            m.reply('*Result:*' + response.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
        } catch (e) {
            try {
                let ainya = await (await fetch('https://api.zahwazein.xyz/entertainment/openai?query=' + text + '&apikey=LuOlangNgentot')).json()
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

    if (command == "aimodel") {
        if (!text) throw query
        let lm = await openai.listModels();
        let listSections = []
        Object.values(lm.data.data).map((v, index) => {
            listSections.push(["Model [ " + ++index + ' ]', [
                [v.id.toUpperCase(), usedPrefix + command + "get " + v.id + "|" + text, "➥"]
            ]])
        })
        return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
    }

    if (command == "aimodelget") {
        try {
            let res = await openai.createCompletion({
                model: one,
                prompt: two,
                temperature: 0.3,
                max_tokens: 3000,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0
            });
            m.reply('*Result:*' + res.data.choices[0].text + '\n\n' + '*Made by:* ' + 'OpenAi')
        } catch (e) {
            try {
                let ainya = await (await fetch('https://api.zahwazein.xyz/entertainment/openai?query=' + text + '&apikey=LuOlangNgentot')).json()
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
handler.help = [
    "ai",
    "aidalle",
    "aimodel",
    "deepai",
    "deepai2"
]
handler.tags = ["info"]
handler.command = /^(deepai(get(text|img)|2)?|ai(modelget|((model)?|dalle)))$/i
export default handler

let userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0"
let DeepKey = "e47e4a2d-b384-4420-ad3b-08e599e5607f"

async function DeepText(efek, teks) {
    return new Promise(async (resolve, reject) => {
        var a = await request.post({
                headers: {
                    'Api-Key': DeepKey,
                    'User-Agent': userAgent
                },
                url: 'https://api.deepai.org/api/' + efek,
            },
            function(err, response, body) {
                if (err) {
                    return resolve(err)
                }
                var response = JSON.parse(body)
                resolve(response)
            })
        var form = a.form()
        form.append("text", teks)
    })
}

async function DeepImg(efek, img) {
    return new Promise(async (resolve, reject) => {
        var a = await request.post({
                headers: {
                    'Api-Key': DeepKey,
                    'User-Agent': userAgent
                },
                url: 'https://api.deepai.org/api/' + efek,
            },
            function(err, response, body) {
                if (err) {
                    return resolve(err)
                }
                var response = JSON.parse(body)
                resolve(response)
            })
        var form = a.form()
        form.append("image", img)
    })
}

function clean(string) {
    return string.replace(/{/g, '').replace(/}/g, '').replace(/"/g, '').replace(/,/g, '\n')
}