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
            await m.reply(wait)
            let res = await getLink(text)
            let rand = res.getRandom()
            let resu = await getResult(rand)
            let dones = await formatThis(resu.text)
            await m.reply(dones)
    } catch (e) {
        throw eror
    }
}
handler.help = ["halodoc"]
handler.tags = ["internet"]
handler.command = /^halodoc$/i

export default handler

/* New Line */
function formatThis(input) {

// regex to split text into sentences
const sentences = input.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/g);

// maximum number of characters per line
const maxCharsPerLine = 60;

// variable to store formatted text
let formattedText = '';

// loop through each sentence
sentences.forEach(sentence => {
  // split sentence into words
  const words = sentence.split(' ');

  // variable to store current line
  let currentLine = '';

  // loop through each word
  words.forEach(word => {
    // add word to current line
    if (currentLine.length + word.length + 1 <= maxCharsPerLine) {
      currentLine += `${word} `;
    }
    // start new line with word
    else {
      formattedText += `${currentLine.trim()}\n`;
      currentLine = `${word} `;
    }
  });

  // add last line of sentence to formatted text
  formattedText += `${currentLine.trim()}\n`;
});

return formattedText;
}

async function getLink(input) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.halodoc.com/artikel/search/' + input);
  // Extract all links on the page
  const links = await page.$$eval('a', links => links.map(link => link.href));
  // Filter links that start with www.halodoc.com/artikel
  const filteredLinks = links.filter(link => link.startsWith('https://www.halodoc.com/artikel') && link !== 'https://www.halodoc.com/artikel' );
  return filteredLinks;
  await browser.close();
  }
  
  async function getResult(input) {
  return await fetch(input)
  .then(response => response.text())
  .then(html => {
    const $ = cheerio.load(html);
    const body = $('body');
    const removeTags = ['script', 'style'];
    removeTags.forEach(tag => {
      body.find(tag).remove();
    });
    const text = body.text().trim();
    const data = { text };
    return data;
  })
  .catch(error => {
    console.log(error);
  });
  	}
