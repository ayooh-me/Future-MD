import Canvas from "canvas"

async function Welcome(pp, bg, nama, total) {
var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500);
welcomeCanvas.context = welcomeCanvas.create.getContext("2d");
welcomeCanvas.context.font = "72px sans-serif";
welcomeCanvas.context.fillStyle = "#ffffff";
await Canvas.loadImage(bg).then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500);
    welcomeCanvas.context.fillText("Welcome", 360, 360);
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke();
    welcomeCanvas.context.fill();
});

let canvas = welcomeCanvas;
(canvas.context.font = "42px sans-serif"),
(canvas.context.textAlign = "center");
canvas.context.fillText(nama, 512, 410);
canvas.context.font = "32px sans-serif";
canvas.context.fillText(
    "Kamu adalah member ke " + total + " Di Grup ini",
    512,
    455
);
canvas.context.beginPath();
canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true);
canvas.context.closePath();
canvas.context.clip();
await Canvas.loadImage(
    pp
).then((img) => {
    canvas.context.drawImage(img, 393, 47, 238, 238);
});
let buff = await canvas.create.toBuffer()
return buff
}

async function Leave(pp, bg, nama) {
var leaveCanvas = {};
leaveCanvas.create = Canvas.createCanvas(1024, 500);
leaveCanvas.context = leaveCanvas.create.getContext("2d");
leaveCanvas.context.font = "72px sans-serif";
leaveCanvas.context.fillStyle = "#ffffff";
await Canvas.loadImage(bg).then(async (img) => {
    leaveCanvas.context.drawImage(img, 0, 0, 1024, 500);
    leaveCanvas.context.fillText("Leave", 360, 360);
    leaveCanvas.context.beginPath();
    leaveCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    leaveCanvas.context.stroke();
    leaveCanvas.context.fill();
});

let canvas = leaveCanvas;
(canvas.context.font = "42px sans-serif"),
(canvas.context.textAlign = "center");
canvas.context.fillText(nama, 512, 410);
canvas.context.font = "32px sans-serif";
canvas.context.fillText(
    "Semoga sehat selalu ya kak!",
    512,
    455
);
canvas.context.beginPath();
canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true);
canvas.context.closePath();
canvas.context.clip();
await Canvas.loadImage(
    pp
).then((img) => {
    canvas.context.drawImage(img, 393, 47, 238, 238);
});
let buff = await canvas.create.toBuffer()
return buff
}

export {
Welcome,
Leave
}

import {
    fileURLToPath,
    URL
} from 'url'
import chalk from 'chalk'
import fs from 'fs'
const __filename = new URL('', import.meta.url).pathname
const __dirname = new URL('.', import.meta.url).pathname
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")), chalk.white(`${__filename}`))
    import(`${file}?update=${Date.now()}`)
})