import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let chat = global.db.data.chats[m.chat]
var arrlist = [
"animal",
"animalears",
"anusview",
"ass",
"barefoot",
"bed",
"bell",
"bikini",
"blonde",
"bondage",
"bra",
"breasthold",
"breasts",
"bunnyears",
"bunnygirl",
"chain",
"closeview",
"cloudsview",
"cum",
"dress",
"drunk",
"elbowgloves",
"erectnipples",
"fateseries",
"fingering",
"flatchest",
"food",
"foxgirl",
"gamecg",
"genshin",
"glasses",
"gloves",
"greenhair",
"hatsunemiku",
"hcatgirl",
"headband",
"headdress",
"headphones",
"hentaimiku",
"hentaivideo",
"hloli",
"hneko",
"hololove",
"horns",
"inshorts",
"japanesecloths",
"necklace",
"nipples",
"nobra",
"nsfwbeach",
"nsfwbell",
"nsfwdemon",
"nsfwidol",
"nsfwmaid",
"nsfwmenu",
"nsfwvampire",
"nude",
"openshirt",
"pantyhose",
"pantypull",
"penis",
"pinkhair",
"ponytail",
"pussy",
"ribbons",
"schoolswimsuit",
"schooluniform",
"seethrough",
"sex",
"sex2",
"sex3",
"shirt",
"shirtlift",
"skirt",
"spreadlegs",
"spreadpussy",
"squirt",
"stockings",
"sunglasses",
"swimsuit",
"tail",
"tattoo",
"tears",
"thighhighs",
"thogirls",
"topless",
"torncloths",
"touhou",
"twintails",
"uncensored",
"underwear",
"vocaloid",
"weapon",
"wet",
"white",
"whitehair",
"wings",
"withflowers",
"withgun",
"withpetals",
"withtie",
"withtree",
"wolfgirl",
"yuri"
]
var listnya = arrlist.map((v, index) => { return `[ ${++index} ] ${usedPrefix + command} ${v}` }).join('\n')
let nah = `${htki} *L I S T* ${htka}
_Example: ${usedPrefix + command} yuri_

${listnya}`
if (!arrlist.includes(text)) throw nah
if (chat.nsfw == false) {
return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ', botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
} else if (chat.nsfw == true) {
try {
        let ani = await fetch('https://fantox-apis.vercel.app/' + text)
        let mek = await ani.json()
        return conn.sendButtonImg(m.chat, mek.url, author, 'Nih.jpg', '🔄 Next 🔄', usedPrefix + command + " " + text, fakes, adReply)
        } catch {
        throw eror
        }
        }
}
handler.command = handler.help = ["fantox"]
handler.tags = ['anime']
export default handler