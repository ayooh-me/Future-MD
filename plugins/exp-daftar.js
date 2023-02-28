import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, conn, usedPrefix, command }) {
await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = await conn.getName(m.sender)
	let namamu = namae ? namae : 'Gapunya Nama'
	
	const sections = [
	{
	title: htjava + " 𝗣𝗶𝗹𝗶𝗵 𝗨𝗺𝘂𝗿 𝗞𝗮𝗺𝘂 " + htjava,
	rows: [
	    {title: " A C A K ", rowId: '.daftar ' + namamu + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " 𝗦𝗨𝗗𝗔𝗛 𝗧𝗨𝗔 " + htka,
	rows: [
	    {title: emojis + " 30 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.30 '},
	    {title: emojis + " 29 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.29 '},
	    {title: emojis + " 28 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.28 '},
	{title: emojis + " 27 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.27 '},
	{title: emojis + " 26 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.26 '},
	{title: emojis + " 25 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.25 '},
	{title: emojis + " 24 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.24 '},
	{title: emojis + " 23 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.23 '},
	{title: emojis + " 22 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.22 '},
	{title: emojis + " 21 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.21 '}
	]
    },
    {
	title: htki + " 𝗠𝗔𝗦𝗜𝗛 𝗠𝗨𝗗𝗔 " + htka,
	rows: [
	    {title: emojis + " 20 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.20 '},
	    {title: emojis + " 19 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.19 '},
	    {title: emojis + " 18 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.18 '},
	{title: emojis + " 17 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.17 '},
	{title: emojis + " 16 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.16 '},
	{title: emojis + " 15 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.15 '},
	{title: emojis + " 14 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.14 '},
	{title: emojis + " 13 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.13 '},
	{title: emojis + " 12 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.12 '},
	{title: emojis + " 11 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.11 '},
	{title: emojis + " 10 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.10 '},
	{title: emojis + " 9 ᴛᴀʜᴜɴ", rowId: '.daftar ' + namamu + '.9 '}
	]
    },
]

const listMessage = {
  text: 'Please select your age at the bottom button...',
  footer: `*ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔> Mau kustom nama? ketik *${usedPrefix + command} nama.umur*\nEx. ${usedPrefix + command} ${conn.getName(m.sender)}|18`,
  title: htki + ' ʀᴇɢɪsᴛᴇʀ ' + htka,
  buttonText: "Click Here !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw '*Gak boleh!*,\nTua amat dah 🗿'
  if (age < 5) throw '*Gak boleh!*,\nBanyak pedo 🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `*${htki} ᴜsᴇʀs ${htka}*
${dmenub} *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
${dmenub} *ɴᴀᴍᴇ:* ${name}
${dmenub} *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
${dmenub} *sɴ:* ${sn}
${dmenuf}

ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.) ${cmenua}
`
    conn.send2ButtonDoc(m.chat, cap, author, 'ᴍᴇɴᴜ', '.menu', 'ᴅᴏɴᴀsɪ', '.donasi', fakes, adReplyS)
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i

export default handler