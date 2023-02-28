
let handler = async(m, { conn, text, usedPrefix, command }) => {
let krtu = htki + 'Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ' + htka + '\n' + dmenub + ' *Nama:*\n' + dmenub + ' *Umur:*\n' + dmenub + ' *Alamat:*\n' + dmenub + ' *Hobi:*\n' + dmenub + ' *Pasangan:*\n' + dmenuf
return conn.sendButtonDoc(m.chat, krtu, wm, 'MENU', '.menu', m, fakeig) // Tambah sendiri kalo mau
}
handler.help = ['intro']
handler.command = /^(intro)$/i

export default handler

