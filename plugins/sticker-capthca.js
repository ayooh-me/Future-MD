import { createCanvas, registerFont } from 'canvas'
import lodash from 'lodash'
const char = String.fromCharCode(...Array(123).keys()).replace(/\W/g,'');
const code = (length) => lodash.sampleSize(char, length).join('');

import fs from "fs"
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
    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]

    var files = fs.readdirSync("./src/font/")

    if (command == "captcha") {
        let listSections = []
        Object.keys(files).map((v, index) => {
            listSections.push(["Model [ " + ++index + " ]", [
                [files[v], usedPrefix + command + "get " + files[v] + "|" + text, "➥"]
            ]])
        })
        return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
    }

    if (command == "captchaget") {
        
        let length = 5;
let hasNotEnded = true;
let basecredits = 200;
let captchacount = 0;

    const canvas = createCanvas(150,50);
    const ctx = canvas.getContext('2d');
    const codetext = code(length);
    registerFont("./src/font/" + one, {
            family: one.toString()
        })
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fillStyle = '#27292b';
    ctx.fill();

    ctx.textAlign = 'center';
    ctx.font = 'bold 20px Captcha';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText(codetext, 75, 35, 140);

    const buff = canvas.toBuffer();
    await conn.sendFile(m.chat, buff, "Captcha", "Captcha", m)
    }
    
    
    if (command == "quiss") {
        let listSections = []
        Object.keys(files).map((v, index) => {
            listSections.push(["Model [ " + ++index + " ]", [
                [files[v], usedPrefix + command + "get " + files[v] + "|" + text, "➥"]
            ]])
        })
        return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
    }

    if (command == "quissget") {
        
        let quote;
  do {
     quote = two
  } while (quote.split(/ +/).length > 30)

  const array = quote.split(/ +/);
  const description = lodash.chunk(array, 6);
  const canvas = createCanvas(300, description.length * 25 + 10);
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(canvas.width, 0);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.fillStyle = '#27292b';
  ctx.fill();

  ctx.textAlign = 'center';
  ctx.font = '20px Handwriting';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';

  description.forEach((item, i) => {
    ctx.fillText(item.join(' '), canvas.width / 2, 25 * (i + 1), canvas.width - 10);
  });

  const attachment = canvas.toBuffer();
    await conn.sendFile(m.chat, attachment, "Quizz", "Quizz", m)
    }
    
}
handler.help = ["captcha", "quiss"]
handler.command = ["captcha", "captchaget", "quiss", "quissget"]

export default handler