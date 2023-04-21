import puppeteer from "puppeteer"

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
handler.help = ["chatgpt"]
handler.tags = ["internet"]
handler.command = /^chatgpt$/i

export default handler

/* New Line */
async function ChatGpt(input) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://chatgpt.botwa.me/');

  // Masukkan teks ke dalam tag div dengan class input
  await page.type('div.input', input);

  // Masukkan teks ke dalam tag input dengan class user-input
  await page.type('input.user-input', input);

  // Klik tombol dengan class button-submit
  await page.click('button.button-submit');

  // Tunggu sampai pesan muncul di dalam class message animated fadeInLeftBig, kecuali yang sebelumnya
  await page.waitForSelector('.message.animated.fadeInLeftBig:not(:first-child)');

  // Ambil teks dari pesan yang muncul
  const message = await page.$eval('.message.animated.fadeInLeftBig:not(:first-child)', el => el.textContent);
  // Cetak output pesan yang muncul
  return message;
  await browser.close();
}
