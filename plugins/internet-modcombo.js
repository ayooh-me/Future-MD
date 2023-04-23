import puppeteer from "puppeteer"
import cheerio from "cheerio"
import fetch from "node-fetch"

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
        await m.reply("_Mencari aplikasi..._")
        let res = await Search(text)
        let resu = await Down(res)
        let dones = await Result(resu)
        await m.reply(wait)
        let urls = "https://dlnew.gamestoremobi.com/" + dones + "-Mod-ModCombo.Com.apk"
        await conn.sendFile(m.chat, urls, dones, dones, m)

    } catch (e) {
        throw eror
    }
}
handler.help = ["modcombo"]
handler.tags = ["internet"]
handler.command = /^modcombo$/i

export default handler

/* New Line */
async function Search(input) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://modcombo.com/id/?s=' + input);

    const links = await page.$$eval('a.blog.search', elements =>
        elements.map(element => ({
            href: element.href,
            text: element.textContent,
        }))
    );

    return links[0].href;

    await browser.close();
}

async function Down(input) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(input);

    const links = await page.$$eval('a.btn.btn-red.btn-icon.btn-download.br-50', elements =>
        elements.map(element => ({
            href: element.href,
            text: element.textContent,
        }))
    );

    return links[0].href;

    await browser.close();
}

async function Result(input) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(input);
    const titleElement = await page.$('.bc-title');
    const titleText = await titleElement.evaluate(el => el.textContent.trim());
    const formattedTitle = titleText.split(' ').slice(0, -2).join('-');
    return formattedTitle;
    await browser.close();
}