/* Recode By Wudysoft */
import Canvas from "canvas"
import canvacord from "canvacord"
import sharp from "sharp"
import axios from "axios"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let query = usedPrefix + command + " " + logo
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query
    
    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]
    let four = urut[3]
    let five = urut[4]
    let six = urut[5]
    let seven = urut[6]
    
    try {
if (command == "canvasman1") {
await conn.sendButton(m.chat, "Result", wm, await man1(one), [["Tester", "ok"]], m)
}
if (command == "canvasman2") {
await conn.sendButton(m.chat, "Result", wm, await man2(one), [["Tester", "ok"]], m)
}
if (command == "canvasman3") {
await conn.sendButton(m.chat, "Result", wm, await man3(one), [["Tester", "ok"]], m)
}
if (command == "canvasman3") {
await conn.sendButton(m.chat, "Result", wm, await bolsonero(one), [["Tester", "ok"]], m)
}
if (command == "canvasbriggs") {
await conn.sendButton(m.chat, "Result", wm, await briggs(one), [["Tester", "ok"]], m)
}
if (command == "canvasdrake") {
await conn.sendButton(m.chat, "Result", wm, await drake(one, two), [["Tester", "ok"]], m)
}
if (command == "canvasdo1") {
await conn.sendButton(m.chat, "Result", wm, await ednaldoBandeira(one), [["Tester", "ok"]], m)
}
if (command == "canvasdo2") {
await conn.sendButton(m.chat, "Result", wm, await ednaldoTV(one), [["Tester", "ok"]], m)
}
if (command == "canvasimgedit") {
await conn.sendButton(m.chat, "Result", wm, await imgEditor(one, two, three, four), [["Tester", "ok"]], m)
}
if (command == "canvasinvert") {
await conn.sendButton(m.chat, "Result", wm, await invert(one), [["Tester", "ok"]], m)
}
if (command == "canvasjooj") {
await conn.sendButton(m.chat, "Result", wm, await jooj(one), [["Tester", "ok"]], m)
}
if (command == "canvasmark") {
await conn.sendButton(m.chat, "Result", wm, await markSuckerberg(one), [["Tester", "ok"]], m)
}
if (command == "canvasmedal") {
await conn.sendButton(m.chat, "Result", wm, await medal(one, two), [["Tester", "ok"]], m)
}
if (command == "canvasmario") {
await conn.sendButton(m.chat, "Result", wm, await morrepraga(one), [["Tester", "ok"]], m)
}
if (command == "canvasojjo") {
await conn.sendButton(m.chat, "Result", wm, await ojjo(one), [["Tester", "ok"]], m)
}
if (command == "canvaspaper") {
await conn.sendButton(m.chat, "Result", wm, await paper(one), [["Tester", "ok"]], m)
}
if (command == "canvasfrog") {
await conn.sendButton(m.chat, "Result", wm, await pepe(one), [["Tester", "ok"]], m)
}
if (command == "canvasromero") {
await conn.sendButton(m.chat, "Result", wm, await romero(one), [["Tester", "ok"]], m)
}
if (command == "canvastv") {
await conn.sendButton(m.chat, "Result", wm, await shotTV(one), [["Tester", "ok"]], m)
}
if (command == "canvassponge") {
await conn.sendButton(m.chat, "Result", wm, await sponge(one), [["Tester", "ok"]], m)
}
if (command == "canvasttp") {
await conn.sendButton(m.chat, "Result", wm, await ttp(one, two, three), [["Tester", "ok"]], m)
}
if (command == "canvaswelcome") {
await conn.sendButton(m.chat, "Result", wm, await welcome(one, two, three, four), [["Tester", "ok"]], m)
}
if (command == "canvaswolverine") {
await conn.sendButton(m.chat, "Result", wm, await wolverine(one), [["Tester", "ok"]], m)
}
} catch (e) {
throw eror
}

}
handler.tags = ["maker"]
handler.command = handler.help = ["canvasman1",
"canvasman2",
"canvasman3",
"canvasman3",
"canvasbriggs",
"canvasdrake",
"canvasdo1",
"canvasdo2",
"canvasimgedit",
"canvasinvert",
"canvasjooj",
"canvasmark",
"canvasmedal",
"canvasmario",
"canvasojjo",
"canvaspaper",
"canvasfrog",
"canvasromero",
"canvastv",
"canvassponge",
"canvasttp",
"canvaswelcome",
"canvaswolverine"]
export default handler

// Agradecimento / Créditos aos DEV"s da Loritta (Discord) pelas imagens usadas em alguns comandos abaixo, das quais estão salvas no repositório deles -> https://github.com/LorittaBot/GabrielaImageGenAssets

