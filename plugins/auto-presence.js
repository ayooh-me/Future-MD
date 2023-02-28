let handler = m => m
handler.all = async function (m) {
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text.startsWith('.') || m.text.startsWith('#') || m.text.startsWith('!')) {
    /* Mengetik */
    let ran = ['unavailable', 'available', 'composing', 'recording', 'paused']
	return this.sendPresenceUpdate(ran.getRandom(), m.chat)
    }
    if (m.text.startsWith('.') || m.text.startsWith('#') || m.text.startsWith('!')) {
    /* MeReact */
	return this.sendMessage(m.chat, {
          react: {
            text: '⌛',
            key: m.key,
          }})
          }
  }
}
export default handler