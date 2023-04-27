
import { convertZipToPdf } from '../lib/pdfConverter.js';

let handler = async (m, { conn, args }) => {
let cap = "\nKetik *.westpdf* untuk mengambil hasil konversi"
await m.reply(wait + cap)
const zipFile = "./images/res.zip"
  try {
    const pdfName = "./images/res.pdf"
    await convertZipToPdf(zipFile, pdfName);
    return 0;
  } catch (e) {
    console.error('The target may not be a zip file:', zipFile);
    return 2;
  }

}
handler.help = ["westconvert <link>"]
handler.tags = ["nsfw"]
handler.command = /^(westconvert)$/i
export default handler
