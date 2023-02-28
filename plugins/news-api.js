import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Naruto`
  
  if (command == 'newsapi') {
  // All countries
// length 252
var arr = [
"AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","XK","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","CS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"
];
var lower = arr.map(v => {
  return v.toLowerCase();
});

// 👇️
if (!lower.includes(text)) throw "input country code"
let f = await fetch(`https://newsapi.org/v2/top-headlines?country=${text.toLowerCase()}&apiKey=916be7f6341f4cd3991d4c3937707d30`)
let xx = await f.json()
let dapet = xx.articles
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nAuthor: ' + v.author + '\nSource: ' + v.source.name + '\nDescription: ' + v.description + '\nLink: ' + v.url + '\nThumbnail: ' + v.urlToImage + '\nPublished: ' + v.publishedAt,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'news') {
if (!args[0]) throw `Contoh:
${usedPrefix + command} category
*List:*
• antara
• bbc
• cnbc
• cnn
• daily
• detik
• fajar
• idn
• indozone
• inews
• kompas
• kontan
• liputan6
• merdeka
• metro
• okezone
• republika
• sindo
• tempo
• tribun
• viva`
let res = await axios('https://violetics.pw/api/news/' + args[0] + '?apikey=beta')
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.category,
		description: '\nDate: ' + v.date + '\nNews: ' + v.news + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['newsapi', 'news'].map(v => v + ' <app>')
handler.command = ['newsapi', 'news']
handler.tags = ['internet']

export default handler