/* Recode By Wudysoft */

import fetch from "node-fetch"
import crypto from "crypto"
import util from "util"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args,
    text
}) => {
var domain = "https://dylxdexxy.panel-store.tech" // Isi Domain Lu
var apikey = 'ptla_uaPladbkwlf1AGiOJDSTSoSy5DX22KGoxc0l2Owp6eK' // Isi Apikey Plta Lu
var capikey = 'ptlc_ObNpcJtDTM2RmxhX9qkOVudO29qbLean0WKI9aTJaRD' // Isi Apikey Pltc Lu

if (command == "listusr") {
if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

let res = await f.json();
let Usrs = res.data
let sections = []
for (let user of Usrs) {
let u = user.attributes
let obj = {
title: author,
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${usedPrefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: author,
rows: [
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listusr 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listusr 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listusr 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listusr 5`, description: 'Page 5' },
]
})
}
}
await conn.sendMessage(m.chat, {
text: "Berikut list user Vinseacha",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: author,
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}

if (command == "addusr") {

if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await conn.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}

*Password telah dikirim di private chat @${u.split`@`[0]}*`, mentions:[u],
})
conn.sendMessage(u, { text: `*===[ DATA AKUN PANEL ]===*\n
📡ID: ${user.id}
📬EMAIL: ${user.uuid}
👤USERNAME: ${user.username}
🔐PASSWORD: ${password.toString()}
🖥️LOGIN: ${domain}
📊TOTURIAL : youtu.be/3s9CLUWjIMI\n
=====================================
        *☢️WARNING☢️*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================`,
})
}

if (command == "delusr") {

if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}

if (command == "detusr") {
if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
let u = res.attributes
m.reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}

if (command == "listsrv") {
if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: author,
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${usedPrefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: author,
rows: [
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listsrv 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listsrv 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listsrv 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${usedPrefix}listsrv 5`, description: 'Page 5' },
]
})
}
}
await conn.sendMessage(m.chat, {
text: "Berikut list server Vinseacha",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: author,
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}

if (command == "addsrv") {

if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${usedPrefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}

if (command == "delsrv") {

if (!isOwner) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}

if (command == "detsrv") {

let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return m.reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
m.reply(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${s.created_at}`)
}

}
handler.command = handler.help = [
"addsrv",
"addusr",
"delsrv",
"delusr",
"detsrv",
"detusr",
"listsrv",
"listusr"
]
handler.tags = ["owner"]

export default handler

function format(...args) {
	return util.format(...args)
}