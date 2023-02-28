let handler = async (m, { conn, usedPrefix, text, command, args, isOwner, isAdmin, isROwner }) => {
	let pc = (Object.entries(await conn.chats).map(([nama, isi]) => { return { nama, ...isi} })).filter(v => !v.nama.endsWith('g.us'))
    let listSections = []
	Object.values(pc).map((i, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + i.name, [
          ['More Information', usedPrefix + command + ' gw ' + index, '']
        ]])
	})
  let type = (args[0] || '').toLowerCase()
  switch (type) {
      case 'gw':
      let i = args[1]
      let pp = await conn.profilePictureUrl(pc[i].id, 'image')
      let str = `*${dmenut}* ${i}
*${dmenub} Name :* ${pc[i].name}
*${dmenub} ID :* ${'@' + pc[i].id.replace(/@.+/, '')}
*${dmenub} Presences :* ${pc[i].presences ? pc[i].presences : 'Tidak Diketahui'}
${dmenuf}\n\n`
      await conn.sendButtonImg(m.chat, pp ? pp : logo, str, author, 'B A C K', '.menu', fakes, adReply)
       break
    default:
      if (!/[01]/.test(command)) return conn.sendList(m.chat, htki + ' 📺 Private List 🔎 ' + htka, `⚡ Silakan pilih Private List di tombol di bawah...\n*Teks yang anda kirim:* ${text ? text : 'Kosong'}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Private List Disini ☂️`, listSections, m)
      throw false
  }
}
handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^listpc|pclist|daftarpc|pc$/i

export default handler