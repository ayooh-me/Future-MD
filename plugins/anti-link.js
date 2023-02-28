const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    if (chat.antiLink && isGroupLink && !isAdmin) {
        await this.sendButton(m.chat, "*[ Link Detected ]*", author, ["off antilinktik", "/disable antilinktik"], m)
		if (!isBotAdmin) return m.reply("Bot bukan *Admin*")
		if (isAdmin) return m.reply("Kemungkinan anda adalah *Admin* !")
		if (isBotAdmin) {
			user.warn += 1
			user.banned = true
			return this.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					fromMe: false,
					id: bang,
					participant: hapus
				}
			})
			return this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
		}
    }
    return !0
}