import fetch from "node-fetch"
let handler = async (m, {
    conn,
    text
}) => {
    try {
    await m.reply(wait)
        let a = await (await fetch("https://lucifer.shadowthings.xyz/api/quotes")).json()
        let b = a[0].quote
        let c = a[0].author
        await m.reply("*• QUOTE*\n" + b + "\n\n*• AUTHOR*\n" + c)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.tags = ["lucifer"]
handler.help = ["quotes"]
handler.command = /^(lucifer)$/i
export default handler