// Por Pedro Batistop
function scaleToFill(img, areaWidth, areaHeight, topLeftWidth, topLeftHeight, ctx) {
	var scale = Math.max(areaWidth / img.width, areaHeight / img.height)
	var x = (areaWidth / 2) - (img.width / 2) * scale
	var y = (areaHeight / 2) - (img.height / 2) * scale
	ctx.drawImage(img, x + topLeftWidth, y + topLeftHeight, img.width * scale, img.height * scale)
}

// Por Pedro Batistop
function scaleToFit(img, areaWidth, areaHeight, topLeftWidth, topLeftHeight, ctx) {
	var scale = Math.min(areaWidth / img.width, areaHeight / img.height)
	var x = (areaWidth / 2) - (img.width / 2) * scale
	var y = (areaHeight / 2) - (img.height / 2) * scale
	ctx.drawImage(img, x + topLeftWidth, y + topLeftHeight, img.width * scale, img.height * scale)
}

// Funções de desenho, essa por exemplo, cria memes do bolsonaro
async function bolsonero(canvaimage, canvaimage2) {
	const img = await Canvas.loadImage(canvaimage2)
	const img2 = await Canvas.loadImage(canvaimage)
	const bg = await Canvas.loadImage("https://i.ibb.co/RyhGXt6/bolsodrake.png")
	const cc = Canvas.createCanvas(bg.width, bg.height)
	const ctx = cc.getContext("2d")
	ctx.drawImage(bg, 0, 0, cc.width, cc.height)
	ctx.drawImage(img, cc.width / 2, 0, cc.width / 2, cc.width / 2)
	ctx.drawImage(img2, cc.width / 2, cc.width / 2, cc.width / 2, cc.width / 2)
	return cc.toBuffer()
}

async function morrepraga(canvaimage) {
	const img = await Canvas.loadImage(canvaimage)
	const bg = await Canvas.loadImage("https://i.ibb.co/zRVt8hm/morrepraga.jpg")
	const cc = Canvas.createCanvas(bg.width, bg.height)
	const ctx = cc.getContext("2d")
	ctx.drawImage(bg, 0, 0, cc.width, cc.height)
	ctx.drawImage(img, 170, 220, 330, 330)
	return cc.toBuffer()
}

async function invert(canvaimage) {
	const img = await Canvas.loadImage(canvaimage)
	const cc = Canvas.createCanvas(img.width, img.height)
	const ctx = cc.getContext("2d")
	ctx.translate(cc.width, 0)
	ctx.scale(-1, 1)
	ctx.drawImage(img, 0, 0, cc.width, cc.height)
	return cc.toBuffer()
}

async function drake(canvaimage, canvaimage2) {
	const img = await Canvas.loadImage(canvaimage2)
	const img2 = await Canvas.loadImage(canvaimage)
	const bg = await Canvas.loadImage("https://i.ibb.co/ZK2X21z/drake.jpg")
	const cc = Canvas.createCanvas(bg.width, bg.height)
	const ctx = cc.getContext("2d")
	ctx.drawImage(bg, 0, 0, cc.width, cc.height)
	ctx.drawImage(img, cc.width / 2, 0, cc.width / 2, cc.width / 2)
	ctx.drawImage(img2, cc.width / 2, cc.width / 2, cc.width / 2, cc.width / 2)
	return Canvas.toBuffer()
}

async function wolverine(canvaimage) {
	const img = await Canvas.loadImage(canvaimage)
	const bg = await Canvas.loadImage("https://i.ibb.co/jvvCmdk/wolverine.png")
	const cc = Canvas.createCanvas(bg.width, bg.height)
	const ctx = cc.getContext("2d")
	ctx.drawImage(img, 160, 460, 380, 380)
	ctx.drawImage(bg, 0, 0, cc.width, cc.height)
	return cc.toBuffer()
}

async function jooj(canvaimage) {
	const img = await Canvas.loadImage(canvaimage)
	const cc = Canvas.createCanvas(img.width, img.height)
	const ctx = cc.getContext("2d")
	ctx.translate(cc.width, 0)
	ctx.scale(-1, 1)
	ctx.drawImage(img, 0, 0, cc.width, cc.height)
	ctx.translate(cc.width, 0)
	ctx.scale(-1, 1)
	ctx.drawImage(img, 0, 0, img.width / 2, img.height, 0, 0, cc.width / 2, cc.height)
	return cc.toBuffer()
}

async function ojjo(canvaimage) {
	const img = await Canvas.loadImage(canvaimage)
	const cc = Canvas.createCanvas(img.width, img.height)
	const ctx = cc.getContext("2d")
	ctx.drawImage(img, cc.width / 2, 0, cc.width, cc.height)
	ctx.translate(cc.width, 0)
	ctx.scale(-1, 1)
	ctx.drawImage(img, cc.width / 2, 0, cc.width, cc.height)
	return cc.toBuffer()
}

