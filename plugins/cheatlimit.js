import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let cit = ['money',
'limit',
'level',
'limit',
'exp',
'potion',
'aqua',
'trash',
'wood',
'rock',
'string',
'iron',
'diamond',
'emerald',
'gold',
'coal',
'common',
'uncommon',
'mythic',
'legendary',
'foodpet',
'Fox',
'naga',
'pet',
'anggur',
'apel',
'batu',
'berlian',
'bibitanggur',
'bibitapel',
'bibitjeruk',
'bibitmangga',
'bibitpisang',
'botol',
'centaur',
'eleksirb',
'emasbatang',
'emasbiasa',
'exp',
'gardenboc',
'gardenboxs',
'griffin',
'healtmonster',
'jeruk',
'kaleng',
'kardus',
'kayu',
'ketake',
'koinexpg',
'kucing',
'kuda',
'kyubi',
'makanancentaur',
'makanangriffin',
'makanankyubi',
'makanannaga',
'makananpet',
'makananphonix',
'mangga',
'pancingan',
'phonix',
'pisang',
'rubah',
'sampah',
'serigala',
'sword',
'tiketcoin',
'umpan']

let user = global.db.data.users[m.sender]

    let listSections = []
	Object.keys(cit).map((v, index) => {
	listSections.push([htki + 'Cheat Num. ' + ++index + ' ' + htka, [
          ['Infinity ' + cit[v], usedPrefix + command +' cheat ' + cit[v], '\n⌚ *Desc:* Untuk ngechit ' + cit[v]]
        ]])
	})
	if (!args[0]) return conn.sendList(m.chat, htki + ' 📺 Cheat Infinity 🔎 ' + htka, `⚡ Silakan pilih Cheat di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Cheat Disini ☂️`, listSections, m)
	if (args[0] == 'cheat') {
		await m.reply(`*Succes Cheat Infinity ${args[1]}*`)
		user[args[1]] = Infinity
		}
}
handler.help = ['ngechit'].map(v => v + ' *hehe..*')
handler.tags = ['xp']
handler.command = /^(ngech(ea|i)t|c(((he(ater|t)|iter)|(hea|i)t)|hit))$/i
handler.private = true

export default handler
