import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, {
    match,
    usedPrefix
}) {
    if ((usedPrefix = (match[0] || '')[0])) {
        let noPrefix = m.text.replace(usedPrefix, '')
        let args = noPrefix.trim().split` `.slice(1)
        let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (help.includes(noPrefix)) return
        let mean = didyoumean(noPrefix, help)
        let sim = similarity(noPrefix, mean)
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
        let name = await this.getName(who)
        let caption = `👋 Hai ${name} @${who.split("@")[0]},\nApakah yang kamu maksud:\n*${usedPrefix + mean}*\nSimilarity: *${Number(sim * 100).toFixed(2)}%*`
        /* Button Section */
        if (mean) this.sendButton(m.chat, caption, author, null, [
            ["✅ Benar️", usedPrefix + mean],
            ["❌ Salah", usedPrefix + '?']
        ], m, {
            mentions: this.parseMention(caption)
        })
    }
}
export const disabled = false