async function medal(personOne, personTwo) {
	const background = await Canvas.loadImage("https://i.ibb.co/XbLtr51/obama.jpg")
	var avatar1 = await Canvas.loadImage(personOne)
	var avatar2 = await Canvas.loadImage(personTwo)
	const memer = Canvas.createCanvas(760, 481)
	const context = memer.getContext("2d")
	context.drawImage(background, 5, 5, memer.width - 10, memer.height - 10)
	context.lineWidth = 10
	context.strokeRect(0, 0, memer.width, memer.height)
	context.drawImage(avatar1, 160, 96, 200, 200)
	context.drawImage(avatar2, 380, 10, 200, 200)
	return memer.toBuffer()
}

async function ttp(size, color, txt) {
	let starttxt = txt.length < 10 ? 180 : 30
	var ttp = Canvas.createCanvas(512, 512)
	var ctx = ttp.getContext("2d")
	ctx.font = `${size}px sans`
	ctx.fillStyle = color.slice(1)
	ctx.fillText(txt.toUpperCase().replace(/(.{1,20})/g, "$1\n"), starttxt, starttxt)
	return ttp.toBuffer()
}

async function welcome(name, disc, member, avatar) {
	const welcomeCard = new canvacord.Welcomer()
  .setUsername(name)
  .setDiscriminator(disc)
 .setAvatar(avatar)
 .setColor("title", "#68048a")
 .setColor("username-box", "#68048a")
.setColor("discriminator-box", "#68048a")
.setColor("message-box", "#68048a")
.setColor("border", "#34068a")
.setColor("avatar", "#55edd1")
.setBackgroundImage("https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4=")
.setMemberCount(member)
let attachment = await welcomeCard.build()
	let img = await attachment.toAttachment().then(d => d.toBuffer())
	return img
}

// Por Pedro B. - Daqui até...
async function man1(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/bolsonaro/template.png")
	let tv = await Canvas.loadImage(canvaimage)
	let bolsoCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = bolsoCanvas.getContext("2d")
	scaleToFill(blurredBG, 275, 155, 107, 8, ctx)
	scaleToFit(tv, 275, 155, 107, 8, ctx)
	ctx.drawImage(bg, 0, 0, bolsoCanvas.width, bolsoCanvas.height)
	return bolsoCanvas.toBuffer()
}

async function man2(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/bolso_frame/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let bolsoCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = bolsoCanvas.getContext("2d")
	scaleToFill(blurredBG, 100, 120, 300, 36, ctx)
	scaleToFit(frame, 100, 120, 300, 36, ctx)
	ctx.drawImage(bg, 0, 0, bolsoCanvas.width, bolsoCanvas.height)
	return bolsoCanvas.toBuffer()
}

async function man3(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/bolsonaro2/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let bolsoCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = bolsoCanvas.getContext("2d")
	scaleToFill(blurredBG, 222, 130, 213, 35, ctx)
	scaleToFit(frame, 222, 130, 213, 35, ctx)
	ctx.drawImage(bg, 0, 0, bolsoCanvas.width, bolsoCanvas.height)
	return bolsoCanvas.toBuffer()
}

async function sponge(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/bob_burning_paper/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let spongeCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = spongeCanvas.getContext("2d")
	scaleToFill(blurredBG, 102, 135, 27, 36, ctx)
	scaleToFit(frame, 102, 135, 27, 36, ctx)
	ctx.drawImage(bg, 0, 0, spongeCanvas.width, spongeCanvas.height)
	return spongeCanvas.toBuffer()
}

async function briggs(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/briggs_cover/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let briggsCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = briggsCanvas.getContext("2d")
	scaleToFill(blurredBG, 165, 200, 218, 67, ctx)
	scaleToFit(frame, 165, 200, 218, 67, ctx)
	ctx.drawImage(bg, 0, 0, briggsCanvas.width, briggsCanvas.height)
	return briggsCanvas.toBuffer()
}

async function ednaldoBandeira(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/ednaldo_bandeira/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let ednaldoLindoEuTeAmoCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = ednaldoLindoEuTeAmoCanvas.getContext("2d")
	scaleToFill(blurredBG, 425, 333, 46, 178, ctx)
	scaleToFit(frame, 425, 333, 46, 178, ctx)
	ctx.drawImage(bg, 0, 0, ednaldoLindoEuTeAmoCanvas.width, ednaldoLindoEuTeAmoCanvas.height)
	return ednaldoLindoEuTeAmoCanvas.toBuffer()
}

