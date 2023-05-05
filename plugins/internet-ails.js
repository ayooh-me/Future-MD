import fetch from "node-fetch"
import {
    createHash
} from "crypto"

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
    } else throw "Input Teks"
    try {
        await m.reply(wait)
        let res = await ChatGpt(text)
        await m.reply(res)
    } catch (e) {
        throw eror
    }
}
handler.help = ["ails"]
handler.tags = ["internet"]
handler.command = /^ails$/i

export default handler

/* New Line */
const API = "https://chat.amiruldev.my.id/api/generate";
const KEY = "Na3dx_(?qx32l}ep?#:8:mo44;7W\\2W.:nxm";

function message(msg) {
    const t = Date.now();
    const signVal = createHash("sha256").update(`${t}:${msg}:${KEY}:${msg.length}`).digest("hex");

    return {
        messages: [{
            role: "user",
            content: msg.replace(/[\u007f-\uffff]/g, (chr) => {
                return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4);
            }),
        }],
        time: t,
        pass: null,
        sign: signVal,
    };
}

async function ChatGpt(input) {
    const messageData = message(input);
    const options = {
        headers: {
            referer: API,
        },
        method: "POST",
        body: JSON.stringify(messageData),
        timeout: 10000,
    };
    const response = await fetch(API, options);
    const data = await response.text();
    return data;
}