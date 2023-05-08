
    async function handler(m, { isAdmin, isOwner }) {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
    if (!m.quoted) throw 'balas pesannya!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, {quoted: m, contextInfo:{"forwardingScore": 1000, "isForwarded": true}})
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i

export default handler 