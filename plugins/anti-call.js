const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m, {
	conn,
	text,
	usedPrefix,
	command,
	participants
}) => {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let chat = global.db.data.chats[m.chat]
	if(chat.antiCall) return
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		let cap = 'Kamu Di banned + block + warn + kick oleh bot karena telah melanggar aturan bot\n\n*📮Dilarang menelepon Bot!*'
        await conn.send2ButtonDoc(m.chat, cap, author, '🔖 Matikan Fitur', '.off anticall', 'ℹ️ Menu', '.menu', null, adReply)
		await delay(1000)
		global.db.data.users[ban].banned = true
        global.db.data.users[ban].warning = 1
		await conn.updateBlockStatus(m.chat, "block")
		await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
	}
}




































/*

JANGAN DI HAPUS!!


Made By FokusDotId (Fokus ID)

https://github.com/FokusDotId

*/