import puppeteer from "puppeteer"
import {
    JSDOM
} from "jsdom"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text) throw "input text"
    try {
        await m.reply(wait)
        let res = await DeviantGallery(text)
        let rdm = res[Math.floor(Math.random() * res.length)];
        await conn.sendMessage(m.chat, {
            image: {
                url: rdm.thumb
            },
            caption: rdm.name
        }, {
            quoted: m
        })

    } catch (e) {
        throw eror
    }
}
handler.help = ["deviantart"]
handler.tags = ["internet"]
handler.command = /^deviantart$/i

export default handler

/* New Line */
async function DeviantGallery(input) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var urlToFetch = `https://backend.deviantart.com/rss.xml?q=gallery:${input}&type=deviation`;
    await page.goto(urlToFetch);
    const html = await page.content();
    const dom = new JSDOM(html);
    let window = dom.window;
    let xhttp = new window.XMLHttpRequest();
    xhttp.open("GET", urlToFetch, false);
    xhttp.send();
    var resultDoc = xhttp.responseXML;

    if (resultDoc.querySelectorAll("item").length == 0) location.replace("error.html?msg=" + encodeURIComponent("No data for username `" + galleryID + "`"));

    var images = [];
    for (var item of resultDoc.querySelectorAll("item")) {
        images.push({
            thumb: item.getElementsByTagName("media:content")[0].getAttribute("url"),
            name: item.querySelector("title").innerHTML,
            uri: item.querySelector("link").innerHTML
        });
    }
    return images
}