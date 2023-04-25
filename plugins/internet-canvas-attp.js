import { createCanvas, registerFont } from 'canvas';
import path from 'path';

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
            let res = await ATTP()
            await m.reply(res)
    } catch (e) {
        throw eror
    }
}
handler.help = ["cattp"]
handler.tags = ["internet"]
handler.command = /^cattp$/i

export default handler


async function ATTP(input) {
// Load font
registerFont(path.join("./src/font", '', 'futur.ttf'), { family: 'futur' });

// Setup canvas
const canvas = createCanvas(600, 200);
const ctx = canvas.getContext('2d');

// Set initial text and color
let hue = 0;

// Animate text color
setInterval(() => {
  hue = (hue + 1) % 360;
}, 50);

// Draw text with gradient color
setInterval(() => {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set gradient color
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, `hsl(${hue}, 100%, 50%)`);
  gradient.addColorStop(0.5, `hsl(${(hue + 180) % 360}, 100%, 50%)`);
  gradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);
  ctx.fillStyle = gradient;

  // Set font
  ctx.font = 'bold 80px Roboto';

  // Draw text
  ctx.fillText(input, 50, 130);

  // Update text
  input = input.slice(-1) + input.slice(0, -1);
}, 100);
// Get output buffer
  const buffer = canvas.toBuffer('image/png');

  // Use the buffer as needed
  return buffer;
}