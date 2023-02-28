let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
${htki} *B A N K  U S E R* ${htka}
${dmenub} 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
${dmenub} 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
${dmenub} 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
${dmenub} 💹 *Money:* ${user.money} 💲
${dmenub} 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
${dmenub} 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
${dmenub} 📑 *Registered:* ${user.registered ? 'Yes':'No'}
${dmenuf}
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank(cek)?|cekbank)$/i

handler.register = false
export default handler