async function ednaldoTV(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/ednaldo_tv/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let WeLoveEdnaldoPereiraCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = WeLoveEdnaldoPereiraCanvas.getContext("2d")
	scaleToFill(blurredBG, 142, 105, 270, 21, ctx)
	scaleToFit(frame, 142, 105, 270, 21, ctx)
	ctx.drawImage(bg, 0, 0, WeLoveEdnaldoPereiraCanvas.width, WeLoveEdnaldoPereiraCanvas.height)
	return WeLoveEdnaldoPereiraCanvas.toBuffer()
}

async function markSuckerberg(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/mark_meta/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let markinCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = markinCanvas.getContext("2d")
	scaleToFill(blurredBG, 412, 300, 513, 88, ctx)
	scaleToFit(frame, 412, 300, 513, 88, ctx)
	ctx.drawImage(bg, 0, 0, markinCanvas.width, markinCanvas.height)
	return markinCanvas.toBuffer()
}

async function paper(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/passing_paper/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let paperCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = paperCanvas.getContext("2d")
	scaleToFill(blurredBG, 135, 101, 178, 216, ctx)
	scaleToFit(frame, 135, 101, 178, 216, ctx)
	ctx.drawImage(bg, 0, 0, paperCanvas.width, paperCanvas.height)
	return paperCanvas.toBuffer()
}

async function pepe(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/pepe_dream/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let pepeCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = pepeCanvas.getContext("2d")
	scaleToFill(blurredBG, 100, 100, 81, 1, ctx)
	scaleToFit(frame, 100, 100, 81, 1, ctx)
	ctx.drawImage(bg, 0, 0, pepeCanvas.width, pepeCanvas.height)
	return pepeCanvas.toBuffer()
}

async function shotTV(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/rip_tv/rip_tv_og.png")
	let frame = await Canvas.loadImage(canvaimage)
	let shotCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = shotCanvas.getContext("2d")
	scaleToFill(blurredBG, 155, 108, 558, 66, ctx)
	scaleToFit(frame, 155, 108, 558, 66, ctx)
	ctx.drawImage(bg, 0, 0, shotCanvas.width, shotCanvas.height)
	return shotCanvas.toBuffer()
}

async function romero(canvaimage) {
	let imageresponse = await axios({
		url: canvaimage,
		responseType: "arraybuffer"
	})
	let buffffer = Buffer.from(imageresponse.data, "binary")
	let blurredSharpBG = await sharp(buffffer).blur(5).modulate({
		brightness: 0.5
	}).toBuffer()
	let blurredBG = await Canvas.loadImage(blurredSharpBG)
	let bg = await Canvas.loadImage("https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Memes/romero_britto/template.png")
	let frame = await Canvas.loadImage(canvaimage)
	let romeroCanvas = Canvas.createCanvas(bg.width, bg.height)
	let ctx = romeroCanvas.getContext("2d")
	scaleToFill(blurredBG, 186, 276, 16, 18, ctx)
	scaleToFit(frame, 186, 276, 16, 18, ctx)
	ctx.drawImage(bg, 0, 0, romeroCanvas.width, romeroCanvas.height)
	return romeroCanvas.toBuffer()
}

// ...Aqui.
async function imgEditor(canvaimage, propX, propY, square) {
	let frame = await Canvas.loadImage(canvaimage)
	propX = propX == 0 ? frame.width : propX
	propY = propY == 0 ? frame.height : propY
	let imgEditor = Canvas.createCanvas(Math.max(frame.width, frame.height) * propX / propY, Math.max(frame.width, frame.height))
	let ctx = imgEditor.getContext("2d")
	scaleToFill(frame, Math.max(frame.width, frame.height) * propX / propY, Math.max(frame.width, frame.height), 0, 0, ctx)
	if (square) {
		let squareFrame = await Canvas.loadImage(imgEditor.toBuffer())
		let blurredSharpBG = await sharp(canvaimage).blur(5).modulate({
			brightness: 0.5
		}).toBuffer()
		let blurredBG = await Canvas.loadImage(blurredSharpBG)
		let imgEditorSquare = Canvas.createCanvas(Math.max(frame.width, frame.height), Math.max(frame.width, frame.height))
		let ctx2 = imgEditorSquare.getContext("2d")
		scaleToFill(blurredBG, Math.max(frame.width, frame.height), Math.max(frame.width, frame.height), 0, 0, ctx2)
		scaleToFit(squareFrame, Math.max(frame.width, frame.height) * propX / propY, Math.max(frame.width, frame.height), (Math.max(frame.width, frame.height) - Math.max(frame.width, frame.height) * propX / propY) / 2, 0, ctx2)
		return imgEditorSquare.toBuffer()
	}
	return imgEditor.toBuffer()
}
