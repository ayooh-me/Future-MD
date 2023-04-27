
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, args, __dirname }) => {
let cap = "Input link untuk di download zip?\nKetik *.westconvert* untuk mengkonversi file nya\ndan *.westpdf* untuk mengambil hasil konversi"
		if (!args[0]) return m.reply(cap)
		await m.reply(cap)
	await downloadImages(args[0])
}
handler.help = ["westdown <link>"]
handler.tags = ["nsfw"]
handler.command = /^(westdown)$/i
export default handler

async function downloadImages(input) {
  try {
    const Blobs = await fetch(input)
      .then((res) => res.blob());
    const arrayBuffer = await Blobs.arrayBuffer();
    const zipBuffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(path.join('./images', 'res.zip'), zipBuffer);
    console.log('Download complete');
  } catch (err) {
    console.error('Download failed:', err);
  }
}