import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) throw `Contoh:\n${usedPrefix + command} 1\n\nMaka hasilnya adalah surah Al-Fatihah ayat beserta audionya, dan ayatnya 1 aja`
    let f = await fetch(`https://api.alquran.cloud/v1/surah/${text}/ar.alafasy`)
        let xx = await f.json()
        let str = xx.data.ayahs
    
    let listSections = []
    Object.values(str).map((v, index) => {
    let cp = `*Number:* ${v.number}
*Number In Surah:* ${v.numberInSurah}
*Juz:* ${v.juz}
*Manzil:* ${v.manzil}
*Page:* ${v.page}
*Ruku:* ${v.ruku}
*Hizb Quarter:* ${v.hizbQuarter}
`
        listSections.push(["Num. " + ++index, [
            [v.text + "\n\n", usedPrefix + "get " + v.audio, cp]
        ]])
    })
    return conn.sendList(m.chat, htki + " 🗒️ List Ayat " + htka, "⚡ Silakan pilih ayat yang anda mau.", author, "[ Ayat ]", listSections, m)
}
handler.help = ['alquran'].map(v => v + ' <no surah>')
handler.tags = ['quran']
handler.command = /^(al)?quran$/i

export default handler
