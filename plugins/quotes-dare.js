import { dare, truth, bucin } from '@bochilteam/scraper'

let handler = async function (m, { conn, text, command, usedPrefix }) {
if (command == 'dare') {
await conn.sendButton(m.chat, await dare(), author, [
    ['Dare', `${usedPrefix}dare`], 
    ['Truth', `${usedPrefix}truth`]
], m)
}
if (command == 'truth') {
await conn.sendButton(m.chat, await truth(), author, [
    ['Dare', `${usedPrefix}dare`], 
    ['Truth', `${usedPrefix}truth`]
], m)
}
if (command == 'bucin') {
await conn.sendButton(m.chat, await bucin(), author, [
    ['Dare', `${usedPrefix}dare`], 
    ['Truth', `${usedPrefix}truth`]
], m)
}
}
handler.command = handler.help = ['dare', 'truth', 'bucin']
handler.tags = ['quotes', 'fun']

export default handler
